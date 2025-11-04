---
title: ตัวกรอง
descripttion: คอมโพเนนต์ `Filter` เป็นโซลูชันการกรองที่หลากหลายและทรงพลังที่ออกแบบมาสำหรับสถานการณ์การกรองข้อมูลที่ซับซ้อน มันรองรับทั้งฟังก์ชันการค้นหาง่ายๆ และตัวเลือกการกรองขั้นสูงด้วยการกรองตามหมวดหมู่ ทำให้เหมาะสำหรับแอปพลิเคชันที่ต้องการความสามารถในการสำรวจข้อมูลที่แข็งแกร่ง
outline: deep
---

# ตัวกรอง

คอมโพเนนต์ `Filter` เป็นโซลูชันการกรองที่หลากหลายและทรงพลังที่ออกแบบมาสำหรับสถานการณ์การกรองข้อมูลที่ซับซ้อน มันรองรับทั้งฟังก์ชันการค้นหาง่ายๆ และตัวเลือกการกรองขั้นสูงด้วยการกรองตามหมวดหมู่ ทำให้เหมาะสำหรับแอปพลิเคชันที่ต้องการความสามารถในการสำรวจข้อมูลที่แข็งแกร่ง

## คุณสมบัติ

- **การกรองแบบเลือกหลายรายการ**: เลือกตัวเลือกหลายรายการจากเมนูดรอปดาวน์ด้วยตัวควบคุมช่องทำเครื่องหมาย
- **เมนูตัวกรองขั้นสูง**: สร้างการรวมตัวกรองที่ซับซ้อนด้วยการกรองตามหมวดหมู่ผ่านระบบเมนูซ้อน
- **การเลื่อนไม่สิ้นสุด**: รองรับในตัวสำหรับโหลดชุดข้อมูลขนาดใหญ่แบบเพิ่มขึ้นเพื่อประสิทธิภาพที่ดีขึ้น
- **ฟังก์ชันการค้นหา**: ความสามารถในการค้นหาสำหรับทั้งตัวเลือกหลักและตัวเลือกตัวกรองขั้นสูง
- **การรวม API ภายนอก**: การรวมอย่างราบรื่นกับ API การค้นหาและตัวกรองภายนอก
- **รองรับอวตาร**: แสดงอวตารผู้ใช้หรือตัวระบุภาพอื่นๆ ควบคู่ไปกับตัวเลือกตัวกรอง
- **UI ที่ปรับแต่งได้**: ระบบสล็อตที่ครอบคลุมสำหรับปรับแต่งลักษณะและพฤติกรรม
- **การเข้าถึง**: การนำทางด้วยแป้นพิมพ์และรองรับ ARIA สำหรับการเข้าถึงที่ดีขึ้น
- **การจัดการข้อผิดพลาด**: รองรับสถานะข้อผิดพลาดและข้อความช่วยเหลือในตัวสำหรับสถานการณ์การตรวจสอบ
- **การออกแบบที่ตอบสนอง**: ปรับให้เข้ากับขนาดหน้าจอและความกว้างคอนเทนเนอร์ที่แตกต่างกัน

## การใช้งานพื้นฐาน

<div class="spr-space-y-3"> 
<div class="spr-flex  spr-flex-col  spr-gap-2 spr-body-sm spr-border-b spr-border-solid spr-border-x-0 spr-border-t-0">
  <span>Selected: {{selectedOptions}}</span>
  <span>searchValue: {{searchValue}}</span>
</div>
  <spr-filter v-model="selectedOptions"  :options="options" label="Search"  v-model:search="searchValue" hasAvatar/>
</div>

```vue
<template>
  <spr-filter v-model="selectedOptions" v-model:search="searchValue" :options="options" label="Search" hasAvatar />
</template>

<script setup>
import { ref } from 'vue';

const options = ref([
  { column: '', isSelected: false, text: 'sample 1', value: 'sample1' },
  { column: '', isSelected: false, text: 'sample 2', value: 'sample2' },
  { column: '', isSelected: false, text: 'sample 3', value: 'sample3' },
  { column: '', isSelected: false, text: 'sample 4', value: 'sample4' },
  { column: '', isSelected: false, text: 'sample 5', value: 'sample5' },
]);

const selectedOptions = ref([]);
const searchValue = ref('');
</script>
```

