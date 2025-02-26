

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './style.css'

axios.defaults.baseURL = 'http://localhost:8000'

axios.defaults.withCredentials = true

createApp(App).use(router).use(store).use(VueAxios, axios).mount('#app')

