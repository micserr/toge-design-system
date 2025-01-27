# Badge

A badge is a small, visual indicator used to convey information, status, or count in a concise and attention-grabbing manner. Badges are commonly used in user interfaces to highlight notifications, statuses, or counts associated with an element.

## Key Features

<ul>
  <li><strong>Text:</strong>  Badges typically contain a short piece of text or a number to convey information.
  </li>
  <li><strong>Variant:</strong>  Badges can have different color schemes to indicate various statuses, such as success, danger, or information.
  </li>
  <li><strong>Size:</strong> Badges can come in different sizes to fit various design requirements. (e.g, "big", "small", tiny).
  </li>
    <li><strong>Positioning:</strong> Badges can be positioned relative to the element they are attached to, such as at the top-right or bottom-right corner.
  </li>
</ul>

## Basic Usage

<div class="flex items-center gap-2 p-1">
  <spr-badge variant="disabled" size="big" />
  <spr-badge variant="danger" size="big" />
  <spr-badge variant="information" size="big" />
  <spr-badge variant="brand" size="big" />
</div>

<div class="flex items-center gap-2  p-1">
  <spr-badge  variant="disabled" size="small" />
  <spr-badge  variant="danger" size="small" />
  <spr-badge  variant="information" size="small" />
  <spr-badge  variant="brand" size="small" />
</div>

<div class="flex items-center gap-2  p-1">
  <spr-badge variant="disabled" size="tiny" />
  <spr-badge variant="danger" size="tiny" />
  <spr-badge variant="information" size="tiny" />
  <spr-badge variant="brand" size="tiny" />
</div>

```vue
<div class="flex items-center gap-2 p-1">
  <spr-badge text="9" variant="disabled" size="big" />
  <spr-badge text="9" variant="danger" size="big" />
  <spr-badge text="9" variant="information" size="big" />
  <spr-badge text="9" variant="brand" size="big" />
</div>

<div class="flex items-center gap-2 p-1">
  <spr-badge text="9" variant="disabled" size="small" />
  <spr-badge text="9" variant="danger" size="small" />
  <spr-badge text="9" variant="information" size="small" />
  <spr-badge text="9" variant="brand" size="small" />
</div>

<div class="flex items-center gap-2 p-1">
  <spr-badge variant="disabled" size="tiny" />
  <spr-badge variant="danger" size="tiny" />
  <spr-badge variant="information" size="tiny" />
  <spr-badge variant="brand" size="tiny" />
</div>
```

## Variant

used to customize the background of the badge

<div class="p-1 flex gap-4">
  <spr-badge text="9" variant="disabled" size="big" />
  <spr-badge text="9" variant="danger" size="big" />
  <spr-badge text="9" variant="information" size="big" />
  <spr-badge text="9" variant="brand" size="big" />
</div>

```vue
<div class="flex gap-4 p-1">
  <spr-badge text="9" variant="disabled" size="big" />
  <spr-badge text="9" variant="danger" size="big" />
  <spr-badge text="9" variant="information" size="big" />
  <spr-badge text="9" variant="brand" size="big" />
</div>
```

## Size

<div class="flex gap-4">
  <spr-badge text="0" variant="information" size="tiny" />
  <spr-badge text="0" variant="information" size="small" />
  <spr-badge text="0" variant="information" size="big" />
</div>

```vue
<div class="flex gap-4">
  <spr-badge text="9" variant="information" size="tiny" />
  <spr-badge text="9" variant="information" size="small" />
  <spr-badge text="9" variant="information" size="big" />
</div>
```

## Position

used to display the badge in different positions (top, bottom).

