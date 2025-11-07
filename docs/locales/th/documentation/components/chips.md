---
title: ชิปส์
descripttion: คอมโพเนนต์ชิปส์ให้องค์ประกอบแบบโต้ตอบสำหรับการกรอง การเลือก การติดแท็ก และการแสดงข้อมูลขนาดเล็ก ชิปส์สามารถรวมข้อความ ไอคอน อวตาร และป้าย และรองรับสถานะต่างๆ เช่น ใช้งานอยู่ ปิดใช้งาน และปิดได้ พวกมันเป็นองค์ประกอบ UI ที่หลากหลายเหมาะสำหรับแอปพลิเคชันที่หลากหลาย
outline: deep
---

# ชิปส์ คอมโพเนนต์

คอมโพเนนต์ `spr-chips` ให้องค์ประกอบแบบโต้ตอบสำหรับการกรอง การเลือก การติดแท็ก และการแสดงข้อมูลขนาดเล็ก ชิปส์เป็นองค์ประกอบ UI ที่กระชับและหลากหลายที่สามารถรวมข้อความ ไอคอน อวตาร และป้าย

## ภาพรวม

ชิปส์ในระบบการออกแบบ Sprout นำเสนอ:

- สถานะแบบโต้ตอบ (ใช้งานอยู่ ปิดใช้งาน ปิดได้)
- รองรับไอคอน อวตาร และป้าย
- วาเรียนต์พิเศษสำหรับการเลือกวัน
- ลักษณะที่ปรับแต่งได้ด้วยพร็อพส์ต่างๆ

## การใช้งานพื้นฐาน

ที่พื้นฐานที่สุด ชิปส์จะแสดงป้ายข้อความ ชิปส์สามารถอยู่ในสถานะใช้งานอยู่หรือไม่ใช้งาน โดยควบคุมผ่านพร็อพส์ `active`

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips label="ชิปส์พื้นฐาน" />
  <spr-chips label="ชิปส์ใช้งานอยู่" :active="true" />
</div>

```vue
<template>
  <!-- ชิปส์ไม่ใช้งานเริ่มต้น -->
  <spr-chips label="ชิปส์พื้นฐาน" />

  <!-- ชิปส์ใช้งานอยู่ -->
  <spr-chips label="ชิปส์ใช้งานอยู่" :active="true" />
</template>

<script lang="ts" setup>
import SprChips from '@/components/chips/chips.vue';
</script>
```

ชิปส์สามารถใช้ได้ในหลายวัตถุประสงค์:

- เป็นตัวเลือกตัวกรองในอินเทอร์เฟซการค้นหา
- สำหรับเลือกหมวดหมู่หรือแท็ก
- เพื่อแสดงตัวกรองที่ใช้แล้วที่สามารถลบได้
- เป็นตัวเลือกแบบสลับได้

## ขนาด

ชิปส์มีขนาดต่างๆ เพื่อรองรับความต้องการการออกแบบที่แตกต่างกัน ขนาดที่มีคือ:

- `sm` - ขนาดเล็กสำหรับการแสดงที่กระชับ
- `md` - ขนาดกลาง (ค่าเริ่มต้น)

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips label="ชิปส์ขนาดเล็ก" size="sm" />
  <spr-chips label="ชิปส์ขนาดกลาง" />
</div>

```vue
<template>
  <spr-chips label="ชิปส์ขนาดเล็ก" size="sm" />
  <spr-chips label="ชิปส์ขนาดกลาง" />
</template>

<script lang="ts" setup>
import SprChips from '@/components/chips/chips.vue';
</script>
```

## โทนสี

ชิปส์มีโทนสีต่างๆ เพื่อสื่อถึงความหมายที่แตกต่างกัน โทนสีที่มีคือ:

- `subtle` - โทนสีที่ละเอียดเพื่อเน้นน้อยกว่า
- `default` - โทนสีมาตรฐานสำหรับการใช้งานทั่วไป

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips label="ชิปส์โทนละเอียด" tone="subtle" />
  <spr-chips label="ชิปส์โทนเริ่มต้น" />
</div>

```vue
<template>
  <spr-chips label="ชิปส์โทนละเอียด" tone="subtle" />
  <spr-chips label="ชิปส์โทนเริ่มต้น" />
</template>

<script lang="ts" setup>
import SprChips from '@/components/chips/chips.vue';
</script>
```

