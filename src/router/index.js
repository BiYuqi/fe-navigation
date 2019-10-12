import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main.vue'
import NotFoundComponent from '@/components/NotExist'
import { generateRouter } from './config'

Vue.use(Router)

export const routes = [
  {
    path: '',
    name: 'main-entry',
    component: Main,
    redirect: '/tech-blog',
    children: generateRouter
  },
  {
    path: '*',
    component: NotFoundComponent
  }
]

export default new Router({
  routes
})
