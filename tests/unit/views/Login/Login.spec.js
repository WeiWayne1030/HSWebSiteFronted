import '../../../setup'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Login from '../../../../src/views/Login/Login.vue'
import { setupPinia } from '../../../utils/piniaTestUtils'
import { useUserStore } from '../../../../src/stores/user'
import { useAlertStore } from '../../../../src/stores/alert'

describe('Login view', () => {
  it('mounts and stubs user store to avoid real API', async () => {
    setupPinia()
    const userStore = useUserStore()
    userStore.getUserInfo = vi.fn(() => Promise.resolve())
    userStore.getAdminInfo = vi.fn(() => Promise.resolve())
    const alert = useAlertStore()
    alert.showError = vi.fn()
    alert.showSuccess = vi.fn()

    const wrapper = shallowMount(Login, { global: { stubs: ['router-link'] } })
    expect(wrapper.exists()).toBe(true)
  })
})
