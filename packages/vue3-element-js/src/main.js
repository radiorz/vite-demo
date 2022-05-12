import { createApp } from 'vue'
import App from './App.vue'
//app.js
// import { createPinia } from 'pinia'
// app.use(createPinia())

import '@/style/main.css'
const app = createApp(App)

app.mount('#app')
