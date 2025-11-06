---
title: แถบความคืบหน้า
descripttion: คอมโพเนนต์แถบความคืบหน้าแสดงความคืบหน้าของงานหรือกระบวนการอย่างเป็นภาพ ทำให้ผู้ใช้สามารถติดตามการเสร็จสิ้นได้ในคราวเดียว มันรองรับขนาดต่างๆ และป้ายกำกับที่เป็นตัวเลือกสำหรับความชัดเจนที่เพิ่มขึ้น
outline: deep
---

# แถบความคืบหน้า

คอมโพเนนต์แถบความคืบหน้าแสดงความคืบหน้าของงานหรือกระบวนการอย่างเป็นภาพ ทำให้ผู้ใช้สามารถติดตามการเสร็จสิ้นได้ในคราวเดียว มันรองรับขนาดต่างๆ และป้ายกำกับที่เป็นตัวเลือกสำหรับความชัดเจนที่เพิ่มขึ้น

## การใช้งานพื้นฐาน

<div>
  <spr-progress-bar :value="progressValue"/>
</div>

```vue
<template>
  <spr-progress-bar :value="progressValue" />
</template>

<script setup>
import { ref } from 'vue';
const progressValue = ref(25);
</script>
```

## ขนาด

<div>
  <spr-progress-bar :value="50" size="xs"/>
  <br />
  <spr-progress-bar :value="75" size="sm"/>
   <br />
  <spr-progress-bar :value="100" size="lg"/>
</div>

```vue
<template>
  <spr-progress-bar :value="50" size="xs" />
  <spr-progress-bar :value="75" size="sm" />
  <spr-progress-bar :value="100" size="lg" />
</template>

<script setup>
import { ref } from 'vue';
const progressValue = ref(25);
</script>
```

## ป้ายกำกับ

<div>
  <spr-progress-bar :value="100" size="lg"  :label="true"/>
  <br/>
  <spr-progress-bar :value="100" size="lg"  :label="false"/>
</div>

```vue
<template>
  <spr-progress-bar :value="100" size="lg" :label="true" />
  <spr-progress-bar :value="100" size="lg" :label="false" />
</template>

<script setup>
import { ref } from 'vue';
const progressValue = ref(25);
</script>
```

## รูปแบบสี

คอมโพเนนต์แถบความคืบหน้ารองรับรูปแบบสีต่างๆ เพื่อระบุสถานะหรือบริบทที่แตกต่างกัน

<div>
  <spr-progress-bar :value="75" color="success"/>
  <br />
  <spr-progress-bar :value="60" color="danger"/>
  <br />
  <spr-progress-bar :value="45" color="warning"/>
  <br />
  <spr-progress-bar :value="30" color="info"/>
  <br />
  <spr-progress-bar :value="90" color="neutral"/>
</div>

```vue
<template>
  <!-- สำเร็จ (ค่าเริ่มต้น) -->
  <spr-progress-bar :value="75" color="success" />

  <!-- สถานะอันตราย/ข้อผิดพลาด -->
  <spr-progress-bar :value="60" color="danger" />

  <!-- สถานะคำเตือน -->
  <spr-progress-bar :value="45" color="warning" />

  <!-- สถานะข้อมูล -->
  <spr-progress-bar :value="30" color="info" />

  <!-- สถานะเป็นกลาง -->
  <spr-progress-bar :value="90" color="neutral" />
</template>

<script setup>
import { ref } from 'vue';
const progressValue = ref(25);
</script>
```

## ค่าแม็กซ์ที่กำหนดเอง

คุณสามารถปรับแต่งค่าสูงสุดเพื่อแสดงสเกลหรือบริบทที่แตกต่างกัน

<div>
  <spr-progress-bar :value="5" :max="10" label="true"/>
  <br />
  <spr-progress-bar :value="3" :max="12" label="true"/>
  <br />
  <spr-progress-bar :value="8" :max="20" label="true"/>
</div>

