// src/components/sections/About.jsx
import { about } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../ui/SectionHeader';

/* Map token types to Tailwind colour classes */
const tokenClass = {
  cmd:     'text-neon-cyan',
  key:     'text-neon-purple',
  val:     'text-neon-green',
  str:     'text-neon-amber',
  plain:   'text-ink-muted2',
};

function TermLine({ tokens, indent = 0 }) {
  return (
    <div style={{ paddingLeft: `${indent}rem` }} className="leading-[1.9]">
      {tokens.map((tok, i) => (
        <span key={i} className={tokenClass[tok.t] ?? 'text-ink-muted2'}>
          {tok.v}
        </span>
      ))}
    </div>
  );
}

function Terminal() {
  const { terminal } = about;
  return (
    <div className="terminal">
      {/* Traffic lights */}
      <div className="flex items-center gap-1.5 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="font-mono text-[0.65rem] text-ink-muted ml-2">
          {terminal.label}
        </span>
      </div>

      {terminal.lines.map((line, i) => {
        if (line.type === 'comment') {
          return (
            <div key={i} className="text-ink-muted italic leading-[1.9]">
              {line.content}
            </div>
          );
        }
        const indent =
          line.type === 'indent'  ? 1 :
          line.type === 'indent2' ? 2 : 0;
        return <TermLine key={i} tokens={line.content} indent={indent} />;
      })}
    </div>
  );
}

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="reveal px-6 md:px-10 py-16 max-w-[1100px] mx-auto">
      <SectionHeader label="00 — Profile" title="Engineered for" accent="Impact" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-10">
        {/* Text */}
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-ink-muted2 leading-[1.9] font-light text-[0.95rem]"
              dangerouslySetInnerHTML={{ __html: p
                .replace(/<strong>/g, '<strong class="text-ink font-medium">')
              }}
            />
          ))}
        </div>

        {/* Terminal */}
        <Terminal />
      </div>
    </section>
  );
}