<div class="flex  flex-col gap-4">
  <div class="flex gap-4">
      <spr-badge text="9" variant="brand" size="big" position="top">
        <spr-lozenge label="top"/>
      </spr-badge>
      <spr-badge text="9" variant="brand" size="small" position="top">
        <spr-lozenge label="top"/>
      </spr-badge>    
      <spr-badge text="9" variant="brand" size="tiny" position="top">
        <spr-lozenge label="top"/>
      </spr-badge>
  </div>

  <div class="flex gap-4">
      <spr-badge text="9" variant="information" size="big" position="bottom">
        <spr-lozenge label="bottom"/>
      </spr-badge>
      <spr-badge text="9" variant="information" size="small" position="bottom">
        <spr-lozenge label="bottom"/>
      </spr-badge>    
      <spr-badge text="9" variant="information" size="tiny" position="bottom">
        <spr-lozenge label="bottom"/>
      </spr-badge>
  </div>

  <div class="flex gap-4">
      <spr-badge text="9" variant="danger" size="big" >
        <spr-lozenge label="default"/>
      </spr-badge>
      <spr-badge text="9" variant="danger" size="small">
        <spr-lozenge label="default"/>
      </spr-badge>    
      <spr-badge text="9" variant="danger" size="tiny">
        <spr-lozenge label="default"/>
      </spr-badge>
  </div>
</div>

```vue
<div class="flex  flex-col gap-4">
  <div class="flex gap-4">
      <spr-badge text="9" variant="brand" size="big" position="top">
        <spr-lozenge label="top"/>
      </spr-badge>
      <spr-badge text="9" variant="brand" size="small" position="top">
        <spr-lozenge label="top"/>
      </spr-badge>
      <spr-badge text="9" variant="brand" size="tiny" position="top">
        <spr-lozenge label="top"/>
      </spr-badge>
  </div>

  <div class="flex gap-4">
      <spr-badge text="9" variant="information" size="big" position="bottom">
        <spr-lozenge label="bottom"/>
      </spr-badge>
      <spr-badge text="9" variant="information" size="small" position="bottom">
        <spr-lozenge label="bottom"/>
      </spr-badge>
      <spr-badge text="9" variant="information" size="tiny" position="bottom">
        <spr-lozenge label="bottom"/>
      </spr-badge>
  </div>

  <div class="flex gap-4">
      <spr-badge text="9" variant="danger" size="big" >
        <spr-lozenge label="default"/>
      </spr-badge>
      <spr-badge text="9" variant="danger" size="small">
        <spr-lozenge label="default"/>
      </spr-badge>
      <spr-badge text="9" variant="danger" size="tiny">
        <spr-lozenge label="default"/>
      </spr-badge>
  </div>
</div>
```

### Position - default using slot

When using the default position, use can use the slot to wrap the element to which you want to attach the badge.

  <div class="flex gap-4">
      <spr-badge text="9" variant="brand" size="big" position="top">
        <spr-lozenge label="top"/>
      </spr-badge>
      <spr-badge text="9" variant="brand" size="small" position="top">
        <spr-lozenge label="top"/>
      </spr-badge>
      <spr-badge text="9" variant="brand" size="tiny" position="top">
        <spr-lozenge label="top"/>
      </spr-badge>
  </div>

```vue
<div class="flex gap-4">
    <spr-badge text="9" variant="brand" size="big" position="top">
      <spr-lozenge label="top"/>
    </spr-badge>
    <spr-badge text="9" variant="brand" size="small" position="top">
      <spr-lozenge label="top"/>
    </spr-badge>
    <spr-badge text="9" variant="brand" size="tiny" position="top">
      <spr-lozenge label="top"/>
    </spr-badge>
</div>
```

### Position - default without using slot

When using the default position, use can use the slot to wrap the element to which you want to attach the badge.

  <div class="flex gap-4">
      <spr-lozenge label="notification"/>
      <spr-badge text="9" variant="brand" size="big"/>
      <spr-badge text="9" variant="disabled" size="big"/>
      <spr-badge text="9" variant="information" size="big"/>
      <spr-badge text="9" variant="danger" size="big"/>
  </div>

```vue
<div class="flex gap-4">
    <spr-lozenge label="notification"/>
    <spr-badge text="9" variant="brand" size="big"/>
    <spr-badge text="9" variant="disabled" size="big"/>
    <spr-badge text="9" variant="information" size="big"/>
    <spr-badge text="9" variant="danger" size="big"/>
</div>
```

<script lang="ts" setup>
import { ref } from 'vue';

import SprBadge from "@/components/badge/badge.vue"
import SprLozenge from '@/components/lozenge/lozenge.vue';
</script>
