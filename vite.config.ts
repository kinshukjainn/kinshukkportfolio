import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    sourcemap: false, 
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})