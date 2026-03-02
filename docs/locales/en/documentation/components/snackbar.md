---
title: Snackbar
descripttion: A toast to display message and perform action.
outline: deep
---

# Snackbar

A toast to display message and perform action.

<spr-snackbar ref="snackbar" />

## Basic Usage

Snackbar uses Vue's `<Teleport>` component to attach the snackbar component to the HTML `body`. It also utilizes Vue's `defineExpose` to expose five functions for displaying different snackbars..

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button @click="showSnackbar1">Show Snackbar</spr-button>
</div>

```vue
<template>
  <spr-snackbar ref="snackbar" />

  <spr-button @click="showSnackbar1">Show Snackbar</spr-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const snackbar = ref(null);

const showSnackbar1 = () => {
  snackbar.value.showSnackbar({
    text: 'This is a sample message.',
  });
};
</script>
```

## Tone

The snackbar can have four tones: `success`, `information`, `danger`, `caution`.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button @click="showInformation">Show Information</spr-button>
  <spr-button @click="showSuccess" tone="success">Show Success</spr-button>
  <spr-button @click="showDanger" tone="danger">Show Danger</spr-button>
  <spr-button @click="showCaution" tone="danger" variant="secondary">Show Caution</spr-button>
</div>

```vue
<template>
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-snackbar ref="snackbar" />
    <spr-button @click="showInformation">Show Information</spr-button>
    <spr-button @click="showSuccess" tone="success">Show Success</spr-button>
    <spr-button @click="showDanger" tone="danger">Show Danger</spr-button>
    <spr-button @click="showCaution" tone="danger" variant="secondary">Show Caution</spr-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const snackbar = ref(null);

const showSuccess = () => {
  snackbar.value.showSuccess({
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    showIcon: true,
  });
};

const showInformation = () => {
  snackbar.value.showInformation({
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    showIcon: true,
  });
};

const showDanger = () => {
  snackbar.value.showDanger({
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    showIcon: true,
  });
};

const showCaution = () => {
  snackbar.value.showCaution({
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    showIcon: true,
  });
};
</script>
```

::: tip
Alternatively, you can use the default `showSnackbar()` and define the `tone` property as `success`, `information`, `danger`, `caution`.
:::

## Action

The action property is a clickable label on the snackbar where we can define a function. When action is not define, the default is it deletes the snackbar.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button @click="showWithCloseButton">Show snackbar with close action</spr-button>
  <spr-button @click="showWithFunction">Show snackbar with function</spr-button>
  <spr-button @click="showWithActionIconOnly">Show snackbar with action icon only</spr-button>
</div>

```vue
<template>
  <spr-snackbar ref="snackbar" />

  <spr-button @click="showWithCloseButton">Show snackbar with close action</spr-button>
  <spr-button @click="showWithFunction">Show snackbar with function</spr-button>
  <spr-button @click="showWithActionIconOnly">Show snackbar with action icon</spr-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const snackbar = ref(null);

const showWithCloseButton = () => {
  snackbar.value.showInformation({
    text: 'This snackbar closes when you click the close action',
    showIcon: true,
    actionText: 'close',
    showAction: true,
  });
};

const showWithFunction = () => {
  snackbar.value.showCaution({
    text: 'This snackbar calls a function',
    showIcon: true,
    actionText: 'action',
    showAction: true,
    action: () => alert('Action was clicked.'),
  });
};

const showWithActionIconOnly = () => {
  snackbar.value.showSnackbar({
    text: 'This snackbar calls a function',
    tone: 'danger',
    showIcon: true,
    actionText: '',
    showAction: true,
    actionIconProps: {
      icon: 'ph:trash-fill',
      tone: 'danger',
    },
    action: () => alert('Snackbar With Action Icon.'),
  });
};
</script>
```

## Snackbar Actions Slot

This slot allows you to customize the action section of the snackbar. You can use any component or HTML element as the action.

