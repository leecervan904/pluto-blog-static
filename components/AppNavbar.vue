<script setup>
const links = [
  { path: '/', title: '首页' },
  { path: '/blog', title: '博客' },
  { path: '/tag', title: '标签' },
  { path: '/category', title: '分类' },
  { path: '/timeline', title: '时间轴' },
  { path: '/about', title: '关于' },
]

const route = useRoute()
const active = computed(() => route.path)

const appConfigStore = useAppConfigStore()
const handleToggleDarkMode = appConfigStore.toggleDarkMode

const { isMobile } = useBreakpoint()
</script>

<template>
  <div class="
    sticky top-0 z-999
    flex justify-center h-50px lh-50px px-20px
    lee-shadow bg-[var(--bg-color)]"
  >
    <div class="w-1200px max-w-1200px">
      <div class="flex justify-between w-full">
        <div>
          <NuxtLink #default="{ navigate }" to="/" custom>
            <h3 class="m-0 cursor-pointer" @click="navigate">
              Leecervan's Blog
            </h3>
          </NuxtLink>
        </div>

        <!-- Todo: add search component -->

        <div v-if="!isMobile" class="flex items-center">
          <div class="flex text-16px">
            <div
              class="mx-3px cursor-pointer"
              :class="{ 'link-active': active === link.path }"
              v-for="link in links"
            >
              <span
                class="px-10px py-3px rounded-5px hover:bg-red-400"
              >
                <NuxtLink #default="{ navigate }" :to="link.path" custom>
                  <span @click="navigate">{{ link.title }}</span>
                </NuxtLink>
              </span>
            </div>
          </div>

          <div class="mx-5px text-#ccc">|</div>

          <div class="px-10px cursor-pointer" @click="handleToggleDarkMode">
            <Icon name="carbon:brightness-contrast" />
          </div>
        </div>

        <div v-else>
          <div class="cursor-pointer" @click="handleToggleDarkMode">
            <Icon name="carbon:brightness-contrast" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
