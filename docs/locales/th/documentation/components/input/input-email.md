---
title: ช่องป้อนอีเมล
descripttion: ช่องป้อนอีเมลที่มีรูปแบบการตรวจสอบดั้งเดิมของเบราว์เซอร์
outline: deep
---

# ช่องป้อนอีเมล

ช่องป้อนอีเมลที่มีรูปแบบการตรวจสอบดั้งเดิมของเบราว์เซอร์

## การใช้งานพื้นฐาน

<spr-input-email v-model="inputModels.basic" label="อีเมล" placeholder="ป้อนอีเมล" />

```vue
<template>
  <spr-input-email v-model="inputModel" label="อีเมล" placeholder="ป้อนอีเมล" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะใช้งานอยู่

<spr-input-email v-model="inputModels.activeState" label="อีเมล" placeholder="ป้อนอีเมล" active />

```vue
<template>
  <spr-input-email v-model="inputModel" label="อีเมล" placeholder="ป้อนอีเมล" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะข้อผิดพลาด

<spr-input-email v-model="inputModels.errorState" label="อีเมล" placeholder="ป้อนอีเมล" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-email>

```vue
<template>
  <spr-input-email v-model="inputModel" label="อีเมล" placeholder="ป้อนอีเมล" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-email>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะปิดใช้งาน

<spr-input-email v-model="inputModels.disabledState" label="อีเมล" placeholder="ป้อนอีเมล" :disabled="true" />

```vue
<template>
  <spr-input-email v-model="inputModel" label="อีเมล" placeholder="ป้อนอีเมล" :disabled="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## การอ้างอิง API

ช่องป้อนชื่อผู้ใช้นี้ใช้พร็อพส์ อีเวนต์ สล็อต และพฤติกรรมการตรวจสอบเดียวกันกับคอมโพเนนต์ **Input** ฐาน โปรดดูเอกสาร API ฉบับเต็มที่นี่:

<a href="/documentation/components/input/input.html#api-reference">การอ้างอิง API คอมโพเนนต์ Input</a>

เฉพาะเจตนาด้านภาพ (บริบทอีเมล) เท่านั้นที่แตกต่าง ไม่มีการเพิ่มพร็อพส์หรืออีเวนต์เฉพาะในขณะนี้

<script setup lang="ts">
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprInputEmail from '@/components/input/input-email/input-email.vue';

const inputModels = ref({
  basic: '',
  activeState: '',
  errorState: '',
  disabledState: '',
});
</script>
