<template>
  <div class="page">
    <LayoutNav />
    <LayoutHeader @search="filterItems"/>
    <div v-if="isLoading" class="spinner">
      <Spinner />
    </div>
    <ItemsNavPills :categories="categories" v-else />
    <div class="row">
      <ItemCard v-for="item in filteredItems" :key="item.id" :item="item" />
    </div>
  </div>
  <LayoutFooter />
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { getItemsAPI } from '@/apis/item'
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutNav from '@/components/LayoutNav.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import ItemsNavPills from '@/components/ItemsNavPills.vue'
import ItemCard from '@/components/ItemCard.vue'
import Spinner from '@/components/Spinner.vue'
import { useRoute } from 'vue-router'
import { useAlertStore } from '@/stores/alert'

const alert = useAlertStore()
const items = ref([])
const categories = ref([])
const categoryId = ref("")
const route = useRoute()
const isLoading = ref(true)
const searchQueryRef = ref('')
const fetchItems = async () => {
  try {
    const categoryIdValue = parseInt(route.query.CategoryId) // 將查詢參數轉換為數字
    const res = await getItemsAPI(categoryIdValue) // 使用轉換後的數字
    items.value = res.items
    categories.value = res.categories
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    alert.showError()
  }
}

const filteredItems = computed(() => {
  if (!searchQueryRef.value) {
    // 如果搜尋項目為空，顯示所有未下架的商品
      return items.value.filter(item => item.state !== 0)
    } else {
      return items.value.filter((item) => {
      return (
        item.state !== 0 &&
        item.name.toLowerCase().includes(searchQueryRef.value ? searchQueryRef.value.toLowerCase() : '')
      );
    });
  }
  
});

const filterItems = (searchQuery) => {
  // 在符合條件後渲染頁面
  searchQueryRef.value = searchQuery;
};



onMounted(() => {
  const categoryIdValue = parseInt(route.query.CategoryId) // 同樣，在初始化時將查詢參數轉換為數字
  categoryId.value = isNaN(categoryIdValue) ? "" : categoryIdValue // 如果轉換失敗，保持空字符串
  fetchItems()
})

watch(() => route.query.CategoryId, (CategoryId) => {
  const categoryIdValue = parseInt(CategoryId) // 在監聽時將查詢參數轉換為數字
  categoryId.value = isNaN(categoryIdValue) ? "" : categoryIdValue
  fetchItems()
})

</script>

<style>
</style>



