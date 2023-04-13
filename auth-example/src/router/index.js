import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import { store } from '../store/authStore';

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
    component: () => import(/* webpackChunkName: "products" */ '../views/ListProducts.vue'),
  },
  {
    path: '/carts',
    name: 'carts',
    component: () => import(/* webpackChunkName: "carts" */ '../views/ListCarts.vue'),
    meta: {
      authRequired: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const st = store()
  const isAuth = st.user.id != 0
  const needAuth = to.meta.authRequired
  if (needAuth && !isAuth) {
    next('login')
  } else {
    next()
  }
})

export default router
