import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import IconTooling from '../../../../src/components/icons/IconTooling.vue'

describe('IconTooling', () => {
  it('renders', () => {
    const wrapper = shallowMount(IconTooling)
    expect(wrapper.exists()).toBe(true)
  })
})
