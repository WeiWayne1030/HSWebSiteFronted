import '../../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AddItem from '../../../../../src/views/Admin/Items/AddItem.vue'

describe('Admin AddItem view', () => {
  it('mounts', () => {
    const wrapper = shallowMount(AddItem)
    expect(wrapper.exists()).toBe(true)
  })
})
