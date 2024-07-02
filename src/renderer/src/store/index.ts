import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  state: () => {
    return {
      count: 0,
    }
  },
  getters: {},
  actions: {
    increment() {
      this.count++
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'count',
        storage: localStorage
      }
    ]
  }
})

