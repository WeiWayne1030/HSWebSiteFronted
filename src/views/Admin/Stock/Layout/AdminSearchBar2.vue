<template>
  <div class="container">
    <div class="row">
      <p class="name">狀態</p>
      <el-select class="selectBar" v-model="statusValue" placeholder="請選擇">
        <el-option
          v-for="item in statusOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="verticalBar">|</div>
      <p class="name">類別</p>
      <el-select class="selectBar" v-model="categoryValue" placeholder="請選擇">
        <el-option
          v-for="item in categoryOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="verticalBar">|</div>
      <el-form :model="formData" label-width="50px" class="input">
        <el-form-item label="查詢" >
          <el-input placeholder="請輸入產品編號"></el-input>
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
          label: '全部商品'
        },
        {
          value: 'option1',
          label: '全部上架商品'
        },
        {
          value: 'option2',
          label: '已下架商品'
        }
      ],
       categoryOptions: [{
          value: 'option3',
          label: '全部'
        }, {
          value: 'option4',
          label: 'Brotop'
        }, {
          value: 'option5',
          label: '上衣'
        }, {
          value: 'option6',
          label: '下身'
        }, {
          value: 'option7',
          label: '洋裝'
        }, {
          value: 'option8',
          label: '套裝＆連身褲'
        }, {
          value: 'option9',
          label: '外套＆罩衫'
        }, {
          value: 'option10',
          label: '配件'
        }, {
          value: 'option11',
          label: '鞋子'
        }],
        statusValue: '', // 創建新的data属性
        categoryValue: '' // 創建新的data属性
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