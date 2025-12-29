import '../../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Categories from '../../../../../src/views/Admin/Categories/Categories.vue'

describe('Admin Categories view', () => {
  it('mounts', () => {
    const wrapper = shallowMount(Categories)
    expect(wrapper.exists()).toBe(true)
  })
})
