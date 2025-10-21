---
title: Lozenge
descripttion: Lozenge represents entities using icons, labels, and images. It supports various tones, fill types, avatar integration, interactive states, and loading indicators to enhance user experience and visual communication.
outline: deep
---

# Lozenge

Lozenge represents entities using icons, labels, and images.

## Key Features

- `label`: The text label displayed inside the lozenge.
- `tone`: The color tone of the lozenge. Available tones are: 'plain', 'pending', 'information', 'success', 'danger', 'neutral', 'caution'.
- `fill`: A boolean indicating whether the lozenge should have a filled background (true) or an outlined style (false).
- `removevalue`: A boolean indicating whether to show a remove icon inside the lozenge (true) or not (false).
- `url`: The URL of the avatar image to be displayed inside the lozenge.
- `visible`: A boolean indicating whether the lozenge is visible (true) or hidden (false).
- `loading`: A boolean indicating whether to show a loading spinner inside the lozenge (true) or not (false).
- `icon`: The icon to be displayed inside the lozenge.
- `postfixIcon`: The icon to be displayed at the end of the lozenge.
- `interactive`: A boolean indicating whether the lozenge is interactive (true) or not (false).
- `dropdown`: A boolean indicating whether to show a dropdown arrow inside the lozenge (true) or not (false).

## Basic Usage

A basic lozenge with a text is created with the label property.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-lozenge label="Lozenge" />
</div>

```vue
<spr-lozenge label="Lozenge" />
```

## Tone and Fill

Customize the lozenge's color style (tone) and choose between filled or outlined appearance (fill) to indicate status or emphasis.

<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" data-testid="lozenge-tone-plain"/>
  <spr-lozenge label="pending" tone="pending" data-testid="lozenge-tone-pending" />
  <spr-lozenge label="information" tone="information" data-testid="lozenge-tone-information" />
  <spr-lozenge label="success" tone="success" data-testid="lozenge-tone-success" />
  <spr-lozenge label="neutral" tone="neutral" data-testid="lozenge-tone-neutral"/>
  <spr-lozenge label="danger" tone="danger" data-testid="lozenge-tone-danger" />
  <spr-lozenge label="caution" tone="caution" data-testid="lozenge-tone-caution" />
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" fill data-testid="lozenge-fill-plain" />
  <spr-lozenge label="pending" tone="pending" fill data-testid="lozenge-fill-pending" />
  <spr-lozenge label="information" tone="information" fill data-testid="lozenge-fill-information" />
  <spr-lozenge label="success" tone="success" fill data-testid="lozenge-fill-success" />
  <spr-lozenge label="neutral" tone="neutral" fill data-testid="lozenge-fill-neutral" />
  <spr-lozenge label="danger" tone="danger" fill data-testid="lozenge-fill-danger" />
  <spr-lozenge label="caution" tone="caution" fill data-testid="lozenge-fill-caution" />
</div>

```vue
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain"/>
  <spr-lozenge label="pending" tone="pending" />
  <spr-lozenge label="information" tone="information" />
  <spr-lozenge label="success" tone="success" />
  <spr-lozenge label="neutral" tone="neutral" />
  <spr-lozenge label="danger" tone="danger" />
  <spr-lozenge label="caution" tone="caution" />
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" fill />
  <spr-lozenge label="pending" tone="pending" fill />
  <spr-lozenge label="information" tone="information" fill />
  <spr-lozenge label="success" tone="success" fill />
  <spr-lozenge label="neutral" tone="neutral" fill />
  <spr-lozenge label="danger" tone="danger" fill />
  <spr-lozenge label="caution" tone="caution" fill />
</div>
```

## Avatar

You can use the `url` property to display an avatar image, or use the `avatar` slot for custom avatar components.

<div class="spr-flex spr-flex-col spr-gap-2 spr-bg-white-50 spr-overflow-auto spr-py-3">
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="information" tone="information" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="success" tone="success" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="neutral" tone="neutral" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="danger" tone="danger" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="caution" tone="caution" url="https://tinyurl.com/2vzn782p" />
    <spr-lozenge label="plain"  url="https://tinyurl.com/2vzn782p" />
  </div>
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="information" tone="information" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="success" tone="success" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="neutral" tone="neutral" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="danger" tone="danger" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="caution" tone="caution" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="plain"  fill url="https://tinyurl.com/2vzn782p"/>
  </div>
