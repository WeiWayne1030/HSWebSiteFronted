<template>
  <div>
    <!-- header,footer,nav -->
    <LayoutNav />
    <LayoutHeader />
    </div>
    <div v-if="isLoading" class="spinner">
      <Spinner />
    </div>
    <div class="container" v-else>
      <AdminSearchBar />
      <div class="parent">
        <div class="div2">訂單編號</div>
        <div class="div3">買家名稱</div>
        <div class="div4">訂單地址</div>
        <div class="div5">訂單電話</div>
        <div class="div6">訂單金額</div>
        <div class="div7">訂單建立時間</div>
        <div class="div8">訂單狀態</div>
      </div>
      <div class="line" v-for="order in orders" :key="order.id" :order="order">
        <div class="or1100000-parent">
          <div class="or1100000">{{ order.orderNumber }}</div>
          <div class="div9">{{ order.shipName }}</div>
          <div class="div10">{{ order.address }}</div>
          <div class="div11">{{ order.shipTel }}</div>
          <div class="div12">${{ order.total }}</div>
          <div class="div13">{{ order.updatedAt }}</div>
          <div class="div14">{{ order.state }}</div>
        </div>
      </div>
    </div>
  <LayoutFooter />
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import LayoutFooter from '@/components/LayoutFooter.vue'
  import LayoutNav from '@/components/LayoutNav.vue'
  import LayoutHeader from '@/components/LayoutHeader.vue'
  import AdminSearchBar from '@/views/Admin/Order/Layout/AdminSearchBar.vue'
  import Spinner from '@/components/Spinner.vue'
  import { getOrdersAPI } from '@/apis/order'
  
  const orders = ref({})
  const isLoading = ref(true)
  
  const fetchOrderInfo = async () => {
  try {
    const res = await getOrdersAPI()
    if (res) {
      orders.value = res
      isLoading.value = false
    } else {
      console.error('Invalid API response:', res)
      isLoading.value = false
    }
  } catch (error) {
    console.error('Error fetching cart information:', error)
    isLoading.value = false
  }
}

onMounted(() => {
  fetchOrderInfo()
})




</script>

<style scoped>
  .container {
    width:95%
  }
  .div2 {
    position: relative;
    display: inline-block;
    width: 140px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div3 {
    position: relative;
    display: inline-block;
    width: 90px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div4 {
    margin-left: 8%;
    position: relative;
    display: inline-block;
    width: 350px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div5 {
    margin-left: -80px;
    position: relative;
    display: inline-block;
    width: 110px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
   .div6 {
    margin-left: 1.5%;
    position: relative;
    display: inline-block;
    width: 100px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div7 {
    margin-left: 1%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 231px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
   .div8 {
    margin-left: 3%;
    position: relative;
    display: inline-block;
    width: 300px;
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
    width: 1512px;
    height: 30px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-xl) 0px;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-16xl);
  }
  .or1100000 {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 48px;
    flex-shrink: 0;
  }
  .div9 {
    margin-left: 2.5%;
    position: relative;
    display: inline-block;
    width: 150px;
    height: 48px;
    flex-shrink: 0;
  }
  .div10 {
    position: relative;
    display: inline-block;
    margin-left:20px;
    width: 300px;
    height: 48px;
    flex-shrink: 0;
  }
  .div11 {
    position: relative;
    display: inline-block;
    width: 110px;
    height: 48px;
    flex-shrink: 0;
  }
  .div12 {
    margin-left: 3.5%;
    position: relative;
    display: inline-block;
    width: 110px;
    height: 48px;
    flex-shrink: 0;
  }
  .div13 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 233px;
    flex-shrink: 0;
  }
  .div14 {
    margin-left: 1%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 115px;
    flex-shrink: 0;
  }
  .or1100000-parent {
    margin-left: 1.5%;
    margin-top: 1%;
    box-sizing: border-box;
    width: 1512px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-xl) 0px;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-16xl);
  }
  .div19 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 235px;
    flex-shrink: 0;
  }
  .or1100001-parent {
    margin-left: 1.5%;
    margin-top: 1%;
    box-sizing: border-box;
    width: 1512px;
    height: 68px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-xl) 0px;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-16xl);
  }
</style>