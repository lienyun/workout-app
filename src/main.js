import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import router from './router'
import '../global/style.css'


const pinia = createPinia();

loadFonts()

createApp(App)
  .use(vuetify)
  .use(pinia)
  .use(router)
  .mount('#app')
