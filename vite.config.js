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
		VitePWA({})
	]
})
