import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import LogInIcon from '../../../../src/components/icons/LogInIcon.vue'

describe('LogInIcon', () => {
  it('renders', () => {
    const wrapper = shallowMount(LogInIcon)
    expect(wrapper.exists()).toBe(true)
  })
})
