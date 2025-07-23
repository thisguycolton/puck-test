// vite.config.ts
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    react(),
  ],
  server: {
    watch: {
      ignored: ['**/public/**', '**/tmp/**', '**/node_modules/**']
    },
  },
})