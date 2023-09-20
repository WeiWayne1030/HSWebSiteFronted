<template>
  <div class="search-container">
    
    <div class="row">
      <p class="name" >狀態</p>
      <el-select class="selectBar" v-model="stateValue" @change="handleStateChange"  placeholder="請選擇">
       <!-- <el-option :label="'全部'" :value="null"></el-option> -->
        <el-option
          v-for="state in uniqueStates"
          :key="state"
          :label="state"
          :value="state">
        </el-option>
      </el-select>
      <div class="verticalBar">|</div>
     <el-form :model="formData" label-width="50px" class="input" @change="handleOrderNumberChange">
      <el-form-item label="查詢" >
        <el-input v-model="formData.orderNumber" placeholder="請輸入訂單編號"></el-input>
      </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps,watch } from 'vue'

const emit = defineEmits(['state-change', 'orderNumber-change'])

const stateValue = ref(null)
const formData = ref({
  orderNumber: '',
})
 
 const props = defineProps({
  orders: {
    type: Array,
    required: true,
  },
})

// 使用 Set 数据结构来获取唯一的状态值
const uniqueStates = ref([])

// 监视props.items的变化，以更新uniqueStates
watch(() => props.orders, (newOrders) => {
  uniqueStates.value = [...new Set(newOrders.map(item => item.state))]
})


const handleStateChange = () => {
  if (stateValue.value === "全部") {
    stateValue.value = null
  }
  emit('state-change', stateValue.value)
}

// 用于存储筛选后的项目
const filteredOrders = ref([])



const handleOrderNumberChange = () => {
  const keyword = formData.value.orderNumber.trim().toLowerCase()
  if (stateValue.value === 'all') {
    // 如果选择了 "全部"，加载所有状态值
    filteredOrders.value = props.items.filter(order => order.orderNumber.toLowerCase().includes(keyword))
  } else {
    // 否则，根据选定的状态筛选项目
    filteredOrders.value = props.orders.filter(order => {
      const isMatchingKeyword = order.orderNumber.toLowerCase().includes(keyword)
      const isMatchingState = stateValue.value === null || order.state === stateValue.value
      return isMatchingKeyword && isMatchingState
    })
  }
}
</script>

<style>
.container {
  align-items: flex-start;
}

.row {
  display: flex;
  align-items: center;
}

.name {
  position: relative;
    display: flex;
    width: 40px;
    height: 20px;
}

.selectBar {
  margin-right: 10px; /* 選擇框之間加邊距 */
}

.verticalBar {
  margin: 0 10px;
}

.input {
  padding-top: 15px;
}

</style>