## ตัวกรองได้

<div class="spr-flex spr-flex-col spr-gap-6"> 
  <div
    class="spr-body-sm spr-flex spr-flex-col spr-gap-2 spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid"
  >
    <span>Selected: {{ selectedOptions1 }}</span>
    <span>searchValue: {{ searchValue1 }}</span>
  </div>
  <spr-filter 
    v-model="selectedOptions1"
    v-model:search="searchValue1" 
    :options="options1"
    label="Search"
    :filterMenu="filterMenuList1"
    :filterData="filterMenuOptions1"
    id="filter-menu"
    @selectedFilter="handleSelected"
    filterable
  />
</div>

```vue
<template>
  <spr-filter
    v-model="selectedOptions1"
    v-model:search="searchValue1"
    :options="options1"
    label="Search"
    :filterMenu="filterMenuList1"
    :filterData="filterMenuOptions1"
    filterable
  />
</template>

<script setup>
const options = ref([
  { column: '', isSelected: false, text: 'sample 1', value: 'sample1' },
  { column: '', isSelected: false, text: 'sample 2', value: 'sample2' },
  { column: '', isSelected: false, text: 'sample 3', value: 'sample3' },
  { column: '', isSelected: false, text: 'sample 4', value: 'sample4' },
  { column: '', isSelected: false, text: 'sample 5', value: 'sample5' },
]);

const filterMenuList = ref([
  { count: 0, isFilterVisible: false, columnName: 'Employee Type', field: 'employeeType' },
  { count: 0, isFilterVisible: false, columnName: 'Department', field: 'department' },
  { count: 0, isFilterVisible: false, columnName: 'Location', field: 'location' },
  { count: 0, isFilterVisible: false, columnName: 'Region', field: 'region' },
  { count: 0, isFilterVisible: false, columnName: 'Job Level', field: 'jobLevel' },
]);

const filterMenuOptions = [
  { column: 'location', isSelected: false, text: 'sample 1', value: 'sample1' },
  { column: 'location', isSelected: false, text: 'sample 2', value: 'sample2' },
  { column: 'location', isSelected: false, text: 'sample 3', value: 'sample3' },
  { column: 'location', isSelected: false, text: 'sample 4', value: 'sample4' },
];

const selectedOptions = ref([]);
const searchValue = ref('');
</script>
```

## เลิกเลือก

ตัวอย่างนี้แสดงวิธีการลบตัวเลือกที่เลือกออกจากภายนอกคอมโพเนนต์

<div class="spr-space-y-3"> 
  <div class="spr-flex spr-gap-2">
    <div v-for="selected in selectedOptions2">
      <spr-button hasIcon size="small" tone="danger" variant="secondary" @click="removeSelected(selected.value)">
      {{selected.value}}
        <Icon icon="ph:trash" />
      </spr-button>
    </div> 
  </div>
  <spr-filter
    v-model="selectedOptions2" 
    v-model:search="searchValue2"
    id="search-filter"
    :deselected="deselected"
    :options="options"
    label="Search" 
  />
</div>

```vue
<template>
  <div class="spr-space-y-3">
    <div class="spr-flex spr-gap-2">
      <div v-for="selected in selectedOptions2">
        <spr-button hasIcon size="small" tone="danger" variant="secondary" @click="removeSelected(selected.value)">
          {{ selected.value }}
          <Icon icon="ph:trash" />
        </spr-button>
      </div>
    </div>
    <spr-filter
      v-model="selectedOptions2"
      v-model:search="searchValue2"
      id="search-filter"
      :deselected="deselected"
      :options="options"
      label="Search"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import SprButton from '@/components/button/button.vue';

const options = ref([
  { column: '', isSelected: false, text: 'sample 1', value: 'sample1' },
  { column: '', isSelected: false, text: 'sample 2', value: 'sample2' },
  { column: '', isSelected: false, text: 'sample 3', value: 'sample3' },
  { column: '', isSelected: false, text: 'sample 4', value: 'sample4' },
  { column: '', isSelected: false, text: 'sample 5', value: 'sample5' },
]);

const selectedOptions2 = ref([]);
const searchValue2 = ref('');
const deselected = ref('');

const removeSelected = (removeSelected) => {
  deselected.value = removeSelected;
};
</script>
```

