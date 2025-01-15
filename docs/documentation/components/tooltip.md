# Tooltip

The tooltip component is a simple component that displays a tooltip when hovered over.

## Basic Usage
<spr-tooltip>
  <template #component>
    <div class="tw-p-2 tw-text-center tw-bg-kangkong-500 tw-inline-block tw-rounded-lg tw-cursor-default">
      Hover me to view tooltip
    </div>
  </template>
</spr-tooltip>

```vue
<spr-tooltip>
  <template #component>
    <!-- Your component here -->
  </template>
</spr-tooltip>
```

## Custom Text
<spr-tooltip text="This is my custom tooltip text">
  <template #component>
    <div class="tw-p-2 tw-text-center tw-bg-kangkong-500 tw-inline-block tw-rounded-lg tw-cursor-default">
      Hover me to view tooltip
    </div>
  </template>
</spr-tooltip>

```vue
<spr-tooltip text="This is my custom tooltip text">
  <template #component>
    <!-- Your component here -->
  </template>
</spr-tooltip>
```

## Position
<div class="tw-flex tw-flex-col tw-gap-3">
  <div class="tw-flex tw-gap-3">
    <spr-tooltip text="My tooltip" position="top">
      <template #component>
        <div class="tw-p-2 tw-w-32 tw-text-center tw-bg-kangkong-500 tw-inline-block tw-rounded-lg tw-cursor-default">
          top
        </div>
      </template>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="top-start">
      <template #component>
        <div class="tw-p-2 tw-w-32 tw-text-center tw-bg-kangkong-500 tw-inline-block tw-rounded-lg tw-cursor-default">
          top-start
        </div>
      </template>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="top-end">
      <template #component>
        <div class="tw-p-2 tw-w-32 tw-text-center tw-bg-kangkong-500 tw-inline-block tw-rounded-lg tw-cursor-default">
          top-end
        </div>
      </template>
    </spr-tooltip>
  </div>
  <div class="tw-flex tw-gap-3">
    <spr-tooltip text="My tooltip" position="bottom">
      <template #component>
        <div class="tw-p-2 tw-w-32 tw-text-center tw-bg-kangkong-500 tw-inline-block tw-rounded-lg tw-cursor-default">
          bottom
        </div>
      </template>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="bottom-start">
      <template #component>
        <div class="tw-p-2 tw-w-32 tw-text-center tw-bg-kangkong-500 tw-inline-block tw-rounded-lg tw-cursor-default">
          bottom-start
        </div>
      </template>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="bottom-end">
      <template #component>
        <div class="tw-p-2 tw-w-32 tw-text-center tw-bg-kangkong-500 tw-inline-block tw-rounded-lg tw-cursor-default">
          bottom-end
        </div>
      </template>
    </spr-tooltip>
  </div>
  <div class="tw-flex tw-gap-3">
    <spr-tooltip text="My tooltip" position="left">
      <template #component>
        <div class="tw-p-2 tw-w-32 tw-text-center tw-bg-kangkong-500 tw-inline-block tw-rounded-lg tw-cursor-default">
          left
        </div>
      </template>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="left-start">
      <template #component>
        <div class="tw-p-2 tw-w-32 tw-text-center tw-bg-kangkong-500 tw-inline-block tw-rounded-lg tw-cursor-default">
          left-start
        </div>
      </template>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="left-end">
      <template #component>
        <div class="tw-p-2 tw-w-32 tw-text-center tw-bg-kangkong-500 tw-inline-block tw-rounded-lg tw-cursor-default">
          left-end
        </div>
      </template>
    </spr-tooltip>
  </div>
  <div class="tw-flex tw-gap-3">
    <spr-tooltip text="My tooltip" position="right">
      <template #component>
        <div class="tw-p-2 tw-w-32 tw-text-center tw-bg-kangkong-500 tw-inline-block tw-rounded-lg tw-cursor-default">
          right
        </div>
      </template>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="right-start">
      <template #component>
        <div class="tw-p-2 tw-w-32 tw-text-center tw-bg-kangkong-500 tw-inline-block tw-rounded-lg tw-cursor-default">
          right-start
        </div>
      </template>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="right-end">
      <template #component>
        <div class="tw-p-2 tw-w-32 tw-text-center tw-bg-kangkong-500 tw-inline-block tw-rounded-lg tw-cursor-default">
          right-end
        </div>
      </template>
    </spr-tooltip>
  </div>
</div>

```vue
<spr-tooltip text="My tooltip" position="top-start">
  <template #component>
    <!-- Your component here -->
  </template>
</spr-tooltip>
```

<script setup lang="ts">
  import SprTooltip from "@/components/tooltip/tooltip.vue";
</script>
