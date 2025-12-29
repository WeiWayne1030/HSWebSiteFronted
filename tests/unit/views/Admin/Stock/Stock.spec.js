import '../../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Stock from '../../../../../src/views/Admin/Stock/Stock.vue'

describe('Admin Stock view', () => {
  it('mounts', () => {
    const wrapper = shallowMount(Stock)
    expect(wrapper.exists()).toBe(true)
  })
})
