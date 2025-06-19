import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../pages/Homepage/Homepage.vue'
import Login from '@/pages/Authentication/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
})

export default router
