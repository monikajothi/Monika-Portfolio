import { useState, useEffect, useRef, useCallback } from "react";

// ── Swap this import with your actual image ──
import monikaImg from "./ChatGPT Image Jun 8, 2026, 02_00_40 PM.png";

const C = {
  cyan:    "#00f5ff",
  purple:  "#a855f7",
  pink:    "#ff2d78",
  green:   "#00ff88",
  amber:   "#ffb300",
  bg:      "#050508",
  surf:    "#0a0a12",
  surf2:   "#0f0f1a",
  border:  "#1a1a2e",
  ink:     "#e8e8f0",
  muted:   "#6b6b8a",
  muted2:  "#9898b8",
};

const DATA = {
  about: {
    name: "Monika Jothi", role: "Full Stack AI Engineer",
    location: "Salem, Tamil Nadu 🇮🇳", college: "Kongu Engineering College",
    degree: "B.Tech — AI & Data Science", cgpa: "8.40",
    status: "Open to Opportunities",
    bio: "Engineering trust-aware RAG pipelines, LLM-integrated apps, and production-grade full-stack systems. 0.000 hallucination rate ML assistant builder.",
  },
  skills: [
    { cat: "AI / LLM",      items: [["RAG Pipelines",95],["LLM Integration",90],["Prompt Eng.",85],["FAISS",90]] },
    { cat: "Full Stack",    items: [["React.js",92],["Node.js",95],["MongoDB",92],["REST APIs",98]] },
    { cat: "ML / DS",       items: [["Python",95],["Scikit-learn",90],["NLP",88],["OCR",95]] },
    { cat: "Cloud & Tools", items: [["Azure",94],["Docker",90],["Git",90],["Tableau",98]] },
  ],
  projects: [
    { id:"01", name:"Hallucination-Aware ML Assistant", type:"Flagship",       impact:"0.000 hallucination rate",    stack:"Python · RAG · LLM · FAISS" },
    { id:"02", name:"Inventory Management System",      type:"Full Stack + ML", impact:"ML-driven stock predictions", stack:"MERN · Scikit-learn · MongoDB" },
    { id:"03", name:"SafeBite AI",                      type:"AI Web App",      impact:"🏆 2nd Prize KEC 2024",        stack:"MERN · OCR · NLP · LLM" },
    { id:"04", name:"Crime Analysis Dashboard",         type:"Data Viz",        impact:"9,000+ records analysed",     stack:"Tableau · Statistical Analysis" },
  ],
  exp: [
    { period:"Jul–Dec 2024", role:"Full Stack Data Scientist", org:"PunchBiz (Remote)",         desc:"Built production billing system (MERN). Embedded ML demand forecasting. Served live clients." },
    { period:"2022–2026",    role:"B.Tech AI & Data Science",  org:"Kongu Engineering College", desc:"CGPA: 8.40. IEEE + ACL publications. Azure AI certified. Lead Anchor, Cultural Club." },
  ],
  awards: [
    { prize:"🥇 1st Prize", event:"Paper Presentation — KEC", desc:"Stress Identification using ML", year:"2024" },
    { prize:"🥈 2nd Prize", event:"Idea Presentation — KEC",  desc:"SafeBite AI",                   year:"2024" },
    { prize:"🥈 2nd Prize", event:"Paper Presentation — PSG", desc:"Brain Tumour Deep Learning",     year:"2024" },
    { prize:"🥈 2nd Prize", event:"Idea Presentation — PSG",  desc:"Smart Sweep AI",                 year:"2024" },
    { prize:"🏆 1st Rank",  event:"SSLC Board Exams",         desc:"96% — School topper",            year:"2020" },
  ],
  contact: {
    email:"monikajothi07@gmail.com", github:"github.com/monikajothi",
    linkedin:"linkedin.com/in/monikarj", status:"Available for full-time roles",
  },
};

const PILLS = ["monika --help","monika --about","monika --skills","monika --projects","monika --exp","monika --awards","monika --contact","clear"];
const IDLE  = ["keep building 💻","data + code = solutions 🚀","focus · code · achieve 🎯","discipline today ✨"];
const CAT_COLORS  = [C.cyan, C.purple, C.green, C.amber];
const PROJ_COLORS = [C.cyan, C.purple, C.pink, C.amber];

