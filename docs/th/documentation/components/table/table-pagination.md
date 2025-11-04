---
title: การแบ่งหน้าในตาราง
descripttion: คอมโพเนนต์การแบ่งหน้าในตารางให้วิธีการมาตรฐานในการจัดการตัวควบคุมการแบ่งหน้าในตารางในแอปพลิเคชันของคุณ รวมถึงคุณสมบัติต่างๆ เช่น การเลือกจำนวนแถว การนำทางหน้า และตัวเลือกการป้อนหมายเลขหน้าปัจจุบันที่แก้ไขได้
outline: deep
---

# การแบ่งหน้าในตาราง

คอมโพเนนต์การแบ่งหน้าในตารางให้วิธีการมาตรฐานในการจัดการตัวควบคุมการแบ่งหน้าในตารางในแอปพลิเคชันของคุณ รวมถึงคุณสมบัติต่างๆ เช่น การเลือกจำนวนแถว การนำทางหน้า และตัวเลือกการป้อนหมายเลขหน้าปัจจุบันที่แก้ไขได้

## การใช้งานพื้นฐาน

<div class="spr-h-fit">
  <spr-table :headers="headers" :data-table="data" :full-height="true">
    <template #footer>
      <spr-table-pagination
        v-model:selected-row-count="selectedRowCount"
        v-model:current-page="currentPage"
        :total-items="totalItems"
        :dropdown-selection="dropdownSelection"
        :version="'backend'"
        @previous="handlePrevious"
        @next="handleNext"
      />
    </template>
  </spr-table>
</div>

```vue
<template>
  <div class="spr-h-fit">
    <spr-table :headers="headers" :data-table="data" :full-height="true">
      <template #footer>
        <spr-table-pagination
          v-model:selected-row-count="selectedRowCount"
          v-model:current-page="currentPage"
          :total-items="totalItems"
          :dropdown-selection="dropdownSelection"
          :version="'backend'"
          @previous="handlePrevious"
          @next="handleNext"
        />
      </template>
    </spr-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import SprTable from '@/components/table/table.vue';
import SprTablePagination from '@/components/table/table-pagination/table-pagination.vue';
import tableData from '@/mock/tableData';

const rawData = ref([
  ...Array.from({ length: 100 }, (_, i) => ({
    name: {
      title: `กะ ${i + 1}`,
      subtext: `Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam. รายการ ${i + 1}`,
      image: `https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg`,
    },
    lastUpdate: {
      title: `พ.ย. ${(i % 30) + 1}, 2025`,
      subtext: `Lorem ipsum dolor รายการ ${i + 1}`,
      image: `https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg`,
    },
    status: {
      title: ['สำเร็จ', 'รอดำเนินการ', 'ล้มเหลว'][i % 3],
      subtext: `Lorem ipsum dolor sit amet, consectetur, sed etiam. สถานะ ${i + 1}`,
      image: `https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg`,
    },
  })),
]);

const headers = ref([
  { field: 'name', name: 'ชื่อบทบาท', hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'วันที่' },
  { field: 'status', name: 'สถานะ' },
]);

const totalItems = ref(tableData.value.length);
const currentPage = ref(1);
const dropdownSelection = [
  { text: '10', value: '10' },
  { text: '20', value: '20' },
  { text: '30', value: '30' },
];

const selectedRowCount = ref(10);
const data = ref(rawData.value.slice(0, selectedRowCount.value));

const updateDataTable = () => {
  data.value = rawData.value.slice(
    (currentPage.value - 1) * selectedRowCount.value,
    currentPage.value * selectedRowCount.value,
  );
};

const handlePrevious = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    updateDataTable();
  }
};

const handleNext = () => {
  if (currentPage.value * selectedRowCount.value < totalItems.value) {
    currentPage.value++;
    updateDataTable();
  }
};

watch(selectedRowCount, () => {
  currentPage.value = 1; // รีเซ็ตเป็นหน้าแรกเมื่อจำนวนแถวเปลี่ยน
  updateDataTable();
});

watch(currentPage, (newValue) => {
  if (!currentPage.value) return;
  else if (currentPage.value > Math.ceil(totalItems.value / selectedRowCount.value)) {
    currentPage.value = Math.ceil(totalItems.value / selectedRowCount.value);
  }
  updateDataTable();
});
</script>
```

## ด้วยหน้าปัจจุบันที่แก้ไขได้

คุณสามารถเปิดใช้งานการป้อนหมายเลขหน้าโดยตรงโดยตั้งค่า prop `editable-current-page`:

<div class="spr-h-fit">
  <spr-table :headers="headers" :data-table="data" :full-height="true">
    <template #footer>
      <spr-table-pagination
        v-model:selected-row-count="selectedRowCount"
        v-model:current-page="currentPage"
        :total-items="totalItems"
        :dropdown-selection="dropdownSelection"
        :version="'backend'"
        editable-current-page
        @previous="handlePrevious"
        @next="handleNext"
      />
    </template>
  </spr-table>
