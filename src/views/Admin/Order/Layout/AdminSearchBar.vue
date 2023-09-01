<template>
  <div class="container">
    
    <div class="row">
      <p class="name" >狀態</p>
      <el-select class="selectBar" v-model="statusValue" placeholder="請選擇">
        <el-option
          v-for="item in statusOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="verticalBar">|</div>
     <el-form :model="formData" label-width="50px" class="input">
      <el-form-item label="查詢" >
        <el-input placeholder="請輸入訂單編號"></el-input>
      </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        statusOptions: [
        {
          value: 'option0',
          label: '全部'
        },
        {
          value: 'option1',
          label: '運送中'
        },
        {
          value: 'option2',
          label: '待出貨'
        }
      ],
        statusValue: '', // 創建新的data属性
        input: ''
      }
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