</div>

```vue
<spr-lozenge label="pending" tone="pending" url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="information" tone="information" url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="success" tone="success" url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="neutral" tone="neutral" url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="danger" tone="danger" url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="caution" tone="caution" url="https://tinyurl.com/2vzn782p" />

<spr-lozenge label="pending" tone="pending" fill url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="information" tone="information" fill url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="success" tone="success" fill url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="neutral" tone="neutral" fill url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="danger" tone="danger" fill url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="caution" tone="caution" fill url="https://tinyurl.com/2vzn782p" />
```

### Slotted Avatar

You can also use the `avatar` slot to customize the avatar component.

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-lozenge label="Users" tone="information">
    <template #avatar>
      <img
        class="spr-h-4 spr-w-4 spr-rounded-full spr-object-cover"
        src="https://tinyurl.com/2vzn782p"
        alt="avatar"
      />
    </template>
    <template #icon>
      <Icon icon="ph:users-three" />
    </template>
  </spr-lozenge>
</div>

```vue
<template>
  <spr-lozenge label="Users" tone="information">
    <template #icon>
      <Icon icon="ph:users-three" />
    </template>

    <template #avatar>
      <img class="h-full w-full rounded-full object-cover" src="https://tinyurl.com/2vzn782p" alt="avatar" />
    </template>
  </spr-lozenge>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
```

## Prefix and Postfix Icon

You can use the `icon` property or the `icon` slot to add a prefix icon to the lozenge. By default, the `icon` property or slot renders as a prefix icon before the label.  
To add a postfix icon, use the `postfixIcon` property or the `postfixIcon` slot. This allows you to display an icon after the label.

<div class="spr-flex spr-flex-col spr-gap-2 spr-bg-white-50 spr-overflow-auto spr-py-3">
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending" icon="ph:acorn">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="information" tone="information">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="success" tone="success">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="neutral" tone="neutral">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="danger" tone="danger">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="caution" tone="caution">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="plain">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
  </div>
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="information" tone="information" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="success" tone="success" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="neutral" tone="neutral" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="danger" tone="danger" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="caution" tone="caution" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="plain" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
  </div>
</div>
<div class="spr-flex spr-flex-col spr-gap-2 spr-bg-white-50 spr-overflow-auto spr-py-3">
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="information" tone="information">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="success" tone="success">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="neutral" tone="neutral">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="danger" tone="danger">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="caution" tone="caution">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="plain">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
  </div>
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="information" tone="information" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="success" tone="success" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="neutral" tone="neutral" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="danger" tone="danger" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="caution" tone="caution" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="plain" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
  </div>
</div>

```vue
<template>
  <!-- Prefix Icon -->
  <spr-lozenge label="pending" tone="pending" icon="ph:users-three" />
  <spr-lozenge label="pending" tone="pending">
    <template #icon>
      <Icon icon="ph:users-three" />
    </template>
  </spr-lozenge>

  <!-- Postfix Icon -->
  <spr-lozenge label="pending" tone="pending" postfix-icon="ph:users-three" />
  <spr-lozenge label="pending" tone="pending">
    <template #postfixIcon>
      <Icon icon="ph:users-three" />
    </template>
  </spr-lozenge>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
```

## Interactive

The `interactive` prop enables interactive states for the lozenge, allowing it to respond to user actions such as hover and pressed. This is useful for making the lozenge behave like a button or menu trigger.

<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" interactive />
  <spr-lozenge label="pending" tone="pending" interactive />
  <spr-lozenge label="information" tone="information" interactive />
  <spr-lozenge label="success" tone="success" interactive />
  <spr-lozenge label="neutral" tone="neutral" interactive />
  <spr-lozenge label="danger" tone="danger" interactive />
  <spr-lozenge label="caution" tone="caution" interactive />
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" fill interactive />
  <spr-lozenge label="pending" tone="pending" fill interactive />
  <spr-lozenge label="information" tone="information" fill interactive />
  <spr-lozenge label="success" tone="success" fill interactive />
  <spr-lozenge label="neutral" tone="neutral" fill interactive />
  <spr-lozenge label="danger" tone="danger" fill interactive />
  <spr-lozenge label="caution" tone="caution" fill interactive />
</div>

