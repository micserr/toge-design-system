---
title: แท็บ
descripttion: แท็บใช้เพื่อจัดระเบียบเนื้อหาเป็นส่วนต่างๆ แท็บมักใช้ในเว็บแอปพลิเคชันเพื่อจัดการมุมมองหลายมุมมอง
outline: deep
---

# แท็บ

แท็บใช้เพื่อจัดระเบียบเนื้อหาเป็นส่วนต่างๆ แท็บมักใช้ในเว็บแอปพลิเคชันเพื่อจัดการมุมมองหลายมุมมอง

## การใช้งานพื้นฐาน

<h5 class="spr-mb-4">แท็บปกติ:</h5>

<spr-tabs :list="tabsBasic" />

```vue
<template>
  <spr-tabs :list="tabsBasic" />
</template>

<script lang="ts" setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsBasic = [{ label: 'tab' }, { label: 'tab' }, { label: 'tab' }];
</script>
```

<h5 class="spr-mb-4">แท็บขีดเส้นใต้:</h5>

<spr-tabs :list="tabsUnderlined" :underlined=true />

```vue
<template>
  <spr-tabs :list="tabsUnderlined" :underlined="true" />
</template>

<script lang="ts" setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsUnderlined = [
  { label: 'title', disabled: false },
  { label: 'title', disabled: false },
  { label: 'title', disabled: false },
];
</script>
```

## สถานะปิดใช้งาน

<h5 class="spr-mb-4">แท็บปกติ:</h5>

<spr-tabs :list="tabsBasicWithDisabled" />

```vue
<template>
  <spr-tabs :list="tabsBasicWithDisabled" />
</template>

<script lang="ts" setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsBasicWithDisabled = ref([
  { label: 'tab', disabled: false },
  { label: 'tab', disabled: false },
  { label: 'tab', disabled: true },
]);
</script>
```

<h5 class="spr-mb-4">แท็บขีดเส้นใต้:</h5>

<spr-tabs :list="tabsUnderlinedDisabled" :underlined=true />

```vue
<template>
  <spr-tabs :list="tabsUnderlinedDisabled" :underlined="true" />
</template>

<script lang="ts" setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsUnderlinedDisabled = [
  { label: 'title', disabled: false },
  { label: 'title', disabled: false },
  { label: 'title', disabled: true },
];
</script>
```

## สถานะใช้งานอยู่

โดยการเพิ่มแอตทริบิวต์ `active-tab` ให้กับคอมโพเนนต์ คุณสามารถระบุแท็บใดที่ควรตั้งเป็นใช้งานอยู่ ซึ่งจะไฮไลต์แท็บและแสดงภาพว่าถูกเลือก

<spr-tabs :list="tabsRandomLabel" active-tab="tab 2" />

```vue
<template>
  <spr-tabs :list="tabsRandomLabel" active-tab="tab 2" />
</template>

<script lang="ts" setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsRandomLabel = ref([{ label: 'tab 1' }, { label: 'tab 2' }, { label: 'tab 3' }]);
</script>
```

## ด้วยไอคอน

<h5 class="spr-mb-4">แท็บปกติ:</h5>

<spr-tabs :list="tabsWithIcon" />

```vue
<template>
  <spr-tabs :list="tabsWithIcon" />
</template>

<script lang="ts" setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsWithIcon = [
  { label: 'tab', icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { label: 'tab', icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { label: 'tab', icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
];
</script>
```

<h5 class="spr-mb-4">แท็บขีดเส้นใต้:</h5>

<spr-tabs :list="tabsUnderlinedWithIcon" :underlined=true />

```vue
<template>
  <spr-tabs :list="tabsUnderlinedWithIcon" :underlined="true" />
</template>

<script lang="ts" setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsUnderlinedWithIcon = [
  { label: 'title', disabled: false, icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { label: 'title', disabled: false, icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { label: 'title', disabled: false, icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
];
</script>
```

## ไอคอนเท่านั้น

<h5 class="spr-mb-4">แท็บปกติ:</h5>

<spr-tabs :list="tabsIconOnly" />

```vue
<template>
  <spr-tabs :list="tabsIconOnly" />
</template>

<script lang="ts" setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsIconOnly = [
  { icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
];
</script>
```

<h5 class="spr-mb-4">แท็บขีดเส้นใต้:</h5>

<spr-tabs :list="tabsIconOnly" :underlined="true" />

