import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import SignUp from '../../../../src/views/SignUp/SignUp.vue'

describe('SignUp view', () => {
  // 每個測試前都建立新的 Pinia，確保 store 狀態獨立
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  it('mounts', () => {
    const wrapper = shallowMount(SignUp)
    expect(wrapper.exists()).toBe(true)
  })
})
