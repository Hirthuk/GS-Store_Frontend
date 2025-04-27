import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,  // Critical for client-side routing
  },
  build: {
    outDir: 'dist', 
  }
})
