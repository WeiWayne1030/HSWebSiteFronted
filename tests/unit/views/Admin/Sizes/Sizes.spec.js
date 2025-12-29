import '../../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Sizes from '../../../../../src/views/Admin/Sizes/Sizes.vue'

describe('Admin Sizes view', () => {
  it('mounts', () => {
    const wrapper = shallowMount(Sizes)
    expect(wrapper.exists()).toBe(true)
  })
})
