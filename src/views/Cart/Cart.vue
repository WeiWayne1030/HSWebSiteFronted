<template>
  <LayoutNav />
  <div>
    <div class="header">
      <h1>購物車列表</h1>
      <div class="back-home">
        <router-link to="/" class="router-link">返回購物首頁</router-link>
      </div>
    </div>
    <table class="cart-table">
      <thead>
        <tr>
          <th>
            <el-checkbox v-model="selectAll" @change="handleSelectAll">全選</el-checkbox>
          </th>
          <th>商品</th>
          <th>數量</th>
          <th>小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartItems" :key="index">
          <td>
            <el-checkbox v-model="item.selected" />
          </td>
          <td>
            <div class="product-info">
              <img :src="item.image" alt="Product Image" />
              <div class="product-content">
                <h3>{{ item.name }}</h3>
                <p>{{ item.color }}</p>
                <p>{{ item.size }}</p>
              </div>
            </div>
          </td>
          <td>
            <el-input-number v-model="item.quantity" @change="handleQuantityChange(index)" :min="1"></el-input-number>
          </td>
          <td>NT{{ formatCurrency(item.price * item.quantity) }}</td>
        </tr>
      </tbody>
    </table>
    <div class="total">
      <h3 class="total-price">合計：NT{{ formatCurrency(totalPrice) }}</h3>
      <p class="notice">運費和折扣將在結帳時計算</p>
    </div>
    <div class="checkout-button">
      <el-button type="primary" @click="checkout">結帳</el-button>
    </div>
  </div>
  <LayoutFooter />
</template>

<script setup>
import { ref, computed } from 'vue';

const selectAll = ref(false);
const cartItems = ref([
  {
    name: '超爆漂亮小洋裝',
    image: 'https://i.imgur.com/PChh3PT.jpg',
    color: '紅色',
    size: 'M',
    price: 100,
    quantity: 1,
    selected: false,
  },
  {
    name: '天上天下唯我獨尊小可愛',
    image: 'https://i.imgur.com/Rz4aIj8.jpg',
    color: '藍色',
    size: 'L',
    price: 150,
    quantity: 1,
    selected: false,
  },
]);

const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => {
    if (item.selected) {
      total += item.price * item.quantity;
    }
    return total;
  }, 0);
});

const handleSelectAll = () => {
  cartItems.value.forEach(item => {
    item.selected = selectAll.value;
  });
};



const handleQuantityChange = index => {
  if (cartItems.value[index].quantity < 1) {
    cartItems.value[index].quantity = 1;
  }
};

const formatCurrency = value => {
  return `$${value.toFixed(2)}`;
};

const checkout = () => {
  alert('結帳成功！');
};
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
  margin-bottom: 20px;
}

.cart-table th,
.cart-table td {
  border-bottom: 1px solid #ccc;
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

.el-button {
  padding:10px 100px 10px 100px;
  border-radius: 50px
}

</style>