import {createWebHashHistory, createRouter} from 'vue-router'
export const routes = [
  {
    path: '/page1',
    component: () => import('/@/views/Page1.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export default router
