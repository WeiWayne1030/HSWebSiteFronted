import '../../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Colors from '../../../../../src/views/Admin/Colors/Colors.vue'

describe('Admin Colors view', () => {
  it('mounts', () => {
    const wrapper = shallowMount(Colors)
    expect(wrapper.exists()).toBe(true)
  })
})
