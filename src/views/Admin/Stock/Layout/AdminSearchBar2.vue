<template>
  <div class="search-container">
    <div class="row">
      <p class="name">狀態</p>
      <el-select class="selectBar" v-model="stateValue" @change="handleStateChange" placeholder="請選擇">
        <!-- <el-option :label="'全部狀態'" :value="null"></el-option> -->
        <el-option
          v-for="state in uniqueStates"
          :key="state"
          :label="state"
          :value="state">
        </el-option>
      </el-select>
      <div class="verticalBar">|</div>
      <p class="name">類別</p>
      <el-select class="selectBar" v-model="categoryValue" @change="handleCategoryChange" placeholder="請選擇">
        <el-option :label="'全部'" :value="null"></el-option>
        <el-option
          v-for="category in categories"
          :key="category.id"
          :label="category.name"
          :value="category.id">
        </el-option>
      </el-select>
      <div class="verticalBar">|</div>
      <el-form :model="formData" label-width="50px" class="input">
        <el-form-item label="查詢">
          <el-input v-model="formData.name" @input="handleKeyWordChange" placeholder="請輸入關鍵字"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'

const emit = defineEmits(['state-change', 'category-change','keyWord-change'])

const categoryValue = ref(null)
const stateValue = ref(null)
const formData = ref({
  name: '',
})

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
})

// 使用 Set 數據來獲取唯一狀態值
const uniqueStates = ref([])

// 監視props.items的變化，以更新uniqueStates
watch(() => props.items, (newItems) => {
  uniqueStates.value = [...new Set(newItems.map(item => item.state))]
})

// Emit events when filter values change
const handleStateChange = () => {
  if (stateValue.value === "全部") {
    stateValue.value = null // 將 stateValue 設置為 null
  }
  emit('state-change', stateValue.value)
}

const handleCategoryChange = () => {
  emit('category-change', categoryValue.value)
}

// 用于存储筛选后的项目
const filteredItems = ref([])



// 处理关键字筛选
const handleKeyWordChange = () => {
  const keyword = formData.value.name.trim().toLowerCase()
  if (stateValue.value === 'all') {
    // 如果选择了 "全部"，加载所有状态值
    filteredItems.value = props.items.filter(item => item.name.toLowerCase().includes(keyword))
  } else {
    // 否则，根据选定的状态筛选项目
    filteredItems.value = props.items.filter(item => {
      const isMatchingKeyword = item.name.toLowerCase().includes(keyword)
      const isMatchingState = stateValue.value === null || item.state === stateValue.value
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
  margin: 0; 
  margin-right: 10px; /* 名稱和選擇框加邊距 */
}

.selectBar {
  margin-right: 10px; /* 選擇框之間加邊距 */
}

.verticalBar {
  margin: 0 10px;
}
</style>