import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
    children:[
      {
        path:'users',
        component:() => import('../views/user/user.vue')
      },
      {
        path:'roles',
        component:() => import('../views/authority/role.vue')
      },
      {
        path:'rights',
        component:() => import('../views/authority/list.vue')
      },
      {
        path:'goods',
        component:() => import('../views/shop/shop_list.vue')
      },
      {
        path:'params',
        component:() => import('../views/shop/classify.vue')
      },
      {
        path:'categories',
        component:() => import('../views/shop/shop_class.vue')
      },
      {
        path:'orders',
        component:() => import('../views/order/order.vue')
      },
      {
        path:'reports',
        component:() => import('../views/data/data.vue')
      },
    ]
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
