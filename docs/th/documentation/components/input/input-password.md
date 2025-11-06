---
title: ช่องป้อนรหัสผ่าน
descripttion: ช่องป้อนรหัสผ่านที่มีการเปิดเผยทางเลือก (หากใช้ในคอมโพเนนต์) และการมาสก์ดั้งเดิม
outline: deep
---

# ช่องป้อนรหัสผ่าน

ช่องป้อนรหัสผ่านที่มีการเปิดเผยทางเลือก (หากใช้ในคอมโพเนนต์) และการมาสก์ดั้งเดิม

## การใช้งานพื้นฐาน

<spr-input-password v-model="inputModels.basic" label="รหัสผ่าน" placeholder="ป้อนรหัสผ่าน" />

```vue
<template>
  <spr-input-password v-model="inputModel" label="รหัสผ่าน" placeholder="ป้อนรหัสผ่าน" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะใช้งานอยู่

<spr-input-password v-model="inputModels.activeState" label="รหัสผ่าน" placeholder="ป้อนรหัสผ่าน" active />

```vue
<template>
  <spr-input-password v-model="inputModel" label="รหัสผ่าน" placeholder="ป้อนรหัสผ่าน" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะข้อผิดพลาด

<spr-input-password v-model="inputModels.errorState" label="รหัสผ่าน" placeholder="ป้อนรหัสผ่าน" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-password>

```vue
<template>
  <spr-input-password v-model="inputModel" label="รหัสผ่าน" placeholder="ป้อนรหัสผ่าน" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-password>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะปิดใช้งาน

<spr-input-password v-model="inputModels.disabledState" label="รหัสผ่าน" placeholder="ป้อนรหัสผ่าน" :disabled="true" />

```vue
<template>
  <spr-input-password v-model="inputModel" label="รหัสผ่าน" placeholder="ป้อนรหัสผ่าน" :disabled="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## การอ้างอิง API

ช่องป้อนชื่อผู้ใช้นี้ใช้พร็อพส์ อีเวนต์ สล็อต และพฤติกรรมการตรวจสอบเดียวกันกับคอมโพเนนต์ **Input** ฐาน โปรดดูเอกสาร API ฉบับเต็มที่นี่:

<a href="/documentation/components/input/input.html#api-reference">การอ้างอิง API คอมโพเนนต์ Input</a>

เฉพาะเจตนาด้านภาพ (บริบทรหัสผ่าน) เท่านั้นที่แตกต่าง ไม่มีการเพิ่มพร็อพส์หรืออีเวนต์เฉพาะในขณะนี้

<script setup lang="ts">
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprInputPassword from '@/components/input/input-password/input-password.vue';

const inputModels = ref({
  basic: '',
  activeState: '',
  errorState: '',
  disabledState: '',
});
</script>
