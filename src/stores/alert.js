import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useAlertStore = defineStore('alert', () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000
  })

  const showError = (message) => {
    Toast.fire({
      icon: 'error',
      title: message || '操作失敗'
    })
  }

  const showSuccess = (message) => {
    Toast.fire({
      icon: 'success',
      title: message || '操作成功'
    })
  }

  return {
    showError,
    showSuccess
  }
})