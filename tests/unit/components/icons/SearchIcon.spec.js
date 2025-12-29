import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SearchIcon from '../../../../src/components/icons/SearchIcon.vue'

describe('SearchIcon', () => {
  it('renders', () => {
    const wrapper = shallowMount(SearchIcon)
    expect(wrapper.exists()).toBe(true)
  })
})
