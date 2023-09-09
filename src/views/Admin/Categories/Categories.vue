<template>
  <div>
  <!-- header,footer,nav -->
  <LayoutNav />
  <LayoutHeader />
  <OthersNavPills />
  </div>
  <div v-if="isLoading" class="spinner">
    <Spinner />
  </div>
  <div class="container py-5">
    <el-container>
      <el-aside width="100px">
        <!-- AdminNav goes here -->
      </el-aside>
      <el-main>
        <el-form ref="formRef" :model="formData" class="my-4">
          <el-row>
            <el-col :span="16">
              <el-input
                v-model="formData.name"
                placeholder="新增類別..."
              ></el-input>
            </el-col>
            <el-col :span="8">
              <el-button
                type="primary"
                :disabled="isProcessing"
                @click="createCategory()"
              >
                新增
              </el-button>
            </el-col>
          </el-row>
        </el-form>
        <el-table :data="categories" stripe style="width: 100%">
    <el-table-column prop="id" label="#" width="60"></el-table-column>
    <el-table-column prop="name" label="類別"></el-table-column>
    <el-table-column prop="state" label="狀態"></el-table-column>
    <el-table-column label="Action" class="action" align="center">
      <div class="action-button">
        <el-button type="text" class="button1" width="2">編輯</el-button>
        <el-button
          type="text"
          class="button2"
          width="2"
          @click.stop.prevent="removeCategory(category.id)"
        >
          移除
        </el-button>
        <el-button
          type="text"
          class="button3"
          width="2"
          @click.stop.prevent="relistCategory(category.id)"
        >
          恢复
        </el-button>
        <el-button
          type="text"
          class="button4"
          width="2"
          @click.stop.prevent="deleteCategory(category.id)"
        >
          刪除
        </el-button>
      </div>
    </el-table-column>
  </el-table>
      </el-main>
    </el-container>
  </div>
  <LayoutFooter />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutNav from '@/views/Admin/adminComponent/LayoutNav.vue'
import LayoutHeader from '@/views/Admin/adminComponent/LayoutHeader.vue'
import OthersNavPills from '@/views/Admin/adminComponent/OthersNavPills.vue';
import Spinner from '@/components/Spinner.vue'
import { addCategoryAPI, getCategoriesAPI,removeCategoryAPI,relistCategoryAPI, delCategoryAPI} from '@/apis/admin/other/category'
import { ElForm, ElInput, ElButton, ElMessage } from 'element-plus'

const formData = ref({ name:'' });
const isProcessing = ref(false);
const categories = ref([]);
const isLoading = ref(true);
const formRef = ref(null)


const fetchCategory = async () => {
  try {
    const res = await getCategoriesAPI();
    if (res) {
      categories.value = res;
      isLoading.value = false;
    } else {
      console.error('Invalid API response:', res);
      isLoading.value = false;
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
    isLoading.value = false;
  }
};

const createCategory = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    try {
      const { name } = formData.value
      const res = await addCategoryAPI({ name })
      console.log(res)
      ElMessage({ type: 'success', message: '添加成功' })
      formData.value.name = ''
      fetchCategory()
    } catch (error) {
      ElMessage({ type: 'error', message: '添加失敗' })
    }
  }
};

// const updateCategory = async (category) => {
//   try {
//     await putCategoryAPI({ id: category.id, name: category.name });
//     fetchCategory();
//   } catch (error) {
//     console.error('Error updating category:', error);
//   }
// };

const removeCategory = async () => {
  try {
    const { id } =  await removeCategoryAPI({id});
    // Refresh the category list here
    fetchCategory();
  } catch (error) {
    console.error('Error removing category:', error);
  }
};

const relistCategory = async (id) => {
  try {
    await relistCategoryAPI({id});
    // Refresh the category list here
    fetchCategory();
  } catch (error) {
    console.error('Error restoring category:', error);
  }
};

const deleteCategory = async (id) => {
  try {
    await delCategoryAPI(id);
    fetchCategory();
  } catch (error) {
    console.error('Error deleting category:', error);
  }
};

onMounted(() => {
  fetchCategory();
});
</script>
<style>
.action-button {
    display: flex;
    justify-content: center; 
    align-items:  center;
    margin-right:300px;
    width:330px;
}
.button1 {
  padding:3px
}
.button2 {
  padding:3px
}
.button3 {
  padding:3px
}
.button4 {
  padding:3px
}
.my-4 {
  padding-bottom: 2%;
}
</style>