## สถานะข้อผิดพลาด

<div class="spr-space-y-3">
  <spr-filter
      v-model="selectedOptions2" 
      v-model:search="searchValue2"
      id="search-filter-display-text"
      :deselected="deselected"
      :options="options"
      helper-text="This is helper text!!"
    />

<spr-filter
      v-model="selectedOptions2" 
      v-model:search="searchValue2"
      id="search-filter-error"
      :deselected="deselected"
      :options="options"
      error
    />

</div>

```vue
<template>
  <div class="spr-space-y-3">
    <spr-filter
      v-model="selectedOptions2"
      v-model:search="searchValue2"
      id="search-filter-display-text"
      :deselected="deselected"
      :options="options"
      helper-text="This is helper text!!"
    />

    <spr-filter
      v-model="selectedOptions2"
      v-model:search="searchValue2"
      id="search-filter-error"
      :deselected="deselected"
      :options="options"
      error
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import SprButton from '@/components/button/button.vue';

const options = ref([
  { column: '', isSelected: false, text: 'sample 1', value: 'sample1' },
  { column: '', isSelected: false, text: 'sample 2', value: 'sample2' },
  { column: '', isSelected: false, text: 'sample 3', value: 'sample3' },
  { column: '', isSelected: false, text: 'sample 4', value: 'sample4' },
  { column: '', isSelected: false, text: 'sample 5', value: 'sample5' },
]);

const selectedOptions2 = ref([]);
const searchValue2 = ref('');
</script>
```

## การอ้างอิง API

### พร็อพส์

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>ประเภท</th>
      <th>ค่าเริ่มต้น</th>
      <th>จำเป็น</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>modelValue</code></td>
      <td>ค่าตัวกรองที่เลือก รองรับการผูก v-model สำหรับการจัดการสถานะการเลือก</td>
      <td><code>Array</code> | <code>String</code></td>
      <td><code>[]</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>options</code></td>
      <td>รายการตัวเลือกตัวกรอง แต่ละตัวเลือกควรมีโครงสร้าง: <code>{ column: string, isSelected: boolean, text: string, value: string, subtext?: string, avatar?: string }</code></td>
      <td><code>Array</code></td>
      <td><code>[]</code></td>
      <td>ใช่</td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>ป้ายสำหรับฟิลด์อินพุตตัวกรอง</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>ข้อความตัวยึดตำแหน่งสำหรับฟิลด์อินพุตตัวกรอง</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>ปิดใช้งานอินพุตตัวกรอง ป้องกันการโต้ตอบของผู้ใช้</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>filterable</code></td>
      <td>เปิดใช้งานเมนูตัวกรองขั้นสูงด้วยการกรองตามคอลัมน์</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>ตัวระบุเฉพาะสำหรับคอมโพเนนต์ตัวกรอง ใช้สำหรับการเข้าถึงและการจัดการ DOM</td>
      <td><code>String</code></td>
      <td><code>'spr-filter'</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>filterMenu</code></td>
      <td>รายการหมวดหมู่เมนูตัวกรองขั้นสูง แต่ละรายการควรมี: <code>{ columnName: string, field: string, isFilterVisible?: boolean, count?: number }</code></td>
      <td><code>Array</code></td>
      <td><code>[]</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>filterData</code></td>
      <td>ข้อมูลสำหรับเมนูตัวกรองขั้นสูง โครงสร้างคล้ายกับ <code>options</code> แต่โดยเฉพาะสำหรับตัวกรองขั้นสูง</td>
      <td><code>Array</code></td>
      <td><code>[]</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>loading</code></td>
      <td>ระบุว่ามีเมนูตัวกรองขั้นสูงอยู่ในสถานะการโหลดหรือไม่</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>filling</code></td>
      <td>ระบุว่ามีดรอปดาวน์ตัวกรองหลักอยู่ในสถานะการโหลดหรือไม่</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>search</code></td>
      <td>คำค้นหาสำหรับตัวกรองหลัก รองรับการผูก v-model:search</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>searchFilter</code></td>
      <td>คำค้นหาสำหรับเมนูตัวกรองขั้นสูง รองรับการผูก v-model:searchFilter</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>ความกว้างของคอมโพเนนต์ตัวกรอง ยอมรับค่าความกว้าง CSS (px, %, rem, etc.)</td>
      <td><code>String</code></td>
      <td><code>'100%'</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>deselected</code></td>
      <td>ค่าของตัวเลือกตัวกรองที่ถูกเลิกเลือก ใช้เพื่อลบการเลือกจากภายนอกคอมโพเนนต์</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>hasSearchApi</code></td>
      <td>เปิดใช้งานการรวม API การค้นหาภายนอกสำหรับตัวกรองหลัก เมื่อเป็นจริง การกรองภายในจะถูกปิดใช้งาน</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>hasAvatar</code></td>
      <td>เปิดใช้งานการแสดงอวตารสำหรับตัวเลือกตัวกรอง ใช้พร็อพส์ <code>avatar</code> ในตัวเลือกเพื่อให้ URL รูปภาพ</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>helperText</code></td>
      <td>ข้อความช่วยเหลือที่แสดงใต้คอมโพเนนต์ตัวกรอง มีประโยชน์สำหรับให้บริบทหรือคำแนะนำเพิ่มเติม</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>error</code></td>
      <td>เปิดใช้งานการจัดสไตล์สถานะข้อผิดพลาดสำหรับตัวกรอง ใช้กับรูปแบบการตรวจสอบ</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td><code>hasAdvancedFilterApi</code></td>
      <td>เปิดใช้งานการรวม API การค้นหาภายนอกสำหรับเมนูตัวกรองขั้นสูง เมื่อเป็นจริง การกรองภายในจะถูกปิดใช้งาน</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>ไม่</td>
    </tr>
  </tbody>
