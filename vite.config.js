import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/userBookings': {
        target: 'https://ideon-labs-backendrepo.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

