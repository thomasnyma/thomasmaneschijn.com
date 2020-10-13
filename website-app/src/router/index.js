import { createRouter, createWebHashHistory } from 'vue-router'
import Landing from '../views/Landing.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import(/* webpackChunkName: "experience" */ '../views/Experience.vue')
  },
  {
    path: '/get-in-touch',
    name: 'GetInTouch',
    component: () => import(/* webpackChunkName: "get-in-touch" */ '../views/GetInTouch.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
