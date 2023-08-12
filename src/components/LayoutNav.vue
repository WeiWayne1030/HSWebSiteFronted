<script setup>
</script>
 
<template>
  <nav class="app-topnav">
    <div class="container"> 
      <el-image class="logo" src="https://i.imgur.com/VVLoUqg.png"></el-image>
    </div>
    <ul class="app-menu">
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
    </ul>
    
  </nav>
</template>
 
 
<style scoped lang="scss">
.app-topnav {
  background: #800000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;

    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-flex;
        align-items: center;
        
        i {
          font-size: 14px;
          margin-right: 5px;
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

      &.horizontal-menu {
        display: flex;
        align-items: center;
        
        a {
          margin-right: 20px; /* 添加间距使得菜单项之间有一定的距离 */
          color: #cdcdcd;
          text-decoration: none;
          font-size: 16px;

          &:hover {
            color: #ffffff;
          }

          &:last-child {
            margin-right: 0; /* 去除最后一个菜单项的右边距 */
          }
        }
      }
    }
  }
}
.container {
  width: 100%;
  display: block;
  justify-content: flex-start;
}
.logo {
  width: 200px;
}
</style>