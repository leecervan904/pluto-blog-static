<template>
  <LayoutPost :toc="data.body.toc">
    <template #header>
      <h1 class="title">{{ data.title }}</h1>
    </template>

    <ContentRenderer :value="data"/>

    <template #footer>
      <!-- <div class="h-300px bg-red-400"></div> -->
    </template>
  </LayoutPost>
</template>

<script setup>
// const store = useBlogStore()
// console.log(store.showToc)

const route = useRoute()

const { data } = await useLazyAsyncData(
  () => queryContent('blog', route.params.name).findOne(),
)
</script>
