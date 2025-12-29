import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import IGIcon from '../../../../src/components/icons/IGIcon.vue'

describe('IGIcon', () => {
  it('renders', () => {
    const wrapper = shallowMount(IGIcon)
    expect(wrapper.exists()).toBe(true)
  })
})