## ชิปส์ที่มีไอคอน

ไอคอนสามารถเพิ่มความหมายภาพให้กับชิปส์และทำให้จดจำได้ง่ายขึ้น พร็อพส์ `icon` ยอมรับชื่อไอคอน Iconify และพร็อพส์ `icon-weight` ช่วยให้คุณควบคุมสไตล์ของไอคอน

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips :active="activeIcon.isIconActive1" label="ไอคอนปกติ" icon="ph:airplane-landing" @update="(e) => handleUpdate('isIconActive1', e)"/>
  <spr-chips :active="activeIcon.isIconActive2" label="ไอคอนหนา" icon="ph:airplane-landing" icon-weight="bold" @update="(e) => handleUpdate('isIconActive2', e)" />
  <spr-chips :active="activeIcon.isIconActive3" label="ไอคอนเต็ม" icon="ph:airplane-landing" icon-weight="fill" @update="(e) => handleUpdate('isIconActive3', e)" />
</div>

```vue
<template>
  <!-- น้ำหนักไอคอนปกติ -->
  <spr-chips
    :active="activeChips.flight"
    label="ไอคอนปกติ"
    icon="ph:airplane-landing"
    @update="(value) => updateChip('flight', value)"
  />

  <!-- น้ำหนักไอคอนหนา -->
  <spr-chips
    :active="activeChips.flightBold"
    label="ไอคอนหนา"
    icon="ph:airplane-landing"
    icon-weight="bold"
    @update="(value) => updateChip('flightBold', value)"
  />

  <!-- น้ำหนักไอคอนเต็ม -->
  <spr-chips
    :active="activeChips.flightFill"
    label="ไอคอนเต็ม"
    icon="ph:airplane-landing"
    icon-weight="fill"
    @update="(value) => updateChip('flightFill', value)"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SprChips from '@/components/chips/chips.vue';

const activeChips = ref({
  flight: false,
  flightBold: false,
  flightFill: false,
});

const updateChip = (key, value) => {
  activeChips.value[key] = value;
  console.log(`ชิปส์ ${key} ใช้งานอยู่ ${value ? 'ใช่' : 'ไม่ใช่'}`);
};
</script>
```

### น้ำหนักไอคอนที่มี

คอมโพเนนต์รองรับน้ำหนักไอคอนหลายแบบเพื่อให้ตรงกับความต้องการการออกแบบของคุณ:

- `regular` (ค่าเริ่มต้น) - น้ำหนักไอคอนมาตรฐาน
- `bold` - น้ำหนักหนักขึ้นเพื่อเน้น
- `fill` - รูปแบบเต็มสี
- `thin` - น้ำหนักบาง
- `light` - น้ำหนักบางกว่าปกติเล็กน้อย
- `duotone` - รูปแบบสองสี

## ชิปส์ที่มีอวตาร

ชิปส์สามารถรวมอวตารเพื่อแสดงถึงผู้ใช้ ลูกค้า หรือเอนทิตีใดๆ ชิปส์ใช้คอมโพเนนต์ `spr-avatar` ภายใน โดยรองรับวาเรียนต์อวตารต่างๆ

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips
    label="รูปภาพผู้ใช้"
    :avatar-url="'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'"
    :avatar-variant="'image'"
  />
  <spr-chips
    label="ไอคอนลูกค้า"
    :avatar-variant="'client'"
  />
  <spr-chips
    label="ไอคอนผู้ใช้"
    :avatar-variant="'user'"
  />
</div>

```vue
<template>
  <!-- ชิปส์ที่มีอวตารรูปภาพ -->
  <spr-chips
    label="รูปภาพผู้ใช้"
    :avatar-url="'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'"
    :avatar-variant="'image'"
  />

  <!-- ชิปส์ที่มีไอคอนอวตารลูกค้า -->
  <spr-chips label="ไอคอนลูกค้า" :avatar-variant="'client'" />

  <!-- ชิปส์ที่มีไอคอนอวตารผู้ใช้ -->
  <spr-chips label="ไอคอนผู้ใช้" :avatar-variant="'user'" />
</template>

<script lang="ts" setup>
import SprChips from '@/components/chips/chips.vue';
</script>
```

