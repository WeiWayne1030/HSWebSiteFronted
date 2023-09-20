<template>
  <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal">
    <el-menu-item v-for="tab in tabs" :key="tab.index" :class="{ 'active-tab': tab.path === currentTab }">
      <router-link :to="tab.path" @click="setCurrentTab(tab.path)">{{ tab.title }}
      </router-link>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
  const tabs = [
  {
    title: '產品一覽',
    path: '/admin/items',
    index: "1"
  },
  {
    title: '庫存一覽',
    path: '/admin/stock',
    index: "2"
  },
  {
    title: '商品新增',
    path: '/admin/item',
    index: "3"
  },
  {
    title: '庫存新增',
    path: '/admin/addStock',
    index: "4"
  }
]

let currentTab = '/admin/stock'

  function setCurrentTab(path) {
    currentTab = path
  }
</script>

<style scoped lang='scss'>
  
  

</style>
