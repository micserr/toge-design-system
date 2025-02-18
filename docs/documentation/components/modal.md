# Modal

Display important information without navigating away from the current page. It often includes a header, body, and footer, and can be closed by the user.

## Basic Usage

<spr-button tone="success" @click="isModalOpen = true">Open Modal</spr-button>
<spr-modal title="Modal title" :open="isModalOpen" @onClose="isModalOpen = false" >

  <div class="p-4">Content Here!</div>
  <template #footer>
  <div class="flex justify-end w-full">
  <spr-button tone="success" @click="isModalOpen = false">Close</spr-button>
  </div>
  </template>
</spr-modal>

```vue
<template>
  <spr-button tone="success" @click="isModalOpen = true">Open Modal</spr-button>
  <spr-modal title="Modal title" :open="isModalOpen" @onClose="isModalOpen = false">
    <div class="p-4">Content Here!</div>

    <template #footer>
      <div class="flex w-full justify-end">
        <spr-button tone="success" @click="isModalOpen = false">Close</spr-button>
      </div>
    </template>
  </spr-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const isModalOpen = ref<boolean>(false);
</script>
```

## Size

<div class="flex space-x-4">
  <spr-button tone="success" @click="isModalSizesOpen = true">Small</spr-button>
  <spr-button tone="success" @click="isModalSizes1Open = true">Medium</spr-button>
  <spr-button tone="success" @click="isModalSizes2Open = true">Large</spr-button>
  <spr-button tone="success" @click="isModalSizes3Open = true">Extra Large</spr-button>
</div>

<div>

<spr-modal title="Modal title" size="sm" :open="isModalSizesOpen" @onClose="isModalSizesOpen = false" >

  <div class="p-4">Content Here!</div>
  <template #footer>
  <div class="flex justify-end w-full">
  <spr-button tone="success" @click="isModalSizesOpen = false">Close</spr-button>
  </div>
  </template>
</spr-modal>

<spr-modal title="Modal title" size="md" :open="isModalSizes1Open" @onClose="isModalSizes1Open = false" >

  <div class="p-4">Content Here!</div>
  <template #footer>
  <div class="flex justify-end w-full">
  <spr-button tone="success" @click="isModalSizes1Open = false">Close</spr-button>
  </div>
  </template>
</spr-modal>

<spr-modal title="Modal title" size="lg" :open="isModalSizes2Open" @onClose="isModalSizes2Open = false" >

  <div class="p-4">Content Here!</div>
  <template #footer>
  <div class="flex justify-end w-full">
  <spr-button tone="success" @click="isModalSizes2Open = false">Close</spr-button>
  </div>
  </template>
</spr-modal>

<spr-modal title="Modal title" size="xl" :open="isModalSizes3Open" @onClose="isModalSizes3Open = false" >

  <div class="p-4">Content Here!</div>
  <template #footer>
  <div class="flex justify-end w-full">
  <spr-button tone="success" @click="isModalSizes3Open = false">Close</spr-button>
  </div>
  </template>
</spr-modal>
</div>

```vue
<template>
  <div class="flex space-x-4">
    <spr-button tone="success" @click="isModalSizesOpen = true">Small</spr-button>
    <spr-button tone="success" @click="isModalSizes1Open = true">Medium</spr-button>
    <spr-button tone="success" @click="isModalSizes2Open = true">Large</spr-button>
    <spr-button tone="success" @click="isModalSizes3Open = true">Extra Large</spr-button>
  </div>

  <div>
    <spr-modal title="Modal title" size="sm" :open="isModalSizesOpen" @onClose="isModalSizesOpen = false">
      <div class="p-4">Content Here!</div>
      <template #footer>
        <div class="flex w-full justify-end">
          <spr-button tone="success" @click="isModalSizesOpen = false">Close</spr-button>
        </div>
      </template>
    </spr-modal>

    <spr-modal title="Modal title" size="md" :open="isModalSizes1Open" @onClose="isModalSizes1Open = false">
      <div class="p-4">Content Here!</div>
      <template #footer>
        <div class="flex w-full justify-end">
          <spr-button tone="success" @click="isModalSizes1Open = false">Close</spr-button>
        </div>
      </template>
    </spr-modal>

    <spr-modal title="Modal title" size="lg" :open="isModalSizes2Open" @onClose="isModalSizes2Open = false">
      <div class="p-4">Content Here!</div>
      <template #footer>
        <div class="flex w-full justify-end">
          <spr-button tone="success" @click="isModalSizes2Open = false">Close</spr-button>
        </div>
      </template>
    </spr-modal>

    <spr-modal title="Modal title" size="xl" :open="isModalSizes3Open" @onClose="isModalSizes3Open = false">
      <div class="p-4">Content Here!</div>
      <template #footer>
        <div class="flex w-full justify-end">
          <spr-button tone="success" @click="isModalSizes3Open = false">Close</spr-button>
        </div>
      </template>
    </spr-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isModalOpen = ref<boolean>(false);
const isModalSizesOpen = ref<boolean>(false);
const isModalSizes1Open = ref<boolean>(false);
const isModalSizes2Open = ref<boolean>(false);
const isModalSizes3Open = ref<boolean>(false);
</script>
```

## Slot

| Name   | Description                          |
| ------ | ------------------------------------ |
| Header | Slot to customize the header content |
| Footer | Slot to customize the footer content |

## Attributes

| Name      | Description                                | Type      | Default |
| --------- | ------------------------------------------ | --------- | ------- |
| open      | Controls the visibility of the modal       | `boolean` | false   |
| title     | Title of the modal                         | `string`  | ''      |
| hasHeader | Determines if the modal has a header       | `boolean` | true    |
| hasFooter | Determines if the modal has a footer       | `boolean` | true    |
| hasClose  | Determines if the modal has a close button | `boolean` | true    |

## Event

| Name    | Description                               |
| ------- | ----------------------------------------- |
| onClose | Function to call when the modal is closed |

<script lang="ts" setup>
  import { ref } from 'vue';

  import SprModal from "@/components/modal/modal.vue"
  import SprButton from "@/components/button/button.vue"

  const isModalOpen = ref<boolean>(false);
  const isModalSizesOpen = ref<boolean>(false);
  const isModalSizes1Open = ref<boolean>(false);
  const isModalSizes2Open = ref<boolean>(false);
  const isModalSizes3Open = ref<boolean>(false);
</script>
