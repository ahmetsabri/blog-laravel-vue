import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import { userState } from './store/user'
const app = createApp(App)
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.baseURL = 'http://localhost:8000'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
const store = userState()
axios.interceptors.response.use(res => {
    return res   
}, err => {
    if (err.response.status == 401) {
        store.logout()
        router.push({name:'login'})
    }
})
app.mount('#app')