```vue
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" interactive />
  <spr-lozenge label="pending" tone="pending" interactive />
  <spr-lozenge label="information" tone="information" interactive />
  <spr-lozenge label="success" tone="success" interactive />
  <spr-lozenge label="neutral" tone="neutral" interactive />
  <spr-lozenge label="danger" tone="danger" interactive />
  <spr-lozenge label="caution" tone="caution" interactive />
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" fill interactive />
  <spr-lozenge label="pending" tone="pending" fill interactive />
  <spr-lozenge label="information" tone="information" fill interactive />
  <spr-lozenge label="success" tone="success" fill interactive />
  <spr-lozenge label="neutral" tone="neutral" fill interactive />
  <spr-lozenge label="danger" tone="danger" fill interactive />
  <spr-lozenge label="caution" tone="caution" fill interactive />
</div>
```

### Dropdown

The `dropdown` prop makes the lozenge behave as a predefined interactive element with a default postfix dropdown icon (`ph:caret-down-fill`).

<spr-dropdown id="lozengeDropdown" v-model="dropdownSelection" :menu-list="menuList" lozenge @update:model-value="dropdownUpdateHandler" >
<spr-lozenge v-bind="lozengeProps" dropdown />
</spr-dropdown>
<br/>
<spr-dropdown id="hollowLozengeDropdown" v-model="dropdownSelectionHollow" :menu-list="hollowMenuList" lozenge @update:model-value="dropdownUpdateHandler" >
<spr-lozenge v-bind="hollowLozengeProps" dropdown />
</spr-dropdown>

```vue
<template>
  <spr-dropdown
    id="lozengeDropdown"
    v-model="dropdownSelection"
    :menu-list="menuList"
    lozenge
    @update:model-value="dropdownUpdateHandler"
  >
    <spr-lozenge v-bind="lozengeProps" dropdown />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

import { LOZENGE_TONE } from '@/components/lozenge/lozenge';
import { MenuListType } from '@/components/list/list';
import { Header } from '@/components/table/table';

const menuList = ref(
  LOZENGE_TONE.map((tone: string) => ({
    text: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
    value: tone,
    lozengeProps: {
      label: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
      tone: tone,
      fill: true,
      url: 'https://tinyurl.com/2vzn782p',
      icon: 'ph:address-book-tabs',
    },
  })) as MenuListType[],
);

const dropdownSelection = ref('neutral');
const lozengeProps = computed(() => {
  return menuList.value.find((item) => item.value === dropdownSelection.value)?.lozengeProps;
});

const dropdownUpdateHandler = (newSelection: string) => {
  console.log('Dropdown selection updated:', newSelection);
};

const hollowMenuList = ref(
  LOZENGE_TONE.map((tone: string) => ({
    text: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
    value: tone,
    lozengeProps: {
      label: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
      tone: tone,
      fill: false,
      url: 'https://tinyurl.com/2vzn782p',
      icon: 'ph:address-book-tabs',
    },
  })) as MenuListType[],
);

const dropdownSelectionHollow = ref('neutral');
const hollowLozengeProps = computed(() => {
  return hollowMenuList.value.find((item) => item.value === dropdownSelectionHollow.value)?.lozengeProps;
});
</script>
```

::: tip NOTE
If you provide a `postfixIcon` prop or slot, it will override the default dropdown icon.
:::

<spr-lozenge label="plain" dropdown>
  <template #postfixIcon>
    <Icon icon="ph:dots-three-vertical-bold" />
  </template>
</spr-lozenge>

```vue
<spr-lozenge label="plain" dropdown>
  <template #postfixIcon>
    <Icon icon="ph:dots-three-vertical-bold" />
  </template>
</spr-lozenge>
```

## Loading

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-lozenge loading />
</div>

```vue
<template>
  <spr-lozenge loading />
</template>
```

## Slot

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>icon</td>
      <td>customize prefix icon component</td>
    </tr>
    <tr>
      <td>avatar</td>
      <td>customize avatar component</td>
    </tr>
    <tr>
      <td>postfixIcon</td>
      <td>customize postfix icon component (displayed after the label)</td>
    </tr>
  </tbody>
