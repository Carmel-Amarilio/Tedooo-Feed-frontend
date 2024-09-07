import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Tedooo-Feed-frontend",
  server: {
    port: 3000
  }
})