</table>

### อีเวนต์

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>ประเภทเพย์โหลด</th>
      <th>คำอธิบาย</th>
      <th>การใช้งาน</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>getFilterData</code></td>
      <td><code>String</code></td>
      <td>ถูกทริกเกอร์เมื่อดึงข้อมูลตัวกรองสำหรับคอลัมน์เฉพาะในตัวกรองขั้นสูง เพย์โหลดคือชื่อฟิลด์คอลัมน์</td>
      <td><code>@getFilterData="handleGetFilterData"</code></td>
    </tr>
    <tr>
      <td><code>update:modelValue</code></td>
      <td><code>Array</code></td>
      <td>อัปเดตค่าตัวกรองที่เลือก ใช้ภายในสำหรับการผูก v-model</td>
      <td>จัดการโดยการผูก <code>v-model</code></td>
    </tr>
    <tr>
      <td><code>update:search</code></td>
      <td><code>String</code></td>
      <td>อัปเดตคำค้นหาสำหรับตัวกรองหลัก ใช้ภายในสำหรับการผูก v-model:search</td>
      <td>จัดการโดยการผูก <code>v-model:search</code></td>
    </tr>
    <tr>
      <td><code>update:searchFilter</code></td>
      <td><code>String</code></td>
      <td>อัปเดตคำค้นหาสำหรับเมนูตัวกรองขั้นสูง ใช้ภายในสำหรับการผูก v-model:searchFilter</td>
      <td>จัดการโดยการผูก <code>v-model:searchFilter</code></td>
    </tr>
    <tr>
      <td><code>selectedFilter</code></td>
      <td><code>Array</code></td>
      <td>ปล่อยตัวเลือกตัวกรองที่เลือกจากเมนูตัวกรองขั้นสูง ประกอบด้วยตัวเลือกที่เลือกทั้งหมดในทุกคอลัมน์</td>
      <td><code>@selectedFilter="handleSelectedFilter"</code></td>
    </tr>
    <tr>
      <td><code>infiniteScrollTrigger</code></td>
      <td><code>Boolean</code></td>
      <td>ถูกทริกเกอร์เมื่อการเลื่อนไม่สิ้นสุดถูกเปิดใช้งานสำหรับตัวกรองหลัก ใช้สำหรับโหลดข้อมูลเพิ่มเติมในสถานการณ์ที่มีการแบ่งหน้า</td>
      <td><code>@infiniteScrollTrigger="loadMoreOptions"</code></td>
    </tr>
    <tr>
      <td><code>infiniteScrollFilterTrigger</code></td>
      <td><code>String</code></td>
      <td>ถูกทริกเกอร์เมื่อการเลื่อนไม่สิ้นสุดถูกเปิดใช้งานสำหรับตัวกรองขั้นสูง เพย์โหลดคือคอลัมน์ปัจจุบันที่กำลังเลื่อน</td>
      <td><code>@infiniteScrollFilterTrigger="loadMoreFilterOptions"</code></td>
    </tr>
  </tbody>
