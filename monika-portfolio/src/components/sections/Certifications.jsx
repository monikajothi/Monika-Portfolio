// src/components/sections/Certifications.jsx
import { certifications } from '../../data/portfolio';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../ui/SectionHeader';

function CertCard({ icon, iconBg, iconBorder, title, sub, year, credentialUrl, paperUrl }) {
  return (
    <div
      data-stagger
      className="cert-card group"
    >
      {/* Purple glow */}
      <div
        className="absolute top-[-50%] right-[-50%] w-full h-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.05), transparent 70%)' }}
        aria-hidden="true"
      />

      <div
        className="w-10 h-10 flex items-center justify-center text-[1.1rem] mb-4 border"
        style={{ background: iconBg, borderColor: iconBorder }}
      >
        {icon}
      </div>

      <h3 className="font-display font-bold text-[0.95rem] text-ink mb-1">{title}</h3>
      <p className="font-mono text-[0.65rem] text-ink-muted tracking-[0.06em]">{sub}</p>
      <p className="font-mono text-[0.65rem] text-neon-purple mt-3 tracking-[0.08em]">
        // {year}
      </p>

      <div className="mt-4 flex gap-3">
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-block text-[0.7rem]"
          >
            View Credential
          </a>
        )}

        {paperUrl && (
          <a
            href={paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-block text-[0.7rem]"
          >
            View Paper
          </a>
        )}
      </div>
    </div>
  );
}

export default function Certifications() {
  const headerRef = useScrollReveal();
  const gridRef   = useStaggerReveal(90);

  return (
    <section id="certifications" className="px-6 md:px-10 py-16 max-w-[1100px] mx-auto">
      <div ref={headerRef} className="reveal">
        <SectionHeader label="05 — Credentials" title="Certified &" accent="Published" />
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10"
      >
        {certifications.map((c) => (
          <CertCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}
