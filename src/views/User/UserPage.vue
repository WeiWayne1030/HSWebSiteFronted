<template>
  <div>
    <LayoutNav />
    <LayoutHeader />
    <div v-if="isLoading" class="spinner">
      <Spinner />
    </div>
    <el-card class="user-card" v-else>
      <div class="user-info">
        <!-- 用戶圖片放左邊 -->
        <img
          v-if="editUserData.avatar"
          :src="editUserData.avatar"
          alt="User Avatar"
          class="user-avatar"
        />
        <img
          v-else
          :src="'/public/screenshots/暫無圖片.jpg'"
          alt="Dummy Avatar"
          class="user-avatar"
        />
        <!-- 用戶訊息放右邊 -->
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
          <!-- 編輯按鈕 -->
        <div class="edit-button">
          <el-button type="primary" class="button-text" @click="toggleEdit">編輯</el-button>
        </div>
      </div>
    </el-card>
    <LayoutFooter />
    <!-- 編輯用戶頁面 -->
    <div v-if="isEditingUser" class="edit-user-modal">
      <div class="edit-user-modal-content">
        <h2>編輯個人頁面</h2>
        <el-form
          :model="editUserData"
          :rules="rules"
          ref="editUserForm"
          label-width="100px"
          @submit.stop.prevent="handleSubmit"
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
          <el-form-item label="修改密碼">
            <el-input v-model="editUserData.password" type="password" class="userIput"></el-input>
          </el-form-item>
          <el-form-item label="確認修改密碼">
            <el-input v-model="editUserData.checkPassword" type="password" class="userIput"></el-input>
          </el-form-item>
          <el-form-item label="更換頭像">
            <img
              v-if="editUserData.displayAvatar"
              :src="editUserData.displayAvatar"
              class="d-block img-thumbnail mb-3"
              width="50"
              height="50"
            >
            <input
              id="image"
              type="file"
              name="avatar"
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
import { ref, onMounted, reactive } from 'vue'
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutNav from '@/components/LayoutNav.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import { getUserFileAPI, editUserFileAPI } from '@/apis/user'
import Spinner from '@/components/Spinner.vue'
import { useAlertStore } from '@/stores/alert'
import { useRouter } from 'vue-router'

const alert = useAlertStore()
const isLoading = ref(true)
const userData = ref({})
const isEditingUser = ref(false)
const router = useRouter()

const formatDateTime = (dateTime) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric'}
  return new Date(dateTime).toLocaleDateString('en-US', options)
}
onMounted(async () => {
  try {
    const res = await getUserFileAPI()
    if (res) {
      userData.value = res
      isLoading.value = false
    } else {
      alert.showError()
    }
  } catch (error) {
    console.error('Error fetching product:', error)
    isLoading.value = false
    alert.showError()
  }
})
const toggleEdit = () => {
  isEditingUser.value = true
}
const initialUserData = {
  name: '',
  email: '',
  account: '',
  sex: '',
  telNumber: '',
  introduction: '',
  password:'',
  checkPassword:'',
  avatar:''
}
const editUserData = reactive({ ...initialUserData })
const getUserData = async () => {
  try {
    const res = await getUserFileAPI()
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
      console.error('Invalid API response:', res)
      alert.showError()
    }
  } catch (error) {
    console.error('Error fetching user data:', error)
    alert.showError()
  }
}

const handleFileChange = (e) => {
  const files = e.target.files
  if (files.length > 0) {
    const file = files[0]
    const imageURL = URL.createObjectURL(file)
    editUserData.displayAvatarFile = file
    editUserData.displayAvatar = imageURL
  }
  alert.showSuccess()
}



const updateUserData = async () => {
  try {
    // 發送API數據
    const updatedData = new FormData()
      updatedData.append('name', editUserData.name),
       updatedData.append('email', editUserData.email),
       updatedData.append('account', editUserData.account),
       updatedData.append('sex', editUserData.sex),
       updatedData.append('telNumber', editUserData.telNumber),
       updatedData.append('introduction', editUserData.introduction),
       updatedData.append('avatar', editUserData.displayAvatarFile)
       updatedData.append('password', editUserData.password)
       updatedData.append('checkPassword', editUserData.checkPassword)   
    
    const res = await editUserFileAPI(updatedData)
    if (res) {
      isEditingUser.value = false // 成功後關閉對話框
      router.replace('/userInfo')
      alert.showSuccess()
    } else {
      console.error('Invalid API response:', res)
      alert.showError()
    }
  } catch (error) {
    console.error('Error updating user data:', error)
    alert.showError()
  }
}


const getUserDataAndOpenDialog = () => {
  getUserData()
}
getUserDataAndOpenDialog()
const submitForm = () => {
  updateUserData()
}
const closeEditDialog = () => {
  isEditingUser.value = false
}
</script>

<style scoped>
.user-info {
  display:flex
}


.user-card {
  background-color: #fff; 
  border: 1px solid #e0e0e0; 
  border-radius: 8px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
}

.user-avatar {
  position: absolute;
  width: 400px;
  height: 400px;
  margin-right: 20px;
  background-color: black;
}

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

.edit-button {
  text-align: right;
  margin: 30% 0px 0px 35%;
}

.button-text {
  padding: 20px 100px 20px 100px;
  border-radius: 20px;
}

.edit-user-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
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