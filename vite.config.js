
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  /* Serve from the site root. The previous '/Harsha_portfolio/' base made the
     app reachable only under that sub-path, so opening the app at '/' served a
     document whose entry script (/src/main.jsx) 404s -> blank page. */
  base: '/',

  server: {
    port: 5173,
    open: false,
  },
})
