// src/components/sections/Experience.jsx
import { experience } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../ui/SectionHeader';

function TimelineItem({ period, type, role, company, points }) {
  return (
    <div className="timeline-line">
      <p className="font-mono text-[0.68rem] text-neon-cyan tracking-[0.08em] mb-2">
        {period} · {type}
      </p>
      <h3 className="font-display font-bold text-[1.25rem] mb-1">{role}</h3>
      <p className="text-ink-muted2 text-[0.9rem] mb-4">{company}</p>
      <ul className="flex flex-col gap-2">
        {points.map((pt, i) => (
          <li
            key={i}
            className="relative pl-5 text-ink-muted2 text-[0.88rem] leading-[1.7]
                       before:content-['▸'] before:absolute before:left-0
                       before:text-neon-cyan before:text-[0.75rem]"
          >
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" ref={ref} className="reveal px-6 md:px-10 py-16 max-w-[1100px] mx-auto">
      <SectionHeader label="02 — Work History" title="Where I've" accent="Shipped" />

      <div className="mt-10 space-y-0">
        {experience.map((item) => (
          <TimelineItem key={item.role} {...item} />
        ))}
      </div>
    </section>
  );
}
