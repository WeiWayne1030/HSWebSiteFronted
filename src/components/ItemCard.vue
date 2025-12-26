<template>
<el-row>
  <el-col :span="15" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? -1 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <div>
          <el-image class="image" :src="item.image"></el-image>
          <h4 class="name">{{ item.name }}</h4>
          <p class="card-price">${{ item.price }}</p>
          <span class="badge badge-secondary">{{ item.Category.name }}</span>
        <div class="bottom clearfix">
            <el-button type="text" class="button details-button" :loading="loading" @click="handleButtonClick">
              <router-link :to="`/items/${item.id}`" class="link">詳細資訊</router-link>
            </el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const loading = ref(false);
const router = useRouter();

const handleButtonClick = () => {
  loading.value = true;
  setTimeout(() => {
    router.push('/items');
  }, 1000);
};
</script>


<style scoped lang='scss'>
.el-card {
  width: 300px;
  margin: 20px;
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s; /* 過度效果 */

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }
}

.image {
  width: 100%;
  max-height:250px
}
.bottom {
  margin-top: 10px;
  text-align: right;
}
.button {
  padding: 7px 0;
  width: 84px;
  background-color: #800000;
  transition: background-color 0.3s; /* Transition property */
}

.button:hover {
  background-color: rgba(128, 0, 0, 0.6); /* Hover color with reduced opacity */
}
.name {
  padding-top:10px;
  width: 100%; /* 確保寬度佔滿父容器 */
  white-space: normal; /* 允許換行 */
}

.card-price {
  padding:40px 0px 5px 0px;
  font-size: 20px;
  color: #800000
}

.link {
  color: #ffffff
}

.badge {
  background-color: gray;
  color: #ffffff;
  padding: 2px 6px 2px 6px;
  border-radius: 8px;
}


</style>