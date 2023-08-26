<template>
  <div>
    <!-- header,footer,nav -->
    <LayoutNav />
    <LayoutHeader />
    <AdminSearchBar2 />
    </div>
    <div class="container">
      <div class="parent">
        <div class="div2">商品編號</div>
        <div class="div3">商品圖</div>
        <div class="div4">商品名稱</div>
        <div class="div5">顏色</div>
        <div class="div6">目前庫存</div>
        <div class="div7">價格</div>
        <div class="div8">管理</div>
        <div class="div9">上架時間</div>
      </div>
      <div class="line"></div>
      <div class="or1100000-parent-container">
        
      </div>
      <div class="C1100000-parent">
        <div class="C1100000">C1100000</div>
        <img :src="'https://i.imgur.com/PChh3PT.jpg'" alt="Product Image">
        <div class="div10">純棉圓領T-女</div>
        <div class="div11">白</div>
        <div class="div12">10</div>
        <div class="div13">$400</div>
        <div class="div14">執行下架</div>
        <div class="div15">2023/7/12</div>
      </div>
    </div> 
  <LayoutFooter />
</template>

<script setup>
  import LayoutFooter from '@/components/LayoutFooter.vue'
  import LayoutNav from '@/components/LayoutNav.vue'
  import LayoutHeader from '@/components/LayoutHeader.vue'
  import AdminSearchBar2 from '@/views/Admin/Stock/Layout/AdminSearchBar2.vue'
</script>

<style scoped>
  .div2 {
    position: relative;
    display: inline-block;
    width: 140px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div3 {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div4 {
    margin-left: 6%;
    padding-left:15px;
    position: relative;
    display: inline-block;
    width: 300px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div5 {
    margin-left: -80px;
    position: relative;
    display: inline-block;
    width: 90px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
   .div6 {
    margin-left: 1.5%;
    position: relative;
    display: inline-block;
    width: 90px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .div7 {
    margin-left: 1%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
   .div8 {
    margin-left: 3%;
    position: relative;
    display: inline-block;
    padding-left:40px;
    width: 150px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
   .div9 {
    margin-left: 3%;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
  .line {
    border-bottom: 1px solid;
  }
  .parent {
    margin-top: 15px;
    margin-left: 2%;
    box-sizing: border-box;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .C1100000-parent img {
    max-width: 80px;
    margin: 5px 90px 5px -10px;
  }
  .C1100000-parent {
  margin-top: 0.5%;
  box-sizing: border-box;
  width: 1512px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-16xl);
  }

  /* Adjust styles for div9 to div14 */
  .C1100000,
  .div10,
  .div11,
  .div12,
  .div13,
  .div14,
  .div15 {
    padding: 2.5% 80px 3% 20px; /* Center the text horizontally */
  }

  .div10 {
    padding-right:110px
  }
  .div11 {
    padding-right:90px
  }


</style>