// src/components/sections/Skills.jsx
import { skills } from '../../data/portfolio';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../ui/SectionHeader';

function SkillCard({ icon, title, tags }) {
  return (
    <div
      data-stagger
      className="group bg-bg-surface border border-border relative overflow-hidden
                 transition-all duration-300 hover:border-border-strong hover:-translate-y-1
                 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-6"
    >
      {/* Top accent bar */}
      <div
        className="skill-card-bar absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg,var(--cyan),var(--purple))' }}
        aria-hidden="true"
      />

      <div className="text-2xl mb-4" aria-hidden="true">{icon}</div>
      <h3 className="font-display font-bold text-[0.9rem] text-ink mb-3 tracking-[0.02em]">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className={tag.accent ? 'skill-tag-accent' : 'skill-tag'}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useScrollReveal();
  const gridRef   = useStaggerReveal(70);

  return (
    <section id="skills" className="px-6 md:px-10 py-16 max-w-[1100px] mx-auto">
      <div ref={headerRef} className="reveal">
        <SectionHeader label="01 — Capabilities" title="Technical" accent="Arsenal" />
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
      >
        {skills.map((s) => (
          <SkillCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}
