import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Activity from '../../../../src/views/Activity/Activity.vue'

describe('Activity view', () => {
  it('mounts', () => {
    const wrapper = shallowMount(Activity)
    expect(wrapper.exists()).toBe(true)
  })
})
