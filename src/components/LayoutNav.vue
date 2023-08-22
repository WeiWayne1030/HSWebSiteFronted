<template>
  <nav class="app-topnav">
    <div class="container"> 
      <el-image class="logo" src="https://i.imgur.com/VVLoUqg.png"></el-image>
    </div>
    <ul class="app-menu" v-if="loggedIn">
        <li class="user"><i class=" iconfont icon-user">{{ userInfo.name }}</i></li>
        <li>
          <el-tooltip content="登出" placement="top">
            <LogOutIcon />
          </el-tooltip> 
        </li>
        <li>
          <el-tooltip content="我的購物車" placement="top">
            <cart />
          </el-tooltip>   
        </li>
        <li>
          <el-tooltip content="我的訂單" placement="top">
            <Order />
          </el-tooltip>   
        </li>
        <li>
          <el-tooltip content="個人資料" placement="top">
            <Person />
          </el-tooltip>
        </li>
    </ul>
    <div v-else>
      <el-tooltip content="登入" placement="top">
        <LogInIcon />
      </el-tooltip> 
    </div>
  </nav>
</template>

<script setup>
import { watch } from 'vue';
import { useUserStore } from '@/stores/user'
import Person from '@/components/icons/Person.vue';
import Cart from '@/components/icons/Cart.vue';
import Order from '@/components/icons/Order.vue';
import LogOutIcon from '@/components/icons/LogOutIcon.vue';
import LogInIcon from '@/components/icons/LogInIcon.vue'


const userStore = useUserStore();
const userInfo = userStore.userInfo;

// Initialize the loggedIn flag based on userInfo
let loggedIn = Boolean(userInfo.name);

// Watch for changes in userInfo and update loggedIn accordingly
watch(() => userInfo.name, (newName) => {
  loggedIn = Boolean(newName);
});

</script>
 
 
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
        &:hover {
          color: #ffffff;
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
.user {
  i {
    margin-right: 5px; 
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    color: #eae1e1;
    text-decoration: none;
    text-overflow: ellipsis;
    max-width: 120px; 
  }
}

</style>