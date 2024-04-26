import VCart from '@/components/v-cart.vue'
import VCatalog from '@/components/v-catalog.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'catalog',
    component: VCatalog
  },
  {
    path: '/cart',
    name: 'cart',
    component: VCart,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
