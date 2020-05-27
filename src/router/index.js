import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Brightness from '../views/Brightness.vue'
import Contrast from '../views/Contrast.vue'
import FilterNav from '../views/FilterNav.vue'
import Hue from '../views/Hue.vue'
import Exposure from '../views/Exposure.vue'
import Vibrance from '../views/Vibrance.vue'
import Sepia from '../views/Sepia.vue'

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
      { path: 'exposure', component: Exposure },
      { path: 'vibrance', component: Vibrance },
      { path: 'sepia', component: Sepia },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
