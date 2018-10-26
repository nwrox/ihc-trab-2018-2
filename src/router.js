import Vue from 'vue'
import Router from 'vue-router'

import DefaultLayout from './layouts/Default'
import Domains from './views/Domains'
import Home from './views/Home'
import Photos from './views/Photos'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/fotos',
          name: 'fotos',
          component: Photos
        },
        {
          path: '/instalacoes',
          name: 'instalacoes',
          component: Domains
        }
      ]
    }
  ]
})
