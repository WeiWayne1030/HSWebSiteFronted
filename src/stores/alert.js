import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useAlertStore = defineStore('alert', () => {
  const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

const error = Toast.fire({
          icon: 'error',
          title: '操作失敗'
        })

const success = Toast.fire({
          icon: 'success',
          title: '操作成功'
        })


  return {
    error,
    success,
    Toast
  }
})