import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCartsAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
  // 1. 定义管理用户数据的 state
  const cartCount = ref(0)
  const getCartInfo = async (pagination) => {
    try {
      const res = await getCartsAPI(pagination)
      cartCount.value = res.count // 更新 cartCount 的值
    } catch (error) {
      console.error('Error fetching product:', error)
    }
  }
  return {
    getCartInfo,
    cartCount
  }
})