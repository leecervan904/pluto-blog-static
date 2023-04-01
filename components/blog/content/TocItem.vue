<template>
  <ul v-for="item in toc" class="text-14px list-none">
    <template v-if="item.children">
      <li
        class="cursor-pointer my-3px py-3px"
        :class="`lee-indent-${(item.depth-2)*20}px`"
        :style="{ 'text-indent': `${(item.depth-2)*1}em` }"
      >
        <!-- <a :href="`#${item.id}`">{{ item.text }}</a> -->
        <span @click="handleScrollTo(item.id)">{{ item.text }}</span>
      </li>
      <BlogContentTocItem
        :class="`lee-indent-${(item.depth-2)*20}px`"
        :style="{ 'text-indent': `${(item.depth-2)*1}em` }"
        :toc="item.children"
      />
    </template>

    <li
      v-else
      class="cursor-pointer my-3px py-3px"
      :class="`lee-indent-${(item.depth-2)*20}px`"
      :style="{ 'text-indent': `${(item.depth-2)*1}em` }"
    >
      <!-- <a :href="`#${item.id}`">{{ item.text }}</a> -->
      <span @click="handleScrollTo(item.id)">{{ item.text }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
export default defineNuxtComponent({
  inheritAttrs: false,
  props: {
    toc: {
      type: Array,
      default: () => ([])
    },
  },
  setup() {
    function handleScrollTo(id: string) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return {
      handleScrollTo
    }
  }
})
</script>
