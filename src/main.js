import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueGAPI from "vue-gapi"

const apiConfig = {
  apiKey: "AIzaSyDNhv7JTIJcBbk84rGb-UC7ys2TLK8669Q",
  clientId: "1043481894501-q6j3la1kio3o1be811iu6iejnfbgrooo.apps.googleusercontent.com",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  scope: "https://www.googleapis.com/auth/spreadsheets" // See, edit, create, and delete your spreadsheets in Google 
};

loadFonts()

createApp(App)
  .use(vuetify)
  .use(VueGAPI, apiConfig)
  .mount('#app')
