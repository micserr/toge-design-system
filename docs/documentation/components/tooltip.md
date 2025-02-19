# Tooltip

The tooltip component is a simple component that displays a tooltip when hovered over.

## Basic Usage

<spr-tooltip>
  <spr-button tone="success">Hover me to view tooltip</spr-button>
</spr-tooltip>

```vue
<spr-tooltip>
    <!-- Your component here -->
</spr-tooltip>
```

## Custom Text

By adding the `text` prop to the tooltip component, you can customize the text that is displayed in the tooltip.

<spr-tooltip text="This is my custom tooltip text">
  <spr-button tone="success">Hover me to view tooltip</spr-button>
</spr-tooltip>

```vue
<spr-tooltip text="This is my custom tooltip text">
    <!-- Your component here -->
</spr-tooltip>
```

## Custom Text Using HTML

You can also use HTML to further customize the text that you wanted to displayed in the tooltip by using a template named `#popper-content`.

::: info Important to note:
If both `text` props and template `#popper-content` are used, the `text` prop will be always first displayed before the `#popper-content`.
:::

<spr-tooltip text="This is my custom tooltip text">
  <template #popper-content>
    <h5>This is a sample title</h5>
  </template>
  <spr-button tone="success">Hover me to view tooltip</spr-button>
</spr-tooltip>

```vue
<spr-tooltip text="This is my custom tooltip text">
  <template #popper-content>
    <h5>This is a sample title</h5>
  </template>

  <!-- Your component here -->
</spr-tooltip>
```

## Position

<div class="flex flex-col gap-3">
  <div class="flex gap-3">
    <spr-tooltip class="!w-full" text="My tooltip" placement="top">
      <spr-button class="w-full" tone="success">Top</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!w-full" text="My tooltip" placement="top-start">
      <spr-button class="w-full" tone="success">Top Start</spr-button>
    </spr-tooltip>
    <spr-tooltip class="w-full" text="My tooltip" placement="top-end">
      <spr-button class="w-full" tone="success">Top End</spr-button>
    </spr-tooltip>
  </div>
  <div class="flex gap-3">
    <spr-tooltip class="!w-full" text="My tooltip" placement="bottom">
      <spr-button class="w-full" tone="success">Bottom</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!w-full" text="My tooltip" placement="bottom-start">
      <spr-button class="w-full" tone="success">Bottom Start</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!w-full" text="My tooltip" placement="bottom-end">
      <spr-button class="w-full" tone="success">Bottom End</spr-button>
    </spr-tooltip>
  </div>
  <div class="flex gap-3">
    <spr-tooltip class="!w-full" text="My tooltip" placement="left">
      <spr-button class="w-full" tone="success">Left</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!w-full" text="My tooltip" placement="left-start">
      <spr-button class="w-full" tone="success">Left Start</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!w-full" text="My tooltip" placement="left-end">
      <spr-button class="w-full" tone="success">Left End</spr-button>
    </spr-tooltip>
  </div>
  <div class="flex gap-3">
    <spr-tooltip class="!w-full" text="My tooltip" placement="right">
      <spr-button class="w-full" tone="success">Right</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!w-full" text="My tooltip" placement="right-start">
      <spr-button class="w-full" tone="success">Right Start</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!w-full" text="My tooltip" placement="right-end">
      <spr-button class="w-full" tone="success">Right End</spr-button>
    </spr-tooltip>
  </div>
</div>

```vue
<spr-tooltip text="My tooltip" placement="top-start">
    <!-- Your component here -->
</spr-tooltip>
```

## Max Width

You can enable or disable the maximum width of the tooltip by using the `has-max-width prop`. By default, the max-width is enabled. When the `has-max-width` prop is set to true, the tooltip will have a maximum width of `280px`.

<div class="grid gap-3">
    <spr-tooltip placement="top">
      <template #popper-content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, 
          ante sit amet condimentum varius, metus enim luctus magna, ut vehicula ipsum quam vel odio.
        </p>
      </template>
      <spr-button tone="success">Has Max Width</spr-button>
    </spr-tooltip>
    <spr-tooltip placement="top" :has-max-width="false">
      <template #popper-content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, 
          ante sit amet condimentum varius, metus enim luctus magna, ut vehicula ipsum quam vel odio.
        </p>
      </template>
      <spr-button tone="success">Has No Max Width</spr-button>
    </spr-tooltip>
  </div>

```vue
<spr-tooltip>
  <template #popper-content>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, 
      ante sit amet condimentum varius, metus enim luctus magna, ut vehicula ipsum quam vel odio.
    </p>
  </template>

  <!-- Your component here -->
</spr-tooltip>

<spr-tooltip>
  <template #popper-content :has-max-width="false">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, 
      ante sit amet condimentum varius, metus enim luctus magna, ut vehicula ipsum quam vel odio.
    </p>
  </template>

  <!-- Your component here -->
</spr-tooltip>
```

<script setup lang="ts">
  import SprTooltip from "@/components/tooltip/tooltip.vue";
  import SprButton from "@/components/button/button.vue";
</script>
