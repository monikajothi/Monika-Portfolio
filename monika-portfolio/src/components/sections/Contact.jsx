// src/components/sections/Contact.jsx
import { meta } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../ui/SectionHeader';

const contactLinks = [
  {
    href:  `mailto:${meta.email}`,
    icon:  '✉',
    label: 'Email',
    value: meta.email,
  },
  {
    href:   meta.github,
    target: '_blank',
    icon:   '⌥',
    label:  'GitHub',
    value:  'github.com/monikajothi',
  },
  {
    href:   meta.linkedin,
    target: '_blank',
    icon:   'in',
    label:  'LinkedIn',
    value:  'linkedin.com/in/monikarj',
  },
  // {
  //   href:  `tel:${meta.phone.replace(/\s/g, '')}`,
  //   icon:  '☏',
  //   label: 'Phone',
  //   value: meta.phone,
  // },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" ref={ref} className="reveal px-6 md:px-10 py-16 max-w-[1100px] mx-auto">
      <SectionHeader label="08 — Let's Connect" title="Open for" accent="Opportunities" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-10">

        {/* Links */}
        <div className="flex flex-col gap-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              rel={link.target ? 'noopener noreferrer' : undefined}
              className="contact-row"
            >
              <div className="w-9 h-9 flex items-center justify-center text-base flex-shrink-0
                              border border-neon-cyan/15 bg-neon-cyan/7">
                {link.icon}
              </div>
              <div>
                <span className="block font-mono text-[0.65rem] text-ink-muted
                                 uppercase tracking-[0.08em] mb-0.5">
                  {link.label}
                </span>
                <span className="text-[0.85rem]">{link.value}</span>
              </div>
            </a>
          ))}

          {/* Resume */}
          <a
            href={meta.resumeUrl}
            className="btn-primary mt-2 text-center block"
            download
          >
            ↓ Download Resume
          </a>
        </div>

        {/* Right blurb */}
        <div className="space-y-5">
          <p className="text-ink-muted2 text-[0.95rem] leading-[1.9] font-light">
            I'm a <strong className="text-ink font-medium">Full Stack AI Engineer</strong> actively
            looking for roles where I can ship intelligent systems that solve real problems — whether
            that's RAG pipelines, MERN applications, or ML-integrated products.
          </p>
          <p className="text-ink-muted2 text-[0.95rem] leading-[1.9] font-light">
            I bring engineering rigour, research depth (two publications), and production experience
            from my internship at PunchBiz. If you're building something ambitious, let's talk.
          </p>
          <p className="text-ink-muted2 text-[0.95rem] leading-[1.9] font-light">
            Currently based in <strong className="text-ink font-medium">Salem, Tamil Nadu</strong> —
            open to remote and relocation.
          </p>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] text-neon-green
                          border border-neon-green/20 px-4 py-2 mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green avatar-pulse inline-block" />
            Available for Full-Time Roles
          </div>
        </div>
      </div>
    </section>
  );
}
