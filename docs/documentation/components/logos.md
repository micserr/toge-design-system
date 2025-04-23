# Logos

Displays various Sprout product logos. This component allows specifying the product name and the desired color theme.

## Basic Usage

Shows the default logo (`hr` name, `dark` theme).

<div class="spr-flex spr-items-center spr-gap-4 spr-p-4 spr-rounded">
  <spr-logos />
</div>

```vue
<template>
  <spr-logos />
</template>

<script setup lang="ts">
import SprLogos from "@/components/logos/logos.vue";
</script>
```

## Themes

You can change the logo theme using the `theme` prop.

<div class="spr-flex spr-flex-wrap spr-items-center spr-gap-4 spr-p-4 spr-rounded">
  <spr-logos theme="white" name="hr" />
  <spr-logos theme="dark" name="hr" />
  <spr-logos theme="gray" name="hr" />
  <spr-logos theme="green" name="hr" />
</div>

```vue
<template>
  <spr-logos theme="white" name="hr" />
  <spr-logos theme="dark" name="hr" />
  <spr-logos theme="gray" name="hr" />
  <spr-logos theme="green" name="hr" />
</template>

<script setup lang="ts">
import SprLogos from "@/components/logos/logos.vue";
</script>
```

## Names

Specify different product logos using the `name` prop.

<div class="spr-flex spr-flex-wrap spr-items-center spr-gap-4 spr-p-4 spr-rounded">
  <spr-logos name="benchmark" />
  <spr-logos name="ecosystem" />
  <spr-logos name="engage" />
  <spr-logos name="finances" />
  <spr-logos name="hr-mobile" />
  <spr-logos name="hr" />
  <spr-logos name="inbound" />
  <spr-logos name="insight" />
  <spr-logos name="instacash" />
  <spr-logos name="instawage" />
  <spr-logos name="payroll" />
  <spr-logos name="performance-plus" />
  <spr-logos name="procurement" />
  <spr-logos name="professional-services" />
  <spr-logos name="recruit" />
  <spr-logos name="recruit-plus" />
  <spr-logos name="sail" />
  <spr-logos name="sidekick" />
  <spr-logos name="wellness" />
</div>

```vue
<template>
  <spr-logos name="benchmark" />
  <spr-logos name="ecosystem" />
  <spr-logos name="engage" />
  <spr-logos name="finances" />
  <spr-logos name="hr-mobile" />
  <spr-logos name="hr" />
  <spr-logos name="inbound" />
  <spr-logos name="insight" />
  <spr-logos name="instacash" />
  <spr-logos name="instawage" />
  <spr-logos name="payroll" />
  <spr-logos name="performance-plus" />
  <spr-logos name="procurement" />
  <spr-logos name="professional-services" />
  <spr-logos name="recruit" />
  <spr-logos name="recruit-plus" />
  <spr-logos name="sail" />
  <spr-logos name="sidekick" />
  <spr-logos name="wellness" />
</template>

<script setup lang="ts">
import SprLogos from "@/components/logos/logos.vue";
</script>
```

## Component API

### Attributes (Props)

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Available Values</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>Specifies the product logo to display.</td>
      <td><code>String</code></td>
      <td><code>'benchmark'</code>, <code>'ecosystem'</code>, <code>'engage'</code>, <code>'finances'</code>, <code>'hr-mobile'</code>, <code>'hr'</code>, <code>'inbound'</code>, <code>'insight'</code>, <code>'instacash'</code>, <code>'instawage'</code>, <code>'payroll'</code>, <code>'performance-plus'</code>, <code>'procurement'</code>, <code>'professional-services'</code>, <code>'recruit'</code>, <code>'recruit-plus'</code>, <code>'sail'</code>, <code>'sidekick'</code>, <code>'wellness'</code></td>
      <td><code>'hr'</code></td>
    </tr>
    <tr>
      <td>theme</td>
      <td>Specifies the color theme of the logo.</td>
      <td><code>String</code></td>
      <td><code>'white'</code>, <code>'dark'</code>, <code>'gray'</code>, <code>'green'</code></td>
      <td><code>'dark'</code></td>
    </tr>
  </tbody>
</table>

<script setup lang="ts">
import SprLogos from "@/components/logos/logos.vue";
</script>
