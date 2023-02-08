import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/admin/Login.vue'
import Update from '../views/admin/Update.vue'

const authKontrol = (to,from,next) =>{
  let user = localStorage.getItem("user")

  if (!user) {
    next({name:"update"})
  }else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/update',
    name: 'update',
    component: Update,
    beforeEnter:authKontrol
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
