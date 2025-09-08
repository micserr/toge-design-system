---
title: Product Logo
outline: 'deep'
description: Display Sprout product logos with customizable themes and sizes
---

# Product Logo

The Product Logo component provides a simple and consistent way to display various Sprout product logos throughout your application. It supports different products, color themes, and sizing options.

## Overview

The Product Logo component offers:

- A comprehensive collection of Sprout product logos
- Multiple color themes for different backgrounds and contexts
- Customizable sizing for various layout requirements
- Proper accessibility attributes for screen readers

## Basic Usage

The simplest way to use the Logo component is without any props, which displays the default Sprout HR logo with the dark theme.

<div class="spr-flex spr-items-center spr-gap-4 spr-py-4 spr-rounded">
  <spr-logo />
</div>

```vue
<template>
  <spr-logo />
</template>

<script setup lang="ts">
import SprLogo from '@/components/logo/logo.vue';
</script>
```

:::tip
The component automatically applies the appropriate alt text and title attributes for accessibility, based on the product name.
:::

## Color Themes

The Logo component supports four different color themes to match various background colors and design contexts. Use the `theme` prop to specify the desired theme.

<div class="spr-flex spr-flex-wrap spr-items-center spr-gap-4 spr-py-4 spr-rounded">
  <div class="spr-p-4 spr-bg-black">
    <spr-logo theme="white" name="hr" />
  </div>
  <div class="spr-p-4 spr-bg-white">
    <spr-logo theme="dark" name="hr" />
  </div>
  <div class="spr-p-4 spr-bg-white">
    <spr-logo theme="gray" name="hr" />
  </div>
  <div class="spr-p-4 spr-bg-white">
    <spr-logo theme="green" name="hr" />
  </div>
</div>

```vue
<template>
  <!-- White theme (best for dark backgrounds) -->
  <spr-logo theme="white" name="hr" />

  <!-- Dark theme (default) -->
  <spr-logo theme="dark" name="hr" />

  <!-- Gray theme (subtle option for light backgrounds) -->
  <spr-logo theme="gray" name="hr" />

  <!-- Green theme (brand color emphasis) -->
  <spr-logo theme="green" name="hr" />
</template>
```

:::tip Theme Selection

- Use the `white` theme on dark backgrounds for best contrast
- Use the `dark` theme (default) on light backgrounds for standard branding
- Use the `gray` theme for a more subtle appearance on light backgrounds
- Use the `green` theme when you want to emphasize the brand color
  :::

## Product Logos

The Logo component supports a wide range of Sprout products. Use the `name` prop to specify the desired product logo.

<div class="spr-grid spr-grid-cols-3 spr-gap-4 spr-py-4 spr-rounded">
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="benchmark" />
    <span class="spr-text-xs">benchmark</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="ecosystem" />
    <span class="spr-text-xs">ecosystem</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="engage" />
    <span class="spr-text-xs">engage</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="finances" />
    <span class="spr-text-xs">finances</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="hr-mobile" />
    <span class="spr-text-xs">hr-mobile</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="hr" />
    <span class="spr-text-xs">hr</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="inbound" />
    <span class="spr-text-xs">inbound</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="insight" />
    <span class="spr-text-xs">insight</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="readycash" />
    <span class="spr-text-xs">readycash</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="readywage" />
    <span class="spr-text-xs">readywage</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="payroll" />
    <span class="spr-text-xs">payroll</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="performance-plus" />
    <span class="spr-text-xs">performance-plus</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="procurement" />
    <span class="spr-text-xs">procurement</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="professional-services" />
    <span class="spr-text-xs">professional-services</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="recruit" />
    <span class="spr-text-xs">recruit</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="recruit-plus" />
    <span class="spr-text-xs">recruit-plus</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="sail" />
    <span class="spr-text-xs">sail</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="sidekick" />
    <span class="spr-text-xs">sidekick</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="wellness" />
    <span class="spr-text-xs">wellness</span>
  </div>
</div>

```vue
<template>
  <spr-logo name="benchmark" />
  <spr-logo name="ecosystem" />
  <spr-logo name="engage" />
  <spr-logo name="finances" />
  <spr-logo name="hr-mobile" />
  <spr-logo name="hr" />
  <!-- Default -->
  <spr-logo name="inbound" />
  <spr-logo name="insight" />
  <spr-logo name="readycash" />
  <spr-logo name="readywage" />
  <spr-logo name="payroll" />
  <spr-logo name="performance-plus" />
  <spr-logo name="procurement" />
  <spr-logo name="professional-services" />
  <spr-logo name="recruit" />
  <spr-logo name="recruit-plus" />
  <spr-logo name="sail" />
  <spr-logo name="sidekick" />
  <spr-logo name="wellness" />
</template>
```

## Custom Sizing

The Logo component allows you to customize the size using the `width` prop. You can provide a number (interpreted as pixels) or a string with a CSS unit.

<div class="spr-flex spr-flex-wrap spr-items-end spr-gap-4 spr-py-4 spr-rounded">
  <spr-logo width="30" />
  <spr-logo width="50" /> <!-- Default size -->
  <spr-logo width="80" />
  <spr-logo width="120" />
  <spr-logo width="5em" />
</div>

```vue
<template>
  <spr-logo width="30" />
  <!-- 30px -->
  <spr-logo width="50" />
  <!-- Default 50px -->
  <spr-logo width="80" />
  <!-- 80px -->
  <spr-logo width="120" />
  <!-- 120px -->
  <spr-logo width="5em" />
  <!-- Using em units -->
</template>
```

:::tip
When providing a number without units (like `50`), it will be interpreted as pixels. For other units, specify them explicitly (like `5em` or `10rem`).
:::

## Common Use Cases

The Logo component is commonly used in:

1. **Application headers**: Display the product logo in the top navigation bar
2. **Login pages**: Prominently show the product logo during authentication
3. **Email templates**: Include product branding in notifications
4. **About pages**: Display multiple product logos in a portfolio section
5. **Marketing materials**: Present product logos with consistent sizing and theming

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>Specifies the product logo to display.</td>
      <td>string</td>
      <td><code>'hr'</code></td>
    </tr>
    <tr>
      <td><code>theme</code></td>
      <td>Specifies the color theme of the logo.</td>
      <td>string</td>
      <td><code>'dark'</code></td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>Sets the width of the logo. Can be a number (interpreted as pixels) or a string with a CSS unit.</td>
      <td>string | number</td>
      <td><code>50</code> (50px)</td>
    </tr>
  </tbody>
</table>

### Available Products

The following product names are supported via the `name` prop:

- `benchmark`
- `ecosystem`
- `engage`
- `finances`
- `hr-mobile`
- `hr` (default)
- `inbound`
- `insight`
- `readycash`
- `readywage`
- `payroll`
- `performance-plus`
- `procurement`
- `professional-services`
- `recruit`
- `recruit-plus`
- `sail`
- `sidekick`
- `wellness`

### Available Themes

The following themes are supported via the `theme` prop:

- `white` - Best for dark backgrounds
- `dark` (default) - Standard branding for light backgrounds
- `gray` - Subtle option for light backgrounds
- `green` - Brand color emphasis

### Accessibility

The Logo component automatically provides appropriate `alt` and `title` attributes for each product logo to ensure accessibility for screen readers. These attributes are generated based on the product name (e.g., "Sprout HR" for `name="hr"`).

<script setup lang="ts">
import SprLogo from "@/components/logo/logo.vue";
</script>
