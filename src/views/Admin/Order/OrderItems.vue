<template>
  <div>
    <!-- header,footer,nav -->
    
  </div>
  <div v-if="isLoading" class="spinner">
    <Spinner />
  </div>
  <div class="container" v-else>
    <h1>訂單資訊</h1>
    <div class="parent">
      <div class="div1">商品圖</div>
      <div class="div2">商品名稱</div>
      <div class="div3">庫存</div>
      <div class="div4">顏色尺寸</div>
      <div class="div5">價格</div>
      <div class="div6">管理</div>
      <div class="div7">上架時間</div>
    </div>
    <div class="line"></div>
    <div class="or1100000-parent-container">
    </div>
    <div class="parent-info" v-for="item in items" :key="item.id">
      <img class="order-image" :src="item.Color.Item.image" alt="Product Image">
      <div class="div11">{{ item.Color.Item.name }}</div>
      <div class="div12">{{ item.itemQuantity }}</div>
      <div class="div13">{{ item.Color.name }},{{ item.Color.Size.name }}</div>
      <div class="div14">{{ item.Color.Item.price }}</div>
      <el-button class="div16" >
        刪除項目
      </el-button>
      <div class="div17">{{ item.updatedAt }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Spinner from '@/components/Spinner.vue'
import { getOrderItemsAPI } from '@/apis/admin/order'
import { useRoute } from 'vue-router'
import { ElButton } from 'element-plus'
import { useAlertStore } from '@/stores/alert'

const alert = useAlertStore()

const items = ref([])
const isLoading = ref(true)
const route = useRoute()

const fetchOrderItems = async () => {
  try {
    const orderNumber = route.params.orderNumber
    const res = await getOrderItemsAPI(orderNumber)
    if (res) {
      items.value = res
      isLoading.value = false
    } else {
      alert.showError()
      isLoading.value = false
    }
  } catch (error) {
    isLoading.value = false
    alert.showError()
  }
}

onMounted(() => {
  fetchOrderItems()
})
</script>

<style scoped>
  .container {
    width:98%;
    padding-bottom: 200px;
    padding-top:10px
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
    margin-left: -80px;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
   .div5 {
    margin-left: 6%;
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
    margin: 25px 0px 0px 105px;
    width: 110px;
    height: 48px;
    flex-shrink: 0;
  }
  .div14 {
    margin-left: 3%;
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