import '../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import LayoutNav from '../../../src/components/LayoutNav.vue'

describe('LayoutNav', () => {
  it('renders', () => {
    const wrapper = shallowMount(LayoutNav)
    expect(wrapper.exists()).toBe(true)
  })
})
