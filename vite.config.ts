import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery'
    }
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import 'slick-carousel/slick/slick.css'; @import 'slick-carousel/slick/slick-theme.css';`
      }
    }
  },
  base: '/ecoestudiodesign/'
})
