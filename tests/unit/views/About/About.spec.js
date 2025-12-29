import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import About from '../../../../src/views/About/About.vue'

describe('About view', () => {
  it('mounts', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.exists()).toBe(true)
  })
})
