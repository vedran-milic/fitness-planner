import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslintPlugin({
    include: "src/**/*.{js,jsx,ts,tsx,vue}",
    exclude: ['node_modules', 'index.html', 'vite/preload-helper']
  }), vue()]
})
