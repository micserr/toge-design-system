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

## Plaacement

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

## Distance

You can set the distance of the tooltip from the target element by using the `distance` prop. The default distance is `8px`. You can set it to any value you want.

<div class="spr-flex spr-gap-3">
  <spr-tooltip text="My tooltip" :distance="16">
    <spr-button tone="success">Distance 16px</spr-button>
  </spr-tooltip>
  <spr-tooltip text="My tooltip" :distance="32">
    <spr-button tone="success">Distance 32px</spr-button>
  </spr-tooltip>
  <spr-tooltip text="My tooltip" :distance="64">
    <spr-button tone="success">Distance 64px</spr-button>
  </spr-tooltip>
</div>

```vue
<spr-tooltip text="My tooltip" :distance="16">
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

<div>
  <spr-tooltip 
    :text="tootltipText" 
    :fit-content="false" 
    show-triggers="hover" 
    hide-triggers="hover"
  >
    <spr-input v-model="inputValueDynamic" placeholder="Enter your text" class="spr-w-full" />
  </spr-tooltip>
</div>

```vue
<template>
  <spr-tooltip :text="tootltipText" :fit-content="false" show-triggers="hover" hide-triggers="hover">
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

## Triggers

You can customize the triggers for showing and hiding the tooltip by using the `show-triggers` and `hide-triggers` props. By default, the tooltip will show on hover and hide on mouse leave. You can set these props to any valid trigger events.

Possible trigger events include `focus`, `click`, `hover`, and `touch`. You can also combine triggers to show the tooltip on one event and hide it on another.

<div class="spr-flex spr-gap-6">
  <spr-tooltip 
    text="This tooltip shows on focus" 
    show-triggers="focus" 
    hide-triggers="focus"
  >
    <spr-button tone="success">Focus Trigger</spr-button>
  </spr-tooltip>
  <spr-tooltip 
    text="This tooltip shows on click" 
    show-triggers="click" 
    hide-triggers="click"
  >
    <spr-button tone="success">Click Trigger</spr-button>
  </spr-tooltip>
  <spr-tooltip 
    text="This tooltip shows on hover" 
    show-triggers="hover" 
    hide-triggers="hover"
  >
    <spr-button tone="success">Hover Trigger</spr-button>
  </spr-tooltip>
</div>

You can also combine triggers, for example, to show the tooltip on click and hide it on hover:

<div class="spr-flex spr-gap-3">
  <spr-tooltip 
    text="This tooltip shows on click" 
    :show-triggers="['click', 'hover']" 
    :hide-triggers="['click', 'hover']"
  >
    <spr-button tone="success">Click + Hover Trigger</spr-button>
  </spr-tooltip>
</div>

```vue
<template>
  <div class="spr-flex spr-gap-3">
    <spr-tooltip text="This tooltip shows on focus" show-triggers="focus" hide-triggers="blur">
      <spr-button tone="success">Focus Trigger</spr-button>
    </spr-tooltip>
    <spr-tooltip text="This tooltip shows on click" show-triggers="click" hide-triggers="click">
      <spr-button tone="success">Click Trigger</spr-button>
    </spr-tooltip>
    <spr-tooltip text="This tooltip shows on hover" show-triggers="hover" hide-triggers="hover">
      <spr-button tone="success">Hover Trigger</spr-button>
    </spr-tooltip>
  </div>

  <div class="spr-flex spr-gap-3">
    <spr-tooltip
      text="This tooltip shows on click"
      :show-triggers="['click', 'hover']"
      :hide-triggers="['click', 'hover']"
    >
      <spr-button tone="success">Click + Hover Trigger</spr-button>
    </spr-tooltip>
  </div>
</template>
```

## API Reference

### Props

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
      <td>The content to display inside the tooltip. This can be a simple text string or more complex content.</td>
      <td>string</td>
      <td>Any text string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>Determines where the tooltip is positioned relative to the target element. The placement can be at the top, bottom, left, or right, with additional modifiers for start and end alignment.</td>
      <td>string</td>
      <td>'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'</td>
      <td>'top'</td>
    </tr>
    <tr>
      <td>distance</td>
      <td>The distance in pixels between the tooltip and the target element. Increasing this value creates more space between the tooltip and its target.</td>
      <td>number</td>
      <td>Any positive number</td>
      <td>6</td>
    </tr>
    <tr>
      <td>hasMaxWidth</td>
      <td>Controls whether the tooltip has a maximum width constraint. When enabled, the tooltip has a maximum width of 280px, which helps with long content. When disabled, the tooltip width is determined by its content.</td>
      <td>boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>fitContent</td>
      <td>Determines if the tooltip width should fit its content or take the full width of its parent container. When true, the tooltip width adjusts to fit its content. When false, the tooltip takes the full width available.</td>
      <td>boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>showTriggers</td>
      <td>Specifies the events that will trigger the tooltip to show. Can be a single event string or an array of event strings. Common triggers include hover (mouseenter), focus, click, and touch.</td>
      <td>string | string[]</td>
      <td>'hover', 'focus', 'click', 'touch', or arrays like ['hover', 'focus']</td>
      <td>'hover'</td>
    </tr>
    <tr>
      <td>hideTriggers</td>
      <td>Specifies the events that will trigger the tooltip to hide. Can be a single event string or an array of event strings. Often set to match the showTriggers for consistent behavior.</td>
      <td>string | string[]</td>
      <td>'hover', 'focus', 'click', 'touch', or arrays like ['hover', 'focus']</td>
      <td>'hover'</td>
    </tr>
    <tr>
      <td>autoHide</td>
      <td>When enabled, the tooltip will automatically hide when the cursor leaves the tooltip area. This is useful for tooltips that require interaction but should hide when no longer needed.</td>
      <td>boolean</td>
      <td>true, false</td>
      <td>false</td>
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
      <td>The content that will trigger the tooltip. This can be any component or HTML element that should display the tooltip when interacted with.</td>
    </tr>
    <tr>
      <td>popper-content</td>
      <td>Custom content to display inside the tooltip. This slot allows for more complex tooltip content beyond simple text, including HTML elements and components. If both the <code>text</code> prop and this slot are provided, the <code>text</code> prop will be displayed first, followed by this slot's content.</td>
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
