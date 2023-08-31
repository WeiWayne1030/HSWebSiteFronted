<template>
  <div>
    <!-- header,footer,nav -->
    <LayoutNav />
    <LayoutHeader />
    <div class="build-order">
      <h2>建立訂單</h2>
      <el-form ref="receiverForm" :model="receiverForm" :rules="rules" label-width="100px">
        <el-form-item label="收貨人名稱">
          <el-input v-model="receiverForm.name"></el-input>
        </el-form-item>
        <el-form-item label="付款方式">
          <el-select v-model="method" placeholder="請選擇付款方式">
            <el-option
              v-for="item in paymentOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收貨地址">
          <el-input v-model="receiverForm.address" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="收件人電話">
          <el-input v-model="receiverForm.shipTel" type="text"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addProduct">結帳</el-button>
        </el-form-item>
      </el-form>
    </div>
    <LayoutFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const receiverForm = ref({
  name: '',
  address: '',
  shipTel: '',
});

const method = ref('')

const paymentOptions = [
  { value: 'option1', label: '貨到付款' },
  { value: 'option2', label: 'LinePay付款' },
  { value: 'option3', label: '轉帳付款' }];

const rules = {
  shipName: [
    { required: true, message: '請輸入收貨人姓名', trigger: 'blur' }
  ],
  address: [
    { required: true, message: '請輸入地址', trigger: 'blur' },
  ],
  shipTel:[
    { required: true, message: '請輸入電話', trigger: 'blur' },
    { type: Number, message: '電話號碼需為數字', trigger: 'blur'}
  ],
  method: [
    { required: true, message: '請選擇一項付款方式', trigger: 'blur' },
  ],

  
}

const addProduct = () => {
  // Logic to add product
  console.log('新增收貨人資料', receiverForm.value);
};
</script>

<style scoped>
.add-product {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.upload-demo {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .add-product {
    max-width: 100%;
  }
}
</style>