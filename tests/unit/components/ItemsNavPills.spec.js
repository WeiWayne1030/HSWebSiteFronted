import '../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ItemsNavPills from '../../../src/components/ItemsNavPills.vue'

describe('ItemsNavPills', () => {
  it('renders with empty categories', () => {
    const wrapper = shallowMount(ItemsNavPills, { props: { categories: [] } })
    expect(wrapper.exists()).toBe(true)
  })
})
