import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import Agents from "./agents";

type Stat = { value: string; label: string };
type Project = { kicker: string; title: string; bullets: string[]; chips: string[]; links?: { label: string; href: string }[] };

// One per student. Every fact comes from that student's resume.
export type Person = {
  title: string; description: string;
  first: string; last: string; email: string; photo: string; location: string;
  role: string; intro: string; workIntro: string; contactLine: string;
  heroStats: Stat[]; workStats: Stat[]; projects: Project[]; tools: string[];
  record: { when: string; type: string; title: string; org: string; text: string }[];
  about: string[]; skills: string[]; principles: { title: string; text: string }[];
};

function SectionHead({ n, label, title }: { n: string; label: string; title: string }) {
  return (
    <div>
      <p data-build="type" className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {n} / {label}
      </p>
      <h2 data-build="wipe" className="mt-3 font-display text-5xl uppercase leading-[0.95] text-zinc-50 sm:text-7xl">
        {title}
      </h2>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div data-build="pop" className="flex flex-col-reverse rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
      <dt className="mt-1 font-mono text-[10px] uppercase leading-tight tracking-widest text-zinc-500">{label}</dt>
      <dd className="font-display text-4xl text-zinc-50 sm:text-5xl">{value}</dd>
    </div>
  );
}

export default function Portfolio({ p: person }: { p: Person }) {
  const { email: EMAIL, heroStats, workStats, projects, tools, record, skills, principles } = person;
  return (
    <>
      <Agents />

      <header className="absolute inset-x-0 top-0 z-30">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-8" aria-label="Main">
          <a data-build="pop" href="#top" aria-label="APEXION — back to top" className="block">
            <Image src="/logo.png" alt="APEXION logo" width={621} height={432} priority className="h-9 w-auto sm:h-10" />
          </a>
          <ul data-build="pop" className="hidden gap-7 font-mono text-xs uppercase tracking-widest text-zinc-400 md:flex">
            {["Work", "Stack", "Record", "About", "Contact"].map((s) => (
              <li key={s}>
                <a href={`#${s.toLowerCase()}`} className="transition-colors hover:text-zinc-50">{s}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {/* ---------------- HERO ---------------- */}
        <section id="top" className="relative isolate flex min-h-svh items-center overflow-hidden pt-24">
          <div aria-hidden="true" data-build="wipe" className="pointer-events-none absolute inset-x-0 top-[16%] -z-20 flex select-none justify-center lg:top-[10%]">
            <span className="metal font-display text-[19vw] leading-none lg:text-[17vw]">PORTFOLIO</span>
          </div>
          <div aria-hidden="true" className="absolute bottom-[-12%] left-1/2 -z-10 h-[55vh] w-[90vw] max-w-4xl -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(43,138,230,0.45),rgba(43,138,230,0.12)_55%,transparent)] blur-2xl" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-10 h-40 bg-[linear-gradient(to_bottom,transparent,#09090b)]" />

          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:px-8 lg:grid-cols-[1fr_minmax(0,1.15fr)_auto] lg:items-center">
            <div className="relative z-20 lg:pb-24">
              <p data-build="type" className="font-hand text-3xl text-zinc-300 sm:text-4xl">Hello, I&apos;m</p>
              <h1 data-build="type" className="mt-1 font-display text-6xl uppercase leading-[0.9] text-zinc-50 sm:text-8xl">
                {person.first}
                <br />
                {person.last}
              </h1>
              <p data-build="type" className="mt-4 font-mono text-sm uppercase tracking-[0.2em] text-accent">
                {person.role}
              </p>
              <p data-build="type" className="mt-4 max-w-sm text-zinc-400">
                {person.intro}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a data-build="pop" href="#work" className="btn">
                  View work <ArrowDownRight size={16} />
                </a>
                <p data-build="type" className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  <MapPin size={13} className="text-accent" /> Based in {person.location}
                </p>
              </div>
            </div>

            <div data-build="pop" className="relative z-0 self-end">
              <Image
                src={person.photo}
                alt={`Portrait of ${person.first} ${person.last}`}
                width={640}
                height={800}
                priority
                sizes="(min-width: 1024px) 40vw, 85vw"
                className="headshot mx-auto h-auto w-[85%] max-w-[460px] lg:w-full lg:max-w-[540px]"
              />
            </div>

            <dl className="relative z-20 grid grid-cols-3 gap-3 pb-10 lg:w-52 lg:grid-cols-1 lg:gap-4 lg:pb-24">
              {heroStats.map((s) => <Stat key={s.label} {...s} />)}
            </dl>
          </div>
        </section>

        {/* ---------------- WORK ---------------- */}
        <section id="work" className="mx-auto max-w-7xl scroll-mt-8 px-4 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHead n="01" label="Work" title="Work that ships" />
            <div className="lg:w-[30rem]">
              <p data-build="type" className="text-zinc-400">
                {person.workIntro}
              </p>
              <dl className="mt-5 grid grid-cols-3 gap-3">
                {workStats.map((s) => <Stat key={s.label} {...s} />)}
              </dl>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <article key={p.title} data-build="pop" className="group flex flex-col rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition-colors hover:border-zinc-600 sm:p-8">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                  <span>{p.kicker}</span>
                  <span className="text-accent">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-4xl uppercase text-zinc-50 sm:text-5xl">{p.title}</h3>
                <ul className="mt-6 space-y-3 text-zinc-400">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-2 pt-8">
                  {p.chips.map((c) => (
                    <span key={c} className="rounded-full border border-zinc-800 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-300">{c}</span>
                  ))}
                  {p.links?.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn btn-ghost ml-auto px-4! py-2! text-xs">
                      {l.label} <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------- STACK ---------------- */}
        <section id="stack" className="scroll-mt-8 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <SectionHead n="02" label="Stack" title="Tools & skills" />
          </div>
          <div data-build="pop" className="marquee mt-12 overflow-hidden py-2">
            <div className="marquee-track flex w-max">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex" aria-hidden={copy === 1}>
                  {[...tools, ...tools].map((t, i) => (
                    <span key={i} className="mr-4 flex items-center gap-4 whitespace-nowrap rounded-full border border-zinc-800 bg-zinc-950 px-6 py-3 font-display text-2xl uppercase text-zinc-200 sm:text-4xl">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {t}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- RECORD ---------------- */}
        <section id="record" className="mx-auto max-w-7xl scroll-mt-8 px-4 py-24 sm:px-8 sm:py-32">
          <SectionHead n="03" label="Record" title="The record" />
          <ol className="mt-14 border-l border-zinc-800">
            {record.map((r) => (
              <li key={r.title} data-build="pop" className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-ink" />
                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-widest">
                  <span className="text-zinc-400">{r.when}</span>
                  <span className="rounded-full border border-zinc-800 px-2.5 py-0.5 text-accent">{r.type}</span>
                </div>
                <h3 className="mt-3 font-display text-3xl uppercase text-zinc-50 sm:text-4xl">{r.title}</h3>
                <p className="mt-1 text-zinc-300">{r.org}</p>
                <p className="mt-3 max-w-2xl text-zinc-500">{r.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------------- ABOUT ---------------- */}
        <section id="about" className="mx-auto max-w-7xl scroll-mt-8 px-4 py-24 sm:px-8 sm:py-32">
          <SectionHead n="04" label="About" title="About me" />
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <div className="space-y-5 text-lg leading-relaxed text-zinc-400">
              {person.about.map((t) => <p key={t} data-build="type">{t}</p>)}
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {skills.map((s) => (
                <li key={s} data-build="pop" className="rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4 text-zinc-200">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <h3 data-build="type" className="mt-20 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">Principles I work by</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <div key={p.title} data-build="pop" className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h4 className="mt-4 font-display text-2xl uppercase text-zinc-50">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section id="contact" className="mx-auto max-w-7xl scroll-mt-8 px-4 pb-16 pt-24 sm:px-8 sm:pt-32">
          <SectionHead n="05" label="Contact" title="Let's talk" />
          <div data-build="pop" className="relative mt-14 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-8 sm:p-14">
            <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(43,138,230,0.35),transparent)] blur-2xl" />
            <p className="relative font-mono text-xs uppercase tracking-[0.25em] text-accent">Open to conversations</p>
            <p className="relative mt-4 max-w-3xl font-display text-4xl uppercase leading-[0.95] text-zinc-50 sm:text-6xl">
              {person.contactLine}
            </p>
            <div className="relative mt-10 flex flex-wrap items-center gap-4">
              <a href={`mailto:${EMAIL}`} className="btn">
                <Mail size={16} /> Email me
              </a>
              <a href={`mailto:${EMAIL}`} className="break-all font-mono text-sm text-zinc-400 underline-offset-4 transition-colors hover:text-zinc-50 hover:underline">
                {EMAIL}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-zinc-900 px-4 pb-24 pt-8 font-mono text-[11px] uppercase tracking-widest text-zinc-600 sm:flex-row sm:justify-between sm:px-8">
        <span>© 2026 {person.first} {person.last} · {person.location}</span>
        <span>Built live by robot agents</span>
      </footer>
    </>
  );
}
