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
                placeholder="新增支付方式..."
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
    <el-table-column prop="name" label="支付方式"></el-table-column>
    <el-table-column prop="state" label="狀態"></el-table-column>
    <el-table-column label="Action" class="action" align="center">
      <div class="action-button">
        <el-button type="text" class="button1" width="2">編輯</el-button>
        <el-button
          type="text"
          class="button2"
          width="2"
          @click.stop.prevent="removeMethod(method.id)"
        >
          移除
        </el-button>
        <el-button
          type="text"
          class="button3"
          width="2"
          @click.stop.prevent="relistMethod(method.id)"
        >
          恢复
        </el-button>
        <el-button
          type="text"
          class="button4"
          width="2"
          @click.stop.prevent="deleteMethod(method.id)"
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
import { addMethodAPI, getMethodsAPI,removeMethodAPI,relistMethodAPI, delMethodAPI} from '@/apis/admin/other/method'
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
      console.error('Invalid API response:', res);
      isLoading.value = false;
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
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


// const updateMethod = async (method) => {
//   try {
//     await putMethodAPI({ id: method.id, name: method.name });
//     fetchMethod();
//   } catch (error) {
//     console.error('Error updating method:', error);
//   }
// };

const removeMethod = async () => {
  try {
    const { id } =  await removeMethodAPI({id});
    // Refresh the method list here
    fetchMethod();
  } catch (error) {
    console.error('Error removing method:', error);
  }
};

const relistMethod = async (id) => {
  try {
    await relistMethodAPI({id});
    // Refresh the method list here
    fetchMethod();
  } catch (error) {
    console.error('Error restoring method:', error);
  }
};

const deleteMethod = async (id) => {
  try {
    await delMethodAPI(id);
    fetchMethod();
  } catch (error) {
    console.error('Error deleting method:', error);
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