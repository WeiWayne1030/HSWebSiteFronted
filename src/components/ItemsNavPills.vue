<template>
  <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal">
    <el-menu-item class="nav-item">
      <router-link
        class="nav-link"
        to="/items"
        @click="activateCategory(null)"
      >
        全部
      </router-link>
    </el-menu-item>

    <el-menu-item
      v-for="category in categories"
      :key="category.id"
      class="nav-item"
    >
      <router-link
        class="nav-link category-link"
        :to="{ path: '/items', query: { CategoryId: category.id } }"
        @click="activateCategory(category.id)"
      >
        {{ category.name }}
        <span v-if="isActiveCategory(category.id)" class="category-underline"></span>
      </router-link>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
});

const defaultActive = '/items';

const activeCategoryId = ref(null);

const activateCategory = (categoryId) => {
  activeCategoryId.value = categoryId;
};

const isActiveCategory = (categoryId) => {
  return activeCategoryId.value === categoryId;
};
</script>

<style scoped lang='scss'>
  .category-link {
    position: relative;
    display: inline-block;
    padding-bottom: 5px; /* 调整底线距离文字的间距 */
  }
  
  .category-underline {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: red;
    transform: scaleX(1);
    transform-origin: bottom left;
    transition: transform 0.3s ease;
  }
  

</style>
