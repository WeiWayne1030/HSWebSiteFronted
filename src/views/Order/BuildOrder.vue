<template>
  <div>
    <!-- header,footer,nav -->
    <LayoutNav />
    <LayoutHeader />
    <div class="build-order">
      <h2>建立訂單</h2>
      <el-form ref="orderForm" :model="orderData" :rules="rules" label-width="100px">
        <el-form-item label="訂單編號">
          <p>OR10000000</p>
        </el-form-item>
        <el-form-item label="收件人姓名">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="付款方式">
          <el-radio class="selectBar" v-model="formData.paymentMethod" v-for="method in paymentMethods"
            :key="method.value"
            :label="method.value"
            :value="method.value">
            {{ method.label }}
          </el-radio>
        </el-form-item>
        <el-form-item label="收件地址">
          <el-input v-model="address" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="收件人電話">
          <el-input v-model="shipTel" type="text"></el-input>
        </el-form-item>
        <el-form-item label="訂單金額">
          <p>123</p>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="buildOrder">送出訂單</el-button>
        </el-form-item>
      </el-form>
    </div>
    <LayoutFooter />
  </div>  
</template>

<script setup>
import { ref } from 'vue';

const orderData = ref({
  name: '',
  paymentMethod: '',
  description: '',
  price: null,
  quantity: null,
  color: '',
  size: '',
});

const paymentMethods = [
  {
    value: 'option1',
    label: '貨到付款',
  },
  {
    value: 'option2',
    label: '轉帳付款',
  },
  {
    value: 'option3',
    label: 'LinePay付款',
  }
]

const orderForm = ref(null)

// const rules = {
//   name: [{ required: true, message: '請輸入收貨人姓名', trigger: 'blur' }],
//   password: [
//     { required: true, message: '請選擇付款方式', trigger: 'blur' },
//     { min: 6, max: 14, message: '密碼長度為6-14個字符', trigger: 'blur' }
// ],
// };

// const buildOrder = async() => {
//   const { name, paymentMethod, address, shipTel} = formData.value;

// }

</script>

<style scoped>
.build-order {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}


@media screen and (max-width: 768px) {
  .build-order {
    max-width: 100%;
  }
}
</style>