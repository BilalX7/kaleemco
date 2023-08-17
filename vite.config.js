import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://kaleem-backend.000webhostapp.com'
    }
  },
  plugins: [react()],
})
