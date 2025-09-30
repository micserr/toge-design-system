---
outline: 'deep'
---

# Table

## Basic Usage

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table action :headers="headers" :data-table="data" variant="white" >
    <div>
      Customize your content here!
    </div>
    <template #action="{ row }">
      <spr-lozenge :label="row.status.title" :tone="row.status.title.toLowerCase()" />
    </template>
    <template #action-name>
      Status
    </template>
  </spr-table>
</div>

```vue
<template>
  <spr-table action :headers="headers" :data-table="data">
    <div>Customize your content here!</div>
    <template #action="{ row }">
      <spr-lozenge :label="row.status.title" :tone="row.status.title.toLowerCase()" />
    </template>
    <template #action-name> Status </template>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const headers = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false },
]);

const data = ref([
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
]);
</script>
```

## No Slot and Action

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table  :headers="headers" :data-table="data"/>
</div>

```vue
<template>
  <spr-table :headers="headers" :data-table="data" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const headers = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false },
]);

const data = ref([
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
]);
</script>
```

## Table Actions

The implementation for the search field here is to emit and trigger an API call to update the data-table
<spr-table action :headers="headers" :data-table="data" :table-actions="tableActions" v-model:searchModel="searchModel"></spr-table>

```vue
<template>
  <spr-table
    action
    :headers="headers"
    :data-table="data"
    :table-actions="tableActions"
    v-model:searchModel="searchModel"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const headers = ref([
  // Fill this with your headers
]);

const data = ref([
  // Fill this with your data
]);

const tableActions = ref({
  // Toggle this to true if you need search field
  search: true,
  // Toggle this to t rue if you need filter field
  filter: true,
  // Toggle this to true if you need option field
  option: true,
});

const searchModel = ref('');

watch(searchModel, (newValue) => {
  console.log(newValue);
  // On change of the search variable trigger a fetch
  // fetchApiHere();
});
</script>
```

### Table Action Slot

<spr-table action :headers="headers" :data-table="data" :table-actions="tableActions" v-model:searchModel="searchModel">
  <div>
    <div class="spr-text-color-strong spr-font-size-400 spr-font-weight-medium">Table Name</div>
    <div>table description</div>
  </div>
  <template #tableActionSection>
    <spr-button>Button</spr-button>
  </template>
</spr-table>

```vue
<template>
  <spr-table
    action
    :headers="headers"
    :data-table="data"
    :table-actions="tableActions"
    v-model:searchModel="searchModel"
  >
    <div>
      <div class="spr-text-color-strong spr-font-size-400 spr-font-weight-medium">Table Name</div>
      <div>table description</div>
    </div>
    <template #tableActionSection>
      <spr-button>Button</spr-button>
    </template>
  </spr-table>
</template>
```

## Multi Select

Allows the selection of multiple or all rows in the table.

::: warning

<ul>
  <li>If table is paginated, only the rows on the current page will be selected.</li>
  <li><strong>selectedKeyId</strong> prop must be provided.</li>
  <li><strong>title</strong> value of the table data object mapped with <strong>selectedKeyId</strong> in the table data must be unique.</li>
</ul>  
:::

::: tip
Set the prop <strong>returnCompleteSelectedProperties</strong> to <strong>false</strong> to return the selected data as an array of objects with the <strong>selectedKeyId</strong> value only.
:::

<code>
  {{ selectedTableData }}
</code>

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table 
    action 
    :headers="headers" 
    :data-table="data" 
    variant="white" 
    :is-multi-select="true" 
    :selected-key-id="'name'"
    :return-complete-selected-properties="false"
    @update:selected-data="handleSelectedData"
  >
    <template #action="{ row }">
      <spr-lozenge :label="row.status.title" :tone="row.status.title.toLowerCase()" />
    </template>
    <template #action-name>
      Status
    </template>
  </spr-table>
</div>

```vue
<template>
  <spr-table
    action
    :headers="headers"
    :data-table="data"
    variant="white"
    :is-multi-select="true"
    :selected-key-id="'name'"
    :return-complete-selected-properties="false"
    @update:selectedData="handleSelectedData"
  >
    <template #action="{ row }">
      <spr-lozenge :label="row.status.title" :tone="row.status.title.toLowerCase()" />
    </template>
    <template #action-name> Status </template>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedTableData = ref([]);
const headers = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false },
]);
const data = ref([
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'Shift 1',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 01, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Pending',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'Shift 2',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 01, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Pending',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'Shift 3',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 01, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Pending',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'Shift 4',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 01, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Pending',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'Shift 5',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 01, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Pending',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
]);

const handleSelectedData = (data) => {
  // do anything with the selected data
  selectedTableData.value = [...data];
};
</script>
```

## Custom Column

You can customize the column of the table by using the dynamically named slot column field (the field property in the headers object).

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
    <spr-table
      action
      :headers="headers"
      :data-table="data2"
    >
      <template #name="{ row }">
        <spr-tooltip :has-max-width="true" :text="String(row.name.title)">
          <div ref="rowTitleRef" class="spr-truncate spr-text-sm" :style="`max-width: ${getCellMaxWidth}`">{{ row.name.title }}</div>
        </spr-tooltip>
        <span class="spr-text-color-base spr-text-xs spr-font-normal">{{ row.name.subtext }}</span>
      </template>
      <template #action>
        <div class="spr-flex spr-flex-auto spr-justify-end spr-gap-2">
          <spr-button variant="primary" tone="success" size="small"> Action 1 </spr-button>
          <spr-button variant="primary" tone="danger" size="small"> Action 2 </spr-button>
        </div>
      </template>
    </spr-table>