// ─── bar chart row ───
function Bar({ label, pct, color }) {
  const filled = Math.round(pct / 5), empty = 20 - filled;
  return (
    <div style={{ fontFamily:"'Space Mono',monospace", fontSize:10, lineHeight:1.7 }}>
      <span style={{ color:C.muted2 }}>{label.padEnd(16,"\u00a0")}</span>
      <span style={{ color }}>{"█".repeat(filled)}</span>
      <span style={{ color:C.muted2 }}>{"░".repeat(empty)}</span>
      <span style={{ color:C.muted }}>{" "+pct+"%"}</span>
    </div>
  );
}

// ─── build typed output lines ───
function buildLines(cmd) {
  const lines = [];
  const p  = (el, d) => lines.push({ el, d });
  const bl = (d)     => p(<span>&nbsp;</span>, d);

  if (cmd === "clear") return "CLEAR";

  if (cmd === "monika --help" || cmd === "help") {
    bl(0);
    p(<b style={{ color:C.purple }}>{"  ╔══ MONIKA.EXE · HELP ══════════════╗"}</b>, 60);
    p(<b style={{ color:C.purple }}>{"  ╚════════════════════════════════════╝"}</b>, 100);
    bl(120);
    const cmds = [
      ["monika --about","Who I am, my story"],
      ["monika --skills","Tech stack + bars"],
      ["monika --projects","Things I've built"],
      ["monika --exp","Work & education"],
      ["monika --awards","Prizes & achievements"],
      ["monika --contact","Let's work together"],
      ["clear","Clear the terminal"],
    ];
    let d = 140;
    for (const [c,desc] of cmds) {
      p(<div><span style={{ color:C.cyan }}>{c.padEnd(22,"\u00a0")}</span><span style={{ color:C.muted2 }}>{"→ "+desc}</span></div>, d);
      d += 55;
    }
    bl(d);
    p(<span style={{ color:C.muted2 }}>{"  // click a pill or type above ↑"}</span>, d+30);
  }

  else if (cmd === "monika --about") {
    const a = DATA.about;
    bl(40);
    p(<b style={{ color:C.purple }}>{"  ╔══ ABOUT MONIKA ═══════════════════╗"}</b>, 70);
    p(<b style={{ color:C.purple }}>{"  ╚════════════════════════════════════╝"}</b>, 110);
    bl(130);
    const rows = [
      ["name",a.name,C.ink],["role",a.role,C.amber],["location",a.location,C.ink],
      ["college",a.college,C.ink],["degree",a.degree,C.ink],
      ["cgpa",a.cgpa+" / 10",C.green],["status","● "+a.status,C.green],
    ];
    let d = 150;
    for (const [k,v,col] of rows) {
      p(<div><span style={{ color:C.cyan }}>{("  "+k).padEnd(12,"\u00a0")}</span><span style={{ color:C.muted2 }}>{"→ "}</span><span style={{ color:col }}>{v}</span></div>, d);
      d += 55;
    }
    bl(d);
    p(<span style={{ color:C.muted2 }}>{"  "+a.bio}</span>, d+40);
  }

  else if (cmd === "monika --skills") {
    bl(40);
    p(<b style={{ color:C.purple }}>{"  ╔══ SKILL STACK ════════════════════╗"}</b>, 70);
    p(<b style={{ color:C.purple }}>{"  ╚════════════════════════════════════╝"}</b>, 100);
    let d = 120;
    for (let i = 0; i < DATA.skills.length; i++) {
      const { cat, items } = DATA.skills[i];
      const color = CAT_COLORS[i];
      bl(d); d += 35;
      p(<b style={{ color }}>{"  // "+cat}</b>, d); d += 55;
      for (const [skill, pct] of items) {
        p(<Bar label={"  "+skill} pct={pct} color={color} />, d); d += 60;
      }
    }
  }

  else if (cmd === "monika --projects") {
    bl(40);
    p(<b style={{ color:C.purple }}>{"  ╔══ PROJECTS ═══════════════════════╗"}</b>, 70);
    p(<b style={{ color:C.purple }}>{"  ╚════════════════════════════════════╝"}</b>, 100);
    let d = 120;
    for (let i = 0; i < DATA.projects.length; i++) {
      const pr = DATA.projects[i];
      const col = PROJ_COLORS[i];
      bl(d); d += 35;
      p(<div style={{ color:col }}>{"  // "+pr.id+" · "+pr.type}</div>, d); d += 55;
      p(<b style={{ color:C.ink }}>{"  "+pr.name}</b>, d); d += 60;
      p(<div><span style={{ color:C.cyan }}>{"  impact "}</span><span style={{ color:C.muted2 }}>{"→ "}</span><span style={{ color:C.green }}>{pr.impact}</span></div>, d); d += 60;
      p(<div><span style={{ color:C.cyan }}>{"  stack  "}</span><span style={{ color:C.muted2 }}>{"→ "+pr.stack}</span></div>, d); d += 70;
    }
  }

  else if (cmd === "monika --exp") {
    bl(40);
    p(<b style={{ color:C.purple }}>{"  ╔══ EXPERIENCE ═════════════════════╗"}</b>, 70);
    p(<b style={{ color:C.purple }}>{"  ╚════════════════════════════════════╝"}</b>, 100);
    let d = 120;
    for (const e of DATA.exp) {
      bl(d); d += 40;
      p(<div style={{ color:C.cyan }}>{"  ▸ "+e.period}</div>, d); d += 60;
      p(<b style={{ color:C.ink }}>{"  "+e.role}</b>, d); d += 60;
      p(<div style={{ color:C.amber }}>{"  "+e.org}</div>, d); d += 60;
      p(<div style={{ color:C.muted2 }}>{"  "+e.desc}</div>, d); d += 80;
    }
  }

  else if (cmd === "monika --awards") {
    bl(40);
    p(<b style={{ color:C.purple }}>{"  ╔══ AWARDS & ACHIEVEMENTS ══════════╗"}</b>, 70);
    p(<b style={{ color:C.purple }}>{"  ╚════════════════════════════════════╝"}</b>, 100);
    let d = 120;
    for (const a of DATA.awards) {
      p(<div><span style={{ color:C.amber }}>{a.prize.padEnd(13,"\u00a0")}</span><span style={{ color:C.ink }}>{a.event}</span><span style={{ color:C.muted }}>{" "+a.year}</span></div>, d);
      p(<div style={{ color:C.muted2 }}>{"             └─ "+a.desc}</div>, d+45);
      d += 115;
    }
  }

  else if (cmd === "monika --contact") {
    const cc = DATA.contact;
    bl(40);
    p(<b style={{ color:C.purple }}>{"  ╔══ CONTACT MONIKA ═════════════════╗"}</b>, 70);
    p(<b style={{ color:C.purple }}>{"  ╚════════════════════════════════════╝"}</b>, 100);
    bl(130);
    const rows = [["email",cc.email,C.green],["github",cc.github,C.cyan],["linkedin",cc.linkedin,C.cyan]];
    let d = 160;
    for (const [k,v,col] of rows) {
      p(<div><span style={{ color:C.cyan }}>{"  "+k.padEnd(10,"\u00a0")}</span><span style={{ color:C.muted2 }}>{"→ "}</span><span style={{ color:col }}>{v}</span></div>, d);
      d += 65;
    }
    bl(d);
    p(<div style={{ color:C.green }}>{"  ● "+cc.status}</div>, d+40);
    bl(d+100);
    p(<span style={{ color:C.muted2 }}>{"  // Open to remote, hybrid & relocation"}</span>, d+140);
  }

  else {
    bl(40);
    p(<span style={{ color:C.pink }}>{"  zsh: command not found: "+cmd}</span>, 80);
    p(<div style={{ color:C.muted2 }}>{"  try "}<span style={{ color:C.cyan }}>monika --help</span></div>, 170);
  }

  bl(300);
  return lines;
}

