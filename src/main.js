import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 百度统计code
if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-use-before-define
  const _hmt = _hmt || [];
  (function () {
    const hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?7deac964cb703e726819b11e47f5042c'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  })()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
