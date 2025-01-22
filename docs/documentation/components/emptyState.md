# Empty State

## Basic Usage

<div class="tw-p-8 tw-bg-white-500">
<Spr-empty-state  description="No results found" subDescription="Try a different search term" >
  <div>
    Image Here
  </div>
</Spr-empty-state>
</div>

```vue
<Spr-empty-state description="No results found" subDescription="Try a different search term">
  <div>
    slot
  </div>
</Spr-empty-state>
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

<div class="tw-p-8 tw-bg-white-500">
  <Spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="bug"
  />
</div>

```vue
<Spr-empty-state description="No results found" subDescription="Try a different search term" image="bug" />
```

## Image Size

Image size can be controlled by passing the `size` prop. The default size is `small`. (`small` and `large`)

<div class="tw-p-8 tw-bg-white-500">
  <Spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="bug"
    size="small"
  />
</div>

<div class="tw-p-8 tw-bg-white-500">
  <Spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="location"
    size="large"
  />
</div>

```vue
<Spr-empty-state description="No results found" subDescription="Try a different search term" image="bug" size="small" />
<Spr-empty-state description="No results found" subDescription="Try a different search term" image="bug" size="small" />
```

## Event

| Name    | Description             |
| ------- | ----------------------- |
| onClick | emits when button click |

<script setup lang="ts">
  import SprEmptyState from "@/components/emptyState/EmptyState.vue";
</script>
