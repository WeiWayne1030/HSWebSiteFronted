//createRouter：創建router instance
//createWebHistory：創建history mode的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Home from '@/views/Home/index.vue'
import Items from '@/views/Item/Items.vue'
import About from '@/views/About/About.vue'
import News from '@/views/News/News.vue'
import AdminOrders from '@/views/Admin/Order/AdminOrders.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path & component對應關係位置
  routes: [
    {
      path: '/',
      component: Home,
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
    },
    {
      path: '/admin/orders',
      component: AdminOrders
    }

  ]
})

export default router
