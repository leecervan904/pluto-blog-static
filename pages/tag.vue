<template>
  <div>tag</div>
  <div v-if="pending">loading...</div>
  <div v-else>
    <div v-for="item in data!.result.data">{{ item.name }}</div>
  </div>
</template>

<script setup lang="ts">
const { data, pending } = useFetch('/api/getTag')
console.log(data.value)
</script>
