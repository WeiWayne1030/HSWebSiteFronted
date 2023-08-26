<template>
  <LayoutNav />
  <LayoutHeader />
  <div class="register-form">
    <el-form ref="formRef" :model="formData" :rules="rules" label-width="100px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="帳號" prop="account">
        <el-input v-model="formData.account"></el-input>
      </el-form-item>
      <el-form-item label="信箱" prop="email">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item label="密碼" prop="password">
        <el-input type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item label="確認密碼" prop="checkPassword">
        <el-input type="password" v-model="formData.checkPassword"></el-input>
      </el-form-item>
      <el-checkbox class="checkbox" name="isSeller" label="我要註冊為商家" v-model="formData.role" />
      <el-form-item>
        <el-button type="primary" @click="siginup">註冊</el-button>
        <router-link to="/login" class="router-link-button">返回</router-link>
      </el-form-item>
    </el-form>

  </div>
    <LayoutFooter />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signupAPI } from '@/apis/user'
import { ElForm, ElFormItem, ElInput, ElButton, ElCheckbox } from 'element-plus'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'



const router = useRouter()

const formData = ref({
  name: '',
  account: '',
  email: '',
  password: '',
  checkPassword: '',
  role: ''
})


const rules = {
  name: [
    { required: true, message: '請輸入名稱', trigger: 'blur' },
    { max: 20, message: '名稱不得超過20個字', trigger: 'blur' },
  ],
  account: [
    { required: true, message: '請輸入帳號', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '請輸入信箱', trigger: 'blur' },
    { type: 'email', message: '無效的信箱格式', trigger: ['blur', 'change'] },
  ],
  password: [
    { required: true, message: '請輸入密碼', trigger: 'blur' },
  ],
  checkPassword: [
    { required: true, message: '請再次輸入密碼', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== formData.value.password) {
          callback(new Error('密碼與確認密碼不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur',
    },
  ],
};
const formRef = ref(null)
const siginup = async() => {
  
  const { account, password, email } = formData.value
  const valid = formRef.value.validate()
  
    if (valid) {
      try {
      const res = await signupAPI({ account, password, email })
      console.log(res)
      ElMessage({ type: 'success', message: '註冊成功' })
      router.replace({ path: '/' })
    } catch (error) {
      ElMessage({ type: 'error', message: '註冊失敗' })
    }
    }
  }
</script>

<style>
.register-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.checkbox {
  padding-left: 40%;
  padding-bottom: 10px;
}

.router-link-button:hover {
  background-color: #800000; 
}
</style>