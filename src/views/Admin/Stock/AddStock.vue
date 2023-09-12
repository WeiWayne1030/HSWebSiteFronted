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
  <div class="add-product" v-else>
    <h2>庫存新增</h2>
    <el-form :model="formData">
      <el-form-item label="商品">
        <el-select v-model="formData.selectedItem" placeholder="請選擇商品">
          <el-option
            v-for="item in items"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="颜色">
        <el-radio-group v-model="formData.selectedColor">
          <el-radio
            v-for="color in colors"
            :key="color"
            :label="color"
          >{{ color.name }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="尺寸">
        <el-radio-group v-model="formData.selectedSize">
          <el-radio
            v-for="size in sizes"
            :key="size"
            :label="size"
          >{{ size.name }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="库存数量">
        <el-input v-model="formData.itemStock" type="number" class="number-data"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">添加库存</el-button>
      </el-form-item>
    </el-form>
  </div>
  <LayoutFooter />
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import LayoutFooter from '@/components/LayoutFooter.vue'
  import LayoutNav from '@/views/Admin/adminComponent/LayoutNav.vue'
  import LayoutHeader from '@/views/Admin/adminComponent/LayoutHeader.vue'
  import StocksNavPills from '@/views/Admin/Stock/Layout/StocksNavPills.vue'
  import Spinner from '@/components/Spinner.vue'
  import { getStocksAPI, addStockAPI } from '@/apis/admin/stock'
  import { useAlertStore } from '@/stores/alert'

  const alert = useAlertStore()

  const items = ref([])
  const categories = ref([])
  const stocks = ref([])
  const colors = ref([])
  const sizes = ref([])

  const formData = ref({
    selectedItem: '',
    selectedColor: '',
    selectedSize: '',
    itemStock: 0,
  })

  const isLoading = ref(true)

  const fetchStock = async () => {
    try {
      const categoryIdValue = ""
      const stateParamValue = ""
      const productNumberValue = ""
      const res = await getStocksAPI(categoryIdValue, stateParamValue, productNumberValue)
      if (res) {
        stocks.value = res.stocksInfo
        items.value = res.items
        categories.value = res.categories
        sizes.value = res.sizes
        colors.value = res.colors
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

  const submitForm = async () => {
    try {
      const { selectedColor, selectedItem, selectedSize, itemStock } = formData.value
      console.log(selectedColor.name, selectedItem, selectedSize.id, itemStock)
      const res = await addStockAPI({ colorName: selectedColor.name, ItemId: Number(selectedItem), SizeId: Number(selectedSize.id), itemStock:itemStock })
      console.log(res)
      alert.showSuccess()
      //完成後清空表格
      formData.value = {
        selectedItem: '',
        selectedColor: '',
        selectedSize: '',
        itemStock: 0,
      }
    } catch (error) {
      alert.showError('您所添加的庫存已存在，請重新選擇')
    }
  }

  onMounted(() => {
    fetchStock()
  })
</script>
<style>
.add-product {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.number-data {
  width: 50px
}
.number-data {
  width: 70px
}
</style>