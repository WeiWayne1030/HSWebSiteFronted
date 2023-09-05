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
    title: '顏色',
    path: '/admin/colors',
    index: "1"
  },
  {
    title: '尺寸',
    path: '/admin/sizes',
    index: "2"
  },
  {
    title: '支付方式',
    path: '/admin/methods',
    index: "3"
  },
    {
    title: '類別',
    path: '/admin/categories',
    index: "4"
  }
];

let currentTab = '/admin/colors';

  function setCurrentTab(path) {
    currentTab = path;
  }
</script>

<style scoped lang='scss'>
  
  

</style>
