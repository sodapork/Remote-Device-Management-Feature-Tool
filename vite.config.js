import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Remote-Device-Management-Feature-Tool/',
  server: {
    port: 3000,
    open: true
  }
}) 