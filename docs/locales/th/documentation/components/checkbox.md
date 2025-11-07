---
title: คอมโพเนนต์ช่องทำเครื่องหมาย
descripttion: คอมโพเนนต์ช่องทำเครื่องหมายช่วยให้ผู้ใช้เลือกหนึ่งรายการหรือมากกว่านั้นจากชุดตัวเลือกต่างๆ สนับสนุนสถานะต่างๆ รวมถึงทำเครื่องหมายแล้ว ไม่ทำเครื่องหมาย ไม่แน่นอน และปิดใช้งาน และสามารถปรับแต่งด้วยป้ายกำกับ คำอธิบาย เส้นขอบ และเลย์เอาต์เต็มความกว้าง
outline: deep
---

# คอมโพเนนต์ช่องทำเครื่องหมาย

คอมโพเนนต์ช่องทำเครื่องหมายช่วยให้ผู้ใช้เลือกหนึ่งรายการหรือมากกว่านั้นจากชุดตัวเลือกต่างๆ ช่องทำเครื่องหมายใช้กันทั่วไปในแบบฟอร์มและอินเทอร์เฟซการตั้งค่าเพื่อเปิดใช้งานการเลือกหลายรายการ

## การใช้งานพื้นฐาน

วิธีที่ใช้กันทั่วไปที่สุดในการใช้คอมโพเนนต์ช่องทำเครื่องหมายคือกับ directive `v-model` สำหรับการผูกข้อมูลสองทาง

<spr-checkbox v-model="checkboxModels.checkboxBasic" label="ป้ายกำกับช่องทำเครื่องหมาย" />

ค่า: <code>{{ checkboxModels.checkboxBasic }}</code>

```vue
<template>
  <spr-checkbox v-model="checkboxBasic" label="ป้ายกำกับช่องทำเครื่องหมาย" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

const checkboxBasic = ref(false);
</script>
```

## เพิ่มคำอธิบาย

คุณสามารถเพิ่มข้อความอธิบายใต้ป้ายกำกับโดยใช้ prop `description` สิ่งนี้มีประโยชน์สำหรับการให้บริบทเพิ่มเติมเกี่ยวกับความหมายของการเลือกช่องทำเครื่องหมาย

<spr-checkbox
  v-model="checkboxModels.checkboxDescription"
  label="ยอมรับข้อกำหนดและเงื่อนไข"
  description="โดยการทำเครื่องหมายในช่องนี้ คุณตกลงกับข้อกำหนดการให้บริการและนโยบายความเป็นส่วนตัวของเรา"
/>

```vue
<template>
  <spr-checkbox
    v-model="checkboxDescription"
    label="ยอมรับข้อกำหนดและเงื่อนไข"
    description="โดยการทำเครื่องหมายในช่องนี้ คุณตกลงกับข้อกำหนดการให้บริการและนโยบายความเป็นส่วนตัวของเรา"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

const checkboxDescription = ref(false);
</script>
```

## สถานะทำเครื่องหมายแล้ว

มีสองวิธีในการควบคุมสถานะทำเครื่องหมายแล้วของช่องทำเครื่องหมาย:

การใช้ `v-model` สร้างการผูกสองทางที่อัปเดตโดยอัตโนมัติเมื่อผู้ใช้โต้ตอบกับช่องทำเครื่องหมาย

<spr-checkbox v-model="checkboxModels.checkboxChecked" label="ตัวเลือกที่เลือกไว้ล่วงหน้า" />

```vue
<template>
  <spr-checkbox v-model="checkboxChecked" label="ตัวเลือกที่เลือกไว้ล่วงหน้า" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

// เริ่มต้นเป็นทำเครื่องหมายแล้ว
const checkboxChecked = ref(true);
</script>
```

### การใช้ prop `checked` (การผูกทางเดียว)

Prop `checked` ให้การผูกทางเดียวสำหรับกรณีที่คุณต้องการควบคุมสถานะทำเครื่องหมายแล้วอย่างชัดเจน

<spr-checkbox label="ตัวเลือกที่ทำเครื่องหมายเสมอ" checked />

```vue
<template>
  <spr-checkbox label="ตัวเลือกที่ทำเครื่องหมายเสมอ" checked />
</template>

<script lang="ts" setup>
import SprCheckbox from '@/components/checkbox/checkbox.vue';
</script>
```

::: warning
เมื่อใช้ prop `checked` โดยไม่มี `v-model` สถานะช่องทำเครื่องหมายจะไม่อัปเดตโดยอัตโนมัติเมื่อคลิก สิ่งนี้มีประโยชน์สำหรับคอมโพเนนต์ที่ควบคุม แต่ในกรณีส่วนใหญ่ `v-model` เป็นที่ต้องการ
:::

## สถานะปิดใช้งาน

ใช้ prop `disabled` เพื่อแสดงช่องทำเครื่องหมายที่ไม่สามารถโต้ตอบได้ ช่องทำเครื่องหมายที่ปิดใช้งานจะแตกต่างกันในภาพและมีสไตล์ `cursor-not-allowed` ใช้อยู่

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-checkbox v-model="checkboxModels.checkboxDisabled" label="ปิดใช้งานทำเครื่องหมายแล้ว" disabled />
</div>

