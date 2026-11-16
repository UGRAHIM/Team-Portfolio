"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Pause, Play, Route, Square } from "lucide-react";

type Kind = "type" | "pop" | "wipe";
// state: 0 waiting off-screen, 1 queued (in view), 2 being built, 3 built
type Item = { el: HTMLElement; kind: Kind; state: 0 | 1 | 2 | 3; texts: { node: Text; full: string }[]; total: number; shown: number };
type Phase = "move" | "drag" | "fill" | "fade";
type Agent = { el: HTMLDivElement; x: number; y: number; fx: number; fy: number; item: Item | null; phase: Phase; t0: number; dur: number; wire: HTMLDivElement | null };

const NAMES = ["Scout", "Layout", "Typeset", "Motion", "QA", "Deploy", "Copy", "Lint", "Index", "Render", "Palette", "Review"];
const COLORS = ["#2b8ae6", "#f59e0b", "#22c55e", "#06b6d4", "#60a5fa", "#a3e635", "#f472b6", "#e4e4e7", "#fb923c", "#2dd4bf", "#facc15", "#94a3b8"];
const MAX_BUSY = 6;
const FILL_MS = { pop: 550, wipe: 800 };
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const robot = (c: string) =>
  `<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><line x1="7" y1="1.5" x2="7" y2="4" stroke="#09090b" stroke-width="1.2"/><circle class="ant" cx="7" cy="1.6" r="1.4" fill="#09090b"/><rect x="1.5" y="4" width="11" height="8.5" rx="2.2" fill="#09090b"/><circle class="eye" cx="5" cy="8.2" r="1.3" fill="${c}"/><circle class="eye" cx="9" cy="8.2" r="1.3" fill="${c}"/></svg>`;
const arrow = (c: string) =>
  `<svg class="arrow" width="18" height="22" viewBox="0 0 18 22" aria-hidden="true"><path d="M1.5 1.5v16.5l4.6-4.4 3.3 7.2 3-1.3-3.3-7.1h6.4z" fill="${c}" stroke="#fff" stroke-width="1.3" stroke-linejoin="round"/></svg>`;

const store = {
  get: (k: string) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k: string, v: string) => { try { localStorage.setItem(k, v); } catch {} },
};

// Read once per page load so React StrictMode's double effect run doesn't lose it.
let tourPending: boolean | undefined;

// Fresh load at the top of the page, dropping ?agents= and #hash.
function reloadClean() {
  history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
  location.replace(location.pathname);
}

