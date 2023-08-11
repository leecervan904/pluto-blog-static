<template>
  <!-- <LayoutPost :toc="data.body.toc">
    <template #header>
      <h1 class="title">{{ data.title }}</h1>
    </template>

    <ContentRenderer :value="data"/>
    <div v-html="markdownToHTML(markdown)"></div>

    <template #footer>
      <div class="h-300px bg-red-400"></div>
    </template>
  </LayoutPost> -->

  <div v-if="pending">loading...</div>
  <div v-else v-html="markdownToHTML(data.result.content)"></div>
</template>

<script setup>
// const store = useBlogStore()
// console.log(store.showToc)
// const markdown = '## hello world'

const route = useRoute()

const { data, pending } = await useFetch(`http://localhost:8000/article/${route.params.name}`)
console.log(data.value)
// console.log(getMarkdownToc(data.value.result.content))
</script>
