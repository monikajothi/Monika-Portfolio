// src/hooks/useMouse.js
import { useEffect, useRef } from 'react';

/**
 * Attaches a mousemove listener and applies a subtle parallax
 * translation to the target element.
 *
 * @param {number} strength – how many pixels to translate (default 20)
 */
export function useParallax(strength = 20) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handle = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * strength;
      const y = (e.clientY / window.innerHeight - 0.5) * (strength * 0.65);
      el.style.transform = `translate(calc(-50% + ${x}px), ${y}px)`;
    };

    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, [strength]);

  return ref;
}