คุณยังสามารถใช้พร็อพส์ `avatar-initials` เพื่อแสดงอักษรย่อแทนรูปภาพ:

```vue
<spr-chips label="John Doe" :avatar-variant="'text'" avatar-initials="JD" />
```

## ชิปส์ที่มีป้าย

ป้ายสามารถเพิ่มลงในชิปส์เพื่อแสดงจำนวน สถานะ หรือข้อมูลขนาดเล็กอื่นๆ ตั้งพร็อพส์ `badge` เป็น `true` และใช้ `badge-text` และ `badge-variant` เพื่อปรับแต่งป้าย

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips :active="activeIcon.isBadgeActive1" label="ป้ายแบรนด์" badge badge-text="1" badge-variant="brand" @update="(e) => handleUpdate('isBadgeActive1', e)"/>
  <spr-chips :active="activeIcon.isBadgeActive2" label="ป้ายอันตราย" badge badge-text="2" badge-variant="danger" @update="(e) => handleUpdate('isBadgeActive2', e)"/>
  <spr-chips :active="activeIcon.isBadgeActive3" label="ป้ายปิดใช้งาน" badge badge-text="3" badge-variant="disabled" @update="(e) => handleUpdate('isBadgeActive3', e)"/>
</div>

```vue
<template>
  <!-- ชิปส์ที่มีวาเรียนต์ป้ายแบรนด์ -->
  <spr-chips
    :active="filterCounts.messages"
    label="ข้อความ"
    badge
    badge-text="1"
    badge-variant="brand"
    @update="(value) => updateFilter('messages', value)"
  />

  <!-- ชิปส์ที่มีวาเรียนต์ป้ายอันตราย -->
  <spr-chips
    :active="filterCounts.alerts"
    label="การแจ้งเตือน"
    badge
    badge-text="2"
    badge-variant="danger"
    @update="(value) => updateFilter('alerts', value)"
  />

  <!-- ชิปส์ที่มีวาเรียนต์ป้ายปิดใช้งาน -->
  <spr-chips
    :active="filterCounts.tasks"
    label="งาน"
    badge
    badge-text="3"
    badge-variant="disabled"
    @update="(value) => updateFilter('tasks', value)"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SprChips from '@/components/chips/chips.vue';

const filterCounts = ref({
  messages: true,
  alerts: true,
  tasks: true,
});

const updateFilter = (key, value) => {
  filterCounts.value[key] = value;
  console.log(`ตัวกรอง ${key} ใช้งานอยู่ ${value ? 'ใช่' : 'ไม่ใช่'}`);
};
</script>
```

### วาเรียนต์ป้าย

ป้ายในชิปส์รองรับวาเรียนต์เหล่านี้:

- `brand`: ใช้สีแบรนด์หลัก
- `danger`: สีแดงสำหรับข้อผิดพลาดหรือการแจ้งเตือน
- `disabled`: สีเทาสำหรับรายการที่ไม่พร้อมใช้งานหรือไม่ได้ใช้งาน

## สถานะแบบโต้ตอบ

ชิปส์สามารถมีสถานะแบบโต้ตอบต่างๆ เพื่อให้ประสบการณ์ผู้ใช้ที่สมบูรณ์

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips :active="activeIcon.isToggleActive5" label="สลับได้" @update="(e) => handleUpdate('isToggleActive5', e)"/>
  <spr-chips :active="activeIcon.isToggleActive6" label="ปิดได้" closable @close="handleClose" :visible="visible" @update="(e) => handleUpdate('isToggleActive6', e)"/>
  <spr-chips disabled label="ปิดใช้งาน" />
</div>

```vue
<template>
  <!-- ชิปส์สลับได้ที่เปลี่ยนสถานะใช้งานเมื่อคลิก -->
  <spr-chips :active="chipStates.toggle" label="สลับได้" @update="(value) => updateChipState('toggle', value)" />

  <!-- ชิปส์ปิดได้ที่มีปุ่มปิด -->
  <spr-chips
    :active="chipStates.closable"
    label="ปิดได้"
    closable
    :visible="chipVisible"
    @close="handleChipClose"
    @update="(value) => updateChipState('closable', value)"
  />

  <!-- ชิปส์ปิดใช้งานที่ไม่สามารถโต้ตอบได้ -->
  <spr-chips disabled label="ปิดใช้งาน" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SprChips from '@/components/chips/chips.vue';

const chipStates = ref({
  toggle: true,
  closable: true,
});

const chipVisible = ref(true);

const updateChipState = (key, value) => {
  chipStates.value[key] = value;
  console.log(`ชิปส์ ${key} ใช้งานอยู่ ${value ? 'ใช่' : 'ไม่ใช่'}`);
};

const handleChipClose = () => {
  console.log('ปิดชิปส์แล้ว');
  chipVisible.value = false;
  // คุณอาจต้องการลบชิปส์ออกจากโครงสร้างข้อมูลของคุณที่นี่
};
</script>
```

