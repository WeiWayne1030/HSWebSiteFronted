<template>
  <div>
    <LayoutNav />
    <LayoutHeader />
    <div v-if="isLoading" class="spinner">
      <Spinner />
    </div>
    <div class="product-page" v-else>
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
import { onMounted, ref, computed } from 'vue';
import { getItemAPI } from '@/apis/item';
import { addCartAPI } from '@/apis/user';
import { useRoute, useRouter } from 'vue-router';
import Spinner from '@/components/Spinner.vue';
import { ElMessage, ElMessageBox } from 'element-plus';

const selectedColor = ref('');
const selectedSize = ref('');
const quantity = ref(1);

const product = ref({});
const mergedStocks = ref([]);
const isLoading = ref(true);

const route = useRoute();
const router = useRouter();

onMounted(async () => {
  const id = parseInt(route.params.id);
  try {
    const res = await getItemAPI(id);
    if (res && res.item) {
      product.value = res.item;
      mergedStocks.value = res.mergedStocks;
      selectedColor.value = res.mergedStocks[0]?.color;
      selectedSize.value = res.mergedStocks[0]?.sizes[0]?.name;
      isLoading.value = false;
    } else {
      console.error('Invalid API response:', res);
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    isLoading.value = false;
  }
});

const selectedColorStock = computed(() => {
  const color = selectedColor.value;
  return (
    mergedStocks.value.find((stock) => stock.color === color) || {
      sizes: [],
    }
  );
});

const selectedSizeStock = computed(() => {
  const color = selectedColor.value;
  const size = selectedSize.value;
  const colorStock = mergedStocks.value.find((stock) => stock.color === color);
  if (colorStock) {
    const sizeStock = colorStock.sizes.find((sizeEntry) => sizeEntry.name === size);
    if (sizeStock && product.value.Colors) {
      const matchingStock = product.value.Colors.find((stock) => {
        return stock.name === color && stock.Size.name === size;
      });
        console.log(matchingStock)
      if (matchingStock) {
        // 使用let宣告addProduct，以便稍後修改它的值
        let addProduct = {
          ColorId:  matchingStock.id,
          itemQuantity: quantity.value,
        };
        return { itemStock: matchingStock.itemStock, addProduct }; // 將addProduct也返回
      }
    }
  }
  return { itemStock: 0, addProduct: null }; // 如果找不到匹配的庫存，返回addProduct為null
});

const addToCart = async () => {
  const { itemStock, addProduct } = selectedSizeStock.value;

  if (!addProduct) {
    return; // 如果addProduct為null，不執行加入購物車操作
  }

  if (itemStock < quantity.value) {
    ElMessageBox.alert('庫存不足', '錯誤', { type: 'error' });
    return;
  }

  try {
    await addCartAPI(addProduct); // 使用修改後的addProduct
    ElMessage.success('成功加入購物車');
    router.replace({ path: '/' });
  } catch (error) {
    ElMessage.error('加入購物車失敗');
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