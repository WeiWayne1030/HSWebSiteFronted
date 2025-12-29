// tests/setup.js
import { expect } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { config } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { createPinia, setActivePinia } from 'pinia'

// ==============================
// 1️⃣ 擴充 jest-dom matchers 給 Vitest
// ==============================
expect.extend(matchers)

// ==============================
// 2️⃣ 建立全域 Pinia
// ==============================
const pinia = createPinia()
setActivePinia(pinia)

// 註冊到 Vue Test Utils，全域可用
config.global.plugins = config.global.plugins || []
config.global.plugins.push(pinia)

// ==============================
// 3️⃣ 註冊 Element Plus plugin
// ==============================
config.global.plugins.push(ElementPlus)

// ==============================
// 4️⃣ Stub 常用組件，避免測試渲染 CSS/動畫
// ==============================
config.global.stubs = {
  transition: false,
  'el-button': true,
  'el-icon': true,
  'el-input': true,
  'el-select': true,
  'el-option': true,
  'el-dialog': true,
}

// ==============================
// 5️⃣ mock window.matchMedia 避免 Element Plus 報錯
// ==============================
if (!window.matchMedia) {
  window.matchMedia = () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  })
}

// ==============================
// 6️⃣ 全域測試旗標
// ==============================
globalThis.__VUE_TEST__ = true