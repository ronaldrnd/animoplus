import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../pages/Homepage/Homepage.vue'
import Login from '@/pages/Authentication/Login.vue'
import Dashboard from '@/pages/Dashboard/Dashboard.vue'
import MyAnimals from '@/pages/MyAnimals/MyAnimals.vue'
import MyDocuments from '@/pages/MyDocuments/MyDocument.vue'
import ProfilePage from '@/pages/Profile/ProfilePage.vue'
import SpecialityPage from '@/pages/Speciality/SpecialityPage.vue'
import Messaging from '@/pages/messaging/Messaging.vue'
import Appointment from '@/pages/appointment/components/AppointmentPage.vue'
import Services from '@/pages/Services/components/ServicesTable.vue'
import Tasks from '@/pages/Tasks/components/TasksComponents.vue'
import Accounting from '@/pages/Accounting/Accounting.vue'
import DocumentsPro from '@/pages/DocumentsPro/DocumentsPro.vue'
import DiaryPro from '@/pages/DiaryPro/DiaryPro.vue'
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
      name: 'speciality',
      component: SpecialityPage,
    },
    {
      path: '/messaging',
      name: 'messaging',
      component: Messaging,
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
      path: '/documentsPro',
      name: 'documentsPro',
      component: DocumentsPro,
    },
    {
      path: '/diaryPro',
      name: 'diaryPro',
      component: DiaryPro,
    },
    {
      path: '/stockManagement',
      name: 'stockManagement',
      component: StockPage,
    },
  ],
})

export default router
