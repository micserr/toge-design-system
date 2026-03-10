<template>
  <tbody>
    <slot />
  </tbody>
</template>

<script lang="ts" setup>
defineSlots<{ default(props: {}): any }>()
</script>
