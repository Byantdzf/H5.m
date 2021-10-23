// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import share from './share'
import md5 from 'js-md5'
import CanvasPoster from 'vue-canvas-poster'

// 设置 js中可以访问 $cdn
import { $cdn } from '@/config'
Vue.prototype.$cdn = $cdn
Vue.config.ignoredElements = ['wx-open-launch-weapp']
// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/css/index.scss'
// 移动端适配
import 'lib-flexible/flexible.js'
import clipboard from 'clipboard'

// filters
import './filters'
Vue.config.productionTip = false
Vue.prototype.$clipboard = clipboard
Vue.prototype.$md5 = md5
Vue.use(share)
Vue.use(CanvasPoster)

Vue.directive('myTitle', {
  inserted: function(el, binding) {
    const { value } = binding
    // 方式1，直接给v-myTitle标签的 data-title 属性赋值
    if (el.dataset.title) {
      document.title = el.dataset.title
    }
    // 方式2，通过指令传参（{{xxx}}）
    else if (value && value.title) {
      document.title = value.title
    }
  },
  update(el, binding) {
    const { value } = binding
    if (el.dataset.title) {
      document.title = el.dataset.title
    } else if (value && value.title) {
      document.title = value.title
    }
  }
})

router.onError(error => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  if (isChunkLoadFailed) {
    window.location.reload()
  } else {
    console.log(error)
  }
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from) => {
  if (window.ga) {
    window.ga('set', 'page', to.meta.title) // 你可能想根据请求参数添加其他参数，可以修改这里的 to.fullPath
    window.ga('send', 'pageview')
  }
})
Vue.prototype.$BuriedPoint = (action, label, value) => {
  if (value === undefined) {
    window.ga && window.ga('send', 'event', action, label)
  } else {
    window.ga && window.ga('send', 'event', action, label, value)
  }
}
Vue.prototype.$isWeiXin = () => {
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.includes('micromessenger')) {
    return true
  } else {
    return false
  }
}
Vue.prototype.$isIOS = () => {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  if (isAndroid) {
    return false
  } else {
    return true
  }
}
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
