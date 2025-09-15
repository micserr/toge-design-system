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
  <spr-button tone="success" @click="modalModel.modal11 = true">
    Extra Extra Large (xxl)
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
  <spr-modal v-model="modalModel.modal11" size="xxl">
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0 spr-text-center">This is a sample extra extra large modal</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal11 = false">Close</spr-button>
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
    <spr-button tone="success" @click="modalModel.extraExtraLarge = true">Extra Extra Large (xxl)</spr-button>
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

  <spr-modal v-model="modalModel.extraExtraLarge" size="xxl">
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0 spr-text-center">This is a sample extra extra large modal</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.extraExtraLarge = false">Close</spr-button>
      </div>
    </template>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref({
  small: false,
  medium: false,
  large: false,
  extraLarge: false,
  extraExtraLarge: false,
});
</script>
```

## Prevent Backdrop Close

To prevent the modal from closing when the user clicks on the backdrop (the area outside the modal), you can disable this behavior by setting the appropriate prop, such as `staticBackdrop` to `true`. This ensures that the modal remains open even if the user interacts with the backdrop, requiring explicit user actions (like clicking a close button) to close the modal.

<div>
  <spr-button tone="success" @click="modalModel.modal12 = true">
    Open Modal
  </spr-button>

  <spr-modal v-model="modalModel.modal12" staticBackdrop>
    <template #header>Modal Header Slot</template>
    <p class="!spr-m-0 spr-text-center">This is a modal</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal12 = false">Close</spr-button>
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
      <td>Controls the visibility of the modal. When <code>true</code>, the modal is displayed; when <code>false</code>, it is hidden. Used with v-model for two-way binding.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>title</td>
      <td>Text to display in the modal header. This provides a straightforward way to add a title without using a slot. If both this prop and the header slot are used, the slot content takes precedence.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>size</td>
      <td>
        Determines the width of the modal dialog:
        <ul>
          <li><code>sm</code>: Small size (360px - 480px) - Good for alerts or brief messages</li>
          <li><code>md</code>: Medium size (480px - 720px) - Default size, suitable for forms and moderate content</li>
          <li><code>lg</code>: Large size (720px - 960px) - For detailed forms or complex information</li>
          <li><code>xl</code>: Extra large size (900px - 1200px) - For extensive content or media-heavy information</li>
          <li><code>xxl</code>: Extra extra large size (1200px - 1400px) - For very large content or complex layouts</li>
        </ul>
      </td>
      <td>'sm' | 'md' | 'lg' | 'xl' | 'xxl'</td>
      <td>'md'</td>
    </tr>
    <tr>
      <td>closeButtonX</td>
      <td>When <code>true</code>, displays an X button in the top-right corner of the modal header that allows users to close the modal. Set to <code>false</code> to remove this button.</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>contentPadding</td>
      <td>Controls whether the modal content has padding. When <code>true</code>, adds standard padding to the content area; when <code>false</code>, removes padding, allowing content to extend to the edges of the modal.</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>hasFooter</td>
      <td>Controls whether the modal has a footer section. When <code>true</code>, reserves space for a footer section; when <code>false</code>, no footer area is rendered.</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>staticBackdrop</td>
      <td>When <code>true</code>, prevents the modal from closing when the user clicks on the backdrop (the area outside the modal). This is useful for modals that require explicit user actions to close. When enabled, clicking on the backdrop triggers a bounce animation to indicate the modal can't be closed this way.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>update:modelValue</td>
      <td>Emitted when the modal visibility state changes. This event is used for v-model binding to work correctly. Triggered when the modal is closed via the X button or by clicking on the backdrop (when <code>staticBackdrop</code> is <code>false</code>).</td>
      <td>(value: boolean): The new visibility state of the modal.</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>The main content area of the modal. Place your primary content here. Content will have padding by default (controlled by the <code>contentPadding</code> prop).</td>
    </tr>
    <tr>
      <td>header</td>
      <td>Custom content for the modal header. This slot takes precedence over the <code>title</code> prop if both are provided. The header always includes the X close button unless <code>closeButtonX</code> is set to <code>false</code>.</td>
    </tr>
    <tr>
      <td>footer</td>
      <td>Custom content for the modal footer. Typically contains action buttons such as "Cancel" or "Save". Only rendered when <code>hasFooter</code> is <code>true</code>.</td>
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
  modal12: false,
});
</script>
