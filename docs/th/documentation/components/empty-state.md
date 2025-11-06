---
title: สถานะว่างเปล่า
descripttion: คอมโพเนนต์สถานะว่างเปล่าใช้เพื่อแจ้งผู้ใช้เมื่อไม่มีเนื้อหาให้บริการหรือเมื่อการค้นหาไม่ให้ผลลัพธ์ มันให้ข้อความที่ชัดเจน รูปภาพเสริม และปุ่มที่สามารถดำเนินการได้เพื่อแนะนำผู้ใช้ว่าต้องทำอะไรต่อไป คอมโพเนนต์นี้ช่วยปรับปรุงประสบการณ์ผู้ใช้โดยให้บริบทและตัวเลือกในสถานการณ์ที่ข้อมูลหายไป
outline: deep
---

# สถานะว่างเปล่า

## การใช้งานพื้นฐาน

<div class="spr-p-8 spr-bg-white-500">
  <spr-empty-state description="No results found" subDescription="Try a different search term" >
    <div>
      Image Slot Here
    </div>
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</div>

```vue
<template>
  <spr-empty-state description="No results found" subDescription="Try a different search term">
    <div>Image Here</div>

    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</template>
```

## รูปภาพ

คุณยังสามารถใช้พร็อพส์ `image` เพื่อแสดงรูปภาพในสถานะว่างเปล่าที่กำหนด พร็อพส์ image ยอมรับค่าตัวอักษรที่ตรงกับชื่อของรูปภาพ

รายการรูปภาพที่สามารถใช้ได้ในคอมโพเนนต์สถานะว่างเปล่า

<div class="spr-flex spr-gap-6 spr-mb-6">
  <ul class="!spr-m-0">
    <li>bug</li>
    <li>clock</li>
    <li>dashboard</li>
    <li>employees</li>
    <li>government-id</li>
  </ul>
  <ul class="!spr-m-0">
    <li>integration</li>
    <li>list</li>
    <li>social-media-handles</li>
    <li>work-in-progress</li>
    <li>work-location</li>
  </ul>
</div>

<div class="spr-p-8 spr-bg-white-500">
  <spr-empty-state
    :description="`Current image is ${currentImage}`"
    subDescription="Try a different image"
    :image="currentImage"
  >
    <template #button>
      <div class="spr-flex spr-flex-col spr-gap-4">
        <spr-button tone="success" @click="changeImage">Change Image</spr-button>
      </div>
    </template>
  </spr-empty-state>
</div>

```vue
<template>
  <spr-empty-state
    :description="`Current image is ${currentImage}`"
    subDescription="Try a different image"
    :image="currentImage"
  >
    <template #button>
      <div class="spr-flex spr-flex-col spr-gap-4">
        <spr-button tone="success">Retry</spr-button>
        <spr-button variant="secondary" @click="changeImage">Change Image</spr-button>
      </div>
    </template>
  </spr-empty-state>
</template>

<script setup>
import { ref } from 'vue';

const imageTypes = [
  'bug',
  'clock',
  'dashboard',
  'employees',
  'government-id',
  'integration',
  'list',
  'social-media-handles',
  'work-in-progress',
  'work-location',
];

const currentImage = ref('bug');

const changeImage = () => {
  // Get the current index of the image
  const currentIndex = imageTypes.indexOf(currentImage.value);
  // Move to the next image in the array, or back to the first if at the end
  const nextIndex = (currentIndex + 1) % imageTypes.length;
  currentImage.value = imageTypes[nextIndex];
};
</script>
```

## ขนาดรูปภาพ

ขนาดรูปภาพสามารถควบคุมได้โดยส่งพร็อพส์ `size` ขนาดเริ่มต้นคือ `small` (`small` และ `large`)

<div class="spr-p-8 spr-bg-white-500">
  <spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="bug"
    size="small"
  >
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</div>

<div class="spr-p-8 spr-bg-white-500">
  <spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="work-location"
    size="large"
  >
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</div>

