import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import ItemPage from '../../../../src/views/Item/ItemPage.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useAlertStore } from '../../../../src/stores/alert'

// Mock APIs
vi.mock('@/apis/item', () => ({
  getItemAPI: vi.fn((id) => Promise.resolve({
    item: {
      id,
      name: 'Dummy Item',
      price: 100,
      image: '/public/screenshots/暫無圖片.jpg',
      Colors: [{ id: 1, name: 'Red', itemStock: 5, Size: { name: 'M' } }]
    },
    mergedStocks: [{ color: 'Red', sizes: [{ name: 'M' }] }]
  }))
}))

vi.mock('@/apis/user', () => ({
  addCartAPI: vi.fn(() => Promise.resolve({}))
}))

// Mock vue-router
vi.mock('vue-router', () => ({
  useRoute: () => ({
    params: { id: '1' },
    query: { CategoryId: '1' }
  }),
  useRouter: () => ({
    push: vi.fn()
  })
}))

describe('ItemPage view', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)

    const alert = useAlertStore()
    alert.showError = vi.fn()
    alert.showSuccess = vi.fn()
  })

  it('mounts with mocked APIs and Pinia', async () => {
    const wrapper = shallowMount(ItemPage, {
      global: {
        stubs: ['router-link']
      }
    })

    // 等待 onMounted 裡的 async 完成
    await nextTick()   // 第一次 tick 觸發 onMounted
    await nextTick()   // 第二次 tick 等待 store 更新和 DOM 重新渲染

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Dummy Item')
  })
})