// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

//引入初始化樣式
import '@/styles/common.scss'


const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mount('#app')

//定義全局指令
app.directive('img-lazy', {
  onMounted(el, binding) {
    // el：指令所綁定的元素，可以用來直接操作 DOM 。
    // binding：一個對象，指愣的魚後面綁定的詞
    console.log(el, binding)
  }
})
