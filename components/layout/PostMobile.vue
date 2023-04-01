<template>
  <div id="post">
    <slot name="header"></slot>

    <div class="post-content">
      <slot></slot>
    </div>

    <slot name="footer"></slot>
  </div>
</template>
