---
title: ดรอปดาวน์
descripttion: คอมโพเนนต์ดรอปดาวน์ให้วิธีที่ยืดหยุ่นในการแสดงเมนูตัวเลือกเมื่อผู้ใช้โต้ตอบกับองค์ประกอบทริกเกอร์ ดรอปดาวน์มักใช้สำหรับเมนูนำทาง รายการการดำเนินการ และการโต้ตอบ UI อื่นๆ ที่คุณต้องการประหยัดพื้นที่ในขณะที่ให้ตัวเลือกหลายตัว พวกมันแตกต่างจากตัวควบคุมการเลือกแบบฟอร์มและไม่ได้มีไว้สำหรับการเลือกฟิลด์แบบฟอร์ม
outline: deep
---

# ดรอปดาวน์

คอมโพเนนต์ดรอปดาวน์ให้วิธีที่ยืดหยุ่นในการแสดงเมนูตัวเลือกเมื่อผู้ใช้โต้ตอบกับองค์ประกอบทริกเกอร์ ดรอปดาวน์มักใช้สำหรับเมนูนำทาง รายการการดำเนินการ และการโต้ตอบ UI อื่นๆ ที่คุณต้องการประหยัดพื้นที่ในขณะที่ให้ตัวเลือกหลายตัว พวกมันแตกต่างจากตัวควบคุมการเลือกแบบฟอร์มและไม่ได้มีไว้สำหรับการเลือกฟิลด์แบบฟอร์ม

## การใช้งานพื้นฐาน

คอมโพเนนต์ดรอปดาวน์สามารถใช้กับองค์ประกอบทริกเกอร์ต่างๆ เช่น ปุ่ม ชิปส์ หรือโลเซนจ์ เนื้อหาภายในสล็อตดรอปดาวน์จะกลายเป็นองค์ประกอบทริกเกอร์ที่เปิดเมนูดรอปดาวน์เมื่อคลิก

<div class="spr-flex spr-items-center spr-gap-4">
  <spr-dropdown 
    id="sample-dropdownBasic1" 
    v-model="dropdownModel.dropdownBasic1" 
    :menu-list="menuList" 
    width="100px" 
    popper-width="200px" 
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Button</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>
  <spr-dropdown 
    id="sample-dropdownBasic2" 
    v-model="dropdownModel.dropdownBasic2" 
    :menu-list="menuList" 
    width="100px" 
    popper-width="200px" 
  >
    <spr-chips class="spr-w-full" label="Chips" />
  </spr-dropdown>
  <spr-dropdown 
    id="sample-dropdownBasic3" 
    v-model="dropdownModel.dropdownBasic3" 
    :menu-list="menuList" 
    width="100px" 
    popper-width="200px" 
  >
    <spr-lozenge class="spr-w-full" label="Lozange" />
  </spr-dropdown>
</div>

```vue
<template>
  <div class="spr-flex spr-items-center spr-gap-4">
    <!-- Button trigger dropdown -->
    <spr-dropdown
      id="sample-dropdownBasic1"
      v-model="dropdownModel.dropdownBasic1"
      :menu-list="menuList"
      width="100px"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Button</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>

    <!-- Chips trigger dropdown -->
    <spr-dropdown
      id="sample-dropdownBasic2"
      v-model="dropdownModel.dropdownBasic2"
      :menu-list="menuList"
      width="100px"
      popper-width="200px"
    >
      <spr-chips class="spr-w-full" label="Chips" />
    </spr-dropdown>

    <!-- Lozenge trigger dropdown -->
    <spr-dropdown
      id="sample-dropdownBasic3"
      v-model="dropdownModel.dropdownBasic3"
      :menu-list="menuList"
      width="100px"
      popper-width="200px"
    >
      <spr-lozenge class="spr-w-full" label="Lozange" />
    </spr-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Icon } from '@iconify/vue';

const dropdownModel = ref({
  dropdownBasic1: '',
  dropdownBasic2: '',
  dropdownBasic3: '',
});

const menuList = ref([
  { text: 'Google', value: 'https://www.google.com' },
  { text: 'GitHub', value: 'https://github.com' },
  { text: 'Gmail', value: 'https://mail.google.com' },
]);
</script>
```

