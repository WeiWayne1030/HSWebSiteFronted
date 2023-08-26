<template>
  <div>
    <!-- header,footer,nav -->
    <LayoutNav />
    <LayoutHeader />
    <div class="add-product">
      <h2>新增商品</h2>
      <el-form ref="productForm" :model="product" label-width="100px">
        <el-form-item label="商品圖片">
          <el-upload
            class="upload-demo"
            action="/upload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-upload="beforeUpload"
            multiple>
            <el-button size="small" type="primary">上傳圖片</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品名稱">
          <el-input v-model="product.name"></el-input>
        </el-form-item>
        <el-form-item label="類別">
        <el-select class="selectBar" v-model="categoryValue" placeholder="請選擇類別">
          <el-option
            v-for="item in categoryOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="商品描述">
          <el-input v-model="product.description" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="商品價格">
          <el-input v-model="product.price" type="number"></el-input>
        </el-form-item>
        <el-form-item label="商品數量">
          <el-input v-model="product.quantity" type="number"></el-input>
        </el-form-item>
        <el-form-item label="顏色">
          <el-input v-model="product.color"></el-input>
        </el-form-item>
        <el-form-item label="尺寸">
          <el-input v-model="product.size"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addProduct">新增商品</el-button>
        </el-form-item>
      </el-form>
    </div>
    <LayoutFooter />
  </div>  
</template>

<script>
  // import LayoutFooter from '@/components/LayoutFooter.vue'
  // import LayoutNav from '@/components/LayoutNav.vue'
  // import LayoutHeader from '@/components/LayoutHeader.vue'

export default {
  data() {
    return {
      product: {
        name: '',
        category: '',
        description: '',
        price: null,
        quantity: null,
        color: '',
        size: '',
      },
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

    };
  },
  methods: {
    addProduct() {
      // 在這裡執行新增商品的邏輯，例如提交表單資料到伺服器等
      console.log('新增商品資料', this.product)
    },
    handlePreview() {
      // 圖片預覽邏輯
    },
    handleRemove() {
      // 刪除圖片邏輯
    }
  },
    //   beforeUpload(file) {
    //   // 上傳前的處理邏輯
    // }
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