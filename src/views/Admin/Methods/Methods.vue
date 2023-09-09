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
                @click="createMethod()"
              >
                新增
              </el-button>
            </el-col>
          </el-row>
        </el-form>
        <el-table :data="methods" stripe style="width: 100%">
          <el-table-column prop="id" label="#" width="60"></el-table-column>
          <el-table-column prop="name" label="付款方式">
            <!-- 使用 v-if 控制顯示文字或輸入框 -->
            <template #default="{ row }">
              <div v-if="editingMethodId === row.id" ref="inputRef" :model="row">
                <el-input v-model="row.name" placeholder="編輯類別..."></el-input>
                <el-button type="text" class="button1" width="2" @click="saveMethod(row.id)">完成</el-button>
                <el-button type="text" class="button5" @click="cancelEditMethod">取消</el-button>
              </div>
              <div v-else>{{ row.name }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="狀態"></el-table-column>
          <el-table-column label="Action" class="action" align="center">
            <template #default="{ row }">
            <div class="action-button">
              <el-button  type="text" class="button1" width="2" @click="editMethod(row.id)">編輯</el-button>
              <el-button
                type="text"
                class="button2"
                width="2"
                @click="removeMethod(row.id)"
              >
                移除
              </el-button>
              <el-button
                type="text"
                class="button3"
                width="2"
                @click.stop.prevent="relistMethod(row.id)"
              >
                恢复
              </el-button>
              <el-button
                type="text"
                class="button4"
                width="2"
                @click.stop.prevent="deleteMethod(row.id)"
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
import { addMethodAPI, getMethodsAPI,putMethodAPI, removeMethodAPI,relistMethodAPI, delMethodAPI} from '@/apis/admin/other/method'
import { ElForm, ElInput, ElButton, ElMessage } from 'element-plus'

const formData = ref({ name:'' });
const isProcessing = ref(false);
const methods = ref([]);
const isLoading = ref(true);
const formRef = ref(null)




const fetchMethod = async () => {
  try {
    const res = await getMethodsAPI();
    if (res) {
      methods.value = res;
      isLoading.value = false;
    } else {
      ElMessage({ type: 'success', message: '操作成功' })
      isLoading.value = false;
    }
  } catch (error) {
    ElMessage({ type: 'error', message: '操作失敗' })
    isLoading.value = false;
  }
};

const createMethod = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    try {
      const { name } = formData.value
      const res = await addMethodAPI({ name })
      console.log(res)
      ElMessage({ type: 'success', message: '添加成功' })
      formData.value.name = ''
      fetchMethod()
    } catch (error) {
      ElMessage({ type: 'error', message: '添加失敗' })
    }
  }
};

const editingMethodId = ref(null)
const inputRef =ref(null)

const editMethod = (methodId, methodName) => {
  // 設定要編輯的付款方式ID和名稱，以顯示輸入框
  editingMethodId.value = methodId;
  formData.value.name = methodName;
};

const saveMethod = async (row) => {
  const valid = inputRef.value;
  if (valid) {
    try {
      const { id, name } = row; // Extract id and name from the row
      const res = await putMethodAPI({ id, name});
      console.log(res);
      ElMessage({ type: 'success', message: '編輯成功' });
      // Clear the editing state
      editingMethodId.value = null;
      // No need to reset formData.value.name here, as it's already updated in the UI
      fetchMethod();
    } catch (error) {
      ElMessage({ type: 'error', message: '編輯失敗' });
    }
  }
};
const cancelEditMethod = () => {
  // 清除编辑状态
  editingMethodId.value = null;
  // 将表单数据重置为原始值
  formData.value.name = '';
};

const removeMethod = async (methodId) => {
  try {
    const res = await removeMethodAPI({id:methodId});
    console.log(res)
    // refresh 表單
    fetchMethod();
    ElMessage({ type: 'success', message: '操作成功' })
  } catch (error) {
    ElMessage({ type: 'success', message: '操作失敗' })
  }
};

const relistMethod = async (methodId) => {
  try {
    await relistMethodAPI({id:methodId});
    fetchMethod();
    ElMessage({ type: 'success', message: '操作成功' })
  } catch (error) {
    ElMessage({ type: 'error', message: '操作失敗' })
  }
};

const deleteMethod = async (methodId) => {
  try {
    await delMethodAPI({id:methodId});
    fetchMethod();
    ElMessage({ type: 'success', message: '操作成功' })
  } catch (error) {
    ElMessage({ type: 'error', message: '操作失敗' })
  }
};

onMounted(() => {
  fetchMethod();
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