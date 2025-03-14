---
outline: 'deep'
---

# Chips

Interactive chip elements for various use cases like filtering, selection, and tags.

## Basic Usage

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips label="Basic Chip" />
</div>

```vue
<spr-chips label="Basic Chip" />
```

## With Icons

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips :active="activeIcon.isIconActive1" label="Regular Icon" icon="ph:airplane-landing" @update="(e) => handleUpdate('isIconActive1', e)"/>
  <spr-chips :active="activeIcon.isIconActive2" label="Bold Icon" icon="ph:airplane-landing" icon-weight="bold" @update="(e) => handleUpdate('isIconActive2', e)" />
  <spr-chips :active="activeIcon.isIconActive3" label="Fill Icon" icon="ph:airplane-landing" icon-weight="fill" @update="(e) => handleUpdate('isIconActive3', e)" />
</div>

```vue
<template>
  <spr-chips
    :active="activeIcon.isIconActive1"
    label="Regular Icon"
    icon="ph:airplane-landing"
    @update="(e) => handleUpdate('isIconActive1', e)"
  />
  <spr-chips
    :active="activeIcon.isIconActive2"
    label="Bold Icon"
    icon="ph:airplane-landing"
    icon-weight="bold"
    @update="(e) => handleUpdate('isIconActive2', e)"
  />
  <spr-chips
    :active="activeIcon.isIconActive3"
    label="Fill Icon"
    icon="ph:airplane-landing"
    icon-weight="fill"
    @update="(e) => handleUpdate('isIconActive3', e)"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { PhAirplane } from '@phosphor-icons/vue';

const activeIcon = ref({
  isIconActive1: false,
  isIconActive2: false,
  isIconActive3: false,
});

const handleUpdate = (key, value) => {
  activeIcon.value[key] = value;

  console.log(`Chip is now ${value ? 'active' : 'inactive'}`);
};
</script>
```

## With Badge

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips :active="activeIcon.isBadgeActive1" label="Brand Badge" badge badge-text="1" badge-variant="brand" @update="(e) => handleUpdate('isBadgeActive1', e)"/>
  <spr-chips :active="activeIcon.isBadgeActive2" label="Danger Badge" badge badge-text="2" badge-variant="danger" @update="(e) => handleUpdate('isBadgeActive2', e)"/>
  <spr-chips :active="activeIcon.isBadgeActive3" label="Disabled Badge" badge badge-text="3" badge-variant="disabled" @update="(e) => handleUpdate('isBadgeActive3', e)"/>
</div>

```vue
<template>
  <spr-chips
    :active="activeIcon.isBadgeActive1"
    label="Brand Badge"
    badge
    badge-text="1"
    badge-variant="brand"
    @update="(e) => handleUpdate('isBadgeActive1', e)"
  />
  <spr-chips
    :active="activeIcon.isBadgeActive2"
    label="Danger Badge"
    badge
    badge-text="2"
    badge-variant="danger"
    @update="(e) => handleUpdate('isBadgeActive2', e)"
  />
  <spr-chips
    :active="activeIcon.isBadgeActive3"
    label="Disabled Badge"
    badge
    badge-text="3"
    badge-variant="disabled"
    @update="(e) => handleUpdate('isBadgeActive3', e)"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeIcon = ref({
  isBadgeActive1: true,
  isBadgeActive2: true,
  isBadgeActive3: true,
});

const handleUpdate = (key, value) => {
  activeIcon.value[key] = value;

  console.log(`Chip is now ${value ? 'active' : 'inactive'}`);
};
</script>
```

## Interactive States

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips :active="activeIcon.isToggleActive5" label="Toggleable" @update="(e) => handleUpdate('isToggleActive5', e)"/>
  <spr-chips :active="activeIcon.isToggleActive6" label="Closable" closable @close="handleClose"  :visible="visible" @update="(e) => handleUpdate('isToggleActive6', e)"/>
  <spr-chips disabled label="Disabled" />
</div>

```vue
<template>
  <spr-chips :active="isToggleActive5" label="Toggleable" @update="(e) => handleUpdate('isToggleActive5', e)" />
  <spr-chips
    :active="isToggleActive6"
    label="Closable"
    closable
    @close="handleClose"
    :visible="visible"
    @update="(e) => handleUpdate('isToggleActive6', e)"
  />
  <spr-chips disabled label="Disabled" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeIcon = ref({
  isToggleActive5: true,
  isToggleActive6: true,
});

const handleClose = () => {
  console.log('Chip closed');
};

const handleUpdate = (key, value) => {
  activeIcon.value[key] = value;

  console.log(`Chip is now ${value ? 'active' : 'inactive'}`);
};
</script>
```

## Days Chips

Special variant for weekday selection.

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
      @click="handleDayClick(day)"
      variant="day"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

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
</script>
```

## API Reference

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
      <td>chip text content</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>size</td>
      <td>chip size</td>
      <td>'sm' | 'md' | 'lg'</td>
      <td>'md'</td>
    </tr>
    <tr>
      <td>active</td>
      <td>whether the chip is active</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>disable the chip</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>show close button</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>leading icon</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>iconWeight</td>
      <td>icon weight style</td>
      <td>'regular' | 'bold' | 'thin' | 'light' | 'fill' | 'duotone'</td>
      <td>'regular'</td>
    </tr>
    <tr>
      <td>badge</td>
      <td>show badge</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>badgeText</td>
      <td>badge content</td>
      <td>string</td>
      <td>'0'</td>
    </tr>
    <tr>
      <td>badgeVariant</td>
      <td>badge style variant</td>
      <td>'brand' | 'danger' | 'success'</td>
      <td>'brand'</td>
    </tr>
    <tr>
      <td>visible</td>
      <td>badge Visibility</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>day</td>
      <td>day of the week</td>
      <td>'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'</td>
      <td>required</td>
    </tr>
    <tr>
      <td>@update</td>
      <td>emitted when active state changes</td>
      <td>function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>@close</td>
      <td>emitted when close button is clicked</td>
      <td>function</td>
      <td>-</td>
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
