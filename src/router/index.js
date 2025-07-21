import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../pages/Homepage/Homepage.vue'
import Login from '@/pages/Authentication/Login.vue'
import Dashboard from '@/pages/Dashboard/Dashboard.vue'
import Animals from '@/pages/Animals/Animals.vue'
import Documents from '@/pages/Documents/Documents.vue'
import ProfilePage from '@/pages/Profile/ProfilePage.vue'
import SpecialityPage from '@/pages/Speciality/SpecialityPage.vue'
import Message from '@/pages/Message/Message.vue'
import Appointment from '@/pages/appointment/components/AppointmentPage.vue'
import Services from '@/pages/Services/components/ServicesTable.vue'
import Tasks from '@/pages/Tasks/components/TasksComponents.vue'
import Accounting from '@/pages/Accounting/Accounting.vue'
import StockPage from '@/pages/StockManagement/StockPage.vue'

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
      component: Animals,
    },
    {
      path: '/documents',
      name: 'documents',
      component: Documents,
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilePage,
    },
    {
      path: '/speciality',
      name: 'speciality',
      component: SpecialityPage,
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: Appointment,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks,
    },
    {
      path: '/accounting',
      name: 'accounting',
      component: Accounting,
    },
    {
      path: '/stockManagement',
      name: 'stockManagement',
      component: StockPage,
    },
  ],
})

export default router
