import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const About = () => import(/* webpackChunkName: "about-view" */'./views/About')
const DefaultLayout = () => import(/* webpackChunkName: "default-layout" */'./layouts/Default')
const Domains = () => import(/* webpackChunkName: "domain-view" */'./views/Domains')
const Home = () => import(/* webpackChunkName: "home-view" */'./views/Home')
const Photos = () => import(/* webpackChunkName: "photos-view" */'./views/Photos')

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
          path: '/fale_conosco',
          name: 'fale_conosco',
          component: About
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
