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
      <AdminSearchBar 
      :orders="orders"
      @state-change="handleStateChange"
      @orderNumber-change="handleOrderNumberChange"/>
      <div class="parent">
        <div class="div2">訂單編號</div>
        <div class="div3">買家名稱</div>
        <div class="div4">訂單地址</div>
        <div class="div5">訂單電話</div>
        <div class="div6">訂單金額</div>
        <div class="div7">訂單建立時間</div>
        <div class="div8">訂單狀態</div>
      </div>
      <div class="line" >
        <div class="or1100000-parent" v-for="order in filteredOrders" :key="order.id" :order="order">
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
  import { ref, onMounted, computed } from 'vue'
  import LayoutFooter from '@/components/LayoutFooter.vue'
  import LayoutNav from '@/components/LayoutNav.vue'
  import LayoutHeader from '@/components/LayoutHeader.vue'
  import AdminSearchBar from '@/views/Admin/Order/Layout/AdminSearchBar.vue'
  import Spinner from '@/components/Spinner.vue'
  import { getOrdersAPI } from '@/apis/order'
  import { useAlertStore } from '@/stores/alert'

  const alert = useAlertStore()
  const orders = ref({})
  const stateValue = ref("");
  const formData = ref({ orderNumber: "" });
  const isLoading = ref(true)
  
  const fetchOrderInfo = async () => {
  try {
    const res = await getOrdersAPI()
    if (res) {
      orders.value = res.ordersInfo
      isLoading.value = false
    } else {
      console.error('Invalid API response:', res)
      isLoading.value = false
      alert.showError()
    }
  } catch (error) {
    console.error('Error fetching cart information:', error)
    isLoading.value = false
    alert.showError()
  }
}

// 定義computed以根據搜索條件過濾項目
const filteredOrders = computed(() => {
  const filteredByState = stateValue.value === "" ? orders.value : orders.value.filter(order => order.state === stateValue.value);
  const filteredByQuery = formData.value.orderNumber === "" ? filteredByState : filteredByState.filter(order => order.productNumber.includes(formData.value.orderNumber));
  return filteredByQuery;
});

const handleStateChange = (value) => {
  stateValue.value = value
}

const handleOrderNumberChange = (value) => {
  formData.value.orderNumber = value
}


onMounted(() => {
  fetchOrderInfo()
})




</script>

<style scoped>
  .container {
    width:95%;
    padding-bottom:15%
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