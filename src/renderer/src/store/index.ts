import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  state: () => {
    return {
      count: 0,
      username: 'test'
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
        paths:["count"],
        storage: localStorage
      }
    ]
  }
})