</div>
    
```vue {7}
<template>
  <spr-table
    action
    :headers="headers"
    :data-table="data"
  >
    <template #name="{ row }"> //slot name is the field property value in the headers object
      <spr-tooltip :has-max-width="true" :text="String(row.name.title)">
        <div 
          ref="rowTitleRef" 
          class="spr-truncate spr-text-sm" 
          :style="`max-width: ${getCellMaxWidth}`"
        >
          {{ row.name.title }}
        </div>
      </spr-tooltip>
      <span class="spr-text-color-base spr-text-xs spr-font-normal">{{ row.name.subtext }}</span>
    </template>
    <template #action>
      <div class="spr-flex spr-flex-auto spr-justify-end spr-gap-2">
        <spr-button variant="primary" tone="success" size="small"> Action 1 </spr-button>
        <spr-button variant="primary" tone="danger" size="small"> Action 2 </spr-button>
      </div>
    </template>
  </spr-table>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';

const rowTitleRef = ref<HTMLElement|null>(null);
const cellWidth = ref(0)

const getCellMaxWidth = computed(() => {
return cellWidth.value > 0 ? `${cellWidth.value}px` : '100%'
})

const headers = ref([
{ field: 'name', name: 'Role Name', sort: true, hasAvatar: true, hasSubtext: true },
{ field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false },
]);

const data = ref([
{
name: {
title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem minus fugiat culpa ad magnam nisi ex facilis ducimus sit neque modi porro optio cupiditate iusto, blanditiis asperiores aperiam veritatis mollitia laboriosam? Consectetur, deserunt? Reprehenderit ipsa, debitis eaque accusamus ducimus quasi deserunt laborum asperiores ea, nemo, optio corporis rerum! Veniam ex voluptatibus eveniet consequuntur saepe doloribus sint laboriosam eligendi sequi esse vero, quam consectetur iste inventore aliquam soluta quibusdam at perferendis ratione, voluptatum accusantium amet dignissimos perspiciatis. Aspernatur, voluptate amet.',
subtext: 'Lorem ipsectetur adipiscing elit.',
image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
},
lastUpdate: {
title: 'Nov 30, 2025',
subtext: 'Lorem ipsum dolor ',
image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
},
status: {
title: 'Success',
subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
},
},
{
name: {
title: 'Shift 1',
subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
},
lastUpdate: {
title: 'Nov 01, 2025',
subtext: 'Lorem ipsum dolor ',
image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
},
status: {
title: 'Pending',
subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
},
}
]);

</script>
```

## Custom Tailwind Classes for Headers

You can customize the header cells with Tailwind CSS classes by using the `customTailwindClasses` property in the header configuration.

::: warning
Utilizing this field will remove all of the existing tailwind classes on the header only (th) the classes of the main DIV which holds the name, icon and badge will still take effect. Additionally, the only tested tailwind classes for this is the spr- tailwind classes. If you're using your own tailwind configurations, the component may not behave as expected. Additionally, changing the class of the multi-select header is currently not supported.
:::

<spr-table :headers="customHeaders" :data-table="data">
  <template #header="{ column }">
    <div :class="column.customTailwindClasses">
      {{ column.name }}
    </div>
  </template>
</spr-table>

```vue
<template>
  <spr-table :headers="headers" :data-table="data">
    <template #header="{ column }">
      <div :class="column.customTailwindClasses">
        {{ column.name }}
      </div>
    </template>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const headers = ref([
  {
    field: 'name',
    name: 'Role Name',
    sort: true,
    hasAvatar: true,
    hasSubtext: true,
    customTailwindClasses: 'spr-bg-tomato-500',
  },
  {
    field: 'lastUpdate',
    name: 'Date',
    sort: true,
    hasAvatar: false,
    hasSubtext: false,
    customTailwindClasses: 'spr-bg-blueberry-500',
  },
]);
</script>
```

## Table Footer

The implementation for the pagination here is to emit and trigger an API call to update the data-table
<spr-table 
      action 
      :headers="headers" 
      :data-table="data" 
    >
<template #footer>
<spr-table-pagination
v-model:selected-row-count="selectedRowCount"
:total-items="totalItems"
:current-page="currentPage"
:dropdown-selection="dropdownSelection"
@previous="handlePrevious"
@next="handleNext"
:version="'backend'"
/>
</template>
</spr-table>

```vue
<template>
  <spr-table action :headers="headers" :data-table="data">
    <template #footer>
      <spr-table-pagination
        v-model:selected-row-count="selectedRowCount"
        :total-items="totalItems"
        :current-page="currentPage"
        :dropdown-selection="dropdownSelection"
        @previous="handlePrevious"
        @next="handleNext"
        :version="'backend'"
      />
    </template>
  </spr-table>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const headers = ref([
  // Fill this with your headers
]);

const data = ref([
  // Fill this with your data
]);

const totalItems = ref(100);
const currentPage = ref(2);
const dropdownSelection = [
  { text: 10, value: 10 },
  { text: 20, value: 20 },
  { text: 30, value: 30 },
];

const selectedRowCount = ref(10);

watch(selectedRowCount, (newValue) => {
  console.log('Selected Row Count:', newValue);
  // On change of the selectedRowCount variable trigger a fetch
  // fetchApiHere();
});

const handlePrevious = () => {
  console.log('clicked previous');
  if (currentPage.value > 1) {
    currentPage.value--;
  }

  fetchItems(currentPage.value);
};

const handleNext = () => {
  console.log('clicked next');

  if (currentPage.value * selectedRowCount.value < totalItems.value) {
    currentPage.value++;
  }

  fetchItems(currentPage.value);
};

const fetchItems = computed((page) => {
  const response = apiCall(page);

  data.value = parse(response);
});
</script>
```

