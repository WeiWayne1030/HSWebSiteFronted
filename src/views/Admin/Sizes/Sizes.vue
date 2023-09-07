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
        <el-form class="my-4">
          <el-row>
            <el-col :span="16">
              <el-input
                v-model="newSizeName"
                placeholder="新增尺寸..."
              ></el-input>
            </el-col>
            <el-col :span="8">
              <el-button
                type="primary"
                :disabled="isProcessing"
                @click="createSize(size.id)"
              >
                新增
              </el-button>
            </el-col>
          </el-row>
        </el-form>
        <el-table :data="sizes" stripe style="width: 100%">
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
          @click.stop.prevent="removeSize(size.id)"
        >
          移除
        </el-button>
        <el-button
          type="text"
          class="button3"
          width="2"
          @click.stop.prevent="relistSize(size.id)"
        >
          恢复
        </el-button>
        <el-button
          type="text"
          class="button4"
          width="2"
          @click.stop.prevent="deleteSize(size.id)"
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
import { addSizeAPI, getSizesAPI,removeSizeAPI,relistSizeAPI, delSizeAPI} from '@/apis/admin/other/size'

const newSizeName = ref('');
const isProcessing = ref(false);
const sizes = ref([]);
const isLoading = ref(true);

const createSize = async (name) => {
  try {
    await addSizeAPI(name);
    fetchSize();
  } catch (error) {
    isLoading.value = false;
    console.error('Error creating size:', error);
  }
};

const fetchSize = async () => {
  try {
    const res = await getSizesAPI();
    if (res) {
      sizes.value = res;
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


// const updateSize = async (size) => {
//   try {
//     await putSizeAPI({ id: size.id, name: size.name });
//     fetchSize();
//   } catch (error) {
//     console.error('Error updating size:', error);
//   }
// };

const removeSize= async (id) => {
  try {
    const { id } =  await removeSizeAPI({id});
    // Refresh the size list here
    fetchSize();
  } catch (error) {
    console.error('Error removing size:', error);
  }
};

const relistSize = async (id) => {
  try {
    await relistSizeAPI({id});
    // Refresh the size list here
    fetchSize();
  } catch (error) {
    console.error('Error restoring size:', error);
  }
};

const deleteSize = async (id) => {
  try {
    await delSizeAPI(id);
    fetchSize();
  } catch (error) {
    console.error('Error deleting size:', error);
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