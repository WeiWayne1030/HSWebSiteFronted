import '../../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import NewItems from '../../../../../src/views/Home/components/NewItems.vue'

describe('NewItems component', () => {
  it('mounts', () => {
    const wrapper = shallowMount(NewItems, { props: { items: [] } })
    expect(wrapper.exists()).toBe(true)
  })
})
