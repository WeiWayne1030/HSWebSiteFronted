<template>
<el-row>
  <el-col :span="15" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? -1 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div>
          <h4 class="name">{{ item.name }}</h4>
          <p class="price">${{ item.price }}</p>
          <span class="badge badge-secondary">{{ item.Category.name }}</span>
        <div class="bottom clearfix">
            <el-button type="text" class="button details-button" :loading="loading" @click="handleButtonClick">
              <a href="/items/4" class="link">詳細資訊</a>
            </el-button>
            <el-button type="text" class="button cart-button" :loading="loading" @click="handleButtonClick">
              <a href="/items/4" class="link">加入購物車</a>
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

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
console.log(props)

const loading = ref(false);
const router = useRouter();

const handleButtonClick = () => {
  loading.value = true;
  setTimeout(() => {
    router.push('/items/1');
  }, 1000);
};
</script>


<style scoped lang='scss'>
.el-card {
  width: 300px;
  margin: 20px;
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s; /* 添加过渡效果 */

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }
}

.image {
  width: 100%;
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
  width: 100%; /* 确保宽度占满父容器 */
  white-space: normal; /* 允许文本换行 */
}

.price {
  padding:40px 0px 5px 0px
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