```vue
<template>
  <spr-empty-state description="No results found" subDescription="Try a different search term" image="bug" size="small">
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>

  <spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="work-location"
    size="large"
  >
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</template>
```

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>ประเภท</th>
      <th>ค่าที่มี</th>
      <th>ค่าเริ่มต้น</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>description</td>
      <td>ข้อความคำอธิบายหลักสำหรับสถานะว่างเปล่า ข้อความนี้แสดงอย่างเด่นชัดเพื่อแจ้งผู้ใช้เกี่ยวกับการขาดเนื้อหาหรือผลการค้นหา</td>
      <td><code>String</code></td>
      <td>สตริงข้อความใดๆ</td>
      <td><code>'No results found'</code></td>
    </tr>
    <tr>
      <td>subDescription</td>
      <td>ข้อความเพิ่มเติมที่ให้บริบทหรือคำแนะนำเพิ่มเติมสำหรับสถานะว่างเปล่า ข้อความรองนี้ปรากฏใต้คำอธิบายหลักด้วยสีที่อ่อนกว่าเพื่อให้คำอธิบายหรือคำแนะนำเพิ่มเติม</td>
      <td><code>String</code></td>
      <td>สตริงข้อความใดๆ</td>
      <td><code>'Try a different search term.'</code></td>
    </tr>
    <tr>
      <td>size</td>
      <td>ควบคุมขนาดโดยรวมของคอมโพเนนต์สถานะว่างเปล่า ซึ่งส่งผลต่อทั้งมิติของคอนเทนเนอร์และขนาดรูปภาพ:
        <ul>
          <li><code>small</code>: การแสดงที่กระชับมากขึ้น (min-height: 240px, image: 120x120px)</li>
          <li><code>large</code>: การแสดงที่เด่นชัดมากขึ้น (min-height: 360px, image: 200x200px)</li>
        </ul>
      </td>
      <td><code>String</code></td>
      <td><code>'small'</code>, <code>'large'</code></td>
      <td><code>'small'</code></td>
    </tr>
    <tr>
      <td>image</td>
      <td>ระบุรูปภาพที่กำหนดไว้ล่วงหน้าเพื่อแสดงในสถานะว่างเปล่า คอมโพเนนต์โหลดรูปภาพ SVG จากไดเรกทอรี assets โดยอัตโนมัติตามค่าพร็อพส์นี้ สิ่งนี้ใช้เมื่อไม่มีรูปภาพปรับแต่งที่ให้ผ่านสล็อตเริ่มต้น</td>
      <td><code>String</code></td>
      <td><code>'bug'</code>, <code>'clock'</code>, <code>'dashboard'</code>, <code>'employees'</code>, <code>'government-id'</code>, <code>'integration'</code>, <code>'list'</code>, <code>'social-media-handles'</code>, <code>'work-in-progress'</code>, <code>'work-location'</code></td>
      <td><code>'list'</code></td>
    </tr>
    <tr>
      <td>hasButton</td>
      <td>ระบุว่าสถานะว่างเปล่ามีปุ่มหรือไม่ เมื่อตั้งเป็น <code>true</code> คอมโพเนนต์คาดหวังเนื้อหาที่จะให้ในสล็อตปุ่ม พร็อพส์นี้ใช้สำหรับการจัดการสถานะภายในเป็นหลัก</td>
      <td><code>Boolean</code></td>
      <td><code>true</code>, <code>false</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>emptyStateCustomClasses</td>
      <td>คลาส CSS เพิ่มเติมที่จะใช้กับคอนเทนเนอร์สถานะว่างเปล่า สิ่งนี้ช่วยให้การจัดสไตล์ปรับแต่งโดยไม่ต้องแก้ไขการจัดสไตล์ภายในของคอมโพเนนต์</td>
      <td><code>String</code></td>
      <td>สตริงคลาส CSS ที่ถูกต้องใดๆ</td>
      <td><code>''</code></td>
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
      <td>onClick</td>
      <td>ปล่อยเมื่อคลิกคอมโพเนนต์สถานะว่างเปล่า อีเวนต์นี้กำหนดในคอมโพเนนต์แต่ไม่ปล่อยอย่างแข็งขันในการใช้งานปัจจุบัน</td>
      <td>ไม่มี</td>
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
      <td>สล็อตเริ่มต้นสามารถใช้เพื่อแทนรูปภาพที่กำหนดไว้ล่วงหน้าด้วยเนื้อหาปรับแต่ง หากให้ สล็อตเนื้อหานี้จะแสดงแทนรูปภาพที่ระบุโดยพร็อพส์ <code>image</code> เนื้อหาจะได้รับคลาสขนาดเดียวกันกับที่รูปภาพที่กำหนดไว้ล่วงหน้าจะมี ตามพร็อพส์ <code>size</code></td>
    </tr>
    <tr>
      <td>button</td>
      <td>ใช้เพื่อให้ปุ่มการดำเนินการหรือองค์ประกอบแบบโต้ตอบอื่นๆ ที่จะแสดงใต้ข้อความคำอธิบาย โดยปกติประกอบด้วยปุ่มที่อนุญาตให้ผู้ใช้ลองดำเนินการอีกครั้งหรือนำทางไปที่อื่น</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import SprEmptyState from "@/components/empty-state/empty-state.vue";
import SprButton from '@/components/button/button.vue';
import { ref } from 'vue';

const imageTypes = [
  'bug',
  'clock',
  'dashboard',
  'employees',
  'government-id',
  'integration',
  'list',
  'social-media-handles',
  'work-in-progress',
  'work-location'
];

const currentImage = ref('bug');

const changeImage = () => {
  // Get the current index of the image
  const currentIndex = imageTypes.indexOf(currentImage.value);
  // Move to the next image in the array, or back to the first if at the end
  const nextIndex = (currentIndex + 1) % imageTypes.length;
  currentImage.value = imageTypes[nextIndex];
};
</script>
