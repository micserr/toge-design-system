---
title: รายการ
description: คอมโพเนนต์รายการที่หลากหลายและปรับแต่งได้ซึ่งรองรับการเลือกเดี่ยวและหลายรายการ การจัดกลุ่ม การค้นหา โครงสร้างลำดับชั้น (แบบบันได) และโหมดการแสดง lozenge เหมาะสำหรับการสร้างเมนูดรอปดาวน์และอินเทอร์เฟซการเลือกที่เข้าถึงได้
outline: deep
---

# รายการ

คอมโพเนนต์รายการเป็นองค์ประกอบ UI ที่ทรงพลังและยืดหยุ่นที่ออกแบบมาสำหรับการแสดงและเลือกไอเท็มจากรายการ มันรองรับคุณสมบัติที่หลากหลายรวมถึงโหมดการเลือกเดี่ยวและหลายรายการ การจัดกลุ่มไอเท็ม การทำงานการค้นหา การนำทางลำดับชั้น และรูปแบบการแสดง lozenge

## การใช้งานพื้นฐาน

การใช้งานพื้นฐานที่สุดเกี่ยวข้องกับการผูกการเลือกของคุณกับ `v-model` และให้รายการไอเท็มผ่านพร็อพส์ `menu-list` แต่ละไอเท็มต้องมีอย่างน้อยพร็อพส์ `text` (ป้ายแสดง) และ `value` (ตัวระบุเฉพาะ)

<div 
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="singleSelectOutput.basicUsage" :menu-list="menuList" />
</div>

```vue
<template>
  <div
    :class="[
      'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
      'spr-border-color-weak spr-border spr-border-solid',
    ]"
  >
    <spr-list v-model="selectedItems" :menu-list="menuList" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'Mango', value: 'mango' },
]);
</script>
```

## การเลือกหลายรายการ

เปิดใช้งานการเลือกไอเท็มหลายรายการโดยเพิ่มพร็อพส์ `multi-select` สิ่งนี้จะแสดงช่องทำเครื่องหมายข้างแต่ละไอเท็ม อนุญาตให้ผู้ใช้เลือกไอเท็มหลายรายการพร้อมกัน

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="singleSelectOutput.multiSelect" :menu-list="menuList" multi-select />
</div>

```vue
<template>
  <div
    :class="[
      'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
      'spr-border-color-weak spr-border spr-border-solid',
    ]"
  >
    <spr-list v-model="selectedItems" :menu-list="menuList" multi-select />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
]);
</script>
```

## การจัดกลุ่มไอเท็ม

จัดกลุ่มไอเท็มโดยใช้พร็อพส์ `group-items-by` ด้วยค่า `'default'`, `'A-Z'`, หรือ `'Z-A'`:

- **default**: จัดกลุ่มตามพร็อพส์ `group` ของไอเท็ม
- **A-Z**: เรียงตามตัวอักษรในลำดับจากน้อยไปมาก
- **Z-A**: เรียงตามตัวอักษรในลำดับจากมากไปน้อย

<div class="spr-grid spr-gap-4">
  <div
    :class="[
      'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
      'spr-border spr-border-solid spr-border-color-weak'
    ]"
  >
    <h5 class="spr-mb-2 spr-text-sm spr-font-medium">จัดกลุ่มตามค่าเริ่มต้น</h5>
    <spr-list v-model="singleSelectOutput.groupingDefault" :menu-list="groupedMenuList" group-items-by="default" />
  </div>
  <div
    :class="[
      'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
      'spr-border spr-border-solid spr-border-color-weak'
    ]"
  >
    <h5 class="spr-mb-2 spr-text-sm spr-font-medium">Grouped by A-Z</h5>
    <spr-list v-model="singleSelectOutput.groupingAlphabetical" :menu-list="groupedMenuList" group-items-by="A-Z" />
  </div>
