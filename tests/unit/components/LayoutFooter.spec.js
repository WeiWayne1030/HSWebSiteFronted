import '../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import LayoutFooter from '../../../src/components/LayoutFooter.vue'

describe('LayoutFooter', () => {
  it('renders', () => {
    const wrapper = shallowMount(LayoutFooter)
    expect(wrapper.exists()).toBe(true)
  })
})
