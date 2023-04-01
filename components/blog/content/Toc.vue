<template>
  <div class="
    overflow-auto
    sticky top-50px
    h-[calc(100vh-100px)]
    p-10px
    bg-[var(--bg-color)]
    shadow-lg
  ">
    <BlogContentTocItem :toc="toc" />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    toc: {
      type: Array,
      default: () => ([])
    }
  },
})
</script>
