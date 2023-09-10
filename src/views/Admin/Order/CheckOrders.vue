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
    <div class="line"></div>
    <div class="or1100000-parent" v-for="order in orders" :key="order.id">
      <div class="or1100000">{{ order.orderNumber }}</div>
      <div class="div9">{{ order.shipName }}</div>
      <div class="div10">{{ order.address }}</div>
      <div class="div11">{{ order.shipTel }}</div>
      <div class="div12">${{ order.total }}</div>
      <div class="div13">{{ order.updatedAt }}</div>
      <div class="div14">{{ order.state }}</div>
      <el-button class="div16" @click="enterItemState(order.orderNumber)">
        詳細訂單
      </el-button>
    </div>
    <el-pagination
    background
    layout="prev, currentPage, next"
    :total="pagination.totalPage"
    >
    </el-pagination>
  </div>
  <LayoutFooter />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutNav from '@/views/Admin/adminComponent/LayoutNav.vue'
import LayoutHeader from '@/views/Admin/adminComponent/LayoutHeader.vue'
import AdminSearchBar from '@/views/Admin/Order/Layout/AdminSearchBar.vue'
import Spinner from '@/components/Spinner.vue'
import { getOrdersAPI } from '@/apis/admin/order'
import { useRoute, useRouter } from 'vue-router'
import { useAlertStore } from '@/stores/alert'

const alert = useAlertStore()
const orders = ref([])
const methods = ref([])
const pagination = ref({
  totalPage: 1,
  currentPage: 1,
  prev: 1,
  next: 1,
})
const route = useRoute()
const router = useRouter()
const isLoading = ref(true)

const fetchStockInfo = async () => {
  try {
    // Use the provided data structure's properties
    const methodIdValue = route.query.MethodId || ""
    const stateParamValue = route.query.state || ""
    const orderNumberValue = route.query.orderNumber || ""
    const currentPage = parseInt(route.query.page) || 1

    const res = await getOrdersAPI(methodIdValue, stateParamValue, orderNumberValue, currentPage)
    if (res) {
      orders.value = res.orderInfos
      methods.value = res.methods
      pagination.value.totalPage = res.pagination.totalPage
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

const enterItemState =(orderNumber) => {
  router.replace({ path: `/admin/orderItems/${orderNumber}` })
  alert.showSuccess()
}

onMounted(() => {
  fetchStockInfo()
})

watch(() => {
  fetchStockInfo()
})
</script>

<style scoped>
    .container {
    width:98%;
    padding-bottom: 200px;
  }
  .div2 {
    position: relative;
    display: inline-block;
    width: 150px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div3 {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div4 {
    margin-left: 6%;
    position: relative;
    display: inline-block;
    width: 350px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div5 {
    margin-left: -55px;
    position: relative;
    display: inline-block;
    width: 140px;
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
    width: 250px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
   .div8 {
    margin-left: 3%;
    position: relative;
    display: inline-block;
    width: 350px;
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
    width: 140px;
    height: 48px;
    flex-shrink: 0;
  }
  .div9 {
    margin-left: 1%;
    position: relative;
    display: inline-block;
    width: 100px;
    height: 48px;
    flex-shrink: 0;
  }
  .div10 {
    position: relative;
    margin-left: 2%;
    display: inline-block;
    width: 350px;
    height: 48px;
    flex-shrink: 0;
  }
  .div11 {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 48px;
    flex-shrink: 0;
  }
  .div12 {
    margin-left: 4%;
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
    margin-left: 2%;
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