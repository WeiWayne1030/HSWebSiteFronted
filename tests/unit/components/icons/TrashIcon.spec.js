import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TrashIcon from '../../../../src/components/icons/TrashIcon.vue'

describe('TrashIcon', () => {
  it('renders', () => {
    const wrapper = shallowMount(TrashIcon)
    expect(wrapper.exists()).toBe(true)
  })
})
