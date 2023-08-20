<template>
  <LayoutNav />
  <LayoutHeader />
  <div class="sigin-form">
    <el-form ref="formRef" :model="formData" :rules="rules" label-width="100px">
      <el-form-item label="帳號" prop="account">
        <el-input v-model="formData.account"></el-input>
      </el-form-item>
      <el-form-item label="密碼" prop="password">
        <el-input type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item class="button">
        <el-button type="primary" @click="doLogin">登入</el-button>
        <router-link to="/signup" class="router-link-button">註冊</router-link>
      </el-form-item>
    </el-form>
  </div>
    <LayoutFooter />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const router = useRouter();
const userStore = useUserStore

const formData = ref({
  account: '',
  password: '',
});

const rules = {
  account: [{ required: true, message: '請輸入帳號', trigger: 'blur' }],
  password: [
    { required: true, message: '請輸入密碼', trigger: 'blur' },
    { min: 6, max: 14, message: '密碼長度為6-14個字符', trigger: 'blur' }
],
};

const formRef = ref(null)
const doLogin = async () => {
  const { account, password } = formData.value;
  const valid = formRef.value.validate()

  if (valid) {
    try {
      await userStore.getUserInfo({ account, password });
      ElMessage({ type: 'success', message: '登入成功' });
      router.replace({ path: '/' });
    } catch (error) {
      ElMessage({ type: 'error', message: '登入失敗' });
    }
  } 
};
</script>

<style>
.sigin-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
.el-button {
margin-bottom: 10px;
}

.router-link-button {
  display: inline-block;
  padding: 0.5px 17px;
  background-color: #800000; 
  color: white;
  border-radius: 20px;
  padding:0px 100px 0px 100px;
  text-decoration: none;
  cursor: pointer;
}

.router-link-button:hover {
  background-color: #800000; 
}


</style>
