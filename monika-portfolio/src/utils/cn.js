// src/utils/cn.js
/**
 * Lightweight className joiner (no external deps).
 * Usage: cn('base', condition && 'extra', 'another')
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
