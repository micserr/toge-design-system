---
outline: 'deep'
---

# Chips Component

The `spr-chips` component provides interactive elements for filtering, selection, tagging, and displaying small pieces of information. Chips are compact, versatile UI elements that can include text, icons, avatars, and badges.

## Overview

Chips in the Sprout Design System offer:

- Interactive states (active, disabled, closable)
- Support for icons, avatars, and badges
- Special variants for day selection
- Customizable appearance with various props

## Basic Usage

At its simplest, a chip displays a text label. The chip can be in either an active or inactive state, controlled through the `active` prop.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips label="Basic Chip" />
  <spr-chips label="Active Chip" :active="true" />
</div>

```vue
<template>
  <!-- Default inactive chip -->
  <spr-chips label="Basic Chip" />

  <!-- Active chip -->
  <spr-chips label="Active Chip" :active="true" />
</template>

<script lang="ts" setup>
import SprChips from '@/components/chips/chips.vue';
</script>
```

Chips can be used for various purposes:

- As filter options in search interfaces
- For selecting categories or tags
- To display applied filters that can be removed
- As toggleable option selectors

## Chips with Icons

Icons can enhance the visual meaning of chips and make them more recognizable. The `icon` prop accepts Iconify icon names, and the `icon-weight` prop allows you to control the icon's style.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips :active="activeIcon.isIconActive1" label="Regular Icon" icon="ph:airplane-landing" @update="(e) => handleUpdate('isIconActive1', e)"/>
  <spr-chips :active="activeIcon.isIconActive2" label="Bold Icon" icon="ph:airplane-landing" icon-weight="bold" @update="(e) => handleUpdate('isIconActive2', e)" />
  <spr-chips :active="activeIcon.isIconActive3" label="Fill Icon" icon="ph:airplane-landing" icon-weight="fill" @update="(e) => handleUpdate('isIconActive3', e)" />
</div>

```vue
<template>
  <!-- Regular weight icon -->
  <spr-chips
    :active="activeChips.flight"
    label="Regular Icon"
    icon="ph:airplane-landing"
    @update="(value) => updateChip('flight', value)"
  />

  <!-- Bold weight icon -->
  <spr-chips
    :active="activeChips.flightBold"
    label="Bold Icon"
    icon="ph:airplane-landing"
    icon-weight="bold"
    @update="(value) => updateChip('flightBold', value)"
  />

  <!-- Fill weight icon -->
  <spr-chips
    :active="activeChips.flightFill"
    label="Fill Icon"
    icon="ph:airplane-landing"
    icon-weight="fill"
    @update="(value) => updateChip('flightFill', value)"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SprChips from '@/components/chips/chips.vue';

const activeChips = ref({
  flight: false,
  flightBold: false,
  flightFill: false,
});

const updateChip = (key, value) => {
  activeChips.value[key] = value;
  console.log(`Chip ${key} is now ${value ? 'active' : 'inactive'}`);
};
</script>
```

### Available Icon Weights

The component supports several icon weights to match your design needs:

- `regular` (default) - Standard weight icons
- `bold` - Heavier weight for emphasis
- `fill` - Solid filled version
- `thin` - Lighter weight
- `light` - Slightly lighter than regular
- `duotone` - Two-tone style

## Chips with Avatars

Chips can include avatars to represent users, clients, or any entity. The chip uses the `spr-avatar` component internally, supporting different avatar variants.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips
    label="User Image"
    :avatar-url="'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'"
    :avatar-variant="'image'"
  />
  <spr-chips
    label="Client Icon"
    :avatar-variant="'client'"
  />
  <spr-chips
    label="User Icon"
    :avatar-variant="'user'"
  />
</div>

```vue
<template>
  <!-- Chip with image avatar -->
  <spr-chips
    label="User Image"
    :avatar-url="'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'"
    :avatar-variant="'image'"
  />

  <!-- Chip with client icon avatar -->
  <spr-chips label="Client Icon" :avatar-variant="'client'" />

  <!-- Chip with user icon avatar -->
  <spr-chips label="User Icon" :avatar-variant="'user'" />
</template>

<script lang="ts" setup>
import SprChips from '@/components/chips/chips.vue';
</script>
```

You can also use the `avatar-initials` prop to display text initials instead of an image:

```vue
<spr-chips label="John Doe" :avatar-variant="'text'" avatar-initials="JD" />
```

## Chips with Badges

