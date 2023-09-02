<template>
  <header class='app-header'>
    <div class="container">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item v-for="tab in tabs" :key="tab.index">
          <router-link :to="tab.path">{{ tab.title }}</router-link>
        </el-menu-item>
      </el-menu>
    </div>
  </header>
</template>

<script setup>

  const tabs = [
  {
    title: '商品管理',
    path: '/admin/stock',
    index: "1"
  },
  {

    title: '商家訂單管理',
    path: '/admin/orders',
    index: "2"
  },
  {
    title: '商品新增',
    path: '/admin/item',
    index: "3"
  }
];
</script>
 
<style scoped lang='scss'>
.app-header {
  background: #fff;
 
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between; 
    align-items: flex-end; 
  }
  .el-menu-demo {
    width: 100%;
    padding-left: 10px;
    padding-top: 50px;
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
    display: flex;
    position: relative;
    margin-top: 5px;
    margin-right: 10px;
    align-items: center; 
  }
  .icon {
    position: relative;
    height: 20px;
    width: 20px;
    margin-right: 10px;
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