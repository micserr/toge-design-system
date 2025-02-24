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

<br/>

### Disable header and footer

<br/>

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

<br>

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

## Border Radius

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

## Card API

### Props

<table>
<thead>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Default</td>
    <td>Description</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td>title</td>
    <td>string</td>
    <td>-</td>
    <td>Sets the card's title.</td>
  </tr>
  <tr>
    <td>subtitle</td>
    <td>string</td>
    <td>-</td>
    <td>Sets the card's subtitle. Requires title to be visible.</td>
  </tr>
  <tr>
    <td>header-icon</td>
    <td>string</td>
    <td>-</td>
    <td>Displays an icon in the header. Requires title to be visible.</td>
  </tr>
  <tr>
    <td>show-header</td>
    <td>boolean</td>
    <td>true</td>
    <td>Controls the visibility of the header.</td>
  </tr>
  <tr>
    <td>show-footer</td>
    <td>boolean</td>
    <td>true</td>
    <td>Controls the visibility of the footer.</td>
  </tr>
  <tr>
    <td>border-radius-size</td>
    <td>string</td>
    <td>xl</td>
    <td>Sets the border radius of the card including header and footer. Accepts one of: xl, lg, md, sm, xs, 2xs.</td>
  </tr>
</tbody>
</table>

### Slots

<table>
  <tr>
    <td>Name</td>
    <td>Description</td>
  </tr>
<thead>
</thead>
<tbody>
  <tr>
    <td>header</td>
    <td>Custom content for the header.</td>
  </tr>
  <tr>
    <td>content</td>
    <td>The main content of the card.</td>
  </tr>
  <tr>
    <td>footer</td>
    <td>Custom content for the footer.</td>
  </tr>
</tbody>
</table>

<script lang="ts" setup>
import SprCard from '@/components/card/card.vue';
import SprButton from '@/components/button/button.vue';
import SprBadge from '@/components/badge/badge.vue';
</script>
