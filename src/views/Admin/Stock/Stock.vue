<template>
  <div>
    <!-- header,footer,nav -->
    <LayoutNav />
    <LayoutHeader />
    <StocksNavPills />
    </div>
    <div v-if="isLoading" class="spinner">
      <Spinner />
    </div>
    <div class="container" v-else>
      <AdminSearchBar2 :categories="categories" :items="items" :stocks="stocks"/>
      <div class="parent">
        <div class="div2">商品編號</div>
        <div class="div3">商品圖</div>
        <div class="div4">商品名稱</div>
        <div class="div5">顏色</div>
        <div class="div6">尺寸</div>
        <div class="div7">目前庫存</div>
        <div class="div8">價格</div>
        <div class="div10">上架時間</div>
      </div>
      <div class="line"></div>
      <div class="or1100000-parent-container">
      </div>
      <div class="parent-info" v-for="stock in stocks" :key="stock.id">
        <div class="orderNumber">{{ stock.productNumber }}</div>
        <img class="order-image" :src=" stock.Item.image" alt="Product Image">
        <div class="div11">{{ stock.Item.name }}</div>
        <div class="div12">{{ stock.name }}</div>
        <div class="div13">{{ stock.Size.name }}</div>
        <div class="div14" v-if="editStockIndex !== stock.id">
          {{ stock.itemStock }}
        </div>
        <div class="div14" v-else>
          <el-input v-model="editedStockValue" class="stock-input"></el-input>
          <div class="row">
            <el-button class="cancel-number-button" @click="saveStockNumber(stock, editedStockValue)">
              保存
            </el-button>
            <el-button class="cancel-number-button" @click="cancelEditStock()">取消</el-button>
          </div>
        </div>
        <div class="div15">${{ stock.Item.price }}</div>
        <div class="div17">{{ stock.updatedAt }}</div>
        <el-button
                type="text"
                class="edit-number-button"
                width="2"
                @click="editStockNumber(stock.id, stock.itemStock)"
              >
                更變庫存
          </el-button>
      </div>
    </div> 
  <LayoutFooter />
</template>

<script setup>
  import { ref, onMounted, watch } from 'vue'
  import LayoutFooter from '@/components/LayoutFooter.vue'
  import LayoutNav from '@/views/Admin/adminComponent/LayoutNav.vue'
  import LayoutHeader from '@/views/Admin/adminComponent/LayoutHeader.vue'
  import AdminSearchBar2 from '@/views/Admin/Stock/Layout/AdminSearchBar2.vue'
  import StocksNavPills from '@/views/Admin/Stock/Layout/StocksNavPills.vue'
  import Spinner from '@/components/Spinner.vue'
  import { getStocksAPI, putStockNumberAPI } from '@/apis/admin/stock'
  import { useRoute } from 'vue-router'
  import { useAlertStore } from '@/stores/alert'
  import { ElButton, ElInput } from 'element-plus'

  const alert = useAlertStore()
  const items = ref([])
  const categories = ref([])
  const stocks = ref([])
  // const categoryId = ref("")
  // const state = ref("")
  // const productNumber = ref("")
  const route = useRoute()
  const isLoading = ref(true)
  
  const fetchStockInfo = async () => {
  try {
    const categoryIdValue = parseInt(route.query.CategoryId)
    const stateParamValue = route.query.state
    const productNumberValue = route.query.productNumber
    const res = await getStocksAPI (categoryIdValue, stateParamValue, productNumberValue)
    if (res) {
      stocks.value = res.stocksInfo
      categories.value = res.categories
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

  const editStockIndex = ref(-1) // 用於跟蹤編輯得庫存索引
  const editedStockValue = ref("")

  const editStockNumber = (stockId, initialValue) => {
    editStockIndex.value = stockId // 設置要编辑的库存的索引
    editedStockValue.value = initialValue // 設置輸入框中的初始值
  }

  const saveStockNumber = async (stock, editedStockValue) => {
    try {
      const res = await putStockNumberAPI({productNumber:stock.productNumber, itemStock:editedStockValue})
      console.log(res)
      // 更新成功後，將相應的 stock 的 itemStock 更新為新的值
      stock.itemStock = editedStockValue
      // 更新成功後，將表單重置
      editStockIndex.value = -1
      // 清除編輯狀態
      editedStockValue.value = ""
      alert.showSuccess()
    } catch (error) {
      console.error('Error updating stock number:', error)
       alert.showSuccess()
       //失敗也需要重置編輯狀態
       editStockIndex.value = -1
       editedStockValue.value = ""
    }
  };

  const cancelEditStock = () => {
    // 清除編輯狀態
    editedStockValue.value = ""
    // 將表單重置為原始值
    editStockIndex.value = -1
  }


onMounted(() => {
  // const categoryIdValue = parseInt(route.query.CategoryId) // 同樣，在初始化時將查詢參數轉換為數字
  // const stateParamValue = route.query.state
  // const productNumberValue = route.query.productNumber
  // categoryId.value = isNaN(categoryIdValue) ? "" : categoryIdValue  //如果轉換失敗，保持空字符串
  // state.value = isNaN(stateParamValue) ? "" : stateParamValue
  // productNumber.value = isNaN(stateParamValue) ? "" : productNumberValue
  fetchStockInfo()
})

watch(() => {
  // const categoryIdValue = parseInt(route.query.CategoryId) // 在監聽時將查詢參數轉換為數字
  // const stateParamValue = route.query.state
  // const productNumberValue = route.query.productNumber
  // categoryId.value = isNaN(categoryIdValue) ? "" : categoryIdValue
  // state.value = isNaN(stateParamValue) ? "" : stateParamValue
  // productNumber.value = isNaN(stateParamValue) ? "" : productNumberValue
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
    width: 100px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div3 {
    position: relative;
    display: inline-block;
    text-align: center;
    width: 170px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div4 {
    margin-left: 7.5%;
    position: relative;
    display: inline-block;
    width: 300px;
    height: 48px;
    flex-shrink: 4;
    -webkit-text-stroke: 1px #000;
    align-items: center;
  }
  .div5 {
    margin-left: -40px;
    position: relative;
    display: inline-block;
    width: 30px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
   .div6 {
    margin-left: 5%;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div7 {
    margin-left: 3.5%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
   .div8 {
    margin-left: 7.8%;
    position: relative;
    display: inline-block;
    width: 100px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div9 {
    margin-left: 7%;
    position: relative;
    display: inline-block;
    width: 100px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div10 {
    margin-left: 6.5%;
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
    margin-left: 1%;
    position: relative;
    display: inline-block;
    margin: 25px 0px 0px 75px;
    width: 270px;
    height: 48px;
    flex-shrink: 0;
  }
  .div12 {
    position: relative;
    display: inline-block;
    margin: 25px 0px 0px 60px;
    width: 70px;
    height: 48px;
    flex-shrink: 0;
  }
  .div13 {
    position: relative;
    display: inline-block;
    margin: 25px 0px 0px 40px;
    width: 110px;
    height: 48px;
    flex-shrink: 0;
  }
  .div14 {
    margin-left: 2%;
    position: relative;
    display: inline-block;
    margin: 25px 0px 0px 25px;
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
    margin-left: 1%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0px 0px 25px;
    width: 115px;
    flex-shrink: 0;
  }
  .div17 {
    margin-left: 1%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0px 0px 45px;
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
    margin-left: 40px
  }

  .edit-number-button{
    margin-top: 18px;
  }

  .cancel-number-button{
    margin-top: 17px;
  }

  .stock-input{
    width: 50px
  }
</style>