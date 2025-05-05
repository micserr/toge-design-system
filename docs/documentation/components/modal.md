---
outline: 'deep'
---

# Modal

A modal is a versatile UI component that allows you to display important information, alerts, or prompts to users without requiring them to leave the current page. Typically containing a header, body, and footer, it can present anything from notifications to forms. Modals can be closed by the user, providing an intuitive way to deliver essential details or gather input while maintaining the flow of interaction.

## Basic Usage

<div>
  <spr-button tone="success" @click="modalModel.modal1 = true">
    Open Modal
  </spr-button>

  <spr-modal v-model="modalModel.modal1">
    <p class="!spr-m-0 spr-text-center">This is a sample modal</p>
  </spr-modal>
</div>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

  <spr-modal v-model="modalModel">
    <p class="spr-text-center">This is a sample modal</p>
  </spr-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref<boolean>(false);
</script>
```

## Header

The header of a modal is used to display the title or heading, giving users context about the content inside. You can set the header in two ways:

<ul>
  <li>Using the title Prop: Pass a string to the title prop to quickly define the modal's header.</li>
  <li>
    Using Slots: Alternatively, you can customize the header by using a slot, 
    giving you more flexibility to insert complex or dynamic content.
  </li>
</ul>

This flexibility allows you to tailor the modal's header to meet the needs of your specific application.

<h5 class="spr-mb-3">By using props <code>title</code>:</h5>

<div>
  <spr-button tone="success" @click="modalModel.modal2 = true">
    Open Modal
  </spr-button>

  <spr-modal v-model="modalModel.modal2" title="Modal Header Props">
    <p class="!spr-m-0 spr-text-center">This is a modal</p>
  </spr-modal>
</div>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

  <spr-modal v-model="modalModel" title="Modal Header Props">
    <p class="spr-text-center">This is a sample modal</p>
  </spr-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref<boolean>(false);
</script>
```

<h5 class="spr-mb-3">By using <code>slot</code>:</h5>

<div>
  <spr-button tone="success" @click="modalModel.modal3 = true">
    Open Modal
  </spr-button>

  <spr-modal v-model="modalModel.modal3">
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0 spr-text-center">This is a modal</p>
  </spr-modal>
</div>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

  <spr-modal v-model="modalModel">
    <template #header>Modal Header Slot</template>

    <p class="spr-text-center">This is a sample modal</p>
  </spr-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref<boolean>(false);
</script>
```

<h5 class="spr-mb-3">
  You can also force remove <code>X</code> button from header by using props <code>closeButtonX</code>:
</h5>

<div>
  <spr-button tone="success" @click="modalModel.modal4 = true">
    Open Modal
  </spr-button>

  <spr-modal v-model="modalModel.modal4" :closeButtonX="false">
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0 spr-text-center">This is a modal</p>
  </spr-modal>
</div>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

  <spr-modal v-model="modalModel" :closeButtonX="false">
    <template #header>Modal Header Slot</template>

    <p class="spr-text-center">This is a sample modal</p>
  </spr-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref<boolean>(false);
</script>
```

## Footer

The footer of a modal can contain action buttons like "Cancel" or "Save," or it can simply display text. You can customize it using slots or props to provide clear actions or additional information to users.

<div>
  <spr-button tone="success" @click="modalModel.modal5 = true">
    Open Modal
  </spr-button>

  <spr-modal v-model="modalModel.modal5">
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0 spr-text-center">This is a modal</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal5 = false">Close</spr-button>
      </div>
    </template>
  </spr-modal>
</div>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

  <spr-modal v-model="modalModel">
    <template #header>Modal Header Slot</template>

    <p class="spr-text-center">This is a sample modal</p>

    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel = false">Close</spr-button>
      </div>
    </template>
  </spr-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref<boolean>(false);
</script>
```

## Set modal to active

To make the modal visible, bind the `v-model` value to the modal's visibility state. By setting the `v-model` value to `true`, you trigger the modal to become active and display on the screen. This allows for dynamic control over the modal's visibility, enabling you to open and close it programmatically based on user interactions or other conditions within your application.

## Disable Content Padding

You can control the content padding inside the modal by passing the `contentPadding` prop. Set the value to `true` to enable padding, or `false` to disable it. This allows you to adjust the layout of the modal’s content, providing a more customized and visually appealing design based on your needs.

<div>
  <spr-button tone="success" @click="modalModel.modal6 = true">
    Open Modal
  </spr-button>

  <spr-modal v-model="modalModel.modal6" :contentPadding="false">
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula metus ut lectus tempor, ac volutpat turpis malesuada. Suspendisse potenti. Sed efficitur mi non dui tincidunt, non venenatis lorem lacinia. Ut scelerisque, mi nec egestas interdum, lorem ante volutpat enim, at volutpat purus purus ac magna. Nulla facilisi. Integer fermentum neque sit amet sollicitudin suscipit. Integer scelerisque sapien a risus cursus, nec euismod lacus faucibus. Etiam sed eros in velit egestas lobortis.
    </p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal6 = false">Close</spr-button>
      </div>
    </template>
  </spr-modal>
</div>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

  <spr-modal v-model="modalModel" :contentPadding="false">
    <template #header>Modal Header Slot</template>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula metus ut lectus tempor, ac volutpat
      turpis malesuada. Suspendisse potenti. Sed efficitur mi non dui tincidunt, non venenatis lorem lacinia. Ut
      scelerisque, mi nec egestas interdum, lorem ante volutpat enim, at volutpat purus purus ac magna. Nulla facilisi.
      Integer fermentum neque sit amet sollicitudin suscipit. Integer scelerisque sapien a risus cursus, nec euismod
      lacus faucibus. Etiam sed eros in velit egestas lobortis.
    </p>

    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel = false">Close</spr-button>
      </div>
    </template>
  </spr-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref<boolean>(false);
</script>
```

