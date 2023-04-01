<template>
  <span class="px-6px py-1px bg-red-400 hover:bg-red-500 rounded text-14px text-white transition-all" @click="$emit('click')">
    <slot></slot>
  </span>
</template>
