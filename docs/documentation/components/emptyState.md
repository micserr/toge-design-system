# Empty State

## Basic Usage

<div class="p-8 bg-white-500">
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
  <div class="p-8 bg-white-500">
  <Spr-empty-state  description="No results found" subDescription="Try a different search term" >
    <div>
      Image Here
    </div>

    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </Spr-empty-state>
</template>
```

## Images

List of images that can be used in the empty state component. ( 'bug',
'clock',
'dashboard',
'id',
'integration',
'list',
'saturation',
'employees',
'location')

<div class="p-8 bg-white-500">
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
  <div class="bg-white-500 p-8">
    <<<<<<< HEAD
    <Spr-empty-state description="No results found" subDescription="Try a different search term" image="bug">
      <template #button>
        <spr-button tone="success">Retry</spr-button>
      </template>
    </Spr-empty-state>
    =======
    <Spr-empty-state description="No results found" subDescription="Try a different search term" image="bug" />
    >>>>>>> a0ac8dd81fb44439e7f3664112e590be1862fbeb
  </div>
</template>
```

## Image Size

Image size can be controlled by passing the `size` prop. The default size is `small`. (`small` and `large`)

<div class="p-8 bg-white-500">
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

<div class="p-8 bg-white-500">
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
  <div class="bg-white-500 p-8">
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

  <div class="bg-white-500 p-8">
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
</template>
```

<script lang="ts" setup>
import SprEmptyState from "@/components/emptyState/emptyState.vue";

import SprButton from '@/components/button/button.vue';
</script>
