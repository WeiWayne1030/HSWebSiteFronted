import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import FBIcon from '../../../../src/components/icons/FBIcon.vue'

describe('FBIcon', () => {
  it('renders', () => {
    const wrapper = shallowMount(FBIcon)
    expect(wrapper.exists()).toBe(true)
  })
})