## การจัดตำแหน่ง

เมนูดรอปดาวน์สามารถจัดตำแหน่งได้หลายวิธีสัมพันธ์กับองค์ประกอบทริกเกอร์ พร็อพส์ `placement` ควบคุมตำแหน่งที่เมนูดรอปดาวน์ปรากฏ

ตัวเลือกการจัดตำแหน่งที่มี:

- `auto`, `auto-start`, `auto-end` - กำหนดการจัดตำแหน่งที่ดีที่สุดโดยอัตโนมัติ
- `top`, `top-start`, `top-end` - จัดตำแหน่งเหนือทริกเกอร์
- `right`, `right-start`, `right-end` - จัดตำแหน่งทางขวาของทริกเกอร์
- `bottom`, `bottom-start`, `bottom-end` - จัดตำแหน่งใต้ทริกเกอร์ (ค่าเริ่มต้น)
- `left`, `left-start`, `left-end` - จัดตำแหน่งทางซ้ายของทริกเกอร์

<div class="spr-grid spr-gap-4">
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="sample-dropdownPlacements0"
      v-model="dropdownModel.dropdownPlacements0"
      :menu-list="menuList"
      placement="auto"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Auto</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    <spr-dropdown
      id="sample-dropdownPlacements1"
      v-model="dropdownModel.dropdownPlacements1"
      :menu-list="menuList"
      placement="auto-start"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Auto Start</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    <spr-dropdown
      id="sample-dropdownPlacements2"
      v-model="dropdownModel.dropdownPlacements2"
      :menu-list="menuList"
      placement="auto-end"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Auto End</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
  </div>
</div>

```vue
<template>
  <!-- Auto placement -->
  <spr-dropdown id="dropdown-auto" v-model="selectedValue" :menu-list="menuList" placement="auto" popper-width="200px">
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Auto</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>

  <!-- Top placement -->
  <spr-dropdown id="dropdown-top" v-model="selectedValue" :menu-list="menuList" placement="top" popper-width="200px">
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Top</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>
</template>
```

## ความกว้างและความกว้างของป็อปเปอร์

คอมโพเนนต์ดรอปดาวน์ให้สองวิธีในการควบคุมขนาด:

- `width`: ควบคุมความกว้างโดยรวมของ wrapper ดรอปดาวน์ (รวมองค์ประกอบทริกเกอร์)
- `popper-width`: ควบคุมความกว้างของเมนูดรอปดาวน์ที่ปรากฏเมื่อคลิก

<div>
  <spr-dropdown
    id="sample-dropdownWidth"
    v-model="dropdownModel.dropdownWidth"
    :menu-list="menuList"
    width="50%"
    popper-width="500px"
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Button</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>
</div>

```vue
<template>
  <spr-dropdown
    id="sample-dropdownWidth"
    v-model="dropdownWidth"
    :menu-list="menuList"
    width="50%"
    popper-width="500px"
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Button</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>
</template>
```

## กลยุทธ์ป็อปเปอร์

เมื่อใช้ดรอปดาวน์ภายในองค์ประกอบที่มีตำแหน่งเช่นโมดอลหรือแผงคงที่ คุณอาจต้องเปลี่ยนกลยุทธ์การจัดตำแหน่ง พร็อพส์ `popper-strategy` ควบคุมวิธีการจัดตำแหน่งเมนูดรอปดาวน์:

- `absolute` (ค่าเริ่มต้น): จัดตำแหน่งดรอปดาวน์สัมพันธ์กับบรรพบุรุษที่มีตำแหน่งที่ใกล้ที่สุด
- `fixed`: จัดตำแหน่งดรอปดาวน์สัมพันธ์กับวิวพอร์ต โดยไม่สนใจการจัดตำแหน่งองค์ประกอบพาเรนต์

<spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

<spr-modal v-model="modalModel" title="Dropdown with Modal">
  <spr-dropdown
    id="sample-dropdownStrategy"
    v-model="dropdownModel.dropdownStrategy"
    :menu-list="menuList"
    wrapper-position="initial"
    popper-strategy="fixed"
    width="100px"
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Button</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</spr-modal>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

  <spr-modal v-model="modalModel" title="Dropdown with Modal">
    <spr-dropdown
      id="sample-dropdownStrategy"
      v-model="dropdownStrategy"
      :menu-list="menuList"
      wrapper-position="initial"
      popper-strategy="fixed"
      width="100px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Button</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  </spr-modal>
</template>

<script setup>
import { ref } from 'vue';

const modalModel = ref(false);
const dropdownStrategy = ref('');
</script>
```

:::warning หมายเหตุสำคัญ
เมื่อใช้กลยุทธ์ป็อปเปอร์ `fixed` คุณควรตั้งค่า `wrapper-position="initial"` ด้วยเพื่อแทนที่การจัดตำแหน่ง `relative` เริ่มต้น สิ่งนี้ป้องกันความขัดแย้งในการจัดตำแหน่งภายในเลย์เอาต์ที่ซับซ้อนเช่นโมดอล
:::

## เนื้อหาป็อปเปอร์ปรับแต่ง

คุณสามารถปรับแต่งเนื้อหาของเมนูดรอปดาวน์โดยใช้สล็อต `popper` สิ่งนี้ช่วยให้คุณรวม HTML หรือคอมโพเนนต์ปรับแต่งใดๆ ภายในดรอปดาวน์

<div>
  <spr-dropdown
    id="sample-dropdownCustomPopper"
    width="150px"
    :triggers="['hover', 'click']"
    :popper-triggers="['hover', 'click']"
    popper-width="500px"
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Custom Popper</span>
      <Icon icon="ph:caret-down" /> 
    </spr-button>
    <template #popper>
      <h5 class="spr-text-center">This is a custom popper!</h5>
    </template>
  </spr-dropdown>
</div>

```vue
<template>
  <spr-dropdown
    id="sample-dropdownCustomPopper"
    width="150px"
    :triggers="['hover', 'click']"
    :popper-triggers="['hover', 'click']"
    popper-width="500px"
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Custom Popper</span>
      <Icon icon="ph:caret-down" />
    </spr-button>

    <template #popper>
      <h5 class="spr-text-center">This is a custom popper!</h5>
    </template>
  </spr-dropdown>