</div>

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="menuList" group-items-by="default" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuList = ref([
  { text: 'Apple', value: 'apple', group: 'Fruits' },
  { text: 'Banana', value: 'banana', group: 'Fruits' },
  { text: 'Carrot', value: 'carrot', group: 'Vegetables' },
  { text: 'Date', value: 'date', group: 'Fruits' },
  { text: 'Eggplant', value: 'eggplant', group: 'Vegetables' },
]);
</script>
```

## รายการที่ค้นหาได้

เพิ่มฟังก์ชันการค้นหาด้วยพร็อพส์ `searchable-menu` ผู้ใช้สามารถกรองไอเท็มโดยพิมพ์ในช่องค้นหา

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="singleSelectOutput.searchableList" :menu-list="menuList" searchable-menu />
</div>

```vue
<template>
  <spr-list
    v-model="selectedItems"
    :menu-list="menuList"
    searchable-menu
    searchable-menu-placeholder="Search items..."
  />
</template>
```

## รายการปุ่มวิทยุ

แสดงตัวเลือกปุ่มวิทยุสำหรับรายการการเลือกเดี่ยวโดยใช้พร็อพส์ `radio-list` ปุ่มวิทยุปรากฏขึ้นก่อนข้อความไอเท็มและไอคอน ซึ่งให้การระบุภาพที่ชัดเจนสำหรับโหมดการเลือกเดี่ยว

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="singleSelectOutput.radioList" :menu-list="menuList" radio-list />
</div>

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="menuList" radio-list />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuList = ref([
  { text: 'Option 1', value: 'option1' },
  { text: 'Option 2', value: 'option2' },
  { text: 'Option 3', value: 'option3' },
  { text: 'Option 4', value: 'option4' },
  { text: 'Option 5', value: 'option5' },
]);
</script>
```

## ข้อความรอง

เพิ่มข้อความรองที่อธิบายไว้ในรายการไอเท็มโดยรวมพร็อพส์ `subtext` สิ่งนี้มีประโยชน์สำหรับการให้บริบทเพิ่มเติมหรือข้อมูลเกี่ยวกับแต่ละไอเท็ม

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="singleSelectOutput.subtext" :menu-list="itemsWithSubtext" />
</div>

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="itemsWithSubtext" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const itemsWithSubtext = ref([
  {
    text: 'Home',
    value: 'home',
    subtext: 'Go to home page',
  },
  {
    text: 'Settings',
    value: 'settings',
    subtext: 'Configure preferences',
  },
  {
    text: 'Users',
    value: 'users',
    subtext: 'Manage user accounts',
  },
]);
</script>
```

## ไอคอน

### ไอคอนรายการเริ่มต้น

ใช้ไอคอนเริ่มต้นกับรายการทั้งหมดในรายการโดยใช้พร็อพส์ `itemIcon` สิ่งนี้มีประโยชน์เมื่อรายการทั้งหมดควรแสดงไอคอนเดียวกัน

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="menuList" item-icon="ph:check" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
]);
</script>
```

### ไอคอนรายการ

