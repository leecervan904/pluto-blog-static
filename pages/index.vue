<template>
  <div class="flex justify-center px-20px">
    <div class="w-1200px max-w-1200px">
      <div class="box-container p-20px text-center">
        <h1>Talk is cheap, show me your code!</h1>
        <h2>Day day up~</h2>
      </div>

      <div class="relative my-30px flex flex-wrap justify-between gap-y-20px">
        <div
          v-for="nav of homeNav"
          class="
            w-full sm:w-48/100 md:w-23/100
            hover:scale-110 transform transition-transform
          "
        >
          <nuxt-link :to="nav.link">
            <div class="flex items-center p-15px rounded-10px box-style">
              <div class="w-50px">
                <Icon :name="nav.icon" style="color: #ace; font-size: 25px" />
              </div>
              <div class="flex-1">
                <div class="h-30px lh-30px">{{ nav.title }}</div>
                <div class="mt-10px text-14px">{{ nav.subTitle }}</div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>

      <div class="my-30px md:flex md:gap-x-30px">
        <div class="w-full md:flex-1">
          <div>
            <h3>最近更新</h3>
            <NuxtLink
              v-for="post in data?.slice(0, 3)"
              #default="{ navigate }"
              :to="post._path"
              custom
            >
              <BlogPostCard
                class="[&:not(:last-child)]:mb-20px"
                @navigate="navigate"
                :post="post"
              />
            </NuxtLink>
          </div>

          <div>
            <h3>最热门</h3>
            <NuxtLink
              v-for="post in data?.slice(0, 3)"
              #default="{ navigate }"
              :to="post._path"
              custom
            >
              <BlogPostCard
                class="[&:not(:last-child)]:mb-20px"
                @navigate="navigate"
                :post="post"
              />
            </NuxtLink>
          </div>

          <div>
            <h3>最新创作</h3>
            <NuxtLink
              v-for="post in data?.slice(0, 3)"
              #default="{ navigate }"
              :to="post._path"
              custom
            >
              <BlogPostCard
                class="[&:not(:last-child)]:mb-20px"
                @navigate="navigate"
                :post="post"
              />
            </NuxtLink>
          </div>
        </div>

        <div class="w-full mt-30px p-20px box-style rounded-10px md:w-3/10 md:mt-60px">
          <div>
            <div class="w-1/2 m-auto">
              <div class="overflow-hidden w-full h-0 pb-1/1 rounded-1/2">
                <img class="w-full" src="/imgs/blog-card-poster.png" alt="avatar">
              </div>
            </div>
            <div class="my-20px lh-20px text-center">社区链接</div>
            <div class="my-10px lh-20px text-center">这是一段描述</div>
          </div>

          <!-- <div class="my-30px">
            <h3>广告位</h3>
            <div class="p-20px lee-shadow rounded">这是一段广告</div>
            <div class="mt-20px p-20px lee-shadow rounded">这是一段广告</div>
            <div class="mt-20px p-20px lee-shadow rounded">这是一段广告</div>
          </div> -->

          <div class="my-30px">
            <h3>友链</h3>
            <nuxt-link v-for="link of friendLinks" :to="link.link" target="_blank">
              <div class="px-20px py-10px my-10px rounded lee-shadow cursor-pointer hover:bg-red-400">
                <div class="font-bold multi-ellipsis-2">{{ link.label }}</div>
                <div class="mt-10px text-14px multi-ellipsis-2">{{ link.description }}</div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const homeNav = [
  {
    title: '博客文章',
    subTitle: '记录点滴进步',
    icon: '🚀',
    link: '/blog',
  },
  {
    title: '标签云',
    subTitle: '记录点滴进步',
    icon: 'carbon:analytics-custom',
    link: '/tag',
  },
  {
    title: '分类',
    subTitle: '记录点滴进步',
    icon: 'carbon:ai-status-rejected',
    link: '/category',
  },
  {
    title: '时间轴',
    subTitle: '记录点滴进步',
    icon: 'carbon:brightness-contrast',
    link: '/timeline',
  },
]

const friendLinks = [
  {
    label: 'Web Docs',
    link: 'https://web.lizhiwen.online/',
    description: '构建 Web 开发工具集',
  },
  {
    label: 'CS Docs',
    link: 'https://cs.lizhiwen.online/',
    description: '构建计算机科学知识星球',
  },
  {
    label: 'Nuxt',
    link: 'https://nuxt.com/',
    description: '基于 Vue 的 SSR 框架',
  },
]

const { data } = await useAsyncData(
  () => queryContent('blog')
  .sort({
    date: -1,
  })
  .find()
)
</script>

<style lang="scss">
.box-style {
  @apply box-border bg-var(--bg-color) lee-shadow;
}
.box-container {
  @apply box-border relative my-30px bg-var(--bg-color) lee-shadow rounded-20px;
}
</style>
