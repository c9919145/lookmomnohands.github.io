import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/category/:slug', name: 'category', component: () => import('../views/CategoryView.vue'), props: true },
  { path: '/product/:id', name: 'product', component: () => import('../views/ProductView.vue'), props: true },
  { path: '/search', name: 'search', component: () => import('../views/SearchView.vue') },
  { path: '/cart', name: 'cart', component: () => import('../views/CartView.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
