<script lang="ts">
import { defineComponent } from '#imports'
import { useClipboard } from '@vueuse/core';

export default defineComponent({
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array as () => number[],
      default: () => []
    },
    meta: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const { copy, copied } = useClipboard()
    const copyFlag = ref(false)
    const handleCopy = async () => {
      await copy(props.code)
      copyFlag.value = true
      setTimeout(() => {
        copyFlag.value = false
      }, 1000)
    }

    return {
      copied,
      copyFlag,
      handleCopy,
    }
  }
})
</script>

<template>
  <div class="max-w-1/1 my-10px rounded-6px overflow-hidden lee-shadow">
    <div class="relative left-0 right-0 top-0 h-30px bg-[var(--bg-code-title-color)]">
      <span class="absolute p-8px rounded-1/1 bg-#ec6a5f left-8px top-7px"></span>
      <span class="absolute p-8px rounded-1/1 bg-#f4be50 left-29px top-7px"></span>
      <span class="absolute p-8px rounded-1/1 bg-#61c554 left-50px top-7px"></span>
      <span class="absolute p-3px right-40px top-3px text-14px text-[var(--text-color-primary)]">{{ language }}</span>
      <span class="absolute right-8px top-3px text-18px text-[var(--text-link-color)] cursor-pointer"
        @click="handleCopy"
      >
        <Icon v-if="copyFlag" name="carbon:checkmark" />
        <Icon v-else name="carbon:copy-file" />
      </span>
    </div>
    <div class="px-8px py-5px bg-[var(--bg-code-color)]">
      <slot />
    </div>
  </div>
</template>

<style>
pre {
  overflow: auto;
  margin: 0;
  padding-bottom: 10px;
  font-size: 14px;
}
pre code .line {
  display: block;
  min-height: 1rem;
  padding-top: 1px;
  padding-bottom: 1px;
}
</style>
