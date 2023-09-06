<template>
  <div>
    <LayoutNav />
    <LayoutHeader />
    <div v-if="isLoading" class="spinner">
      <Spinner />
    </div>
    <el-card class="user-card" >
      <div class="user-info">
        <!-- 用户头像放左侧 -->
        <div class="user-avatar">
          <img :src="userData.avatar" alt="User Avatar" />
        </div>
        <!-- 用户信息放右侧 -->
        <div class="user-details">
          <h2>{{ userData.name }}</h2>
          <p>用戶信箱: {{ userData.email }}</p>
          <p>用戶帳號: {{ userData.account }}</p>
          <p>用戶性別: {{ userData.sex }}</p>
          <p>用戶電話: {{ userData.telNumber }}</p>
          <p>個人簡介: {{ userData.introduction }}</p>
          <p>帳號建立時間: {{ formatDateTime(userData.createdAt) }}</p>
          <p>帳號更新時間: {{ formatDateTime(userData.updatedAt) }}</p>
        </div>
          <!-- 编辑按钮 -->
        <div class="edit-button">
          <el-button type="primary" class="button-text">編輯</el-button>
        </div>
      </div>
    </el-card>
    <LayoutFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutNav from '@/components/LayoutNav.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import { getUserFileAPI } from '@/apis/user'
import Spinner from '@/components/Spinner.vue'


const isLoading = ref(true)
const userData = ref({})



// const userData = ref({
//   email: 'buyer002@example.com',
//   account: 'buyer002',
//   name: 'buyer002',
//   avatar: 'https://loremflickr.com/320/240/people',
//   sex: 'male',
//   telNumber: '0933333333',
//   introduction: 'I am 001 002',
//   createdAt: new Date(),
//   updatedAt: new Date(),
// });

const formatDateTime = (dateTime) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
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
  margin-left: 30%;
}

h2 {
  font-size: 36px;
  margin: 0;
  margin-bottom: 10px;
}

p {
  font-size: 24px;
  margin: 0;
}

/* 编辑按钮样式 */
.edit-button {
  text-align: right;
  margin: 25% 0px 0px 35%;
}

.button-text {
  padding: 20px 100px 20px 100px;
  border-radius: 20px;
}
</style>