::: warning
`showAction` property must be set to `true` in order to render the slot.
:::

  <spr-snackbar ref="slottedActionSnackbar">
    <template #snackbarActions>
      <div class="spr-flex spr-cursor-pointer spr-items-center">
        <spr-button class="spr-mr-2" @click="handleSlottedAction">
          Slotted Action
        </spr-button>
        Action Text
      </div>
    </template>
  </spr-snackbar>
<spr-button @click="showSlottedActionSnackbar">Show snackbar with slotted action</spr-button>

```vue
<template>
  <spr-snackbar ref="slottedActionSnackbar">
    <template #snackbarActions>
      <div class="spr-flex spr-cursor-pointer spr-items-center">
        <spr-button class="spr-mr-2" @click="handleSlottedAction"> Slotted Action </spr-button>
        Action Text
      </div>
    </template>
  </spr-snackbar>
  <spr-button @click="showSlottedSnackbarAction">Show snackbar with function</spr-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const slottedActionSnackbar = ref(null);

const handleSlottedAction = () => {
  // Handle the slotted action click
  alert('Slotted action clicked');
};

const showSlottedSnackbarAction = () => {
  slottedActionSnackbar.value.showSnackbar({
    text: 'This snackbar has a slotted action',
    tone: 'success',
    showIcon: true,
    showAction: true,
    actionText: '',
  });
};
</script>
```

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>text</code>
      </td>
      <td>Text message to be displayed in the snackbar. This is the main content that communicates information to the user.</td>
      <td>string</td>
      <td><code>Required</code></td>
    </tr>
    <tr>
      <td>
        <code>tone</code>
      </td>
      <td>
        Determines the color scheme and icon of the snackbar to convey different types of messages:
        <ul>
          <li><code>success</code>: Green color scheme with check circle icon</li>
          <li><code>information</code>: Blue color scheme with info icon</li>
          <li><code>danger</code>: Red color scheme with warning circle icon</li>
          <li><code>caution</code>: Orange color scheme with warning icon</li>
        </ul>
      </td>
      <td>'success' | 'information' | 'danger' | 'caution'</td>
      <td><code>'information'</code></td>
    </tr>
    <tr>
      <td>
        <code>showIcon</code>
      </td>
      <td>Controls the visibility of the tone-specific icon in the snackbar.</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>actionText</code>
      </td>
      <td>Label text for the action button. This appears as a clickable text that can trigger the action function.</td>
      <td>string</td>
      <td><code>'action'</code></td>
    </tr>
    <tr>
      <td>
        <code>showAction</code>
      </td>
      <td>Controls the visibility of the action button/text in the snackbar. When set to true, the action text/button will be shown.</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>action</code>
      </td>
      <td>Function to be executed when the action text/button is clicked. If not provided, the default action is to close the snackbar.</td>
      <td>Function</td>
      <td><code>() => {}</code></td>
    </tr>
    <tr>
      <td>
        <code>duration</code>
      </td>
      <td>Duration in milliseconds for which the snackbar will be displayed before automatically disappearing. Set via the snackbar store.</td>
      <td>number</td>
      <td><code>4000</code></td>
    </tr>
    <tr>
      <td>
        <code>actionIconProps</code>
      </td>
      <td>
        Configuration object for the action icon button. Contains:
        <ul>
          <li><code>icon</code>: Iconify icon name to display on the button</li>
          <li><code>tone</code>: Color scheme for the icon button</li>
        </ul>
      </td>
      <td>{ icon: string; tone: 'neutral' | 'success' | 'danger' }</td>
      <td><code>undefined</code></td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">Name</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>click</code>
      </td>
      <td>Emitted when the snackbar is clicked. This event is from the Snack component.</td>
      <td><code>(evt: MouseEvent)</code> - The mouse event object</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>default</code> / <code>snackbarActions</code>
      </td>
      <td>Slot for customizing the action section of the snackbar. Note that <code>showAction</code> must be set to <code>true</code> for this slot to be rendered.</td>
    </tr>
    <tr>
      <td>
        <code>icon</code>
      </td>
      <td>Slot for customizing the icon shown in the snackbar. Available in the Snack component.</td>
    </tr>
    <tr>
      <td>
        <code>label</code>
      </td>
      <td>Slot for customizing the text label content. Available in the Snack component.</td>
    </tr>
  </tbody>