## Cells

### Lozenge

You can change the title of a cell to a lozenge

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table action :headers="headersLozenge" :data-table="dataLozenge" variant="surface" @onSort="handleSort">
    <div>
      Customize your content here!
    </div>
  </spr-table>
</div>

```vue
<template>
  <spr-table action :headers="headersLozenge" :data-table="dataLozenge" variant="surface" @onSort="handleSort">
    <div>Customize your content here!</div>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const headersLozenge = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: false, hasSubtext: true, hasLozengeTitle: true },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false, hasLozengeTitle: true },
]);

const lozengeTitle = {
  title: 'Active',
  tone: 'success',
  avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  fill: true,
  lozengeIcon: 'ph:building',
};

const lozengeSecondTitle = {
  title: 'Lozenge',
  avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
};

const dataLozenge = [
  {
    name: {
      title: lozengeTitle,
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      lozengeIcon: 'ph:user',
    },
    lastUpdate: {
      title: lozengeSecondTitle,
      subtext: 'Lorem ipsum dolor ',
      lozengeFill: true,
      lozengeAvatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
];
</script>
```

### Chips

You can change the title of a cell to a chip

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table action :headers="headersChips" :data-table="dataChips" variant="surface" @onSort="handleSort">
    <div>
      Customize your content here!
    </div>
  </spr-table>
</div>

```vue
<template>
  <spr-table action :headers="headersChips" :data-table="dataChips" variant="surface" @onSort="handleSort">
    <div>Customize your content here!</div>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const headersChips = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: false, hasSubtext: true, hasChipTitle: true },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false, hasChipTitle: true },
]);

const chipsTitle = {
  title: 'Active',
  icon: 'ph:building',
  iconWeight: 'regular',
  avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  avatarVariant: 'image',
};

const chipsSecondTitle = {
  title: 'Second Title',
  icon: 'ph:users-three',
  iconWeight: 'regular',
  badge: true,
  badgeText: '2',
  badgeVariant: 'brand',
  avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  avatarVariant: 'image',
};

const dataChips = [
  {
    name: {
      title: chipsTitle,
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      lozengeIcon: 'ph:user',
    },
    lastUpdate: {
      title: chipsSecondTitle,
      subtext: 'Lorem ipsum dolor ',
      lozengeFill: true,
      lozengeAvatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
];
</script>
```

### Multiple Chips and Lozenges

You can change the title to multiple chips and lozenges

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table action :headers="headersMultiple" :data-table="dataMultiple" variant="surface" @onSort="handleSort">
    <div>
      Customize your content here!
    </div>
  </spr-table>
</div>

```vue
<template>
  <spr-table action :headers="headersMultiple" :data-table="dataMultiple" variant="surface" @onSort="handleSort">
    <div>Customize your content here!</div>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const headersMultiple = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: false, hasSubtext: true, hasLozengeTitle: true },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false, hasChipTitle: true },
]);

const lozengeCell = {
  title: 'Active',
  tone: 'success',
  avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  fill: true,
  lozengeIcon: 'ph:building',
};
const chipCell = [
  {
    title: 'Active',
    icon: 'ph:building',
    iconWeight: 'regular',
    badge: true,
    badgeText: '2',
    badgeVariant: 'brand',
    avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    avatarVariant: 'image',
  },
  {
    title: 'Active',
    icon: 'ph:building',
    iconWeight: 'regular',
    badge: true,
    badgeText: '2',
    badgeVariant: 'brand',
    avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    avatarVariant: 'image',
  },
];

const dataMultiple = [
  {
    name: {
      title: lozengeCell,
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: chipCell,
      subtext: 'Lorem ipsum dolor ',
      chipTitle: chipCell,
    },
  },
];
</script>
```

## Variant

You can customize the header background of the table using the `variant` attribute. The available options are `white` and `surface`.

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table action :headers="headers" :data-table="data" variant="surface" @onSort="handleSort">
    <div>
      Customize your content here!
    </div>
  </spr-table>
</div>

```vue
<template>
  <spr-table action :headers="headers" :data-table="data">
    <div>Customize your content here!</div>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const headers = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false },
]);

const data = ref([
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
]);

const handleSort = (e) => {
  console.log('sort', e);
};
</script>
```

## Sorting

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table action :headers="headers" :data-table="data" variant="white" @onSort="getSortOrder()" sortOrder>
    <div>
      Customize your content here!
    </div>
    <template #action="{ row }">
      <spr-lozenge :label="row.status.title" :tone="row.status.title.toLowerCase()" />
    </template>
    <template #action-name>
      Status
    </template>
  </spr-table>
</div>

```vue
<template>
  <spr-table action :headers="headers" :data-table="data" variant="white" @onSort="getSortOrder()" sortOrder>
    <div>Customize your content here!</div>
    <template #action="{ row }">
      <spr-lozenge :label="row.status.title" :tone="row.status.title.toLowerCase()" />
    </template>
    <template #action-name> Status </template>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const headers = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false },
]);

const data = ref([
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
]);

const sortOrder = ref('asc');
const getSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  console.log(sortOrder.value);
  return sortOrder.value;
};
</script>
```