</table>

### สล็อต

<table>
  <thead>
    <tr>
      <th>ชื่อสล็อต</th>
      <th>คำอธิบาย</th>
      <th>การใช้งาน</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>default</code></td>
      <td>สล็อตสำหรับปรับแต่งฟิลด์อินพุตตัวกรอง แทนที่คอมโพเนนต์อินพุตเริ่มต้นทั้งหมด</td>
      <td>
      <pre><code>&lt;spr-filter&gt;
  &lt;custom-input /&gt;
&lt;/spr-filter&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>loading</code></td>
      <td>สล็อตสำหรับแสดงสถานะการโหลดปรับแต่งในเมนูตัวกรองขั้นสูง ใช้เมื่อโหลดตัวเลือกตัวกรอง</td>
      <td>
      <pre><code>&lt;template #loading&gt;
  &lt;custom-loader /&gt;
&lt;/template&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>empty</code></td>
      <td>สล็อตสำหรับแสดงสถานะว่างเปล่าปรับแต่งในเมนูตัวกรองขั้นสูง ใช้เมื่อไม่พบตัวเลือกตัวกรอง</td>
      <td>
      <pre><code>&lt;template #empty&gt;
  &lt;empty-state message="No filters found" /&gt;
&lt;/template&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>loading-state</code></td>
      <td>สล็อตสำหรับแสดงสถานะการโหลดปรับแต่งในดรอปดาวน์ตัวกรองหลัก ใช้เมื่อโหลดตัวเลือกหลัก</td>
      <td>
      <pre><code>&lt;template #loading-state&gt;
  &lt;custom-loader /&gt;
&lt;/template&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>empty-state</code></td>
      <td>สล็อตสำหรับแสดงสถานะว่างเปล่าปรับแต่งในดรอปดาวน์ตัวกรองหลัก ใช้เมื่อไม่มีตัวเลือกตรงกับการค้นหา</td>
      <td>
      <pre><code>&lt;template #empty-state&gt;
  &lt;empty-state message="No results found" /&gt;
&lt;/template&gt;</code></pre>
      </td>
    </tr>
  </tbody>
</table>

## คุณสมบัติขั้นสูง

### การเลื่อนไม่สิ้นสุด

คอมโพเนนต์รองรับการเลื่อนไม่สิ้นสุดสำหรับทั้งตัวกรองหลักและเมนูตัวกรองขั้นสูง คุณสมบัตินี้มีประโยชน์โดยเฉพาะสำหรับจัดการชุดข้อมูลขนาดใหญ่ที่ควรโหลดแบบเพิ่มขึ้นเพื่อปรับปรุงประสิทธิภาพ

#### การใช้งาน

1. **การเลื่อนไม่สิ้นสุดตัวกรองหลัก**:
   - ฟังอีเวนต์ `infiniteScrollTrigger` ซึ่งถูกปล่อยเมื่อผู้ใช้เลื่อนไปที่ด้านล่างของดรอปดาวน์ตัวกรองหลัก
   - โหลดข้อมูลเพิ่มเติมและผนวกเข้ากับอาร์เรย์ `options`

```vue
<spr-filter v-model="selectedOptions" :options="options" @infiniteScrollTrigger="loadMoreOptions" />

<script setup>
const loadMoreOptions = () => {
  // โหลดข้อมูลเพิ่มเติมจาก API ของคุณ
  const newOptions = await fetchMoreOptions(page.value++);
  options.value = [...options.value, ...newOptions];
};
</script>
```

2. **การเลื่อนไม่สิ้นสุดตัวกรองขั้นสูง**:
   - ฟังอีเวนต์ `infiniteScrollFilterTrigger` ซึ่งให้ฟิลด์คอลัมน์ที่กำลังเลื่อน
   - โหลดข้อมูลเพิ่มเติมสำหรับคอลัมน์นั้นโดยเฉพาะ

