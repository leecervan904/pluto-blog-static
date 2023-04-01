<template>
  <div class="flex justify-center">
    <div class="flex flex-gap-x-10px text-14px">
      <span
        class="page-item"
        :class="{ 'page-item--disabled': modelValue === 1}"
        :disabled="modelValue === 1"
        @click="handleChangePage('prev')"
      >上一页</span>
      <span
        v-for="i of formattedPages"
        class="page-item"
        :class="{ active: i === modelValue }"
        @click="handleChangePage(i)"
      >{{ i }}</span>
      <span
        class="page-item"
        :class="{ 'page-item--disabled': modelValue === pages}"
        :disabled="modelValue === pages"
        @click="handleChangePage('next')"
      >下一页</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
  pages: {
    type: Number,
    default: 0,
  },
  pageCount: {
    type: Number,
    default: 9,
    validate: (val: number) => val >= 9,
  }
})
const emits = defineEmits(['update:modelValue'])

function genRangeArray(start: number, end: number) {
  const ret = []
  while (start <= end) ret.push(start++)
  return ret
}

const formattedPages = computed(() => {
  const { pages, pageCount, modelValue } = props
  let tmp: Array<number | '<<' | '>>'>
  if (pages <= pageCount) {
    tmp = new Array(pages).fill(0).map((_, i) => i + 1)
  } else if (modelValue < 4) {
    // 1, 2, 3
    tmp = [...genRangeArray(1, pageCount - 2), '>>', pages]
  } else if (modelValue > pages - 3) {
    // end-2, end-1, end
    tmp = [1, '<<', ...genRangeArray(pages - (pageCount - 2) - 1, pages)]
    // tmp = [1, '<<', end - 6, end - 5, end - 4, end - 3, end - 2, end - 1, end]
  } else {
    const half = (pageCount - 4) >> 1
    tmp = [1, '<<', ...genRangeArray(modelValue - half, modelValue + half), '>>', pages]
    // tmp = [1, '<<', mid - 2, mid - 1, mid, mid + 1, mid + 2, '>>', pages]
  }
  return tmp
})

function handleChangePage(tag: 'prev' | 'next' | '<<' | '>>' | number) {
  if (tag === 'prev') {
    if (props.modelValue > 1) {
      emits('update:modelValue', props.modelValue - 1)
    }
  } else if (tag === 'next') {
    if (props.modelValue < props.pages) {
      emits('update:modelValue', props.modelValue + 1)
    }
  } else if (tag === '<<') {
    emits('update:modelValue', Math.max(1, props.modelValue - 5))
  } else if (tag === '>>') {
    emits('update:modelValue', Math.min(props.pages, props.modelValue + 5))
  } else {
    emits('update:modelValue', tag)
  }
}
</script>

<style lang="scss">
.page-item {
  @apply px-10px py-5px rounded lee-shadow hover:bg-red-400 cursor-pointer select-none;
  &--disabled {
    @apply cursor-not-allowed bg-#ccc hover:bg-#ccc;
  }
}
.active {
  background-color: rgb(255, 90, 90);
}
</style>