Badges can be added to chips to display counts, status indicators, or other small pieces of information. Set the `badge` prop to `true` and use `badge-text` and `badge-variant` to customize the badge.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips :active="activeIcon.isBadgeActive1" label="Brand Badge" badge badge-text="1" badge-variant="brand" @update="(e) => handleUpdate('isBadgeActive1', e)"/>
  <spr-chips :active="activeIcon.isBadgeActive2" label="Danger Badge" badge badge-text="2" badge-variant="danger" @update="(e) => handleUpdate('isBadgeActive2', e)"/>
  <spr-chips :active="activeIcon.isBadgeActive3" label="Disabled Badge" badge badge-text="3" badge-variant="disabled" @update="(e) => handleUpdate('isBadgeActive3', e)"/>
</div>

```vue
<template>
  <!-- Chip with brand variant badge -->
  <spr-chips
    :active="filterCounts.messages"
    label="Messages"
    badge
    badge-text="1"
    badge-variant="brand"
    @update="(value) => updateFilter('messages', value)"
  />

  <!-- Chip with danger variant badge -->
  <spr-chips
    :active="filterCounts.alerts"
    label="Alerts"
    badge
    badge-text="2"
    badge-variant="danger"
    @update="(value) => updateFilter('alerts', value)"
  />

  <!-- Chip with disabled variant badge -->
  <spr-chips
    :active="filterCounts.tasks"
    label="Tasks"
    badge
    badge-text="3"
    badge-variant="disabled"
    @update="(value) => updateFilter('tasks', value)"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SprChips from '@/components/chips/chips.vue';

const filterCounts = ref({
  messages: true,
  alerts: true,
  tasks: true,
});

const updateFilter = (key, value) => {
  filterCounts.value[key] = value;
  console.log(`Filter ${key} is now ${value ? 'active' : 'inactive'}`);
};
</script>
```

### Badge Variants

Badges in chips support these variants:

- `brand`: Uses the primary brand color
- `danger`: Red color for errors or alerts
- `disabled`: Gray color for unavailable or inactive items

## Interactive States

Chips can have different interactive states to provide a rich user experience.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips :active="activeIcon.isToggleActive5" label="Toggleable" @update="(e) => handleUpdate('isToggleActive5', e)"/>
  <spr-chips :active="activeIcon.isToggleActive6" label="Closable" closable @close="handleClose" :visible="visible" @update="(e) => handleUpdate('isToggleActive6', e)"/>
  <spr-chips disabled label="Disabled" />
</div>

```vue
<template>
  <!-- Toggleable chip that changes active state when clicked -->
  <spr-chips :active="chipStates.toggle" label="Toggleable" @update="(value) => updateChipState('toggle', value)" />

  <!-- Closable chip with close button -->
  <spr-chips
    :active="chipStates.closable"
    label="Closable"
    closable
    :visible="chipVisible"
    @close="handleChipClose"
    @update="(value) => updateChipState('closable', value)"
  />

  <!-- Disabled chip that cannot be interacted with -->
  <spr-chips disabled label="Disabled" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SprChips from '@/components/chips/chips.vue';

const chipStates = ref({
  toggle: true,
  closable: true,
});

const chipVisible = ref(true);

const updateChipState = (key, value) => {
  chipStates.value[key] = value;
  console.log(`Chip ${key} is now ${value ? 'active' : 'inactive'}`);
};

const handleChipClose = () => {
  console.log('Chip closed');
  chipVisible.value = false;
  // You might also want to remove the chip from your data structure here
};
</script>
```

### Interaction Types

1. **Toggleable**: All chips are toggleable by default. Clicking them will toggle between active and inactive states.
2. **Closable**: Adding the `closable` prop adds a close button that emits a `close` event when clicked.
3. **Disabled**: The `disabled` prop renders the chip in a non-interactive state with disabled styling.

When a chip is closed, you should update your data structures accordingly. The `visible` prop controls whether the chip is rendered at all.

## Day Selection Chips

The chip component includes a special `day` variant specifically designed for weekday selection interfaces. This variant displays the first letter of each day and has a circular appearance.

<div class="spr-flex spr-items-center spr-gap-1 spr-rounded-md spr-bg-white-50 spr-p-4">
  <spr-chips
    v-for="day in days"
    :key="day"
    :day="day"
    :active="activeDays[day]"
    @update="(value) => updateDayActive(day, value)"
    @click="handleDayClick(day)"
    variant="day"
  />
</div>

```vue
<template>
  <div class="spr-flex spr-items-center spr-gap-1">
    <spr-chips
      v-for="day in days"
      :key="day"
      :day="day"
      :active="activeDays[day]"
      @update="(value) => updateDayActive(day, value)"
      variant="day"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SprChips from '@/components/chips/chips.vue';

// Array of all days of the week
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Reactive object to track active state of each day
const activeDays = ref({
  Sunday: false,
  Monday: false,
  Tuesday: false,
  Wednesday: false,
  Thursday: false,
  Friday: false,
  Saturday: false,
});

// Update function to toggle day state
const updateDayActive = (day, value) => {
  activeDays.value[day] = value;
  console.log(`Day ${day} is now ${value ? 'active' : 'inactive'}`);
};
</script>
```

