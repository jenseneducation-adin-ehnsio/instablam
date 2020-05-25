import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Brightness from '../views/Brightness.vue'
import Contrast from '../views/Contrast.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '',
    component: Home,
    children: [
      { path: '', component: Brightness },
      { path: 'contrast', component: Contrast }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
