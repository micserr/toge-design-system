---
outline: 'deep'
---

# Tooltip

The tooltip component is a simple component that displays a tooltip when hovered over.

## Basic Usage

<div class="spr-grid spr-gap-3">
  <spr-tooltip text="This is my tooltip text">
    <spr-button tone="success">Hover me to view tooltip</spr-button>
  </spr-tooltip>
  <spr-tooltip text="This is my tooltip text">
    <spr-chips class="spr-w-full" label="Chips" />
  </spr-tooltip>
  <spr-tooltip text="This is my tooltip text">
    <spr-lozenge class="spr-w-full" label="Lozange" />
  </spr-tooltip>
  <spr-tooltip text="This is my tooltip text">
    <spr-input v-model="inputValueBasic" placeholder="Enter your text" class="spr-w-full" />
  </spr-tooltip>
</div>

```vue
<spr-tooltip text="This is my tooltip text">
    <!-- Your component here -->
</spr-tooltip>
```

## Custom Text

By adding the `text` prop to the tooltip component, you can customize the text that is displayed in the tooltip.

<div class="spr-grid spr-gap-3">
  <spr-tooltip text="This is my custom tooltip text">
    <spr-button tone="success">Hover me to view tooltip</spr-button>
  </spr-tooltip>
</div>

```vue
<spr-tooltip text="This is my custom tooltip text">
    <!-- Your component here -->
</spr-tooltip>
```

## Custom Text Using HTML

You can also use HTML to further customize the text that you wanted to displayed in the tooltip by using a template named `#popper-content`.

::: info Important to note:
If both `text` props and template `#popper-content` are used, the `text` prop will be always first displayed before the `#popper-content`.
:::

<spr-tooltip text="This is my custom tooltip text">
  <template #popper-content>
    <h5>This is a sample title</h5>
  </template>
  <spr-button tone="success">Hover me to view tooltip</spr-button>
</spr-tooltip>

```vue
<spr-tooltip text="This is my custom tooltip text">
  <template #popper-content>
    <h5>This is a sample title</h5>
  </template>

  <!-- Your component here -->
</spr-tooltip>
```

## Position

<div class="spr-flex spr-flex-col spr-gap-3">
  <div class="spr-flex spr-gap-3">
    <spr-tooltip class="!spr-w-full" text="My tooltip" placement="top">
      <spr-button class="spr-w-full" tone="success">Top</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="My tooltip" placement="top-start">
      <spr-button class="spr-w-full" tone="success">Top Start</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="My tooltip" placement="top-end">
      <spr-button class="spr-w-full" tone="success">Top End</spr-button>
    </spr-tooltip>
  </div>
  <div class="spr-flex spr-gap-3">
    <spr-tooltip class="!spr-w-full" text="My tooltip" placement="bottom">
      <spr-button class="spr-w-full" tone="success">Bottom</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="My tooltip" placement="bottom-start">
      <spr-button class="spr-w-full" tone="success">Bottom Start</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="My tooltip" placement="bottom-end">
      <spr-button class="spr-w-full" tone="success">Bottom End</spr-button>
    </spr-tooltip>
  </div>
  <div class="spr-flex spr-gap-3">
    <spr-tooltip class="!spr-w-full" text="My tooltip" placement="left">
      <spr-button class="spr-w-full" tone="success">Left</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="My tooltip" placement="left-start">
      <spr-button class="spr-w-full" tone="success">Left Start</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="My tooltip" placement="left-end">
      <spr-button class="spr-w-full" tone="success">Left End</spr-button>
    </spr-tooltip>
  </div>
  <div class="spr-flex spr-gap-3">
    <spr-tooltip class="!spr-w-full" text="My tooltip" placement="right">
      <spr-button class="spr-w-full" tone="success">Right</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="My tooltip" placement="right-start">
      <spr-button class="spr-w-full" tone="success">Right Start</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="My tooltip" placement="right-end">
      <spr-button class="spr-w-full" tone="success">Right End</spr-button>
    </spr-tooltip>
  </div>
</div>

```vue
<spr-tooltip text="My tooltip" placement="top-start">
    <!-- Your component here -->
</spr-tooltip>
```

## Width

