<template>
  <div>
  <!-- header,footer,nav -->
    <LayoutNav />
    <LayoutHeader />
    <AdminSearchBar2
      :categories="categories"
      :items="items"
      @state-change="handleStateChange"
      @category-change="handleCategoryChange"
      @keyWord-change="handleKeyWordChange"
    />
    <div v-if="isLoading" class="spinner">
      <Spinner />
    </div>
    <!-- Display the filtered items -->
    <div class="parent-info" v-for="item in filteredItems" :key="item.id">
      <!-- Display filtered items here -->
      <img class="order-image" :src="item.image" alt="Product Image">
      <div class="div11">{{ item.name }}</div>
      <div class="div12">{{ item.state }}</div>
      <div class="div13">{{ item.Category.name }}</div>
      <div class="div14">{{ item.price }}</div>
      <el-button class="div16" @click="toggleItemState(item)">
        {{ item.buttonText }}
      </el-button>
      <div class="div17">{{ item.updatedAt }}</div>
    </div>
  </div>
  <LayoutFooter />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { getItemsAPI, removeItemAPI, relistItemAPI } from '@/apis/admin/adminItem';
import { useRoute } from 'vue-router';
import { useAlertStore } from '@/stores/alert';
import AdminSearchBar2 from '@/views/Admin/Stock/Layout/AdminSearchBar2.vue'; // Import the updated AdminSearchBar2 component
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutNav from '@/views/Admin/adminComponent/LayoutNav.vue'
import LayoutHeader from '@/views/Admin/adminComponent/LayoutHeader.vue'
import Spinner from '@/components/Spinner.vue'

const categories = ref([]);
const items = ref([]);
const isLoading = ref(true);
const alert = useAlertStore();
const route = useRoute();

const stateValue = ref("");
const categoryValue = ref(null);
const formData = ref({ query: "" });

// Define computed property to filter items based on search criteria
const filteredItems = computed(() => {
  const filteredByState = stateValue.value === "" ? items.value : items.value.filter(item => item.state === stateValue.value);
  const filteredByCategory = categoryValue.value === null ? filteredByState : filteredByState.filter(item => item.Category.id === categoryValue.value);
  const filteredByQuery = formData.value.query === "" ? filteredByCategory : filteredByCategory.filter(item => item.productNumber.includes(formData.value.query));
  return filteredByQuery;
});

const fetchStockInfo = async () => {
  try {
    const categoryIdValue = parseInt(route.query.CategoryId);
    const stateParamValue = route.query.state;
    const res = await getItemsAPI(categoryIdValue, stateParamValue);
    if (res) {
      items.value = res.itemsInfo;
      categories.value = res.categories;
      items.value.forEach((item) => {
        item.buttonText = item.state === 0 ? '產品上架' : '產品下架';
      });
      isLoading.value = false;
    } else {
      console.error('Invalid API response:', res);
      isLoading.value = false;
    }
  } catch (error) {
    console.error('Error fetching cart information:', error);
    isLoading.value = false;
  }
};

const fectchDelStock = async (id) => {
  try {
    await removeItemAPI(id);
    items.value = items.value.filter(item => item.id !== id);
  } catch (error) {
    console.error('Error deleting cart item:', error);
  }
};

const fectchRelistStock = async (id) => {
  try {
    await relistItemAPI(id);
    items.value = items.value.filter(item => item.id !== id);
  } catch (error) {
    console.error('Error deleting cart item:', error);
  }
};

const toggleItemState = async (item) => {
  try {
    if (item.state === 0) {
      await relistItemAPI(item.id);
      item.state = 1;
      item.buttonText = '產品下架';
      alert.showSuccess();
    } else {
      await removeItemAPI(item.id);
      item.state = 0;
      item.buttonText = '產品上架';
      alert.showSuccess();
    }
  } catch (error) {
    console.error('Error toggling item state:', error);
    alert.showError();
  }
};

// Event handlers for AdminSearchBar2 filter changes
const handleStateChange = (value) => {
  stateValue.value = value;
};

const handleCategoryChange = (value) => {
  categoryValue.value = value;
};

const handleKeyWordChange = (value) => {
  formData.value.name = value;
};

onMounted(() => {
  fetchStockInfo();
  fectchDelStock(); // You may want to pass an item ID here
  fectchRelistStock(); // You may want to pass an item ID here
});
</script>

<style scoped>
  .container {
    width:98%;
    padding-bottom: 200px;
  }
  .div1 {
    margin-left:3%;
    position: relative;
    display: inline-block;
    width: 100px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div2 {
    margin-left:3%;
    position: relative;
    display: inline-block;
    text-align: center;
    width: 300px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div3 {
    margin-left: 5%;
    position: relative;
    display: inline-block;
    width: 250px;
    height: 48px;
    flex-shrink: 4;
    -webkit-text-stroke: 1px #000;
  }
  .div4 {
    margin-left: -100px;
    position: relative;
    display: inline-block;
    width: 30px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
   .div5 {
    margin-left: 7%;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div6 {
    margin-left: 7%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
   .div7 {
    margin-left: 9%;
    position: relative;
    display: inline-block;
    width: 100px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .line {
    border-bottom: 1px solid;
  }
  .parent {
    margin-top: 15px;
    margin-left: 2%;
    box-sizing: border-box;
    width: 98%;
    height: 30px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-xl) 0px;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-16xl);
  }
  .orderNumber {
    position: relative;
    display: inline-block;
    margin: 25px 0px 0px 25px;
    width: 110px;
    height: 48px;
    flex-shrink: 0;
  }
  .div11 {
    position: relative;
    display: inline-block;
    margin: 25px 0px 0px 100px;
    width: 300px;
    height: 48px;
    flex-shrink: 0;
  }
  .div12 {
    position: relative;
    display: inline-block;
    margin: 25px 0px 0px 65px;
    width: 60px;
    height: 48px;
    flex-shrink: 0;
  }
  .div13 {
    position: relative;
    display: inline-block;
    margin: 25px 0px 0px 75px;
    width: 110px;
    height: 48px;
    flex-shrink: 0;
  }
  .div14 {
    margin-left: 2%;
    position: relative;
    display: inline-block;
    margin: 25px 0px 0px 30px;
    width: 30px;
    height: 48px;
    flex-shrink: 0;
  }
  .div15 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0px 0px 25px;
    width: 233px;
    flex-shrink: 0;
  }
  .div16 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0px 40px 0px 40px;
    margin: 20px 0px 0px 130px;
    width: 50px;
    flex-shrink: 0;
  }
  .div17 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0px 0px 90px;
    width: 115px;
    flex-shrink: 0;
  }
  .parent-info {
    margin: 1% 1.5% 1% 0px;
    box-sizing: border-box;
    width: 1512px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-xl) 0px;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-16xl);
  }
  .order-image {
    width: 80px;
    margin-left: 50px
  }
</style>