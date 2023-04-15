import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '../store/authStore';

const routes = [
  {
    path:'/',
    redirect: { name:'products' }
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      authRequired: false
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/UserInfoView.vue'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '../views/ProductsListView.vue'),
    meta: {
      authRequired: false
    }
  },
  {
    path: '/products/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductDetailView.vue'),
    meta: {
      authRequired: false
    }
  },
  {
    path: '/carts',
    name: 'carts',
    component: () => import(/* webpackChunkName: "carts" */ '../views/CartsListView.vue'),
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
  const store = useAuthStore()
  const isAuth = store.user.id != 0
  const needAuth = to.meta.authRequired
  if (needAuth && !isAuth) {
    next('login')
  } else {
    next()
  }
})

export default router
