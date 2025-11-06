---
title: สเต็ปเปอร์
descripttion: คอมโพเนนต์ Status จัดเตรียมวิธีการมาตรฐานในการแสดงรายการขั้นตอนในกระบวนการ มันใช้เพื่อระบุขั้นตอนปัจจุบันในกระบวนการหลายขั้นตอน เช่น แบบฟอร์มหรือขั้นตอนการชำระเงิน คอมโพเนนต์สามารถใช้เพื่อแสดงสถานะของแต่ละขั้นตอน เช่น เสร็จสิ้น กำลังดำเนินการ หรือยังไม่ได้เริ่ม
outline: deep
---

# สเต็ปเปอร์

คอมโพเนนต์ Status จัดเตรียมวิธีการมาตรฐานในการแสดงรายการขั้นตอนในกระบวนการ มันใช้เพื่อระบุขั้นตอนปัจจุบันในกระบวนการหลายขั้นตอน เช่น แบบฟอร์มหรือขั้นตอนการชำระเงิน คอมโพเนนต์สามารถใช้เพื่อแสดงสถานะของแต่ละขั้นตอน เช่น เสร็จสิ้น กำลังดำเนินการ หรือยังไม่ได้เริ่ม

::: warning
ไม่มีระบบจัดการสถานะที่เกี่ยวข้องในคอมโพเนนต์นี้ สถานะของแต่ละขั้นตอนถูกกำหนดโดยข้อมูลที่ส่งไปยังคอมโพเนนต์ คุณสามารถใช้ prop `status` เพื่อกำหนดสถานะของแต่ละขั้นตอน ค่าที่ยอมรับสำหรับ prop `status` คือ `completed`, `active`, และ `pending` คอมโพเนนต์จะอัปเดตลักษณะของแต่ละขั้นตอนโดยอัตโนมัติตามสถานะที่ส่งไป
:::

## การใช้งานพื้นฐาน

<spr-stepper
  :steps="steps"
/>

```vue
<template>
  <spr-stepper :steps="steps" />
</template>
<script setup lang="ts">
import { ref } from 'vue';

const steps = ref([
  {
    number: 1,
    label: 'Step 1',
    status: 'completed',
    description: 'Description',
  },
  {
    number: 2,
    label: 'Step 2',
    status: 'active',
  },
  {
    number: 3,
    label: 'Step 3',
    status: 'pending',
  },
  {
    number: 4,
    label: 'Step 4',
    status: 'pending',
  },
]);
</script>
```

## ประเภท

สเต็ปเปอร์มีประเภทที่จำแนกเป็น `compact` (ค่าเริ่มต้น) และ `solid` สเต็ปเปอร์ด้านล่างเป็นตัวอย่างของประเภท `solid`

<div style="width:200px;">
  <spr-stepper
    :steps="steps"
    type="solid"
  />
</div>

```vue
<template>
  <div style="width:200px;">
    <spr-stepper :steps="steps" type="solid" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const steps = ref([
  {
    number: 1,
    label: 'Step 1',
    status: 'completed',
    description: 'Description',
  },
  {
    number: 2,
    label: 'Step 2',
    status: 'active',
  },
  {
    number: 3,
    label: 'Step 3',
    status: 'pending',
  },
  {
    number: 4,
    label: 'Step 4',
    status: 'pending',
  },
]);
</script>
```

## สเต็ปเปอร์แนวนอน

<spr-stepper
  :steps="steps"
  variant="horizontal"
/>

```vue
<template>
  <spr-stepper :steps="steps" variant="horizontal" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const steps = ref([
  {
    number: 1,
    label: 'Step 1',
    status: 'completed',
    description: 'Description',
  },
  {
    number: 2,
    label: 'Step 2',
    status: 'active',
  },
  {
    number: 3,
    label: 'Step 3',
    status: 'pending',
  },
  {
    number: 4,
    label: 'Step 4',
    status: 'pending',
  },
]);
</script>
```

## ขั้นตอนที่มีคำอธิบาย

<spr-stepper
  :steps="stepsWithDescription"
/>