export default function Agents() {
  const layer = useRef<HTMLDivElement>(null);
  const ctl = useRef({ paused: false, finishAll: () => {}, stopTour: () => {} });
  const [booting, setBooting] = useState(true);
  const [on, setOn] = useState(true);
  const [paused, setPaused] = useState(false);
  const [done, setDone] = useState(false);
  const [touring, setTouring] = useState(false);
  const live = useRef({ on, done, touring });
  live.current = { on, done, touring };

  // ---------------- build engine ----------------
  useEffect(() => {
    const root = document.documentElement;
    const lay = layer.current!;
    if (!root.classList.contains("build")) {
      setOn(false);
      setBooting(false);
      setDone(true);
      return;
    }

    const items: Item[] = Array.from(document.querySelectorAll<HTMLElement>("[data-build]")).map((el) => ({
      el, kind: el.dataset.build as Kind, state: 0, texts: [], total: 0, shown: -1,
    }));
    const byEl = new Map(items.map((i) => [i.el as Element, i]));
    const agents: Agent[] = [];
    let raf = 0, clock = 0, last = 0, tick = 0, finished = false;
    let io: IntersectionObserver | undefined;

    const rect = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return { x: r.left + scrollX, y: r.top + scrollY, w: r.width, h: r.height };
    };
    const finish = (it: Item) => {
      if (it.state === 3) return;
      for (const t of it.texts) t.node.data = t.full;
      it.el.style.minHeight = "";
      it.el.classList.remove("is-building");
      it.el.classList.add("is-built");
      it.state = 3;
    };
    const release = (a: Agent) => { a.wire?.remove(); a.wire = null; a.item = null; };
    const instant = (it: Item) => {
      const a = agents.find((g) => g.item === it);
      if (a) release(a);
      finish(it);
    };

    const complete = () => {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(raf);
      io?.disconnect();
      items.forEach(instant);
      root.classList.remove("build", "paused");
      lay.classList.add("out");
      setTimeout(() => { lay.innerHTML = ""; lay.classList.remove("out"); }, 600);
      setDone(true);
      setPaused(false);
      ctl.current.paused = false;
    };
    ctl.current.finishAll = complete;

    const start = (a: Agent, it: Item) => {
      const r = rect(it.el);
      it.state = 2;
      a.item = it; a.phase = "move"; a.t0 = clock; a.fx = a.x; a.fy = a.y;
      a.dur = clamp(Math.hypot(r.x - a.x, r.y - a.y) * 0.7, 350, 900);
      const w = document.createElement("div");
      w.className = "wire";
      w.style.display = "none";
      w.innerHTML = `<i></i><i></i><i></i><i></i><b>${it.el.tagName.toLowerCase()} · ${it.kind}</b>`;
      lay.append(w);
      a.wire = w;
    };

    const beginFill = (a: Agent, it: Item) => {
      a.phase = "fill"; a.t0 = clock;
      it.el.classList.add("is-building");
      if (it.kind === "type") {
        it.el.style.minHeight = `${it.el.offsetHeight}px`; // keep layout steady while text is empty
        const walk = document.createTreeWalker(it.el, NodeFilter.SHOW_TEXT);
        for (let n = walk.nextNode(); n; n = walk.nextNode()) {
          const node = n as Text;
          it.texts.push({ node, full: node.data });
          it.total += node.data.length;
          node.data = "";
        }
        a.dur = clamp(it.total * 22, 300, 1200);
      } else a.dur = FILL_MS[it.kind];
    };

    const typeTo = (it: Item, n: number) => {
      if (n === it.shown) return;
      it.shown = n;
      let left = n;
      for (const t of it.texts) {
        t.node.data = t.full.slice(0, clamp(left, 0, t.full.length));
        left -= t.full.length;
      }
    };

    const step = (a: Agent) => {
      const it = a.item;
      if (it) {
        const r = rect(it.el);
        const t = clamp((clock - a.t0) / a.dur, 0, 1);
        const e = ease(t);
        const w = a.wire!;
        if (a.phase === "move") {
          a.x = a.fx + (r.x - a.fx) * e;
          a.y = a.fy + (r.y - a.fy) * e;
          if (t === 1) { a.phase = "drag"; a.t0 = clock; a.dur = 420; w.style.display = "block"; }
        } else {
          const k = a.phase === "drag" ? e : 1;
          const bw = Math.max(r.w * k, 2), bh = Math.max(r.h * k, 2);
          w.style.transform = `translate3d(${r.x}px,${r.y}px,0)`;
          w.style.width = `${bw}px`;
          w.style.height = `${bh}px`;
          a.x = r.x + bw;
          a.y = r.y + bh;
          if (a.phase === "drag") {
            if (t === 1) beginFill(a, it);
          } else if (a.phase === "fill") {
            if (it.kind === "type") typeTo(it, Math.round(it.total * t));
            if (t === 1) { finish(it); a.phase = "fade"; a.t0 = clock; a.dur = 220; }
          } else {
            w.style.opacity = String(1 - t);
            if (t === 1) release(a);
          }
        }
      }
      a.el.style.transform = `translate3d(${a.x}px,${a.y}px,0)`;
    };

    const frame = (now: number) => {
      const dt = last ? Math.min(now - last, 50) : 16;
      last = now;
      if (!ctl.current.paused) {
        clock += dt;
        // anything scrolled past (or display:none) appears instantly
        if (++tick % 6 === 0)
          for (const it of items)
            if (it.state < 3 && (!it.el.getClientRects().length || it.el.getBoundingClientRect().bottom < 0)) instant(it);
        // hand queued items to free agents, in reading order
        let busy = agents.filter((a) => a.item).length;
        for (const it of items) {
          if (busy >= MAX_BUSY) break;
          if (it.state !== 1) continue;
          const free = agents.filter((a) => !a.item);
          if (!free.length) break;
          const r = rect(it.el);
          free.sort((p, q) => Math.hypot(p.x - r.x, p.y - r.y) - Math.hypot(q.x - r.x, q.y - r.y));
          start(free[0], it);
          busy++;
        }
        agents.forEach(step);
      }
      if (items.every((i) => i.state === 3) && agents.every((a) => !a.item)) return complete();
      raf = requestAnimationFrame(frame);
    };

    // Start once the team intro has finished (it fires "apx:enter"), or right away if it isn't playing.
    let bootTimer = 0;
    const boot = () => { bootTimer = window.setTimeout(bootAgents, 1100); };
    const w = window as Window & { APX_ENTERED?: boolean };
    const introPlaying = root.classList.contains("uo-wait") || root.classList.contains("uo-on");
    if (introPlaying && !w.APX_ENTERED) addEventListener("apx:enter", boot, { once: true });
    else boot();

    function bootAgents() {
      setBooting(false);
      for (const it of items) if (!it.el.getClientRects().length) finish(it);
      const n = innerWidth < 768 ? 6 : 10;
      for (let i = 0; i < n; i++) {
        const el = document.createElement("div");
        el.className = "agent";
        el.innerHTML = `${arrow(COLORS[i])}<span class="tag" style="background:${COLORS[i]}">${robot(COLORS[i])}${NAMES[i]}</span>`;
        lay.append(el);
        const a: Agent = { el, x: ((i + 0.5) / n) * innerWidth + scrollX, y: scrollY + innerHeight - 24, fx: 0, fy: 0, item: null, phase: "move", t0: 0, dur: 0, wire: null };
        a.el.style.transform = `translate3d(${a.x}px,${a.y}px,0)`;
        agents.push(a);
      }
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            const it = byEl.get(e.target);
            if (!it || it.state === 3) continue;
            if (e.isIntersecting && it.state === 0) it.state = 1;
            else if (!e.isIntersecting && e.boundingClientRect.bottom < 0) instant(it);
          }
        },
        { rootMargin: "0px 0px -6% 0px" },
      );
      items.forEach((it) => it.state < 3 && io!.observe(it.el));
      raf = requestAnimationFrame(frame);
    }

    return () => {
      removeEventListener("apx:enter", boot);
      clearTimeout(bootTimer);
      cancelAnimationFrame(raf);
      io?.disconnect();
      lay.innerHTML = "";
    };
  }, []);

  // ---------------- tour + keyboard ----------------
  useEffect(() => {
    const root = document.documentElement;
    let tourRaf = 0, waitTimer = 0;

    const stopTour = () => {
      cancelAnimationFrame(tourRaf);
      clearInterval(waitTimer);
      root.classList.remove("touring");
      removeEventListener("wheel", stopTour);
      removeEventListener("touchstart", stopTour);
      setTouring(false);
    };
    ctl.current.stopTour = stopTour;

    // Trapezoid velocity: ease in, steady, ease out.
    const runTour = () => {
      const D = document.documentElement.scrollHeight - innerHeight;
      if (D <= 0) return stopTour();
      const v = 0.11; // px per ms at cruise
      const ramp = Math.min(1800, D / v);
      const T = D / v + ramp;
      const t0 = performance.now();
      const frame = (now: number) => {
        const t = Math.min(now - t0, T);
        const s =
          t < ramp ? (v * t * t) / (2 * ramp)
          : t < T - ramp ? (v * ramp) / 2 + v * (t - ramp)
          : D - (v * (T - t) * (T - t)) / (2 * ramp);
        window.scrollTo({ top: s, behavior: "instant" });
        if (t < T) tourRaf = requestAnimationFrame(frame);
        else stopTour();
      };
      tourRaf = requestAnimationFrame(frame);
    };

    if (tourPending === undefined) {
      try { tourPending = sessionStorage.getItem("tour") === "1"; sessionStorage.removeItem("tour"); } catch { tourPending = false; }
    }
    if (tourPending) {
      history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
      setTouring(true);
      root.classList.add("touring");
      addEventListener("wheel", stopTour, { passive: true });
      addEventListener("touchstart", stopTour, { passive: true });
      const t0 = performance.now();
      waitTimer = window.setInterval(() => {
        const heroBuilt =
          !root.classList.contains("build") || !document.querySelector("#top [data-build]:not(.is-built)");
        if (heroBuilt && performance.now() - t0 > 1200) {
          clearInterval(waitTimer);
          setTimeout(runTour, 600);
        }
      }, 150);
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || (e.target as HTMLElement)?.isContentEditable) return;
      const k = e.key.toLowerCase();
      if (k === "escape" && live.current.touring) stopTour();
      else if (live.current.touring && ["arrowdown", "arrowup", "pagedown", "pageup", " ", "home", "end"].includes(k)) stopTour();
      else if (k === "t") tour();
      else if (k === "a") toggleAgents();
      else if (k === "p") togglePause();
    };
    addEventListener("keydown", onKey);
    return () => { removeEventListener("keydown", onKey); stopTour(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function togglePause() {
    const { on, done } = live.current;
    if (!on || done) return;
    const p = !ctl.current.paused;
    ctl.current.paused = p;
    document.documentElement.classList.toggle("paused", p);
    setPaused(p);
  }

  function toggleAgents() {
    if (live.current.on) {
      store.set("agents", "off");
      ctl.current.finishAll();
      setOn(false);
    } else {
      store.set("agents", "on");
      reloadClean();
    }
  }

  function tour() {
    if (live.current.touring) return ctl.current.stopTour();
    try { sessionStorage.setItem("tour", "1"); } catch {}
    reloadClean();
  }

  return (
    <>
      <div ref={layer} className="agents-layer" aria-hidden="true" />

      {booting && (
        <div className="boot fixed inset-0 z-[80] items-center justify-center bg-ink" role="status" aria-live="polite">
          <div className="w-56">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
              Booting build agents<span className="text-accent">_</span>
            </p>
            <div className="mt-3 h-px w-full overflow-hidden bg-zinc-800">
              <div className="bootbar h-full bg-accent" />
            </div>
          </div>
        </div>
      )}

      <div
        className="dock fixed bottom-4 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 p-1 shadow-2xl shadow-black transition-opacity"
        role="toolbar"
        aria-label="Animation controls"
      >
        <button type="button" className="dock-btn" onClick={togglePause} disabled={!on || done} aria-pressed={paused} title="Pause (P)">
          {paused ? <Play size={14} /> : <Pause size={14} />}
          {paused ? "Resume" : "Pause"}
          <kbd className="hidden sm:inline">P</kbd>
        </button>
        <button type="button" className="dock-btn" onClick={toggleAgents} aria-pressed={on} title="Agents on/off (A)">
          <Bot size={14} />
          Agents {on ? "on" : "off"}
          <kbd className="hidden sm:inline">A</kbd>
        </button>
        <button type="button" className="dock-btn" onClick={tour} title="Tour (T)">
          {touring ? <Square size={14} /> : <Route size={14} />}
          {touring ? "Stop" : "Tour"}
          <kbd className="hidden sm:inline">T</kbd>
        </button>
      </div>
    </>
  );
}
