<template>
  <LayoutNav />
  <LayoutHeader />
  <div class="register-form">
    <el-form ref="registerForm" :model="formData" :rules="rules" label-width="100px">
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
      <el-form-item>
        <el-button type="primary" @click="register">註冊</el-button>
        <router-link to="/login" class="router-link-button">返回</router-link>
      </el-form-item>
    </el-form>

    <el-dialog :visible.sync="successDialogVisible" title="Registration Successful">
      <p>Congratulations! Your account has been successfully registered.</p>
      <el-button type="primary" @click="redirectToLogin">OK</el-button>
    </el-dialog>
  </div>
    <LayoutFooter />
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElForm, ElFormItem, ElInput, ElButton, ElDialog } from 'element-plus';


export default {
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElDialog,
  },
  setup() {
    const router = useRouter();

    const formData = ref({
      name: '',
      account: '',
      email: '',
      password: '',
      checkPassword: '',
    });

    const successDialogVisible = ref(false);

    const rules = {
      name: [
        { required: true, message: 'Please enter your name', trigger: 'blur' },
        { max: 50, message: 'Name must not exceed 50 characters', trigger: 'blur' },
      ],
      account: [
        { required: true, message: 'Please enter your account', trigger: 'blur' },
      ],
      email: [
        { required: true, message: 'Please enter your email', trigger: 'blur' },
        { type: 'email', message: 'Invalid email format', trigger: ['blur', 'change'] },
      ],
      password: [
        { required: true, message: 'Please enter your password', trigger: 'blur' },
      ],
      checkPassword: [
        { required: true, message: 'Please confirm your password', trigger: 'blur' },
        {
          validator: (rule, value, callback) => {
            if (value !== formData.password) {
              callback(new Error('Passwords do not match'));
            } else {
              callback();
            }
          },
          trigger: 'blur',
        },
      ],
    };

    const register = () => {
      const formRef = ref('registerForm');
      formRef.value.validate(async valid => {
        if (valid) {
          // Simulate API call to check for existing account and email
          const accountExists = await checkAccountExists(formData.account);
          const emailExists = await checkEmailExists(formData.email);

          if (accountExists) {
            formRef.value.validateField('account', 'Account already exists');
            return;
          }

          if (emailExists) {
            formRef.value.validateField('email', 'Email already exists');
            return;
          }

          // Simulate successful registration
          showSuccessDialog();
        }
      });
    };

    const checkAccountExists = async account => {
      // Simulate API call
      // Replace this with actual API request
      return false;
    };

    const checkEmailExists = async email => {
      // Simulate API call
      // Replace this with actual API request
      return false;
    };

    const showSuccessDialog = () => {
      successDialogVisible.value = true;
    };

    const redirectToLogin = () => {
      successDialogVisible.value = false;
      router.push('/login');
    };

    return {
      formData,
      rules,
      register,
      successDialogVisible,
      redirectToLogin,
    };
  },
};
</script>

<style>
.register-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.router-link-button:hover {
  background-color: #800000; 
}
</style>