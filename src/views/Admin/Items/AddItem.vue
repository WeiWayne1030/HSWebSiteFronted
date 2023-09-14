<template>
  <div>
    <!-- header,footer,nav -->
    <LayoutNav />
    <LayoutHeader />
    <StocksNavPills />
    <div class="add-product">
      <h2 class="addItem-title">新增商品</h2>
      <el-form ref="formRef" :model="product" :rules="rules" label-width="100px" enctype="multipart/form-data">
        <el-form-item label="上傳圖片" prop="image">
            <img
              v-if="product.displayImage"
              :src="product.displayImage"
              class="d-block img-thumbnail mb-3"
              width="200"
              height="200"
            >
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
import { addItemAPI } from '@/apis/admin/adminItem'
import { useRouter } from 'vue-router'
import { getItemsAPI } from '@/apis/item'
import { useAlertStore } from '@/stores/alert'

const alert = useAlertStore()
const product = ref({
  name: '',
  category: '', 
  description: '',
  price: null,
  file:'',
  image: ''
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
    alert.showError()
  }
};

const handleFileChange = (e) => {
  const files = e.target.files
  if (files.length === 0) {
    product.value.image = null
  }
  else {
    const file = files[0]
    product.value.image = file
    const imageURL = URL.createObjectURL(file)
    product.value.displayImage = imageURL
    alert.showSuccess()
  }
}

onMounted(async () => {
  fetchCategories()
});

const addProduct = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    console.log(product.value.image)
    try {
      const formData = new FormData()
      formData.append('name', product.value.name)
      formData.append('price', Number(product.value.price))
      formData.append('description', product.value.description)
      formData.append('CategoryId', Number(product.value.category))
      formData.append('image', product.value.image)
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
      console.log(formData)
      const res = await addItemAPI(formData)
      console.log(res)
      alert.showSuccess()
      router.replace('/admin/items')
    } catch (error) {
      alert.showError()
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
.addItem-title{
  margin-left:30px ;
}
</style>