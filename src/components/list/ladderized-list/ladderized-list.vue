<template>
  <div class="ladderized-list">
    <transition :name="transitionName" mode="out-in">
      <div v-if="activeLevel % 2 === 0">
        <spr-ladderized-list-back v-if="activeLevel > 0" :label="backLabel ?? 'Back'" @back="handleBackClick" />
        <spr-list v-model="selectedListItem" class="spr-p-size-spacing-3xs" :menu-list="activeList" :multi-select="false" :ladderized="true" @update:model-value="(value) => handleSelectedListItem(value[0])" />
      </div>
      
      <div v-else>
        <spr-ladderized-list-back v-if="activeLevel > 0" :label="backLabel ?? 'Back'" @back="handleBackClick" />
        <spr-list v-model="selectedListItem" class="spr-p-size-spacing-3xs" :menu-list="activeList" :multi-select="false" :ladderized="true" @update:model-value="(value) => handleSelectedListItem(value[0])" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import SprList from '@/components/list/list.vue';
import { ladderizedListPropTypes, ladderizedListEmitTypes } from './ladderized-list';
import { useLadderizedList } from './use-ladderized-list';
import SprLadderizedListBack from './ladderized-list-back.vue';

const props = defineProps(ladderizedListPropTypes);
const emit = defineEmits(ladderizedListEmitTypes);

const { activeLevel, selectedListItem, handleSelectedListItem, activeList, handleBackClick, transitionName, backLabel } = useLadderizedList(props, emit);

</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.25s ease-out;
}

.slide-left-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-leave-to,
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