```vue
<template>
  <spr-stepper :steps="stepsWithDescription" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const stepsWithDescription = ref([
  {
    number: 1,
    label: 'Step 1',
    status: 'completed',
    description: 'Description 1',
  },
  {
    number: 2,
    label: 'Step 2',
    status: 'active',
    description: 'Description 2',
  },
  {
    number: 3,
    label: 'Step 3',
    status: 'pending',
    description: 'Description 3',
  },
  {
    number: 4,
    label: 'Step 4',
    status: 'pending',
    description: 'Description 4',
  },
]);
</script>
```

## มีเส้น

<spr-stepper
  :steps="steps"
  has-lines
/>

<spr-stepper
  :steps="steps"
  has-lines
  variant="horizontal"
/>

::: tip
เส้นจะยืดออกไปตราบเท่าที่มีพื้นที่ว่าง คุณสามารถจัดการความกว้างของสเต็ปเปอร์นี้ผ่าน attribute "class" เพื่อย่อหรือยืดเส้น
:::

```vue
<template>
  <spr-stepper :steps="steps" has-lines />

  <spr-stepper :steps="steps" has-lines variant="horizontal" />
</template>
```

## สนามเด็กเล่นสถานะ

<spr-stepper
  :steps="playgroundSteps"
  has-lines
  variant="vertical"
/>

<spr-stepper
  :steps="playgroundSteps"
  has-lines
  variant="horizontal"
  class="w-1/2"
/>

<spr-button tone="success" @click="updateSteps" class="spr-mt-size-spacing-md">สถานะถัดไป</spr-button>

```vue
<template>
  <spr-stepper :steps="playgroundSteps" has-lines variant="vertical" />

  <spr-stepper :steps="playgroundSteps" has-lines variant="horizontal" class="w-1/2" />

  <spr-button tone="success" @click="updateSteps">Next State</spr-button>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const playgroundSteps = ref([
  {
    number: 1,
    label: 'Playground Step 1',
    status: 'active',
  },
  {
    number: 2,
    label: 'Playground Step 2',
    status: 'pending',
  },
  {
    number: 3,
    label: 'Playground Step 3',
    status: 'pending',
  },
  {
    number: 4,
    label: 'Playground Step 4',
    status: 'pending',
  },
]);
const updateSteps = () => {
  // find the current active then set the next step to active
  const currentStep = playgroundSteps.value.find((step) => step.status === 'active');
  const currentIndex = playgroundSteps.value.indexOf(currentStep);
  if (currentIndex !== -1 && currentIndex < playgroundSteps.value.length - 1) {
    playgroundSteps.value[currentIndex].status = 'completed';
    playgroundSteps.value[currentIndex + 1].status = 'active';
  }
};
</script>
```

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>ประเภท</th>
      <th>ค่าเริ่มต้น</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>variant</code>
      </td>
      <td>กำหนดว่าเลย์เอาต์ของสเต็ปเปอร์เป็นแนวนอนหรือแนวตั้ง ส่งผลต่อการจัดเรียงและการจัดรูปแบบของขั้นตอน</td>
      <td>'horizontal' | 'vertical'</td>
      <td><code>'vertical'</code></td>
    </tr>
    <tr>
      <td>
        <code>hasLines</code>
      </td>
      <td>สลับการมองเห็นของเส้นเชื่อมต่อระหว่างขั้นตอน เมื่อเป็น true จะแสดงเส้นที่เชื่อมต่อแต่ละขั้นตอนเพื่อระบุความคืบหน้าทางภาพ</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>steps</code>
      </td>
      <td>
        อาร์เรย์ของออบเจ็กต์การกำหนดค่าขั้นตอนที่กำหนดเนื้อหาและสถานะของแต่ละขั้นตอนในสเต็ปเปอร์ แต่ละขั้นตอนสามารถมีคุณสมบัติต่อไปนี้:
        <ul>
          <li><code>number</code>: หมายเลขขั้นตอน (จำเป็น)</li>
          <li><code>label</code>: ข้อความป้ายกำกับที่แสดงสำหรับขั้นตอน</li>
          <li><code>status</code>: สถานะปัจจุบันของขั้นตอน ('completed', 'active', หรือ 'pending')</li>
          <li><code>description</code>: ข้อความคำอธิบายเพิ่มเติมสำหรับขั้นตอน</li>
        </ul>
      </td>
      <td>StepPropTypes[]</td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td>
        <code>type</code>
      </td>
      <td>ควบคุมรูปแบบภาพของสเต็ปเปอร์ 'compact' ใช้การจัดรูปแบบน้อยที่สุดด้วยตัวบ่งชี้โครงร่าง ในขณะที่ 'solid' ใช้สีพื้นหลังที่เต็มสำหรับขั้นตอนที่ใช้งานอยู่และเสร็จสิ้น</td>
      <td>'compact' | 'solid'</td>
      <td><code>'compact'</code></td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>พารามิเตอร์</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>click</code>
      </td>
      <td>ถูกปล่อยออกมาเมื่อมีการคลิกขั้นตอน เหตุการณ์นี้ถูกปล่อยออกมาโดยคอมโพเนนต์ Step แต่ละตัว</td>
      <td>
        <code>(evt: MouseEvent)</code> - เหตุการณ์เมาส์ที่ทริกเกอร์การคลิก
      </td>
    </tr>
  </tbody>
