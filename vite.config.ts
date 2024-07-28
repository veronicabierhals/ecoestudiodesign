// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    server: {
      open: true
    },
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import 'slick-carousel/slick/slick.css'; @import 'slick-carousel/slick/slick-theme.css';`
        }
      }
    },
    base: command === 'build' ? '/ecoestudiodesign/' : '/'
  }
})
