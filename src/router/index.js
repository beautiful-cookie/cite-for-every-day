import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home', 
    component: HomeView
  }, 
  {
    path: '*',
    component: () => import('../views/404.vue')
  },
  {
    path: '/Cite-generator',
    name: 'Cite-generator',
    component: () => import('../views/Cite-generator.vue')
  }, 
  {
    path: '/Authors-filter',
    name: 'Authors-filter',
    component: () => import('../views/AuthorsFilter.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