```vue
<template>
  <!-- 5 จาก 10 = 50% -->
  <spr-progress-bar :value="5" :max="10" :label="true" />

  <!-- 3 จาก 12 = 25% -->
  <spr-progress-bar :value="3" :max="12" :label="true" />

  <!-- 8 จาก 20 = 40% -->
  <spr-progress-bar :value="8" :max="20" :label="true" />
</template>

<script setup>
import { ref } from 'vue';
const progressValue = ref(25);
</script>
```

## ตัวอย่างขั้นสูง

### ความคืบหน้าอัปโหลดไฟล์

<div>
  <spr-progress-bar :value="uploadProgress" color="success" size="sm" :label="true"/>
</div>

```vue
<template>
  <div>
    <spr-progress-bar :value="uploadProgress" color="success" size="sm" :label="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const uploadProgress = ref(65);

// จำลองความคืบหน้าอัปโหลด
const simulateUpload = () => {
  const interval = setInterval(() => {
    uploadProgress.value += Math.random() * 10;
    if (uploadProgress.value >= 100) {
      uploadProgress.value = 100;
      clearInterval(interval);
    }
  }, 500);
};

// เริ่มการจำลอง
simulateUpload();
</script>
```

### สถานะข้อผิดพลาดของความคืบหน้า

<div>
  <spr-progress-bar :value="errorProgress" color="danger" size="lg" :label="true"/>
</div>

```vue
<template>
  <div>
    <spr-progress-bar :value="errorProgress" color="danger" size="lg" :label="true" />
    <p class="spr-text-color-danger-base spr-text-sm">การอัปโหลดล้มเหลวที่ 60%</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const errorProgress = ref(60);
</script>
```

### กระบวนการหลายขั้นตอน

<div>
  <spr-progress-bar :value="stepProgress" color="info" size="sm" :label="true"/>
  <p class="spr-text-sm spr-text-color-base">ขั้นตอนที่ 3 จาก 5 เสร็จสิ้นแล้ว</p>
</div>

```vue
<template>
  <div>
    <spr-progress-bar :value="stepProgress" color="info" size="sm" :label="true" />
    <p class="spr-text-color-base spr-text-sm">ขั้นตอน {{ currentStep }} จาก {{ totalSteps }} เสร็จสิ้นแล้ว</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentStep = ref(3);
const totalSteps = ref(5);
const stepProgress = ref(60); // 3/5 = 60%
</script>
```

## การอ้างอิง API

### พร็อพส์

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
        <code>value</code>
      </td>
      <td>ค่าความคืบหน้าปัจจุบัน ค่านี้กำหนดว่ามีส่วนไหนของแถบความคืบหน้าถูกเติม คำนวณเป็นเปอร์เซ็นต์ของค่า <code>max</code></td>
      <td>number</td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td>
        <code>size</code>
      </td>
      <td>
        กำหนดความสูงของแถบความคืบหน้า ตัวเลือกประกอบด้วย:
        <ul>
          <li><code>xs</code>: เล็กพิเศษ (ความสูง 4px)</li>
          <li><code>sm</code>: เล็ก (ความสูง 8px)</li>
          <li><code>lg</code>: ใหญ่ (ความสูง 12px)</li>
        </ul>
      </td>
      <td>'xs' | 'sm' | 'lg'</td>
      <td><code>'lg'</code></td>
    </tr>
    <tr>
      <td>
        <code>max</code>
      </td>
      <td>ค่าสูงสุดสำหรับแถบความคืบหน้า พร็อพเพอร์ตี้ <code>value</code> จะถูกคำนวณเป็นเปอร์เซ็นต์ของตัวเลขนี้ ต้องอยู่ระหว่าง 1 ถึง 100</td>
      <td>number</td>
      <td><code>100</code></td>
    </tr>
    <tr>
      <td>
        <code>label</code>
      </td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> จะแสดงป้ายกำกับเปอร์เซ็นต์ใต้แถบความคืบหน้า ป้ายกำกับแสดงเปอร์เซ็นต์ที่คำนวณได้ตาม <code>value</code> และ <code>max</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>
        <code>color</code>
      </td>
      <td>
        กำหนดธีมสีของแถบความคืบหน้า ตัวเลือกประกอบด้วย:
        <ul>
          <li><code>success</code>: สีเขียวสำหรับการดำเนินการที่สำเร็จ (ค่าเริ่มต้น)</li>
          <li><code>danger</code>: สีแดงสำหรับข้อผิดพลาดหรือการดำเนินการที่ล้มเหลว</li>
          <li><code>warning</code>: สีส้มสำหรับคำเตือนหรือการดำเนินการที่รอดำเนินการ</li>
          <li><code>info</code>: สีน้ำเงินสำหรับสถานะข้อมูล</li>
          <li><code>neutral</code>: สีเทาสำหรับสถานะเป็นกลาง</li>
        </ul>
      </td>
      <td>'success' | 'danger' | 'warning' | 'info' | 'neutral'</td>
      <td><code>'success'</code></td>
    </tr>
  </tbody>
