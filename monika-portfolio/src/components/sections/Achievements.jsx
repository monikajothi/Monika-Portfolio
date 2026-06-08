// src/components/sections/Achievements.jsx
import { achievements } from '../../data/portfolio';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../ui/SectionHeader';

function AchievementItem({ icon, title, desc, year }) {
  return (
    <div
      data-stagger
      className="achievement-item group"
    >
      <div className="w-10 h-10 flex items-center justify-center text-xl flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-ink font-medium text-[0.88rem] leading-[1.5] mb-0.5">{title}</p>
        <p className="text-ink-muted2 text-[0.83rem]">{desc}</p>
      </div>
      <div className="font-mono text-[0.65rem] text-ink-muted tracking-[0.08em] flex-shrink-0 ml-auto pl-4">
        {year}
      </div>
    </div>
  );
}

export default function Achievements() {
  const headerRef = useScrollReveal();
  const listRef   = useStaggerReveal(60);

  return (
    <section id="achievements" className="px-6 md:px-10 py-16 max-w-[1100px] mx-auto">
      <div ref={headerRef} className="reveal">
        <SectionHeader label="06 — Recognition" title="Awards &" accent="Wins" />
      </div>

      <div ref={listRef} className="flex flex-col gap-3 mt-10">
        {achievements.map((a) => (
          <AchievementItem key={a.title} {...a} />
        ))}
      </div>
    </section>
  );
}
