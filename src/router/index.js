import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'

const AuthView = () => import('../views/AuthView')
const NewsView = () => import('../views/NewsView')
const ProfileView = () => import('../views/ProfileView')
const HomeView = () => import('../views/HomeView')

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: {
      layout: 'MainLayout',
      auth: false
    }
  },
  {
    path: '/login',
    name: 'AuthView',
    component: AuthView,
    meta: {
      layout: 'LoginLayout',
      auth: false
    }
  },
  {
    path: '/news',
    name: 'NewsView',
    component: NewsView,
    meta: {
      layout: 'MainLayout',
      auth: false
    }
  },
  {
    path: '/profile',
    name: 'ProfileView',
    component: ProfileView,
    meta: {
      layout: 'MainLayout',
      auth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth

  if (requireAuth && !store.getters['auth/isAuthenticated']) {
    next('/login?message=notAuthorized')
  } else {
    next()
  }
})

export default router