### Usage Examples

The day selection chips are particularly useful for:

- Recurring schedule selection in calendar applications
- Setting availability or business hours
- Configuring repeating events or tasks

::: tip
For more complex date selection needs, consider combining day chips with the DatePicker component.
:::

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
      <td>label</td>
      <td>The text content displayed in the chip</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Controls the size of the chip</td>
      <td>'sm' | 'md' | 'lg'</td>
      <td>'md'</td>
    </tr>
    <tr>
      <td>active</td>
      <td>Determines if the chip is in an active/selected state</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>When true, makes the chip non-interactive and applies disabled styling</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>When true, displays a close button that emits a close event when clicked</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>variant</td>
      <td>Changes the appearance and behavior of the chip</td>
      <td>'tag' | 'day'</td>
      <td>'tag'</td>
    </tr>
    <tr>
      <td colspan="4"><b>Icon Props</b></td>
    </tr>
    <tr>
      <td>icon</td>
      <td>Iconify icon name to display before the label</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>iconWeight</td>
      <td>The visual weight/style of the icon</td>
      <td>'regular' | 'bold' | 'thin' | 'light' | 'fill' | 'duotone'</td>
      <td>'regular'</td>
    </tr>
    <tr>
      <td>closeIconSize</td>
      <td>Size of the close icon in pixels (when closable is true)</td>
      <td>number</td>
      <td>16</td>
    </tr>
    <tr>
      <td colspan="4"><b>Avatar Props</b></td>
    </tr>
    <tr>
      <td>avatarUrl</td>
      <td>URL of the image to display in the avatar</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>avatarVariant</td>
      <td>Type of avatar to display</td>
      <td>'image' | 'text' | 'client' | 'user'</td>
      <td>''</td>
    </tr>
    <tr>
      <td>avatarInitials</td>
      <td>Text initials to display when avatarVariant is 'text'</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td colspan="4"><b>Badge Props</b></td>
    </tr>
    <tr>
      <td>badge</td>
      <td>When true, displays a badge on the chip</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>badgeText</td>
      <td>Text content of the badge (typically a number)</td>
      <td>string</td>
      <td>'0'</td>
    </tr>
    <tr>
      <td>badgeVariant</td>
      <td>Visual style of the badge</td>
      <td>'brand' | 'danger' | 'disabled'</td>
      <td>'brand'</td>
    </tr>
    <tr>
      <td colspan="4"><b>Other Props</b></td>
    </tr>
    <tr>
      <td>visible</td>
      <td>Controls whether the chip is rendered at all</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>day</td>
      <td>Day name for the day variant (required when variant is 'day')</td>
      <td>'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>update</td>
      <td>Emitted when the chip's active state changes, typically when clicked</td>
      <td>(value: boolean): The new active state</td>
    </tr>
    <tr>
      <td>close</td>
      <td>Emitted when the close button is clicked (when closable is true)</td>
      <td>(event: MouseEvent | KeyboardEvent): The original DOM event</td>
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
      <td>icon</td>
      <td>Custom content for the icon area</td>
    </tr>
    <tr>
      <td>close-icon</td>
      <td>Custom content for the close button icon</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import SprChips from '@/components/chips/chips.vue';

const activeIcon = ref({
  // Icon chips states
  isIconActive1:false,
  isIconActive2:false,
  isIconActive3:false,

  // Badge chips states
  isBadgeActive1:true,
  isBadgeActive2:true,
  isBadgeActive3:true,
  // Interactive states
  isToggleActive5:true,
  isToggleActive6:true,
})

// Icon chips states
const isIconActive1 = ref(false);
const isIconActive2 = ref(false);
const isIconActive3 = ref(false);

// Badge chips states
const isBadgeActive1 = ref(true);
const isBadgeActive2 = ref(true);
const isBadgeActive3 = ref(true);

// Interactive states
const isToggleActive5 = ref(true);
const isToggleActive6 = ref(true);

// Days chips visible state
const visible = ref(true);

// Days chips states
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const activeDays = ref({
  Sunday: false,
  Monday: false,
  Tuesday: false,
  Wednesday: false,
  Thursday: false,
  Friday: false,
  Saturday: false,
});

const updateDayActive = (day, value) => {
  activeDays.value[day] = value;
  console.log(`Day ${day} is now ${value ? 'active' : 'inactive'}`);
};

const handleDayClick = (day) => {
  console.log(`Clicked on ${day}`);
};

const handleClose = () => {
  console.log('Chip closed');
  visible.value = false;
};

const handleUpdate = (key,value) => {
  activeIcon.value[key] = value

  console.log(`Chip is now ${value ? 'active' : 'inactive'}`);
};
</script>
