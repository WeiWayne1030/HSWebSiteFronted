<template>
  <LayoutNav />
  <div class="login-container">
    <h1 class="title">使用者登入</h1>
    <div class="sigin-form">
      <el-form ref="formRef" :model="formData" :rules="rules" label-width="100px">
        <el-form-item label="帳號" prop="account">
          <el-input v-model="formData.account"></el-input>
        </el-form-item>
        <el-form-item label="密碼" prop="password">
          <el-input type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item class="button">
          <el-checkbox class="seller-checkbox" name="isSeller" label="我是商家" v-model="isSeller" />
          <el-button class="login-button" type="primary" @click="isSeller ? doAdminLogin() : doLogin()">登入</el-button>
          <router-link to="/signup" class="signUp-button">註冊</router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
  <LayoutFooter />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useAlertStore } from '@/stores/alert'
const alert = useAlertStore()
const router = useRouter()
const userStore = useUserStore()


const formData = ref({
  account: '',
  password: '',
  role: 'buyer', // Default role is 'buyer'
})

const isSeller = ref(false) // Initialize the checkbox state

const rules = {
  account: [{ required: true, message: '請輸入帳號', trigger: 'blur' }],
  password: [
    { required: true, message: '請輸入密碼', trigger: 'blur' },
    { min: 6, max: 14, message: '密碼長度為6-14個字符', trigger: 'blur' }
  ],
}

const formRef = ref(null)

const doLogin = async () => {
  const { account, password } = formData.value
  const valid = await formRef.value.validate()

  if (valid) {
    try {
      await userStore.getUserInfo({ account, password })
      await alert.success
      router.replace({ path: '/' })
    } catch (error) {
      await alert.error
    }
  }
}

const doAdminLogin = async () => {
  const { account, password } = formData.value
  const valid = await formRef.value.validate()

  if (valid) {
    try {
      await userStore.getAdminInfo({ account, password })
      alert.success
      router.replace({ path: '/admin/orders' })
    } catch (error) {
      alert.error
    }
  }
}
</script>

<style>
.login-container {
  padding:100px 0px 100px 0px
}

.title {
  text-align: center;
  padding-left:90px
}

.sigin-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
.login-button {
  display: inline-block;
  background-color: #800000; 
  margin-left: 15px;
  margin-bottom: 10px;
  color: white;
  border-radius: 20px;
  padding:0px 100px 0px 100px;
  text-decoration: none;
  cursor: pointer;
}

.signUp-button {
  display: inline-block;
  background-color: #800000; 
  margin-left: 15px;
  color: white;
  border-radius: 20px;
  padding:0px 100px 0px 100px;
  text-decoration: none;
  cursor: pointer;
}

.rsignUp-button:hover {
  background-color: #800000; 
}

.seller-checkbox {
  margin-left: 85px
}


</style>
