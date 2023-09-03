<template>
    <LayoutNav />
    <LayoutHeader />
    <div class="container">
      <h1 class="about-title">關於我們</h1>
      <div class="about-us">
        <div class="left">
          <img src="https://i.imgur.com/bs78EF0.jpg?1" alt="Logo" class="logo" />
        </div>
        <div class="right">
          <p class="brand-description">
            Herstory，一個充滿女性力量的衣著品牌，這個品牌的創始人是一位堅信女性應該擁有自信和獨立風格的女性，她決心在時尚界創造一個嶄新的故事。核心理念是為現代女性打造出色的衣著，反映她們多面的生活，無論是事業、家庭、還是社交生活。充分理解女性的需求，致力於創造出既時尚又實用的服飾，讓女性感到自信和舒適。這個品牌通過衣著，向世界傳達著一個訊息：女性可以做任何事情，並且在自己的衣著中展現真正的自我。無論你是事業女性、母親、還是夢想家，Herstory都是你的故事的一部分。
          </p>
        </div>
      </div>
    </div>
    <LayoutFooter />
</template>

<script setup>
  import LayoutFooter from '@/components/LayoutFooter.vue'
  import LayoutNav from '@/components/LayoutNav.vue'
  import LayoutHeader from '@/components/LayoutHeader.vue'
</script>

<style scoped>
.about-title{
  position: absolute;
  margin: 60px 0px 0px 100px;
}
.about-us {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
}

.left {
  flex: 1;
  text-align: left;
}

.logo {
  max-width: 400px;
  margin-bottom: 20px;
}

.right {
  margin-bottom:20px;
  flex: 1;
  text-align: left;
}

.brand-description {
  font-size: 21px;
  color: #333;
  line-height: 2;
}
</style>