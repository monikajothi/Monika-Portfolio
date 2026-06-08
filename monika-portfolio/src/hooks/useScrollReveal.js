// src/hooks/useScrollReveal.js
import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport it gets the `visible` class,
 * which triggers CSS transitions defined in globals.css.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          // unobserve after reveal (fire once)
          if (options.once !== false) observer.unobserve(el);
        }
      },
      { threshold: options.threshold ?? 0.12, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.once]);

  return ref;
}

/**
 * Staggered reveal for a list of children.
 * Returns a ref for the container — children with data-stagger get
 * individual delay classes applied automatically.
 */
export function useStaggerReveal(delay = 80) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(container.querySelectorAll('[data-stagger]'));
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * delay}ms`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => child.classList.add('revealed'));
          observer.unobserve(container);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}
