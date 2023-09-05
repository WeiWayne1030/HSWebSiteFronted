<template>
  <div>
  <!-- header,footer,nav -->
  <LayoutNav />
  <LayoutHeader />
  <OthersNavPills />
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
                v-model="newCategoryName"
                placeholder="新增類別..."
              ></el-input>
            </el-col>
            <el-col :span="8">
              <el-button
                type="primary"
                :disabled="isProcessing"
                @click.stop.prevent="createCategory"
              >
                新增
              </el-button>
            </el-col>
          </el-row>
        </el-form>
        <el-table :data="categories" stripe style="width: 100%">
          <el-table-column
            prop="id"
            label="#"
            width="60"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="Category Name"
          >
              <div class="position-relative">
                <el-input
                  v-show="scope.row.isEditing"
                  v-model="scope.row.name"
                ></el-input>
                <div v-show="!scope.row.isEditing" class="category-name">
                  {{ scope.row.name }}
                </div>
                <span
                  v-show="scope.row.isEditing"
                  class="cancel"
                  @click="handleCancel(scope.row.id)"
                >✕</span>
              </div>
          </el-table-column>
          <el-table-column label="Action" width="210">
              <el-button
                v-show="!scope.row.isEditing"
                type="text"
                @click.stop.prevent="toggleIsEditing(scope.row.id)"
              >
                Edit
              </el-button>
              <el-button
                v-show="scope.row.isEditing"
                type="text"
                @click.stop.prevent="updateCategory({ categoryId: scope.row.id, name: scope.row.name })"
              >
                Save
              </el-button>
              <el-button
                type="text"
                @click.stop.prevent="deleteCategory(scope.row.id)"
              >
                Delete
              </el-button>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
  <LayoutFooter />
</template>

<script setup>
import { ref } from 'vue';
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutNav from '@/views/Admin/adminComponent/LayoutNav.vue'
import LayoutHeader from '@/views/Admin/adminComponent/LayoutHeader.vue'
import OthersNavPills from '../adminComponent/OthersNavPills.vue';

const newCategoryName = ref('');
const isProcessing = ref(false);
const categories = ref([]); // Initialize with your data

// const createCategory = () => {
//   // Your createCategory logic here
// };

// const handleCancel = (categoryId) => {
//   // Your handleCancel logic here
// };

// const toggleIsEditing = (categoryId) => {
//   // Your toggleIsEditing logic here
// };

// const updateCategory = ({ categoryId, name }) => {
//   // Your updateCategory logic here
// };

// const deleteCategory = (categoryId) => {
//   // Your deleteCategory logic here
// };
</script>