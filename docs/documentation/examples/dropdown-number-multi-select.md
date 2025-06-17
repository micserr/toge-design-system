## Multiple Number Values Example

The dropdown component fully supports arrays of number values in multi-select mode.

```vue
<template>
  <spr-dropdown
    id="number-multi-dropdown"
    v-model="selectedNumbers"
    :menu-list="numberOptions"
    multi-select
    @update:model-value="handleSelectedItems"
  >
    <spr-input
      v-model="displayText"
      label="Select Numbers"
      readonly
      placeholder="Select numbers..."
    />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Define number options with numeric values
const numberOptions = [
  { text: 'One', value: 1 },
  { text: 'Two', value: 2 },
  { text: 'Three', value: 3 },
  { text: 'Four', value: 4 },
  { text: 'Five', value: 5 }
];

// Initialize with preselected values
const selectedNumbers = ref([1, 3]); // Selected "One" and "Three"
const displayText = ref('One, Three');

// Handle selected items
const handleSelectedItems = (items) => {
  // Get corresponding text values for display
  const selectedTexts = items.map(value => {
    const option = numberOptions.find(opt => opt.value === value);
    return option ? option.text : '';
  }).filter(Boolean).join(', ');
  
  // Update display text
  displayText.value = selectedTexts;
  
  // Log selection (will show proper number types)
  console.log('Selected values:', items); // [1, 3] (numbers, not strings)
};
</script>
```

### Key Points About Number Value Support

1. **Value Type Preservation**: Number values remain as numbers in the v-model
2. **Type-Safe Comparison**: Both direct number comparison and string representation comparison are supported
3. **Pre-Selected Values**: You can pre-select number values using an array of numbers
4. **Mixed Types**: While supported, we recommend using consistent types (all strings or all numbers) for better maintainability

### Example with Direct Number Array

You can also provide numeric values directly as the menu list, though using the object format shown above is preferred for better control:

```vue
<template>
  <spr-dropdown
    id="direct-number-dropdown"
    v-model="selectedYears"
    :menu-list="yearOptions"
    multi-select
  >
    <spr-input v-model="yearsText" readonly />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

// Direct array of numbers
const yearOptions = [2020, 2021, 2022, 2023, 2024, 2025];
const selectedYears = ref([2023, 2024]);
const yearsText = ref('2023, 2024');

// Update display text whenever selection changes
watch(selectedYears, (newSelection) => {
  yearsText.value = newSelection.join(', ');
});
</script>
```