เพิ่มไอคอนในรายการไอเท็มแต่ละรายการโดยรวมพร็อพส์ `icon` คุณสามารถปรับแต่งสีไอคอนได้เป็นทางเลือกโดยใช้พร็อพส์ `iconColor`

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="singleSelectOutput.lozengeBadge" :menu-list="menuItemsWithLozenge" />
</div>

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="itemsWithIcons" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const itemsWithIcons = ref([
  {
    text: 'Home',
    value: 'home',
    icon: 'ph:house',
  },
  {
    text: 'Settings',
    value: 'settings',
    icon: 'ph:gear',
    iconColor: 'spr-text-blue-500',
  },
  {
    text: 'Users',
    value: 'users',
    icon: 'ph:users',
  },
]);
</script>
```

## รายการแบบบันได (ลำดับชั้น)

สร้างรายการซ้อนลำดับชั้นโดยใช้พร็อพส์ `ladderized` และรวมพร็อพส์ `sublevel` ในไอเท็ม

<div class="spr-rounded-md spr-max-h-[300px] spr-border spr-border-solid spr-border-color-weak spr-overflow-hidden">
  <spr-ladderized-list v-model="singleSelectOutput.hierarchicalList" :menu-list="hierarchicalData" />
</div>

```vue
<template>
  <spr-ladderized-list v-model="selectedItems" :menu-list="hierarchicalData" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const hierarchicalData = ref([
  {
    text: 'Fruits',
    value: 'fruits',
    sublevel: [
      { text: 'Apple', value: 'apple' },
      { text: 'Banana', value: 'banana' },
      { text: 'Cherry', value: 'cherry' },
    ],
  },
  {
    text: 'Vegetables',
    value: 'vegetables',
    sublevel: [
      { text: 'Carrot', value: 'carrot' },
      { text: 'Broccoli', value: 'broccoli' },
    ],
  },
]);
</script>
```

## การแสดงแบบ Lozenge

คอมโพเนนต์รายการรองรับโหมดการแสดง lozenge สองแบบ:

### 1. โหมด Lozenge เต็ม (ไอเท็มเป็น Lozenge)

แสดงไอเท็มรายการทั้งหมดเป็น lozenge โดยเปิดใช้งานพร็อพส์ `lozenge` และให้ `lozengeProps` สำหรับแต่ละไอเท็ม ไอเท็มจะกลายเป็น lozenge เอง

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="lozengeListValue" :menu-list="lozengeMenuList" lozenge />
</div>

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="lozengeItems" lozenge />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const lozengeItems = ref([
  {
    text: 'Active',
    value: 'active',
    lozengeProps: {
      label: 'Active',
      tone: 'success',
      fill: true,
      icon: 'ph:check-circle',
    },
  },
  {
    text: 'Pending',
    value: 'pending',
    lozengeProps: {
      label: 'Pending',
      tone: 'neutral',
      fill: false,
      icon: 'ph:clock',
    },
  },
  {
    text: 'Disabled',
    value: 'disabled',
    lozengeProps: {
      label: 'Disabled',
      tone: 'negative',
      fill: true,
      icon: 'ph:x-circle',
    },
  },
]);
</script>
```

### 2. ป้าย Lozenge (ไอเท็มที่มี Lozenge ด้านขวา)

แสดงไอเท็มรายการปกติที่มีป้าย lozenge ด้านขวาโดยใช้พร็อพส์ `lozenge` ในไอเท็มแต่ละรายการ สิ่งนี้ช่วยให้คุณแสดงข้อมูลเมตาหรือสถานะควบคู่ไปกับข้อความไอเท็ม

 <div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="singleSelectOutput.subtext" :menu-list="itemsWithSubtext" />
</div>

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="menuItems" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuItems = ref([
  {
    text: 'Task 1',
    value: 'task1',
    subtext: 'Due tomorrow',
    lozenge: {
      label: 'Pending',
      tone: 'neutral',
      fill: false,
    },
  },
  {
    text: 'Task 2',
    value: 'task2',
    subtext: 'Completed',
    lozenge: {
      label: 'Done',
      tone: 'success',
      fill: true,
    },
  },
  {
    text: 'Task 3',
    value: 'task3',
    subtext: 'In progress',
    lozenge: {
      label: 'Active',
      tone: 'success',
      fill: true,
    },
  },
]);
</script>
```

## ไอเท็มที่เลือกไว้ล่วงหน้า

ใช้ `pre-selected-items` เพื่อตั้งการเลือกเริ่มต้นตามค่าของไอเท็ม

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="menuList" :pre-selected-items="['apple', 'banana']" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
]);
</script>
```

## การจัดการอีเวนต์

ใช้ `@update:model-value` เพื่อตอบสนองต่อการเปลี่ยนแปลงการเลือกและดึงข้อมูลออบเจ็กต์ไอเท็มที่เลือกทั้งหมด

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak spr-mb-4'
  ]"
>
  <spr-list 
    v-model="singleSelectOutput.eventHandling" 
    :menu-list="menuList" 
    @update:model-value="handleSelection"
  />
</div>
<div class="spr-p-4 spr-bg-blue-50 spr-rounded-md spr-border spr-border-blue-200">
  <p class="spr-text-sm">Selected: {{ selectedItemInfo }}</p>
</div>

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="menuList" @update:model-value="handleSelection" />
  <div v-if="selectedItem" class="spr-mt-4 spr-bg-blue-50 spr-p-4">
    <p>Selected Item: {{ selectedItem.text }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);
const selectedItem = ref(null);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
]);

