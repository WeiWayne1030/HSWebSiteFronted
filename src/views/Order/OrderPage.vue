<template>
  <div>
    
    <div class="build-order">
      <h2>建立訂單</h2>
      <el-form :model="receiverForm" :rules="rules" label-width="100px" :ref="formRef">
        <el-form-item label="收貨人名稱" prop="shipName">
          <el-input v-model="receiverForm.shipName"></el-input>
        </el-form-item>
        <el-form-item label="付款方式" prop="method">
          <el-select v-model="receiverForm.method" placeholder="請選擇付款方式">
            <el-option
              v-for="method in methods"
              :key="method.id"
              :label="method.label"
              :value="method.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收貨地址" prop="address">
          <el-input v-model="receiverForm.address" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="收件人電話" prop="shipTel">
          <el-input v-model="receiverForm.shipTel" type="text"></el-input>
        </el-form-item>
        <el-form-item label="總金額">
          <span>{{ totalAmount }}</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addProduct">結帳</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { buildOrderAPI, getOrdersAPI } from '@/apis/order'
import { getCartsAPI } from '@/apis/cart'
import { useRouter } from 'vue-router'
import { useAlertStore } from '@/stores/alert'

const alert = useAlertStore()

const receiverForm = ref({
  shipName: '',
  method: '',
  address: '',
  shipTel: '',
})

const methods = ref([])

const formRef = ref(null)

const router = useRouter()

// Fetch payment methods
const fetchPaymentMethods = async () => {
  try {
    const res = await getOrdersAPI()
    if (res && res.methods) {
      methods.value = res.methods
      alert.showSuccess()
    } else {
      console.error('Invalid API response:', res)
      alert.showError()
    }
  } catch (error) {
    console.error('Error fetching payment methods:', error)
    alert.showError()
  }
}

onMounted(() => {
  fetchPaymentMethods()
})

const totalAmount = ref(0)
const pagination = ref('')

// 串接cart api獲取總金額
const fetchCartInfo = async () => {
  try {
    const res = await getCartsAPI(pagination)
    if (res && res.rows) {
      const calculatedTotalAmount = res.rows.reduce((total, cartItem) => {
        return total + cartItem.amount
      }, 0)
      totalAmount.value = calculatedTotalAmount
    } else {
      console.error('Invalid API response:', res)
      alert.showError()
    }
  } catch (error) {
    console.error('Error fetching cart information:', error)
    alert.showError()
  }
}

onMounted(() => {
  fetchCartInfo()
})

const rules = {
  shipName: [
    { required: true, message: '請輸入收貨人姓名', trigger: 'blur' },
  ],
  method: [
    { required: true, message: '請選擇一項付款方式', trigger: 'blur' },
  ],
  address: [
    { required: true, message: '請輸入地址', trigger: 'blur' },
  ],
  shipTel: [
    { required: true, message: '請輸入電話', trigger: 'blur' },
  ],
}

//發送建立訂單api
const addProduct = async () => {
  try {
    const { shipName, method, address, shipTel } = receiverForm.value

    // 找到選擇的methodId
    const selectedMethod = methods.value.find(m => m.name === method)
    const MethodId = selectedMethod ? selectedMethod.id : ''

    await buildOrderAPI({ shipName, MethodId, address, shipTel })
    alert.showSuccess()
    router.replace({ path: '/' })
  } catch (error) {
    alert.showError()
  }
}
</script>

<style scoped>
.build-order {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}


@media screen and (max-width: 768px) {
  .add-product {
    max-width: 100%;
  }
}
</style>