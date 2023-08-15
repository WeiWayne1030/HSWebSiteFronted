<template>
<div class="banner-wrapper">
  <div class="banner">
    <div class="container">
      <div class="main-banner">
      <div class="img-container">
        <img src="https://i.imgur.com/WOkip54.jpg" alt="">
        <el-button type="primary" round>點我進入商品頁</el-button>
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
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  min-height: 90vh;
  background-color: #ffffff;
  padding-left:50px;
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
  flex-direction: column; /* Stack the sections vertically */
  justify-content: space-between; /* Space between main-banner and category-banner */
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
  object-fit: cover; /* Adjust this property as needed (cover, contain, etc.) */
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
  object-fit: cover; /* Adjust this property as needed (cover, contain, etc.) */
}
.el-button {
  width: 300px;
  height: 40px;
  font-size: 20px;
  margin-top: 95%;
  margin-left: 40%;
}

</style>