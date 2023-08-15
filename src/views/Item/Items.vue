<template>
  <div>
    <LayoutNav />
    <LayoutHeader />
    <ItemsNavPills :categories="categories" />
     <div class="row">
      <ItemCard v-for="item in items" 
      :key="item.id"
      :item = "item"
      />
    </div>
    <LayoutFooter />
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import LayoutFooter from '@/components/LayoutFooter.vue';
  import LayoutNav from '@/components/LayoutNav.vue';
  import LayoutHeader from '@/components/LayoutHeader.vue';
  import ItemsNavPills from '@/components/ItemsNavPills.vue';
  import ItemCard from '@/components/ItemCard.vue';
  import getItemsApi from '@/apis/item.js';

  const categories = [] // You need to initialize categories

  const items = ref([]);

  const fetchItems = async (categoryId) => {
    try {
      const res = await getItemsApi(categoryId);
      items.value = res; // Update the items with the fetched data
    } catch (error) {
      console.log(error);
    }
  };

  // You need to fetch the items when the component is mounted
  onMounted(() => {
    fetchItems(/* Provide categoryId if needed */);
  });

  
</script>