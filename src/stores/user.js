//管理用戶數據相關
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { signinAPI } from '@/apis/user';
import { useRouter } from 'vue-router'

export const useUserStore = defineStore ('user', () => {
  const router = useRouter()
  //1. 定義管理用戶數據的state
  const userInfo = ref({})
  //2. 定義獲取街口數據的action函數
  const getUserInfo = async ({ account, password }) => {
    try {
      const res = await signinAPI({ account, password })
      userInfo.value = res.user
      localStorage.setItem('token', res.token)
    } catch (error) {
      console.error("Error while signing in:", error)
      throw error 
    }
  }

  const logout = async() => {
    // 清除本地的 Token
    localStorage.removeItem('token');
    userInfo.value = {}
    router.push('/login')
  }
  //3. 以對象的格式把state和action return
  return {
    userInfo,
    getUserInfo,
    logout
  }
},{
  persist: true
})