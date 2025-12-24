import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCartsAPI, delCartAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
  // ===== state =====
  const cartItems = ref([])
  const isLoading = ref(false)

  // ===== getters =====
  const cartCount = computed(() => cartItems.value.length)

  // ===== actions =====
  const getCartInfo = async (pagination) => {
    isLoading.value = true
    try {
      const res = await getCartsAPI(pagination)
      if (res && res.rows) {
        // 預設每個商品都加上 selected: false
        cartItems.value = res.rows.map(item => ({
          ...item,
          selected: false
        }))
      } else {
        console.error('Invalid API response:', res)
        cartItems.value = []
      }
    } catch (error) {
      console.error('Error fetching cart:', error)
      cartItems.value = []
    } finally {
      isLoading.value = false
    }
  }

  const deleteCartItem = async (id) => {
    try {
      await delCartAPI(id)
      cartItems.value = cartItems.value.filter(i => i.id !== id)
    } catch (error) {
      console.error('Error deleting cart item:', error)
    }
  }

  const clearCart = () => {
    cartItems.value = []
  }

  return {
    cartItems,
    cartCount,
    isLoading,
    getCartInfo,
    deleteCartItem,
    clearCart
  }
})