```vue
<spr-filter
  v-model="selectedOptions"
  :options="options"
  :filter-menu="filterMenu"
  :filter-data="filterData"
  filterable
  @infiniteScrollFilterTrigger="loadMoreFilterOptions"
/>

<script setup>
const loadMoreFilterOptions = (column) => {
  // โหลดตัวเลือกตัวกรองเพิ่มเติมสำหรับคอลัมน์เฉพาะ
  const newFilterOptions = await fetchMoreFilterOptions(column, page.value++);
  filterData.value = [...filterData.value, ...newFilterOptions];
};
</script>
```

### การรวม API การค้นหาภายนอก

คอมโพเนนต์ตัวกรองรองรับการรวมกับ API การค้นหาภายนอกสำหรับทั้งตัวกรองหลักและเมนูตัวกรองขั้นสูง สิ่งนี้ช่วยให้การกรองและการค้นหาแบบฝั่งเซิร์ฟเวอร์

#### API การค้นหาตัวกรองหลัก

เปิดใช้งานพร็อพส์ `hasSearchApi` เพื่อใช้ API ภายนอกสำหรับกรองตัวเลือกหลัก เมื่อเปิดใช้งาน คอมโพเนนต์จะไม่กรองตัวเลือกภายใน แต่พึ่งพา API ภายนอกเพื่อให้ผลลัพธ์ที่กรอง

```vue
<spr-filter
  v-model="selectedOptions"
  v-model:search="searchValue"
  :options="options"
  :has-search-api="true"
  @update:search="handleSearchChange"
/>

<script setup>
const handleSearchChange = async (query) => {
  // เรียก API ภายนอกของคุณด้วยคำค้นหา
  options.value = await searchApi(query);
};
</script>
```

#### API การค้นหาตัวกรองขั้นสูง

เปิดใช้งานพร็อพส์ `hasAdvancedFilterApi` เพื่อใช้ API ภายนอกสำหรับการค้นหาเมนูตัวกรองขั้นสูง ทำงานคล้ายกับ API การค้นหาหลัก แต่สำหรับเมนูตัวกรองขั้นสูง

```vue
<spr-filter
  v-model="selectedOptions"
  :filter-menu="filterMenu"
  :filter-data="filterData"
  :has-advanced-filter-api="true"
  filterable
  @update:searchFilter="handleAdvancedSearch"
/>

<script setup>
const handleAdvancedSearch = async (query) => {
  // เรียก API ภายนอกของคุณด้วยคำค้นหาและคอลัมน์ปัจจุบัน
  filterData.value = await searchAdvancedApi(query, selectedColumn.value);
};
</script>
```

### รองรับอวตาร

คอมโพเนนต์ตัวกรองสามารถแสดงอวตารควบคู่ไปกับตัวเลือกตัวกรองเพื่อให้สัญญาณภาพหรือการแสดงตัวแทนผู้ใช้

เปิดใช้งานพร็อพส์ `hasAvatar` เพื่อแสดงอวตารสำหรับตัวเลือกตัวกรอง ให้พร็อพส์ `avatar` ในแต่ละออบเจ็กต์ตัวเลือก:

```vue
<spr-filter v-model="selectedOptions" :options="optionsWithAvatars" has-avatar />

<script setup>
const optionsWithAvatars = ref([
  {
    column: '',
    isSelected: false,
    text: 'John Doe',
    value: 'john',
    avatar: 'https://example.com/avatars/john.jpg',
  },
  {
    column: '',
    isSelected: false,
    text: 'Jane Smith',
    value: 'jane',
    avatar: 'https://example.com/avatars/jane.jpg',
  },
]);
</script>
```

หากไม่ได้ให้ URL อวตาร คอมโพเนนต์จะแสดงอวตารแบบอักษรย่อโดยใช้ตัวอักษรแรกของพร็อพส์ `text`

### การเลิกเลือกภายนอก

คอมโพเนนต์ตัวกรองอนุญาตให้เลิกเลือกตัวเลือกจากภายนอกคอมโพเนนต์ ซึ่งมีประโยชน์สำหรับการใช้งานอินเทอร์เฟซการเลือกปรับแต่งเช่น ชิปส์หรือป้ายภายนอก

