import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Sitemap({
      hostname: 'https://www.lucsautowaschhaus.de',
    }),
  ]
})
