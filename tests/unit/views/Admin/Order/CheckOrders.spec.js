import '../../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CheckOrders from '../../../../../src/views/Admin/Order/CheckOrders.vue'

describe('Admin CheckOrders view', () => {
  it('mounts', () => {
    const wrapper = shallowMount(CheckOrders)
    expect(wrapper.exists()).toBe(true)
  })
})
