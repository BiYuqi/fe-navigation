import NavBox from '@/components/NavBox'
import { routerPage } from '@config/routerConfig'

export const generateRoutes = routerPage.map(([en, _]) => {
  return {
    path: en,
    name: en,
    component: NavBox
  }
})
