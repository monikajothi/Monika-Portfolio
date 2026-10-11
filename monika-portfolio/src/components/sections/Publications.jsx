import { publications } from '../../data/portfolio';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../ui/SectionHeader';

function PublicationCard({ icon, iconBg, iconBorder, title, sub, venue, year, paperUrl }) {
  return (
    <article data-stagger className="cert-card group">
      <div
        className="absolute top-[-50%] right-[-50%] w-full h-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.05), transparent 70%)' }}
        aria-hidden="true"
      />

      <div
        className="w-10 h-10 flex items-center justify-center text-[1.1rem] mb-4 border"
        style={{ background: iconBg, borderColor: iconBorder }}
      >
        {icon}
      </div>

      <p className="font-mono text-[0.65rem] text-neon-cyan tracking-[0.12em] uppercase mb-2">
        {venue}
      </p>
      <h3 className="font-display font-bold text-[0.95rem] text-ink mb-1">{title}</h3>
      <p className="font-mono text-[0.65rem] text-ink-muted tracking-[0.06em]">{sub}</p>
      <p className="font-mono text-[0.65rem] text-neon-purple mt-3 tracking-[0.08em]">
        // {year}
      </p>

      {paperUrl && (
        <a
          href={paperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline inline-block text-[0.7rem] mt-4"
        >
          View Paper
        </a>
      )}
    </article>
  );
}

export default function Publications() {
  const headerRef = useScrollReveal();
  const gridRef = useStaggerReveal(90);

  return (
    <section id="publications" className="px-6 md:px-10 py-16 max-w-[1100px] mx-auto">
      <div ref={headerRef} className="reveal">
        <SectionHeader label="06 — Publications" title="Research" accent="Work" />
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {publications.map((publication) => (
          <PublicationCard key={publication.title} {...publication} />
        ))}
      </div>
    </section>
  );
}
