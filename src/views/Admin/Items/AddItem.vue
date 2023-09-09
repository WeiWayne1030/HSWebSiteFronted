<template>
  <div>
    <!-- header,footer,nav -->
    <LayoutNav />
    <LayoutHeader />
    <StocksNavPills />
    <div class="add-product">
      <h2>新增商品</h2>
      <el-form ref="formRef" :model="product" :rules="rules" label-width="100px">
        <el-form-item label="上傳圖片" prop="image">
            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              class="form-control-file"
              @change="handleFileChange"
            >
        </el-form-item>
        <el-form-item label="商品名稱" prop="name">
          <el-input v-model="product.name"></el-input>
        </el-form-item>
        <el-form-item label="類別" prop="category">
          <el-select class="selectBar" v-model="product.category" placeholder="請選擇類別">
            <el-option
              v-for="category in categories"
              :key="category.id"
              :label="category.name"
              :value="category.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品描述" prop="description">
          <el-input v-model="product.description" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="商品價格" prop="price">
          <el-input v-model="product.price" type="number"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addProduct">新增商品</el-button>
        </el-form-item>
      </el-form>
    </div>
    <LayoutFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LayoutNav from '@/views/Admin/adminComponent/LayoutNav.vue'
import LayoutHeader from '@/views/Admin/adminComponent/LayoutHeader.vue'
import StocksNavPills from '@/views/Admin/Stock/Layout/StocksNavPills.vue'
import { addItemAPI } from '@/apis/admin/Item'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getItemsAPI } from '@/apis/Item'

const product = ref({
  name: '',
  category: '', 
  description: '',
  price: null,
  image:''
});

const router = useRouter()

const categories = ref([]) // Define categories as an empty array


const rules = {
  name: [
    { required: true, message: '請輸入名稱', trigger: 'blur' },
    { max: 20, message: '名稱不得超過20個字', trigger: 'blur' },
  ],
  price: [
    { required: true, message: '請輸入金額', trigger: 'blur' },
    { type: 'string', message: '只限數字', trigger: ['blur'] },
  ],
  description: [
    { max: 160, message: '名稱不得超過160個字', trigger: 'blur' }
  ],
  category: [
    { required: true, message: '種類必選', trigger: 'blur' },
  ]
}

const formRef = ref(null)


  

  const fetchCategories = async () => {
  try {
    const res = await getItemsAPI(null)
  categories.value = res.categories
  } catch (error) {
    console.log('error', error)
  }
};

const handleFileChange = (e) => {
  const files = e.target.files
  if (files.length > 0) {
    const file = files[0]
    product.value.image = URL.createObjectURL(file)
  }
}

onMounted(async () => {
  fetchCategories()
});

const addProduct = async () => {
  const valid = await formRef.value.validate() // Use productForm for validation
  if (valid) {
    try {
      const { name, price, description, category, image } = product.value
      console.log(category)
      const res = await addItemAPI({ name, price, description, CategoryId: Number(category), image })
      console.log(res)
      ElMessage({ type: 'success', message: '新增成功' })
      router.replace('/admin/items')
    } catch (error) {
      ElMessage({ type: 'error', message: '新增失敗' })
    }
  }
}


// Define beforeUpload function if needed

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