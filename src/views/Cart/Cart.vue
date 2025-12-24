<template>
  <LayoutNav @updateBadgeCount="delCart" />
  <div>
    <div class="header">
      <h1>購物車列表</h1>
      <div class="back-home">
        <router-link to="/items" class="router-link">返回商品頁</router-link>
      </div>
    </div>
    <div v-if="isLoading" class="spinner">
      <Spinner />
    </div>
    <div v-else>
      <table class="cart-table">
        <thead>
          <tr>
            <th>
              <el-checkbox v-model="selectAll" @change="handleSelectAll">全選</el-checkbox>
            </th>
            <th>商品</th>
            <th>數量</th>
            <th>小計</th>
            <th>刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in cartItems" :key="item.id">
            <td>
              <el-checkbox v-model="item.selected" />
            </td>
            <td>
              <div class="product-info">
                <img :src="item.Color.Item.image" alt="Product Image" />
                <div class="product-content">
                  <h3>{{ item.Color.Item.name }}</h3>
                  <p>{{ item.Color.name }}</p>
                  <p>{{ item.Color.Size.name }}</p>
                </div>
              </div>
            </td>
            <td>{{ item.itemQuantity }}</td>
            <td>NT{{ formatCurrency(item.amount) }}</td>
            <td>
              <a @click="() => delCart(item.id)">
                <TrashIcon />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="item-count">
        共{{ cartItems.length }}件商品，已選擇{{ selectedCount }}件商品
      </div>
      <div class="total">
        <h3 class="total-price">合計：{{ formatCurrency(totalPrice) }}</h3>
        <p class="notice">運費和折扣將在結帳時計算</p>
      </div>
      <div class="checkout-button">
        <el-button class="next-button" type="primary" @click="checkout">下一步</el-button>
      </div>
    </div>
  </div>
  <LayoutFooter />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Spinner from '@/components/Spinner.vue'
import TrashIcon from '@/components/icons/TrashIcon.vue'
import { useCartStore } from '@/stores/cart'
import { useAlertStore } from '@/stores/alert'

const router = useRouter()
const cartStore = useCartStore()
const alert = useAlertStore()

// ===== state（畫面用）=====
const selectAll = ref(false)

// ===== 從 Pinia 取得資料 =====
const cartItems = computed(() => cartStore.cartItems)
const isLoading = computed(() => cartStore.isLoading)

// ===== 初始化 =====
onMounted(() => {
  cartStore.getCartInfo({ page: 1, size: 20 })
})

// ===== 全選 =====
const handleSelectAll = () => {
  cartItems.value.forEach(item => {
    item.selected = selectAll.value
  })
}

// ===== 已選數量 =====
const selectedCount = computed(() => {
  return cartItems.value.filter(item => item.selected).length
})

// ===== 總金額 =====
const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return item.selected ? total + item.amount : total
  }, 0)
})

// ===== 格式化金額 =====
const formatCurrency = (value) => {
  return value.toFixed(2)
}

// ===== 刪除商品 =====
const delCart = async (id) => {
  try {
    await cartStore.deleteCartItem(id)
    alert.showSuccess()
  } catch (error) {
    console.error(error)
    alert.showError()
  }
}

// ===== 結帳 =====
const checkout = () => {
  router.replace({ path: '/order' })
  alert.showSuccess()
}
</script>

<style>
/* 根據你的需求自行調整樣式 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.back-home {
  display: flex;
  align-items: center;
}

.router-link {
  margin: 20px;
  color: #888;
  text-decoration: none; /* 去掉 underline */
  border: none; /* 去掉border */
  transition: color 0.3s; /* 顯示0.3秒*/
}

.router-link:hover {
  color: red; /* 指向會變紅色 */
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10%;
}

.cart-table th {
  border-bottom: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.cart-table td {
  padding: 8px;
  text-align: center;
}

.product-info {
  display: flex;
  align-items: center;
}

.product-info img {
  max-width: 80px;
  margin-right: 10px;
}
.product-content {
  padding-left: 50px;
  text-align: left;
}

.total {
  text-align: right; /* 將文本對齊方式設置為右對齊 */
  padding-right:50px;
  padding-bottom:20px
}

.notice {
  padding-top: 10px;
}

.product-info p {
  display: inline;
  margin-right: 10px;
  color: #888;
}

.cart-table th:nth-child(2),
.cart-table td:nth-child(2) {
  padding-left:20px
}

.cart-table th:nth-child(3),
.cart-table td:nth-child(3) {
  width: 100px;
}

.checkout-button {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
}

.next-button {
  padding:10px 100px 10px 100px;
  border-radius: 50px
}

</style>