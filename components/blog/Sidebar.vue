<template>
  <div class="my-20px">
    <h3>热门文章列表</h3>
    <div>
      <NuxtLink
        v-for="(post, index) of data?.slice(0, 10)"
        :to="post._path"
      >
        <div class="flex items-center my-10px border-black [&:not(:last-child)]:border-b hover:bg-red-400">
          <div class="w-40px text-center">
            <span>{{ index + 1 }}</span>
          </div>
          <div class="flex-1">
            <div class="my-10px lh-20px text-16px multi-ellipsis-1">
              {{ post.title }}
            </div>
            <div class="my-10px text-14px">2023-03-16 20:00</div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>

  <!-- <h3>评论列表</h3> -->

  <div class="my-20px">
    <h3>标签列表</h3>
    <div class="flex flex-wrap flex-gap-15px">
      <NuxtLink
        v-for="item in 50"
        to="/"
      >
        <div class="px-10px py-5px lee-shadow rounded hover:bg-red-400">{{ 'Tag ' + item }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  }
})
</script>