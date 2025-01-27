# Empty State

## Basic Usage

<div class="p-8 bg-white-500">
<Spr-empty-state  description="No results found" subDescription="Try a different search term" >
  <div>
    Image Here
  </div>
</Spr-empty-state>
</div>

```vue
<template>
  <div class="bg-white-500 p-8">
    <Spr-empty-state description="No results found" subDescription="Try a different search term">
      <div>Image Here</div>
    </Spr-empty-state>
  </div>
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
  />
</div>

```vue
<template>
  <div class="bg-white-500 p-8">
    <Spr-empty-state description="No results found" subDescription="Try a different search term" image="bug" />
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
  />
</div>

<div class="p-8 bg-white-500">
  <Spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="location"
    size="large"
  />
</div>

```vue
<template>
  <div class="bg-white-500 p-8">
    <Spr-empty-state
      description="No results found"
      subDescription="Try a different search term"
      image="bug"
      size="small"
    />
  </div>

  <div class="bg-white-500 p-8">
    <Spr-empty-state
      description="No results found"
      subDescription="Try a different search term"
      image="location"
      size="large"
    />
  </div>
</template>
```

## Event

| Name    | Description             |
| ------- | ----------------------- |
| onClick | emits when button click |

<script lang="ts" setup>
import SprEmptyState from "@/components/emptyState/emptyState.vue";
</script>
