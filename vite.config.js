import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/lookmomnohands.github.io/',
  server: {
    port: 5173,
    open: true
  }
})