// ─── Vertical glowing wire between portrait & terminal ───
function VerticalWire({ height }) {
  const active = true;
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", height, position:"relative", zIndex:5 }}>
      {/* top dot */}
      <div style={{
        width:7, height:7, borderRadius:"50%",
        background: active ? C.cyan : "#1a3a3a",
        boxShadow: active ? `0 0 10px ${C.cyan}, 0 0 20px ${C.cyan}` : "none",
        animation:"wireBlink 1.1s ease-in-out infinite",
        transition:"all 0.3s", flexShrink:0, marginTop:0,
      }}/>
      {/* wire body */}
      <div style={{
        flex:1, width:1,
        background: active
          ? `linear-gradient(to bottom, ${C.cyan}, ${C.purple})`
          : `repeating-linear-gradient(to bottom, ${C.border} 0px, ${C.border} 5px, transparent 5px, transparent 11px)`,
        boxShadow: active ? `0 0 8px ${C.cyan}` : "none",
        animation:"wireBlink 1.1s ease-in-out infinite",
        transition:"all 0.4s", position:"relative", overflow:"hidden",
      }}>
        {/* travelling packet */}
        <div style={{
          position:"absolute", left:"50%", transform:"translateX(-50%)",
          width:4, height:12, borderRadius:2,
          background:`linear-gradient(to bottom, transparent, ${C.cyan}, transparent)`,
          animation:"wirePacket 1.2s linear infinite",
        }}/>
      </div>
      {/* bottom dot */}
      <div style={{
        width:7, height:7, borderRadius:"50%",
        background: active ? C.purple : "#1a1a2e",
        boxShadow: active ? `0 0 10px ${C.purple}, 0 0 20px ${C.purple}` : "none",
        animation:"wireBlink 1.1s ease-in-out infinite reverse",
        transition:"all 0.3s", flexShrink:0, marginBottom:0,
      }}/>
    </div>
  );
}

