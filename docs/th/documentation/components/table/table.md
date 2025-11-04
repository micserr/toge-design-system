---
title: ตาราง
descripttion: คอมโพเนนต์ตารางเป็นองค์ประกอบการแสดงข้อมูลแบบอินเทอร์แอกทีฟและหลากหลายที่จัดระเบียบข้อมูลเป็นแถวและคอลัมน์ ช่วยให้ผู้ใช้สามารถดู จัดเรียง และจัดการชุดข้อมูลขนาดใหญ่ได้อย่างง่ายดาย รองรับคุณสมบัติต่างๆ เช่น ส่วนหัวที่ปรับแต่งได้ ตัวเลือกการเลือกหลายรายการ การแบ่งหน้า และการแสดงเนื้อหาแบบไดนามิกผ่านช่อง
outline: deep
---

# ตาราง

คอมโพเนนต์ตารางเป็นองค์ประกอบการแสดงข้อมูลแบบอินเทอร์แอกทีฟและหลากหลายที่จัดระเบียบข้อมูลเป็นแถวและคอลัมน์ ช่วยให้ผู้ใช้สามารถดู จัดเรียง และจัดการชุดข้อมูลขนาดใหญ่ได้อย่างง่ายดาย รองรับคุณสมบัติต่างๆ เช่น ส่วนหัวที่ปรับแต่งได้ ตัวเลือกการเลือกหลายรายการ การแบ่งหน้า และการแสดงเนื้อหาแบบไดนามิกผ่านช่อง

## การใช้งานพื้นฐาน

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table action :headers="headers" :data-table="data" variant="white" >
    <div>
      ปรับแต่งเนื้อหาของคุณที่นี่!
    </div>
    <template #action="{ row }">
      <spr-lozenge :label="row.status.title" :tone="row.status.title.toLowerCase()" />
    </template>
    <template #action-name>
      สถานะ
    </template>
  </spr-table>
</div>

```vue
<template>
  <spr-table action :headers="headers" :data-table="data">
    <div>ปรับแต่งเนื้อหาของคุณที่นี่!</div>
    <template #action="{ row }">
      <spr-lozenge :label="row.status.title" :tone="row.status.title.toLowerCase()" />
    </template>
    <template #action-name> สถานะ </template>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const headers = ref([
  { field: 'name', name: 'ชื่อบทบาท', sort: true, hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'วันที่', sort: true, hasAvatar: false, hasSubtext: false },
]);

const data = ref([
  {
    name: {
      title: 'กะ',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '30 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'สำเร็จ',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
]);
</script>
```

## ไม่มีช่องและการดำเนินการ

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
  { field: 'name', name: 'ชื่อบทบาท', sort: true, hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'วันที่', sort: true, hasAvatar: false, hasSubtext: false },
]);