## Badge

Badges can have different color schemes to indicate various statuses, such as `disabled`, `brand`, `danger`, or `information`.

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table action :headers="headersWithBadge" :data-table="data">
    <div>
      Customize your content here!
    </div>
    <template #action="{ row }">
      <spr-lozenge :label="row.status.title" :tone="row.status.title.toLowerCase()" />
    </template>
    <template #action-name>
      Status
    </template>
  </spr-table>
</div>

```vue
<template>
  <spr-table action :headers="headersWithBadge" :data-table="data">
    <div>Customize your content here!</div>
    <template #action="{ row }">
      <spr-lozenge :label="row.status.title" :tone="row.status.title.toLowerCase()" />
    </template>
    <template #action-name> Status </template>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const headersWithBadge = ref([
  {
    field: 'name',
    name: 'Role Name',
    sort: true,
    hasAvatar: true,
    hasSubtext: true,
    badgeText: '1',
    badgeVariant: 'brand',
  },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false },
]);

const data = ref([
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
]);
</script>
```

## Column Width Configuration

The table component provides flexible column width management through the `width` property in header objects. This allows you to create well-balanced table layouts that adapt to different content types and screen sizes.

### Width Value Types

You can use any valid CSS width value:

```javascript
const headers = ref([
  { field: 'id', name: 'ID', width: '80px' }, // Fixed pixel width
  { field: 'name', name: 'Name', width: '300px' }, // Larger fixed width
  { field: 'email', name: 'Email', width: '40%' }, // Percentage of table width
  { field: 'role', name: 'Role', width: '15em' }, // Em-based width
  { field: 'status', name: 'Status', width: 'auto' }, // Auto-sizing
  { field: 'actions', name: 'Actions' }, // No width = auto
]);
```

### Best Practices

**Fixed Pixel Widths**: Best for columns with predictable content like IDs, dates, or status indicators.

```javascript
{ field: 'id', name: 'ID', width: '80px' }
{ field: 'date', name: 'Created', width: '150px' }
```

**Percentage Widths**: Ideal for responsive layouts where columns should scale with table size.

```javascript
{ field: 'description', name: 'Description', width: '50%' }
{ field: 'category', name: 'Category', width: '25%' }
```

**Mixed Width Strategy**: Combine fixed and flexible widths for optimal layouts.

```javascript
const headers = ref([
  { field: 'avatar', name: '', width: '60px' }, // Fixed for avatar
  { field: 'name', name: 'Name', width: '30%' }, // Flexible for names
  { field: 'email', name: 'Email', width: '35%' }, // Flexible for emails
  { field: 'status', name: 'Status', width: '120px' }, // Fixed for status
  { field: 'actions', name: 'Actions', width: '100px' }, // Fixed for actions
]);
```

### Dynamic Width Considerations

When using dynamic values, avoid Tailwind CSS classes like `spr-w-[${width}]` as they won't be generated at build time. Instead, use inline styles or the `width` property:

```javascript
// ❌ Avoid - Tailwind won't generate dynamic classes
{ field: 'name', name: 'Name', customTailwindClasses: `spr-w-[${dynamicWidth}]` }

// ✅ Recommended - Use the width property
{ field: 'name', name: 'Name', width: dynamicWidth }
```

### Responsive Column Widths

For responsive designs, consider using CSS custom properties or media queries in your styling:

```javascript
const headers = ref([
  {
    field: 'name',
    name: 'Name',
    width: 'clamp(200px, 30%, 400px)', // Responsive with min/max
  },
  {
    field: 'description',
    name: 'Description',
    width: 'minmax(250px, 1fr)', // Grid-based responsive width
  },
]);
```

## Draggable Table Rows

Allows the drag and drop of table rows.

::: warning

<ul>
  <li>Mutation to original data must be done manually.</li>  
  <li>Add an <strong>id</strong> property to each row data object. This is used to uniquely identify rows during drag and drop operations.</li> 
</ul>  
:::

<div    
    class="spr-grid spr-w-full spr-grid-cols-2 spr-gap-size-spacing-2xs"
  >
    <div class="pr:max-w-[465px] pr:h-fit spr-background-color spr-rounded-border-radius-lg">
      <spr-table
        :headers="draggableTableHeaders"
        :data-table="availableEmployees"
        variant="white"                       
        :is-draggable="true"   
        @on-drag-add="handleOnDragAdd($event, 'available')"
        @on-drag-remove="handleOnDragRemove($event, 'available')"     
      ></spr-table>
    </div>
    <div
      id="select_employee_table_wrapper_2"
      class="pr:max-w-[465px] spr-background-color spr-rounded-border-radius-lg"
    >
      <spr-table
        :headers="draggableTableHeaders"
        :data-table="selectedEmployees"
        variant="white"        
        :is-draggable="true"
        @on-drag-add="handleOnDragAdd($event, 'selected')"
        @on-drag-remove="handleOnDragRemove($event, 'selected')"
      ></spr-table>
    </div>
  </div>