```vue
<template>
  <spr-checkbox v-model="checkboxDisabled" label="ปิดใช้งานทำเครื่องหมายแล้ว" disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

const checkboxDisabled = ref(true);
</script>
```

## สถานะไม่แน่นอน

สถานะไม่แน่นอนแสดงด้วยเครื่องหมายลบ (−) แทนเครื่องหมายถูก สถานะนี้มีประโยชน์สำหรับการแสดงสถานะ "ทำเครื่องหมายบางส่วน" โดยปกติใช้ในโครงสร้างช่องทำเครื่องหมายแบบลำดับชั้นที่รายการย่อยมีสถานะการเลือกผสมกัน

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-checkbox
    v-model="checkboxModels.checkboxIndeterminate"
    label="ตัวเลือกหลัก (เลือกเด็กบางคนแล้ว)"
    indeterminate
  />
</div>

```vue
<template>
  <spr-checkbox v-model="checkboxIndeterminate" label="ตัวเลือกหลัก (เลือกเด็กบางคนแล้ว)" indeterminate />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

const checkboxIndeterminate = ref(true);
</script>
```

::: tip
ในโครงสร้างช่องทำเครื่องหมายหลัก-ย่อย คุณสามารถตั้งค่าสถานะไม่แน่นอนบนหลักโดยทางโปรแกรมเมื่อเลือกเด็กบางคน (แต่ไม่ใช่ทั้งหมด):

```js
// ตัวอย่างตรรกะสำหรับการจัดการสถานะไม่แน่นอน
const childOptions = ref([
  { id: 1, checked: true },
  { id: 2, checked: false },
  { id: 3, checked: true },
]);

const parentOption = computed(() => {
  const checkedCount = childOptions.value.filter((opt) => opt.checked).length;

  return {
    checked: checkedCount > 0,
    indeterminate: checkedCount > 0 && checkedCount < childOptions.value.length,
  };
});
```

:::

## ช่องทำเครื่องหมายที่มีเส้นขอบ

ใช้ prop `bordered` เพื่อเพิ่มเส้นขอบรอบคอมโพเนนต์ช่องทำเครื่องหมายทั้งหมด รวมถึงป้ายกำกับและคำอธิบาย สิ่งนี้ช่วยสร้างการแยกภาพระหว่างตัวเลือกช่องทำเครื่องหมาย

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-checkbox
    v-model="checkboxModels.checkboxBordered"
    label="ช่องทำเครื่องหมายที่มีเส้นขอบ"
    description="ช่องทำเครื่องหมายนี้มีเส้นขอบรอบมัน"
    bordered
  />
</div>

```vue
<template>
  <spr-checkbox
    v-model="checkboxBordered"
    label="ช่องทำเครื่องหมายที่มีเส้นขอบ"
    description="ช่องทำเครื่องหมายนี้มีเส้นขอบรอบมัน"
    bordered
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

const checkboxBordered = ref(true);
</script>
```

## ช่องทำเครื่องหมายเต็มความกว้าง

โดยค่าเริ่มต้น ช่องทำเครื่องหมายใช้ความกว้างเพียงเท่าที่จำเป็นสำหรับเนื้อหาของมัน ใช้ prop `fullWidth` เพื่อทำให้ช่องทำเครื่องหมายยืดเพื่อเติมความกว้างทั้งหมดของคอนเทนเนอร์

<div class="spr-flex spr-flex-col spr-gap-2 spr-border spr-border-dashed spr-border-gray-300 spr-p-4">
  <spr-checkbox
    v-model="checkboxModels.checkboxFullWidth"
    label="ช่องทำเครื่องหมายเต็มความกว้าง"
    description="ช่องทำเครื่องหมายนี้ใช้ความกว้างเต็มของคอนเทนเนอร์"
    bordered
    full-width
  />
</div>

```vue
<template>
  <spr-checkbox
    v-model="checkboxFullWidth"
    label="ช่องทำเครื่องหมายเต็มความกว้าง"
    description="ช่องทำเครื่องหมายนี้ใช้ความกว้างเต็มของคอนเทนเนอร์"
    bordered
    full-width
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

const checkboxFullWidth = ref(true);
</script>
```

::: tip
Prop `full-width` มีประโยชน์เป็นพิเศษเมื่อ:

- วางช่องทำเครื่องหมายในกริดหรือเลย์เอาต์ flex
- สร้างความกว้างที่สม่ำเสมอสำหรับการควบคุมแบบฟอร์มหลายรายการ
- สร้างแบบฟอร์มที่ตอบสนองซึ่งปรับให้เข้ากับขนาดหน้าจอที่แตกต่างกัน

:::

## กลุ่มช่องทำเครื่องหมาย