const handleSelection = (items) => {
  selectedItem.value = items[0] || null;
};
</script>
```

---

## การอ้างอิง API

### พร็อพส์

<table>
  <thead>
    <tr>
      <th>พร็อพส์</th>
      <th>คำอธิบาย</th>
      <th>ประเภท</th>
      <th>ค่าเริ่มต้น</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>model-value</code> (v-model)</td>
      <td>การผูกสองทางสำหรับไอเท็มที่เลือกซึ่งประกอบด้วยออบเจ็กต์ไอเท็มทั้งหมด</td>
      <td><code>MenuListType[]</code></td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td><code>menu-list</code></td>
      <td>อาร์เรย์ของไอเท็มที่จะแสดง</td>
      <td><code>MenuListType[]</code></td>
      <td><code>[]</code> (จำเป็น)</td>
    </tr>
    <tr>
      <td><code>group-items-by</code></td>
      <td>กลยุทธ์การจัดกลุ่ม: <code>'default'</code> (ตามพร็อพส์กลุ่ม), <code>'A-Z'</code> (จากน้อยไปมาก), หรือ <code>'Z-A'</code> (จากมากไปน้อย)</td>
      <td><code>'default' | 'A-Z' | 'Z-A'</code></td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td><code>multi-select</code></td>
      <td>เปิดใช้งานโหมดการเลือกหลายรายการด้วยช่องทำเครื่องหมาย</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>pre-selected-items</code></td>
      <td>เลือกไอเท็มล่วงหน้าตามค่าของพวกเขา</td>
      <td><code>(string | number | Record&lt;string, unknown&gt;)[]</code></td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td><code>searchable-menu</code></td>
      <td>แสดงอินพุตการค้นหาสำหรับกรองไอเท็ม</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>searchable-menu-placeholder</code></td>
      <td>ข้อความตัวยึดตำแหน่งสำหรับอินพุตการค้นหา</td>
      <td><code>string</code></td>
      <td><code>'Search...'</code></td>
    </tr>
    <tr>
      <td><code>search-value</code></td>
      <td>ค่าการค้นหาภายนอก (การผูกสองทาง)</td>
      <td><code>string</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>menu-level</code></td>
      <td>ระดับการซ้อนสำหรับรายการลำดับชั้น</td>
      <td><code>number</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>ladderized</code></td>
      <td>เปิดใช้งานการแสดงรายการลำดับชั้น/แบบบันได</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>disabled-local-search</code></td>
      <td>ปิดใช้งานการกรองการค้นหาในเครื่อง</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>loading</code></td>
      <td>แสดงโครงกระดูกการโหลดแทนไอเท็ม</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>no-check</code></td>
      <td>ซ่อนไอคอนเครื่องหมายถูกในโหมดการเลือกเดี่ยว</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>lozenge</code></td>
      <td>แสดงไอเท็มเป็น lozenge</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>supporting-display-text</code></td>
      <td>แสดงข้อความแบบกำหนดเอง (เช่น "2 Selected")</td>
      <td><code>string</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>display-list-item-selected</code></td>
      <td>แสดงจำนวนไอเท็มที่เลือกเมื่อค้นหาได้</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>sticky-search-offset</code></td>
      <td>ออฟเซ็ตสำหรับส่วนหัวการค้นหาที่ติด</td>
      <td><code>string | number</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>item-icon</code></td>
      <td>ไอคอนเริ่มต้นสำหรับไอเท็มทั้งหมด</td>
      <td><code>string</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>disabled-unselected-items</code></td>
      <td>ปิดใช้งานและทำให้ไอเท็มที่ไม่ได้เลือกเป็นสีเทา</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>radio-list</code></td>
      <td>แสดงปุ่มวิทยุสำหรับโหมดการเลือกเดี่ยว (ต้องใช้การเลือกเดี่ยว ไม่เข้ากันได้กับการเลือกหลายรายการ)</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

### อีเวนต์

<table>
  <thead>
    <tr>
      <th>อีเวนต์</th>
      <th>คำอธิบาย</th>
      <th>เพย์โหลด</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>update:modelValue</code></td>
      <td>ปล่อยเมื่อการเลือกเปลี่ยนแปลง</td>
      <td><code>MenuListType[]</code> - อาร์เรย์ของออบเจ็กต์ไอเท็มที่เลือก</td>
    </tr>
    <tr>
      <td><code>update:searchValue</code></td>
      <td>ปล่อยเมื่ออินพุตการค้นหาเปลี่ยนแปลง</td>
      <td><code>string</code> - ข้อความค้นหาใหม่</td>
    </tr>
    <tr>
      <td><code>@get-single-selected-item</code></td>
      <td>ปล่อยเมื่อไอเท็มถูกเลือกในโหมดการเลือกเดี่ยว</td>
      <td><code>MenuListType</code> - ออบเจ็กต์ไอเท็มที่เลือก</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprList from "@/components/list/list.vue"
import SprLadderizedList from "@/components/list/ladderized-list/ladderized-list.vue"

import { MenuListType } from '@/components/list/list';

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'Mango', value: 'mango' },
]);

const groupedMenuList = ref([
  { text: 'Apple', value: 'apple', group: 'Fruits' },
  { text: 'Banana', value: 'banana', group: 'Fruits' },
  { text: 'Carrot', value: 'carrot', group: 'Vegetables' },
  { text: 'Date', value: 'date', group: 'Fruits' },
  { text: 'Eggplant', value: 'eggplant', group: 'Vegetables' },
  { text: 'Fig', value: 'fig', group: 'Fruits' },
  { text: 'Grape', value: 'grape', group: 'Fruits' },
  { text: 'Honeydew', value: 'honeydew', group: 'Fruits' },
  { text: 'Kale', value: 'kale', group: 'Vegetables' },
  { text: 'Lemon', value: 'lemon', group: 'Fruits' },
]);

const itemsWithIcons = ref([
  { text: 'Home', value: 'home', icon: 'ph:house', subtext: 'Go to home page' },
  { text: 'Settings', value: 'settings', icon: 'ph:gear', subtext: 'Configure preferences', iconColor: 'spr-text-blue-500' },
  { text: 'Users', value: 'users', icon: 'ph:users', subtext: 'Manage user accounts' },
]);

const hierarchicalData = ref([
  {
    text: 'Fruits',
    value: 'fruits',
    sublevel: [
      { text: 'Apple', value: 'apple' },
      { text: 'Banana', value: 'banana' },
      { text: 'Cherry', value: 'cherry' },
    ],
  },
  {
    text: 'Vegetables',
    value: 'vegetables',
    sublevel: [
      { text: 'Carrot', value: 'carrot' },
      { text: 'Broccoli', value: 'broccoli' },
    ],
  },
]);

const lozengeMenuList = ref([
  {
    text: 'Active',
    value: 'active',
    lozengeProps: {
      label: 'Active',
      tone: 'success',
      fill: true,
    },
  },
  {
    text: 'Pending',
    value: 'pending',
    lozengeProps: {
      label: 'Pending',
      tone: 'neutral',
      fill: false,
    },
  },
]);

const singleSelectOutput = ref({
  basicUsage: [],
  multiSelect: [],
  groupingDefault: [],
  groupingAlphabetical: [],
  searchableList: [],
  radioList: [],
  subtext: [],
  itemIcons: [],
  hierarchicalList: [],
  eventHandling: [],
  lozengeBadge: [],
});

const menuItemsWithLozenge = ref([
  {
    text: 'Task 1',
    value: 'task1',
    subtext: 'Due tomorrow',
    lozenge: {
      label: 'Pending',
      tone: 'neutral',
      fill: false,
    },
  },
  {
    text: 'Task 2',
    value: 'task2',
    subtext: 'Completed',
    lozenge: {
      label: 'Done',
      tone: 'success',
      fill: true,
    },
  },
  {
    text: 'Task 3',
    value: 'task3',
    subtext: 'In progress',
    lozenge: {
      label: 'Active',
      tone: 'success',
      fill: true,
    },
  },
]);

const lozengeListValue = ref([]);
const selectedItemInfo = ref('None selected');

const handleSelection = (items) => {
  if (items.length > 0) {
    selectedItemInfo.value = items[0].text;
  } else {
    selectedItemInfo.value = 'None selected';
  }
};
</script>
