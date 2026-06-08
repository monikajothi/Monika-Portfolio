// src/components/layout/Footer.jsx
import { meta } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 text-center">
      <p className="font-mono text-[0.65rem] text-ink-muted tracking-[0.08em]">
        <span className="text-neon-cyan">{meta.name}</span>
        &nbsp;·&nbsp; {meta.role} &nbsp;·&nbsp; Built with precision &amp; purpose &nbsp;·&nbsp;
        <span className="text-neon-cyan">{meta.location}</span>
      </p>
    </footer>
  );
}
