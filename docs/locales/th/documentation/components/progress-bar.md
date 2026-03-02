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

### ป้ายกำกับสนับสนุน

พร็อพพ์เพอร์ตี้ `supporting-label` แสดงข้อความเพิ่มเติมพร้อมกับป้ายกำกับเปอร์เซ็นต์ สิ่งนี้มีประโยชน์สำหรับการให้ข้อมูลบริบท เช่น มูลค่ารวมหรือหน่วยวัด

<div>
  <spr-progress-bar :value="60" :max="100" :label="true" supporting-label="of 100 MB"/>
  <br/>
  <spr-progress-bar :value="75" :label="true" supporting-label="Complete"/>
  <br/>
  <spr-progress-bar :value="45" :label="true" supporting-label="Remaining"/>
</div>

```vue
<template>
  <!-- แสดงความคืบหน้ากับค่ารวม -->
  <spr-progress-bar :value="60" :max="100" :label="true" supporting-label="of 100 MB" />

  <!-- แสดงพร้อมข้อความสถานะ -->
  <spr-progress-bar :value="75" :label="true" supporting-label="Complete" />

  <!-- แสดงพร้อมข้อมูลบริบท -->
  <spr-progress-bar :value="45" :label="true" supporting-label="Remaining" />
</template>

<script setup>
import { ref } from 'vue';

const progressValue = ref(60);
</script>
```

### ตำแหน่งการวาง

พร็อพพ์เพอร์ตี้ `label-placement` ควบคุมตำแหน่งที่ป้ายกำกับเปอร์เซ็นต์ปรากฏขึ้นเมื่อเทียบกับแถบความคืบหน้า เมื่อพร็อพ `label` ถูกตั้งค่าเป็น `true` คุณสามารถวางป้ายกำกับเปอร์เซ็นต์ในการจัดตำแหน่งต่างๆ

#### ตำแหน่งด้านบน

<div class="spr-grid spr-gap-4 spr-mt-4">
  <spr-progress-bar :value="60" label-placement="top-start" :label="true"/>
  <spr-progress-bar :value="60" label-placement="top-center" :label="true"/>
  <spr-progress-bar :value="60" label-placement="top-end" :label="true"/>
</div>

```vue
<template>
  <spr-progress-bar :value="60" label-placement="top-start" :label="true" />
  <spr-progress-bar :value="60" label-placement="top-center" :label="true" />
  <spr-progress-bar :value="60" label-placement="top-end" :label="true" />
</template>

<script setup>
import { ref } from 'vue';

const progressValue = ref(60);
</script>
```

#### ตำแหน่งด้านล่าง

<div class="spr-grid spr-gap-4 spr-mt-4">
  <spr-progress-bar :value="60" label-placement="bottom-start" :label="true"/>
  <spr-progress-bar :value="60" label-placement="bottom-center" :label="true"/>
  <spr-progress-bar :value="60" label-placement="bottom-end" :label="true"/>
</div>

```vue
<template>
  <spr-progress-bar :value="60" label-placement="bottom-start" :label="true" />
  <spr-progress-bar :value="60" label-placement="bottom-center" :label="true" />
  <spr-progress-bar :value="60" label-placement="bottom-end" :label="true" />
</template>

<script setup>
import { ref } from 'vue';

const progressValue = ref(60);
</script>
```

#### ตำแหน่งด้านข้าง

<div class="spr-grid spr-gap-4 spr-mt-4">
  <spr-progress-bar :value="60" label-placement="left" :label="true"/>
  <spr-progress-bar :value="60" label-placement="right" :label="true"/>
</div>

