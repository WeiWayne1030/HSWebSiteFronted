<template>
  <div>
  <!-- header,footer,nav -->
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
          </el-table-column>
          <el-table-column prop="state" label="狀態"></el-table-column>
          <el-table-column label="Action" class="action" align="center">
            <template #default="{ row }">
            <div class="action-button">
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
                恢復
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
</template>

<script setup>
import { ref, onMounted } from 'vue'
import OthersNavPills from '@/views/Admin/adminComponent/OthersNavPills.vue'
import Spinner from '@/components/Spinner.vue'
import { addMethodAPI, getMethodsAPI, removeMethodAPI,relistMethodAPI, delMethodAPI} from '@/apis/admin/other/method'
import { ElForm, ElInput, ElButton } from 'element-plus'
import { useAlertStore } from '@/stores/alert'

const alert = useAlertStore()
const formData = ref({ name:'' })
const isProcessing = ref(false)
const methods = ref([])
const isLoading = ref(true)
const formRef = ref(null)




const fetchMethod = async () => {
  try {
    const res = await getMethodsAPI()
    if (res) {
      methods.value = res
      isLoading.value = false
    } else {
      alert.showSuccess()
      isLoading.value = false
    }
  } catch (error) {
    alert.showError()
    isLoading.value = false
  }
};

const createMethod = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    try {
      const { name } = formData.value
      await addMethodAPI({ name })
      alert.showSuccess()
      formData.value.name = ''
      fetchMethod()
    } catch (error) {
      alert.showError()
    }
  }
}

const removeMethod = async (methodId) => {
  try {
    await removeMethodAPI({id:methodId})
    // refresh 表單
    fetchMethod();
    alert.showSuccess()
  } catch (error) {
    alert.showError()
  }
}

const relistMethod = async (methodId) => {
  try {
    await relistMethodAPI({id:methodId});
    fetchMethod()
    alert.showSuccess()
  } catch (error) {
    alert.showError()
  }
};

const deleteMethod = async (methodId) => {
  try {
    await delMethodAPI({id:methodId});
    fetchMethod()
    alert.showSuccess()
  } catch (error) {
    alert.showError()
  }
};

onMounted(() => {
  fetchMethod()
})
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