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
            primary: '#F28585',
            secondary: '#000',
            info: '#1976D2'
          }
        },
        customDarkTheme: {
          dark: true,
          colors: {
            linkColor: '#fff',
            primary: '#F28585',
            secondary: '#fff',
            info: '#1976D2'
          }
        },
      }
    }
  }
)