</table>

### Step Props

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>ประเภท</th>
      <th>จำเป็น</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>number</code>
      </td>
      <td>หมายเลขขั้นตอนที่แสดงในตัวบ่งชี้ขั้นตอน</td>
      <td>number</td>
      <td>ใช่</td>
    </tr>
    <tr>
      <td>
        <code>label</code>
      </td>
      <td>ข้อความป้ายกำกับที่แสดงสำหรับขั้นตอน</td>
      <td>string</td>
      <td>ไม่</td>
    </tr>
    <tr>
      <td>
        <code>status</code>
      </td>
      <td>
        สถานะปัจจุบันของขั้นตอน:
        <ul>
          <li><code>completed</code>: ขั้นตอนเสร็จสิ้นแล้ว</li>
          <li><code>active</code>: ขั้นตอนปัจจุบันที่กำลังดำเนินการ</li>
          <li><code>pending</code>: ขั้นตอนที่ยังไม่ถึง</li>
        </ul>
      </td>
      <td>'completed' | 'active' | 'pending'</td>
      <td>ไม่ (ค่าเริ่มต้นเป็น 'pending')</td>
    </tr>
    <tr>
      <td>
        <code>description</code>
      </td>
      <td>ข้อความคำอธิบายเพิ่มเติมที่แสดงใต้ป้ายกำกับขั้นตอน</td>
      <td>string</td>
      <td>ไม่</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="sidekick" theme="dark" width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
</div>

<script setup lang="ts">
import SprStepper from "@/components/stepper/stepper.vue";
import { ref } from 'vue';
import SprLogo from "@/components/logo/logo.vue";
import SprButton from "@/components/button/button.vue";

const steps = ref([
  {
    number: 1,
    label: 'Step 1',
    status: 'completed',
    description: 'Description'
  },
  {
    number: 2,
    label: 'Step 2',
    status: 'active',
  },
  {
    number: 3,
    label: 'Step 3',
    status: 'pending',
  },
  {
    number: 4,
    label: 'Step 4',
    status: 'pending'
  },
]);

const playgroundSteps = ref([
  {
    number: 1,
    label: 'Playground Step 1',
    status: 'active',
  },
  {
    number: 2,
    label: 'Playground Step 2',
    status: 'pending',
  },
  {
    number: 3,
    label: 'Playground Step 3',
    status: 'pending',
  },
  {
    number: 4,
    label: 'Playground Step 4',
    status: 'pending'
  },
]);

const updateSteps = () => {
  // find the current active then set the next step to active
  const currentStep = playgroundSteps.value.find((step) => step.status === 'active');
  const currentIndex = playgroundSteps.value.indexOf(currentStep);
  if (currentIndex !== -1 && currentIndex < playgroundSteps.value.length - 1) {
    playgroundSteps.value[currentIndex].status = 'completed';
    playgroundSteps.value[currentIndex + 1].status = 'active';
  }
}

const stepsWithDescription = ref([
  {
    number: 1,
    label: 'Step 1',
    status: 'completed',
    description: 'Description 1'
  },
  {
    number: 2,
    label: 'Step 2',
    status: 'active',
    description: 'Description 2'
  },
  {
    number: 3,
    label: 'Step 3',
    status: 'pending',
    description: 'Description 3'
  },
  {
    number: 4,
    label: 'Step 4',
    status: 'pending',
    description: 'Description 4'
  },
]);

</script>
