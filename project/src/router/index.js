import { createRouter, createWebHistory } from 'vue-router'
import app from '../App.vue'
import Registration from '../components/Registration.vue'
const routes = [
    { path: '/', component: app },
    { path: '/register', component: Registration }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})