```vue
<template>
  <spr-tabs :list="tabsIconOnly" :underlined="true" />
</template>

<script lang="ts" setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsIconOnly = [
  { icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
];
</script>
```

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>ประเภท</th>
      <th>ค่าเริ่มต้น</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>list</code>
      </td>
      <td>อาร์เรย์ของรายการแท็บที่จะแสดง แต่ละรายการควรมีคุณสมบัติ <code>label</code> (สำหรับแสดงข้อความ) และสามารถมี <code>icon</code> (ไอคอนที่จะแสดง) <code>iconFill</code> (ไอคอนที่จะแสดงเมื่อใช้งานอยู่) และ <code>disabled</code> (แท็บถูกปิดใช้งานหรือไม่) ได้อย่างเลือก</td>
      <td>Array&lt;{ label: string; icon?: string; iconFill?: string | Component; disabled?: boolean }&gt;</td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td>
        <code>underlined</code>
      </td>
      <td>กำหนดสไตล์ภาพของแท็บ เมื่อ <code>true</code> แท็บจะมีสไตล์ขีดเส้นใต้พร้อมแท็บที่ใช้งานอยู่ไฮไลต์ด้วยเส้นใต้ เมื่อ <code>false</code> แท็บจะมีลักษณะเหมือนปุ่มพร้อมขอบ</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>activeTab</code>
      </td>
      <td>ตั้งแท็บใดที่ควรใช้งานโดยการจับคู่ป้ายกำกับ หากระบุ แท็บที่มีป้ายกำกับตรงกันจะถูกเปิดใช้งานเมื่อคอมโพเนนต์ติดตั้ง หากไม่ระบุหรือไม่พบการจับคู่ แท็บแรกจะใช้งานโดยค่าเริ่มต้น</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>พารามิเตอร์</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>tabIndex</code>
      </td>
      <td>ถูกปล่อยออกมาเมื่อแท็บถูกเลือก ส่งคืนดัชนีของแท็บที่เลือก</td>
      <td>
        <code>(index: number)</code>
      </td>
    </tr>
  </tbody>
</table>

### List Item Properties

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>ประเภท</th>
      <th>จำเป็น</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>label</code>
      </td>
      <td>ข้อความที่จะแสดงในแท็บ นอกจากนี้ยังใช้เพื่อจับคู่กับพร็อพ <code>activeTab</code></td>
      <td>string</td>
      <td>ใช่ (เว้นแต่ใช้แท็บไอคอนเท่านั้น)</td>
    </tr>
    <tr>
      <td>
        <code>icon</code>
      </td>
      <td>ไอคอนที่จะแสดงในแท็บ ใช้ Iconify สำหรับการเรนเดอร์ไอคอน</td>
      <td>string</td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td>
        <code>iconFill</code>
      </td>
      <td>ไอคอนที่จะแสดงเมื่อแท็บใช้งานอยู่ สิ่งนี้ช่วยให้สามารถใช้สไตล์ไอคอนที่แตกต่างเมื่อแท็บถูกเลือก</td>
      <td>string | Component</td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td>
        <code>disabled</code>
      </td>
      <td>แท็บถูกปิดใช้งานหรือไม่ แท็บที่ปิดใช้งานไม่สามารถเลือกได้และมีสถานะภาพปิดใช้งาน</td>
      <td>boolean</td>
      <td>ไม่</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import {ref} from 'vue';

import SprTabs from "@/components/tabs/tabs.vue";
import SprLogo from "@/components/logo/logo.vue";

const tabsBasic = ref([
  { label: "tab" },
  { label: "tab" },
  { label: "tab" },
]);

const tabsBasicWithDisabled = ref([
  { label: "tab", disabled: false },
  { label: "tab", disabled: false },
  { label: "tab", disabled: true },
]);


const tabsRandomLabel = ref([
  { label: "tab 1" },
  { label: "tab 2" },
  { label: "tab 3" },
]);

const tabsWithIcon = ref([
  { label: "tab", icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { label: "tab", icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { label: "tab", icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
]);

const tabsIconOnly = ref([
  { icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
]);

const tabsUnderlined = ref([
  { label: "title", disabled: false },
  { label: "title", disabled: false },
  { label: "title", disabled: false },
]);

const tabsUnderlinedDisabled = ref([
  { label: "title", disabled: false },
  { label: "title", disabled: false },
  { label: "title", disabled: true },
]);

const tabsUnderlinedWithIcon = ref([
  { label: "title", disabled: false, icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { label: "title", disabled: false, icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { label: "title", disabled: false, icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
]);
</script>
