import '../../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Methods from '../../../../../src/views/Admin/Methods/Methods.vue'

describe('Admin Methods view', () => {
  it('mounts', () => {
    const wrapper = shallowMount(Methods)
    expect(wrapper.exists()).toBe(true)
  })
})
