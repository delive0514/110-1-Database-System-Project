import { createRouter, createWebHashHistory } from 'vue-router'

import identifyRouter from "./identify.router";

const routes = [
  {
    path: '',
    component: () => import('../components/Navbar.vue'),
    children: [
      {
        path: '',
        alias: '/index',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/cart',
        component: () => import('../views/Cart.vue')
      },
      {
        path: '/product-list',
        component: () => import('../views/ProductList.vue'),
      },
      {
        path: '/member',
        component: () => import('../views/Member.vue')
      },
      {
        path: '/category/:category',
        component: () => import('../components/Category.vue')
      },
      {
        path: '/product/:id',
        component: () => import('../views/ProductDetail.vue')
      },
      {
        path: '/upload',
        component: () => import('../views/Upload.vue')
      }
    ]
  },
  identifyRouter,
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
