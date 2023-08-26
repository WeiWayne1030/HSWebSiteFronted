<template>
  <div>
    <LayoutNav />
    <LayoutHeader />

    <div class="product-page">
      <div class="product-image" ref="target">
        <img :src="product.image" alt="Product Image" />
      </div>
      <div class="product-details">
        <h1 class="product-name">{{ product.name }}</h1>
        <div class="price-tag">
          <h3 class="label">NT$</h3>
          <p class="price">{{ product.price }}</p>
        </div>
        <div class="stock">
      剩餘庫存:
      <template v-if="selectedSizeStock">
        {{ selectedSizeStock.itemStock }}
      </template>
      <template v-else>
        暫時沒有庫存
      </template>
    </div>
        <div class="selector">
          <div class="color-selector">
            <p>Select Color:</p>
            <el-radio-group v-model="selectedColor" class="radio-group">
              <el-radio-button
                v-for="stockEntry in mergedStocks"
                :key="stockEntry.color"
                :label="stockEntry.color"
              >
                {{ stockEntry.color }}
              </el-radio-button>
            </el-radio-group>
          </div>
          <div class="size-selector">
            <p>Select Size:</p>
            <el-radio-group v-model="selectedSize" class="radio-group">
              <el-radio-button
                v-for="sizeEntry in selectedColorStock?.sizes"
                :key="sizeEntry.name"
                :label="sizeEntry.name"
              >
                {{ sizeEntry.name }}
              </el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="quantity">
          數量：
          <el-input-number v-model="quantity" :min="0" :max="selectedSizeStock.itemStock"></el-input-number>
        </div>
        <el-button type="primary" @click="addToCart">加入購物車</el-button>
      </div>
    </div>

    <LayoutFooter />
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { getItemAPI } from '@/apis/item'
import { useRoute } from 'vue-router'

const selectedColor = ref('')
const selectedSize = ref('')
const quantity = ref(1)

const product = ref({})
const mergedStocks = ref([])

const route = useRoute()

onMounted(async () => {
  const id = parseInt(route.params.id)
  try {
    const res = await getItemAPI(id)
    if (res && res.item) {
      product.value = res.item;
      mergedStocks.value = res.mergedStocks
      selectedColor.value = res.mergedStocks[0]?.color // 設定初始顏色
      selectedSize.value = res.mergedStocks[0]?.sizes[0]?.name // 設定初始尺寸
    } else {
      console.error('Invalid API response:', res)
    }
  } catch (error) {
    console.error('Error fetching product:', error)
  }
})

// 創建一個 computed 獲取選擇的顏色
const selectedColorStock = computed(() => {
  const color = selectedColor.value
  return (
    mergedStocks.value.find(stock => stock.color === color) || {
      sizes: [],
    }
  )
})

// 在 selectedSizeStock 的計算屬性中，你需要對 colorStock 進行額外的檢查
const selectedSizeStock = computed(() => {
  const color = selectedColor.value;
  const size = selectedSize.value;

  const colorStock = mergedStocks.value.find(stock => stock.color === color);
  if (colorStock) {
    const sizeStock = colorStock.sizes.find(sizeEntry => sizeEntry.name === size);
    if (sizeStock && product.value.Stocks) {
      const matchingStock = product.value.Stocks.find(stock => {
        return stock.Color.name === color && stock.Color.Size.name === size;
      })

      if (matchingStock) {
        return { itemStock: matchingStock.Color.itemStock }
      }
    }
  }

  return { itemStock: 0 }
})


// const addToCart = () => {
//   const cartItem = {
//     product: product.value.name,
//     color: selectedColor.value,
//     size: selectedSize.value,
//     quantity: quantity.value,
//   }
//   // Add the logic here to add the item to the cart
//   console.log('Added to cart:', cartItem)
// }
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