<template>
  <div>
    <LayoutNav />
    <LayoutHeader />
      <h1>最新活動</h1>
      <p>特價商品</p>
  </div>
  <LayoutFooter />
</template>

<script setup>
  import LayoutFooter from '@/components/LayoutFooter.vue'
  import LayoutNav from '@/components/LayoutNav.vue'
  import LayoutHeader from '@/components/LayoutHeader.vue'
</script>