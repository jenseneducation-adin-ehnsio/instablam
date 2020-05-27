import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Brightness from '../views/Brightness.vue'
import Contrast from '../views/Contrast.vue'
import FilterNav from '../views/FilterNav.vue'
import Hue from '../views/Hue.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '',
    component: Home,
    children: [
      { path: '', component: FilterNav },
      { path: 'brightness', component: Brightness },
      { path: 'contrast', component: Contrast },
      { path: 'hue', component: Hue },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
