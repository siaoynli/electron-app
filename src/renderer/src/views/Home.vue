<script setup lang="ts">
import { useStore } from '@store'

const store = useStore()

</script>

<template>
  <div>
    home {{ store.count }}
    <button @click="store.increment">自增</button>
  </div>
</template>

<style scoped>

</style>
