import './assets/main.css'
import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/routes'
import { store } from '@/store/index.js'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehaviour(to, from, savedPosition) {
    return { top: 0 }
  }
})


const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')