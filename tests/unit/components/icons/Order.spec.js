import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import OrderIcon from '../../../../src/components/icons/Order.vue'

describe('Order icon', () => {
  it('renders', () => {
    const wrapper = shallowMount(OrderIcon)
    expect(wrapper.exists()).toBe(true)
  })
})
