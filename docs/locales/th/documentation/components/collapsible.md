---
title: คอมโพเนนต์พับได้
descripttion: คอมโพเนนต์พับได้ให้วิธีการแสดงและซ่อนเนื้อหาในการเปลี่ยนผ่านแบบเคลื่อนไหวที่ราบรื่น มักใช้เพื่อสร้างส่วนที่ขยายได้ แอกคอร์เดียน และเมนูแบบดรอปดาวน์ ช่วยประหยัดพื้นที่หน้าจอในขณะที่ยังคงเนื้อหาให้เข้าถึงได้
outline: deep
---

# คอมโพเนนต์พับได้

คอมโพเนนต์พับได้ให้วิธีการแสดงและซ่อนเนื้อหาในการเปลี่ยนผ่านแบบเคลื่อนไหวที่ราบรื่น มักใช้เพื่อสร้างส่วนที่ขยายได้ แอกคอร์เดียน และเมนูแบบดรอปดาวน์ ช่วยประหยัดพื้นที่หน้าจอในขณะที่ยังคงเนื้อหาให้เข้าถึงได้

## การใช้งานพื้นฐาน

คอมโพเนนต์พับได้ถูกควบคุมผ่านการผูก `v-model` ที่กำหนดว่ามันขยายหรือยุบ โดยปกติคุณจะจับคู่กับองค์ประกอบทริกเกอร์ (เช่นปุ่ม) ที่สลับสถานะนี้

<spr-button tone="success" @click="collapsible1 = !collapsible1">Toggle Me</spr-button>
<spr-collapsible v-model="collapsible1">

  <div class="spr-p-4">
    Collapsible content here
  </div>
</spr-collapsible>

```vue
<template>
  <spr-button tone="success" @click="collapsible1 = !collapsible1">Toggle Me</spr-button>
  <spr-collapsible v-model="collapsible1">
    <div class="spr-p-4">Collapsible content here</div>
  </spr-collapsible>
</template>

<script setup>
import { ref } from 'vue';

const collapsible1 = ref(false); // Starts collapsed by default
</script>
```

## กับการ์ด

คอมโพเนนต์พับได้ทำงานได้ดีกับคอมโพเนนต์การ์ดเพื่อสร้างส่วนการ์ดที่ขยายได้ รูปแบบนี้มีประโยชน์สำหรับแดชบอร์ด แผงการตั้งค่า หรืออินเทอร์เฟซใดๆ ที่คุณต้องการแสดง/ซ่อนข้อมูลโดยละเอียด

<spr-card title="Contact Info" subtitle="Lorem ipsum dolor sit amet consectetur. Dui nunc elit vel sit at quis." has-collapsible :is-collapsible-open="collapsible2">
  <template #header>
    <div class="spr-ml-auto">
      <spr-button variant="secondary" hasIcon size="small" @click="collapsible2 = !collapsible2">
        <Icon icon="ph:caret-down" />
      </spr-button>    
    </div>
  </template>
  <spr-collapsible v-model="collapsible2">
    <div class="spr-px-4 spr-py-3">
      Collapsible Content
    </div>
  </spr-collapsible>
</spr-card>

```vue
<template>
  <spr-card
    title="Contact Info"
    subtitle="Lorem ipsum dolor sit amet consectetur. Dui nunc elit vel sit at quis."
    has-collapsible
    :is-collapsible-open="collapsible2"
  >
    <template #header>
      <div class="spr-ml-auto">
        <spr-button variant="secondary" hasIcon size="small" @click="collapsible2 = !collapsible2">
          <Icon icon="ph:caret-down" />
        </spr-button>
      </div>
    </template>

    <spr-collapsible v-model="collapsible2">
      <div class="spr-px-4 spr-py-3">Collapsible Content</div>
    </spr-collapsible>
  </spr-card>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const collapsible2 = ref(false);
</script>
```

:::tip การรวมการ์ด
เมื่อใช้ `spr-collapsible` กับ `spr-card` คุณสามารถตั้งพร็อพส์ `has-collapsible` ของการ์ดเป็น `true` และใช้ `is-collapsible-open` เพื่อรักษาสไตล์ของการ์ดให้ตรงกับสถานะพับได้
:::

## ทริกเกอร์ปรับแต่ง

คอมโพเนนต์พับได้ให้สล็อต `trigger` ที่ให้คุณเข้าถึงฟังก์ชัน `toggleCollapsible` สิ่งนี้ช่วยให้คุณสร้างองค์ประกอบทริกเกอร์ปรับแต่งที่สามารถสลับสถานะพับได้โดยไม่ต้องจัดการสถานะภายนอก

