// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import  VueResource  from 'vue-resource'
import axios from 'axios' // 处理http请求
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import echarts from 'echarts'


//import locale from 'element-ui/lib/locale/lang/en'

Vue.use(VueResource)
Vue.use(axios)
Vue.use(ElementUI)


Vue.config.productionTip = false


//Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
