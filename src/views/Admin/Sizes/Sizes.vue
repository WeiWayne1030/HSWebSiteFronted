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
                placeholder="新增付款方式..."
              ></el-input>
            </el-col>
            <el-col :span="8">
              <el-button
                type="primary"
                :disabled="isProcessing"
                @click="createSize()"
              >
                新增
              </el-button>
            </el-col>
          </el-row>
        </el-form>
        <el-table :data="sizes" stripe style="width: 100%">
          <el-table-column prop="id" label="#" width="60"></el-table-column>
          <el-table-column prop="name" label="付款方式">
            <!-- 使用 v-if 控制顯示文字或輸入框 -->
            <template #default="{ row }">
              <div v-if="editingSizeId === row.id" ref="inputRef" :model="row">
                <el-input v-model="row.name" placeholder="編輯類別..."></el-input>
                <el-button type="text" class="button1" width="2" @click="saveSize(row.id)">完成</el-button>
                <el-button type="text" class="button5" @click="cancelEditSize">取消</el-button>
              </div>
              <div v-else>{{ row.name }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="狀態"></el-table-column>
          <el-table-column label="Action" class="action" align="center">
            <template #default="{ row }">
            <div class="action-button">
              <el-button  type="text" class="button1" width="2" @click="editSize(row.id)">編輯</el-button>
              <el-button
                type="text"
                class="button2"
                width="2"
                @click="removeSize(row.id)"
              >
                移除
              </el-button>
              <el-button
                type="text"
                class="button3"
                width="2"
                @click.stop.prevent="relistSize(row.id)"
              >
                恢复
              </el-button>
              <el-button
                type="text"
                class="button4"
                width="2"
                @click.stop.prevent="deleteSize(row.id)"
              >
                刪除
              </el-button>
            </div>
            </template>
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
import { addSizeAPI, getSizesAPI,putSizeAPI, removeSizeAPI,relistSizeAPI, delSizeAPI} from '@/apis/admin/other/size'
import { ElForm, ElInput, ElButton } from 'element-plus'
import { useAlertStore } from '@/stores/alert'

const alert = useAlertStore()
const formData = ref({ name:'' });
const isProcessing = ref(false);
const sizes = ref([]);
const isLoading = ref(true);
const formRef = ref(null)




const fetchSize = async () => {
  try {
    const res = await getSizesAPI();
    if (res) {
      sizes.value = res;
      isLoading.value = false;
    } else {
      alert.showError()
      isLoading.value = false;
    }
  } catch (error) {
    alert.showError()
    isLoading.value = false;
  }
};

const createSize = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    try {
      const { name } = formData.value
      const res = await addSizeAPI({ name })
      console.log(res)
      alert.showSuccess()
      formData.value.name = ''
      fetchSize()
    } catch (error) {
      alert.showError()
    }
  }
};

const editingSizeId = ref(null)
const inputRef =ref(null)

const editSize = (sizeId, sizeName) => {
  // 設定要編輯的付款方式ID和名稱，以顯示輸入框
  editingSizeId.value = sizeId;
  formData.value.name = sizeName;
};

const saveSize = async (row) => {
  const valid = inputRef.value;
  if (valid) {
    try {
      const { id, name } = row; // Extract id and name from the row
      const res = await putSizeAPI({ id, name});
      console.log(res);
      alert.showSuccess()
      // Clear the editing state
      editingSizeId.value = null;
      // No need to reset formData.value.name here, as it's already updated in the UI
      fetchSize();
    } catch (error) {
      alert.showError()
    }
  }
};
const cancelEditSize = () => {
  // 清除编辑状态
  editingSizeId.value = null;
  // 将表单数据重置为原始值
  formData.value.name = '';
};

const removeSize = async (sizeId) => {
  try {
    const res = await removeSizeAPI({id:sizeId});
    console.log(res)
    // refresh 表單
    fetchSize();
    alert.showSuccess()
  } catch (error) {
    alert.showError()
  }
};

const relistSize = async (sizeId) => {
  try {
    await relistSizeAPI({id:sizeId});
    fetchSize();
    alert.showSuccess()
  } catch (error) {
    alert.showError()
  }
};

const deleteSize = async (sizeId) => {
  try {
    await delSizeAPI({id:sizeId});
    fetchSize();
    alert.showSuccess()
  } catch (error) {
    alert.showError()
  }
};

onMounted(() => {
  fetchSize();
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