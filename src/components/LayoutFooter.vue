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
                        <li><el-link type="primary" href="#" target="_blank">首頁</el-link></li>
                        <li><el-link type="primary" href="#" target="_blank">關於我們</el-link></li>
                        <li><el-link type="primary" href="#" target="_blank">最新活動</el-link></li>
                        <li><el-link type="primary" href="#" target="_blank">全部商品</el-link></li>
                    </ul>
                </div>
            </div>
            <hr>
            <!-- footer-->
            <div class="rows">
                <div class="text-copy">
                    <p>&copy; 2023 Your Website. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import FBIcon from '@/components/icons/FBIcon.vue';
import IGIcon from '@/components/icons/IGIcon.vue';
import LineIcon from '@/components/icons/LineIcon.vue';
</script>

 <style>
.fat-footer {
  background-color: #800000;
  display: flex;
  flex-direction: column; /* 垂直方向的列布局 */
  justify-content: space-between; /* 在列的两端分配额外的空间，将内容推到底部 */
  align-items: center; /* 居中垂直对齐 */
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
  .el-link {
    color: white;
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