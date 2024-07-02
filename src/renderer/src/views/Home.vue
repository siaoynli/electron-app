<script setup lang="ts">
import { useStore } from '@store/index.ts'
import { loginByJson } from '@api/login'

const store = useStore()

const login = async () => {
  const res = await loginByJson({
    username: 'admin',
    password: '123456',
    key: '123456',
    captcha: '123456'
  })
  console.log(res)
}
</script>

<template>
  <div>
    home {{ store.count }}
    <button @click="store.increment">自增</button>
    <button @click="login">登陆</button>
  </div>
</template>

<style scoped>

</style>
