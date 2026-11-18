import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// Preload the fonts the hero paints with (body 400 and the Sora heading), so
// the first text doesn't swap fonts late. File names are hashed, so they are
// looked up in the finished bundle.
const preloadFonts = (patterns) => ({
  name: 'preload-fonts',
  transformIndexHtml(html, ctx) {
    if (!ctx.bundle) return html
    const files = Object.keys(ctx.bundle).filter(
      (file) => file.endsWith('.woff2') && patterns.some((p) => file.includes(p))
    )
    return {
      html,
      tags: files.map((file) => ({
        tag: 'link',
        attrs: { rel: 'preload', as: 'font', type: 'font/woff2', href: `/${file}`, crossorigin: '' },
        injectTo: 'head',
      })),
    }
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imagetools(), preloadFonts(['manrope-latin-400-normal', 'sora-latin-700-normal'])],
  build: {
    rollupOptions: {
      output: {
        // Keep React in its own cacheable chunk so app updates don't
        // re-download it.
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
})
