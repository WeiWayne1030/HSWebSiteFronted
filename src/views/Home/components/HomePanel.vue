<script setup>
// 定義props
defineProps({
  // 主標題
  title: {
    type: String
  },
  // 副標題
  subTitle: {
    type: String
  }
})
 
</script>
 
 
<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主標題和副標題 -->
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <!-- 主內容 -->
      <slot />
    </div>
  </div>
</template>
 
<style scoped lang='scss'>
.home-panel {
  background-color: #fff;
 
  .head {
    display: flex;
    align-items: flex-end;
 
    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;
 
      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>