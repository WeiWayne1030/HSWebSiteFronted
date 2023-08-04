<script setup>
</script>
 
<template>
  <nav class="app-topnav">
    <div class="container"> 
      <el-image class="logo"  src="https://i.imgur.com/VVLoUqg.png"></el-image>
      <ul>
        <template v-if="true">
          <li><a href="javascript:;"><i class=" iconfont icon-user"></i>234</a></li>
          <li>
            <el-popconfirm @confirm="confirm" title="確認退出?" confirm-button-text="確認" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">登出</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的訂單</a></li>
          <li><a href="javascript:;">會員中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;">登入</a></li>
          <li><a href="javascript:;">關於我們</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>
 
 
<style scoped lang="scss">
.app-topnav {
  background: #800000;
 
  ul {
    display: flex;
    height: 53px;
    align-items: center;
 
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
 
        i {
          font-size: 14px;
          margin-right: 2px;
        }
 
        &:hover {
          color: #ffffff;
        }
      }
 
      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
 .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
.logo {
  height: 50px;
  }
</style>