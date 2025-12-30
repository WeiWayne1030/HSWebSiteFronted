import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import flushPromises from 'flush-promises'
import Items from '../../../../src/views/Item/Items.vue'

/**
 * mock vue-router
 * 因為 Items.vue 使用 useRoute()
 */
vi.mock('vue-router', () => ({
  useRoute: () => ({
    query: {
      CategoryId: '1'
    }
  })
}))

/**
 * mock API
 */
vi.mock('../../../../src/apis/item', () => ({
  getItemsAPI: vi.fn(() =>
    Promise.resolve({
      items: [
        {
          id: 1,
          name: 'Dummy Item A',
          price: 100,
          state: 1,
          image: '/public/screenshots/暫無圖片.jpg',
          Category: { id: 1, name: 'Shirts' }
        },
        {
          id: 2,
          name: 'Dummy Item B',
          price: 200,
          state: 1,
          image: '/public/screenshots/暫無圖片.jpg',
          Category: { id: 2, name: 'Plants' }
        }
      ],
      categories: [{ id: 1, name: 'All' }]
    })
  )
}))

describe('Items view', () => {
  it('renders ItemCard components with correct props', async () => {
    // Arrange
    const wrapper = shallowMount(Items, {
      global: {
        stubs: {
          ItemCard: true,
          ItemsNavPills: true,
          Spinner: true
        }
      }
    })

    // 等待 onMounted 裡的 API Promise
    await flushPromises()

    // Assert
    expect(wrapper.exists()).toBe(true)

    const itemCards = wrapper.findAllComponents({ name: 'ItemCard' })
    expect(itemCards).toHaveLength(2)

    expect(itemCards[0].props('item').name).toBe('Dummy Item A')
    expect(itemCards[1].props('item').name).toBe('Dummy Item B')
  })
})