import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueSetupExtend from "vite-plugin-vue-setup-extend"
import ElementPlus from 'unplugin-element-plus/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 此处

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // 打包时绝对路径改成相对路径
  server: {
    host: "0.0.0.0",
    proxy: {
      '/api': {
        target: 'http://ezonsport.com', // 目标服务器地址
        changeOrigin: true, // // 是否允许跨域
        rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径  api标志替换为''
        // 可以配置更多选项，如 logLevel, timeout 等
      },
    },
  },
  plugins: [
    vue(),
    VueSetupExtend(),
    ElementPlus({}),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: { // 此处
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  },
  build: {
    outDir:'docs'
  }

})
