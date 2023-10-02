<template>
  <div class="empty-page">
    <el-row class="center-row" :gutter="20">
      <el-col :span="24">
        <p>This is a center-aligned empty page.</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'EmptyPage',
};
</script>

<style scoped>
.empty-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center-row {
  text-align: center;
}
</style>