### ประเภทการโต้ตอบ

1. **สลับได้**: ชิปส์ทั้งหมดสลับได้โดยค่าเริ่มต้น การคลิกจะสลับระหว่างใช้งานอยู่และไม่ใช้งาน
2. **ปิดได้**: การเพิ่มพร็อพส์ `closable` จะแสดงปุ่มปิดที่ปล่อยอีเวนต์ `close` เมื่อคลิก
3. **ปิดใช้งาน**: พร็อพส์ `disabled` จะแสดงชิปส์ในสถานะที่ไม่โต้ตอบได้ด้วยสไตล์ปิดใช้งาน

เมื่อชิปส์ถูกปิด คุณควรอัปเดตโครงสร้างข้อมูลของคุณตามนั้น พร็อพส์ `visible` ควบคุมว่าชิปส์แสดงผลหรือไม่

## ชิปส์เลือกวัน

คอมโพเนนต์ชิปส์รวมวาเรียนต์ `day` พิเศษที่ออกแบบมาโดยเฉพาะสำหรับอินเทอร์เฟซการเลือกวัน วาเรียนต์นี้แสดงตัวอักษรแรกของแต่ละวันและมีลักษณะทรงกลม

<div class="spr-flex spr-items-center spr-gap-1 spr-rounded-md spr-bg-white-50 spr-p-4">
  <spr-chips
    v-for="day in days"
    :key="day"
    :day="day"
    :active="activeDays[day]"
    @update="(value) => updateDayActive(day, value)"
    @click="handleDayClick(day)"
    variant="day"
  />
</div>

```vue
<template>
  <div class="spr-flex spr-items-center spr-gap-1">
    <spr-chips
      v-for="day in days"
      :key="day"
      :day="day"
      :active="activeDays[day]"
      @update="(value) => updateDayActive(day, value)"
      variant="day"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SprChips from '@/components/chips/chips.vue';

// อาร์เรย์ของทุกวันในสัปดาห์
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// ออบเจ็กต์แบบ reactive เพื่อติดตามสถานะใช้งานของแต่ละวัน
const activeDays = ref({
  Sunday: false,
  Monday: false,
  Tuesday: false,
  Wednesday: false,
  Thursday: false,
  Friday: false,
  Saturday: false,
});

// ฟังก์ชันอัปเดตเพื่อสลับสถานะวัน
const updateDayActive = (day, value) => {
  activeDays.value[day] = value;
  console.log(`วัน ${day} ใช้งานอยู่ ${value ? 'ใช่' : 'ไม่ใช่'}`);
};
</script>
```

### ตัวอย่างการใช้งาน

ชิปส์เลือกวันมีประโยชน์โดยเฉพาะสำหรับ:

- การเลือกกำหนดการที่เกิดซ้ำในแอปพลิเคชันปฏิทิน
- การตั้งค่าความพร้อมใช้งานหรือชั่วโมงธุรกิจ
- การกำหนดค่ากิจกรรมหรืองานที่เกิดซ้ำ

::: tip
สำหรับความต้องการการเลือกวันที่ที่ซับซ้อนมากขึ้น พิจารณารวมชิปส์วันกับคอมโพเนนต์ DatePicker
:::

## สล็อต

คอมโพเนนต์ชิปส์ให้สล็อตหลายตัวสำหรับปรับแต่งเนื้อหาและไอคอน

### สล็อตเริ่มต้น

