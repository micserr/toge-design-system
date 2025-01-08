<script setup>
import { ref } from 'vue'

const msg = ref('Hello Worldsss!')

const submit = () => alert(msg.value)
</script>

<template>
  <h1>Welcome</h1>
  <input v-model="msg" />
  <spr-button tone="success" @click="submit">Submit</spr-button>
</template>