const data = ref([
  {
    name: {
      title: 'กะ',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '30 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'สำเร็จ',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
]);
</script>
```

## การดำเนินการของตาราง

การใช้งานสำหรับช่องค้นหาที่นี่คือเพื่อส่งออกและเรียก API เพื่ออัปเดตข้อมูลตาราง
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
  // ใส่ส่วนหัวของคุณที่นี่
]);

const data = ref([
  // ใส่ข้อมูลของคุณที่นี่
]);

const tableActions = ref({
  // สลับเป็น true หากคุณต้องการช่องค้นหา
  search: true,
  // สลับเป็น true หากคุณต้องการช่องกรอง
  filter: true,
  // สลับเป็น true หากคุณต้องการช่องตัวเลือก
  option: true,
});

const searchModel = ref('');

watch(searchModel, (newValue) => {
  console.log(newValue);
  // เมื่อเปลี่ยนค่าตัวแปรค้นหา ให้เรียก API
  // fetchApiHere();
});
</script>
```

### ช่องการดำเนินการของตาราง

<spr-table action :headers="headers" :data-table="data" :table-actions="tableActions" v-model:searchModel="searchModel">
  <div>
    <div class="spr-text-color-strong spr-font-size-400 spr-font-weight-medium">ชื่อตาราง</div>
    <div>คำอธิบายตาราง</div>
  </div>
  <template #tableActionSection>
    <spr-button>ปุ่ม</spr-button>
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
      <div class="spr-text-color-strong spr-font-size-400 spr-font-weight-medium">ชื่อตาราง</div>
      <div>คำอธิบายตาราง</div>
    </div>
    <template #tableActionSection>
      <spr-button>ปุ่ม</spr-button>
    </template>
  </spr-table>
</template>
```

## การเลือกหลายรายการ

อนุญาตให้เลือกหลายแถวหรือแถวทั้งหมดในตาราง

::: warning

<ul>
  <li>หากตารางถูกแบ่งหน้า จะเลือกเฉพาะแถวในหน้าปัจจุบันเท่านั้น</li>
  <li><strong>selectedKeyId</strong> prop ต้องระบุ</li>
  <li><strong>title</strong> ค่าของออบเจ็กต์ข้อมูลตารางที่แมปกับ <strong>selectedKeyId</strong> ในข้อมูลตารางต้องไม่ซ้ำกัน</li>
</ul>  
:::

::: tip
ตั้งค่า prop <strong>returnCompleteSelectedProperties</strong> เป็น <strong>false</strong> เพื่อส่งคืนข้อมูลที่เลือกเป็นอาร์เรย์ของออบเจ็กต์ที่มีค่า <strong>selectedKeyId</strong> เท่านั้น
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
      สถานะ
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
    <template #action-name> สถานะ </template>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedTableData = ref([]);
const headers = ref([
  { field: 'name', name: 'ชื่อบทบาท', sort: true, hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'วันที่', sort: true, hasAvatar: false, hasSubtext: false },
]);
const data = ref([
  {
    name: {
      title: 'กะ',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '30 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'สำเร็จ',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'กะ 1',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '01 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'รอดำเนินการ',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'กะ 2',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '01 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'รอดำเนินการ',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'กะ 3',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '01 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'รอดำเนินการ',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'กะ 4',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '01 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'รอดำเนินการ',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'กะ 5',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '01 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'รอดำเนินการ',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
]);

const handleSelectedData = (data) => {
  // ทำอะไรกับข้อมูลที่เลือกก็ได้
  selectedTableData.value = [...data];
};
</script>
```

## คอลัมน์แบบกำหนดเอง

คุณสามารถปรับแต่งคอลัมน์ของตารางโดยใช้ช่องที่มีชื่อแบบไดนามิกตามชื่อฟิลด์ในออบเจ็กต์ส่วนหัว (พร็อพเพอร์ตี้ field ในออบเจ็กต์ headers)

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
          <spr-button variant="primary" tone="success" size="small"> การดำเนินการ 1 </spr-button>
          <spr-button variant="primary" tone="danger" size="small"> การดำเนินการ 2 </spr-button>
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
    <template #name="{ row }"> // ชื่อช่องคือค่าพร็อพเพอร์ตี้ field ในออบเจ็กต์ headers
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
        <spr-button variant="primary" tone="success" size="small"> การดำเนินการ 1 </spr-button>
        <spr-button variant="primary" tone="danger" size="small"> การดำเนินการ 2 </spr-button>
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
{ field: 'name', name: 'ชื่อบทบาท', sort: true, hasAvatar: true, hasSubtext: true },
{ field: 'lastUpdate', name: 'วันที่', sort: true, hasAvatar: false, hasSubtext: false },
]);

const data = ref([
{
name: {
title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem minus fugiat culpa ad magnam nisi ex facilis ducimus sit neque modi porro optio cupiditate iusto, blanditiis asperiores aperiam veritatis mollitia laboriosam? Consectetur, deserunt? Reprehenderit ipsa, debitis eaque accusamus ducimus quasi deserunt laborum asperiores ea, nemo, optio corporis rerum! Veniam ex voluptatibus eveniet consequuntur saepe doloribus sint laboriosam eligendi sequi esse vero, quam consectetur iste inventore aliquam soluta quibusdam at perferendis ratione, voluptatum accusantium amet dignissimos perspiciatis. Aspernatur, voluptate amet.',
subtext: 'Lorem ipsectetur adipiscing elit.',
image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
},
lastUpdate: {
title: '30 พ.ย. 2025',
subtext: 'Lorem ipsum dolor ',
image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
},
status: {
title: 'สำเร็จ',
subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
},
},
{
name: {
title: 'กะ 1',
subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
},
lastUpdate: {
title: '01 พ.ย. 2025',
subtext: 'Lorem ipsum dolor ',
image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
},
status: {
title: 'รอดำเนินการ',
subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
},
}
]);

</script>
```

## คลาส Tailwind แบบกำหนดเองสำหรับส่วนหัว

คุณสามารถปรับแต่งเซลล์ส่วนหัวด้วยคลาส CSS ของ Tailwind โดยใช้พร็อพเพอร์ตี้ `customTailwindClasses` ในการกำหนดค่าส่วนหัว

::: warning
การใช้ฟิลด์นี้จะลบคลาส tailwind ที่มีอยู่ทั้งหมดในส่วนหัวเท่านั้น (th) คลาสของ DIV หลักที่เก็บชื่อ ไอคอน และป้ายจะยังคงมีผล ปัจจุบันยังไม่รองรับการเปลี่ยนคลาสของส่วนหัวเลือกหลายรายการ
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
    name: 'ชื่อบทบาท',
    sort: true,
    hasAvatar: true,
    hasSubtext: true,
    customTailwindClasses: 'spr-bg-tomato-500',
  },
  {
    field: 'lastUpdate',
    name: 'วันที่',
    sort: true,
    hasAvatar: false,
    hasSubtext: false,
    customTailwindClasses: 'spr-bg-blueberry-500',
  },
]);
</script>
```

