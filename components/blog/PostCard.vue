<template>
  <div key="single" class="
    overflow-hidden
    flex justify-between
    w-full
    cursor-pointer lee-shadow rounded
  ">
    <div class="w-0 sm:display-block sm:w-2/10">
      <div class="w-full h-0 pb-1/1">
        <img class="w-full" src="/imgs/blog-card-poster.png" alt="blog card poster">
      </div>
    </div>

    <div class="flex-1 px-10px py-20px">
      <div class="font-bold text-blue-400 hover:text-blue-600" @click="$emit('navigate')">{{ post.title }}</div>
      <div class="mt-10px multi-ellipsis-2 text-14px">{{ post.description || 'none' }}</div>
      <div class="mt-10px text-14px">
        <span>标签:</span>
        <BlogPostTag
          v-for="tag in post.tags"
          class="mx-5px"
          @click="$emit('navigate')"
        >{{ tag }}</BlogPostTag>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  emits: ['navigate'],
  setup() {
    const { breakpoints } = useBreakpoint()
    const isSingleItem = computed(() => breakpoints.smaller('tablet').value)

    return {
      isSingleItem
    }
  },
})
</script>
