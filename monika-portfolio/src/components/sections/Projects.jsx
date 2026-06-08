// src/components/sections/Projects.jsx
import { projects } from '../../data/portfolio';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../ui/SectionHeader';

const GitHubIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
             0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
             -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
             .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
             -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0
             1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56
             .82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0
             1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>
  </svg>
);

function ProjectCard({ num, type, title, accentColor, desc, impact, stack, github, demo }) {
  return (
    <div
      data-stagger
      className="group bg-bg-surface border border-border overflow-hidden
                 transition-all duration-300 hover:border-border-strong
                 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                 flex flex-col relative"
    >
      {/* inner glow */}
      <div
        className="project-glow absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(0,245,255,0.03), transparent)' }}
        aria-hidden="true"
      />

      <div className="font-mono text-[0.65rem] text-ink-muted px-5 pt-5 tracking-[0.1em]">
        {num} &nbsp;·&nbsp; {type}
      </div>

      <div className="px-5 pt-3 pb-2">
        <h3 className="font-display font-bold text-[1.05rem] text-ink mb-2">{title}</h3>
        {/* accent bar */}
        <div className="w-6 h-0.5 mb-3" style={{ background: accentColor }} />
        <p className="text-ink-muted2 text-[0.83rem] leading-[1.75]">{desc}</p>
      </div>

      <p className="font-mono text-[0.65rem] text-neon-green px-5 mb-3 tracking-[0.04em]">
        {impact}
      </p>

      <div className="flex flex-wrap gap-1.5 px-5 mb-4">
        {stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[0.6rem] px-2 py-0.5 border border-border-strong
                       text-ink-muted tracking-[0.05em]"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex gap-4 px-5 py-4 border-t border-border mt-auto">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[0.65rem] text-ink-muted2
                       tracking-[0.08em] hover:text-neon-cyan transition-colors"
          >
            <GitHubIcon /> GitHub
          </a>
        )}
        {demo && demo !== '#' && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.08em]
                       hover:opacity-80 transition-opacity"
            style={{ color: accentColor }}
          >
            <ExternalIcon /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useScrollReveal();
  const gridRef   = useStaggerReveal(80);

  return (
    <section id="projects" className="px-6 md:px-10 py-16 max-w-[1100px] mx-auto">
      <div ref={headerRef} className="reveal">
        <SectionHeader label="03 — Engineering Work" title="Projects That" accent="Matter" />
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5 mt-10"
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