สล็อตเริ่มต้นช่วยให้คุณปรับแต่งเนื้อหาชิปส์ได้อย่างสมบูรณ์ โดยแทนที่การแสดงป้ายมาตรฐาน

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips :active="true">
    <span class="spr-flex spr-items-center spr-gap-1">
      <Icon icon="ph:star-fill" class="spr-text-yellow-500" />
      <span>เนื้อหาปรับแต่ง</span>
    </span>
  </spr-chips>
  <spr-chips>
    <span class="spr-flex spr-items-center spr-gap-1">
      <span class="spr-w-2 spr-h-2 spr-bg-green-500 spr-rounded-full"></span>
      <span>สถานะ: ออนไลน์</span>
    </span>
  </spr-chips>
  <spr-chips>
    <span class="spr-flex spr-items-center spr-gap-1">
      <Icon icon="ph:building"/>
      <span>สถานะ: ออนไลน์</span>
      <Icon icon="ph:caret-down" />
    </span>
  </spr-chips>
</div>

```vue
<template>
  <!-- เนื้อหาปรับแต่งด้วยไอคอน -->
  <spr-chips :active="true">
    <span class="spr-flex spr-items-center spr-gap-1">
      <Icon icon="ph:star-fill" class="spr-text-yellow-500" />
      <span>เนื้อหาปรับแต่ง</span>
    </span>
  </spr-chips>

  <!-- ตัวบ่งชี้สถานะปรับแต่ง -->
  <spr-chips>
    <span class="spr-flex spr-items-center spr-gap-1">
      <span class="spr-h-2 spr-w-2 spr-rounded-full spr-bg-green-500"></span>
      <span>สถานะ: ออนไลน์</span>
    </span>
  </spr-chips>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import SprChips from '@/components/chips/chips.vue';
</script>
```

### สล็อตไอคอน

สล็อต `icon` ช่วยให้คุณปรับแต่งไอคอนที่แสดงในชิปส์ได้ ในขณะที่รักษาโครงสร้างป้ายมาตรฐาน

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips label="ไอคอนปรับแต่ง" icon="ph:heart" :active="true">
    <template #icon>
      <Icon icon="ph:heart-fill" class="spr-text-red-500 spr-font-size-300" />
    </template>
  </spr-chips>
  <spr-chips label="ไอคอนเคลื่อนไหว" icon="ph:sparkle">
    <template #icon>
      <Icon icon="ph:sparkle" class="spr-text-purple-500 spr-font-size-300 spr-animate-spin" />
    </template>
  </spr-chips>
</div>

```vue
<template>
  <!-- ไอคอนหัวใจปรับแต่ง -->
  <spr-chips label="ไอคอนปรับแต่ง" icon="ph:heart" :active="true">
    <template #icon>
      <Icon icon="ph:heart-fill" class="spr-font-size-300 spr-text-red-500" />
    </template>
  </spr-chips>

  <!-- ไอคอนเคลื่อนไหว -->
  <spr-chips label="ไอคอนเคลื่อนไหว" icon="ph:sparkle">
    <template #icon>
      <Icon icon="ph:sparkle" class="spr-font-size-300 spr-animate-spin spr-text-purple-500" />
    </template>
  </spr-chips>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import SprChips from '@/components/chips/chips.vue';
</script>
```

### สล็อตไอคอนปิด

สล็อต `close-icon` ช่วยให้คุณปรับแต่งไอคอนปุ่มปิดสำหรับชิปส์ปิดได้

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips label="ปิดปรับแต่ง" closable :active="true">
    <template #close-icon>
      <Icon icon="ph:minus-circle" class="spr-text-red-500" />
    </template>
  </spr-chips>
  <spr-chips label="ปิดทางเลือก" closable>
    <template #close-icon>
      <Icon icon="ph:x-circle" class="spr-text-gray-500" />
    </template>
  </spr-chips>
</div>

```vue
<template>
  <!-- ไอคอนปิดปรับแต่ง -->
  <spr-chips label="ปิดปรับแต่ง" closable :active="true">
    <template #close-icon>
      <Icon icon="ph:minus-circle" class="spr-text-red-500" />
    </template>
  </spr-chips>

  <!-- ไอคอนปิดทางเลือก -->
  <spr-chips label="ปิดทางเลือก" closable>
    <template #close-icon>
      <Icon icon="ph:x-circle" class="spr-text-gray-500" />
    </template>
  </spr-chips>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import SprChips from '@/components/chips/chips.vue';
</script>
```

### การรวมสล็อตขั้นสูง

