import Dashboard from '@/components/Dashboard.vue'

export const routerPage = [
  ['tech-blog', '技术博客'],
  ['javascript', 'Javascript'],
  ['framework', '主流框架'],
  ['mini-program', '小程序'],
  ['angular', 'Angular'],
  ['nodejs', 'NodeJs'],
  ['mobile-develop', '移动端开发'],
  ['build-tool', '构建工具'],
  ['tools-menu', '工具手册'],
  ['visualization', '可视化'],
  ['awesome-library', '优秀开源库'],
  ['git', '版本控制'],
  ['interview', '面试宝典'],
  ['other-language', '其他语言'],
  ['about-me', '关于我']
]

export const generateRouter = routerPage.map(([en, _]) => {
  return {
    path: en,
    name: en,
    component: Dashboard
  }
})
