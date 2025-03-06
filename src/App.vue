<template>
  <!-- 
   menu-opened 
   multi-select
   -->
  <spr-dropdown
    v-model="preSelectedItems"
    group-items-by="A-Z"
    :menu-list="menuList"
    placement="bottom"
    width="400px"
    @get-selected-item="handleSelectedItem"
  >
    <spr-input
      v-model="inputText"
      label="Dropdown Label"
      placeholder="Select item..."
      readonly
      @keyup="handleDropdownSearch"
      @input="handleDropdownSearch"
    />
  </spr-dropdown>
</template>

<script setup>
import { ref } from 'vue';

import SprDropdown from './components/dropdown/dropdown.vue';
import SprInput from './components/input/input.vue';

const inputText = ref('');

const preSelectedItems = ref([]);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
  { text: 'Indian Fig', value: 'indian_fig' },
  { text: 'Jackfruit', value: 'jackfruit' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'Lemon', value: 'lemon' },
  { text: 'Mango', value: 'mango' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
  { text: 'Raspberry', value: 'raspberry' },
  { text: 'Strawberry', value: 'strawberry' },
  { text: 'Tangerine', value: 'tangerine' },
  { text: 'Uva', value: 'uva' },
  { text: 'Vanilla', value: 'vanilla' },
  { text: 'Watermelon', value: 'watermelon' },
  { text: 'Xigua', value: 'xigua' },
  { text: 'Yunnan Hackberry', value: 'yunnan_hackberry' },
  { text: 'Zucchini', value: 'zucchini' },
  { text: 'Apricot', value: 'apricot' },
  { text: 'Blueberry', value: 'blueberry' },
  { text: 'Cantaloupe', value: 'cantaloupe' },
  { text: 'Dragonfruit', value: 'dragonfruit' },
  { text: 'Pineapple', value: 'pineapple' },
]);

const searchString = ref('');

const handleSelectedItem = (item) => {
  console.log(item);

  inputText.value = item.text;
};

const handleDropdownSearch = () => {
  searchString.value = inputText.value;
};
</script>