แม้ว่าระบบการออกแบบ Sprout จะไม่มีคอมโพเนนต์กลุ่มช่องทำเครื่องหมายเฉพาะ คุณสามารถสร้างกลุ่มช่องทำเครื่องหมายของคุณเองได้ง่ายโดยการจัดการคอลเลกชันของช่องทำเครื่องหมายที่เกี่ยวข้อง:

<div class="spr-p-4 spr-border spr-border-solid spr-border-gray-200 spr-rounded">
  <div class="spr-mb-2 spr-font-medium">เลือกผลไม้ที่คุณชอบ:</div>
  <div class="spr-flex spr-flex-col spr-gap-2">
    <spr-checkbox
      v-model="fruits.apple"
      label="แอปเปิ้ล"
    />
    <spr-checkbox
      v-model="fruits.banana"
      label="กล้วย"
    />
    <spr-checkbox
      v-model="fruits.orange"
      label="ส้ม"
    />
    <spr-checkbox
      v-model="fruits.strawberry"
      label="สตรอเบอร์รี่"
    />
  </div>
  <div class="spr-mt-3 spr-text-sm">
    เลือกแล้ว: {{ Object.keys(fruits).filter(key => fruits[key]).join(', ') || 'ไม่มี' }}
  </div>
</div>

```vue
<template>
  <div class="checkbox-group">
    <div class="group-label">เลือกผลไม้ที่คุณชอบ:</div>
    <spr-checkbox v-model="fruits.apple" label="แอปเปิ้ล" />
    <spr-checkbox v-model="fruits.banana" label="กล้วย" />
    <spr-checkbox v-model="fruits.orange" label="ส้ม" />
    <spr-checkbox v-model="fruits.strawberry" label="สตรอเบอร์รี่" />

    <div class="selected-summary">
      เลือกแล้ว:
      {{
        Object.keys(fruits)
          .filter((key) => fruits[key])
          .join(', ') || 'ไม่มี'
      }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

const fruits = reactive({
  apple: false,
  banana: false,
  orange: false,
  strawberry: false,
});
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
      <td>modelValue</td>
      <td>สถานะปัจจุบันของช่องทำเครื่องหมาย (ทำเครื่องหมายแล้วหรือไม่ทำเครื่องหมาย) ใช้กับ v-model สำหรับการผูกสองทาง</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>label</td>
      <td>ข้อความป้ายกำกับที่แสดงข้างช่องทำเครื่องหมาย ให้บริบทเกี่ยวกับสิ่งที่ช่องทำเครื่องหมายแสดงถึง</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>description</td>
      <td>ข้อความอธิบายเพิ่มเติมที่แสดงใต้ป้ายกำกับเพื่อให้บริบทหรือรายละเอียดเพิ่มเติมเกี่ยวกับตัวเลือกช่องทำเครื่องหมาย</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> ช่องทำเครื่องหมายจะไม่สามารถโต้ตอบได้และปรากฏปิดใช้งานภาพ ผู้ใช้ไม่สามารถคลิกหรือโต้ตอบกับช่องทำเครื่องหมายที่ปิดใช้งานได้</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>checked</td>
      <td>ควบคุมสถานะทำเครื่องหมายแล้วของช่องทำเครื่องหมายโดยตรง สิ่งนี้สามารถใช้เป็นทางเลือกแทน v-model เมื่อต้องการการผูกทางเดียว</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>indeterminate</td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> ช่องทำเครื่องหมายจะแสดงในสถานะไม่แน่นอน (แสดงด้วยเครื่องหมายลบ) สิ่งนี้มีประโยชน์สำหรับช่องทำเครื่องหมายหลักที่แสดงถึงกลุ่มที่มีสถานะการเลือกผสมกัน</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>bordered</td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> จะเพิ่มเส้นขอบรอบคอมโพเนนต์ช่องทำเครื่องหมายทั้งหมด (รวมถึงป้ายกำกับ) ให้การแยกภาพจากองค์ประกอบรอบข้าง</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>full-width</td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> คอมโพเนนต์ช่องทำเครื่องหมายจะยืดเพื่อเติมความกว้างเต็มของคอนเทนเนอร์ เมื่อ <code>false</code> จะกว้างเพียงเท่ากับเนื้อหา</td>
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
      <td>update:modelValue</td>
      <td>ถูกปล่อยออกมาหากสถานะช่องทำเครื่องหมายเปลี่ยนแปลง (ทำเครื่องหมายแล้วหรือไม่ทำเครื่องหมาย) เหตุการณ์นี้ใช้สำหรับการผูก v-model ให้ทำงานได้อย่างถูกต้อง</td>
      <td>(value: boolean): สถานะใหม่ของช่องทำเครื่องหมายหลังการเปลี่ยนแปลง</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref, reactive } from "vue";

import SprCheckbox from "@/components/checkbox/checkbox.vue";

const checkboxModels = ref({
  checkboxBasic: false,
  checkboxDescription: false,
  checkboxChecked: true,
  checkboxDisabled: false,
  checkboxBordered: true,
  checkboxIndeterminate: true,
  checkboxFullWidth: true,
});

const fruits = reactive({
  apple: false,
  banana: false,
  orange: false,
  strawberry: false
});
</script>