</table>

## การเข้าถึง

คอมโพเนนต์แถบความคืบหน้ามีแอตทริบิวต์ ARIA ที่เหมาะสมสำหรับโปรแกรมอ่านหน้าจอและการปฏิบัติตามการเข้าถึง:

- **`role="progressbar"`**: ระบุองค์ประกอบว่าเป็นแถบความคืบหน้า
- **`aria-valuemin`**: ตั้งค่าเป็น 0 (ค่าต่ำสุด)
- **`aria-valuemax`**: ตั้งค่าเป็นค่า max prop (ค่าเริ่มต้น: 100)
- **`aria-valuenow`**: ตั้งค่าเป็นค่า value prop ปัจจุบัน

แอตทริบิวต์เหล่านี้ช่วยให้เทคโนโลยีช่วยเหลือสามารถประกาศสถานะความคืบหน้าให้กับผู้ใช้ได้อย่างถูกต้อง

## แนวทางปฏิบัติที่ดีที่สุด

### เมื่อใดควรใช้สีแต่ละแบบ

- **`success`**: งานที่เสร็จสิ้น การอัปโหลดที่สำเร็จ กระบวนการที่เสร็จสิ้น
- **`danger`**: การดำเนินการที่ล้มเหลว ข้อผิดพลาด ปัญหาที่สำคัญ
- **`warning`**: การดำเนินการที่รอดำเนินการ สถานะคำเตือน งานที่ไม่สมบูรณ์
- **`info`**: ข้อมูลทั่วไป ความคืบหน้าเป็นกลาง การอัปเดตสถานะ
- **`neutral`**: สถานะเริ่มต้น ความคืบหน้าไม่ทราบ เนื้อหา placeholder

### แนวทางขนาด

- **`xs`**: ใช้ในพื้นที่ที่กระชับ ตัวบ่งชี้ความคืบหน้าแบบอินไลน์ หรือเมื่อพื้นที่จำกัด
- **`sm`**: ใช้ในแบบฟอร์ม การ์ด หรือตัวบ่งชี้ความคืบหน้าทางรอง
- **`lg`**: ใช้เป็นตัวบ่งชี้ความคืบหน้าหลัก พื้นที่เนื้อหาหลัก หรือเมื่อความชัดเจนสำคัญ

### การใช้ป้ายกำกับ

- **แสดงป้ายกำกับ** เมื่อเปอร์เซ็นต์ที่แน่นอนสำคัญต่อการทำความเข้าใจของผู้ใช้
- **ซ่อนป้ายกำกับ** เมื่อแถบความคืบหน้าที่เป็นภาพเพียงอย่างเดียวเพียงพอ
- **แสดงป้ายกำกับเสมอ** สำหรับกระบวนการที่สำคัญซึ่งผู้ใช้ต้องการข้อเสนอแนะที่แม่นยำ

<script lang="ts" setup>
import {ref} from 'vue'
import SprProgressBar from "@/components/progress-bar/progress-bar.vue";

const progressValue = ref(25)

// ตัวอย่างรูปแบบสี
const uploadProgress = ref(65);
const errorProgress = ref(60);
const stepProgress = ref(60);

// จำลองความคืบหน้าอัปโหลด
const simulateUpload = () => {
  const interval = setInterval(() => {
    uploadProgress.value += Math.random() * 10;
    if (uploadProgress.value >= 100) {
      uploadProgress.value = 100;
      clearInterval(interval);
    }
  }, 500);
};

// เริ่มการจำลอง
simulateUpload();
</script>
