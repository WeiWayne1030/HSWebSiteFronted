import '../../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Banner from '../../../../../src/views/Home/components/Banner.vue'

describe('Banner component', () => {
  it('mounts', () => {
    const wrapper = shallowMount(Banner)
    expect(wrapper.exists()).toBe(true)
  })
})
