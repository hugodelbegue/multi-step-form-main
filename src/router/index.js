import { createRouter, createWebHistory } from 'vue-router'
import YourInfo from '../views/YourInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/your-info',
      name: 'yourinfo',
      component: YourInfo
    },
    {
      path: '/select-plan',
      name: 'selectplan',
      component: () => import('../views/SelectPlan.vue')
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
