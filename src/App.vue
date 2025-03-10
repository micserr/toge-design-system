<template>
  <!-- 
   group-items-by="A-Z"
   -->
  <button @click="isModalOpen = true">sadasd</button>

  <spr-modal v-model="isModalOpen" :static-backdrop="false" title="wew" size="lg">
    <spr-dropdown
      id="sample-dropdown"
      v-model="preSelectedItems"
      multi-select
      :menu-list="menuList"
      placement="bottom"
      width="calc(100% - 400px)"
      popper-width="calc(100% - 420px)"
      popper-strategy="fixed"
      @get-selected-item="handleSelectedItem"
      @infinite-scroll-trigger="handleShowMoreItems"
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
  </spr-modal>
</template>

<script setup>
import { ref } from 'vue';

import SprModal from './components/modal/modal.vue';
import SprDropdown from './components/dropdown/dropdown.vue';
import SprInput from './components/input/input.vue';

const isModalOpen = ref(false);

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

const pagination = ref({
  totalpages: 10,
  currentPage: 1,
});

const handleShowMoreItems = () => {
  if (pagination.value.currentPage === pagination.value.totalpages) return;

  pagination.value.currentPage += 1;

  menuList.value.push(
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
  );

  console.log('Show more items', pagination.value);
};
</script>
