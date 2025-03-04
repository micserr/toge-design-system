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
    imageDocPath
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
    imageDocPath
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
    imageDocPath
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

<script lang="ts" setup>
import SprEmptyState from "@/components/empty-state/empty-state.vue";

import SprButton from '@/components/button/button.vue';
</script>
