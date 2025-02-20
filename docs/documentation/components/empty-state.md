# Empty State

## Basic Usage

<div class="spr-p-8 spr-bg-white-500">
  <Spr-empty-state  description="No results found" subDescription="Try a different search term" >
    <div>
      Image Here
    </div>
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </Spr-empty-state>
</div>

```vue
<template>
  <Spr-empty-state description="No results found" subDescription="Try a different search term">
    <div>Image Here</div>

    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </Spr-empty-state>
</template>
```

## Images

List of images that can be used in the empty state component.
('bug', 'clock', 'dashboard', 'id', 'integration', 'list', 'saturation','employees', 'location')

<div class="spr-p-8 spr-bg-white-500">
  <Spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="bug"
  >
  <template #button>
    <spr-button tone="success">Retry</spr-button>
  </template>
  </Spr-empty-state>
</div>

```vue
<template>
  <Spr-empty-state description="No results found" subDescription="Try a different search term" image="bug">
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </Spr-empty-state>
</template>
```

## Image Size

Image size can be controlled by passing the `size` prop. The default size is `small`. (`small` and `large`)

<div class="spr-p-8 spr-bg-white-500">
  <Spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="bug"
    size="small"
  >
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </Spr-empty-state>
</div>

<div class="spr-p-8 spr-bg-white-500">
  <Spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="location"
    size="large"
  >
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </Spr-empty-state>
</div>

```vue
<template>
  <Spr-empty-state description="No results found" subDescription="Try a different search term" image="bug" size="small">
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </Spr-empty-state>

  <Spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="location"
    size="large"
  >
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </Spr-empty-state>
</template>
```

<script lang="ts" setup>
import SprEmptyState from "@/components/empty-state/empty-state.vue";

import SprButton from '@/components/button/button.vue';
</script>
