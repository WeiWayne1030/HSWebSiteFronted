<template>
  <div>
    <LayoutNav />
    <LayoutHeader />
    <div v-if="isLoading" class="spinner">
      <Spinner />
    </div>
    <el-card class="user-card" v-else>
      <div class="user-info">
        <!-- 用户头像放左侧 -->
        <img
          v-if="editUserData.avatar"
          :src="editUserData.avatar"
          alt="User Avatar"
          class="user-avatar"
        />
        <img
          v-else
          :src="dummyAvatarUrl"
          alt="Dummy Avatar"
          class="user-avatar"
        />
        <!-- 用户信息放右侧 -->
        <div class="user-details">
          <h2>{{ editUserData.name }}</h2>
          <p>用戶信箱: {{ editUserData.email }}</p>
          <p>用戶帳號: {{ editUserData.account }}</p>
          <p>用戶性別: {{ editUserData.sex }}</p>
          <p>用戶電話: {{ editUserData.telNumber }}</p>
          <p>個人簡介: {{ editUserData.introduction }}</p>
          <p>帳號建立時間: {{ formatDateTime(userData.createdAt) }}</p>
          <p>帳號更新時間: {{ formatDateTime(userData.updatedAt) }}</p>
        </div>
          <!-- 编辑按钮 -->
        <div class="edit-button">
          <el-button type="primary" class="button-text" @click="toggleEdit">編輯</el-button>
        </div>
      </div>
    </el-card>
    <LayoutFooter />
    <!-- 编辑用户页面 -->
    <div v-if="isEditingUser" class="edit-user-modal">
      <div class="edit-user-modal-content">
        <h2>Edit User</h2>
        <el-form
          :model="editUserData"
          :rules="rules"
          ref="editUserForm"
          label-width="100px"
        >
          <el-form-item label="用戶名稱">
            <el-input v-model="editUserData.name" class="userIput"></el-input>
          </el-form-item>
          <el-form-item label="用戶信箱">
            <el-input v-model="editUserData.email" class="userIput"></el-input>
          </el-form-item>
          <el-form-item label="用戶帳號">
            <el-input v-model="editUserData.account" class="userIput"></el-input>
          </el-form-item>
          <el-form-item label="用戶性別">
            <el-input v-model="editUserData.sex" class="userIput"></el-input>
          </el-form-item>
          <el-form-item label="用戶電話">
            <el-input v-model="editUserData.telNumber" class="userIput"></el-input>
          </el-form-item>
          <el-form-item label="個人簡介">
            <el-input v-model="editUserData.introduction" type="textarea" class="userIput"></el-input>
          </el-form-item>
          <el-form-item label="更換頭像">
            <img
              v-if="editUserData.avatar"
              :src="editUserData.avatar"
              class="d-block img-thumbnail mb-3"
              width="50"
              height="50"
            >
            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              class="form-control-file"
              @change="handleFileChange"
            >
          </el-form-item>
          <span class="dialog-footer">
            <el-button @click="closeEditDialog">取消</el-button>
            <el-button type="primary" @click="submitForm" :loading="isSubmitting">保存</el-button>
          </span>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutNav from '@/components/LayoutNav.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import { getUserFileAPI, editUserFileAPI } from '@/apis/user'
import { ElMessage } from 'element-plus';
import Spinner from '@/components/Spinner.vue'

const isLoading = ref(true)
const userData = ref({})
const isEditingUser = ref(false);

const formatDateTime = (dateTime) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric'};
  return new Date(dateTime).toLocaleDateString('en-US', options);
};

onMounted(async () => {
  try {
    const res = await getUserFileAPI()
    if (res) {
      userData.value = res
      isLoading.value = false
    } else {
      console.error('Invalid API response:', res)
    }
  } catch (error) {
    console.error('Error fetching product:', error)
    isLoading.value = false
  }
});

const toggleEdit = () => {
  isEditingUser.value = true
};
const dummyAvatarUrl = 'https://i.imgur.com/AKiOvH7.jpg'

const initialUserData = {
  name: '',
  email: '',
  account: '',
  sex: '',
  telNumber: '',
  introduction: '',
};

const editUserData = reactive({ ...initialUserData });

const getUserData = async () => {
  try {
    const res = await getUserFileAPI();
    if (res) {
      editUserData.value = res
      editUserData.name = res.name
      editUserData.email = res.email
      editUserData.account = res.account
      editUserData.sex = res.sex
      editUserData.telNumber = res.telNumber
      editUserData.introduction = res.introduction
      editUserData.avatar = res.avatar
    } else {
      console.error('Invalid API response:', res);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

const handleFileChange = (e) => {
  const files = e.target.files;
  if (files.length > 0) {
    const file = files[0];
    editUserData.avatar = URL.createObjectURL(file);
  }
};

const updateUserData = async () => {
  try {
    // 创建一个空的JavaScript对象来存储FormData的键值对
    const formDataObject = {};

    // 使用FormData.entries()来迭代FormData的键值对
    for (const [key, value] of Object.entries(editUserData)) {
      formDataObject[key] = value;
    }

    // 发送 PUT 请求以更新用户数据，并将整个对象传递给API
    const res = await editUserFileAPI(formDataObject);

    if (res) {
      isEditingUser.value = false; // 成功后关闭编辑对话框
      ElMessage.success('保存成功');
    } else {
      console.error('Invalid API response:', res);
    }
  } catch (error) {
    console.error('Error updating user data:', error);
  }
};

const getUserDataAndOpenDialog = () => {
  getUserData();
};

getUserDataAndOpenDialog();

const submitForm = () => {
  updateUserData();
};

const closeEditDialog = () => {
  isEditingUser.value = false;
};


</script>

<style scoped>
.user-info {
  display:flex
}

/* 添加一个包装类来自定义el-card的样式 */
.user-card {
  background-color: #fff; /* 设置背景颜色 */
  border: 1px solid #e0e0e0; /* 设置边框样式 */
  border-radius: 8px; /* 设置边框圆角 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  padding: 20px;
  margin: 20px;
}

/* 用户头像样式 */
.user-avatar {
  position: absolute;
  width: 400px;
  height: 400px;
  margin-right: 20px;
  background-color: black;
}

/* 用户信息样式 */
.user-details {
  position: absolute;
  margin: 0px 37px 0px 27%;
  overflow-y: auto;
}

h2 {
  font-size: 32px;
  margin-left: 10px;
  margin-top:-10px
}

p {
  font-size: 20px;
  margin: 10px;
}

/* 编辑按钮样式 */
.edit-button {
  text-align: right;
  margin: 30% 0px 0px 35%;
}

.button-text {
  padding: 20px 100px 20px 100px;
  border-radius: 20px;
}

/* 编辑用户页面样式 */
.edit-user-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 确保模态框在其他内容之上 */
}

.edit-user-modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
}

.userIput {
  width: 700px;
  height: 40px;
}

.dialog-footer {
  padding:10px
}

.img-thumbnail {
  padding-right: 10px;
  background-color: #fff;
}




</style>