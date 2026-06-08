// src/components/sections/Hero.jsx
import { meta } from '../../data/portfolio';
import { useParallax } from '../../hooks/useMouse';
import MonikaTerminal from '../ui/Avatar';

export default function Hero() {
  const glowRef = useParallax(30);

  return (
    <div className="relative">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 pt-20 pb-12 overflow-hidden">

        {/* Animated grid */}
        <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

        {/* Parallax glow blobs */}
        <div
          ref={glowRef}
          aria-hidden="true"
          className="absolute top-[20%] left-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{
            transform: 'translateX(-50%)',
            background: 'radial-gradient(ellipse, rgba(0,245,255,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[10%] right-[8%] w-[300px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(168,85,247,0.07) 0%, transparent 70%)' }}
        />

        {/* Content */}
        <div className="max-w-[1100px] w-full relative z-10 flex items-center justify-between gap-10">

          {/* Left — text */}
          <div className="flex-1 min-w-0">

            {/* Badge */}
            <div className="anim-d0 inline-flex items-center gap-2 font-mono text-[0.7rem] text-neon-cyan2
                            border border-neon-cyan/20 px-3.5 py-1.5 tracking-[0.1em] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan avatar-pulse inline-block" />
              {meta.badge}
            </div>

            {/* Name */}
            <h1 className="anim-d1 font-display font-extrabold leading-none tracking-tight mb-2"
                style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}>
              <span className="block text-ink">{meta.name.split(' ')[0]}</span>
              <span className="block gradient-text text-glow-cyan">{meta.name.split(' ')[1]}</span>
            </h1>

            {/* Sub-title */}
            <p className="anim-d2 font-mono text-ink-muted2 tracking-[0.08em] mb-8"
               style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>
              <span className="block">
                 — Building intelligent systems at the intersection of
              </span>
              <span className="text-neon-cyan">AI · Full Stack · Data</span>
            </p>

            {/* Description */}
            <p className="anim-d3 text-ink-muted2 max-w-[560px] leading-[1.9] font-light mb-10"
               style={{ fontSize: '1.05rem' }}>
              Engineering{' '}
              <em className="text-ink not-italic font-normal">trust-aware RAG pipelines</em>,
              LLM-integrated applications, and production-grade full-stack systems.
              From reliable, hallucination-aware ML assistants to real-time ingredient safety checkers — I build AI that works.
            </p>

            {/* CTA buttons */}
            <div className="anim-d4 flex flex-wrap gap-4 mb-12">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href={`mailto:${meta.email}`} className="btn-outline">Get In Touch</a>
            </div>

            {/* stats removed by user request */}
          </div>

          {/* Right — avatar */}
        </div>
        <MonikaTerminal />
      </section>
    </div>
  );
}
