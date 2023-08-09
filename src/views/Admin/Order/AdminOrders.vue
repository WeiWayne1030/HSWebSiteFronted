<script setup>
  import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue';
  import LayoutNav from '@/views/Layout/components/LayoutNav.vue';
  import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue';
</script>
<template>
  <div>
    <!-- header,footer,nav -->
    <LayoutNav />
    <LayoutHeader />
    </div>
    <div class="parent">
      <div class="div2">訂單編號</div>
      <div class="div3">買家名稱</div>
      <div class="div4">訂單地址</div>
      <div class="div5">訂單電話</div>
      <div class="div6">訂單金額</div>
      <div class="div7">訂單建立時間</div>
      <div class="div8">訂單狀態</div>
    </div>
    <div class="line"></div>
    <div class="or1100000-parent">
      <div class="or1100000">OR1100000</div>
      <div class="div9">王小明</div>
      <div class="div10">台北市文山區木柵路三段96號B1</div>
      <div class="div11">09111111111</div>
      <div class="div12">$400</div>
      <div class="div13">2023/7/12</div>
      <div class="div14">待出貨</div>
    </div>
    <div class="or1100001-parent">
      <div class="or1100000">OR1100001</div>
      <div class="div9">王小華</div>
      <div class="div10">台北市文山區木柵路三段96號B1</div>
      <div class="div11">092222222</div>
      <div class="div12">$150</div>
      <div class="div19">2023/7/12</div>
      <div class="div14">待出貨</div>
    </div>
  <LayoutFooter />
</template>


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
    width: 110px;
    height: 48px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
   .div6 {
    margin-left: 1.5%;
    position: relative;
    display: inline-block;
    width: 100px;
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
    width: 231px;
    flex-shrink: 0;
    -webkit-text-stroke: 1px #000;
  }
   .div8 {
    margin-left: 3%;
    position: relative;
    display: inline-block;
    width: 300px;
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
    width: 1512px;
    height: 30px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-xl) 0px;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-16xl);
  }
  .or1100000 {
    position: relative;
    display: inline-block;
    width: 140px;
    height: 48px;
    flex-shrink: 0;
  }
  .div9 {
    margin-left: 1%;
    position: relative;
    display: inline-block;
    width: 100px;
    height: 48px;
    flex-shrink: 0;
  }
  .div10 {
    position: relative;
    display: inline-block;
    width: 300px;
    height: 48px;
    flex-shrink: 0;
  }
  .div11 {
    position: relative;
    display: inline-block;
    width: 110px;
    height: 48px;
    flex-shrink: 0;
  }
  .div12 {
    margin-left: 2%;
    position: relative;
    display: inline-block;
    width: 110px;
    height: 48px;
    flex-shrink: 0;
  }
  .div13 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 233px;
    flex-shrink: 0;
  }
  .div14 {
    margin-left: 1%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 115px;
    flex-shrink: 0;
  }
  .or1100000-parent {
    margin-left: 1.5%;
    margin-top: 1%;
    box-sizing: border-box;
    width: 1512px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-xl) 0px;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-16xl);
  }
  .div19 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 235px;
    flex-shrink: 0;
  }
  .or1100001-parent {
    margin-left: 1.5%;
    margin-top: 1%;
    box-sizing: border-box;
    width: 1512px;
    height: 68px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-xl) 0px;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-16xl);
  }
</style>