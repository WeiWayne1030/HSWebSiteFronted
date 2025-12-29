import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import LogOutIcon from '../../../../src/components/icons/LogOutIcon.vue'

describe('LogOutIcon', () => {
  it('renders', () => {
    const wrapper = shallowMount(LogOutIcon)
    expect(wrapper.exists()).toBe(true)
  })
})
