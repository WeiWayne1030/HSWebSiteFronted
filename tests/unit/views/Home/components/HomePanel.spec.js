import '../../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HomePanel from '../../../../../src/views/Home/components/HomePanel.vue'

describe('HomePanel component', () => {
  it('mounts', () => {
    const wrapper = shallowMount(HomePanel)
    expect(wrapper.exists()).toBe(true)
  })
})