// ─── Main ───
export default function MonikaTerminal() {
  const [lines,    setLines]    = useState([]);
  const [input,    setInput]    = useState("");
  const [busy,     setBusy]     = useState(false);
  const [status,   setStatus]   = useState("idle · waiting for input");
  const [rxText,   setRxText]   = useState("");
  const [rxShow,   setRxShow]   = useState(false);
  const [activePill, setActivePill] = useState(null);
  const [pulse,    setPulse]    = useState(false);
  const [histIdx,  setHistIdx]  = useState(-1);
  const history   = useRef([]);
  const outRef    = useRef(null);
  const inRef     = useRef(null);
  const idleIdx   = useRef(0);
  const lastPulse = useRef(0);

  // auto-scroll
  useEffect(() => {
    if (outRef.current) outRef.current.scrollTop = outRef.current.scrollHeight;
  }, [lines]);

  // idle ticker
  useEffect(() => {
    const iv = setInterval(() => {
      const txt = IDLE[idleIdx.current++ % IDLE.length];
      showRx(txt);
      setStatus("vibing...");
      setTimeout(() => setStatus("idle · waiting for input"), 2200);
    }, 7000);
    return () => clearInterval(iv);
  }, []);

  const showRx = (txt) => { setRxText(txt); setRxShow(true); setTimeout(()=>setRxShow(false),2500); };
  const boom   = ()    => {
    const now = Date.now();
    if (now - lastPulse.current < 12000) return;
    lastPulse.current = now;
    setPulse(true);
    setTimeout(()=>setPulse(false),1400);
  };

  const addLine = (el, delay) => new Promise(res => setTimeout(() => {
    setLines(prev => [...prev, el]);
    res();
  }, delay));

  const runCmd = useCallback(async (raw) => {
    const cmd = raw.trim().toLowerCase();
    await addLine(<div style={{ color:C.cyan }}>{"❯ "+raw}</div>, 0);
    if (cmd === "clear") { setLines([]); return; }

    const rxMap = {
      "monika --help":"loading help... ✨","monika --about":"hey there! 👋",
      "monika --skills":"flexing skills 💪","monika --projects":"showing builds 🚀",
      "monika --exp":"timeline loading...","monika --awards":"trophy room 🏆",
      "monika --contact":"let's connect! 💌",
    };
    showRx(rxMap[cmd] || "command not found 🤔");

    const result = buildLines(cmd);
    if (result === "CLEAR") { setLines([]); return; }

    for (const { el, d } of result) {
      await addLine(
        <div style={{ fontFamily:"'Space Mono',monospace", fontSize:10, lineHeight:1.7 }}>{el}</div>,
        d
      );
    }
    boom();
    setStatus("command executed ✓");
    setTimeout(() => setStatus("idle · waiting for input"), 2000);
  }, []);

  const submit = useCallback(async () => {
    const val = input.trim();
    if (!val || busy) return;
    history.current.push(val);
    setHistIdx(-1);
    setInput("");
    setBusy(true);
    await runCmd(val);
    setBusy(false);
    inRef.current?.focus();
  }, [input, busy, runCmd]);

  const onKey = (e) => {
    if (e.key === "Enter") { submit(); return; }
    if (e.key === "ArrowUp") {
      const ni = Math.min(histIdx+1, history.current.length-1);
      setHistIdx(ni);
      setInput(history.current[history.current.length-1-ni] || "");
    }
    if (e.key === "ArrowDown") {
      const ni = Math.max(histIdx-1, -1);
      setHistIdx(ni);
      setInput(ni === -1 ? "" : history.current[history.current.length-1-ni]);
    }
  };

  const clickPill = async (cmd) => {
    setActivePill(cmd); setTimeout(()=>setActivePill(null),400);
    history.current.push(cmd);
    setHistIdx(-1); setInput("");
    setBusy(true);
    await runCmd(cmd);
    setBusy(false);
    inRef.current?.focus();
  };

  // boot
  useEffect(() => {
    const boot = async () => {
      await addLine(<span style={{ color:C.muted }}>monika.exe · v2026.1 · initialising...</span>, 200);
      await addLine(<span style={{ color:C.muted }}>loading portfolio data.........<span style={{ color:C.green }}> ✓</span></span>, 600);
      await addLine(<span style={{ color:C.muted }}>wiring terminal interface.......<span style={{ color:C.green }}> ✓</span></span>, 1000);
      await addLine(<span>&nbsp;</span>, 1300);
      await addLine(<span style={{ color:C.green }}>  ● SYSTEM ONLINE</span>, 1500);
      await addLine(<span>&nbsp;</span>, 1700);
      await addLine(<span style={{ color:C.muted2 }}>  type <span style={{ color:C.cyan }}>monika --help</span> to start ↓</span>, 1900);
      setTimeout(() => runCmd("monika --help"), 2200);
    };
    boot();
  // eslint-disable-next-line
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        @keyframes statusPulse {
          0%,100%{ opacity:1; transform:scale(1); }
          50%    { opacity:0.4; transform:scale(0.7); }
        }
        @keyframes scanSweep {
          0%  { top:-3px; opacity:0; }
          5%  { opacity:0.6; }
          95% { opacity:0.6; }
          100%{ top:100%; opacity:0; }
        }
        @keyframes wirePacket {
          0%  { top:-12px; }
          100%{ top:100%; }
        }
        @keyframes wireBlink {
          0%,100%{ opacity:1; filter:brightness(1.35); }
          50%    { opacity:0.35; filter:brightness(0.75); }
        }
        @keyframes pillFlash {
          0%  { transform:scale(1); }
          50% { transform:scale(1.08); box-shadow:0 0 14px rgba(0,245,255,0.55); }
          100%{ transform:scale(1); }
        }
        .mk-input::placeholder{ color:#6b6b8a; }
        .mk-input:focus{ outline:none; }
        .mk-pill:hover{ border-color:#00f5ff !important; color:#00f5ff !important; }
        .mk-enter:hover{ background:#00f5ff !important; color:#050508 !important; }
        .mk-scroll::-webkit-scrollbar{ width:2px; }
        .mk-scroll::-webkit-scrollbar-thumb{ background:#00f5ff; }
      `}</style>

      {/*
        ════════════════════════════════════════════════════════
          FLOATING WIDGET — pinned top-right corner
          Uses position:fixed so it overlays without shifting
          hero layout. Width = 320px, sits at the top-right edge.
        ════════════════════════════════════════════════════════
      */}
      <div style={{
          position: "absolute",
          top: "92px",          /* keep high, just under the fixed nav */
          right: "120px",
        width: "430px",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        gap: 10,
        zIndex: 900,
        pointerEvents: "none",  /* let clicks pass through gaps */
        fontFamily: "'Space Mono', monospace",
        maxHeight: "calc(100vh - 112px)",
        overflowY: "visible",
      }}>

        {/* ── PORTRAIT CARD ── */}
        <div style={{
          width: "260px",
          height: 180,
          position: "relative",
          alignSelf: "flex-end",
          border: `1px solid ${C.border}`,
          background: C.surf,
          overflow: "hidden",
          flexShrink: 0,
          pointerEvents: "auto",
        }}>
          {/* photo */}
          <img
            src={monikaImg}
            alt="Monika — portrait"
            style={{
              position:"absolute", inset:0,
              width:"100%", height:"100%",
              objectFit:"cover", objectPosition:"center top",
              display:"block",
            }}
          />
          {/* CRT lines */}
          <div style={{
            position:"absolute", inset:0,
            background:"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.07) 3px,rgba(0,0,0,0.07) 4px)",
            pointerEvents:"none", zIndex:2,
          }}/>
          {/* scan sweep */}
          <div style={{
            position:"absolute", left:0, right:0, height:3,
            background:"linear-gradient(to bottom,transparent,rgba(0,245,255,0.18),transparent)",
            zIndex:3, pointerEvents:"none",
            animation:"scanSweep 5s linear infinite",
          }}/>
          {/* top fade */}
          <div style={{ position:"absolute",top:0,left:0,right:0,height:28, background:"linear-gradient(to bottom,rgba(5,5,8,0.5),transparent)", zIndex:3, pointerEvents:"none" }}/>
          {/* bottom fade */}
          <div style={{ position:"absolute",bottom:0,left:0,right:0,height:55, background:"linear-gradient(to top,rgba(5,5,8,0.95),transparent)", zIndex:3, pointerEvents:"none" }}/>
          {/* corner brackets */}
          {[
            { top:6,left:6,   borderTop:`2px solid ${C.cyan}`,  borderLeft:`2px solid ${C.cyan}` },
            { top:6,right:6,  borderTop:`2px solid ${C.cyan}`,  borderRight:`2px solid ${C.cyan}` },
            { bottom:32,left:6,  borderBottom:`2px solid ${C.purple}`, borderLeft:`2px solid ${C.purple}` },
            { bottom:32,right:6, borderBottom:`2px solid ${C.purple}`, borderRight:`2px solid ${C.purple}` },
          ].map((s,i) => <div key={i} style={{ position:"absolute",width:16,height:16,zIndex:4,pointerEvents:"none",...s }}/>)}
          {/* reaction label */}
          <div style={{
            position:"absolute", top:8, left:"50%", transform:"translateX(-50%)",
            fontSize:7.5, color:C.cyan, letterSpacing:"0.14em", textTransform:"uppercase",
            opacity: rxShow ? 1 : 0, transition:"opacity 0.3s",
            zIndex:6, background:"rgba(5,5,8,0.75)", padding:"2px 7px", whiteSpace:"nowrap",
          }}>
            {rxText}
          </div>
          {/* bottom meta bar */}
          <div style={{
            position:"absolute", bottom:0, left:0, right:0, zIndex:5,
            padding:"0 10px 8px",
            display:"flex", alignItems:"center", justifyContent:"space-between",
          }}>
            <span style={{ fontSize:7, color:C.cyan, letterSpacing:"0.15em", textTransform:"uppercase", opacity:0.85 }}>
              monika.rj
            </span>
            <div style={{ display:"flex", alignItems:"center", gap:4, fontSize:7, color:C.muted, letterSpacing:"0.09em" }}>
              <div style={{ width:4,height:4,borderRadius:"50%",background:C.green, animation:"statusPulse 2s ease-in-out infinite" }}/>
              <span>{status}</span>
            </div>
          </div>
        </div>

        {/* ── GLOWING VERTICAL WIRE ── */}
        <VerticalWire pulse={pulse} height={18} />

        {/* ── TERMINAL CARD ── */}
        <div style={{
          width:"400px",
          alignSelf:"flex-start",
          marginLeft:"-40px",
          border:`1px solid ${C.border}`,
          background: C.surf2,
          display:"flex", flexDirection:"column",
          flexShrink:0,
          pointerEvents:"auto",
        }}>
          {/* title bar */}
          <div style={{ display:"flex",alignItems:"center",gap:7,padding:"8px 12px",background:C.surf2,borderBottom:`1px solid ${C.border}`,flexShrink:0 }}>
            <div style={{ display:"flex",gap:4 }}>
              {["#ff5f57","#febc2e","#28c840"].map((col,i)=>(
                <div key={i} style={{ width:8,height:8,borderRadius:"50%",background:col }}/>
              ))}
            </div>
            <span style={{ fontSize:8,color:C.muted,letterSpacing:"0.12em" }}>monika@portfolio ~ %</span>
          </div>
          {/* output */}
          <div
            ref={outRef}
            className="mk-scroll"
            style={{
              height:180,
              overflowY:"auto",
              padding:"10px 12px 6px",
              fontSize:10,
              lineHeight:1.7,
              scrollbarWidth:"thin",
              scrollbarColor:`${C.cyan} ${C.bg}`,
            }}
          >
            {lines.map((l,i) => <div key={i}>{l}</div>)}
          </div>
          {/* input row */}
          <div style={{ display:"flex",alignItems:"center",gap:6,padding:"6px 10px 8px",borderTop:`1px solid ${C.border}`,flexShrink:0 }}>
            <span style={{ color:C.cyan,fontSize:10,whiteSpace:"nowrap" }}>❯</span>
            <input
              ref={inRef}
              className="mk-input"
              value={input}
              onChange={e=>setInput(e.target.value)}
              onKeyDown={onKey}
              disabled={busy}
              placeholder="type a command…"
              autoComplete="off"
              spellCheck={false}
              style={{
                flex:1,background:"transparent",border:"none",outline:"none",
                color:C.ink,fontFamily:"'Space Mono',monospace",fontSize:10,
                caretColor:C.cyan,
              }}
            />
            <button
              onClick={submit}
              className="mk-enter"
              style={{
                background:"transparent",border:`1px solid ${C.border}`,
                color:C.cyan,fontFamily:"'Space Mono',monospace",
                fontSize:8,padding:"2px 7px",cursor:"pointer",
                letterSpacing:"0.08em",transition:"all 0.2s",
              }}
            >↵</button>
          </div>
        </div>

        {/* ── SECOND WIRE ── */}
        <VerticalWire pulse={pulse} height={18} />

        {/* ── PILLS ── */}
        <div style={{
          width:"300px",
          alignSelf:"flex-end",
          border:`1px solid ${C.border}`,
          background: C.surf,
          padding:"7px 9px 9px",
          pointerEvents:"auto",
        }}>
          <div style={{ fontSize:7.5,color:C.muted,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:7 }}>
            // quick commands
          </div>
          <div style={{ display:"flex",flexWrap:"wrap",gap:4 }}>
            {PILLS.map(cmd=>(
              <button
                key={cmd}
                className="mk-pill"
                onClick={()=>clickPill(cmd)}
                style={{
                  fontFamily:"'Space Mono',monospace",fontSize:8,
                  padding:"2px 7px",border:`1px solid ${C.border}`,
                  background: activePill===cmd ? C.cyan : C.surf,
                  color:       activePill===cmd ? C.bg   : C.muted2,
                  cursor:"pointer",letterSpacing:"0.06em",transition:"all 0.15s",
                  animation:   activePill===cmd ? "pillFlash 0.25s ease" : "none",
                }}
              >{cmd}</button>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
