//axios 基礎封裝
import axios from 'axios'


const httpInstance = axios.create({
    baseURL: 'https://herstoryweb-b60819a85d94.herokuapp.com/api/',
    timeout: 5000,
})



// 請求攔截器
httpInstance.interceptors.request.use(config => {
    // 在發送請求之前做些什麼
    return config
}, error => {
    // 對請求錯誤做些什麼
    return Promise.reject(error)
})

// 響應攔截器
httpInstance.interceptors.response.use(response => {
    // 對響應數據做些什麼
    return response.data
}, error => {
    // 對響應錯誤做些什麼
    return Promise.reject(error)
})


export default httpInstance