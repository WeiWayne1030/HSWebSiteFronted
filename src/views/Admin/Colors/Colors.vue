<template>
  <div>
    <!-- header, footer, nav -->
    <LayoutNav />
    <LayoutHeader />
    <OthersNavPills />
  </div>
  <div v-if="isLoading" class="spinner">
    <Spinner />
  </div>
  <div class="color-container">
    <el-form ref="formRef" :model="formData" class="my-4">
      <el-row>
        <el-col :span="16">
          <el-input v-model="formData.name" placeholder="新增顏色..."></el-input>
        </el-col>
        <el-col :span="8">
          <el-button type="primary" :disabled="isProcessing" @click="createColor">
            新增
          </el-button>
        </el-col>
      </el-row>
    </el-form>
    <div class="center-table">
      <el-table :data="colors" style="width: 70%">
        <el-table-column label="顏色" prop="color" align="center"></el-table-column>
        <el-table-column label="操作">
        <template #default="scope">
            <el-button
              type="primary"
              @click="delColor(scope.row)"
            >
              刪除
            </el-button>
      </template>
    </el-table-column>
      </el-table>
    </div>
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
import { getColorsAPI, addColorAPI, delColorAPI } from '@/apis/admin/other/color'
import { ElForm, ElInput, ElButton } from 'element-plus'
import { useAlertStore } from '@/stores/alert'

const alert = useAlertStore()
const colors = ref([])
const isLoading = ref(true)
const formRef =ref(null)
const formData = ref({ name: '' })

const fetchColor = async () => {
  try {
    const res = await getColorsAPI()
    if (res) {
      colors.value = res
      isLoading.value = false
    } else {
      console.error('Invalid API response:', res)
      alert.showError()
      isLoading.value = false
    }
  } catch (error) {
    console.error('Error fetching colors:', error)
    isLoading.value = false
  }
}

const createColor = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    try {
      const { name } = formData.value
      const res = await addColorAPI({ name })
      console.log(res)
      alert.showSuccess()
      formData.value.name = ''
      fetchColor()
    } catch (error) {
      alert.showError()
    }
  }
};

const delColor = async (colorData) => {
  try {
    //獲取選擇顏色的名稱
    const selectedColor = colorData.color
    const res = await delColorAPI(selectedColor)
    console.log(res)
    fetchColor()
    alert.showSuccess()
  } catch (error) {
    alert.showError()
  }
};



onMounted(() => {
  fetchColor();
});
</script>

<style>
.action-button {
  display: flex;
  justify-content: center; 
  align-items: center;
  margin-right: 300px;
  width: 330px;
}

.my-4 {
  padding-bottom: 2%;
}

.color-container {
  margin: 2% 0px 2% 18%
}

</style>
