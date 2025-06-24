// Example usage of select with primitive number values in multi-select mode

<template>
  <div>
    <h2>Multiple Number Values Demo</h2>
    <p>Selected values: {{ displaySelection }}</p>

    <div class="select-container">
      <spr-select
        id="number-multi-select"
        v-model="selectedNumbers"
        :menu-list="numberOptions"
        multi-select
        @update:model-value="handleSelectedItems"
      >
        <spr-input v-model="displayText" label="Select Numbers" readonly placeholder="Select numbers..." />
      </spr-select>
    </div>

    <div class="mt-4">
      <h3>Current selection type:</h3>
      <pre>{{ typeof selectedNumbers[0] }}</pre>

      <h3>Current selection:</h3>
      {{ selectedNumbers }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import SprInput from '@/components/input/input.vue';
import SprSelect from '@/components/select/select.vue';

// Define number options - raw number values
const numberOptions = [
  { text: 'One', value: 1 },
  { text: 'Two', value: 2 },
  { text: 'Three', value: 3 },
  { text: 'Four', value: 4 },
  { text: 'Five', value: 5 },
];

// Track selected numbers
const selectedNumbers = ref([]);
const displayText = ref('');

// Display the selection summary
const displaySelection = computed(() => {
  if (selectedNumbers.value.length === 0) {
    return 'None';
  }
  return selectedNumbers.value.join(', ');
});

// Handle selected items and update display text
const handleSelectedItems = (items) => {
  // For multi-select, update display text to show selected items
  const selectedTexts = items.map((itemValue) => {
    // Find corresponding text for each selected value
    const option = numberOptions.find((opt) => opt.value === itemValue);
    return option ? option.text : itemValue;
  });

  // Update the input display text
  displayText.value = selectedTexts.join(', ');

  console.log('Selected values:', items);
  console.log('Type of first value:', typeof items[0]);
};
</script>
