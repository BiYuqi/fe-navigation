import NavBox from '@/components/NavBox'
import { routesNameMapping } from '@config/routesNameMapping'

export const generateRoutes = routesNameMapping.map(([en, _]) => {
  return {
    path: en,
    name: en,
    component: NavBox
  }
})
