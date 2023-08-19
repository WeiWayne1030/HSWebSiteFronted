<template>
  <LayoutNav />
  <LayoutHeader />
  <div class="sigin-form">
    <el-form ref="signinForm" :model="formData" :rules="rules" label-width="100px">
      <el-form-item label="帳號" prop="account">
        <el-input v-model="formData.account"></el-input>
      </el-form-item>
      <el-form-item label="密碼" prop="password">
        <el-input type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item class="button">
        <el-button type="primary" @click="login">登入</el-button>
        <router-link to="/signup" class="router-link-button">註冊</router-link>
      </el-form-item>
    </el-form>

    <el-dialog :visible.sync="successDialogVisible" title="Registration Successful">
      <p>Congratulations! Your account has been successfully registered.</p>
      <el-button type="primary" @click="directToSignUp">OK</el-button>
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
      account: [
        { required: true, message: 'Please enter your account', trigger: 'blur' },
      ],
      password: [
        { required: true, message: 'Please enter your password', trigger: 'blur' },
      ]
    };

    const signin = () => {
      const formRef = ref('signinForm');
      formRef.value.validate(async valid => {
        if (valid) {
          // Simulate API call to check for existing account and email
          const accountExists = await checkAccountExists(formData.account);
          if (accountExists) {
            formRef.value.validateField('account', 'Account already exists');
            return;
          }

          // Simulate successful registration
          showSuccessDialog();
        }
      });
    };

    const showSuccessDialog = () => {
      successDialogVisible.value = true;
    };

    const directToSignUp = () => {
      successDialogVisible.value = false;
      router.push('/login');
    };

    return {
      formData,
      rules,
      signin,
      successDialogVisible,
      directToSignUp,
    };
  },
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
