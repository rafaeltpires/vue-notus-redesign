import './bootstrap'
// import css
import "@/assets/styles/index.css"

import {createApp} from "vue"
import {createPinia} from "pinia"

import App from "@/App.vue"
import router from "@/router"

// Create and mount the root instance.
const app = createApp(App)

// instance pinia
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')