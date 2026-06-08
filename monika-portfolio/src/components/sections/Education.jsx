// src/components/sections/Education.jsx
import { education } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../ui/SectionHeader';

const IconCap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L1 7l11 5 9-4.09V17" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M12 22v-7" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);

const IconSchool = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l8 4-8 4-8-4 8-4z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 10v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCertificate = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 21l3-3 3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 11h8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Education() {
  const icons = [<IconCap key="cap" />, <IconSchool key="school" />, <IconCertificate key="cert" />];
  const headerRef = useScrollReveal();

  return (
    <section id="education" className="px-6 md:px-10 py-16 max-w-[1100px] mx-auto">
      <div ref={headerRef} className="reveal">
        <SectionHeader label="04 — Education" title="Academic" accent="Background" />
      </div>

      <div className="mt-6">
        
        <div className="grid gap-4 md:grid-cols-3">
          {education.map((e, idx) => (
            <div key={idx} className="flex gap-4 items-start p-4 bg-card/40 rounded-lg border border-card-border">
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-cyan-100 to-purple-100 flex items-center justify-center text-cyan-700 text-lg">
                {icons[idx % icons.length]}
              </div>

              <div className="flex-1">
                <div className="font-semibold text-ink">{e.degree}</div>
                <div className="text-sm text-ink-muted2">{e.institution} · {e.location}</div>
                <div className="text-sm mt-2 font-mono text-ink-muted">{e.period} · {e.score}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
