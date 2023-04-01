<template>
  <div id="lee-post" class="p-10px pb-100px lt-md:p-20px">
    <div class="m-auto lt-sm:w-full md:w-full md:max-w-1200px lg:w-1200px xl:w-1440px">
      <div class="post-header">
        <slot name="header"></slot>
      </div>

      <div class="flex">
        <div class="flex-1 max-w-1/1">
          <!-- <pre>{{ toc }}</pre> -->
          <slot></slot>
        </div>

        <div class="lt-md:display-none ml-20px flex-shrink-0 w-240px lee-shadow">
          <slot name="toc">
            <BlogContentToc :toc="toc.links" />
          </slot>
        </div>
      </div>

      <!-- mobile -->
      <div
        v-if="isMobile"
        class="fixed z-99 p-20px rounded-1/2 bottom-10px right-10px bg-red-400"
        @click="toggleShowToc(!showToc)"
      ></div>

      <Teleport to="body">
        <Transition name="fade">
          <div
            v-if="isMobile && showToc"
            class="fixed z-999 top-0 w-1/1 h-1/1"
          >
            <div
              ref="refTocMobile"
              class="w-7/10 h-1/1 bg-red-400"
            >
              <BlogContentToc :toc="toc.links" />
            </div>
          </div>
        </Transition>
      </Teleport>

      <div class="post-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBreakpoints, onClickOutside } from '@vueuse/core'

defineProps({
  toc: {
    type: Object,
    required: true,
  }
})

const breakpoints = useBreakpoints({
  mobile: 640,
  tablet: 960,
  laptop: 1280,
  desktop: 1600,
})

const showToc = ref(false)
const refTocMobile = ref<HTMLElement | null>(null)
const isMobile = computed(() => breakpoints.smaller('mobile').value)

let clear: any
watchEffect(() => {
  if (showToc.value) {
    clear = onClickOutside(refTocMobile, e => {
      console.log('out...')
      toggleShowToc(false)
    })
  } else {
    clear?.()
  }
})

const toggleShowToc = (flag: boolean) => {
  showToc.value = flag
}
</script>
