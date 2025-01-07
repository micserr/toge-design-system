# Badge

A status to indicate a notification.

## Key Features

<ul>
  <li><strong>Text:</strong> The main text displayed on the badge.
  </li>
  <li><strong>Variant:</strong> A property that likely changes the visual style of the badge to indicate different statuses or types (e.g., "brand", "information", "danger", "disabled").
  </li>
  <li><strong>Size:</strong> A property to specify the size of the badge (e.g, "big", "small", tiny).
  </li>
</ul>

## Basic Usage

<div class="tw-flex tw-items-center tw-gap-2">
<spr-badge text="9" variant="danger"size="big">
    <spr-lozenge
      label="Notification"
    />
</spr-badge>

<spr-badge text="99+" variant="danger"size="big">
<spr-lozenge
      label="Notification"
    />
</spr-badge>

<spr-badge text="9" variant="disabled"size="small">
<spr-lozenge
      label="Notification"
    />
</spr-badge>
<spr-badge text="99+"  size="small"  variant="information">
<spr-lozenge
      label="Notification"
    />
</spr-badge>
<spr-badge  size="tiny"  variant="brand">
<spr-lozenge
      label="Notification"
    />
</spr-badge>

</div>

```vue
<spr-badge text="9" variant="danger" size="big">
    <spr-lozenge
      label="Notification"
    />
</spr-badge>

<spr-badge text="99+" variant="danger" size="big">
    <spr-lozenge
      label="Notification"
    />
</spr-badge>

<spr-badge text="9" variant="disabled" size="small">
    <spr-lozenge
      label="Notification"
    />
</spr-badge>
<spr-badge text="99+" size="small" variant="information">
    <spr-lozenge
      label="Notification"
    />
</spr-badge>
<spr-badge size="tiny" variant="brand">
    <spr-lozenge
      label="Notification"
    />
</spr-badge>

<script setup lang="ts">
import SprBadge from '@/components/badge/badge.vue';
import SprLozenge from '@/components/lozenge/lozenge.vue';
</script>
```

## Variant

used to customize the background of the badge

<div class="tw-flex tw-gap-4">
  <spr-badge size="small" variant="brand" text="99+">
      <spr-lozenge
        label="brand"
      />
  </spr-badge>

  <spr-badge size="small" variant="danger" text="99+">
      <spr-lozenge
        label="danger"
      />
  </spr-badge>

  <spr-badge size="small" variant="information" text="99+">
      <spr-lozenge
        label="information"
      />
  </spr-badge>

  <spr-badge size="small" variant="disabled" text="99+">
      <spr-lozenge
        label="disabled"
      />
  </spr-badge>
  
</div>

```vue
<spr-badge size="small" variant="brand" text="99+">
      <spr-lozenge
        label="brand"
      />
  </spr-badge>

<spr-badge size="small" variant="danger" text="99+">
      <spr-lozenge
        label="danger"
      />
  </spr-badge>

<spr-badge size="small" variant="information" text="99+">
      <spr-lozenge
        label="information"
      />
  </spr-badge>

<spr-badge size="small" variant="disabled" text="99+">
      <spr-lozenge
        label="disabled"
      />
  </spr-badge>
```

## Size

<div class="tw-flex tw-gap-4 tw-flex-col">
  <div class="tw-flex tw-gap-4">
   <spr-badge size="tiny" variant="brand">
      <spr-lozenge
        label="tiny"
      />
  </spr-badge>

  <spr-badge size="small" variant="brand">
      <spr-lozenge
        label="small"
      />
  </spr-badge>

  <spr-badge size="big" variant="brand">
      <spr-lozenge
        label="big"
      />
  </spr-badge>
  </div>

  <div class="tw-flex tw-gap-4">
   <spr-badge size="tiny" variant="information">
      <spr-lozenge
        label="tiny"
      />
  </spr-badge>

  <spr-badge size="small" variant="information">
      <spr-lozenge
        label="small"
      />
  </spr-badge>

  <spr-badge size="big" variant="information">
      <spr-lozenge
        label="big"
      />
  </spr-badge>
  </div>

  <div class="tw-flex tw-gap-4">
   <spr-badge size="tiny" variant="danger">
      <spr-lozenge
        label="tiny"
      />
  </spr-badge>

  <spr-badge size="small" variant="danger">
      <spr-lozenge
        label="small"
      />
  </spr-badge>

  <spr-badge size="big" variant="danger">
      <spr-lozenge
        label="big"
      />
  </spr-badge>
  </div>

  <div class="tw-flex tw-gap-4">
   <spr-badge size="tiny" variant="disabled">
      <spr-lozenge
        label="tiny"
      />
  </spr-badge>

  <spr-badge size="small" variant="disabled">
      <spr-lozenge
        label="small"
      />
  </spr-badge>

  <spr-badge size="big" variant="disabled">
      <spr-lozenge
        label="big"
      />
  </spr-badge>
  </div>
</div>

```vue
<spr-badge size="tiny" variant="brand">
      <spr-lozenge
        label="tiny"
      />
  </spr-badge>

<spr-badge size="small" variant="brand">
      <spr-lozenge
        label="small"
      />
  </spr-badge>

<spr-badge size="big" variant="brand">
      <spr-lozenge
        label="big"
      />
  </spr-badge>
```

## Slot

used to customize the content that will use a badge

<div class="tw-flex tw-gap-4">
  <spr-badge size="tiny" variant="brand">
      <spr-lozenge
        label="Notification"
      />
  </spr-badge>

  <spr-badge size="small" variant="danger">
      <spr-lozenge
        label="Notification"
      />
  </spr-badge>

  <spr-badge size="big" variant="information">
      <spr-lozenge
        label="Notification"
      />
  </spr-badge>
</div>

```vue
<spr-badge size="tiny" variant="brand">
      <spr-lozenge
        label="Notification"
      />
  </spr-badge>

<spr-badge size="small" variant="danger">
      <spr-lozenge
        label="Notification"
      />
  </spr-badge>

<spr-badge size="big" variant="information">
      <spr-lozenge
        label="Notification"
      />
  </spr-badge>
```

<script setup lang="ts">
  import { ref } from 'vue';
  import SprBadge from "@/components/badge/badge.vue"
  
import SprLozenge from '@/components/lozenge/lozenge.vue';

</script>
