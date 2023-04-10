import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path:'/',
    redirect: { name:'login' }
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '../views/ListProducts.vue')
  },
  {
    path: '/carts',
    name: 'carts',
    component: () => import(/* webpackChunkName: "carts" */ '../views/ListCarts.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
