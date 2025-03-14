<template>
  <spr-list :menu-list="mockDropdownData" v-model="sampleList" group-items-by="Z-A" multi-select/>
  <label for="sampleList">{{ sampleList }}</label>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SprList from '@/components/list/list.vue';
import type { MenuListType } from '@/components/list/list';

const sampleList = ref([]);

const mockDropdownData: MenuListType[] = [
  {
    text: "Lion",
    value: "lion",
    sublevel: [
      {
        text: "Cub",
        value: "cub",
        sublevel: [
          {
            text: "Cub 1",
            value: "cub-1",
          },
          {
            text: "Cub 2",
            value: "cub-2",
          },
        ],
      },
      {
        text: "Tiger",
        value: "tiger",
      },
    ],
    group: "Group 1",
  },
  {
    text: "Elephant",
    value: "elephant",
    sublevel: [
      {
        text: "Calf",
        value: "calf",
      },
    ],
    group: "Group 1",
  },
  {
    text: "Giraffe",
    value: "giraffe",
    group: "Group 2",
  },
  {
    text: "Zebra",
    value: "zebra",
  },
];
</script>
