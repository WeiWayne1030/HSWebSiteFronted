import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import IconSupport from '../../../../src/components/icons/IconSupport.vue'

describe('IconSupport', () => {
  it('renders', () => {
    const wrapper = shallowMount(IconSupport)
    expect(wrapper.exists()).toBe(true)
  })
})
