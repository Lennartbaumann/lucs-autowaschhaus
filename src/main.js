import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/globals.css'

import { createHead } from '@vueuse/head' // ✅ NEU

const app = createApp(App)

const head = createHead() // ✅ NEU

app.use(router)
app.use(head) // ✅ NEU
app.mount('#app')
