<template>
  <header class='app-header'>
    <div class="container">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item v-for="tab in tabs" :key="tab.index">
          <router-link :to="tab.path">{{ tab.title }}</router-link>
        </el-menu-item>
      </el-menu>
      <div class="search">  
        <el-input
        placeholder="搜一搜"
        v-model="searchQuery"
        clearable
        @input="handleSearch"
      ></el-input>
      <SearchIcon class="icon" />
      </div>
    </div>
  </header>
</template>

<script setup>
  import SearchIcon from '@/components/icons/SearchIcon.vue';
  import { ref } from 'vue'

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
    title: '活動專區',
    path: '/activity',
    index: "3"
  },
  {
    title: '關於我們',
    path: '/about',
    index: "4"
  }
];


const emit = defineEmits(['search']);
let searchQuery = ref('')

const handleSearch = () => {
    // Emit a custom event with the search query
    // The parent component can listen for this event and filter items accordingly
    emit("search", searchQuery.value);
  }

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