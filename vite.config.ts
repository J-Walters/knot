import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: '/knot/',
  build: {
    outDir: 'docs',     // 👈 puts built files in /docs so GitHub Pages can serve them
  }
})
