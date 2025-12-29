import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import OrderPage from '../../../../src/views/Order/OrderPage.vue'

describe('OrderPage view', () => {
  it('mounts', () => {
    const wrapper = shallowMount(OrderPage)
    expect(wrapper.exists()).toBe(true)
  })
})
