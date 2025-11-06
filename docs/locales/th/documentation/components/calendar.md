---
title: คอมโพเนนต์ปฏิทิน
descripttion: คอมโพเนนต์ปฏิทินเป็นปฏิทินรายสัปดาห์ที่ครอบคลุมและปรับแต่งได้ ออกแบบมาสำหรับการจัดตารางเวลาพนักงานและการจัดการ มันให้อินเทอร์เฟซที่มีคุณสมบัติครบถ้วนสำหรับการดูและโต้ตอบกับตารางเวลาพนักงาน รวมถึงการสนับสนุนการนำทางวันที่รายสัปดาห์ รายชื่อพนักงานพร้อมข้อมูลโปรไฟล์ การแสดงกะหลายรายการ วันหยุด การเลื่อนแบบไม่สิ้นสุด การปรับแต่งสถานะว่างเปล่า สถานะการโหลด และการออกแบบที่ตอบสนอง
outline: deep
---

# คอมโพเนนต์ปฏิทิน

คอมโพเนนต์ `Calendar` เป็นปฏิทินรายสัปดาห์ที่ครอบคลุมและปรับแต่งได้ ออกแบบมาสำหรับการจัดตารางเวลาพนักงานและการจัดการ มันให้อินเทอร์เฟซที่มีคุณสมบัติครบถ้วนสำหรับการดูและโต้ตอบกับตารางเวลาพนักงาน รวมถึงการสนับสนุน:

- การนำทางวันที่รายสัปดาห์ด้วยการควบคุมที่ใช้งานง่าย
- รายชื่อพนักงานพร้อมข้อมูลโปรไฟล์และการติดตามชั่วโมงการทำงาน
- การแสดงกะหลายรายการสำหรับแต่ละวันพร้อมรายละเอียด
- การสนับสนุนวันหยุดและประเภทกะแบบกำหนดเอง
- การเลื่อนแบบไม่สิ้นสุดสำหรับรายชื่อพนักงานขนาดใหญ่
- การปรับแต่งสถานะว่างเปล่า
- สถานะการโหลดและตัวโหลดโครงกระดูก
- การออกแบบที่ตอบสนองด้วยการจัดการการล้นที่เหมาะสม

## การใช้งาน

### ตัวอย่างพื้นฐาน

<div class="spr-text-base">
  <div v-if="searchEmployee">
  <span class="spr-font-medium">ค้นหาพนักงาน:</span>
    {{searchEmployee}}
  </div>
  <div v-if="selectedCell.employeeId">
  <span class="spr-font-medium">เซลล์ที่เลือก: </span>
  {{selectedCell}}
  </div>
  <div v-if="selectedCompany">
  <span class="spr-font-medium">บริษัทที่เลือก:</span>
    {{selectedCompany}}
  </div>
  <div v-if="selectedDepartment">
  <span class="spr-font-medium">แผนกที่เลือก:</span>
    {{selectedDepartment}}
  </div>
  <div v-if="selectedBranch">
  <span class="spr-font-medium">สาขาที่เลือก:</span>
    {{selectedBranch}}
  </div>
</div>

<div class="spr-overflow-x-auto">
  <div>
    <SprCalendar
      v-model:search="searchEmployee"
      v-model:selected-cell="selectedCell"
      v-model:selected-company="selectedCompany"
      v-model:selected-department="selectedDepartment"
      v-model:selected-branch="selectedBranch"
      :employees="employees"
      :initial-date="initialDate"
      :company-options="companyOptions"
      :department-options="departmentOptions"
      :branch-options="branchOptions"
    >
      <template #custom="{ details }">
        <spr-calendar-cell
          :view-only="false"
          custom-border-size="1"
          custom-color="#FFFFFF"
          fullwidth
          @on-click="
            onCellClick({ employeeId: employee.id, date: formatDate(date, dateFormat), shift: null })
          "
        >
          <div class="spr-flex spr-w-full spr-items-center spr-justify-center spr-gap-size-spacing-3xs">
            <Icon icon="ph:plus" />
            <div class="spr-label-xs-medium">สร้าง</div>
          </div>
        </spr-calendar-cell>
      </template>
    </SprCalendar>
  </div>
