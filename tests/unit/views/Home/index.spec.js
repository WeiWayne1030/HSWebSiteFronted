import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Home from '../../../../src/views/Home/index.vue'

describe('Home view', () => {
  it('mounts', () => {
    const wrapper = shallowMount(Home, { global: { stubs: ['Banner', 'HomePanel', 'router-link'] } })
    expect(wrapper.exists()).toBe(true)
  })
})
