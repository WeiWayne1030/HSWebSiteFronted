import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Cart from '../../../../src/views/Cart/Cart.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useCartStore } from '../../../../src/stores/cart'
import { useAlertStore } from '../../../../src/stores/alert'

vi.useFakeTimers()

describe('Cart view', () => {
  let pinia

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('mounts with dummy cart data (no real API)', async () => {
    const cartStore = useCartStore()
    cartStore.getCartInfo = async () => {
      cartStore.cartItems = [
        {
          id: 1,
          itemQuantity: 2,
          amount: 200,
          selected: true,
          Color: {
            Item: { name: 'Dummy', image: '/public/screenshots/暫無圖片.jpg' },
            name: 'Red',
            Size: { name: 'M' },
          },
        },
      ]
      cartStore.isLoading = false
    }

    const alertStore = useAlertStore()
    alertStore.showError = vi.fn()
    alertStore.showSuccess = vi.fn()

    const wrapper = shallowMount(Cart, {
      global: {
        plugins: [pinia],
        stubs: ['router-link'],
      },
    })

    await vi.runAllTicks()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.findAll('tr').length).toBeGreaterThanOrEqual(1)
  })
})