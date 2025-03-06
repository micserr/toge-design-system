# Table

## Basic Usage

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table action :headers="headers" :data-table="data">
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
  <spr-table action :headers="headers" :data-table="data" :table-actions="tableActions" v-model:searchModel="searchModel"/> 
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
  <spr-table action :headers="headers" :data-table="data" :table-actions="tableActions" v-model:searchModel="searchModel">
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
      :table-footer="tableFooter"
      v-model:selectedRowCount="selectedRowCount"
      @paginationClickedLeft="handlePaginationClickedLeft"
      @paginationClickedRight="handlePaginationClickedRight"
    >
      <template #footer> 
        <spr-table-pagination 
          v-model:selected-row-count="selectedRowCount"
          :total-items="tablePagination.totalItems"
          :current-page="tablePagination.currentPage"
          :dropdown-selection="tablePagination.dropdownSelection"
          @previous="handlePrevious"
          @next="handleNext"
          :version="'backend'"
        />
      </template>
  </spr-table>

```vue
<template>
  <spr-table 
      action 
      :headers="headers" 
      :data-table="data" 
      :table-footer="tableFooter"
      v-model:selectedRowCount="selectedRowCount"
      @paginationClickedLeft="handlePaginationClickedLeft"
      @paginationClickedRight="handlePaginationClickedRight"
    >
      <template #footer> 
        <spr-table-pagination 
          v-model:selected-row-count="selectedRowCount"
          :total-items="tablePagination.totalItems"
          :current-page="tablePagination.currentPage"
          :dropdown-selection="tablePagination.dropdownSelection"
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

const tablePagination = {
  totalItems: 100,
  currentPage: 2,
  dropdownSelection: [
    {text: 10, value: 10},
    {text: 20, value: 20},
    {text: 30, value: 30},
  ],
};

const selectedRowCount = ref(10);

watch(selectedRowCount, (newValue) => {
  console.log("Selected Row Count:", newValue);
  // On change of the selectedRowCount variable trigger a fetch
  // fetchApiHere();
});

const handlePrevious = () => {
  console.log('clicked previous');
};

const handleNext = () => {
  console.log('clicked next');
};

</script>
```



## Table API

### Table Attributes

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
      <td>TableData {
        [key: string]: {
          title: string;
          subtext: string;
          image: string;
        };
      }
      </td>
    </tr>
    <tr>
      <td>headers</td>
      <td>define your table headers</td>
      <td>Object</td>
      <td>Header {
        field: string;
        name: string;
        sort: boolean;
        hasAvatar: boolean;
        hasSubtext: boolean;
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
  </tbody>
</table>

<script setup lang="ts">
  import { ref } from 'vue'
  import SprTable from "@/components/table/table.vue";
  import SprTablePagination from "@/components/table/table-pagination/table-pagination.vue";
  import SprButton from '@/components/button/button.vue';
  import SprLozenge from "@/components/lozenge/lozenge.vue"
  import { Icon } from '@iconify/vue';
  

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


const tablePagination = ref({
  totalItems: 100,
  currentPage: 2,
  dropdownSelection: [
    {text: 10, value: 10},
    {text: 20, value: 20},
    {text: 30, value: 30},
  ],
});

const selectedRowCount = ref(20);

const handlePrevious = () => {
  console.log('clicked previous');
};

const handleNext = () => {
  console.log('clicked next');
};
</script>