<spr-collapsible v-model="collapsible3">
  <template #trigger="{ toggleCollapsible }">
    <spr-button @click="toggleCollapsible">Custom Trigger</spr-button>
  </template>
  <div>
    Collapsible Content
  </div>
</spr-collapsible>

```vue
<template>
  <spr-collapsible v-model="collapsible3">
    <template #trigger="{ toggleCollapsible }">
      <spr-button @click="toggleCollapsible">Custom Trigger</spr-button>
    </template>
    <div>Collapsible Content</div>
  </spr-collapsible>
</template>

<script setup>
import { ref } from 'vue';

const collapsible3 = ref(false);
</script>
```

:::tip การใช้สล็อตทริกเกอร์
ฟังก์ชัน `toggleCollapsible` ที่ให้ในสล็อตทริกเกอร์จะอัปเดตค่า `v-model` โดยอัตโนมัติ ดังนั้นคุณไม่จำเป็นต้องสลับสถานะด้วยตนเอง
:::

## การใช้งานขั้นสูง

### ปรับแต่งระยะเวลาเปลี่ยนผ่าน

คุณสามารถปรับแต่งความเร็วที่เนื้อหาพับได้ขยายและยุบโดยปรับพร็อพส์ `transitionDuration` (เป็นมิลลิวินาที)

```vue
<template>
  <!-- Slow transition (500ms) -->
  <spr-collapsible v-model="isOpen" :transition-duration="500">
    <div class="spr-p-4">Slowly expanding/collapsing content</div>
  </spr-collapsible>

  <!-- Fast transition (50ms) -->
  <spr-collapsible v-model="isOpen" :transition-duration="50">
    <div class="spr-p-4">Quickly expanding/collapsing content</div>
  </spr-collapsible>
</template>
```

### การสร้างแอกคอร์เดียน

คอมโพเนนต์พับได้หลายตัวสามารถรวมกันเพื่อสร้างอินเทอร์เฟซแอกคอร์เดียนที่การเปิดส่วนหนึ่งจะปิดส่วนอื่นๆ

```vue
<template>
  <div class="spr-space-y-2">
    <div v-for="(section, index) in sections" :key="index" class="spr-rounded spr-border spr-p-2">
      <div
        class="spr-flex spr-cursor-pointer spr-items-center spr-justify-between spr-font-medium"
        @click="toggleSection(index)"
      >
        {{ section.title }}
        <Icon :icon="activeSection === index ? 'ph:caret-up' : 'ph:caret-down'" />
      </div>

      <spr-collapsible :model-value="activeSection === index">
        <div class="spr-pt-2">{{ section.content }}</div>
      </spr-collapsible>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const sections = [
  { title: 'Section 1', content: 'Content for section 1' },
  { title: 'Section 2', content: 'Content for section 2' },
  { title: 'Section 3', content: 'Content for section 3' },
];

const activeSection = ref(0); // First section open by default

const toggleSection = (index) => {
  activeSection.value = activeSection.value === index ? -1 : index;
};
</script>
```

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>ประเภท</th>
      <th>ค่าเริ่มต้น</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>modelValue</td>
      <td>boolean</td>
      <td>-</td>
      <td><strong>จำเป็น.</strong> ควบคุมว่าเนื้อหาขยาย (true) หรือยุบ (false)</td>
    </tr>
    <tr>
      <td>transitionDuration</td>
      <td>number</td>
      <td>150</td>
      <td>ระยะเวลาของแอนิเมชันขยาย/ยุบเป็นมิลลิวินาที</td>
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
      <td>ปล่อยเมื่อสถานะขยาย/ยุบเปลี่ยน</td>
      <td><code>(value: boolean)</code>: สถานะใหม่</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>พร็อพส์</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>เนื้อหาที่จะถูกยุบ/ขยาย</td>
      <td>ไม่มี</td>
    </tr>
    <tr>
      <td>trigger</td>
      <td>องค์ประกอบทริกเกอร์ปรับแต่งที่จะสลับสถานะพับได้</td>
      <td><code>{ toggleCollapsible: () => void }</code></td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from 'vue';
import SprCollapsible from "@/components/collapsible/collapsible.vue";
import SprButton from '@/components/button/button.vue';
import SprCard from '@/components/card/card.vue';
import { Icon } from '@iconify/vue';

const collapsible1 = ref(false)
const collapsible2 = ref(false)
const collapsible3 = ref(false)
</script>