</table>

### Exposed Methods

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">Method</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>showSnackbar</code>
      </td>
      <td>Displays a snackbar with the provided configuration. Use this method when you want to fully customize the snackbar.</td>
      <td><code>(payload: SnackPropTypes)</code> - Configuration object with the props described above</td>
    </tr>
    <tr>
      <td>
        <code>showSuccess</code>
      </td>
      <td>Displays a success snackbar (green) with the provided configuration. Automatically sets the tone to 'success'.</td>
      <td><code>(payload: SnackPropTypes)</code> - Configuration object (tone will be overridden)</td>
    </tr>
    <tr>
      <td>
        <code>showInformation</code>
      </td>
      <td>Displays an information snackbar (blue) with the provided configuration. Automatically sets the tone to 'information'.</td>
      <td><code>(payload: SnackPropTypes)</code> - Configuration object (tone will be overridden)</td>
    </tr>
    <tr>
      <td>
        <code>showDanger</code>
      </td>
      <td>Displays a danger snackbar (red) with the provided configuration. Automatically sets the tone to 'danger'.</td>
      <td><code>(payload: SnackPropTypes)</code> - Configuration object (tone will be overridden)</td>
    </tr>
    <tr>
      <td>
        <code>showCaution</code>
      </td>
      <td>Displays a caution snackbar (orange) with the provided configuration. Automatically sets the tone to 'caution'.</td>
      <td><code>(payload: SnackPropTypes)</code> - Configuration object (tone will be overridden)</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from "vue";

import { useSnackbar } from "@/components/snackbar/use-snackbar.ts";

import SprSnackbar from "@/components/snackbar/snackbar.vue";
import SprButton from "@/components/button/button.vue";

const snackbar = ref(null);
const slottedActionSnackbar = ref(null);

const showSnackbar1 = () => {
  snackbar.value.showSnackbar({
    text: "This is a sample message.",
  });
}

/* #region - Tone  */
const showSuccess = () => {
  snackbar.value.showSuccess({
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    showIcon: true,
  });
}

const showInformation = () => {
  snackbar.value.showInformation({
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    showIcon: true,
  });
}

const showDanger = () => {
  snackbar.value.showDanger({
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    showIcon: true,
  });
}

const showCaution = () => {
  snackbar.value.showCaution({
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    showIcon: true,
  });
}
/* #endregion - Tone */

const showWithCloseButton = () => {
  snackbar.value.showInformation({
    text: "This snackbar closes when you click the close action",
    showIcon: true,
    actionText: "close",
    showAction: true
  });
}

const showWithFunction = () => {
  snackbar.value.showCaution({
    text: "This snackbar calls a function",
    showIcon: true,
    actionText: "action",
    showAction: true,
    action: () => alert("Action was clicked."),
  });
}

const showWithActionIconOnly = () => {
  snackbar.value.showSnackbar({
    text: "This snackbar calls a function with action icon only",
    tone: "danger",
    showIcon: true,
    actionText: "",
    showAction: true,
    actionIconProps: {
      icon: "ph:trash-fill",
      tone: "danger"
    },
    action: () => alert("Snackbar With Action Icon Only."),
  });
}

const showSlottedActionSnackbar = () => {
  slottedActionSnackbar.value.showSnackbar({
    text: "This snackbar has a slotted action",
    tone: 'success',
    showIcon: true,
    showAction: true,
    actionText: ""
  });
}

const handleSlottedAction = () => {
  alert("Slotted action clicked");
}
</script>
