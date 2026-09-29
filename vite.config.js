import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    // Vendor chunking applies to the client build only — in the SSR build
    // React is external, so it can't be placed in a manual chunk.
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'motion-vendor': ['framer-motion'],
            },
          },
        },
  },
}))
