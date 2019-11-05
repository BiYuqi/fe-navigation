import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Experiment from '@/components/Experiment'
import { generateRoutes } from './generateRoutes'

Vue.use(Router)

export const routes = [
  {
    path: '',
    name: 'main-entry',
    component: Main,
    redirect: '/tech-blog',
    children: generateRoutes
  },
  {
    path: '/experiment',
    name: 'experiment',
    component: Experiment
  },
  {
    path: '*',
    redirect: '/tech-blog'
  }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (process.env.NODE_ENV === 'production') {
    if (to.path) window._hmt.push(['_trackPageview', '/#' + to.fullPath])
  }
  next()
})

export default router
