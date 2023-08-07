import { createRouter, createWebHistory } from 'vue-router'
import Yourinfo from '../views/Yourinfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/yourinfo',
      name: 'yourinfo',
      component: Yourinfo
    },
    {
      path: '/selectplan',
      name: 'selectplan',
      component: () => import('../views/Selectplan.vue')
    },
    {
      path: '/addons',
      name: 'addons',
      component: () => import('../views/Addons.vue')
    },
    {
      path: '/summary',
      name: 'summary',
      component: () => import('../views/Summary.vue')
    }
  ]
})
export default router