```vue
<template>
  <div class="spr-flex spr-gap-2">
    <div v-for="selected in selectedOptions">
      <spr-button @click="removeSelected(selected.value)">
        {{ selected.text }}
        <Icon icon="ph:x" />
      </spr-button>
    </div>
  </div>
  <spr-filter v-model="selectedOptions" :options="options" :deselected="deselectedOption" />
</template>

<script setup>
const selectedOptions = ref([]);
const deselectedOption = ref('');

const removeSelected = (value) => {
  deselectedOption.value = value;
  // รีเซ็ตค่าที่ถูกเลิกเลือกหลังจากถูกประมวลผล
  setTimeout(() => {
    deselectedOption.value = '';
  }, 100);
};
</script>
```

## การใช้ผลิตภัณฑ์

ผลิตภัณฑ์ Sprout เหล่านี้ใช้คอมโพเนนต์ตัวกรอง:

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
</div>

<script setup>
import { ref } from 'vue';
import SprFilter from '@/components/filter/filter.vue';
import { Icon } from '@iconify/vue';
import SprButton from "@/components/button/button.vue";
import SprLogo from "@/components/logo/logo.vue";

const options = ref([
    { column: '', isSelected: false, text: 'sample 1', subtext: '', value: 'sample1' },
    { column: '', isSelected: false, text: 'sample 2', subtext: '', value: 'sample2' },
    { column: '', isSelected: false, text: 'sample 4', subtext: 'subtext', value: 'sample4' },
    { column: '', isSelected: false, text: 'sample 5', subtext: 'subtext', value: 'sample5' },
]);

  const filterMenuList = ref([
    { count: 0, isFilterVisible: false, columnName: 'Employee Type', field: 'employeeType' },
    { count: 0, isFilterVisible: false, columnName: 'Department', field: 'department' },
    { count: 0, isFilterVisible: false, columnName: 'Location', field: 'location' },
    { count: 0, isFilterVisible: false, columnName: 'Region', field: 'region' },
    { count: 0, isFilterVisible: false, columnName: 'Job Level', field: 'jobLevel' },
  ]);

  const filterMenuOptions = ref([
    { column: 'location', isSelected: false, text: 'sample 1', subtext: 'subtext', value: 'sample1' },
    { column: 'location', isSelected: false, text: 'sample 2', subtext: 'subtext', value: 'sample2' },
    { column: 'location', isSelected: false, text: 'sample 3', subtext: 'subtext', value: 'sample3' },
    { column: 'location', isSelected: false, text: 'sample 4', subtext: 'subtext', value: 'sample4' },
    { column: 'location', isSelected: false, text: 'sample 5', subtext: 'subtext', value: 'sample5' },
]);

const options1 = ref([
    { column: '', isSelected: false, text: 'sample 1', subtext: '', value: 'sample1' },
    { column: '', isSelected: false, text: 'sample 2', subtext: '', value: 'sample2' },
    { column: '', isSelected: false, text: 'sample 4', subtext: 'subtext', value: 'sample4' },
    { column: '', isSelected: false, text: 'sample 5', subtext: 'subtext', value: 'sample5' },
]);

  const filterMenuList1 = ref([
    { count: 0, isFilterVisible: false, columnName: 'Employee Type', field: 'employeeType' },
    { count: 0, isFilterVisible: false, columnName: 'Department', field: 'department' },
    { count: 0, isFilterVisible: false, columnName: 'Location', field: 'location' },
  ]);

  const filterMenuOptions1 = ref([
    { column: 'location', isSelected: false, text: 'sample 1', subtext: 'subtext', value: 'sample1' },
    { column: 'location', isSelected: false, text: 'sample 2', subtext: 'subtext', value: 'sample2' },
    { column: 'location', isSelected: false, text: 'sample 3', subtext: 'subtext', value: 'sample3' },
    { column: 'location', isSelected: false, text: 'sample 4', subtext: 'subtext', value: 'sample4' },
    { column: 'location', isSelected: false, text: 'sample 5', subtext: 'subtext', value: 'sample5' },
]);



const selectedOptions = ref([]);
const selectedOptions1 = ref([]);
const searchValue = ref('')
const searchValue1 = ref('')
const selectedOptions2 = ref([]);
const searchValue2 = ref('');

const deselected = ref('')


const handleSelected = (e) => {
  console.log('selected', e)
}

const removeSelected = (removeSelected) => {
  deselected.value = removeSelected
}
</script>