## ส่วนท้ายของตาราง

การใช้งานสำหรับการแบ่งหน้านี่คือเพื่อส่งออกและเรียก API เพื่ออัปเดตข้อมูลตาราง
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
  // ใส่ส่วนหัวของคุณที่นี่
]);

const data = ref([
  // ใส่ข้อมูลของคุณที่นี่
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
  console.log('จำนวนแถวที่เลือก:', newValue);
  // เมื่อเปลี่ยนค่าตัวแปร selectedRowCount ให้เรียก API
  // fetchApiHere();
});

const handlePrevious = () => {
  console.log('คลิกก่อนหน้า');
  if (currentPage.value > 1) {
    currentPage.value--;
  }

  fetchItems(currentPage.value);
};

const handleNext = () => {
  console.log('คลิกถัดไป');

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

## เซลล์

### ลอซเซนจ์

คุณสามารถเปลี่ยนชื่อของเซลล์ให้เป็นลอซเซนจ์

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table action :headers="headersLozenge" :data-table="dataLozenge" variant="surface" @onSort="handleSort">
    <div>
      ปรับแต่งเนื้อหาของคุณที่นี่!
    </div>
  </spr-table>
</div>

```vue
<template>
  <spr-table action :headers="headersLozenge" :data-table="dataLozenge" variant="surface" @onSort="handleSort">
    <div>ปรับแต่งเนื้อหาของคุณที่นี่!</div>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const headersLozenge = ref([
  { field: 'name', name: 'ชื่อบทบาท', sort: true, hasAvatar: false, hasSubtext: true, hasLozengeTitle: true },
  { field: 'lastUpdate', name: 'วันที่', sort: true, hasAvatar: false, hasSubtext: false, hasLozengeTitle: true },
]);

const lozengeTitle = {
  title: 'ใช้งานอยู่',
  tone: 'success',
  avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  fill: true,
  lozengeIcon: 'ph:building',
};

const lozengeSecondTitle = {
  title: 'ลอซเซนจ์',
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

### ชิป

คุณสามารถเปลี่ยนชื่อของเซลล์ให้เป็นชิป

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table action :headers="headersChips" :data-table="dataChips" variant="surface" @onSort="handleSort">
    <div>
      ปรับแต่งเนื้อหาของคุณที่นี่!
    </div>
  </spr-table>
</div>

```vue
<template>
  <spr-table action :headers="headersChips" :data-table="dataChips" variant="surface" @onSort="handleSort">
    <div>ปรับแต่งเนื้อหาของคุณที่นี่!</div>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const headersChips = ref([
  { field: 'name', name: 'ชื่อบทบาท', sort: true, hasAvatar: false, hasSubtext: true, hasChipTitle: true },
  { field: 'lastUpdate', name: 'วันที่', sort: true, hasAvatar: false, hasSubtext: false, hasChipTitle: true },
]);

const chipsTitle = {
  title: 'ใช้งานอยู่',
  icon: 'ph:building',
  iconWeight: 'regular',
  avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  avatarVariant: 'image',
};

const chipsSecondTitle = {
  title: 'ชื่อที่สอง',
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

### ชิปและลอซเซนจ์หลายรายการ

คุณสามารถเปลี่ยนชื่อให้เป็นชิปและลอซเซนจ์หลายรายการ

<div class="spr-space-y-4 spr-bg-white-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table action :headers="headersMultiple" :data-table="dataMultiple" variant="surface" @onSort="handleSort">
    <div>
      ปรับแต่งเนื้อหาของคุณที่นี่!
    </div>
  </spr-table>
</div>

```vue
<template>
  <spr-table action :headers="headersMultiple" :data-table="dataMultiple" variant="surface" @onSort="handleSort">
    <div>ปรับแต่งเนื้อหาของคุณที่นี่!</div>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const headersMultiple = ref([
  { field: 'name', name: 'ชื่อบทบาท', sort: true, hasAvatar: false, hasSubtext: true, hasLozengeTitle: true },
  { field: 'lastUpdate', name: 'วันที่', sort: true, hasAvatar: false, hasSubtext: false, hasChipTitle: true },
]);

const lozengeCell = {
  title: 'ใช้งานอยู่',
  tone: 'success',
  avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  fill: true,
  lozengeIcon: 'ph:building',
};
const chipCell = [
  {
    title: 'ใช้งานอยู่',
    icon: 'ph:building',
    iconWeight: 'regular',
    badge: true,
    badgeText: '2',
    badgeVariant: 'brand',
    avatarUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    avatarVariant: 'image',
  },
  {
    title: 'ใช้งานอยู่',
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

## รูปแบบ

คุณสามารถปรับแต่งสีพื้นหลังของส่วนหัวของตารางโดยใช้แอตทริบิวต์ `variant` ตัวเลือกที่มีคือ `white` และ `surface`

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table action :headers="headers" :data-table="data" variant="surface" @onSort="handleSort">
    <div>
      ปรับแต่งเนื้อหาของคุณที่นี่!
    </div>
  </spr-table>
</div>

```vue
<template>
  <spr-table action :headers="headers" :data-table="data">
    <div>ปรับแต่งเนื้อหาของคุณที่นี่!</div>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const headers = ref([
  { field: 'name', name: 'ชื่อบทบาท', sort: true, hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'วันที่', sort: true, hasAvatar: false, hasSubtext: false },
]);

const data = ref([
  {
    name: {
      title: 'กะ',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '30 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'สำเร็จ',
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

## การจัดเรียง

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table action :headers="headers" :data-table="data" variant="white" @onSort="getSortOrder()" sortOrder>
    <div>
      ปรับแต่งเนื้อหาของคุณที่นี่!
    </div>
    <template #action="{ row }">
      <spr-lozenge :label="row.status.title" :tone="row.status.title.toLowerCase()" />
    </template>
    <template #action-name>
      สถานะ
    </template>
  </spr-table>
</div>

```vue
<template>
  <spr-table action :headers="headers" :data-table="data" variant="white" @onSort="getSortOrder()" sortOrder>
    <div>ปรับแต่งเนื้อหาของคุณที่นี่!</div>
    <template #action="{ row }">
      <spr-lozenge :label="row.status.title" :tone="row.status.title.toLowerCase()" />
    </template>
    <template #action-name> สถานะ </template>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const headers = ref([
  { field: 'name', name: 'ชื่อบทบาท', sort: true, hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'วันที่', sort: true, hasAvatar: false, hasSubtext: false },
]);

const data = ref([
  {
    name: {
      title: 'กะ',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '30 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'สำเร็จ',
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

## ป้าย

ป้ายสามารถมีรูปแบบสีต่างๆ เพื่อระบุสถานะต่างๆ เช่น `disabled`, `brand`, `danger`, หรือ `information`

<div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
  <spr-table action :headers="headersWithBadge" :data-table="data">
    <div>
      ปรับแต่งเนื้อหาของคุณที่นี่!
    </div>
    <template #action="{ row }">
      <spr-lozenge :label="row.status.title" :tone="row.status.title.toLowerCase()" />
    </template>
    <template #action-name>
      สถานะ
    </template>
  </spr-table>
</div>

```vue
<template>
  <spr-table action :headers="headersWithBadge" :data-table="data">
    <div>ปรับแต่งเนื้อหาของคุณที่นี่!</div>
    <template #action="{ row }">
      <spr-lozenge :label="row.status.title" :tone="row.status.title.toLowerCase()" />
    </template>
    <template #action-name> สถานะ </template>
  </spr-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const headersWithBadge = ref([
  {
    field: 'name',
    name: 'ชื่อบทบาท',
    sort: true,
    hasAvatar: true,
    hasSubtext: true,
    badgeText: '1',
    badgeVariant: 'brand',
  },
  {
    field: 'lastUpdate',
    name: 'วันที่',
    sort: true,
    hasAvatar: false,
    hasSubtext: false,
    badgeText: '2',
    badgeVariant: 'danger',
  },
]);

const data = ref([
  {
    name: {
      title: 'กะ',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '30 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'สำเร็จ',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
]);
</script>
```

## การกำหนดค่าความกว้างคอลัมน์

คอมโพเนนต์ตารางมีระบบจัดการความกว้างคอลัมน์ที่ยืดหยุ่นผ่านพร็อพเพอร์ตี้ `width` ในออบเจ็กต์ส่วนหัว ซึ่งช่วยให้คุณสร้างเลย์เอาต์ตารางที่สมดุลที่ปรับให้เข้ากับประเภทเนื้อหาต่างๆ และขนาดหน้าจอ

### ประเภทค่าความกว้าง

คุณสามารถใช้ค่าความกว้าง CSS ที่ถูกต้อง:

```javascript
const headers = ref([
  { field: 'id', name: 'ID', width: '80px' }, // ความกว้างพิกเซลคงที่
  { field: 'name', name: 'ชื่อ', width: '300px' }, // ความกว้างคงที่ที่ใหญ่ขึ้น
  { field: 'email', name: 'อีเมล', width: '40%' }, // เปอร์เซ็นต์ของความกว้างตาราง
  { field: 'role', name: 'บทบาท', width: '15em' }, // ความกว้าง em
  { field: 'status', name: 'สถานะ', width: 'auto' }, // การปรับขนาดอัตโนมัติ
  { field: 'actions', name: 'การดำเนินการ' }, // ไม่มี width = auto
]);
```

### แนวทางปฏิบัติที่ดีที่สุด

**ความกว้างพิกเซลคงที่**: เหมาะสำหรับคอลัมน์ที่มีเนื้อหาคาดการณ์ได้ เช่น ID, วันที่, หรือสถานะ

```javascript
{ field: 'id', name: 'ID', width: '80px' }
{ field: 'date', name: 'วันที่สร้าง', width: '150px' }
```

**ความกว้างเปอร์เซ็นต์**: เหมาะสำหรับเลย์เอาต์ที่ตอบสนองซึ่งคอลัมน์ควรปรับขนาดตามความกว้างตาราง

```javascript
{ field: 'description', name: 'คำอธิบาย', width: '50%' }
{ field: 'category', name: 'หมวดหมู่', width: '25%' }
```

**กลยุทธ์ความกว้างผสม**: รวมความกว้างคงที่และยืดหยุ่นสำหรับเลย์เอาต์ที่เหมาะสมที่สุด

```javascript
const headers = ref([
  { field: 'avatar', name: '', width: '60px' }, // คงที่สำหรับอวาตาร์
  { field: 'name', name: 'ชื่อ', width: '30%' }, // ยืดหยุ่นสำหรับชื่อ
  { field: 'email', name: 'อีเมล', width: '35%' }, // ยืดหยุ่นสำหรับอีเมล
  { field: 'status', name: 'สถานะ', width: '120px' }, // คงที่สำหรับสถานะ
  { field: 'actions', name: 'การดำเนินการ', width: '100px' }, // คงที่สำหรับการดำเนินการ
]);
```

### ข้อควรพิจารณาความกว้างแบบไดนามิก

เมื่อใช้ค่าที่เปลี่ยนแปลงได้ ให้หลีกเลี่ยงคลาส Tailwind CSS เช่น `spr-w-[${width}]` เพราะจะไม่ถูกสร้างขึ้นในเวลาบิลด์ แต่ให้ใช้พร็อพเพอร์ตี้ `width` หรือสไตล์อินไลน์แทน:

```javascript
// ❌ หลีกเลี่ยง - Tailwind จะไม่สร้างคลาสแบบไดนามิก
{ field: 'name', name: 'ชื่อ', customTailwindClasses: `spr-w-[${dynamicWidth}]` }

// ✅ แนะนำ - ใช้พร็อพเพอร์ตี้ width
{ field: 'name', name: 'ชื่อ', width: dynamicWidth }
```

### ความกว้างคอลัมน์ที่ตอบสนอง

สำหรับการออกแบบที่ตอบสนอง ให้พิจารณาใช้พร็อพเพอร์ตี้ CSS ที่กำหนดเองหรือการสืบค้นสื่อในสไตล์ของคุณ:

```javascript
const headers = ref([
  {
    field: 'name',
    name: 'ชื่อ',
    width: 'clamp(200px, 30%, 400px)', // ตอบสนองด้วย min/max
  },
  {
    field: 'description',
    name: 'คำอธิบาย',
    width: 'minmax(250px, 1fr)', // ความกว้างตอบสนองตามกริด
  },
]);
```

## แถวตารางที่ลากได้

อนุญาตให้ลากและวางแถวตาราง

::: warning

<ul>
  <li>ต้องทำการกลายพันธุ์ข้อมูลต้นฉบับด้วยตนเอง</li>  
  <li>เพิ่มพร็อพเพอร์ตี้ <strong>id</strong> ให้กับออบเจ็กต์ข้อมูลแถวแต่ละแถว ซึ่งใช้เพื่อระบุแถวอย่างไม่ซ้ำกันระหว่างการลากและวาง</li> 
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
    name: 'ชื่อ',
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
    id: employee.id, //เพิ่มพร็อพเพอร์ตี้ id ให้กับออบเจ็กต์ข้อมูลแถวแต่ละแถว
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
  active: 'ใช้งานอยู่',
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
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>ประเภท</th>
      <th>ค่าเริ่มต้น</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>action</td>
      <td>เปิดใช้งานคอลัมน์การดำเนินการที่ส่วนท้ายของตาราง เมื่อตั้งค่าเป็น true จะอนุญาตให้เนื้อหาที่กำหนดเองถูกวางในคอลัมน์การดำเนินการสำหรับแต่ละแถว</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>dataTable</td>
      <td>อาร์เรย์ของออบเจ็กต์ข้อมูลที่จะแสดงในตาราง แต่ละออบเจ็กต์แสดงถึงแถว โดยมีพร็อพเพอร์ตี้ที่สอดคล้องกับคอลัมน์ที่กำหนดในส่วนหัว</td>
      <td>Array&lt;TableData&gt;</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>headers</td>
      <td>อาร์เรย์ของออบเจ็กต์การกำหนดค่าส่วนหัวที่กำหนดคอลัมน์ของตาราง แต่ละออบเจ็กต์ส่วนหัวประกอบด้วยชื่อฟิลด์ ชื่อที่แสดง และตัวเลือกการแสดงผลต่างๆ</td>
      <td>Array&lt;Header&gt;</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>emptyState</td>
      <td>การกำหนดค่าสถานะว่างเปล่าที่แสดงเมื่อตารางไม่มีข้อมูล ปรับแต่งคำอธิบาย คำอธิบายย่อย รูปภาพ และขนาด</td>
      <td>EmptyState</td>
      <td>{ description: 'ไม่พบผลลัพธ์', subDescription: 'ลองใช้คำค้นหาอื่น', image: 'location', size: 'large' }</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>เมื่อตั้งค่าเป็น true จะแสดงสถานะการโหลดแทนข้อมูลตารางหรือสถานะว่างเปล่า</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>tableActions</td>
      <td>การกำหนดค่าการดำเนินการของตารางที่แสดงเหนือตาราง รวมถึงตัวเลือกสำหรับการค้นหา การกรอง และตัวเลือกเพิ่มเติม</td>
      <td>{ search: boolean, filter: boolean, option: boolean }</td>
      <td>{ search: false, filter: false, option: false }</td>
    </tr>
    <tr>
      <td>searchModel</td>
      <td>ใช้กับ v-model:searchModel เพื่อผูกค่าอินพุตการค้นหา เมื่อใช้คุณสมบัติการค้นหา prop นี้จะเปิดใช้งานการผูกสองทาง</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>sortOrder</td>
      <td>ลำดับการจัดเรียงเริ่มต้นสำหรับตาราง สามารถเป็น 'asc' (จากน้อยไปมาก) หรือ 'desc' (จากมากไปน้อย)</td>
      <td>'asc' | 'desc'</td>
      <td>'asc'</td>
    </tr>
    <tr>
      <td>variant</td>
      <td>ควบคุมสีพื้นหลังของส่วนหัวของตาราง ตัวเลือกคือ 'white' และ 'surface'</td>
      <td>'surface' | 'white'</td>
      <td>'surface'</td>
    </tr>
    <tr>
      <td>isRowClickable</td>
      <td>เมื่อเป็น true จะเปิดใช้งานการคลิกแถวเพื่อเรียกเหตุการณ์ onRowClick มีประโยชน์สำหรับตารางแบบอินเทอร์แอกทีฟที่แถวสามารถถูกเลือกหรือขยายได้</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>fullHeight</td>
      <td>เมื่อเป็น true ตารางจะใช้ความสูงเต็มที่ของคอนเทนเนอร์</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>removeHeaderOnEmpty</td>
      <td>เมื่อเป็น true ส่วนหัวของตารางจะไม่แสดงถ้าตารางไม่มีข้อมูล</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>isMultiSelect</td>
      <td>เปิดใช้งานฟังก์ชันการเลือกหลายรายการด้วยช่องทำเครื่องหมายในคอลัมน์แรกของตาราง</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>selectedKeyId</td>
      <td>ระบุคีย์ในออบเจ็กต์ข้อมูลตารางที่จะใช้เป็นตัวระบุสำหรับแถวที่เลือก ต้องระบุเมื่อใช้ isMultiSelect</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>returnCompleteSelectedProperties</td>
      <td>ควบคุมโครงสร้างของข้อมูลที่ปล่อยออกมาหากแถวถูกเลือก หากเป็น true ออบเจ็กต์ข้อมูลแถวเต็มจะถูกปล่อยออกมา หากเป็น false จะปล่อยออกมาเฉพาะค่าของพร็อพเพอร์ตี้ที่ระบุโดย selectedKeyId</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>isDraggable</td>
      <td>เปิดใช้งานฟีเจอร์ลากและวางของตาราง</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>allowSelfDrag</td>
      <td>เปิดใช้งานการลากและวางภายในตารางเดียวกัน</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>retainSelectionOnDataChange</td>
      <td>เปิดใช้งานการเก็บรักษาแถวที่เลือกเมื่อข้อมูลตารางเปลี่ยนแปลง</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>พารามิเตอร์</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>update:searchModel</td>
      <td>ปล่อยออกมาหากค่าอินพุตการค้นหาเปลี่ยนแปลง ใช้กับ v-model:searchModel สำหรับการผูกสองทาง</td>
      <td>(value: string)</td>
    </tr>
    <tr>
      <td>onSort</td>
      <td>ปล่อยออกมาหากส่วนหัวคอลัมน์ที่จัดเรียงได้ถูกคลิก ให้ชื่อฟิลด์และลำดับการจัดเรียงใหม่</td>
      <td>({ field: string, sortOrder: 'asc' | 'desc' })</td>
    </tr>
    <tr>
      <td>onRowClick</td>
      <td>ปล่อยออกมาหากแถวถูกคลิก (หาก isRowClickable เป็น true) ให้ข้อมูลแถวและดัชนีแถว</td>
      <td>(rowData: TableData, rowIndex: number)</td>
    </tr>
    <tr>
      <td>onHover</td>
      <td>ปล่อยออกมาหากเมาส์เข้าหรือออกจากแถว ให้สถานะการใช้งานอยู่และข้อมูลแถว</td>
      <td>({ active: boolean, data: TableData })</td>
    </tr>
    <tr>
      <td>update:selectedData</td>
      <td>ปล่อยออกมาหากการเลือกแถวเปลี่ยนแปลงในโหมดการเลือกหลายรายการ ให้อาร์เรย์ของรายการที่เลือกตามการตั้งค่า returnCompleteSelectedProperties</td>
      <td>(selectedItems: TableData[] | any[])</td>
    </tr>
    <tr>
      <td>onDropToEmptyZone</td>
      <td>ปล่อยออกมาหากไอเท็มที่ลากถูกวางลงในสถานะว่างเปล่า</td>
      <td>(event: DragOnChangeEvent['added'])</td>
    </tr>
    <tr>
      <td>onDropChange</td>
      <td>ปล่อยออกมาหากไอเท็มที่ลากถูกวางลงในตารางที่มีประชากร</td>
      <td>(event: DragOnChangeEmit)</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>Props</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>เนื้อหาที่แสดงเหนือตาราง โดยปกติใช้สำหรับชื่อหรือคำอธิบาย</td>
      <td>-</td>
    </tr>
    <tr>
      <td>tableActionSection</td>
      <td>เนื้อหาที่กำหนดเองสำหรับพื้นที่การดำเนินการของตาราง โดยปกติใช้เพื่อเพิ่มปุ่มหรือตัวควบคุมอื่นๆ ถัดจากการค้นหา การกรอง และตัวเลือก</td>
      <td>-</td>
    </tr>
    <tr>
      <td>action</td>
      <td>เนื้อหาสำหรับคอลัมน์การดำเนินการในแต่ละแถว เฉพาะเมื่อ prop action เป็น true เท่านั้น</td>
      <td>{ row: TableData }</td>
    </tr>
    <tr>
      <td>action-name</td>
      <td>เนื้อหาส่วนหัวสำหรับคอลัมน์การดำเนินการ เฉพาะเมื่อ prop action เป็น true เท่านั้น</td>
      <td>-</td>
    </tr>
    <tr>
      <td>empty-state</td>
      <td>เนื้อหาที่กำหนดเองที่จะแสดงเมื่อตารางไม่มีข้อมูล</td>
      <td>-</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>เนื้อหาสถานะการโหลดที่กำหนดเอง แสดงเมื่อ prop loading เป็น true</td>
      <td>-</td>
    </tr>
    <tr>
      <td>footer</td>
      <td>เนื้อหาที่แสดงที่ส่วนท้ายของตาราง โดยปกติใช้สำหรับการแบ่งหน้า หรือข้อมูลสรุป</td>
      <td>-</td>
    </tr>
    <tr>
      <td>[field]</td>
      <td>ช่องแบบไดนามิกตามชื่อฟิลด์ในส่วนหัว อนุญาตการแสดงผลที่กำหนดเองสำหรับคอลัมน์เฉพาะ</td>
      <td>{ row: TableData, rowIndex: number }</td>
    </tr>
  </tbody>
</table>

### ฟังก์ชันที่เปิดเผย

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>clearSelectedData</td>
      <td>ฟังก์ชันเพื่อล้างแถวที่เลือกในการเลือกหลายรายการ</td>      
    </tr>
  </tbody>
</table>

### พร็อพเพอร์ตี้ของออบเจ็กต์ส่วนหัว

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>ประเภท</th>
      <th>ต้องระบุ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>field</td>
      <td>ตัวระบุที่ไม่ซ้ำสำหรับคอลัมน์ แมปกับชื่อพร็อพเพอร์ตี้ในออบเจ็กต์ข้อมูล</td>
      <td>string</td>
      <td>ใช่</td>
    </tr>
    <tr>
      <td>name</td>
      <td>ชื่อที่แสดงสำหรับส่วนหัวของคอลัมน์</td>
      <td>string</td>
      <td>ใช่</td>
    </tr>
    <tr>
      <td>sort</td>
      <td>ว่าคอลัมน์สามารถจัดเรียงได้หรือไม่</td>
      <td>boolean</td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td>hasAvatar</td>
      <td>ว่าจะแสดงอวาตาร์ในเซลล์คอลัมน์หรือไม่ หากเป็น true ออบเจ็กต์ข้อมูลควรรวมพร็อพเพอร์ตี้ image</td>
      <td>boolean</td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td>hasIcon</td>
      <td>ว่าจะแสดงไอคอนในเซลล์คอลัมน์หรือไม่ หากเป็น true ออบเจ็กต์ข้อมูลควรรวมพร็อพเพอร์ตี้ icon</td>
      <td>boolean</td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td>hasSubtext</td>
      <td>ว่าจะแสดงข้อความย่อยในเซลล์คอลัมน์หรือไม่ หากเป็น true ออบเจ็กต์ข้อมูลควรรวมพร็อพเพอร์ตี้ subtext</td>
      <td>boolean</td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td>hasLozengeTitle</td>
      <td>ว่าจะแสดงชื่อเป็นลอซเซนจ์หรือไม่ หากเป็น true พร็อพเพอร์ตี้ title ควรเป็นออบเจ็กต์ LozengeTitle หรืออาร์เรย์</td>
      <td>boolean</td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td>hasChipTitle</td>
      <td>ว่าจะแสดงชื่อเป็นชิปหรือไม่ หากเป็น true พร็อพเพอร์ตี้ title ควรเป็นออบเจ็กต์ ChipTitle หรืออาร์เรย์</td>
      <td>boolean</td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td>badgeText</td>
      <td>ข้อความที่จะแสดงในป้ายถัดจากส่วนหัวของคอลัมน์</td>
      <td>string</td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td>badgeVariant</td>
      <td>รูปแบบของป้ายที่จะแสดงถัดจากส่วนหัวของคอลัมน์ ตัวเลือกประกอบด้วย 'disabled', 'brand', 'danger', และ 'information'</td>
      <td>string</td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td>avatarVariant</td>
      <td>รูปแบบของอวาตาร์ที่จะแสดงในเซลล์คอลัมน์ ใช้กับ hasAvatar</td>
      <td>string</td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td>customTailwindClasses</td>
      <td>คลาส CSS ของ Tailwind ที่กำหนดเองที่จะใช้กับเซลล์คอลัมน์</td>
      <td>string</td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td>width</td>
      <td>ตั้งค่าความกว้างของคอลัมน์ ยอมรับค่าความกว้าง CSS ที่ถูกต้อง (เช่น '200px', '25%', '15em', 'auto') พร็อพเพอร์ตี้นี้ควบคุมการปรับขนาดคอลัมน์โดยตรง และมีความสำคัญอย่างยิ่งในการสร้างตารางที่สมส่วนอย่างเหมาะสม</td>
      <td>string</td>
      <td>ไม่</td>
    </tr>
  </tbody>
</table>

## การใช้ผลิตภัณฑ์

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
  { field: 'name', name: 'ชื่อบทบาท', sort: true, hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'วันที่', sort: true, hasAvatar: false, hasSubtext: false },
]);

const headersWithBadge = ref([
  { field: 'name', name: 'ชื่อบทบาท', sort: true, hasAvatar: true, hasSubtext: true, badgeText:'1', badgeVariant:'brand' },
  { field: 'lastUpdate', name: 'วันที่', sort: true, hasAvatar: false, hasSubtext: false, badgeText:'2', badgeVariant:'danger'  },
]);

const draggableTableHeaders = ref([
  {
    field: 'name',
    name: 'ชื่อ',
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
  active: 'ใช้งานอยู่',
};

const employeeStatusTone = {
  active: 'success',
};

const data = ref([
  {
    name: {
      title: 'กะ',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '30 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'สำเร็จ',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
    {
    name: {
      title: 'กะ 1',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '01 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'รอดำเนินการ',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
      {
    name: {
      title: 'กะ 2',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '01 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'รอดำเนินการ',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
      {
    name: {
      title: 'กะ 3',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '01 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'รอดำเนินการ',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
      {
    name: {
      title: 'กะ 4',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '01 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'รอดำเนินการ',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
      {
    name: {
      title: 'กะ 5',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: '01 พ.ย. 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'รอดำเนินการ',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
]);
</script>
