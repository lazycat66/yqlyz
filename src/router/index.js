import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Audio from '@/components/Audio'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '*',
        redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio
    }
  ]
})
