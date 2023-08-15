<script setup>
import HomePanel from './HomePanel.vue'
 
// 获取数据
import { ref, onMounted } from 'vue';
import getItemsApi from '@/apis/item.js';

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
 
<template>
  <HomePanel title="最新商品" sub-title="新鲜出爐 品質靠譜">
      <div class="row">
      <ItemCard v-for="item in items" 
      :key="item.id"
      :item = "item"
      />
    </div>
  </HomePanel>
</template>
 
 
<style scoped lang='scss'>
.row {
  display: flex;
  justify-content: space-between;
 
  li {
    width: 306px;
    height: 406px;
 
    background: #f0f9f4;
    transition: all .5s;
 
    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }
 
    img {
      width: 306px;
      height: 306px;
    }
 
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
 
    .price {
      color: $priceColor;
    }
  }
}
</style>