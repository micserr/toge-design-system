# Tooltip

The tooltip component is a simple component that displays a tooltip when hovered over.

## Basic Usage

<spr-tooltip>
    <div class="p-2 text-center bg-kangkong-500 inline-block rounded-lg cursor-default">
      Hover me to view tooltip
    </div>
</spr-tooltip>

```vue
<spr-tooltip>
    <!-- Your component here -->
</spr-tooltip>
```

## Custom Text

<spr-tooltip text="This is my custom tooltip text">
    <div class="p-2 text-center bg-kangkong-500 inline-block rounded-lg cursor-default">
      Hover me to view tooltip
    </div>
</spr-tooltip>

```vue
<spr-tooltip text="This is my custom tooltip text">
    <!-- Your component here -->
</spr-tooltip>
```

## Position

<div class="flex flex-col gap-3">
  <div class="flex gap-3">
    <spr-tooltip text="My tooltip" position="top">
        <div class="p-2 w-32 text-center bg-kangkong-500 inline-block rounded-lg cursor-default">
          top
        </div>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="top-start">
        <div class="p-2 w-32 text-center bg-kangkong-500 inline-block rounded-lg cursor-default">
          top-start
        </div>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="top-end">
        <div class="p-2 w-32 text-center bg-kangkong-500 inline-block rounded-lg cursor-default">
          top-end
        </div>
    </spr-tooltip>
  </div>
  <div class="flex gap-3">
    <spr-tooltip text="My tooltip" position="bottom">
        <div class="p-2 w-32 text-center bg-kangkong-500 inline-block rounded-lg cursor-default">
          bottom
        </div>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="bottom-start">
        <div class="p-2 w-32 text-center bg-kangkong-500 inline-block rounded-lg cursor-default">
          bottom-start
        </div>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="bottom-end">
        <div class="p-2 w-32 text-center bg-kangkong-500 inline-block rounded-lg cursor-default">
          bottom-end
        </div>
    </spr-tooltip>
  </div>
  <div class="flex gap-3">
    <spr-tooltip text="My tooltip" position="left">
        <div class="p-2 w-32 text-center bg-kangkong-500 inline-block rounded-lg cursor-default">
          left
        </div>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="left-start">
        <div class="p-2 w-32 text-center bg-kangkong-500 inline-block rounded-lg cursor-default">
          left-start
        </div>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="left-end">
        <div class="p-2 w-32 text-center bg-kangkong-500 inline-block rounded-lg cursor-default">
          left-end
        </div>
    </spr-tooltip>
  </div>
  <div class="flex gap-3">
    <spr-tooltip text="My tooltip" position="right">
        <div class="p-2 w-32 text-center bg-kangkong-500 inline-block rounded-lg cursor-default">
          right
        </div>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="right-start">
        <div class="p-2 w-32 text-center bg-kangkong-500 inline-block rounded-lg cursor-default">
          right-start
        </div>
    </spr-tooltip>
    <spr-tooltip text="My tooltip" position="right-end">
        <div class="p-2 w-32 text-center bg-kangkong-500 inline-block rounded-lg cursor-default">
          right-end
        </div>
    </spr-tooltip>
  </div>
</div>

```vue
<spr-tooltip text="My tooltip" position="top-start">
    <!-- Your component here -->
</spr-tooltip>
```

<script setup lang="ts">
  import SprTooltip from "@/components/tooltip/tooltip.vue";
</script>
