<template>
  <footer class="fat-footer">
    <div class="container">
      <!-- Hamburger toggle (visible on small screens) -->
      <div class="footer-toggle-wrapper">
        <button
          class="hamburger"
          :aria-expanded="String(showMenu)"
          aria-label="切換頁腳選單"
          @click="showMenu = !showMenu"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>

      <!-- Sections: desktop shows as three columns, mobile collapses into accordion controlled by hamburger -->
      <div class="row footer-sections" :class="{ open: showMenu }">
        <!-- Column 1: 關於我們 -->
        <div class="text col-md-4">
          <h3>關注我們</h3>
          <div class="icon">
            <div class="icon">
              <FBIcon />
            </div>
            <div class="icon">
              <IGIcon />
            </div>
            <div class="icon">
              <LineIcon />
            </div>
          </div>
        </div>

        <!-- 聯絡資訊 -->
        <div class="text col-md-4">
          <h3>聯絡資訊</h3>
          <h4>服務時間：周一至周日 12:00-22:00</h4>
          <p>Email: contact@example.com</p>
          <ul>
            <li>
              <el-link type="primary" href="#" target="_blank">即時服務</el-link>
            </li>
            <li>
              <el-link type="primary" href="#" target="_blank">問題反饋</el-link>
            </li>
          </ul>
        </div>

        <!--連結-->
        <div class="text col-md-4">
          <h3 class="link">快速連結</h3>
          <ul>
            <li>
              <RouterLink type="primary" to="/" class="footer-link">首頁</RouterLink>
            </li>
            <li>
              <RouterLink type="primary" to="/about" class="footer-link">關於我們</RouterLink>
            </li>
            <li>
              <RouterLink type="primary" to="/activity" class="footer-link">最新活動</RouterLink>
            </li>
            <li>
              <RouterLink type="primary" to="/items" class="footer-link">全部商品</RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <!-- footer copy -->
      <div class="rows">
        <div class="text-copy">
          <p>&copy; The website is for herstory0227 store. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FBIcon from '@/components/icons/FBIcon.vue';
import IGIcon from '@/components/icons/IGIcon.vue';
import LineIcon from '@/components/icons/LineIcon.vue';
import { ref } from 'vue'

// Controls whether the collapsed footer menu is open on small screens
const showMenu = ref(false);

</script>

 <style>
.fat-footer {
  background-color: #800000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
}
.container{
  position: relative;
  max-width: 100vw;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
}
.footer-toggle-wrapper{
  display: none;
  width: 100%;
  text-align: right;
  padding-top: 12px;
}
.hamburger{
  background: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hamburger .bar{
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  margin: 3px 0;
  transition: all 0.2s ease;
}
.footer-sections{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
.text {
  color: white;
  font-size: 15px;
  padding-top: 3vw;
  display: inline-block;
  width: 33.33%;
  box-sizing: border-box;
  padding-right: 12px;
}
.info {
  color: white;
  font-size: 15px;
  padding-top: 20px;
  display: inline-block;
}
.footer-link {
  color: white;
  transition: color 0.3s ease;
}
.footer-link:hover {
  color: red;
}
.icon {
  margin-top: 20px;
  margin-right: 10%;
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.text-copy {
  color: white;
  display: flex;
  justify-content: center;
  padding: 12px 0;
}
.link {
  list-style: none;
  padding-bottom: 0px;
}
.btn {
  transition: fill 0.3s ease;
}

/* Responsive: collapse into hamburger menu on small screens */
@media (max-width: 768px) {
  .footer-toggle-wrapper{ display: block; }
  .footer-sections{ display: none; flex-direction: column; }
  .footer-sections.open{ display: block; }
  .text{ width: 100%; padding: 12px 0; }
  .icon{ width: auto; justify-content: flex-start; gap: 12px; margin-right: 0; }
  .fat-footer{ align-items: stretch; }
  .container{ padding: 8px 16px; }
  hr{ margin: 8px 0; border-color: rgba(255,255,255,0.15); }
}

</style>