<template>
  <div class="flex justify-center px-20px">
    <div class="w-1200px max-w-1200px" v-if="!pending">
      <header class="my-50px">
        <h1 class="text-center">
          Welcome to my Blog!
        </h1>

        <h3 class="text-center">Talk is cheap, show me your code.</h3>
      </header>

      <section class="flex gap-x-20px justify-between items-center my-30px md:w-[calc(100%-30%-20px)]">
        <div class="font-bold">文章排序</div>
        <div class="flex gap-x-10px">
          <div
            v-for="item of sortList"
            class="px-5px py-3px cursor-pointer rounded hover:bg-red-400"
            :class="{ 'link-active': active === item.value }"
            @click="handleChangeSort(item)"
          >{{ item.label }}</div>
        </div>
      </section>

      <section v-if="!pending" class="my-30px md:flex md:gap-x-20px">
        <div class="w-full md:flex-1">
          <NuxtLink
            v-for="post in data"
            #default="{ navigate }"
            :to="`/blog/${post.id}`"
            custom
          >
            <BlogPostCard
              class="[&:not(:last-child)]:mb-20px"
              :post="post"
              @navigate="navigate"
            />
          </NuxtLink>

          <BlogPagination class="mt-50px" v-model="page" :pages="38" />
        </div>

        <aside v-if="!pending" class="
          display-none md:display-block md:w-3/10
          box-border p-20px
          lee-shadow bg-var(--bg-color) rounded
        ">
          <BlogSidebar :data="data" />
        </aside>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sortList = [
  { label: '全部', value: 'all' },
  { label: '最热门', value: 'hot' },
  { label: '最近更新', value: 'update' },
  { label: '最新创作', value: 'newest' },
]

const active = ref('all')
const limit = ref(10)
const page = ref(1)

const handleChangeSort = (item: typeof sortList[number]) => {
  active.value = item.value
}

const { data: data2, pending } = await useFetch('/api/getArticle')
const data = computed(() => pending.value ? [] : data2.value.result?.data)
console.log(data2.value.result.data)
// const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>
