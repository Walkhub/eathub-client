import { createApp } from 'vue'
import './index.css'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import socketPlugin from './plugins/socketPlugin'
import axios from 'axios'

import App from './App.vue'
const app = createApp(App);

app.use(router)
app.use(store)
app.use(socketPlugin)
app.use(VueAxios, axios)


app.mount('#app');