```vue
<template>
  <div class="spr-grid spr-w-full spr-grid-cols-2 spr-gap-size-spacing-2xs">
    <div class="pr:max-w-[465px] pr:h-fit spr-background-color spr-rounded-border-radius-lg">
      <spr-table
        :headers="tableHeaders"
        :data-table="availableEmployees"
        :is-draggable="true"
        variant="white"
        @on-drag-add="handleOnDragAdd($event, 'available')"
        @on-drag-remove="handleOnDragRemove($event, 'available')"
      ></spr-table>
    </div>
    <div
      id="select_employee_table_wrapper_2"
      class="pr:max-w-[465px] spr-background-color spr-rounded-border-radius-lg"
    >
      <spr-table
        :headers="tableHeaders"
        :data-table="selectedEmployees"
        variant="white"
        :is-draggable="true"
        @on-drag-add="handleOnDragAdd($event, 'selected')"
        @on-drag-remove="handleOnDragRemove($event, 'selected')"
      ></spr-table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
const tableHeaders = ref([
  {
    field: 'name',
    name: 'Name',
    sort: false,
    hasAvatar: true,
    hasSubtext: true,
    width: '75%',
  },
  { field: 'status', name: '', sort: false, hasAvatar: false, hasSubtext: false, hasLozengeTitle: true, width: '12%' },
]);

const mockAvailableEmployees = ref([
  {
    id: '1',
    empIDNum: 'EMP001',
    lastName: 'Smith',
    firstName: 'John',
    middleName: 'Michael',
    empStatus: 'Active',
    isProrated: false,
  },
  {
    id: '2',
    empIDNum: 'EMP002',
    lastName: 'Johnson',
    firstName: 'Sarah',
    middleName: 'Elizabeth',
    empStatus: 'Active',
    isProrated: true,
  },
  {
    id: '3',
    empIDNum: 'EMP003',
    lastName: 'Williams',
    firstName: 'David',
    middleName: 'Robert',
    empStatus: 'Active',
    isProrated: false,
  },
  {
    id: '4',
    empIDNum: 'EMP004',
    lastName: 'Brown',
    firstName: 'Emily',
    middleName: 'Grace',
    empStatus: 'Active',
    isProrated: true,
  },
  {
    id: '5',
    empIDNum: 'EMP005',
    lastName: 'Davis',
    firstName: 'Michael',
    middleName: 'James',
    empStatus: 'Active',
    isProrated: false,
  },
]);

const mockSelectedEmployees = ref([
  {
    id: '6',
    empIDNum: 'EMP006',
    lastName: 'Doe',
    firstName: 'John',
    middleName: 'Michael',
    empStatus: 'Active',
    isProrated: false,
  },
]);

const availableEmployees = computed(() => {
  return mockAvailableEmployees.value.map((employee) => ({
    id: employee.id, //add id property to each row data object
    name: {
      title: `${employee.firstName} ${employee.lastName}`,
      subtext: employee.empIDNum,
    },
    status: {
      title: {
        title: employeeStatusLabel[employee.empStatus.toLowerCase()],
        tone: employeeStatusTone[employee.empStatus.toLowerCase()],
      },
    },
  }));
});

const selectedEmployees = computed(() => {
  return mockSelectedEmployees.value.map((employee) => ({
    id: employee.id,
    name: {
      title: `${employee.firstName} ${employee.lastName}`,
      subtext: employee.empIDNum,
    },
    status: {
      title: {
        title: employeeStatusLabel[employee.empStatus.toLowerCase()],
        tone: employeeStatusTone[employee.empStatus.toLowerCase()],
      },
    },
  }));
});

const employeeStatusLabel = {
  active: 'ACTIVE',
};

const employeeStatusTone = {
  active: 'success',
};


const handleOnDragAdd = (event: DragOnAddEvent, tableType: TableTypes) => {
  if (!event) return;
  let employeeList = tableType === 'selected' ? mockAvailableEmployees.value : mockSelectedEmployees.value;
  const employeeToAdd = employeeList.find((emp) => emp.id === event.element.id);

  if (!employeeToAdd) return;

  if (tableType === 'selected') {
    mockSelectedEmployees.value.push(employeeToAdd);
  } else {
    mockAvailableEmployees.value.push(employeeToAdd);
  }
};

const handleOnDragRemove = (event: DragOnRemoveEvent, tableType: TableTypes) => {
  if (!event) return;  
  
  if (tableType === 'selected') {
    mockSelectedEmployees.value.splice(event.oldIndex, 1);
  } else {
    mockAvailableEmployees.value.splice(event.oldIndex, 1);
  }
};
</script>
```

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
      <td>action</td>
      <td>Enables an action column at the end of the table. When set to true, it allows custom content to be placed in an action column for each row.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>dataTable</td>
      <td>Array of data objects to display in the table. Each object represents a row, with properties corresponding to columns defined in the headers.</td>
      <td>Array&lt;TableData&gt;</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>headers</td>
      <td>Array of header configuration objects defining the columns of the table. Each header object includes field name, display name, and various display options.</td>
      <td>Array&lt;Header&gt;</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>emptyState</td>
      <td>Configuration for the empty state displayed when the table has no data. Customize description, sub-description, image, and size.</td>
      <td>EmptyState</td>
      <td>{ description: 'No results found', subDescription: 'Try a different search term', image: 'location', size: 'large' }</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>When set to true, displays a loading state instead of the table data or empty state.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>tableActions</td>
      <td>Configuration for table actions displayed above the table. Includes options for search, filter, and additional options.</td>
      <td>{ search: boolean, filter: boolean, option: boolean }</td>
      <td>{ search: false, filter: false, option: false }</td>
    </tr>
    <tr>
      <td>searchModel</td>
      <td>Used with v-model:searchModel to bind the search input value. When using the search feature, this prop enables two-way binding.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>sortOrder</td>
      <td>Default sort order for the table. Can be 'asc' (ascending) or 'desc' (descending).</td>
      <td>'asc' | 'desc'</td>
      <td>'asc'</td>
    </tr>
    <tr>
      <td>variant</td>
      <td>Controls the background color of the table header. Options are 'white' and 'surface'.</td>
      <td>'surface' | 'white'</td>
      <td>'surface'</td>
    </tr>
    <tr>
      <td>isRowClickable</td>
      <td>When true, enables clicking on rows to trigger the onRowClick event. Useful for interactive tables where rows can be selected or expanded.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>fullHeight</td>
      <td>When true, the table will take up the full available height of its container.</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>removeHeaderOnEmpty</td>
      <td>When true, the table headers will not be displayed if the table has no data.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>isMultiSelect</td>
      <td>Enables multi-select functionality with checkboxes in the first column of the table.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>selectedKeyId</td>
      <td>Specifies which key in the table data object will be used as an identifier for selected rows. Required when using isMultiSelect.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>returnCompleteSelectedProperties</td>
      <td>Controls the structure of the data emitted when rows are selected. If true, the full row data object is emitted; if false, only the value of the property specified by selectedKeyId is emitted.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>isDraggable</td>
      <td>Enables the drag and drop feature of the table.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>allowSelfDrag</td>
      <td>Enables the drag and drop within the same table.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>retainSelectionOnDataChange</td>
      <td>Enables the retention of selected rows when the table data changes.</td>
      <td>boolean</td>
      <td>false</td>
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
      <td>update:searchModel</td>
      <td>Emitted when the search input value changes. Used with v-model:searchModel for two-way binding.</td>
      <td>(value: string)</td>
    </tr>
    <tr>
      <td>onSort</td>
      <td>Emitted when a sortable column header is clicked. Provides the field name and the new sort order.</td>
      <td>({ field: string, sortOrder: 'asc' | 'desc' })</td>
    </tr>
    <tr>
      <td>onRowClick</td>
      <td>Emitted when a row is clicked (if isRowClickable is true). Provides the row data and row index.</td>
      <td>(rowData: TableData, rowIndex: number)</td>
    </tr>
    <tr>
      <td>onHover</td>
      <td>Emitted when the mouse enters or leaves a row. Provides the active state and the row data.</td>
      <td>({ active: boolean, data: TableData })</td>
    </tr>
    <tr>
      <td>update:selectedData</td>
      <td>Emitted when row selection changes in multi-select mode. Provides an array of selected items based on the returnCompleteSelectedProperties setting.</td>
      <td>(selectedItems: TableData[] | any[])</td>
    </tr>
    <tr>
      <td>onDropToEmptyZone</td>
      <td>Emitted when a dragged item is dropped into an empty state.</td>
      <td>(event: DragOnChangeEvent['added'])</td>
    </tr>
    <tr>
      <td>onDropChange</td>
      <td>Emitted when a dragged item is dropped into a populated table.</td>
      <td>(event: DragOnChangeEmit)</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Props</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>Content displayed above the table. Typically used for a title or description.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>tableActionSection</td>
      <td>Custom content for the table actions area. Typically used to add buttons or other controls next to the search, filter, and options.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>action</td>
      <td>Content for the action column in each row. Only available when the action prop is true.</td>
      <td>{ row: TableData }</td>
    </tr>
    <tr>
      <td>action-name</td>
      <td>Header content for the action column. Only available when the action prop is true.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>empty-state</td>
      <td>Custom content to display when the table has no data.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>Custom loading state content. Displayed when the loading prop is true.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>footer</td>
      <td>Content displayed at the bottom of the table. Typically used for pagination or summary information.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>[field]</td>
      <td>Dynamic slots based on the field names in the headers. Allows custom rendering for specific columns.</td>
      <td>{ row: TableData, rowIndex: number }</td>
    </tr>
  </tbody>
