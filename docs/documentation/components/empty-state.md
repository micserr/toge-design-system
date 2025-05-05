---
outline: 'deep'
---

# Empty State

## Basic Usage

<div class="spr-p-8 spr-bg-white-500">
  <spr-empty-state description="No results found" subDescription="Try a different search term" >
    <div>
      Image Slot Here
    </div>
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</div>

```vue
<template>
  <spr-empty-state description="No results found" subDescription="Try a different search term">
    <div>Image Here</div>

    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</template>
```

## Images

You can also use the `image` prop to display an image in the defined empty state. The image prop accepts a string value that corresponds to the image's name.

List of images that can be used in the empty state component.

<div class="spr-flex spr-gap-6 spr-mb-6">
  <ul class="!spr-m-0">
    <li>bug</li>
    <li>clock</li>
    <li>dashboard</li>
    <li>employees</li>
    <li>government-id</li>
  </ul>
  <ul class="!spr-m-0">
    <li>integration</li>
    <li>list</li>
    <li>social-media-handles</li>
    <li>work-in-progress</li>
    <li>work-location</li>
  </ul>
</div>

<div class="spr-p-8 spr-bg-white-500">
  <spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="bug"
  >
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</div>

```vue
<template>
  <spr-empty-state description="No results found" subDescription="Try a different search term" image="bug">
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</template>
```

## Image Size

Image size can be controlled by passing the `size` prop. The default size is `small`. (`small` and `large`)

<div class="spr-p-8 spr-bg-white-500">
  <spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="bug"
    size="small"
  >
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</div>

<div class="spr-p-8 spr-bg-white-500">
  <spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="work-location"
    size="large"
  >
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</div>

```vue
<template>
  <spr-empty-state description="No results found" subDescription="Try a different search term" image="bug" size="small">
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>

  <spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="work-location"
    size="large"
  >
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</template>
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
      <td>description</td>
      <td>The main description text for the empty state.</td>
      <td><code>String</code></td>
      <td>-</td>
      <td><code>'No results found'</code></td>
    </tr>
    <tr>
      <td>subDescription</td>
      <td>Additional text providing more context for the empty state.</td>
      <td><code>String</code></td>
      <td>-</td>
      <td><code>'Try a different search term.'</code></td>
    </tr>
    <tr>
      <td>size</td>
      <td>Controls the size of the empty state.</td>
      <td><code>'small'</code>, <code>'large'</code></td>
      <td><code>'small'</code>, <code>'large'</code></td>
      <td><code>'small'</code></td>
    </tr>
    <tr>
      <td>image</td>
      <td>Specifies the image to display in the empty state.</td>
      <td><code>String</code></td>
      <td><code>'bug'</code>, <code>'clock'</code>, <code>'dashboard'</code>, <code>'employees'</code>, <code>'government-id'</code>, <code>'integration'</code>, <code>'list'</code>, <code>'social-media-handles'</code>, <code>'work-in-progress'</code>, <code>'work-location'</code></td>
      <td><code>'list'</code></td>
    </tr>
    <tr>
      <td>hasButton</td>
      <td>Indicates whether the empty state includes a button slot.</td>
      <td><code>Boolean</code></td>
      <td><code>true</code>, <code>false</code></td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import SprEmptyState from "@/components/empty-state/empty-state.vue";

import SprButton from '@/components/button/button.vue';
</script>
