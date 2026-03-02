---
title: ตัวกรองคุณลักษณะ
descripttion: คอมโพเนนต์ตัวกรองคุณลักษณะให้อินเทอร์เฟซผู้ใช้สำหรับการกรองรายการตามคุณลักษณะต่างๆ โดยค่าเริ่มต้น มันใช้คอมโพเนนต์ชิปเป็นองค์ประกอบทริกเกอร์และคอมโพเนนต์รายการเพื่อแสดงตัวเลือกการกรอง แต่สามารถปรับแต่งให้ใช้คอมโพเนนต์อื่นตามต้องการ
outline: deep
---

# ตัวกรองคุณลักษณะ

คอมโพเนนต์ตัวกรองคุณลักษณะให้อินเทอร์เฟซผู้ใช้สำหรับการกรองรายการตามคุณลักษณะต่างๆ โดยค่าเริ่มต้น มันใช้คอมโพเนนต์ชิปเป็นองค์ประกอบทริกเกอร์และคอมโพเนนต์รายการเพื่อแสดงตัวเลือกการกรอง แต่สามารถปรับแต่งให้ใช้คอมโพเนนต์อื่นตามต้องการ

## การใช้งานพื้นฐาน

<SprAttributeFilter
id="attribute_filter1"
:filter-label="'Status'"
width="70px"
popper-width="300px"
placement="bottom-start"
:filter-menu-list="filterList" 
/>

```vue
<template>
  <SprAttributeFilter
    id="attribute_filter1"
    :filter-label="'Status'"
    width="70px"
    popper-width="300px"
    placement="bottom-start"
    :filter-menu-list="filterList"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const filterList = ref([
  { text: 'Approved', value: 'Approved' },
  { text: 'Completed', value: 'Completed' },
  { text: 'In Progress', value: 'In Progress' },
  { text: 'Pending', value: 'Pending' },
  { text: 'Rejected', value: 'Rejected' },
  { text: 'On Hold', value: 'On Hold' },
]);
</script>
```

## เลือกหลายรายการ

<SprAttributeFilter
id="attribute_filter5"
:filter-label="'Status'"
width="70px"
popper-width="300px"
placement="bottom-start"
:multiselect="true"
:filter-menu-list="filterList" 
/>

```vue
<template>
  <SprAttributeFilter
    id="attribute_filter5"
    :filter-label="'Status'"
    width="70px"
    popper-width="300px"
    placement="bottom-start"
    :filter-menu-list="filterList"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const filterList = ref([
  { text: 'Approved', value: 'Approved' },
  { text: 'Completed', value: 'Completed' },
  { text: 'In Progress', value: 'In Progress' },
  { text: 'Pending', value: 'Pending' },
  { text: 'Rejected', value: 'Rejected' },
  { text: 'On Hold', value: 'On Hold' },
]);
</script>
```

## ทริกเกอร์ตัวกรองคุณลักษณะ

โดยค่าเริ่มต้น ตัวกรองคุณลักษณะถูกทริกเกอร์โดยคอมโพเนนต์ชิป คุณสามารถเปลี่ยนคอมโพเนนต์ทริกเกอร์โดยการให้สล็อตเริ่มต้น

<SprAttributeFilter
  id="attribute_filter2"
  :filter-label="'Status'"
  width="70px"
  popper-width="300px"
  placement="bottom-start"
  :filter-menu-list="filterList">
<SprButton tone="success"> Status </SprButton>
</SprAttributeFilter>

```vue
<template>
  <SprAttributeFilter
    id="attribute_filter2"
    :filter-label="'Status'"
    width="70px"
    popper-width="300px"
    placement="bottom-start"
    :filter-menu-list="filterList"
  >
    <SprButton tone="success"> Status </SprButton>
  </SprAttributeFilter>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const filterList = ref([
  { text: 'Approved', value: 'Approved' },
  { text: 'Completed', value: 'Completed' },
  { text: 'In Progress', value: 'In Progress' },
  { text: 'Pending', value: 'Pending' },
  { text: 'Rejected', value: 'Rejected' },
  { text: 'On Hold', value: 'On Hold' },
]);
</script>
```

## ค้นหา

เพื่อแสดงอินพุตการค้นหาภายในป๊อปเปอร์ตัวกรองคุณลักษณะ ตั้งค่า prop `searchable` เป็น `true` คุณยังสามารถผูกโมเดลกับอินพุตการค้นหาโดยใช้ directive `v-model:search`

::: info
สำหรับการค้นหา API ปิดใช้งานการค้นหาในเครื่องโดยตั้งค่า prop `disableLocalSearch` เป็น `true`
:::

<div class="spr-flex spr-items-center spr-gap-2">
  <SprAttributeFilter
    id="attribute_filter3"
    :filter-label="'Status w/ Local Search'"
    width="180px"
    v-model:search="searchString1"
    popper-width="300px"
    placement="bottom-start"
    :searchable="true"
    :filter-menu-list="filterList" 
  />

