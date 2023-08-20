<template>
  <div>
    <LayoutNav />
    <LayoutHeader />
    <ItemsNavPills :categories="categories" />
    <div class="row">
      <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </div>
    <LayoutFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { getItemsAPI } from '@/apis/item';
import LayoutFooter from '@/components/LayoutFooter.vue';
import LayoutNav from '@/components/LayoutNav.vue';
import LayoutHeader from '@/components/LayoutHeader.vue';
import ItemsNavPills from '@/components/ItemsNavPills.vue';
import ItemCard from '@/components/ItemCard.vue';
import { useRoute } from 'vue-router';

const items = ref([]);
const categories = ref([]);
const categoryId = ref("");
const route = useRoute();
const fetchItems = async () => {
  try {
    const categoryIdValue = parseInt(route.query.CategoryId); // 將查詢參數轉換為數字
    const response = await getItemsAPI(categoryIdValue); // 使用轉換後的數字
    items.value = response.items;
    categories.value = response.categories;
  } catch (error) {
    console.log('error', error);
  }
};

onMounted(() => {
  const categoryIdValue = parseInt(route.query.CategoryId); // 同樣，在初始化時將查詢參數轉換為數字
  categoryId.value = isNaN(categoryIdValue) ? "" : categoryIdValue; // 如果轉換失敗，保持空字符串
  fetchItems();
});

watch(() => route.query.CategoryId, (CategoryId) => {
  const categoryIdValue = parseInt(CategoryId); // 在監聽時將查詢參數轉換為數字
  categoryId.value = isNaN(categoryIdValue) ? "" : categoryIdValue;
  fetchItems();
});

</script>





