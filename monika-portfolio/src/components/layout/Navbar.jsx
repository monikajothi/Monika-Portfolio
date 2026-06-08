// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { navLinks, meta } from '../../data/portfolio';
import { cn } from '../../utils/cn';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('');

  /* Detect scroll for elevated nav style */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', menuOpen);
    return () => document.body.classList.remove('mobile-nav-open');
  }, [menuOpen]);

  /* Highlight active section on scroll */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10',
          'py-4 backdrop-blur-xl border-b border-border transition-all duration-300',
          scrolled ? 'bg-bg/92 shadow-[0_4px_40px_rgba(0,0,0,0.5)]' : 'bg-bg/80'
        )}
      >
        {/* Logo */}
        <a href="#" className="font-mono text-sm text-neon-cyan tracking-[0.08em] hover:opacity-80 transition-opacity" onClick={close}>
          RJ<span className="text-ink-muted2">::portfolio</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'nav-link',
                  active === link.href && 'text-neon-cyan'
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire me CTA (desktop) */}
        <a
          href="#contact"
          className="hidden md:inline-block font-mono text-[0.7rem] px-4 py-2 border border-neon-cyan
                     text-neon-cyan tracking-[0.1em] uppercase transition-all duration-200
                     hover:bg-neon-cyan hover:text-bg"
        >
          Hire Me
        </a>

        {/* Hamburger (mobile) */}
        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] p-2 group"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={cn('block w-6 h-px bg-neon-cyan transition-all duration-300',
            menuOpen && 'translate-y-[7px] rotate-45')} />
          <span className={cn('block w-6 h-px bg-neon-cyan transition-all duration-300',
            menuOpen && 'opacity-0')} />
          <span className={cn('block w-6 h-px bg-neon-cyan transition-all duration-300',
            menuOpen && '-translate-y-[7px] -rotate-45')} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden flex flex-col pt-24 pb-10 px-8',
          'bg-bg/97 backdrop-blur-2xl border-r border-border transition-all duration-300',
          menuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none -translate-x-4'
        )}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
              className={cn(
                'transition-all duration-300',
                menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              )}
            >
              <a
                href={link.href}
                onClick={close}
                className="font-display text-3xl font-bold text-ink hover:text-neon-cyan transition-colors block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <a
            href="#contact"
            onClick={close}
            className="btn-primary inline-block mt-8"
          >
            Hire Me
          </a>
          <p className="font-mono text-[0.65rem] text-ink-muted mt-6 tracking-[0.1em]">
            {meta.email}
          </p>
        </div>
      </div>
    </>
  );
}