</table>

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
      <td>label</td>
      <td>The primary text content displayed in the lozenge.</td>
      <td>string</td>
      <td>'label'</td>
    </tr>
    <tr>
      <td>tone</td>
      <td>Determines the color scheme of the lozenge to indicate status or categorization. Each tone carries semantic meaning:
        <ul>
          <li><code>plain</code>: Default, neutral styling</li>
          <li><code>pending</code>: For in-progress or waiting states</li>
          <li><code>information</code>: For informational content</li>
          <li><code>success</code>: For positive or completed actions</li>
          <li><code>neutral</code>: For general, non-emphasized content</li>
          <li><code>danger</code>: For errors or warnings requiring attention</li>
          <li><code>caution</code>: For cautionary information</li>
        </ul>
      </td>
      <td>'plain' | 'pending' | 'information' | 'success' | 'neutral' | 'caution' | 'danger'</td>
      <td>'plain'</td>
    </tr>
    <tr>
      <td>fill</td>
      <td>Controls the lozenge's visual style. When <code>true</code>, the lozenge has a solid background color. When <code>false</code>, it has an outline style with a transparent background.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>removable</td>
      <td>When <code>true</code>, the lozenge can be removed by the user (displays a remove icon).</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>url</td>
      <td>URL for the avatar image to be displayed within the lozenge. If provided, an avatar will be shown at the beginning of the lozenge.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>visible</td>
      <td>Controls the visibility of the lozenge. When <code>false</code>, the lozenge will not be rendered.</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>When <code>true</code>, displays a skeletal loading state instead of the actual content, indicating that data is being loaded.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>Name of an Iconify icon to be displayed as a prefix icon (before the label). Alternatively, use the <code>icon</code> slot for custom icons.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>postfixIcon</td>
      <td>Name of an Iconify icon to be displayed as a postfix icon (after the label). Alternatively, use the <code>postfixIcon</code> slot for custom icons.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>interactive</td>
      <td>When <code>true</code>, the lozenge responds to user interactions with hover and active states, making it suitable for clickable elements.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>dropdown</td>
      <td>When <code>true</code>, the lozenge behaves as a dropdown trigger with a default caret icon and interactive styling. This automatically sets <code>interactive</code> to <code>true</code>.</td>
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
      <td>onRemove</td>
      <td>Emitted when the remove button is clicked on a removable lozenge.</td>
      <td>(event: MouseEvent)</td>
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
      <td>icon</td>
      <td>Custom content for the prefix icon area (displayed before the label). Use this slot to insert custom icons or components instead of using the <code>icon</code> prop.</td>
    </tr>
    <tr>
      <td>avatar</td>
      <td>Custom content for the avatar area. Use this slot to insert a custom avatar component instead of using the <code>url</code> prop.</td>
    </tr>
    <tr>
      <td>postfixIcon</td>
      <td>Custom content for the postfix icon area (displayed after the label). Use this slot to insert custom icons or components instead of using the <code>postfixIcon</code> prop.</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>  
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
import SprLozenge from "@/components/lozenge/lozenge.vue"
import SprLogo from "@/components/logo/logo.vue";
import SprDropdown from '@/components/dropdown/dropdown.vue';
import { LOZENGE_TONE } from '@/components/lozenge/lozenge';
import { MenuListType } from '@/components/list/list';
import { Header } from '@/components/table/table';

const menuList = ref(
  LOZENGE_TONE.map((tone: string) => ({
    text: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
    value: tone,
    lozengeProps: {
      label: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
      tone: tone,
      fill: true,
      url: "https://tinyurl.com/2vzn782p",
      icon: "ph:address-book-tabs",
    }
  })) as MenuListType[]
);

const dropdownSelection = ref('neutral');
const lozengeProps = computed(() => {
  return menuList.value.find(item => item.value === dropdownSelection.value)?.lozengeProps;
});

const dropdownUpdateHandler = (newSelection: string) => {
  console.log('Dropdown selection updated:', newSelection);
};

const hollowMenuList = ref(
  LOZENGE_TONE.map((tone: string) => ({
    text: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
    value: tone,
    lozengeProps: {
      label: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
      tone: tone,
      fill: false,
      url: "https://tinyurl.com/2vzn782p",
      icon: "ph:address-book-tabs",
    }
  })) as MenuListType[]
);

const dropdownSelectionHollow = ref('neutral');
const hollowLozengeProps = computed(() => {
  return hollowMenuList.value.find(item => item.value === dropdownSelectionHollow.value)?.lozengeProps;
});

const hollowDropdownUpdateHandler = (newSelection: string) => {
  console.log('Dropdown selection updated:', newSelection);
};
</script>
