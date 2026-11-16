/* Team APEXION forge intro, copied from the team website (v10.29).
   Plays once per browser tab, then fires 'apx:enter' so the robot agents start building. */
/* ================= APEXION — the forge (intro) =================
   Embers in the dark. Molten metal pours into the Apexion mark, three hammer strikes, the quench and its steam,
   and the white-hot metal cools into the blue logo. The APEXION letters are stamped one by one, the slogan cools
   from orange to silver, and the screen opens onto the website. Sound design only, no voice.
   One audio file (/audio/apexion_forge.mp3) drives the clock when sound is on. */
(function(){window.APX_UO=true;let root=null;
  const enterSite=()=>{if(window.APX_ENTERED)return;window.APX_ENTERED=true;try{sessionStorage.setItem('apx-intro','1')}catch(e){}dispatchEvent(new Event('apx:enter'))};
  let seen=false;try{seen=sessionStorage.getItem('apx-intro')==='1'}catch(e){}
  if(seen){document.documentElement.classList.remove('uo-wait');enterSite();return}
  root=document.createElement('div');root.id='uo';root.className='uo';document.body.appendChild(root);
  const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,MOB=innerWidth<760;
  const TL={pour0:.7,pour1:3.6,strikes:[3.95,4.65,5.35],quench:5.75,cool1:7.3,logo:6.55,p2:7.5,l0:7.95,lStep:.24,ebar:9.75,ecool:10.35,p4:10.5,open:13.2,end:14.7};
  document.documentElement.classList.add('uo-on');document.documentElement.classList.remove('uo-wait');
  const MK='/intro/mark_light.webp';
  root.innerHTML=`<canvas class="uo-cv" aria-hidden="true"></canvas><div class="uo-glow" aria-hidden="true"></div>
  <div class="uo-lock" aria-hidden="true">
    <div class="uo-mkw">
      <i class="uo-mold"></i>
      <i class="uo-molt"><b></b></i>
      <img class="uo-mkb" src="${MK}" alt=""><img class="uo-mk" src="${MK}" alt="">
      <i class="uo-shine"></i></div>
    <div class="uo-wm"><span>A</span><span>P</span><span class="e">E</span><span>X</span><span>I</span><span>O</span><span>N</span><i class="uo-sweep"></i></div>
    <div class="uo-tag"><i></i>Precision beyond limits<i></i></div>
    <div class="uo-sub">Team Apexion · NRL 2026</div>
  </div>
  <i class="uo-bar t" aria-hidden="true"></i><i class="uo-bar b" aria-hidden="true"></i>
  <i class="uo-flash" aria-hidden="true"></i>
  <div class="uo-vig" aria-hidden="true"></div><div class="uo-grain" aria-hidden="true"></div>
  <div class="uo-gate" role="button" tabindex="0" aria-label="Begin the Team Apexion intro with sound">
    <div><div class="ln"></div><div class="t1">Team Apexion</div><div class="t2">Tap to begin · Sound on</div></div>
    <div class="alt"><button type="button" data-uo="mute">Without sound</button><button type="button" data-uo="skip">Skip intro</button></div>
  </div>
  <button class="uo-skip" type="button">Skip</button>`;
  const q=s=>root.querySelector(s),qa=s=>[...root.querySelectorAll(s)];
  const lock=q('.uo-lock'),mkw=q('.uo-mkw'),molt=q('.uo-molt'),letters=qa('.uo-wm span'),flashEl=q('.uo-flash');
  try{const g=document.createElement('canvas');g.width=g.height=160;const gx=g.getContext('2d'),d=gx.createImageData(160,160);for(let i=0;i<d.data.length;i+=4){const v=Math.random()*255|0;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=255}gx.putImageData(d,0,0);q('.uo-grain').style.backgroundImage=`url(${g.toDataURL()})`}catch(e){}
  const SC=()=>innerWidth<760?1.2:1.45;
  function centre(){const tr=mkw.style.transition,tf=mkw.style.transform;mkw.style.transition='none';mkw.style.transform='none';const r=mkw.getBoundingClientRect(),lr=lock.getBoundingClientRect();mkw.style.transform=tf;void mkw.offsetWidth;mkw.style.transition=tr;mkw.style.setProperty('--dy',((lr.top+lr.height/2)-(r.top+r.height/2))/SC()+'px')}
  centre();addEventListener('resize',centre);
  const flash=(a)=>{flashEl.style.setProperty('--fa',a||.5);flashEl.classList.remove('go');void flashEl.offsetWidth;flashEl.classList.add('go')};
  const shake=(k)=>{if(RM)return;lock.style.setProperty('--sk',(k||1)+'');lock.classList.remove('shake');void lock.offsetWidth;lock.classList.add('shake')};
  /* metal temperature (1 white-hot -> 0 cold): colour of the molten layer */
  const HEAT=[[1,[255,248,224]],[.82,[255,214,120]],[.62,[255,140,40]],[.42,[230,70,18]],[.25,[150,30,10]],[.1,[70,16,8]],[0,[30,8,6]]];
  const heatCol=k=>{for(let i=0;i<HEAT.length-1;i++){const [a,ca]=HEAT[i],[b,cb]=HEAT[i+1];if(k<=a&&k>=b){const u=(a-k)/(a-b);return ca.map((v,j)=>Math.round(v+(cb[j]-v)*u))}}return HEAT[HEAT.length-1][1]};
  /* ---------- canvas: embers, sparks, steam ---------- */
  const cv=q('.uo-cv'),x=cv.getContext('2d');let W=0,H=0,DPR=1;
  function size(){DPR=Math.min(devicePixelRatio||1,MOB?1.5:2);W=innerWidth;H=innerHeight;cv.width=W*DPR;cv.height=H*DPR;x.setTransform(DPR,0,0,DPR,0,0)}size();addEventListener('resize',size);
  const embers=Array.from({length:MOB?60:130},()=>({x:Math.random(),y:Math.random(),z:.3+Math.random()*.7,v:.02+Math.random()*.05,ph:Math.random()*6.28}));
  let sparks=[],steam=[],emA=0;
  function burst(px,py,n,up,spd){for(let i=0;i<n;i++){const a=up?(-Math.PI/2+(Math.random()-.5)*2.4):Math.random()*6.283,v=(spd||1)*(200+Math.random()*700);sparks.push({x:px,y:py,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:.6+Math.random()*.6,w:.8+Math.random()*1.6})}}
  function mkRect(){return mkw.getBoundingClientRect()}
  function draw(t,dt,fill,heat){x.clearRect(0,0,W,H);x.globalCompositeOperation='lighter';
    emA+=((t<TL.open?1:0)-emA)*Math.min(1,dt*1.5);const cool=Math.max(0,Math.min(1,(t-TL.quench)/2.4));
    for(const e of embers){e.y-=e.v*dt*(.5+e.z);e.x+=Math.sin(t*.8+e.ph)*.0007;if(e.y<-.02){e.y=1.02;e.x=Math.random()}
      const fl=.55+.45*Math.sin(t*(3+e.z*4)+e.ph),a=emA*(.25+e.z*.5)*fl*(1-cool*.7),r=e.z*1.8;
      x.fillStyle=`rgba(255,${Math.round(120+80*e.z)},${Math.round(40*e.z)},${a})`;x.beginPath();x.arc(e.x*W,e.y*H,r,0,6.283);x.fill()}
    // the pour line throws sparks while the mould fills
    if(t>TL.pour0&&t<TL.pour1&&!RM){const r=mkRect(),yy=r.bottom-r.height*fill;if(Math.random()<.9)burst(r.left+r.width*(.25+Math.random()*.5),yy,MOB?2:4,true,.6)}
    for(let i=sparks.length-1;i>=0;i--){const s=sparks[i];s.l-=dt*1.1;s.vy+=1100*dt;s.vx*=.995;s.x+=s.vx*dt;s.y+=s.vy*dt;if(s.l<=0||s.y>H+20){sparks.splice(i,1);continue}
      const c=s.l>.6?'255,240,200':s.l>.3?'255,180,80':'255,110,30';x.strokeStyle=`rgba(${c},${Math.min(1,s.l*1.4)})`;x.lineWidth=s.w;x.beginPath();x.moveTo(s.x,s.y);x.lineTo(s.x-s.vx*.018,s.y-s.vy*.018);x.stroke()}
    x.globalCompositeOperation='source-over';
    // steam after the quench
    if(t>TL.quench&&t<TL.quench+3.2&&!RM&&Math.random()<.8){const r=mkRect();for(let n=0;n<(MOB?2:3);n++)steam.push({x:r.left+r.width*(.15+Math.random()*.7),y:r.top+r.height*(.3+Math.random()*.6),r:10+Math.random()*24,v:30+Math.random()*50,l:1})}
    for(let i=steam.length-1;i>=0;i--){const s=steam[i];s.l-=dt*.45;s.y-=s.v*dt;s.x+=Math.sin(t*1.7+i)*.3;s.r+=dt*28;if(s.l<=0){steam.splice(i,1);continue}
      const g=x.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r);g.addColorStop(0,`rgba(225,232,240,${.10*s.l})`);g.addColorStop(1,'rgba(225,232,240,0)');x.fillStyle=g;x.fillRect(s.x-s.r,s.y-s.r,s.r*2,s.r*2)}}
  /* ---------- timeline ---------- */
  const ev=[];const at=(t,f)=>ev.push([t,f]);let fired=0;
  at(.1,()=>root.classList.add('lit'));
  at(TL.pour0-.2,()=>root.classList.add('mould'));
  TL.strikes.forEach((s,i)=>at(s,()=>{const r=mkRect();burst(r.left+r.width*(.42+Math.random()*.16),r.top+r.height*(.25+i*.18),MOB?60:130,false,1.2);flash(.55-i*.1);shake(1.2-i*.25);root.classList.add('strike')}));
  at(TL.quench,()=>{root.classList.add('quench');flash(.25)});
  at(TL.logo,()=>{root.classList.add('cool')});
  at(TL.p2,()=>root.classList.add('p2'));
  letters.forEach((s,i)=>at(TL.l0+i*TL.lStep,()=>{s.classList.add('in','hot');const r=s.getBoundingClientRect();burst(r.left+r.width/2,r.bottom-r.height*.12,MOB?10:22,true,.55);shake(.35);setTimeout(()=>s.classList.remove('hot'),60)}));
  at(TL.l0+.1,()=>root.classList.add('p3'));
  at(TL.ebar,()=>root.classList.add('ebar'));
  at(TL.ecool,()=>{root.classList.add('ebar2');q('.uo-wm .uo-sweep').classList.add('go');const sh=q('.uo-shine');sh.classList.remove('go');void sh.offsetWidth;sh.classList.add('go')});
  at(TL.p4,()=>root.classList.add('p4'));
  at(TL.p4+1.4,()=>root.classList.add('p5'));
  at(TL.open-.15,()=>enterSite(useAudio?'sound':'mute'));
  at(TL.open,()=>{root.classList.add('open');document.documentElement.classList.remove('uo-on')});
  ev.sort((a,b)=>a[0]-b[0]);
  let AU=null,useAudio=false,running=false,ended=false,t0=0,last=-1;
  const now=()=>useAudio&&AU&&!AU.paused&&AU.currentTime>0?AU.currentTime:(performance.now()-t0)/1000;
  function frame(){if(!running)return;requestAnimationFrame(frame);const t=now(),dt=last<0?0:Math.max(0,Math.min(.05,t-last));last=t;
    while(fired<ev.length&&ev[fired][0]<=t){try{ev[fired][1]()}catch(e){}fired++}
    // fill level + temperature of the metal
    const u=Math.max(0,Math.min(1,(t-TL.pour0)/(TL.pour1-TL.pour0))),fill=u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;
    let heat=1;if(t>TL.strikes[0])heat=.92;if(t>TL.strikes[1])heat=.86;if(t>TL.strikes[2])heat=.8;
    if(t>TL.quench)heat=Math.max(0,.8*(1-(t-TL.quench)/(TL.cool1-TL.quench)));
    const c=heatCol(heat),c2=heatCol(Math.max(0,heat-.18));
    molt.style.setProperty('--fill',(100-fill*100).toFixed(2)+'%');
    molt.style.setProperty('--c1',`rgb(${c})`);molt.style.setProperty('--c2',`rgb(${c2})`);
    molt.style.setProperty('--gl',`rgba(${heatCol(Math.min(1,heat+.1))},${(.25+heat*.75).toFixed(2)})`);
    molt.style.opacity=t<TL.logo?1:Math.max(0,1-(t-TL.logo)/.9);
    draw(t,dt,fill,heat);if(t>TL.end&&!ended)finish()}
  const SRC='/intro/apexion_forge.mp3';
  try{fetch(SRC).then(r=>{if(!r.ok)throw 0;return r.blob()}).then(b=>{if(!AU){AU=new Audio(URL.createObjectURL(b));AU.preload='auto'}}).catch(()=>{})}catch(e){}
  function start(withSound){if(running||ended)return;running=true;root.classList.add('run');
    if(withSound){try{if(typeof BGM!=='undefined'&&BGM.prime)BGM.prime()}catch(e){}
      if(!AU){AU=new Audio(SRC);AU.preload='auto'}useAudio=true;
      try{AU.currentTime=0;const p=AU.play();if(p&&p.catch)p.catch(()=>{useAudio=false})}catch(e){useAudio=false}}
    t0=performance.now();requestAnimationFrame(frame)}
  function finish(){if(ended)return;ended=true;running=false;
    try{if(AU&&!AU.paused){const a=AU;let v=1;const iv=setInterval(()=>{v-=.1;if(v<=0){clearInterval(iv);a.pause()}else{try{a.volume=v}catch(e){}}},40)}}catch(e){}
    document.documentElement.classList.remove('uo-on');root.classList.add('uo-gone');enterSite(useAudio?'sound':'mute')}
  root.addEventListener('click',e=>{const b=e.target.closest('[data-uo]');if(b){e.stopPropagation();if(b.dataset.uo==='skip'){finish();return}start(false);return}
    if(e.target.closest('.uo-skip')){finish();return}if(e.target.closest('.uo-gate'))start(true)});
  q('.uo-gate').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();start(true)}});
  addEventListener('keydown',e=>{if(e.key==='Escape'&&!ended)finish()});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&running)finish()});
  window.APX_INTRO_FINISH=finish;
  setTimeout(()=>{const g=q('.uo-gate');g&&g.focus({preventScroll:true})},300);
})();
