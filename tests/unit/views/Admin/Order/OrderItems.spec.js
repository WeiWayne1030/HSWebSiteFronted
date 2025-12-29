import '../../../../setup' // 你的全域 setup
import { shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { describe, it, beforeEach, expect } from 'vitest'
import OrderItems from '../../../../../src/views/Admin/Order/OrderItems.vue'

// 如果你的 store 使用 persistedstate，不用特別 mock plugin
// Pinia 2.x 的 createPinia 就可以用
describe('Admin OrderItems view', () => {

  // 每個測試前都建立新的 Pinia，確保 store 狀態獨立
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  it('mounts the component', () => {
    const wrapper = shallowMount(OrderItems, {
      global: {
        plugins: [
          // 如果有其他插件，可以在這裡加
        ],
      },
    })

    expect(wrapper.exists()).toBe(true)
  })
})