import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../pages/Homepage/Homepage.vue'
import Login from '@/pages/Authentication/Login.vue'
import Dashboard from '@/pages/Dashboard/Dashboard.vue'
import MyAnimals from '@/pages/MyAnimals/MyAnimals.vue'
import MyDocuments from '@/pages/MyDocuments/MyDocument.vue'
import ProfilePage from '@/pages/Profile/ProfilePage.vue'
import SpecialityPage from '@/pages/Speciality/SpecialityPage.vue'

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
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/animals',
      name: 'animals',
      component: MyAnimals,
    },
    {
      path: '/documents',
      name: 'documents',
      component: MyDocuments,
    },
    {
      path: '/profil',
      name: 'Profil',
      component: ProfilePage,
    },
    {
      path: '/speciality',
      name: 'Speciality',
      component: SpecialityPage,
    },
  ],
})

export default router
