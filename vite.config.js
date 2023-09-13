import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/workout-app/',
	// base: '/',
	plugins: [
		vue(),
		vuetify({ autoImport: true }),
		VitePWA({
      // https://web.dev/add-manifest/
      manifest: {
        // APP 名稱
        name: '今天健什麼',
        short_name: 'workout',
        // APP 說明
        description: 'Better late than never.',
        // APP 主題顏色
        theme_color: '#FF6B81',
         // APP 顯示範圍
        scope: './',
        // APP 開始畫面網址
        start_url: './',
        // 顯示模式
        // browser: 瀏覽器
        // fullscreen: 全螢幕，隱藏所有瀏覽器 UI
        // standalone: 隱藏標準瀏覽器 UI ，如 URL 欄
        // minimal-ui: 有最小導覽列 UI
        display: 'standalone',
        // icon 路徑，./ 代表 public
        icons: [
          // {
          //   src: './lunges.png',
          //   sizes: '192x192',
          //   type: 'image/png'
          // },
          {
            src: './pwa-logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
	]
})
