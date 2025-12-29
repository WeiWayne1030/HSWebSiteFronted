import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const searchQuery = ref('')

  const setSearchQuery = (q) => {
    searchQuery.value = q || ''
  }

  return {
    searchQuery,
    setSearchQuery,
  }
})
