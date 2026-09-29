import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Rendered at build time by prerender.mjs to produce static HTML for #root.
// No browser APIs run here — all window/document access lives in effects.
export function render() {
  return renderToString(<App />);
}
