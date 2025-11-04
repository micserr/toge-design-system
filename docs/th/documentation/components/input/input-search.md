---
title: ช่องป้อนการค้นหา
descripttion: ช่องป้อนการค้นหาที่ปรับให้เหมาะสมสำหรับการกรองรายการหรือการเรียกใช้การค้นหา
outline: deep
---

# ช่องป้อนการค้นหา

ช่องป้อนการค้นหาที่ปรับให้เหมาะสมสำหรับการกรองรายการหรือการเรียกใช้การค้นหา

## การใช้งานพื้นฐาน

<spr-input-search v-model="inputModels.basic" label="ค้นหา" placeholder="ค้นหา..." />

```vue
<template>
  <spr-input-search v-model="inputModel" label="ค้นหา" placeholder="ค้นหา..." />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะใช้งานอยู่

<spr-input-search v-model="inputModels.activeState" label="ค้นหา" placeholder="ค้นหา..." active />

```vue
<template>
  <spr-input-search v-model="inputModel" label="ค้นหา" placeholder="ค้นหา..." active />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะข้อผิดพลาด

<spr-input-search v-model="inputModels.errorState" label="ค้นหา" placeholder="ค้นหา..." :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-search>

```vue
<template>
  <spr-input-search v-model="inputModel" label="ค้นหา" placeholder="ค้นหา..." :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-search>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะปิดใช้งาน

<spr-input-search v-model="inputModels.disabledState" label="ค้นหา" placeholder="ค้นหา..." :disabled="true" />

```vue
<template>
  <spr-input-search v-model="inputModel" label="ค้นหา" placeholder="ค้นหา..." :disabled="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## การอ้างอิง API

ช่องป้อนชื่อผู้ใช้นี้ใช้พร็อพส์ อีเวนต์ สล็อต และพฤติกรรมการตรวจสอบเดียวกันกับคอมโพเนนต์ **Input** ฐาน โปรดดูเอกสาร API ฉบับเต็มที่นี่:

<a href="/documentation/components/input/input.html#api-reference">การอ้างอิง API คอมโพเนนต์ Input</a>

เฉพาะเจตนาด้านภาพ (บริบทการค้นหา) เท่านั้นที่แตกต่าง ไม่มีการเพิ่มพร็อพส์หรืออีเวนต์เฉพาะในขณะนี้

<script setup lang="ts">
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprInputSearch from '@/components/input/input-search/input-search.vue';

const inputModels = ref({
  basic: '',
  activeState: '',
  errorState: '',
  disabledState: '',
});
</script>
