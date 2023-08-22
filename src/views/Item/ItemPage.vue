<template>
  <LayoutNav />
  <LayoutHeader />
  <div class="product-page">
    <div class="product-image">
      <img :src="product.image" alt="Product Image" />
    </div>
    <div class="product-details">
      <h1 class="product-name">{{ product.name }}</h1>
        <div class="price-tag">
          <h3 class="label">NT$</h3>
          <p class="price">{{ product.price }}</p>
        </div>
      <div class="selector">
        <el-radio-group v-model="selectedColor" class="radio-group">
          <el-radio-button label="red">紅色</el-radio-button>
          <el-radio-button label="blue">藍色</el-radio-button>
          <el-radio-button label="green">粉色</el-radio-button>
        </el-radio-group>
      
        <el-radio-group v-model="selectedSize" class="radio-group">
          <el-radio-button label="small">S</el-radio-button>
          <el-radio-button label="medium">M</el-radio-button>
          <el-radio-button label="large">L</el-radio-button>
        </el-radio-group>
      </div>
      <div class="quantity">
        數量：
        <el-input-number v-model="quantity" :min="1" :max="10"></el-input-number>
      </div>
      <el-button type="primary" @click="addToCart">加入購物車</el-button>
    </div>
  </div>
  <LayoutFooter />
</template>

<script>
export default {
  data() {
    return {
      product: {
        image: 'https://i.imgur.com/QvIm1lW.jpg',
        name: '修身牛仔長褲',
        price: '450',
      },
      selectedColor: '',
      selectedSize: '',
      quantity: 1
    };
  },
  methods: {
    addToCart() {
      const cartItem = {
        product: this.product.name,
        color: this.selectedColor,
        size: this.selectedSize,
        quantity: this.quantity
      };
      // 在這裡執行將商品添加到購物車的邏輯
      console.log('Added to cart:', cartItem);
    }
  }
};
</script>

<style>
.product-page {
  display: flex;
  margin: 5%;
}

.product-image {
  width: 100%;
  max-width: 500px;
  height: 100%;
  margin-right: 20px;
}

.product-name {
  font-size: 30px;
}

.product-details {
  flex: 1;
  padding-top:30px
}

.price-tag {
  display:flex;
  justify-content: flex-end;
  font-weight: bold;
}

.label {
  color: #800000
}

.price {
  font-size: 50px;
  color: #800000
}

.selector {
  padding:40px 0px 40px 0px
}

.selector::before,
.selector::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: #ccc; /* 设置线条的颜色 */
  margin: 10px 0; /* 控制线条与选择器之间的间距 */
}

.quantity {
  padding: 10px 0px 50px 0px;
}

.radio-group {
  padding:30px 0px 30px 0px ;
  display: flex;
  gap: 30px; /* 控制选项之间的间距 */
}

.selected-color-button {
  margin-top: 10px;
  padding: 20px;
  width: 150px;
  text-align: center;
  border: none;
  cursor: pointer;
}
</style>