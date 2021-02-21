import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/login',
    component:()=> import('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) =>{
  if(to.path === '/login') return next()
  const token = window.sessionStorage.getItem("token")
  if(!token) return next('/login')
  next()
})
export default router
