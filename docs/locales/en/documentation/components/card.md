---
title: Card
descripttion: A flexible container with optional header, content, and footer used to group related information.
outline: deep
---

# Card

A flexible container with optional header, content, and footer used to group related information.

## Basic Usage

<spr-card>
  <template #content>
    <div>
      Card content
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
      <br/>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
      <br/>
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card>
    <template #content>
      <div>Card content</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
  </spr-card>
</template>
```

## Tone

Cards support different tones to indicate various states or importance levels. The available tones are: `plain`, `neutral`, `success`, `information`, `pending`, `caution`, `accent`, and `danger`.

<div class="spr-grid spr-gap-2">
  <div class="spr-flex spr-gap-2 spr-justify-between">
    <spr-card class="spr-w-full" tone="plain">
      <template #content>
        <div class="spr-text-center">
          Plain
        </div>
      </template>
    </spr-card>
    <spr-card class="spr-w-full" tone="neutral">
      <template #content>
        <div class="spr-text-center">
          Neutral
        </div>
      </template>
    </spr-card>
    <spr-card class="spr-w-full" tone="success">
      <template #content>
        <div class="spr-text-center">
          Success
        </div>
      </template>
    </spr-card>
    <spr-card class="spr-w-full" tone="information">
      <template #content>
        <div class="spr-text-center">
          Information
        </div>
      </template>
    </spr-card>
  </div>
  <div class="spr-flex spr-gap-2 spr-justify-between">
    <spr-card class="spr-w-full" tone="pending">
      <template #content>
        <div class="spr-text-center">
          Pending
        </div>
      </template>
    </spr-card>
    <spr-card class="spr-w-full" tone="caution">
      <template #content>
        <div class="spr-text-center">
          Caution
        </div>
      </template>
    </spr-card>
    <spr-card class="spr-w-full" tone="accent">
      <template #content>
        <div class="spr-text-center">
          Accent
        </div>
      </template>
    </spr-card>
    <spr-card class="spr-w-full" tone="danger">
      <template #content>
        <div class="spr-text-center">
          Danger
        </div>
      </template>
    </spr-card>
  </div>
</div>

## Header and Footer

Passing a `title` automatically displays the header. Use the `footer` slot to add a footer.

<spr-card title="Card Title">
  <template #content>
    <div>
      Card content
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
  </template>
  <template #footer>
    <div class="spr-flex spr-items-center spr-ms-auto spr-gap-size-spacing-3xs"> 
      <spr-button variant="secondary">secondary</spr-button>
      <spr-button tone="success">primary</spr-button>
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card title="Card Title">
    <template #content>
      <div>Card content</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
    <template #footer>
      <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
        <spr-button variant="secondary">secondary</spr-button>
        <spr-button tone="success">primary</spr-button>
      </div>
    </template>
  </spr-card>
</template>
```

## Force Hide Header and Footer

Pass `show-header` and `show-footer` props as `false` to hide the header and footer even if content is provided.

<spr-card title="Card Title" :show-header="false" :show-footer="false">
  <template #content>
    <div>
      Card content
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
  </template>
  <template #footer>
    <div class="spr-flex spr-items-center spr-ms-auto spr-gap-size-spacing-3xs"> 
      <spr-button variant="secondary">secondary</spr-button>
      <spr-button tone="success">primary</spr-button>
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card title="Card Title" :show-header="false" :show-footer="false">
    <template #content>
      <div>Card content</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
    <template #footer>
      <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
        <spr-button variant="secondary">secondary</spr-button>
        <spr-button tone="success">primary</spr-button>
      </div>
    </template>
  </spr-card>
</template>
```

## Icon

Pass a `header-icon` prop to display an icon in the header. The `title` prop is required for the icon to be visible.

<spr-card title="Card Title" header-icon="ph:check-circle-duotone">
  <template #content>
    <div>
      Card content
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
  </template>
  <template #footer>
    <div class="spr-flex spr-items-center spr-ms-auto spr-gap-size-spacing-3xs"> 
      <spr-button variant="secondary">secondary</spr-button>
      <spr-button tone="success">primary</spr-button>
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card title="Card Title" header-icon="ph:check-circle-duotone">
    <template #content>
      <div>Card content</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
    <template #footer>
      <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
        <spr-button variant="secondary">secondary</spr-button>
        <spr-button tone="success">primary</spr-button>
      </div>
    </template>
  </spr-card>
</template>
```

## Subtitle

Pass a `subtitle` prop to display a subtitle below the title. The `title` prop is required.

<spr-card title="Card Title" subtitle="This is a subtitle example" header-icon="ph:check-circle-duotone">
  <template #content>
    <div>
      Card content
    </div>  
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
  </template>
  <template #footer>
    <div class="spr-flex spr-items-center spr-ms-auto spr-gap-size-spacing-3xs"> 
      <spr-button variant="secondary">secondary</spr-button>
      <spr-button tone="success">primary</spr-button>
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card title="Card Title" subtitle="This is a subtitle example" header-icon="ph:check-circle-duotone">
    <template #content>
      <div>Card content</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
    <template #footer>
      <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
        <spr-button variant="secondary">secondary</spr-button>
        <spr-button tone="success">primary</spr-button>
      </div>
    </template>
  </spr-card>
</template>
```

## Custom Header

Use the `header` slot to add a content to the header. It will be placed next to the title.

<spr-card title="Card Title" header-icon="ph:newspaper-duotone">
  <template #header>
    <div class="spr-flex spr-items-center spr-justify-between spr-grow">
      <spr-badge text="9" variant="danger" size="small"/>
      <spr-button variant="secondary" size="small">Secondary</spr-button>
    </div>
  </template>
  <template #content>
    <div>
      Card content
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card title="Card Title" header-icon="ph:newspaper-duotone">
    <template #header>
      <div class="spr-flex spr-grow spr-items-center spr-justify-between">
        <spr-badge text="9" variant="danger" size="small" />
        <spr-button variant="secondary" size="small">Secondary</spr-button>
      </div>
    </template>
    <template #content>
      <div>Card content</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
  </spr-card>
</template>
```

