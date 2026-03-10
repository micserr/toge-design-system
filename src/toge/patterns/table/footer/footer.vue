<template>
  <tfoot>
    <slot />
  </tfoot>
</template>

<script lang="ts" setup>
defineSlots<{ default(props: {}): any }>()
</script>