คุณสามารถรวมสล็อตหลายตัวเพื่อสร้างการออกแบบชิปส์ที่ซับซ้อน

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-chips :active="true">
    <span class="spr-flex spr-items-center spr-gap-2">
      <Icon icon="ph:user-circle" class="spr-text-blue-500" />
      <span>John Doe</span>
      <span class="spr-px-2 spr-py-1 spr-bg-blue-100 spr-text-blue-800 spr-text-xs spr-rounded-full">Admin</span>
    </span>
    <template #close-icon>
      <Icon icon="ph:user-minus" class="spr-text-red-500" />
    </template>
  </spr-chips>
  <spr-chips>
    <span class="spr-flex spr-items-center spr-gap-2">
      <span class="spr-w-3 spr-h-3 spr-bg-gradient-to-r spr-from-green-400 spr-to-blue-500 spr-rounded-full"></span>
      <span>Project Alpha</span>
      <span class="spr-px-2 spr-py-1 spr-bg-gray-100 spr-text-gray-600 spr-text-xs spr-rounded-full">Active</span>
    </span>
  </spr-chips>
</div>

```vue
<template>
  <!-- ชิปส์ผู้ใช้ที่มีปิดปรับแต่ง -->
  <spr-chips :active="true">
    <span class="spr-flex spr-items-center spr-gap-2">
      <Icon icon="ph:user-circle" class="spr-text-blue-500" />
      <span>John Doe</span>
      <span class="spr-rounded-full spr-bg-blue-100 spr-px-2 spr-py-1 spr-text-xs spr-text-blue-800">Admin</span>
    </span>
    <template #close-icon>
      <Icon icon="ph:user-minus" class="spr-text-red-500" />
    </template>
  </spr-chips>

  <!-- ชิปส์โปรเจ็กต์ที่มีตัวบ่งชี้ไล่ระดับสี -->
  <spr-chips>
    <span class="spr-flex spr-items-center spr-gap-2">
      <span class="spr-h-3 spr-w-3 spr-rounded-full spr-bg-gradient-to-r spr-from-green-400 spr-to-blue-500"></span>
      <span>Project Alpha</span>
      <span class="spr-rounded-full spr-bg-gray-100 spr-px-2 spr-py-1 spr-text-xs spr-text-gray-600">Active</span>
    </span>
  </spr-chips>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import SprChips from '@/components/chips/chips.vue';
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
      <td>label</td>
      <td>เนื้อหาข้อความที่แสดงในชิปส์</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>size</td>
      <td>ควบคุมขนาดของชิปส์</td>
      <td>'sm' | 'md' | 'lg'</td>
      <td>'md'</td>
    </tr>
    <tr>
      <td>tone</td>
      <td>ควบคุมโทนสีของชิปส์</td>
      <td>'subtle' | 'default'</td>
      <td>'default'</td>
    </tr>
    <tr>
      <td>active</td>
      <td>กำหนดว่าชิปส์อยู่ในสถานะใช้งานอยู่/เลือกหรือไม่</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>เมื่อเป็นจริง จะทำให้ชิปส์ไม่โต้ตอบได้และใช้สไตล์ปิดใช้งาน</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>เมื่อเป็นจริง จะแสดงปุ่มปิดที่ปล่อยอีเวนต์ปิดเมื่อคลิก</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>variant</td>
      <td>เปลี่ยนลักษณะและพฤติกรรมของชิปส์</td>
      <td>'tag' | 'day'</td>
      <td>'tag'</td>
    </tr>
    <tr>
      <td colspan="4"><b>พร็อพส์ไอคอน</b></td>
    </tr>
    <tr>
      <td>icon</td>
      <td>ชื่อไอคอน Iconify ที่จะแสดงก่อนป้าย</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>iconWeight</td>
      <td>น้ำหนักภาพ/สไตล์ของไอคอน</td>
      <td>'regular' | 'bold' | 'thin' | 'light' | 'fill' | 'duotone'</td>
      <td>'regular'</td>
    </tr>
    <tr>
      <td>closeIconSize</td>
      <td>ขนาดของไอคอนปิดเป็นพิกเซล (เมื่อ closable เป็นจริง)</td>
      <td>number</td>
      <td>16</td>
    </tr>
    <tr>
      <td colspan="4"><b>พร็อพส์อวตาร</b></td>
    </tr>
    <tr>
      <td>avatarUrl</td>
      <td>URL ของรูปภาพที่จะแสดงในอวตาร</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>avatarVariant</td>
      <td>ประเภทของอวตารที่จะแสดง</td>
      <td>'image' | 'text' | 'client' | 'user'</td>
      <td>''</td>
    </tr>
    <tr>
      <td>avatarInitials</td>
      <td>อักษรย่อข้อความที่จะแสดงเมื่อ avatarVariant เป็น 'text'</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td colspan="4"><b>พร็อพส์ป้าย</b></td>
    </tr>
    <tr>
      <td>badge</td>
      <td>เมื่อเป็นจริง จะแสดงป้ายบนชิปส์</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>badgeText</td>
      <td>เนื้อหาข้อความของป้าย (โดยปกติเป็นตัวเลข)</td>
      <td>string</td>
      <td>'0'</td>
    </tr>
    <tr>
      <td>badgeVariant</td>
      <td>สไตล์ภาพของป้าย</td>
      <td>'brand' | 'danger' | 'disabled'</td>
      <td>'brand'</td>
    </tr>
    <tr>
      <td colspan="4"><b>พร็อพส์อื่นๆ</b></td>
    </tr>
    <tr>
      <td>visible</td>
      <td>ควบคุมว่าชิปส์แสดงผลหรือไม่</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>day</td>
      <td>ชื่อวันสำหรับวาเรียนต์วัน (จำเป็นเมื่อ variant เป็น 'day')</td>
      <td>'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'</td>
      <td>-</td>
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
      <td>update</td>
      <td>ปล่อยเมื่อสถานะใช้งานของชิปส์เปลี่ยน โดยปกติเมื่อคลิก</td>
      <td>(value: boolean): สถานะใช้งานใหม่</td>
    </tr>
    <tr>
      <td>close</td>
      <td>ปล่อยเมื่อปุ่มปิดถูกคลิก (เมื่อ closable เป็นจริง)</td>
      <td>(event: MouseEvent | KeyboardEvent): อีเวนต์ DOM เดิม</td>
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
      <td>เนื้อหาปรับแต่งที่แทนที่การแสดงชิปส์มาตรฐานอย่างสมบูรณ์</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>เนื้อหาปรับแต่งสำหรับพื้นที่ไอคอน (เมื่อใช้โครงสร้างชิปส์มาตรฐาน)</td>
    </tr>
    <tr>
      <td>close-icon</td>
      <td>เนื้อหาปรับแต่งสำหรับไอคอนปุ่มปิด (เมื่อ closable เป็นจริง)</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import SprChips from '@/components/chips/chips.vue';

const activeIcon = ref({
  // สถานะชิปส์ไอคอน
  isIconActive1:false,
  isIconActive2:false,
  isIconActive3:false,

  // สถานะชิปส์ป้าย
  isBadgeActive1:true,
  isBadgeActive2:true,
  isBadgeActive3:true,
  // สถานะแบบโต้ตอบ
  isToggleActive5:true,
  isToggleActive6:true,
})

// สถานะชิปส์ไอคอน
const isIconActive1 = ref(false);
const isIconActive2 = ref(false);
const isIconActive3 = ref(false);

// สถานะชิปส์ป้าย
const isBadgeActive1 = ref(true);
const isBadgeActive2 = ref(true);
const isBadgeActive3 = ref(true);

// สถานะแบบโต้ตอบ
const isToggleActive5 = ref(true);
const isToggleActive6 = ref(true);

// สถานะมองเห็นชิปส์วัน
const visible = ref(true);

// สถานะชิปส์วัน
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const activeDays = ref({
  Sunday: false,
  Monday: false,
  Tuesday: false,
  Wednesday: false,
  Thursday: false,
  Friday: false,
  Saturday: false,
});

const updateDayActive = (day, value) => {
  activeDays.value[day] = value;
  console.log(`คลิกที่ ${day}`);
};

const handleDayClick = (day) => {
  console.log(`คลิกที่ ${day}`);
};

const handleClose = () => {
  console.log('ปิดชิปส์แล้ว');
  visible.value = false;
};

const handleUpdate = (key,value) => {
  activeIcon.value[key] = value

  console.log(`ชิปส์ใช้งานอยู่ ${value ? 'ใช่' : 'ไม่ใช่'}`);
};
</script>
