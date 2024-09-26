<template>
  <button
    class="tw-text-white tw-rounded tw-bg-mushroom-500 tw-px-4 tw-py-2 hover:tw-bg-tomato-300"
  >
    <slot></slot>
  </button>
</template>

<style>
.style {
  background-color: #42b883;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  color: white;
  transition: background-color 300ms;
  will-change: background-color;
}
</style>
