<template>
  <div class="search-container">
    <div class="row">
      <p class="name">狀態</p>
      <el-select class="selectBar" v-model="statusValue" placeholder="請選擇">
        <el-option
          v-for="item in items"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="verticalBar">|</div>
      <p class="name">類別</p>
      <el-select class="selectBar" v-model="categoryValue" placeholder="請選擇">
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
          <el-input v-model="formData.query" placeholder="請輸入產品編號"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const categoryValue = ref(null);
const statusValue = ref("");
const formData = ref({ query: "" });

const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
});

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