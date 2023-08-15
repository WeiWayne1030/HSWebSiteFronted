<template>
<el-row>
  <el-col :span="15" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? -1 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
          <h3 class="name">花洋裝</h3>
          <p class="price">$123</p>
        <div class="bottom clearfix">
            <el-button type="text" class="button" :loading="loading" @click="handleButtonClick">
              <a href="/items/1">操作按钮</a>
            </el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      loading: false,
    };
  },
  methods: {
    handleButtonClick() {
      this.loading = true; // 设置 loading 为 true
      // 模拟延时操作，您可以替换成实际的导航逻辑
      setTimeout(() => {
        this.$router.push('/items/1'); // 导航到路由
      }, 1000); // 模拟延时 1 秒
    },
  },
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
}
</style>