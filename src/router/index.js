//createRouter：創建router instance
//createWebHistory：創建history mode的路由

import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '@/views/SignUp/SignUp.vue'
import Home from '@/views/Home/index.vue'
import Items from '@/views/Item/Items.vue'
import About from '@/views/About/About.vue'
import Activity from '@/views/Activity/Activity.vue'
import CheckOrders from '@/views/Admin/Order/CheckOrders.vue'
import AddItem from '@/views/Admin/Item/AddItem.vue'
import ItemPage from '@/views/Item/ItemPage.vue'
import LogIn from '@/views/LogIn/LogIn.vue'
import Cart from '@/views/Cart/Cart.vue'
import Stock from '@/views/Admin/Stock/Stock.vue'
import BuildOrder from '@/views/Order/OrderPage.vue'
import OrderInfo from '@/views/Order/OrderInfo.vue'


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
      path: `/items/:id`,
      component: ItemPage
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/login',
      component: LogIn
    },
        {
      path: '/activity',
      component: Activity
    },
    {
      path: '/admin/orders',
      component: CheckOrders
    },
    {
      path: '/admin/item',
      component: AddItem
    },
    {
      path:'/admin/stock',
      component: Stock
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/order',
      component: BuildOrder
    },
    {
      path: '/orderInfo',
      component: OrderInfo
    }

  ]
})

export default router
