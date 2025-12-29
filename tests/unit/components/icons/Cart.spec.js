import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CartIcon from '../../../../src/components/icons/Cart.vue'

describe('Cart icon', () => {
  it('renders', () => {
    const wrapper = shallowMount(CartIcon)
    expect(wrapper.exists()).toBe(true)
  })
})
