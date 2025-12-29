import '../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Spinner from '../../../src/components/Spinner.vue'

describe('Spinner', () => {
  it('renders spinner', () => {
    const wrapper = shallowMount(Spinner)
    expect(wrapper.exists()).toBe(true)
  })
})