## Sizes

Modals come in different sizes to suit various use cases. You can adjust the modal's size by using the size prop, which allows you to choose from the following options:

<ul>
  <li>
    <b>Small (sm) (width: 360px - 480px)</b>: Best suited for simple content that doesn't require a lot of space, such as quick alerts or brief messages.
  </li>
  <li>
    <b>Medium (md) (width: 480px - 720px)</b>: The default size, ideal for moderate content such as forms, additional text, or small forms.
  </li>
  <li>
    <b>Large (lg) (width: 720px - 960px)</b>: Perfect for displaying more detailed content, such as forms with multiple fields, larger images, or more complex information.
  </li>
  <li>
    <b>Extra Large (xl) (width: 900px - 1200px)</b>: Use for larger content like detailed forms, tables, or media-heavy information that requires a significant amount of space.
  </li>
</ul>

<div class="spr-flex spr-space-x-4">
  <spr-button tone="success" @click="modalModel.modal7 = true">
    Small (sm)
  </spr-button>
  <spr-button tone="success" @click="modalModel.modal8 = true">
    Medium (md)
  </spr-button>
  <spr-button tone="success" @click="modalModel.modal9 = true">
    Large (lg)
  </spr-button>
  <spr-button tone="success" @click="modalModel.modal10 = true">
    Extra Large (xl)
  </spr-button>
</div>

<div>
  <spr-modal v-model="modalModel.modal7" size="sm">
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0 spr-text-center">This is a sample small modal</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal7 = false">Close</spr-button>
      </div>
    </template>
  </spr-modal>
  <spr-modal v-model="modalModel.modal8" size="md">
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0 spr-text-center">This is a sample medium modal</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal8 = false">Close</spr-button>
      </div>
    </template>
  </spr-modal>
  <spr-modal v-model="modalModel.modal9" size="lg">
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0 spr-text-center">This is a sample large modal</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal9 = false">Close</spr-button>
      </div>
    </template>
  </spr-modal>
  <spr-modal v-model="modalModel.modal10" size="xl">
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0 spr-text-center">This is a sample extra large modal</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal10 = false">Close</spr-button>
      </div>
    </template>
  </spr-modal>
</div>

```vue
<template>
  <div class="spr-flex spr-space-x-4">
    <spr-button tone="success" @click="modalModel.small = true">Small (sm)</spr-button>
    <spr-button tone="success" @click="modalModel.medium = true">Medium (md)</spr-button>
    <spr-button tone="success" @click="modalModel.large = true">Large (lg)</spr-button>
    <spr-button tone="success" @click="modalModel.extraLarge = true">Extra Large (xl)</spr-button>
  </div>

  <spr-modal v-model="modalModel.small" size="sm">
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0 spr-text-center">This is a sample small modal</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.small = false">Close</spr-button>
      </div>
    </template>
  </spr-modal>

  <spr-modal v-model="modalModel.medium" size="md">
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0 spr-text-center">This is a sample medium modal</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.medium = false">Close</spr-button>
      </div>
    </template>
  </spr-modal>

  <spr-modal v-model="modalModel.large" size="lg">
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0 spr-text-center">This is a sample large modal</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.large = false">Close</spr-button>
      </div>
    </template>
  </spr-modal>

  <spr-modal v-model="modalModel.extraLarge" size="xl">
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0 spr-text-center">This is a sample extra large modal</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.extraLarge = false">Close</spr-button>
      </div>
    </template>
  </spr-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref({
  small: false,
  medium: false,
  large: false,
  extraLarge: false,
});
</script>
```

## Prevent Backdrop Close

To prevent the modal from closing when the user clicks on the backdrop (the area outside the modal), you can disable this behavior by setting the appropriate prop, such as `staticBackdrop` to `true`. This ensures that the modal remains open even if the user interacts with the backdrop, requiring explicit user actions (like clicking a close button) to close the modal.

<div>
  <spr-button tone="success" @click="modalModel.modal11 = true">
    Open Modal
  </spr-button>

  <spr-modal v-model="modalModel.modal11" staticBackdrop>
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0 spr-text-center">This is a modal</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal11 = false">Close</spr-button>
      </div>
    </template>
  </spr-modal>
</div>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

  <spr-modal v-model="modalModel" staticBackdrop>
    <template #header>Modal Header Slot</template>

    <p class="spr-text-center">This is a sample modal</p>

    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel = false">Close</spr-button>
      </div>
    </template>
  </spr-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref<boolean>(false);
</script>
```

## API Reference

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
      <td>v-model</td>
      <td>Binds the modal visibility state. When true, the modal is shown; when false, it is hidden.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>title</td>
      <td>The title for the modal header. You can pass a string directly or use the header slot.</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Defines the size of the modal. Possible values: "sm", "md", "lg", "xl".</td>
      <td>"sm" | "md" | "lg" | "xl"</td>
      <td>md</td>
    </tr>
    <tr>
      <td>closeButtonX</td>
      <td>If set to false, disables the close button (X) in the header.</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>contentPadding</td>
      <td>Controls the padding inside the modal content. Set to true to enable padding, false to disable.</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>staticBackdrop</td>
      <td>If set to true, the modal will not close when clicking outside the modal (on the backdrop).</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';

import SprModal from "@/components/modal/modal.vue"
import SprButton from "@/components/button/button.vue"
import SprLogo from "@/components/logo/logo.vue";

const modalModel = ref({
  modal1: false,
  modal2: false,
  modal3: false,
  modal4: false,
  modal5: false,
  modal6: false,
  modal7: false,
  modal8: false,
  modal9: false,
  modal10: false,
  modal11: false,
});
</script>