<SprAttributeFilter
id="attribute_filter4"
:filter-label="'Status w/o Local Search'"
width="180px"
popper-width="300px"
v-model:search="searchString2"
placement="bottom-start"
:searchable="true"
:disable-local-search="true"
:filter-menu-list="filterList"
@update:search="handleSearch"
/>

</div>

```vue
<template>
  <div class="spr-flex spr-items-center spr-gap-2">
    <SprAttributeFilter
      id="attribute_filter3"
      :filter-label="'Status w/ Local Search'"
      width="180px"
      v-model:search="searchString1"
      popper-width="300px"
      placement="bottom-start"
      :searchable="true"
      :filter-menu-list="filterList"
    />

    <SprAttributeFilter
      id="attribute_filter4"
      :filter-label="'Status w/o Local Search'"
      width="180px"
      popper-width="300px"
      placement="bottom-start"
      :searchable="true"
      :disable-local-search="true"
      :filter-menu-list="filterList"
      @update:search="handleSearch"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const searchString1 = ref('');
const searchString2 = ref('');

const filterList = ref([
  { text: 'Approved', value: 'Approved' },
  { text: 'Completed', value: 'Completed' },
  { text: 'In Progress', value: 'In Progress' },
  { text: 'Pending', value: 'Pending' },
  { text: 'Rejected', value: 'Rejected' },
  { text: 'On Hold', value: 'On Hold' },
]);

const handleSearch = (search: string) => {
  //do something with search term
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
      <td><code>id</code></td>
      <td>
        <p>ตัวระบุเฉพาะสำหรับคอมโพเนนต์</p>
      </td>
      <td>string</td>
      <td>'attribute_filter'</td>
    </tr>
    <tr>
      <td><code>filterLabel</code></td>
      <td>
        <p>ป้ายกำกับที่แสดงบนทริกเกอร์ตัวกรอง</p>
      </td>
      <td>string</td>
      <td>'Filter'</td>
    </tr>
    <tr>
      <td><code>headerLabel</code></td>
      <td>
        <p>ป้ายกำกับที่แสดงบนส่วนหัวป๊อปเปอร์ตัวกรอง</p>
      </td>
      <td>string</td>
      <td>'Add Filter'</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>เมื่อเป็นจริง ปิดใช้งานคอมโพเนนต์ชิปและดร็อปดาวน์ตัวกรองจากการเปิด</td>
      <td>boolean</td>
      <td>false</td>
    </tr>        
    <tr>
      <td><code>multiselect</code></td>
      <td>เปิดใช้งานการเลือกหลายตัวเลือกการกรอง</td>
      <td>boolean</td>
      <td>false</td>
    </tr>            
    <tr>
      <td><code>filterMenuList</code></td>
      <td>รายการตัวเลือกการกรองที่จะแสดงในดร็อปดาวน์</td>
      <td><code>{text: string, value: string}[]</code> | <code>string[]</code></td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>searchable</code></td>
      <td>เปิดใช้งานเพื่อแสดงอินพุตการค้นหาภายในดร็อปดาวน์ตัวกรอง</td>
      <td>boolean</td>
      <td>false</td>
    </tr>    
    <tr>
      <td><code>disableLocalSearch</code></td>
      <td>เมื่อเป็นจริง ปิดใช้งานฟังก์ชันการค้นหาในเครื่องภายในดร็อปดาวน์ตัวกรอง</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>showSelectedFilterCount</code></td>
      <td>เมื่อเป็นจริง แสดงแบดจ์ในทริกเกอร์คอมโพเนนต์ชิปที่ระบุจำนวนตัวกรองที่เลือก</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td><code>selectedFilterCount</code></td>
      <td>ตั้งค่าข้อความที่จะแสดงในแบดจ์ที่ระบุจำนวนตัวกรองที่เลือก หากไม่ระบุและ prop no list เป็นเท็จ จะใช้ค่าเริ่มต้นเป็นความยาวของตัวกรองที่เลือก</td>
      <td>string</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td><code>badgeVariant</code></td>
      <td>รูปแบบตัวแปรสำหรับแบดจ์ที่แสดงบนทริกเกอร์คอมโพเนนต์ชิป</td>
      <td>'brand' | 'information' | 'danger' | 'disabled'</td>
      <td>'danger'</td>
    </tr>
    <tr>
      <td><code>noList</code></td>
      <td>เมื่อเป็นจริง จะไม่แสดงรายการตัวกรอง จะใช้หากให้สล็อต body</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>clearable</code></td>
      <td>เมื่อเป็นจริง จะแสดงไอคอน X ในทริกเกอร์ชิปเริ่มต้นเพื่อล้างตัวกรองที่เลือก หรือหากไม่มีรายการ จะทริกเกอร์เหตุการณ์ onClearFilter</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

### Props เฉพาะดร็อปดาวน์

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
      <td><code>placement</code></td>
      <td>ควบคุมตำแหน่งของดร็อปดาวน์ตัวกรองสัมพันธ์กับทริกเกอร์</td>
      <td>'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'</td>
      <td>'bottom'</td>
    </tr>
    <tr>
      <td><code>wrapper-position</code></td>
      <td>ค่าตำแหน่ง CSS สำหรับดร็อปดาวน์ตัวกรอง</td>
      <td>string</td>
      <td>'relative'</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>ความกว้างของ wrapper ตัวกรอง (รวมถึงองค์ประกอบทริกเกอร์)</td>
      <td>string</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td><code>popper-width</code></td>
      <td>ความกว้างของดร็อปดาวน์ตัวกรองที่ปรากฏเมื่อถูกทริกเกอร์</td>
      <td>string</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td><code>popper-inner-width</code></td>
      <td>ความกว้างของพื้นที่เนื้อหาภายในของดร็อปดาวน์ตัวกรอง</td>
      <td>string</td>
      <td>'unset'</td>
    </tr>
    <tr>
      <td><code>popper-strategy</code></td>
      <td>กลยุทธ์การจัดตำแหน่งสำหรับดร็อปดาวน์ตัวกรอง โดยเฉพาะอย่างยิ่งสำคัญในโมดอล</td>
      <td>'absolute' | 'fixed'</td>
      <td>'absolute'</td>
    </tr>
    <tr>  
      <td><code>triggers</code></td>
      <td>อาร์เรย์ของเหตุการณ์ที่จะทริกเกอร์ดร็อปดาวน์ตัวกรองให้เปิด</td>
      <td>'click' | 'hover' | 'focus' | 'touch'[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>popper-triggers</code></td>
      <td>อาร์เรย์ของเหตุการณ์ที่จะทริกเกอร์เมนูดร็อปดาวน์ตัวกรอง (องค์ประกอบป๊อปเปอร์) ให้เปิด</td>
      <td>'click' | 'hover' | 'focus' | 'touch'[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>auto-hide</code></td>
      <td>เมื่อเป็นจริง จะซ่อนดร็อปดาวน์ตัวกรองโดยอัตโนมัติเมื่อคลิกภายนอก</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
  </tbody>
</table>

### เหตุการณ์

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
      <td>onSaveFilter</td>
      <td>ถูกปล่อยเมื่อคลิกปุ่มบันทึกในส่วนท้ายเริ่มต้น</td>
      <td>(savedFilters: MenuListType[])</td>
    </tr>
    <tr>
      <td>onOpenFilter</td>
      <td>ถูกปล่อยเมื่อแสดงดร็อปดาวน์ตัวกรอง</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onCloseFilter</td>
      <td>ถูกปล่อยเมื่อปิดดร็อปดาวน์ตัวกรอง</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onSelectFilter</td>
      <td>ถูกปล่อยเมื่อเลือกตัวเลือกการกรองจากดร็อปดาวน์</td>
      <td>(selectedFilters: MenuListType[])</td>
    </tr>
    <tr>
      <td>infiniteScrollTrigger</td>
      <td>ถูกปล่อยเมื่อผู้ใช้เลื่อนไปที่ด้านล่างของดร็อปดาวน์ตัวกรอง</td>
      <td>-</td>
    </tr>
    <tr>
      <td>@update:search</td>
      <td>ถูกปล่อยเมื่อค่าอินพุตการค้นหาเปลี่ยน</td>
      <td>(searchString: string)</td>
    </tr>
    <tr>
      <td>onClearFilter</td>
      <td>ถูกปล่อยเมื่อการดำเนินการล้างถูกทริกเกอร์เพื่อรีเซ็ตตัวกรองที่เลือก</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

### สล็อต

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>สล็อตสำหรับทริกเกอร์ของดร็อปดาวน์ตัวกรอง ค่าเริ่มต้นเป็นคอมโพเนนต์ชิป</td>
    </tr>
    <tr>
      <td>header</td>
      <td>สล็อตสำหรับส่วนหัวภายในดร็อปดาวน์ตัวกรอง</td>
    </tr>
    <tr>
      <td>actions</td>
      <td>สล็อตสำหรับการดำเนินการเพิ่มเติมภายในดร็อปดาวน์ตัวกรอง วางระหว่างส่วนหัว (คอนเทนเนอร์การค้นหาหากค้นหาได้) และเนื้อหา</td>
    </tr>
    <tr>
      <td>body</td>
      <td>สล็อตสำหรับเนื้อหาหลัก ค่าเริ่มต้นเป็นคอมโพเนนต์รายการ</td>
    </tr>
    <tr>
      <td>footer</td>
      <td>สล็อตสำหรับส่วนท้ายภายในดร็อปดาวน์ตัวกรอง ค่าเริ่มต้นเป็นปุ่มยกเลิกและบันทึก</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>  
  import SprAttributeFilter from '@/components/attribute-filter/attribute-filter.vue'
  import SprButton from '@/components/button/button.vue'
  
  import { ref } from 'vue'

  const searchString1 = ref('')
  const searchString2 = ref('')

  const filterList = ref([
    { text: 'Approved', value: 'Approved' },    
    { text: 'Completed', value: 'Completed' },
    { text: 'In Progress', value: 'In Progress' },
    { text: 'Pending', value: 'Pending' },
    { text: 'Rejected', value: 'Rejected' },
    { text: 'On Hold', value: 'On Hold' },
  ])

</script>
