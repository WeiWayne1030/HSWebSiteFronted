<script setup>
import HomePanel from './HomePanel.vue'
 
</script>
 
<template>
  <HomePanel title="最新商品" sub-title="新鲜出爐 品質靠譜">
      <div class="row">
    </div>
  </HomePanel>
</template>
 
 
<style scoped lang='scss'>
.row {
  display: flex;
  justify-content: space-between;
 
  li {
    width: 306px;
    height: 406px;
 
    background: #f0f9f4;
    transition: all .5s;
 
    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }
 
    img {
      width: 306px;
      height: 306px;
    }
 
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
 
    .price {
      color: $priceColor;
    }
  }
}
</style>