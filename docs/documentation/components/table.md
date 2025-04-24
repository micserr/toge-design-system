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
  <div>
    Customize your content here!
  </div>
</spr-table>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
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
  <div>
    Customize your content here!
  </div>
</spr-table>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const headersMultiple = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: false, hasSubtext: true, hasLozengeTitle: true },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false, hasChipTitle: true },
])

const lozengeCell =  {
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

## API Reference

<table>
  <tbody>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Value</th>
    </tr>
    <tr>
      <td>action</td>
      <td>Slot for for table data</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>dataTable</td>
      <td>For table values</td>
      <td>Object</td>
      <td>
        TableData {
          [key: string]: {
            title: string | LozengeTitle | ChipTitle | LozengeTitle[] | ChipTitle[];
            subtext: string;
            image: string;
            icon: string;
            lozengeFill: boolean;
            lozengeAvatarUrl: string;
            lozengeTone: string;
            lozengeIcon: string;
          };
        }
      </td>
    </tr>
    <tr>
      <td>Lozenge Title</td>
      <td>For use of Lozenges in titles</td>
      <td>Object</td>
      <td>
        interface LozengeTitle {
          title: string;
          fill?: boolean;
          avatarUrl?: string;
          tone?: (typeof LOZENGE_TONE)[number];
          icon?: string;
        }
      </td>
    </tr>
    <tr>
      <td>Chip Title</td>
      <td>For use of Lozenges in titles</td>
      <td>Object</td>
      <td>
        interface ChipTitle {
          title: string;
          icon: string;
          iconWeight: string;
          badgeText: string;
          badgeVariant: string;
          avatarUrl: string;
          avatarVariant: (typeof AVATAR_VARIANT)[number];
        }
      </td>
    </tr>
    <tr>
      <td>headers</td>
      <td>define your table headers</td>
      <td>Object</td>
      <td>
        Header {
          field: string;
          name: string;
          sort: boolean;
          hasAvatar: boolean;
          hasIcon: boolean;
          hasSubtext: boolean;
          hasLozengeTitle: boolean;
          badgeText: string;
          badgeVariant: string;
        }
      </td>
    </tr>
    <tr>
      <td>emptyState</td>
      <td>Customize table empty state</td>
      <td>Object</td>
      <td>
        {
          description: 'No results found',
          subDescription: 'Try a different search term',
          image: 'location',
          size: 'large',
        }
      </td>
    </tr>
    <tr>
      <td>tableActions</td>
      <td>Customize table actions</td>
      <td>Object</td>
      <td>
        {
          search: boolean;
          filter: boolean;
          option: boolean;
        }
      </td>
    </tr>
    <tr>
      <td>tableFooter</td>
      <td>Customize table footer</td>
      <td>Object</td>
      <td>
        {
          totalItems: number;
          currentPage: number;
          dropdownSelection: { text: string; value: string }[];
        }
      </td>
    </tr>
    <tr>
      <td>variant</td>
      <td>Change background color of header</td>
      <td>surface, white</td>
      <td>surface</td>
    </tr>
    <tr>
      <td>isRowClickable</td>
      <td>Make table row clickable and emits onRowClick</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>@onSort</td>
      <td>Emits when sorting is triggered</td>
      <td>function</td>
      <td>-</td>
    </tr>
     <tr>
      <td>@onRowClick</td>
      <td>Emits table data and row index when table row is clicked</td>
      <td>function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>@onHover</td>
      <td>Emits triggered when hovered</td>
      <td>function</td>
      <td>{ active: true, data: item }</td>
    </tr>
    <tr>
      <td>hasLozengeTitle</td>
      <td>Allows the use of lozenge for title attribute of data</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>removeHeaderOnEmpty</td>
      <td>Removes the headers when table is empty</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logos name="hr" theme="dark"  width="50px" />
  <spr-logos name="ecosystem" theme="dark" width="50px" />
  <spr-logos name="sidekick" theme="dark" width="50px" />
</div>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SprTable from "@/components/table/table.vue";
import SprTablePagination from "@/components/table/table-pagination/table-pagination.vue";
import SprButton from '@/components/button/button.vue';
import SprLozenge from "@/components/lozenge/lozenge.vue";
import SprLogos from "@/components/logos/logos.vue";
import { Icon } from '@iconify/vue';

const headers = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false },
]);

const headersWithBadge = ref([
  { field: 'name', name: 'Role Name', sort: true, hasAvatar: true, hasSubtext: true, badgeText:'1', badgeVariant:'brand' },
  { field: 'lastUpdate', name: 'Date', sort: true, hasAvatar: false, hasSubtext: false, badgeText:'2', badgeVariant:'danger'  },
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
</script>
