---
title: ช่องป้อนชื่อผู้ใช้
descripttion: ช่องป้อนชื่อผู้ใช้เฉพาะที่มีกฎการตรวจสอบที่อาจมีในอนาคต
outline: deep
---

# ช่องป้อนชื่อผู้ใช้

ช่องป้อนชื่อผู้ใช้เฉพาะที่มีกฎการตรวจสอบที่อาจมีในอนาคต

## การใช้งานพื้นฐาน

<spr-input-username v-model="inputModels.basic" label="ชื่อผู้ใช้" placeholder="ป้อนชื่อผู้ใช้" />

```vue
<template>
  <spr-input-username v-model="inputModel" label="ชื่อผู้ใช้" placeholder="ป้อนชื่อผู้ใช้" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะใช้งานอยู่

<spr-input-username v-model="inputModels.activeState" label="ชื่อผู้ใช้" placeholder="ป้อนชื่อผู้ใช้" active />

```vue
<template>
  <spr-input-username v-model="inputModel" label="ชื่อผู้ใช้" placeholder="ป้อนชื่อผู้ใช้" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะข้อผิดพลาด

<spr-input-username v-model="inputModels.errorState" label="ชื่อผู้ใช้" placeholder="ป้อนชื่อผู้ใช้" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-username>

```vue
<template>
  <spr-input-username v-model="inputModel" label="ชื่อผู้ใช้" placeholder="ป้อนชื่อผู้ใช้" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-username>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะปิดใช้งาน

<spr-input-username v-model="inputModels.disabledState" label="ชื่อผู้ใช้" placeholder="ป้อนชื่อผู้ใช้" :disabled="true" />

```vue
<template>
  <spr-input-username v-model="inputModel" label="ชื่อผู้ใช้" placeholder="ป้อนชื่อผู้ใช้" :disabled="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## การอ้างอิง API

ช่องป้อนชื่อผู้ใช้นี้ใช้พร็อพส์ อีเวนต์ สล็อต และพฤติกรรมการตรวจสอบเดียวกันกับคอมโพเนนต์ **Input** ฐาน โปรดดูเอกสาร API ฉบับเต็มที่นี่:

<a href="/documentation/components/input/input.html#api-reference">การอ้างอิง API คอมโพเนนต์ Input</a>

เฉพาะเจตนาด้านภาพ (บริบทชื่อผู้ใช้) เท่านั้นที่แตกต่าง ไม่มีการเพิ่มพร็อพส์หรืออีเวนต์เฉพาะในขณะนี้

<script setup lang="ts">
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprInputUsername from '@/components/input/input-username/input-username.vue';

const inputModels = ref({
  basic: '',
  activeState: '',
  errorState: '',
  disabledState: '',
});
</script>
