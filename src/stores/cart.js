import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCartsAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
  // ===== state =====
  const cartItems = ref([])
  const cartCount = ref(0)

  // ===== actions =====
  const getCartInfo = async (pagination) => {
    try {
      const res = await getCartsAPI(pagination)
      if (res && res.rows) {
        cartItems.value = res.rows
        cartCount.value = res.rows.length
      }
    } catch (error) {
      console.error('Error fetching cart:', error)
    }
  }

  const clearCart = () => {
    cartItems.value = []
    cartCount.value = 0
  }

  return {
    cartItems,
    cartCount,
    getCartInfo,
    clearCart
  }
})