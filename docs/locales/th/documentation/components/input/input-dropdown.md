---
title: ช่องป้อนดรอปดาวน์
descripttion: คอมโพเนนต์ช่องป้อนดรอปดาวน์เป็นตัวแปรช่องป้อนที่จัดสไตล์ใช้เป็นทริกเกอร์/แสดงในคอมโพเนนต์แบบดรอปดาวน์ รองรับสถานะต่างๆ เช่น ใช้งานอยู่ ข้อผิดพลาด และปิดใช้งาน
outline: deep
---

# ช่องป้อนดรอปดาวน์

ตัวแปรช่องป้อนที่จัดสไตล์ใช้เป็นทริกเกอร์/แสดงภายในคอมโพเนนต์แบบดรอปดาวน์

## การใช้งานพื้นฐาน

<div>
  <spr-input-dropdown
    id="input-dropdown-basic"
    v-model="inputModels.basic"
    label="ช่องป้อนดรอปดาวน์"
    placeholder="เลือกไอเทม ..."
    readonly
  />
</div>

```vue
<template>
  <spr-input-dropdown
    id="input-dropdown-basic"
    v-model="inputModel"
    label="ช่องป้อนดรอปดาวน์"
    placeholder="เลือกไอเทม ..."
    readonly
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะใช้งานอยู่

<div>
  <spr-input-dropdown
    id="input-dropdown-active-state"
    v-model="inputModels.activeState"
    label="ช่องป้อนดรอปดาวน์"
    placeholder="เลือกไอเทม ..."
    active
    readonly
  />
</div>

```vue
<template>
  <spr-input-dropdown
    id="input-dropdown-active-state"
    v-model="inputModel"
    label="ช่องป้อนดรอปดาวน์"
    placeholder="เลือกไอเทม ..."
    active
    readonly
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะข้อผิดพลาด

<div>
  <spr-input-dropdown
    id="input-dropdown-error-state"
    v-model="inputModels.errorState"
    label="ช่องป้อนดรอปดาวน์"
    placeholder="เลือกไอเทม ..."
    error
    readonly
  >
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-dropdown>
</div>

## การอ้างอิง API

ช่องป้อนชื่อผู้ใช้นี้ใช้พร็อพส์ อีเวนต์ สล็อต และพฤติกรรมการตรวจสอบเดียวกันกับคอมโพเนนต์ **Input** ฐาน โปรดดูเอกสาร API ฉบับเต็มที่นี่:

<a href="/documentation/components/input/input.html#api-reference">การอ้างอิง API คอมโพเนนต์ Input</a>

เฉพาะเจตนาด้านภาพ (บริบทดรอปดาวน์) เท่านั้นที่แตกต่าง ไม่มีการเพิ่มพร็อพส์หรืออีเวนต์เฉพาะในขณะนี้

```vue
<template>
  <spr-input-dropdown
    id="input-dropdown-error-state"
    v-model="inputModel"
    label="ช่องป้อนดรอปดาวน์"
    placeholder="เลือกไอเทม ..."
    error
    readonly
  >
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะปิดใช้งาน

<div>
  <spr-input-dropdown
    id="input-dropdown-disabled-state"
    v-model="inputModels.disabledState"
    label="ช่องป้อนดรอปดาวน์"
    placeholder="เลือกไอเทม ..."
    disabled
  />
</div>

```vue
<template>
  <spr-input-dropdown
    id="input-dropdown-disabled-state"
    v-model="inputModel"
    label="ช่องป้อนดรอปดาวน์"
    placeholder="เลือกไอเทม ..."
    disabled
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

<script setup lang="ts">
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprInputDropdown from '@/components/input/input-dropdown/input-dropdown.vue';

const inputModels = ref({
  basic: '',
  activeState: '',
  errorState: '',
  disabledState: '',
});
</script>
