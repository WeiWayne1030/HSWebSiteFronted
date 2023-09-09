import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//引入elementPlus按需導入
import AutoImport from 'unplugin-auto-import/vite'
import  Component  from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  base:'/',
  publicPath: '/hsfont',
  plugins: [
    vue(),
    //...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Component({
      resolvers: [ElementPlusResolver({ importStyle: "sass"})],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/element/index.scss" as *;
        @use "@/styles/var.scss" as *;
        `
      }
    }
  }
})

