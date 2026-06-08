/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT:  '#050508',
          surface:  '#0a0a12',
          surface2: '#0f0f1a',
        },
        border: {
          DEFAULT: '#1a1a2e',
          strong:  '#252540',
        },
        neon: {
          cyan:   '#00f5ff',
          cyan2:  '#00c8d4',
          pink:   '#ff2d78',
          purple: '#a855f7',
          green:  '#00ff88',
          amber:  '#ffb300',
        },
        ink: {
          DEFAULT: '#e8e8f0',
          muted:   '#6b6b8a',
          muted2:  '#9898b8',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono:    ['"Space Mono"', 'monospace'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        gridShift: {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.7)' },
        },
        rotateRing: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        rotateRingReverse: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'fade-in-up':      'fadeInUp 0.7s ease both',
        'fade-in-up-d1':   'fadeInUp 0.7s 0.1s ease both',
        'fade-in-up-d2':   'fadeInUp 0.7s 0.2s ease both',
        'fade-in-up-d3':   'fadeInUp 0.7s 0.3s ease both',
        'fade-in-up-d4':   'fadeInUp 0.7s 0.4s ease both',
        'fade-in-up-d5':   'fadeInUp 0.7s 0.5s ease both',
        'grid-shift':      'gridShift 20s linear infinite',
        'pulse-glow':      'pulseGlow 2s infinite',
        'rotate-ring':     'rotateRing 8s linear infinite',
        'rotate-ring-rev': 'rotateRingReverse 12s linear infinite',
      },
    },
  },
  plugins: [],
};
