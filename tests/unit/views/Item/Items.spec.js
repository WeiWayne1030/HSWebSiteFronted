import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Items from '../../../../src/views/Item/Items.vue'

// mock API
vi.mock('../../../../src/apis/item', () => ({
  getItemsAPI: vi.fn(() => Promise.resolve({
    items: [
      { id: 1, name: 'Dummy Item 1', state: 1 },
      { id: 2, name: 'Dummy Item 2', state: 1 }
    ],
    categories: [{ id: 1, name: 'Category 1' }]
  }))
}))

describe('Items view', () => {
  it('mounts and renders items', async () => {
    const wrapper = shallowMount(Items, {
      global: {
        mocks: {
          $route: { query: { CategoryId: '1' } } // 直接 mock $route
        },
        stubs: ['ItemCard', 'ItemsNavPills', 'Spinner']
      }
    })

    // 等待 onMounted 裡的 async API 完成
    await vi.runAllTicks()

    expect(wrapper.exists()).toBe(true)

    // 檢查 items 是否正確渲染
    const text = wrapper.text()
    expect(text).toContain('Dummy Item 1')
    expect(text).toContain('Dummy Item 2')
  })
})