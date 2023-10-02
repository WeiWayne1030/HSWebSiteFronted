<template>
    <footer class="fat-footer" >
        <div class="container">
            <div class="row">
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
                        <li><el-link type="primary" href="#" target="_blank">即時服務</el-link></li>
                        <li><el-link type="primary" href="#" target="_blank">問題反饋</el-link></li>
                      </ul>    
                </div>
                <!--連結-->
                <div class="text col-md-4">
                    <h3 class="link">快速連結</h3>
                    <ul>
                        <li><RouterLink type="primary" to="/" class="footer-link">首頁</RouterLink></li>
                        <li><RouterLink type="primary" to="/about" class="footer-link">關於我們</RouterLink></li>
                        <li><RouterLink type="primary" to="/activity" class="footer-link">最新活動</RouterLink></li>
                        <li><RouterLink type="primary" to="/items" class="footer-link">全部商品</RouterLink></li>
                    </ul>
                </div>
            </div>
            <hr>
            <!-- footer-->
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

// Add a ref to track whether to show the footer
const showFooter = ref(false);

// Function to toggle the footer based on scroll position
const toggleFooter = () => {
  const scrollY = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );

  // Set a threshold value (e.g., 100 pixels from the bottom)
  const threshold = 100;

  if (documentHeight - (scrollY + windowHeight) <= threshold) {
    showFooter.value = true;
  } else {
    showFooter.value = false;
  }
};

// Add a scroll event listener to toggle the footer
window.addEventListener('scroll', toggleFooter);

// Initial check to see if footer should be shown on page load
toggleFooter();

</script>

 <style>
.fat-footer {
  background-color: #800000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 0; /* 将 footer 固定在底部 */
  left: 0;
  right: 0;
}
.container{
  position: fixed;
  max-width: 100vw;
  max-width: 100vw;
}
  .text {
  color: white;
  font-size: 15px;
  padding-top: 3vw;
  display: inline-block;
  }

  .info {
    color: white;
    font-size: 15px;
    padding-top: 20px;
    display: inline-block;
  }
  .footer-link {
    color: white;
    transition: fill 0.3s ease;
  }

  .footer-link:hover {
  color: red
  }

  .icon {
    margin-top: 20px;
    margin-right: 10%;
    width: 40%;
    size:40;
    display: flex;
    justify-content: space-between;
  }
  .text-copy {
    color: white;
    display: flex;
    justify-content: center;
  }
  .link {
    list-style: none;
    padding-bottom: 0px;
  }
  .btn {
    transition: fill 0.3s ease;
  }
  .text {
    width: 33.33%;
  }
  
</style>