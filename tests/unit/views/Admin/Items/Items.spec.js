import '../../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AdminItems from '../../../../../src/views/Admin/Items/Items.vue'

describe('Admin Items view', () => {
  it('mounts', () => {
    const wrapper = shallowMount(AdminItems)
    expect(wrapper.exists()).toBe(true)
  })
})
