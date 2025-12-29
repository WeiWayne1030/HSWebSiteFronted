<template>
  <div>
    <!-- header,footer,nav -->
    <Banner />
    <HomePanel />
  </div>
</template>

<script setup>
  import Banner from '@/views/Home/components/Banner.vue'
  import HomePanel from '@/views/Home/components/HomePanel.vue'
  // const carouselItems = [
  //       { src: 'https://fakeimg.pl/300/', alt: '' },
  //       { src: 'https://i.imgur.com/jEdodad.jpg', alt: '' },
  //       { src: 'https://fakeimg.pl/300/', alt: '' }
  //     ]
</script>

<style scoped>
img {
  width: 100%;
  height: 100px;
}
</style>