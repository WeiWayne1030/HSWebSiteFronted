import '../../../../setup'
import { mount } from '@vue/test-utils' // ⚠️ 改成 mount
import { describe, it, expect } from 'vitest'
import { createPinia } from 'pinia'
import AddStock from '../../../../../src/views/Admin/Stock/AddStock.vue'

describe('Admin AddStock view', () => {
  it('mounts', () => {
    const pinia = createPinia()
    const wrapper = mount(AddStock, {
      global: {
        plugins: [pinia], // 必須加上 Pinia
        stubs: ['router-link', 'ElButton'] // 若組件有使用第三方元件或 router-link 可以 stub
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
})