</table>

### Exposed Functions

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>clearSelectedData</td>
      <td>Function to clear selected rows in multi-select.</td>      
    </tr>
  </tbody>
</table>

### Header Object Properties

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>field</td>
      <td>Unique identifier for the column. Maps to the property name in the data objects.</td>
      <td>string</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>name</td>
      <td>Display name for the column header.</td>
      <td>string</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>sort</td>
      <td>Whether the column is sortable.</td>
      <td>boolean</td>
      <td>No</td>
    </tr>
    <tr>
      <td>hasAvatar</td>
      <td>Whether to display an avatar in the column cells. If true, the data object should include an image property.</td>
      <td>boolean</td>
      <td>No</td>
    </tr>
    <tr>
      <td>hasIcon</td>
      <td>Whether to display an icon in the column cells. If true, the data object should include an icon property.</td>
      <td>boolean</td>
      <td>No</td>
    </tr>
    <tr>
      <td>hasSubtext</td>
      <td>Whether to display subtext in the column cells. If true, the data object should include a subtext property.</td>
      <td>boolean</td>
      <td>No</td>
    </tr>
    <tr>
      <td>hasLozengeTitle</td>
      <td>Whether to display the title as a lozenge. If true, the title property should be a LozengeTitle object or array.</td>
      <td>boolean</td>
      <td>No</td>
    </tr>
    <tr>
      <td>hasChipTitle</td>
      <td>Whether to display the title as a chip. If true, the title property should be a ChipTitle object or array.</td>
      <td>boolean</td>
      <td>No</td>
    </tr>
    <tr>
      <td>badgeText</td>
      <td>Text to display in a badge next to the column header.</td>
      <td>string</td>
      <td>No</td>
    </tr>
    <tr>
      <td>badgeVariant</td>
      <td>Variant of the badge to display next to the column header. Options include 'disabled', 'brand', 'danger', and 'information'.</td>
      <td>string</td>
      <td>No</td>
    </tr>
    <tr>
      <td>avatarVariant</td>
      <td>Variant of the avatar to display in the column cells. Used with hasAvatar.</td>
      <td>string</td>
      <td>No</td>
    </tr>
    <tr>
      <td>customTailwindClasses</td>
      <td>Custom Tailwind CSS classes to apply to the column cells.</td>
      <td>string</td>
      <td>No</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Sets the width of the column. Accepts any valid CSS width value (e.g., '200px', '25%', '15em', 'auto'). This property directly controls column sizing and is essential for creating properly proportioned tables.</td>
      <td>string</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import SprTable from "@/components/table/table.vue";
