<template>
  <div class="tw-sidenav-wrapper" sidenav-type="push">
    <SidenavOlympus />
    <div class="tw-sidenav-content">
      <ButtonBase>Samples</ButtonBase>

      <h1 class="font-main">rubik</h1>

      <h1 class="font-inbound">robot</h1>

      <h1 class="font-code">roboto mono</h1>
    </div>
  </div>
</template>

<script setup>
import SidenavOlympus from './components/Sidenav/SidenavOlympus.vue';
import ButtonBase from './components/Buttons/ButtonBase.vue';
</script>

<style>
body {
  margin: 0;
}
</style>
