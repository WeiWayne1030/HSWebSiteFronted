<script setup>
  import LayoutFooter from '@/components/LayoutFooter.vue';
  import LayoutNav from '@/components/LayoutNav.vue';
  import LayoutHeader from '@/components/LayoutHeader.vue';
  const carouselItems = [
        { src: 'https://fakeimg.pl/300/', alt: '' },
        { src: 'https://i.imgur.com/jEdodad.jpg', alt: '' },
        { src: 'https://fakeimg.pl/300/', alt: '' }
      ]






</script>
<template>
  <div>
    <!-- header,footer,nav -->
    <LayoutNav />
    <LayoutHeader />
    <div class="block">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
          <img class="img1" :src="item.src" :alt="item.alt">
        </el-carousel-item>
      </el-carousel>
    </div>
    <LayoutFooter />
  </div>
</template>

<style scoped>
  .img1 {
    width: 100%;
    height: 100%;
  }
  .block {
    width: 100%;
    height: 100%;
  }
</style>