If the `title` prop is omitted, the `header` slot can fully customize the header.

<spr-card>
  <template #header>
    <div>
      <img src="@/assets/images/banner-sample.svg" class="spr-w-full spr-h-[18px] spr-object-cover spr-rounded-t-border-radius-xl spr-pointer-events-none" />
    </div>
  </template>
  <template #content>
    <div>
      Card content
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card>
    <template #header>
      <div>
        <img
          src="@/assets/images/banner-sample.svg"
          class="spr-pointer-events-none spr-h-[18px] spr-w-full spr-rounded-t-border-radius-xl spr-object-cover"
        />
      </div>
    </template>
    <template #content>
      <div>Card content</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
  </spr-card>
</template>
```

## Border Width

Pass a `border-width` prop to customize the border width of the card. Accepts any valid CSS width value.

<spr-card title="Card Title" border-width="6px">
  <template #content>
    <div>Card content</div>
    <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
  </template>
  <template #footer>
    <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
      <spr-button variant="secondary">secondary</spr-button>
      <spr-button tone="success">primary</spr-button>
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card title="Card Title" border-width="6px">
    <template #content>
      <div>Card content</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
    <template #footer>
      <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
        <spr-button variant="secondary">secondary</spr-button>
        <spr-button tone="success">primary</spr-button>
      </div>
    </template>
  </spr-card>
</template>
```

## Border Radius

Pass a `border-radius-size` prop to customize the border radius of the card. Accepts predefined sizes: `xl`, `lg`, `md`, `sm`, `xs`, and `2xs`.

<spr-card title="Card Title" border-radius-size="sm">
  <template #content>
    <div>Card content</div>
    <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
  </template>
  <template #footer>
    <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
      <spr-button variant="secondary">secondary</spr-button>
      <spr-button tone="success">primary</spr-button>
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card title="Card Title" border-radius-size="sm">
    <template #content>
      <div>Card content</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
    <template #footer>
      <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
        <spr-button variant="secondary">secondary</spr-button>
        <spr-button tone="success">primary</spr-button>
      </div>
    </template>
  </spr-card>
</template>
```

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>string</td>
      <td>''</td>
      <td>
        Unique identifier for the input element. Used for associating the input with a label for accessibility.
      </td>
    </tr>
    <tr>
      <td>tone</td>
      <td>
        'plain' | 'neutral' | 'success' | 'information' | 'pending' | 'caution' | 'accent' | 'danger'
      </td>
      <td>''</td>
      <td>Sets the card's title in the header section.</td>
    </tr>
    <tr>
      <td>title</td>
      <td>string</td>
      <td>''</td>
      <td>Sets the card's title in the header section.</td>
    </tr>
    <tr>
      <td>subtitle</td>
      <td>string</td>
      <td>''</td>
      <td>Sets the card's subtitle displayed below the title. Requires title to be visible.</td>
    </tr>
    <tr>
      <td>header-icon</td>
      <td>string</td>
      <td>''</td>
      <td>Displays an icon in the header using the Iconify icon name format. Requires title to be visible.</td>
    </tr>
    <tr>
      <td>show-header</td>
      <td>boolean</td>
      <td>true</td>
      <td>Controls the visibility of the header section.</td>
    </tr>
    <tr>
      <td>show-footer</td>
      <td>boolean</td>
      <td>true</td>
      <td>Controls the visibility of the footer section.</td>
    </tr>
    <tr>
      <td>border-width</td>
      <td>Width Style</td>
      <td>'1px'</td>
      <td>Sets the border width of the card.</td>
    </tr>
    <tr>
      <td>border-radius-size</td>
      <td>'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs'</td>
      <td>'xl'</td>
      <td>Sets the border radius of the card including header and footer.</td>
    </tr>
    <tr>
      <td>has-collapsible</td>
      <td>boolean</td>
      <td>false</td>
      <td>Indicates that the card is used with a collapsible component, which affects the border styling.</td>
    </tr>
    <tr>
      <td>is-collapsible-open</td>
      <td>boolean</td>
      <td>false</td>
      <td>Tracks whether the content is expanded when used with a collapsible component to apply appropriate border styles.</td>
    </tr>
    <tr>
      <td>has-content-padding</td>
      <td>boolean</td>
      <td>true</td>
      <td>Controls whether padding is applied to the content area of the card.</td>
    </tr>
    <tr>
      <td>flexbox</td>
      <td>boolean</td>
      <td>false</td>
      <td>When true, applies flexbox layout to the card, making it a flex container with column direction.</td>
    </tr>
    <tr>
      <td>customBorderSize</td>
      <td>string | null</td>
      <td>null</td>
      <td>Sets a custom border size for the card. If not set, the default border size will be used.</td>
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
      <td>header</td>
      <td>Custom content for the card header. Will be displayed alongside the title if provided, or can completely replace the default header if no title is set.</td>
    </tr>
    <tr>
      <td>content</td>
      <td>The main content of the card. This slot is recommended for organizing content within the card.</td>
    </tr>
    <tr>
      <td>default</td>
      <td>Alternative slot for content. Only used if no content slot is provided.</td>
    </tr>
    <tr>
      <td>footer</td>
      <td>Custom content for the card footer. Typically used for action buttons or summary information.</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import SprCard from '@/components/card/card.vue';
import SprButton from '@/components/button/button.vue';
import SprBadge from '@/components/badge/badge.vue';
import SprLogo from "@/components/logo/logo.vue";
</script>