```vue
<template>
  <spr-progress-bar :value="60" label-placement="left" :label="true" />
  <spr-progress-bar :value="60" label-placement="right" :label="true" />
</template>

<script setup>
import { ref } from 'vue';

const progressValue = ref(60);
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

## ตำแหน่งเปอร์เซ็นต์

ควบคุมตำแหน่งที่ป้ายกำกับเปอร์เซ็นต์ปรากฏขึ้นเมื่อเทียบกับแถบความคืบหน้า คุณสามารถวางตำแหน่งไว้ด้านบน ด้านล่าง ด้านซ้าย หรือด้านขวา

<div>
  <spr-progress-bar :value="60" labelPlacement="top" :label="true"/>
  <br />
  <spr-progress-bar :value="60" labelPlacement="bottom" :label="true"/>
  <br />
  <spr-progress-bar :value="60" labelPlacement="left" :label="true"/>
  <br />
  <spr-progress-bar :value="60" labelPlacement="right" :label="true"/>
</div>

```vue
<template>
  <!-- เปอร์เซ็นต์อยู่เหนือแถบความคืบหน้า -->
  <spr-progress-bar :value="60" labelPlacement="top" :label="true" />

  <!-- เปอร์เซ็นต์อยู่ใต้แถบความคืบหน้า (ค่าเริ่มต้น) -->
  <spr-progress-bar :value="60" labelPlacement="bottom" :label="true" />

  <!-- เปอร์เซ็นต์อยู่ด้านซ้ายของแถบความคืบหน้า -->
  <spr-progress-bar :value="60" labelPlacement="left" :label="true" />

  <!-- เปอร์เซ็นต์อยู่ด้านขวาของแถบความคืบหน้า -->
  <spr-progress-bar :value="60" labelPlacement="right" :label="true" />
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
    <tr>
      <td>
        <code>label-placement</code>
      </td>
      <td>
        กำหนดตำแหน่งและการจัดตำแหน่งของป้ายกำกับเปอร์เซ็นต์เมื่อเทียบกับแถบความคืบหน้า ตัวเลือกประกอบด้วย:
        <ul>
          <li><code>top</code>: วางป้ายกำกับเปอร์เซ็นต์เหนือแถบความคืบหน้า จัดตำแหน่งซ้าย (เหมือนกับ <code>top-start</code>)</li>
          <li><code>top-start</code>: วางป้ายกำกับเปอร์เซ็นต์เหนือแถบความคืบหน้า จัดตำแหน่งซ้าย</li>
          <li><code>top-center</code>: วางป้ายกำกับเปอร์เซ็นต์เหนือแถบความคืบหน้า จัดตำแหน่งกลาง</li>
          <li><code>top-end</code>: วางป้ายกำกับเปอร์เซ็นต์เหนือแถบความคืบหน้า จัดตำแหน่งขวา</li>
          <li><code>bottom</code>: วางป้ายกำกับเปอร์เซ็นต์ใต้แถบความคืบหน้า จัดตำแหน่งซ้าย (เหมือนกับ <code>bottom-start</code>, ค่าเริ่มต้น)</li>
          <li><code>bottom-start</code>: วางป้ายกำกับเปอร์เซ็นต์ใต้แถบความคืบหน้า จัดตำแหน่งซ้าย</li>
          <li><code>bottom-center</code>: วางป้ายกำกับเปอร์เซ็นต์ใต้แถบความคืบหน้า จัดตำแหน่งกลาง</li>
          <li><code>bottom-end</code>: วางป้ายกำกับเปอร์เซ็นต์ใต้แถบความคืบหน้า จัดตำแหน่งขวา</li>
          <li><code>left</code>: วางป้ายกำกับเปอร์เซ็นต์ด้านซ้ายของแถบความคืบหน้า</li>
          <li><code>right</code>: วางป้ายกำกับเปอร์เซ็นต์ด้านขวาของแถบความคืบหน้า</li>
        </ul>
      </td>
      <td>'top' | 'top-start' | 'top-center' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-center' | 'bottom-end' | 'left' | 'right'</td>
      <td><code>'bottom'</code></td>
    </tr>
    <tr>
      <td>
        <code>supporting-label</code>
      </td>
      <td>แสดงข้อความเพิ่มเติมพร้อมกับป้ายกำกับเปอร์เซ็นต์ สิ่งนี้มีประโยชน์สำหรับการให้ข้อมูลบริบท เช่น มูลค่ารวม หน่วยวัด หรือข้อมูลสถานะ ป้ายกำกับสนับสนุนปรากฏถัดจากป้ายกำกับหลัก</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
  </tbody>
</table>

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
