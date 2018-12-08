import Vue from 'vue'
import App from './App'
import router from './router'
import AntDesign from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false
Vue.use(AntDesign)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
