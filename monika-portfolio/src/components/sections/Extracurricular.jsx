// src/components/sections/Extracurricular.jsx
import { extracurriculars, meta } from '../../data/portfolio';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../ui/SectionHeader';

export default function Extracurricular() {
  const headerRef = useScrollReveal();
  const listRef = useStaggerReveal(80);

  return (
    <section id="extracurriculars" className="px-6 md:px-10 py-16 max-w-[1100px] mx-auto">
      <div ref={headerRef} className="reveal">
        <SectionHeader label="07 — Activities" title="Extra Curricular" accent="Involvement" />
      </div>

      <div ref={listRef} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {extracurriculars.map((e) => (
          <div key={e.title} className="card-surface group card-hover p-6">
            <div className="flex gap-4 items-start">
              <div className="extracard-accent" aria-hidden="true" />

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display font-bold text-[1rem] text-ink mb-1">{e.title}</div>
                    {e.period && <div className="font-mono text-[0.75rem] text-ink-muted mb-2">{e.period}</div>}
                  </div>

                  
                </div>

                <div className="text-ink-muted2 mt-3">{e.details}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
