---
outline: 'deep'
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
        <spr-button class="spr-mr-2" @click="handleSlottedAction">
          Slotted Action
        </spr-button>
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
  snackbar.value.showSnackbar({
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
      <td>text</td>
      <td>Text label shown in the snackbar</td>
      <td>string</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>tone</td>
      <td>Color of the snack bar</td>
      <td>'success' | 'information' | 'danger' | 'caution'</td>
      <td>'information'</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>showIcon</td>
      <td>Boolean value to display the icon</td>
      <td>boolean</td>
      <td>'false</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>actionText</td>
      <td>Text label for the action function</td>
      <td>string</td>
      <td>'action'</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>showAction</td>
      <td>Boolean value to show the action label</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>action</td>
      <td>On click function of the action text.</td>
      <td>function</td>
      <td>Function to delete snackbar</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>duration</td>
      <td>Duration in ms to show the snack.</td>
      <td>number</td>
      <td>4000</td>
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
