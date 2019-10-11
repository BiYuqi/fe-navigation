import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main.vue'
import { generateRouter } from './config'

Vue.use(Router)

export const routes = [
  {
    path: '',
    name: 'main-entry',
    component: Main,
    redirect: '/tech-blog',
    children: generateRouter
  }
]

export default new Router({
  routes
})
