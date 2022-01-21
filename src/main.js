import { createApp } from 'vue'
import './index.css'
import router from './router'
import store from './store'
import socketPlugin from './plugins/socketPlugin'

import App from './App.vue'
const app = createApp(App);

app.use(router)
app.use(store)
app.use(socketPlugin)

app.mount('#app');