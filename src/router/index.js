//createRouter：創建router instance
//createWebHistory：創建history mode的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Home from '@/views/Home/index.vue'
import Items from '@/views/Item/Items.vue'
import About from '@/views/About/About.vue'
import Wears from '@/views/Wear/Wears.vue'
import CheckOrders from '@/views/Admin/Order/CheckOrders.vue'
import AddItem from '@/views/Admin/Item/AddItem.vue'
import ItemPage from '@/views/Item/ItemPage.vue'

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
      path: '/items/1',
      component: ItemPage
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
      path: '/wears',
      component: Wears
    },
    {
      path: '/admin/orders',
      component: CheckOrders
    },
    {
      path: '/admin/item',
      component: AddItem
    }

  ]
})

export default router
