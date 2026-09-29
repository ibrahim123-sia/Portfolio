import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Commit to the dark navy theme regardless of OS preference.
document.documentElement.classList.add('dark')

// The page is prerendered to static HTML at build time (see prerender.mjs),
// so hydrate the existing markup rather than replacing it.
hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <App />
  </StrictMode>,
)
