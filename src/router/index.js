//createRouter：創建router instance
//createWebHistory：創建history mode的路由

import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '@/views/SignUp/SignUp.vue'
import Home from '@/views/Home/index.vue'
import Items from '@/views/Item/Items.vue'
import About from '@/views/About/About.vue'
import Activity from '@/views/Activity/Activity.vue'
import CheckOrders from '@/views/Admin/Order/CheckOrders.vue'
import Colors from '@/views/Admin/Colors/Colors.vue'
import Sizes from '@/views/Admin/Sizes/Sizes.vue'
import Categories from '@/views/Admin/Categories/Categories.vue'
import Methods from '@/views/Admin/Methods/Methods.vue'
import AddItem from '@/views/Admin/Stock/AddStock.vue'
import ItemPage from '@/views/Item/ItemPage.vue'
import LogIn from '@/views/LogIn/LogIn.vue'
import Cart from '@/views/Cart/Cart.vue'
import Stock from '@/views/Admin/Stock/Stock.vue'
import BuildOrder from '@/views/Order/OrderPage.vue'
import OrderInfo from '@/views/Order/OrderInfo.vue'
import AllItems from '@/views/Admin/Items/Items.vue'
import UserPage from '@/views/User/UserPage.vue'

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
      path:'/admin/items',
      component: AllItems
    },
    {
      path:'/admin/colors',
      component: Colors
    },
    {
      path:'/admin/sizes',
      component: Sizes
    },
    {
      path:'/admin/methods',
      component: Methods
    },
        {
      path:'/admin/categories',
      component: Categories
    },
    // {
    //   path:'/admin/:id/Stock/update',
    //   component: UpdateStock
    // },
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
    },
    {
      path: '/userInfo',
      component: UserPage
    }
  ]
})

// // 添加全局前置守卫
// router.beforeEach((to, from, next) => {
//   // 在这里可以获取用户的角色信息，例如从 Vuex 中获取
//   // 假设您有一个存储用户角色的 Vuex 模块，您可以这样获取用户角色
//   // const userRole = store.state.user.role;

//   // 假设用户角色信息存储在用户令牌中，您可以这样获取用户角色
//   const userRole = localStorage.getItem('user');

//   // 假设买家角色为 'buyer'，卖家角色为 'seller'
//   if (to.matched.some(record => record.meta.requiresBuyer) && userRole !== 'buyer') {
//     // 如果访问需要买家权限的页面但用户不是买家，重定向到其他页面或显示错误信息
//     next('/admin/items'); // 重定向到首页或其他页面
//   } else if (to.matched.some(record => record.meta.requiresSeller) && userRole !== 'seller') {
//     // 如果访问需要卖家权限的页面但用户不是卖家，重定向到其他页面或显示错误信息
//     next('/'); // 重定向到首页或其他页面
//   } else {
//     // 如果用户有足够的权限，继续导航到目标页面
//     next();
//   }
// })

export default router
