<template>
<div class="banner-wrapper">
  <div class="banner">
    <div class="container">
      <div class="main-banner">
      <div class="img-container">
        <img src="https://i.imgur.com/WOkip54.jpg" alt="">
      </div>
      </div>
    </div>

    <div class="category-banner">
      <div class="top">
        <div class="img-container">
          <img class="small-picture" src="https://i.imgur.com/4q0jgMB.jpg" alt="">
        </div>
        <div class="img-container">
          <img class="small-picture" src="https://i.imgur.com/IfxgyFI.jpg" alt="">
        </div>
      </div>
      <router-link to="/items">
            <el-button class="img-button" type="primary">點我進入商品頁</el-button>
          </router-link>
      <div class="buttom">
        <div class="img-container">
          <img class="small-picture" src="https://i.imgur.com/HhnKscI.jpg" alt="">
        </div>
        <div class="img-container">
          <img class="small-picture" src="https://i.imgur.com/jEdodad.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script setup></script>

<style scoped lang='scss'>
.banner-wrapper {
  display: flex;
  flex-direction: column; /* 垂直堆叠子元素 */
  justify-content: center; 
  align-items: center; 
  min-height: 90vh;
  min-width: 90vh;
  background-color: #ffffff;
  padding-left:50px;
  padding-top:10px
}
.banner {
  display: flex;
  justify-content: center;
}
.main-banner {
  height: 100%
}

.container {
  max-width: calc(1440px - 170px);
}

.banner-content {
  display: flex;
  flex-direction: column; /* 垂直堆叠子元素 */
  justify-content: space-between; 
  height: calc(100vh - 92px);
}
.img-container {
  height: 100%;
  width: 100%;
  display: flex;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
.top {
  display: flex;
  justify-content: space-between;
  height: 50%;
  width: 95%;
}
.buttom {
  display: flex;
  justify-content: space-between;
  height: 50%;
  width: 95%;
}
.small-picture {
  width: 100%;
  height: 200px;
  object-fit: cover; /* 主要用於解決當圖像或视频的尺寸與其容器不匹配時，如何處理元素的缩放和剪裁問题。*/
}

.img-button {
  position: absolute;
  left: 45%;
  transform: translateX(-50%);
  width: 40%;
  height: 6%;
  max-width: 300px; 
  font-size: 16px; 
}
.span {
  color:#ffffff
}

</style>