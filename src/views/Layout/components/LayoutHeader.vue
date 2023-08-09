<script setup>
  import SearchIcon from '@/components/icons/SearchIcon.vue';
  const tabs = [
  {
    title: '首頁',
    path: '/',
    index: "1"
  },
  {
    title: '全部商品',
    path: '/items',
    index: "2"
  },
  {
    title: '最新活動',
    path: '/news',
    index: "3"
  },
  {
    title: '關於我們',
    path: '/about',
    index: "4"
  },
  {
    title: '商品管理',
    path: '/admin/stock',
    index: "5"
  },
  {

    title: '商家訂單管理',
    path: '/admin/orders',
    index: "6"
  },
  {
    title: '商品新增',
    path: '/admin/coupons',
    index: "7"
  }
];
</script>
 
<template>
  <header class='app-header'>
    <div class="container">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item v-for="tab in tabs" :key="tab.index">
          <router-link :to="tab.path">{{ tab.title }}</router-link>
        </el-menu-item>
      </el-menu>
      <div class="search">
        <SearchIcon class="icon" />
        <el-input
          placeholder="搜一搜"
          v-model="input"
          clearable>
        </el-input>
      </div>
    </div>
  </header>
</template>
 
<style scoped lang='scss'>
.app-header {
  background: #fff;
 
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .el-menu-demo {
    width: 100%;
    padding-left: 10px;
    padding-top:50px
  }
  .logo {
    width: 200px;
 
    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }
  .search {
    width: 170px;
    height: 32px;
    position: relative;
    margin-top: 5px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    line-height: 32px;
  }
  .icon {
    height: 20px;
    width: 20px;
    margin-right: 0px;
    margin-top: 0px;
    color: #666;
  }
 
  .cart {
    width: 50px;
 
    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;
 
      .icon-cart {
        font-size: 22px;
      }
 
      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>