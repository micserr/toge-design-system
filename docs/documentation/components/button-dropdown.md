# Button Dropdown

The Button Dropdown component combines two buttons with a dropdown menu, allowing users to trigger a primary action or select from a list of related options. This component is ideal for scenarios where a single button action is accompanied by additional, secondary actions accessible via a dropdown. It supports customization for tone, size, variant, and can be disabled as needed.

## Basic Usage

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown
    dropdown-id="example1"
    v-model="selected"
    :menu-list="menuList"
    width="160px"
    popper-width="160px"
    @click="mainButtonClicked"
  >
    Button Dropdown
  </spr-button-dropdown>
</div>

```vue
<template>
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-button-dropdown
      dropdown-id="example1"
      v-model="selected"
      :menu-list="menuList"
      width="160px"
      popper-width="160px"
      @click="mainButtonClicked"
    >
      Button Dropdown
    </spr-button-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const selected = ref([]);
const menuList = ref([
  { text: 'Add', value: 'add', icon:  'ph:check', iconColor: 'spr-text-color-supporting', onClickFn: () => {alert("Add was clicked.")}},
  { text: 'Delete', value: 'delete', icon: 'ph:trash', textColor: 'spr-text-color-danger-base', onClickFn: () => {alert("Delete was clicked.")} },
]);

const mainButtonClicked = () => { alert("Main button was clicked.") }
</script>
```

## Tone

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown
    dropdown-id="example2"
    v-model="selectedNeutral"
    :menu-list="menuList"
    tone="neutral"
  >
    Neutral
  </spr-button-dropdown>
  <spr-button-dropdown
    dropdown-id="example3"
    v-model="selectedSuccess"
    :menu-list="menuList"
    tone="success"
  >
    Success
  </spr-button-dropdown>
</div>

```vue
<spr-button-dropdown
  dropdown-id="example2"
  v-model="selectedNeutral"
  :menu-list="menuList"
  tone="neutral"
>
  Neutral
</spr-button-dropdown>
<spr-button-dropdown
  dropdown-id="example3"
  v-model="selectedSuccess"
  :menu-list="menuList"
  tone="success"
>
  Success
</spr-button-dropdown>
```

## Sizes

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown
    v-model="selectedSmall"
    dropdown-id="example4"
    :menu-list="menuList"
    size="small"
  >
    Small
  </spr-button-dropdown>
  <spr-button-dropdown
    v-model="selectedMedium"
    dropdown-id="example5"
    :menu-list="menuList"
  >
    Medium
  </spr-button-dropdown>
  <spr-button-dropdown
    v-model="selectedLarge"
    dropdown-id="example6"
    :menu-list="menuList"
    size="large"
  >
    Large
  </spr-button-dropdown>
</div>

```vue
<spr-button-dropdown
  v-model="selectedSmall"
  dropdown-id="example4"
  :menu-list="menuList"
  size="small"
>
  Small
</spr-button-dropdown>
<spr-button-dropdown
  v-model="selectedMedium"
  dropdown-id="example5"
  :menu-list="menuList"
>
  Medium
</spr-button-dropdown>
<spr-button-dropdown
  v-model="selectedLarge"
  dropdown-id="example6"
  :menu-list="menuList"
  size="large"
>
  Large
</spr-button-dropdown>
```

## Variant

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown
    v-model="selectedPrimary"
    dropdown-id="example7"
    :menu-list="menuList"
    variant="primary"
  >
    Primary
  </spr-button-dropdown>
  <spr-button-dropdown
    v-model="selectedSecondary"
    dropdown-id="example8"
    :menu-list="menuList"
    variant="secondary"
  >
    Secondary
  </spr-button-dropdown>
</div>

```vue
<spr-button-dropdown
  v-model="selectedPrimary"
  dropdown-id="example7"
  :menu-list="menuList"
  variant="primary"
>
  Primary
</spr-button-dropdown>
<spr-button-dropdown
  v-model="selectedSecondary"
  dropdown-id="example8"
  :menu-list="menuList"
  variant="secondary"
>
  Secondary
</spr-button-dropdown>
```

## Disabled

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown
    v-model="selectedDisabled"
    dropdown-id="example9"
    :menu-list="menuList"
    disabled
  >
    Disabled
  </spr-button-dropdown>
  <spr-button-dropdown
    v-model="selectedDisabled"
    dropdown-id="example9"
    :menu-list="menuList"
    variant="secondary"
    disabled
  >
    Disabled
  </spr-button-dropdown>
</div>

```vue
<spr-button-dropdown
  v-model="selectedDisabled"
  dropdown-id="example9"
  :menu-list="menuList"
  disabled
>
  Disabled
</spr-button-dropdown>
<spr-button-dropdown
  v-model="selectedDisabled"
  dropdown-id="example9"
  :menu-list="menuList"
  variant="secondary"
  disabled
>
  Disabled
</spr-button-dropdown>
```

## API Reference
### Props
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>modelValue</td>
      <td>Selected menu value(s)</td>
      <td>MenuListType[] | string[] (check list component)</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>menuList</td>
      <td>Dropdown menu options</td>
      <td>MenuListType[] | string[] (check list component)</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>tone</td>
      <td>Button tone</td>
      <td>'neutral' | 'success'</td>
      <td>neutral</td>
    </tr>
    <tr>
      <td>variant</td>
      <td>Button variant</td>
      <td>'primary' | 'secondary'</td>
      <td>primary</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Button size</td>
      <td>'small' | 'medium' | 'large'</td>
      <td>medium</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Disable the button dropdown</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Width of the button dropdown</td>
      <td>string</td>
      <td>fit-content</td>
    </tr>
    <tr>
      <td>popperWidth</td>
      <td>Width of the dropdown menu popper</td>
      <td>string</td>
      <td>fit-content</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>Dropdown menu placement</td>
      <td>
        'auto',
        'auto-start',
        'auto-end',
        'top',
        'top-start',
        'top-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
      </td>
      <td>bottom</td>
    </tr>
  </tbody>
</table>

### Emits
<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Payload</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>click</td>
      <td>Click event</td>
      <td>Click emit for the main button</td>
    </tr>
    <tr>
      <td>update:modelValue</td>
      <td>string</td>
      <td>Event for dropdown menu value update</td>
    </tr>
  </tbody>
</table>

### Slot
The default slot of `button-dropdown` is similar to the `button` component. Icons can be included in the main button.

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="payroll" theme="dark" width="50px" />
</div>

<script setup lang="ts">
import SprButtonDropdown from "@/components/button/button-dropdown/button-dropdown.vue";
import { ref } from "vue";

const menuList = ref([
  { text: 'Add', value: 'add', icon:  'ph:check', iconColor: 'spr-text-color-supporting', onClickFn: () => {alert("Add was clicked.")}},
  { text: 'Delete', value: 'delete', icon: 'ph:trash', textColor: 'spr-text-color-danger-base', onClickFn: () => {alert("Delete was clicked.")} },
]);

const mainButtonClicked = () => { alert("Main button was clicked.") }
</script>
