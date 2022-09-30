import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/Personal-Portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
})