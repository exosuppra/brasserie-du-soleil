import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Déployé sur GitHub Pages sous /brasserie-du-soleil/app/
export default defineConfig({
  plugins: [react()],
  base: '/brasserie-du-soleil/app/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
