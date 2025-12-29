import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Component from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Component({
      // ⚠️ 不 import CSS，避免 Vitest 報錯
      resolvers: [ElementPlusResolver({ importStyle: false })],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // 將 CSS / SCSS mock 成空物件
      '\\.css$': fileURLToPath(new URL('./tests/__mocks__/styleMock.js', import.meta.url)),
      '\\.scss$': fileURLToPath(new URL('./tests/__mocks__/styleMock.js', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;
        `,
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.js'],
    css: false, // Vitest 不解析 CSS
    deps: {
      inline: [/element-plus/], // 將 Element Plus module 內聯，避免 import CSS
    },
  },
})