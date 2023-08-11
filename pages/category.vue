<template>
  <div>category</div>
  <div v-if="pending">loading...</div>
  <div v-else>
    <div v-for="item of data!.result.data">{{ item.name }}</div>
  </div>
</template>

<script setup lang="ts">
const { data, pending } = await useFetch('/api/getCategory')
</script>