</div>

```vue
<template>
  <SprCalendar
    v-model:search="searchEmployee"
    v-model:selected-cell="selectedCell"
    v-model:selected-company="selectedCompany"
    v-model:selected-department="selectedDepartment"
    v-model:selected-branch="selectedBranch"
    :employees="employees"
    :initial-date="initialDate"
    :company-options="companyOptions"
    :department-options="departmentOptions"
    :branch-options="branchOptions"
  />
</template>

<script setup lang="ts">
import SprCalendar from '@/components/calendar/calendar.vue';
import { ref } from 'vue';

const initialDate = new Date();
const searchEmployee = ref();
const selectedCompany = ref('');
const selectedDepartment = ref('');
const selectedBranch = ref('');
const selectedCell = ref({
  employeeId: '',
  date: '',
  schedule: null,
});

const employees = [
  {
    id: 1,
    name: 'Theresa Webb',
    position: 'Senior UX Researcher',
    avatar: '',
    highlight: true,
    hoursWorked: 40,
    hoursTarget: 48,
    schedule: {
      '2025-05-05': [{ type: 'restday' }],
      '2025-05-06': [{ startTime: '09:00AM', endTime: '06:00PM', location: 'Office A', type: 'Standard Day Shift' }],
      '2025-05-07': [{ startTime: '09:00AM', endTime: '06:00PM', location: 'Office A', type: 'Standard Day Shift' }],
      '2025-05-13': [{ startTime: '09:00AM', endTime: '06:00PM', location: 'Office A', type: 'Standard Day Shift' }],
      // ...other dates
    },
  },
  {
    id: 2,
    name: 'Kathryn Murphy',
    position: 'Interaction Designer',
    avatar: '',
    highlight: true,
    hoursWorked: 35,
    hoursTarget: 48,
    schedule: {
      '2025-05-05': [{ type: 'restday' }],
      '2025-05-08': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      '2025-05-10': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      '2025-05-13': [
        { startTime: '10:00AM', endTime: '06:00PM', location: 'Office a', type: 'Morning Shift' },
        { startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' },
        { startTime: '10:00AM', endTime: '08:00PM', location: 'Office c', type: 'Morning Shift' },
        { startTime: '10:00AM', endTime: '09:00PM', location: 'Office d', type: 'Morning Shift' },
      ],
      // ...other dates
    },
  },
  {
    id: 3,
    name: 'Kathryn Murphy',
    position: 'Interaction Designer',
    avatar: '',
    highlight: true,
    hoursWorked: 35,
    hoursTarget: 48,
    schedule: {
      '2025-05-01': [{ type: 'restday' }],
      '2025-05-02': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      // ...other dates
    },
  },
  {
    id: 4,
    name: 'Kathryn Murphy',
    position: 'Interaction Designer',
    avatar: '',
    highlight: true,
    hoursWorked: 35,
    hoursTarget: 48,
    schedule: {
      '2025-05-12': [{ type: 'restday' }],
      '2025-05-15': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      // ...other dates
    },
  },
];

const companyOptions = [
  { text: 'All Companies', value: 'all' },
  { text: 'Company A', value: 'company-a' },
  { text: 'Company B', value: 'company-b' },
];

const departmentOptions = [
  { text: 'All Departments', value: 'all' },
  { text: 'Design', value: 'design' },
  { text: 'Development', value: 'development' },
];

const branchOptions = [
  { text: 'All Branches', value: 'all' },
  { text: 'Branch A', value: 'branch-a' },
  { text: 'Branch B', value: 'branch-b' },
];
</script>
```