</div>

```vue
<template>
  <spr-table-pagination
    :selected-row-count="10"
    :total-items="100"
    :current-page="1"
    :editable-current-page="true"
    :dropdown-selection="[
      { text: '10', value: '10' },
      { text: '20', value: '20' },
      { text: '50', value: '50' },
      { text: '100', value: '100' },
    ]"
  />
</template>
```

## API Reference

### Props

<div class="spr-table-container">
  <table class="spr-table">
    <thead>
      <tr>
        <th>ชื่อ</th>
        <th>ประเภท</th>
        <th>ค่าเริ่มต้น</th>
        <th>ต้องระบุ</th>
        <th>คำอธิบาย</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>selectedRowCount</td>
        <td>number</td>
        <td>10</td>
        <td>ใช่</td>
        <td>จำนวนแถวที่จะแสดงต่อหน้า</td>
      </tr>
      <tr>
        <td>totalItems</td>
        <td>number</td>
        <td>1</td>
        <td>ใช่</td>
        <td>จำนวนรายการทั้งหมดในชุดข้อมูล</td>
      </tr>
      <tr>
        <td>currentPage</td>
        <td>number</td>
        <td>1</td>
        <td>ใช่</td>
        <td>หมายเลขหน้าที่ใช้งานอยู่ในปัจจุบัน</td>
      </tr>
      <tr>
        <td>dropdownSelection</td>
        <td>Array&lt;{ text: string; value: string }&gt;</td>
        <td>[
        { text: 10, value: 10 },
        { text: 20, value: 20 },
        { text: 50, value: 50 },
        { text: 100, value: 100 },
        ]</td>
        <td>ใช่</td>
        <td>ตัวเลือกที่มีสำหรับแถวต่อหน้า</td>
      </tr>
      <tr>
        <td>bordered</td>
        <td>boolean</td>
        <td>true</td>
        <td>ไม่</td>
        <td>ว่าจะแสดงเส้นขอบรอบคอมโพเนนต์การแบ่งหน้า</td>
      </tr>
      <tr>
        <td>editableCurrentPage</td>
        <td>boolean</td>
        <td>false</td>
        <td>ไม่</td>
        <td>เปิดใช้งานการป้อนหมายเลขหน้าโดยตรง</td>
      </tr>
    </tbody>
  </table>
</div>

### Events

<div class="spr-table-container">
  <table class="spr-table">
    <thead>
      <tr>
        <th>ชื่อ</th>
        <th>พารามิเตอร์</th>
        <th>คำอธิบาย</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>update:selectedRowCount</td>
        <td>(value: number)</td>
        <td>ปล่อยออกมาหากจำนวนแถวต่อหน้าเปลี่ยน</td>
      </tr>
      <tr>
        <td>update:currentPage</td>
        <td>(value: number)</td>
        <td>ปล่อยออกมาหากหมายเลขหน้าปัจจุบันเปลี่ยน</td>
      </tr>
      <tr>
        <td>previous</td>
        <td>-</td>
        <td>ปล่อยออกมาหากปุ่มหน้าก่อนหน้าถูกคลิก</td>
      </tr>
      <tr>
        <td>next</td>
        <td>-</td>
        <td>ปล่อยออกมาหากปุ่มหน้าถัดไปถูกคลิก</td>
      </tr>
    </tbody>
  </table>
</div>

<script setup lang="ts">
import { ref, watch } from 'vue';
import SprTable from "@/components/table/table.vue";
import SprTablePagination from "@/components/table/table-pagination/table-pagination.vue";
import tableData from "@/mock/tableData";

const headers = ref([
  { field: 'name', name: 'ชื่อบทบาท', hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'วันที่'},
  { field: 'status', name: 'สถานะ' },
]);

const totalItems = ref(tableData.value.length);
const currentPage = ref(1);
const dropdownSelection = [
  { text: '10', value: '10' },
  { text: '20', value: '20' },
  { text: '30', value: '30' },
];

const selectedRowCount = ref(10);
const data = ref(tableData.value.slice(0, selectedRowCount.value));
const updateDataTable = () => {
  data.value = tableData.value.slice((currentPage.value - 1) * selectedRowCount.value, currentPage.value * selectedRowCount.value);
}
watch(selectedRowCount, () => {
  currentPage.value = 1; // รีเซ็ตเป็นหน้าแรกเมื่อจำนวนแถวเปลี่ยน
  updateDataTable();
});

watch(currentPage, (newValue) => {
  if(!currentPage.value) return;
  else if (currentPage.value > Math.ceil(totalItems.value / selectedRowCount.value)) {
    currentPage.value = Math.ceil(totalItems.value / selectedRowCount.value);
  }
  updateDataTable();
});

const handlePrevious = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    updateDataTable();
  }
};

const handleNext = () => {
  if (currentPage.value * selectedRowCount.value < totalItems.value) {
    currentPage.value++;
    updateDataTable();
  }
};
</script>
