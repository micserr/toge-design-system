---
title: ช่องป้อน URL
descripttion: ช่องป้อน URL ที่มีการตรวจสอบดั้งเดิมของเบราว์เซอร์สำหรับ URL ที่จัดรูปแบบอย่างถูกต้อง
outline: deep
---

# ช่องป้อน URL

ช่องป้อน URL ที่มีการตรวจสอบดั้งเดิมของเบราว์เซอร์สำหรับ URL ที่จัดรูปแบบอย่างถูกต้อง

## การใช้งานพื้นฐาน

<spr-input-url v-model="inputModels.basic" label="เว็บไซต์" placeholder="https://example.com" />

```vue
<template>
  <spr-input-url v-model="inputModel" label="เว็บไซต์" placeholder="https://example.com" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะใช้งานอยู่

<spr-input-url v-model="inputModels.activeState" label="เว็บไซต์" placeholder="https://example.com" active />

```vue
<template>
  <spr-input-url v-model="inputModel" label="เว็บไซต์" placeholder="https://example.com" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะข้อผิดพลาด

<spr-input-url v-model="inputModels.errorState" label="เว็บไซต์" placeholder="https://example.com" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-url>

```vue
<template>
  <spr-input-url v-model="inputModel" label="เว็บไซต์" placeholder="https://example.com" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-url>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะปิดใช้งาน

<spr-input-url v-model="inputModels.disabledState" label="เว็บไซต์" placeholder="https://example.com" :disabled="true" />

## การอ้างอิง API

ช่องป้อนชื่อผู้ใช้นี้ใช้พร็อพส์ อีเวนต์ สล็อต และพฤติกรรมการตรวจสอบเดียวกันกับคอมโพเนนต์ **Input** ฐาน โปรดดูเอกสาร API ฉบับเต็มที่นี่:

<a href="/documentation/components/input/input.html#api-reference">การอ้างอิง API คอมโพเนนต์ Input</a>

เฉพาะเจตนาด้านภาพ (บริบท URL) เท่านั้นที่แตกต่าง ไม่มีการเพิ่มพร็อพส์หรืออีเวนต์เฉพาะในขณะนี้

```vue
<template>
  <spr-input-url v-model="inputModel" label="เว็บไซต์" placeholder="https://example.com" :disabled="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

<script setup lang="ts">
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprInputUrl from '@/components/input/input-url/input-url.vue';

const inputModels = ref({
  basic: '',
  activeState: '',
  errorState: '',
  disabledState: '',
});
</script>
