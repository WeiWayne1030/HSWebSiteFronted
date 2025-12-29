import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PersonIcon from '../../../../src/components/icons/Person.vue'

describe('Person icon', () => {
  it('renders', () => {
    const wrapper = shallowMount(PersonIcon)
    expect(wrapper.exists()).toBe(true)
  })
})
