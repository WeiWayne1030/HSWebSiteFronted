<template>
  <div>
    <!-- header,footer,nav -->
    <LayoutNav />
    <Banner />
    <HomePanel />
    <NewItems />
    <LayoutFooter />
  </div>
</template>

<script setup>
  import LayoutFooter from '@/components/LayoutFooter.vue'
  import LayoutNav from '@/components/LayoutNav.vue'
  import Banner from '@/views/Home/components/Banner.vue'
  import HomePanel from '@/views/Home/components/HomePanel.vue'
  import NewItems from '@/views/Home/components/NewItems.vue'
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