<template>
  <div>Test Component Here</div>
  {{ menuList }}
  <spr-dropdown
    id="sample-dropdown"
    v-model="dropdownModel"
    :menu-list="menuList"
    @update:model-value="handleSelectedItem"
  >
    <spr-input v-model="inputTextModel" label="Dropdown Label" readonly placeholder="Select item..." />
  </spr-dropdown>
  <button @click="menuList = [{ text: 'wow', value: 1 }]">Test Button</button>
</template>

<script setup>
import SprDropdown from '@/components/dropdown/dropdown.vue';
import SprInput from '@/components/input/input.vue';

import { ref } from 'vue';

const dropdownModel = ref([]);
const inputTextModel = ref('');

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
]);

const handleSelectedItem = (selectedItem) => {
  inputTextModel.value = menuList.value.find((item) => item.value === selectedItem[0]).text;
};
</script>
