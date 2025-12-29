import '../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import EmptyPage from '../../../src/components/EmptyPage.vue'

describe('EmptyPage', () => {
  it('renders', () => {
    const wrapper = shallowMount(EmptyPage)
    expect(wrapper.exists()).toBe(true)
  })
})
