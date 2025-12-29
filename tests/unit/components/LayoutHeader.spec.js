import '../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import LayoutHeader from '../../../src/components/LayoutHeader.vue'

describe('LayoutHeader', () => {
  it('renders', () => {
    const wrapper = shallowMount(LayoutHeader)
    expect(wrapper.exists()).toBe(true)
  })
})
