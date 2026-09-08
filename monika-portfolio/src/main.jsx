// src/main.jsx
//
// MAIN.JSX NOTES (reference commands)
//
// - Imports: React, ReactDOM (client), App, and global CSS.
// - `createRoot(...).render(...)`: mounts the React app into the
//   single `<div id="root">` from `index.html` using the Concurrent
//   Mode API (`react-dom/client`).
// - `type="module"` on the HTML script enables native ES modules
//   and defers execution so `#root` is always available.
// - `import './styles/globals.css'` triggers Vite/PostCSS/Tailwind to
//   generate and inject production CSS during build.
//
// Use these notes as quick-reference commands when editing or debugging.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
