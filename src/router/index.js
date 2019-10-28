import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import NotFoundComponent from '@/components/NotExist'
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
    component: NotFoundComponent
  }
]

export default new Router({
  routes
})
