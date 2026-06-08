// src/components/ui/SectionHeader.jsx

/**
 * Renders the standard section label + title pattern used across all sections.
 *
 * @param {string} label   – e.g. "01 — Capabilities"
 * @param {string} title   – plain heading text
 * @param {string} accent  – the highlighted word(s) inside the title
 */
export default function SectionHeader({ label, title, accent }) {
  return (
    <>
      <div className="section-label">{label}</div>
      <h2 className="section-title">
        {title} <span className="gradient-text">{accent}</span>
      </h2>
    </>
  );
}
