<template>
  <table class="w-1/1 my-10px">
    <slot />
  </table>
</template>

<style lang="scss">
table {
  border: 1px solid var(--shadow-color);
  border-spacing: 0;
}

thead {
  font-size: 16px;
  background-color: var(--shadow-color);
  th {
    padding: 10px 0;
  }
}

tbody {
  font-size: 14px;
  tr:nth-child(2n) {
    background-color: var(--shadow-color);
  }
  td {
    padding: 10px;
  }
}
</style>