## คุณสมบัติ

### การเลื่อนแบบไม่สิ้นสุด

ปฏิทินรองรับการเลื่อนแบบไม่สิ้นสุดสำหรับการโหลดข้อมูลพนักงานเพิ่มเติม:

- เรียกใช้โดยอัตโนมัติเมื่อเลื่อนใกล้ด้านล่าง (เกณฑ์ 50px)
- ปล่อยเหตุการณ์ `loadMore` เมื่อควรโหลดข้อมูลเพิ่มเติม
- รักษาประสบการณ์การเลื่อนที่ราบรื่นด้วยการเว้นระยะที่เหมาะสม

ตัวอย่างการจัดการการเลื่อนแบบไม่สิ้นสุด:

```vue
<template>
  <SprCalendar @load-more="handleLoadMore" :employees="employees" :loading="isLoading" />
</template>

<script setup>
const handleLoadMore = async () => {
  isLoading.value = true;
  // โหลดพนักงานเพิ่มเติมที่นี่
  await loadMoreEmployees();
  isLoading.value = false;
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
      <td>employees</td>
      <td>อาร์เรย์ของข้อมูลพนักงานที่จะแสดงในปฏิทิน รวมถึงข้อมูลตารางเวลา</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>initialDate</td>
      <td>วันที่เริ่มต้นที่จะแสดงในปฏิทิน ปฏิทินจะแสดงสัปดาห์ที่มีวันที่นี้</td>
      <td>Date</td>
      <td>วันที่ปัจจุบัน</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>ควบคุมว่าจะแสดงตัวบ่งชี้การโหลดหรือไม่ โดยปกติใช้ระหว่างการดึงข้อมูล</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>companyOptions</td>
      <td>อาร์เรย์ของตัวเลือกสำหรับดรอปดาวน์ตัวกรองบริษัท</td>
      <td>Array&lt;{text: string, value: string}&gt;</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>departmentOptions</td>
      <td>อาร์เรย์ของตัวเลือกสำหรับดรอปดาวน์ตัวกรองแผนก</td>
      <td>Array&lt;{text: string, value: string}&gt;</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>branchOptions</td>
      <td>อาร์เรย์ของตัวเลือกสำหรับดรอปดาวน์ตัวกรองสาขา</td>
      <td>Array&lt;{text: string, value: string}&gt;</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>emptyState</td>
      <td>การกำหนดค่าสำหรับสถานะว่างเปล่าที่แสดงเมื่อไม่มีพนักงานที่จะแสดง</td>
      <td>Object</td>
      <td>สถานะว่างเปล่าเริ่มต้น</td>
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
      <td>loadMore</td>
      <td>ถูกปล่อยออกมาเมื่อผู้ใช้เลื่อนใกล้ด้านล่างของปฏิทิน (ภายใน 50px) บ่งชี้ว่าควรโหลดข้อมูลพนักงานเพิ่มเติม ใช้สำหรับการนำการเลื่อนแบบไม่สิ้นสุดไปใช้</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onCellClick</td>
      <td>ถูกปล่อยออกมาหากเซลล์ปฏิทินถูกคลิก พารามิเตอร์ประกอบด้วย employeeId วันที่ และข้อมูลกะสำหรับเซลล์ที่คลิก</td>
      <td>(data: SelectedShift)</td>
    </tr>
    <tr>
      <td>update:firstLastDayOfWeek</td>
      <td>ถูกปล่อยออกมาหากช่วงสัปดาห์ที่มองเห็นเปลี่ยนแปลง ไม่ว่าจะผ่านการนำทางหรือการเริ่มต้น วันที่ถูกจัดรูปแบบเป็น 'YYYY-MM-DD'</td>
      <td>(range: { firstDay: string, lastDay: string })</td>
    </tr>
    <tr>
      <td>update:sort</td>
      <td>ถูกปล่อยออกมาหากลำดับการเรียงเปลี่ยนแปลงโดยการคลิกไอคอนเรียง ค่าจะเป็น 'asc', 'desc', หรือ '' (สตริงว่างสำหรับไม่มีการเรียง)</td>
      <td>(value: string)</td>
    </tr>
    <tr>
      <td>update:search</td>
      <td>ถูกปล่อยออกมาหากคำค้นหาเปลี่ยนแปลง ใช้สำหรับการผูก v-model</td>
      <td>(value: string)</td>
    </tr>
    <tr>
      <td>update:selectedCell</td>
      <td>ถูกปล่อยออกมาหากเซลล์ถูกเลือก ใช้สำหรับการผูก v-model ของ prop selectedCell</td>
      <td>(data: SelectedShift)</td>
    </tr>
    <tr>
      <td>update:selectedCompany</td>
      <td>ถูกปล่อยออกมาหากการเลือกตัวกรองบริษัทเปลี่ยนแปลง ใช้สำหรับการผูก v-model</td>
      <td>(value: string)</td>
    </tr>
    <tr>
      <td>update:selectedDepartment</td>
      <td>ถูกปล่อยออกมาหากการเลือกตัวกรองแผนกเปลี่ยนแปลง ใช้สำหรับการผูก v-model</td>
      <td>(value: string)</td>
    </tr>
    <tr>
      <td>update:selectedBranch</td>
      <td>ถูกปล่อยออกมาหากการเลือกตัวกรองสาขาเปลี่ยนแปลง ใช้สำหรับการผูก v-model</td>
      <td>(value: string)</td>
    </tr>
    <tr>
      <td>onClickEmptyButton</td>
      <td>ถูกปล่อยออกมาหากปุ่มสถานะว่างเปล่าถูกคลิก สามารถใช้เพื่อเรียกการดำเนินการเช่นการเพิ่มพนักงานใหม่</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>ตัวอย่าง</th>
      <th>props (ข้อมูลสล็อต)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>filter</td>
      <td>สล็อตสำหรับปรับแต่งส่วนตัวกรองเหนือปฏิทิน สามารถใช้เพื่อเพิ่มตัวกรองหรือการควบคุมแบบกำหนดเอง</td>
      <td>
        <pre><code>&lt;template #filter&gt;
  &lt;div&gt;เนื้อหาตัวกรองแบบกำหนดเอง&lt;/div&gt;
&lt;/template&gt;</code></pre>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>loading</td>
      <td>สล็อตสำหรับปรับแต่งสถานะการโหลดที่แสดงระหว่างการดึงข้อมูล</td>
      <td>
        <pre><code>&lt;template #loading&gt;
  &lt;div&gt;กำลังโหลด&lt;/div&gt;
&lt;/template&gt;</code></pre>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>empty-state</td>
      <td>สล็อตสำหรับปรับแต่งสถานะว่างเปล่าที่แสดงเมื่อไม่มีพนักงานที่จะแสดง โดยค่าเริ่มต้น ใช้คอมโพเนนต์ SprEmptyState</td>
      <td>
        <pre><code>&lt;template #empty-state&gt;
  &lt;div&gt;ไม่พบพนักงาน&lt;/div&gt;
&lt;/template&gt;</code></pre>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>copy</td>
      <td>สล็อตสำหรับปรับแต่งการดำเนินการคัดลอกที่แสดงเมื่อไม่มีพนักงานที่จะแสดง โดยค่าเริ่มต้น ใช้คอมโพเนนต์ SprCopy</td>
      <td>
        <pre><code>&lt;template #copy="{ copy }"&gt;
  &lt;div&gt;ไม่พบพนักงาน&lt;/div&gt;
&lt;/template&gt;</code></pre>
      </td>
      <td>{
        employeeId: string,
        date: Date,
        shift: {
          startTime?: string,
          endTime?: string,
          location?: string,
          type: string
        }
      }</td> 
    </tr>
    <tr>
      <td>cell</td>
      <td>สล็อตสำหรับปรับแต่งเนื้อหาของเซลล์ปฏิทิน</td>
      <td>
        <pre><code>&lt;template #cell="{ details }"&gt;
  &lt;div&gt;ไม่พบพนักงาน&lt;/div&gt;
&lt;/template&gt;</code></pre>
      </td>
      <td>{
        employeeId: string,
        date: Date,
        shift: {
          startTime?: string,
          endTime?: string,
          location?: string,
          type: string
        }
      }</td> 
    </tr>
  </tbody>
</table>

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
</div>

<script setup lang="ts">
import SprCalendar from '@/components/calendar/calendar.vue';
import SprLogo from "@/components/logo/logo.vue";
import SprCalendarCell from '@/components/calendar-cell/calendar-cell.vue';
import { ref } from 'vue';

const initialDate = new Date();
const searchEmployee = ref();
const selectedCompany = ref('');
const selectedDepartment = ref('');
const selectedBranch = ref('');
const selectedCell = ref({
  employeeId: '',
  date: '',
  schedule: null,
});

const employees = [
  {
    id: 1,
    name: 'Theresa Webb',
    position: 'Senior UX Researcher',
    avatar: '',
    highlight: true,
    hoursWorked: 40,
    hoursTarget: 48,
    schedule: {
      '2025-05-05': [{ type: 'restday' }],
      '2025-05-06': [{ startTime: '09:00AM', endTime: '06:00PM', location: 'Office A', type: 'Standard Day Shift' }],
      '2025-05-07': [{ startTime: '09:00AM', endTime: '06:00PM', location: 'Office A', type: 'Standard Day Shift' }],
      '2025-05-13': [{ startTime: '09:00AM', endTime: '06:00PM', location: 'Office A', type: 'Standard Day Shift' }],
      // ...other dates
    },
  },
  {
    id: 2,
    name: 'Kathryn Murphy',
    position: 'Interaction Designer',
    avatar: '',
    highlight: true,
    hoursWorked: 35,
    hoursTarget: 48,
    schedule: {
      '2025-05-05': [{ type: 'restday' }],
      '2025-05-08': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      '2025-05-10': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      '2025-05-13': [
        { startTime: '10:00AM', endTime: '06:00PM', location: 'Office a', type: 'Morning Shift' },
        { startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' },
        { startTime: '10:00AM', endTime: '08:00PM', location: 'Office c', type: 'Morning Shift' },
        { startTime: '10:00AM', endTime: '09:00PM', location: 'Office d', type: 'Morning Shift' },
      ],
      // ...other dates
    },
  },
  {
    id: 3,
    name: 'Kathryn Murphy',
    position: 'Interaction Designer',
    avatar: '',
    highlight: true,
    hoursWorked: 35,
    hoursTarget: 48,
    schedule: {
      '2025-05-01': [{ type: 'restday' }],
      '2025-05-02': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      // ...other dates
    },
  },
  {
    id: 4,
    name: 'Kathryn Murphy',
    position: 'Interaction Designer',
    avatar: '',
    highlight: true,
    hoursWorked: 35,
    hoursTarget: 48,
    schedule: {
      '2025-05-12': [{ type: 'restday' }],
      '2025-05-15': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      // ...other dates
    },
  },
];

const companyOptions = [
  { text: 'All Companies', value: 'all' },
  { text: 'Company A', value: 'company-a' },
  { text: 'Company B', value: 'company-b' },
];

const departmentOptions = [
  { text: 'All Departments', value: 'all' },
  { text: 'Design', value: 'design' },
  { text: 'Development', value: 'development' },
];

const branchOptions = [
  { text: 'All Branches', value: 'all' },
  { text: 'Branch A', value: 'branch-a' },
  { text: 'Branch B', value: 'branch-b' },
];
</script>
