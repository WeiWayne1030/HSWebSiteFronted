//createRouter：創建router instance
//createWebHistory：創建history mode的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Items from '@/views/Item/index.vue'
import About from '@/views/About/index.vue'
import News from '@/views/News/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path & component對應關係位置
  routes: [
    {
      path: '/',
      component: Layout,
    },
    {
      path: '/items',
      component: Items
    },
        {
      path: '/about',
      component: About
    },
    {
      path: '/login',
      component: Login
    },
        {
      path: '/news',
      component: News
    }

  ]
})

export default router