You can set the width of the tooltip by using the `fit-content` prop. By default, the tooltip will only take the width of its content. When the `fit-content` prop is set to false, the tooltip will take the full width of its parent container.

### Using Max-width

You can enable or disable the maximum width of the tooltip by using the `has-max-width prop`. By default, the max-width is enabled. When the `has-max-width` prop is set to true, the tooltip will have a maximum width of `280px`.

<div class="spr-grid spr-gap-3">
  <spr-tooltip placement="top">
    <template #popper-content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, 
        ante sit amet condimentum varius, metus enim luctus magna, ut vehicula ipsum quam vel odio.
      </p>
    </template>
    <spr-button tone="success">Has Max Width</spr-button>
  </spr-tooltip>
  <spr-tooltip placement="top" :has-max-width="false">
    <template #popper-content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, 
        ante sit amet condimentum varius, metus enim luctus magna, ut vehicula ipsum quam vel odio.
      </p>
    </template>
    <spr-button tone="success">Has No Max Width</spr-button>
  </spr-tooltip>
</div>

```vue
<spr-tooltip>
  <template #popper-content>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, 
      ante sit amet condimentum varius, metus enim luctus magna, ut vehicula ipsum quam vel odio.
    </p>
  </template>

  <!-- Your component here -->
</spr-tooltip>

<spr-tooltip>
  <template #popper-content :has-max-width="false">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, 
      ante sit amet condimentum varius, metus enim luctus magna, ut vehicula ipsum quam vel odio.
    </p>
  </template>

  <!-- Your component here -->
</spr-tooltip>
```

## Dynamic Changing Tooltip Text

You can dynamically change the tooltip text by using the `text` prop. The tooltip will automatically update when the `text` prop changes.

<spr-tooltip :text="tootltipText" :fit-content="false">
  <spr-input v-model="inputValueDynamic" placeholder="Enter your text" class="spr-w-full" />
</spr-tooltip>

```vue
<template>
  <spr-tooltip :text="tootltipText" :fit-content="false">
    <spr-input v-model="inputValueDynamic" placeholder="Enter your text" class="spr-w-full" />
  </spr-tooltip>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const inputValueDynamic = ref('');
const tootltipText = ref('This is my tooltip text');

watch(inputValueDynamic, (newValue) => {
  tootltipText.value = newValue ? newValue : '-';
});
</script>
```

## API Reference

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Available Values</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>text</td>
      <td>Tooltip Label</td>
      <td><code>String</code></td>
      <td>-</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>placement</td>
      <td>Tooltip Placement</td>
      <td><code>String</code></td>
      <td>
        <code>'top'</code>, <code>'top-start'</code>, <code>'top-end'</code>, <code>'bottom'</code>, <code>'bottom-start'</code>, <code>'bottom-end'</code>, <code>'left'</code>, <code>'left-start'</code>, <code>'left-end'</code>, <code>'right'</code>, <code>'right-start'</code>, <code>'right-end'</code>
      </td>
      <td><code>'top'</code></td>
    </tr>
    <tr>
      <td>fit-content</td>
      <td>
        Enable or disable the fit content of the tooltip. When enabled, the tooltip will only take the width of its content.
      </td>
      <td><code>Boolean</code></td>
      <td><code>true</code>, <code>false</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>has-max-width</td>
      <td>
        Enable or disable the maximum width of the tooltip. When enabled, the tooltip has a maximum width of 280px.
      </td>
      <td><code>Boolean</code></td>
      <td><code>true</code>, <code>false</code></td>
      <td><code>true</code></td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref, watch } from "vue";

import SprTooltip from "@/components/tooltip/tooltip.vue";
import SprButton from "@/components/button/button.vue";
import SprChips from "@/components/chips/chips.vue";
import SprLozenge from "@/components/lozenge/lozenge.vue"
import SprInput from "@/components/input/input.vue";
import SprLogo from "@/components/logo/logo.vue";

const inputValueBasic = ref("");
const inputValueDynamic = ref("");

const tootltipText = ref("This is my tooltip text");

watch(inputValueDynamic, (newValue) => {
  tootltipText.value = newValue ? newValue : '-';
});
</script>
