import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import LineIcon from '../../../../src/components/icons/LineIcon.vue'

describe('LineIcon', () => {
  it('renders', () => {
    const wrapper = shallowMount(LineIcon)
    expect(wrapper.exists()).toBe(true)
  })
})