</template>
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
      <td><strong>จำเป็น.</strong> ตัวระบุเฉพาะสำหรับดรอปดาวน์ ใช้เพื่อผูกป็อปเปอร์กับองค์ประกอบที่ถูกต้อง</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>model-value</code></td>
      <td>ค่าที่เลือกในดรอปดาวน์ ผูกด้วย <code>v-model</code></td>
      <td>string | number | object | Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>menu-list</code></td>
      <td>รายการตัวเลือกที่จะแสดงในเมนูดรอปดาวน์ สามารถจัดรูปแบบเป็น:<br>
        - อาร์เรย์ของออบเจ็กต์ที่มีพร็อพส์ <code>text</code> และ <code>value</code><br>
        - อาร์เรย์ของสตริง<br>
        - อาร์เรย์ของออบเจ็กต์ปรับแต่ง (ใช้กับ <code>textField</code> และ <code>valueField</code>)
      </td>
      <td>array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>text-field</code></td>
      <td>เมื่อใช้ออบเจ็กต์ปรับแต่งใน <code>menuList</code> ระบุพร็อพส์ที่จะใช้สำหรับข้อความแสดง</td>
      <td>string</td>
      <td>'text'</td>
    </tr>
    <tr>
      <td><code>value-field</code></td>
      <td>เมื่อใช้ออบเจ็กต์ปรับแต่งใน <code>menuList</code> ระบุพร็อพส์ที่จะใช้สำหรับค่า</td>
      <td>string</td>
      <td>'value'</td>
    </tr>
    <tr>
      <td><code>search-string</code></td>
      <td>คำค้นหาที่จะกรองตัวเลือกดรอปดาวน์</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>multiSelect</code></td>
      <td>เมื่อเป็นจริง อนุญาตให้เลือกตัวเลือกหลายตัวจากดรอปดาวน์</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>group-items-by</code></td>
      <td>จัดกลุ่มรายการดรอปดาวน์ตามตัวอักษร</td>
      <td>'A-Z' | 'Z-A'</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>placement</code></td>
      <td>ควบคุมตำแหน่งของเมนูดรอปดาวน์สัมพันธ์กับทริกเกอร์</td>
      <td>'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'</td>
      <td>'bottom'</td>
    </tr>
    <tr>
      <td><code>wrapper-position</code></td>
      <td>ค่าตำแหน่ง CSS สำหรับ wrapper ดรอปดาวน์</td>
      <td>string</td>
      <td>'relative'</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>ความกว้างของ wrapper ดรอปดาวน์ (รวมองค์ประกอบทริกเกอร์)</td>
      <td>string</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td><code>popper-width</code></td>
      <td>ความกว้างของเมนูดรอปดาวน์ที่ปรากฏเมื่อถูกทริกเกอร์</td>
      <td>string</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td><code>popper-inner-width</code></td>
      <td>ความกว้างของพื้นที่เนื้อหาภายในของเมนูดรอปดาวน์</td>
      <td>string</td>
      <td>'unset'</td>
    </tr>
    <tr>
      <td><code>popper-strategy</code></td>
      <td>กลยุทธ์การจัดตำแหน่งสำหรับเมนูดรอปดาวน์ โดยเฉพาะสำคัญในโมดอล</td>
      <td>'absolute' | 'fixed'</td>
      <td>'absolute'</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>เมื่อเป็นจริง ปิดใช้งานดรอปดาวน์จากการเปิด</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>ladderized</code></td>
      <td>เมื่อเป็นจริง เปิดใช้งานตัวเลือกดรอปดาวน์แบบลำดับชั้น (เมนูซ้อน)</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>remove-current-level-in-back-label</code></td>
      <td>สำหรับดรอปดาวน์แบบลำดับชั้น ควบคุมพฤติกรรมป้ายย้อนกลับ</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>no-check-in-list</code></td>
      <td>เมื่อเป็นจริง ซ่อนไอคอนเครื่องหมายถูกในรายการดรอปดาวน์</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>lozenge</code></td>
      <td>เมื่อเป็นจริง เปิดใช้งานการแสดงรายการโลเซนจ์</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>triggers</code></td>
      <td>อาร์เรย์ของอีเวนต์ที่จะทริกเกอร์ดรอปดาวน์ให้เปิด</td>
      <td>'click' | 'hover' | 'focus' | 'touch'[]</td>
      <td>['click']</td>
    </tr>
    <tr>
      <td><code>popper-triggers</code></td>
      <td>อาร์เรย์ของอีเวนต์ที่จะทริกเกอร์เมนูดรอปดาวน์ (องค์ประกอบป็อปเปอร์) ให้เปิด</td>
      <td>'click' | 'hover' | 'focus' | 'touch'[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>auto-hide</code></td>
      <td>เมื่อเป็นจริง ซ่อนดรอปดาวน์โดยอัตโนมัติเมื่อคลิกภายนอก</td>
      <td>boolean</td>
      <td>true</td>
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
      <td>update:modelValue</td>
      <td>ปล่อยเมื่อค่าที่เลือกเปลี่ยน</td>
      <td>ค่าที่เลือกใหม่</td>
    </tr>
    <tr>
      <td>@infinite-scroll-trigger</td>
      <td>ปล่อยเมื่อผู้ใช้เลื่อนไปที่ด้านล่างของรายการดรอปดาวน์ มีประโยชน์สำหรับการใช้งานการโหลดแบบ lazy</td>
      <td>Boolean</td>
    </tr>
    <tr>
      <td>@popper-state</td>
      <td>อีเวนต์ที่ปล่อยเมื่อคุณเปิดหรือปิดป็อปเปอร์</td>
      <td>Bolean</td>
    </tr>
  </tbody>
</table>

### Slots

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
      <td>องค์ประกอบทริกเกอร์ที่เปิดดรอปดาวน์เมื่อคลิก (โดยปกติเป็นปุ่ม ชิปส์ หรือโลเซนจ์)</td>
    </tr>
    <tr>
      <td>popper</td>
      <td>องค์ประกอบปรับแต่งสำหรับเนื้อหาป็อปเปอร์</td>
    </tr>
  </tbody>
</table>

## การใช้ผลิตภัณฑ์

ผลิตภัณฑ์ Sprout เหล่านี้ใช้คอมโพเนนต์ดรอปดาวน์:

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";

import { Icon } from '@iconify/vue';

import SprDropdown from "@/components/dropdown/dropdown.vue";
import SprButton from "@/components/button/button.vue";
import SprChips from "@/components/chips/chips.vue";
import SprLozenge from "@/components/lozenge/lozenge.vue"
import SprModal from "@/components/modal/modal.vue"
import SprLogo from "@/components/logo/logo.vue";

const dropdownModel = ref({
  dropdownBasic1: '',
  dropdownBasic2: '',
  dropdownBasic3: '',
  dropdownGroupedItemsBy: '',
  dropdownPreSelectedItems:  'https://www.yahoo.com',
  dropdownPlacements0: '',
  dropdownPlacements1: '',
  dropdownPlacements2: '',
  dropdownWidth: '',
  dropdownStrategy: '',
});

const menuList = ref([
  { text: 'Google', value: 'https://www.google.com' },
  { text: 'GitHub', value: 'https://github.com' },
  { text: 'Gmail', value: 'https://mail.google.com' },
  { text: 'GoDaddy', value: 'https://www.godaddy.com' },
  { text: 'GIMP', value: 'https://www.gimp.org' },
  { text: 'YouTube', value: 'https://www.youtube.com' },
  { text: 'Yahoo', value: 'https://www.yahoo.com' },
  { text: 'Wikipedia', value: 'https://www.wikipedia.org' },
  { text: 'WordPress', value: 'https://wordpress.com' },
  { text: 'Walmart', value: 'https://www.walmart.com' },
  { text: 'Stack Overflow', value: 'https://stackoverflow.com' },
  { text: 'Slack', value: 'https://slack.com' },
  { text: 'Spotify', value: 'https://www.spotify.com' },
  { text: 'Twitter', value: 'https://twitter.com' },
  { text: 'Trello', value: 'https://trello.com' },
  { text: 'Tumblr', value: 'https://www.tumblr.com' },
  { text: 'Facebook', value: 'https://facebook.com' },
  { text: 'Figma', value: 'https://www.figma.com' },
  { text: 'Flickr', value: 'https://www.flickr.com' },
  { text: 'Reddit', value: 'https://www.reddit.com' },
  { text: 'LinkedIn', value: 'https://www.linkedin.com' },
  { text: 'Amazon', value: 'https://www.amazon.com' },
  { text: 'Adobe', value: 'https://www.adobe.com' },
  { text: 'Airbnb', value: 'https://www.airbnb.com' },
]);

const modalModel = ref(false);

const handleDropdownLink = (newValue, key) => {
  if (newValue) {
    window.open(newValue, '_blank', 'noopener,noreferrer');
    dropdownModel.value[key] = null;
  }
}

watch(() => dropdownModel.value.dropdownBasic1, (newValue) => handleDropdownLink(newValue, 'dropdownBasic1'));

watch(() => dropdownModel.value.dropdownBasic2, (newValue) => handleDropdownLink(newValue, 'dropdownBasic2'));

watch(() => dropdownModel.value.dropdownBasic3, (newValue) => handleDropdownLink(newValue, 'dropdownBasic3'));
</script>