import SprTablePagination from "@/components/table/table-pagination/table-pagination.vue";
import SprButton from '@/components/button/button.vue';
import SprLozenge from "@/components/lozenge/lozenge.vue";
import SprLogo from "@/components/logo/logo.vue";
import SprTooltip from "@/components/tooltip/tooltip.vue";
import { Icon } from '@iconify/vue';
import draggable from 'vuedraggable';

const selectedTableData = ref([]);

const rowTitleRef = ref<HTMLElement|null>(null);
const cellWidth = ref(0)

const getCellMaxWidth = computed(() => {
  return cellWidth.value > 0 ? `${cellWidth.value}px` : '100%'
})

onMounted(() => {
  if (rowTitleRef.value) {
    cellWidth.value = rowTitleRef.value.offsetParent?.clientWidth ?? 0;
    cellWidth.value = cellWidth.value - 24; // Adjust for td padding
  }
});

const headers = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false },
]);

const headersWithBadge = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: true, hasSubtext: true, badgeText:'1', badgeVariant:'brand' },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false, badgeText:'2', badgeVariant:'danger'  },
]);

const draggableTableHeaders = ref([
  {
    field: 'name',
    name: 'Name',
    sort: false,
    hasAvatar: true,
    hasSubtext: true,
    width: '20%',
  },
  { field: 'status', name: '', sort: false, hasAvatar: false, hasSubtext: false, hasLozengeTitle: true, width: '12%' },
]);

const mockAvailableEmployees = ref([
  {
    id: '1',
    empIDNum: 'EMP001',
    lastName: 'Smith',
    firstName: 'John',
    middleName: 'Michael',
    empStatus: 'Active',
    isProrated: false,
  },
  {
    id: '2',
    empIDNum: 'EMP002',
    lastName: 'Johnson',
    firstName: 'Sarah',
    middleName: 'Elizabeth',
    empStatus: 'Active',
    isProrated: true,
  },
  {
    id: '3',
    empIDNum: 'EMP003',
    lastName: 'Williams',
    firstName: 'David',
    middleName: 'Robert',
    empStatus: 'Active',
    isProrated: false,
  },
  {
    id: '4',
    empIDNum: 'EMP004',
    lastName: 'Brown',
    firstName: 'Emily',
    middleName: 'Grace',
    empStatus: 'Active',
    isProrated: true,
  },
  {
    id: '5',
    empIDNum: 'EMP005',
    lastName: 'Davis',
    firstName: 'Michael',
    middleName: 'James',
    empStatus: 'Active',
    isProrated: false,
  },
]);

const mockSelectedEmployees = ref([
  {
    id: '6',
    empIDNum: 'EMP006',
    lastName: 'Doe',
    firstName: 'John',
    middleName: 'Michael',
    empStatus: 'Active',
    isProrated: false,
  },
]);

const availableEmployees = computed(() => {
  return mockAvailableEmployees.value.map((employee) => ({
    id: employee.id,
    name: {
      title: `${employee.firstName} ${employee.lastName}`,
      subtext: employee.empIDNum,
    },
    status: {      
      title: {
        title: employeeStatusLabel[employee.empStatus.toLowerCase()],
        tone: employeeStatusTone[employee.empStatus.toLowerCase()],
      },
    },
  }));
});

const selectedEmployees = computed(() => {
  return mockSelectedEmployees.value.map((employee) => ({
    id: employee.id,
    name: {
      title: `${employee.firstName} ${employee.lastName}`,
      subtext: employee.empIDNum,
    },
    status: {      
      title: {
        title: employeeStatusLabel[employee.empStatus.toLowerCase()],
        tone: employeeStatusTone[employee.empStatus.toLowerCase()],
      },
    },
  }));
});

const employeeStatusLabel = {
  active: 'ACTIVE',
};

const employeeStatusTone = {
  active: 'success',
};

