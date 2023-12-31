// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { md3 } from "vuetify/blueprints";

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    blueprint: md3,
    theme: {
      defaultTheme: 'customLightTheme',
      themes: {
        customLightTheme: {
          dark: false,
          colors: {
            linkColor: '#000000DE',
            primary: '#FF6B81', //桃紅色
            secondary: '#FDCB6E', //黃色
            info: '#2F3542',//鐵灰色
            background: '#F4E3E3',
            white: '#F4F4F4'
          }
        },
        customDarkTheme: {
          dark: true,
          colors: {
            linkColor: '#fff',
            primary: '#F28585',
            secondary: '#86A69D',
            info: '#1976D2'
          }
        },
      }
    }
  }
)
