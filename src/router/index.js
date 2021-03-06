import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