const data = ref([
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
    {
    name: {
      title: 'Shift 1',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 01, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Pending',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
      {
    name: {
      title: 'Shift 2',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 01, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Pending',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
      {
    name: {
      title: 'Shift 3',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 01, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Pending',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
      {
    name: {
      title: 'Shift 4',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 01, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Pending',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
      {
    name: {
      title: 'Shift 5',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 01, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Pending',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
]);


const data2 = ref([
  {
    name: {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem minus fugiat culpa ad magnam nisi ex facilis ducimus sit neque modi porro optio cupiditate iusto, blanditiis asperiores aperiam veritatis mollitia laboriosam? Consectetur, deserunt? Reprehenderit ipsa, debitis eaque accusamus ducimus quasi deserunt laborum asperiores ea, nemo, optio corporis rerum! Veniam ex voluptatibus eveniet consequuntur saepe doloribus sint laboriosam eligendi sequi esse vero, quam consectetur iste inventore aliquam soluta quibusdam at perferendis ratione, voluptatum accusantium amet dignissimos perspiciatis. Aspernatur, voluptate amet.',
      subtext: 'Lorem ipsectetur adipiscing elit.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
    {
    name: {
      title: 'Shift 1',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 01, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Pending',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  }
]);

const tableActions = ref({
  search: true,
  filter: true,
  option: true,
});

const searchModel = ref('');


const totalItems = ref(100);
const currentPage = ref(2);
const dropDownSelection = ref([
  {text: 10, value: 10},
  {text: 20, value: 20},
  {text: 30, value: 30},
]);

const selectedRowCount = ref(20);
const handlePrevious = () => {
  console.log('clicked previous');
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const handleNext = () => {
  console.log('clicked next');
  if (currentPage.value * selectedRowCount.value < totalItems.value) {
    currentPage.value++;
  }
};

const handleSort  = (e) => {
  console.log('sort', e);
}

const sortOrder = ref('asc')
const getSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  console.log(sortOrder.value)
  return sortOrder.value
}

const headersLozenge = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: false, hasSubtext: true, hasLozengeTitle: true },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false, hasLozengeTitle: true },
])

const lozengeTitle = {
  title: 'Active',
  tone: 'success',
  avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  fill: true,
  lozengeIcon: 'ph:building'
}

const lozengeSecondTitle = {
  title: 'Lozenge',
  avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
}


const dataLozenge = [
  {
    name: {
      title: lozengeTitle,
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      lozengeIcon: 'ph:user'
    },
    lastUpdate: {
      title: lozengeSecondTitle,
      subtext: 'Lorem ipsum dolor ',
      lozengeFill: true,
      lozengeAvatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'
    },
  },
]

const headersChips = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: false, hasSubtext: true, hasChipTitle: true },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false, hasChipTitle: true },
])

const chipsTitle = {
  title: 'Active',
  icon: 'ph:building',
  iconWeight: 'regular',
  avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  avatarVariant: 'image',
}

const chipsSecondTitle = {
  title: 'Second Title',
  icon: 'ph:users-three',
  iconWeight: 'regular',
  badge: true,
  badgeText: '2',
  badgeVariant: 'brand',
  avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  avatarVariant: 'image',
}

const dataChips = [
  {
    name: {
      title: chipsTitle,
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      lozengeIcon: 'ph:user'
    },
    lastUpdate: {
      title: chipsSecondTitle,
      subtext: 'Lorem ipsum dolor ',
      lozengeFill: true,
      lozengeAvatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'
    },
  },
]

const headersMultiple = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: false, hasSubtext: true, hasLozengeTitle: true },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false, hasChipTitle: true },
])

const lozengeCell =  [
  {
      title: 'First',
      tone: 'success',
      avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      fill: true,
      lozengeIcon: 'ph:building',
  },
  {
      title: 'Second',
      tone: 'danger',
      avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      fill: false,
      lozengeIcon: 'ph:users-three',
  }
];


const chipCell = [
  {
    title: 'Active',
    icon: 'ph:building',
    iconWeight: 'regular',
    badge: true,
    badgeText: '2',
    badgeVariant: 'brand',
    avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    avatarVariant: 'image',
  },
  {
    title: 'Inactive',
    icon: 'ph:users-three',
    iconWeight: 'regular',
    avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    avatarVariant: 'image',
  }
]

const dataMultiple = [
  {
    name: {
      title: lozengeCell,
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: chipCell,
      subtext: 'Lorem ipsum dolor ',
      chipTitle: chipCell
    },
  },
]

const handleSelectedData = (data) => {
  selectedTableData.value = [...data];
}

const customHeaders = ref([
  { 
    field: 'name', 
    name: 'Role Name', 
    sort: true, 
    hasAvatar: true, 
    hasSubtext: true, 
    customTailwindClasses: '!spr-bg-tomato-500', // To override Vitepress' default styles
  },
  { 
    field: 'lastUpdate', 
    name: 'Date', 
    sort: true, 
    hasAvatar: false, 
    hasSubtext: false, 
    customTailwindClasses: '!spr-bg-blueberry-500', // To override Vitepress' default styles
  },
]);

const handleOnDragAdd = (event: DragOnAddEvent, tableType: TableTypes) => {
  if (!event) return;
  let employeeList = tableType === 'selected' ? mockAvailableEmployees.value : mockSelectedEmployees.value;
  const employeeToAdd = employeeList.find((emp) => emp.id === event.element.id);

  if (!employeeToAdd) return;

  if (tableType === 'selected') {
    mockSelectedEmployees.value.push(employeeToAdd);
  } else {
    mockAvailableEmployees.value.push(employeeToAdd);
  }
};

const handleOnDragRemove = (event: DragOnRemoveEvent, tableType: TableTypes) => {
  if (!event) return;  
  
  if (tableType === 'selected') {
    mockSelectedEmployees.value.splice(event.oldIndex, 1);
  } else {
    mockAvailableEmployees.value.splice(event.oldIndex, 1);
  }
};
</script>
