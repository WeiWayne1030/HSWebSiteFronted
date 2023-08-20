//管理用戶數據相關
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { signinAPI } from '@/apis/user';

export const useUserStore = defineStore ('user', () => {
  //1. 定義管理用戶數據的state
  const userInfo = ref({})
  //2. 定義獲取街口數據的action函數
  const getUserInfo = async ({ account, password }) => {
    const res = await signinAPI({ account, password })
    userInfo.value = res.result
  }
  const clearUserInfo = () => {
    userInfo.value = {}
  }
  //3. 以對象的格式把state和action return
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
})