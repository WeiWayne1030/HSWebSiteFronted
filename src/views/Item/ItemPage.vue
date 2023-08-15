<template>
  <LayoutNav />
  <LayoutHeader />
  <div class="product-page">
    <div class="product-image">
      <img :src="product.image" alt="Product Image" />
    </div>
    <div class="product-details">
      <h2>{{ product.name }}</h2>
      <p>價格：{{ product.price }}</p>
          <div>
      <h3>选择颜色：</h3>
      <el-radio-group v-model="selectedColor">
        <el-radio-button label="red">紅色</el-radio-button>
        <el-radio-button label="blue">藍色</el-radio-button>
        <el-radio-button label="green">粉色</el-radio-button>
      </el-radio-group>
    </div>
    <div>
      <h3>選擇尺寸：</h3>
      <el-radio-group v-model="selectedSize">
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
  margin: 20px;
}

.product-image {
  width: 100%;
  max-width: 400px;
  height: 100%;
  margin-right: 20px;
}

.product-details {
  flex: 1;
}

.quantity {
  margin-top: 10px;
}

.selected-color-button {
  margin-top: 10px;
  padding: 10px;
  width: 150px;
  text-align: center;
  border: none;
  cursor: pointer;
}
</style>