//createRouter：創建router instance
//createWebHistory：創建history mode的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Items from '@/views/Item/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path & component對應關係位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          //path: ''代表預設路徑訪問“/”時也會進行渲染
          path: '',
          component: Home
        },
      ]
    },
    {
      path: '/items',
      component: Items
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
