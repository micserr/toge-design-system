---
title: แผงด้านข้าง
descripttion: คอมโพเนนต์แผงด้านข้างเป็นองค์ประกอบ UI ที่หลากหลายซึ่งเลื่อนเข้ามาจากขอบของหน้าจอเพื่อแสดงเนื้อหาเสริม แบบฟอร์ม หรือข้อมูลรายละเอียดโดยไม่รบกวนอินเทอร์เฟซหลัก มันให้วิธีการนำเสนอเนื้อหาและการดำเนินการเพิ่มเติมที่เป็นบริบทและไม่รบกวน
outline: deep
---

# แผงด้านข้าง

คอมโพเนนต์แผงด้านข้างเป็นองค์ประกอบ UI ที่หลากหลายซึ่งเลื่อนเข้ามาจากขอบของหน้าจอเพื่อแสดงเนื้อหาเสริม แบบฟอร์ม หรือข้อมูลรายละเอียดโดยไม่รบกวนอินเทอร์เฟซหลัก มันให้วิธีการนำเสนอเนื้อหาและการดำเนินการเพิ่มเติมที่เป็นบริบทและไม่รบกวน

## ภาพรวม

แผงด้านข้างเหมาะสำหรับการนำเสนอ:

- รายละเอียดบริบทสำหรับรายการที่เลือก
- แบบฟอร์มสำหรับสร้างหรือแก้ไขเนื้อหา
- อินเทอร์เฟซการกรองและการค้นหา
- เวิร์กโฟลว์หลายขั้นตอน
- ข้อมูลเสริมที่ไม่ต้องการหน้าเต็ม

![ตัวอย่างแผงด้านข้าง](./../../../../public/images/sidepanel-sample.png)

## การใช้งานพื้นฐาน

การใช้งานพื้นฐานของแผงด้านข้างต้องการ:

1. องค์ประกอบควบคุม (เช่น ปุ่ม) เพื่อทริกเกอร์แผง
2. คอมโพเนนต์แผงด้านข้างที่มีเนื้อหา
3. การจัดการสถานะสำหรับการเปิดและปิด

<div>
  <spr-button tone="success" @click="isSidepanelOpen = true">
    เปิดแผงด้านข้าง
  </spr-button>
  <spr-sidepanel
    :is-open="isSidepanelOpen"
    @close="isSidepanelOpen = false"
    header-title="ตัวอย่างแผงด้านข้าง"
  >
    <div class="spr-p-4">
      เนื้อหาแผงด้านข้าง
    </div>
    <template #footer>
      <div class="spr-px-4 spr-flex spr-justify-end spr-gap-2">
        <spr-button @click="isSidepanelOpen = false">ยกเลิก</spr-button>
        <spr-button tone="success">ส่ง</spr-button>
      </div>
    </template>
  </spr-sidepanel>
</div>

```vue
<template>
  <!-- ปุ่มทริกเกอร์ -->
  <spr-button tone="success" @click="isSidepanelOpen = true"> เปิดแผงด้านข้าง </spr-button>

  <!-- คอมโพเนนต์แผงด้านข้าง -->
  <spr-sidepanel :is-open="isSidepanelOpen" @close="isSidepanelOpen = false" header-title="ตัวอย่างแผงด้านข้าง">
    <!-- เนื้อหาหลัก -->
    <div class="spr-p-4">เนื้อหาแผงด้านข้าง</div>

    <!-- การดำเนินการส่วนท้าย -->
    <template #footer>
      <div class="spr-flex spr-justify-end spr-gap-2 spr-px-4">
        <spr-button @click="isSidepanelOpen = false">ยกเลิก</spr-button>
        <spr-button tone="success">ส่ง</spr-button>
      </div>
    </template>
  </spr-sidepanel>
</template>

<script setup>
import { ref } from 'vue';

const isSidepanelOpen = ref(false);
</script>
```

:::tip
แผงด้านข้างรวมปุ่มปิดในตัวในส่วนหัวและยังสามารถปิดได้โดยการคลิกภายนอกแผงหรือกดปุ่ม ESC
:::

## ขนาดแผงด้านข้าง

คอมโพเนนต์แผงด้านข้างมีขนาดที่กำหนดไว้ล่วงหน้า 3 ขนาดเพื่อรองรับความต้องการเนื้อหาที่แตกต่างกัน ใช้พร็อพส์ `size` เพื่อระบุความกว้างของแผง

<div>
  <div class="spr-flex spr-space-x-4">
    <spr-button tone="success" @click="isSmallSidepanelOpen = true">เล็ก (360px)</spr-button>
    <spr-button tone="success" @click="isMediumSidepanelOpen = true">กลาง (420px)</spr-button>
    <spr-button tone="success" @click="isLargeSidepanelOpen = true">ใหญ่ (480px)</spr-button>
  </div>
  <spr-sidepanel
    size="sm"
    :is-open="isSmallSidepanelOpen"
    @close="isSmallSidepanelOpen = false"
    header-title="แผงด้านข้างขนาดเล็ก"
  >
    <div class="spr-p-4">
      <p class="spr-mb-2 spr-font-semibold">ความกว้าง: 360px</p>
      <p>แผงด้านข้างขนาดเล็กเหมาะสำหรับแบบฟอร์มง่ายๆ การกรอง หรือการแสดงข้อมูลด่วน</p>
    </div>
  </spr-sidepanel>
  <spr-sidepanel
    size="md"
    :is-open="isMediumSidepanelOpen"
    @close="isMediumSidepanelOpen = false"
    header-title="แผงด้านข้างขนาดกลาง"
  >
    <div class="spr-p-4">
      <p class="spr-mb-2 spr-font-semibold">ความกว้าง: 420px</p>
      <p>แผงด้านข้างขนาดกลางให้พื้นที่มากขึ้นสำหรับแบบฟอร์มที่ซับซ้อนหรือการแสดงข้อมูลรายละเอียด</p>
    </div>
  </spr-sidepanel>
  <spr-sidepanel
    size="lg"
    :is-open="isLargeSidepanelOpen"
    @close="isLargeSidepanelOpen = false"
    header-title="แผงด้านข้างขนาดใหญ่"
  >
    <div class="spr-p-4">
      <p class="spr-mb-2 spr-font-semibold">ความกว้าง: 480px</p>
      <p>แผงด้านข้างขนาดใหญ่เหมาะที่สุดสำหรับอินเทอร์เฟซที่ซับซ้อนที่มีอินพุตหลายรายการหรือการแสดงเนื้อหาที่สมบูรณ์</p>
    </div>
  </spr-sidepanel>
</div>

```vue
<template>
  <div class="spr-flex spr-space-x-4">
    <spr-button tone="success" @click="isSmallSidepanelOpen = true"> เล็ก (360px) </spr-button>
    <spr-button tone="success" @click="isMediumSidepanelOpen = true"> กลาง (420px) </spr-button>
    <spr-button tone="success" @click="isLargeSidepanelOpen = true"> ใหญ่ (480px) </spr-button>
  </div>

  <!-- แผงด้านข้างขนาดเล็ก -->
  <spr-sidepanel
    size="sm"
    :is-open="isSmallSidepanelOpen"
    @close="isSmallSidepanelOpen = false"
    header-title="แผงด้านข้างขนาดเล็ก"
  >
    <div class="spr-p-4">ความกว้าง: 360px</div>
  </spr-sidepanel>

  <!-- แผงด้านข้างขนาดกลาง -->
  <spr-sidepanel
    size="md"
    :is-open="isMediumSidepanelOpen"
    @close="isMediumSidepanelOpen = false"
    header-title="แผงด้านข้างขนาดกลาง"
  >
    <div class="spr-p-4">ความกว้าง: 420px</div>
  </spr-sidepanel>

  <!-- แผงด้านข้างขนาดใหญ่ -->
  <spr-sidepanel
    size="lg"
    :is-open="isLargeSidepanelOpen"
    @close="isLargeSidepanelOpen = false"
    header-title="แผงด้านข้างขนาดใหญ่"
  >
    <div class="spr-p-4">ความกว้าง: 480px</div>
  </spr-sidepanel>
</template>

<script setup>
import { ref } from 'vue';

const isSmallSidepanelOpen = ref(false);
const isMediumSidepanelOpen = ref(false);
const isLargeSidepanelOpen = ref(false);
</script>
```

:::tip พฤติกรรมที่ตอบสนอง
บนหน้าจอขนาดเล็ก (อุปกรณ์มือถือ) แผงด้านข้างจะปรับให้ใช้ความกว้างหน้าจอส่วนใหญ่โดยอัตโนมัติในขณะที่รักษาระยะห่างสำหรับการใช้งาน
:::

## การปรับแต่งส่วนหัวและส่วนท้าย

### การเติมส่วนท้ายที่กำหนดเอง

ใช้พร็อพส์ `footer-no-padding` เพื่อลบการเติมเริ่มต้นออกจากส่วนท้าย สิ่งนี้มีประโยชน์เมื่อคุณต้องการสร้างเลย์เอาต์ที่กำหนดเองหรือเมื่อใช้คอมโพเนนต์ที่มีการเติมของตัวเอง

<div>
  <div class="spr-flex spr-space-x-4">
    <spr-button tone="success" @click="isNoPaddingModal = true">ส่วนท้ายโดยไม่มีการเติม</spr-button>
  </div>
  <spr-sidepanel
    size="sm"
    :is-open="isNoPaddingModal"
    header-title="ตัวอย่างส่วนท้ายที่กำหนดเอง"
    footer-no-padding
    @close="isNoPaddingModal = false"
  >
    <div class="spr-p-4">
      <p>ส่วนท้ายด้านล่างไม่มีระยะห่างเริ่มต้น ช่วยให้สามารถกำหนดสไตล์ที่กำหนดเองได้</p>
    </div>
    <template #footer>
      <div class="spr-bg-neutral-50 spr-p-3 spr-flex spr-justify-end spr-gap-2">
        <spr-button variant="secondary" @click="isNoPaddingModal = false">ยกเลิก</spr-button>
        <spr-button tone="success">ยืนยัน</spr-button>
      </div>
    </template>
  </spr-sidepanel>
</div>

```vue
<template>
  <spr-button tone="success" @click="isNoPaddingModal = true"> ส่วนท้ายโดยไม่มีการเติม </spr-button>

  <spr-sidepanel
    size="sm"
    :is-open="isNoPaddingModal"
    header-title="ตัวอย่างส่วนท้ายที่กำหนดเอง"
    footer-no-padding
    @close="isNoPaddingModal = false"
  >
    <div class="spr-p-4">
      <p>ส่วนท้ายด้านล่างไม่มีระยะห่างเริ่มต้น ช่วยให้สามารถกำหนดสไตล์ที่กำหนดเองได้</p>
    </div>
    <template #footer>
      <div class="spr-flex spr-justify-end spr-gap-2 spr-bg-neutral-50 spr-p-3">
        <spr-button variant="secondary" @click="isNoPaddingModal = false">ยกเลิก</spr-button>
        <spr-button tone="success">ยืนยัน</spr-button>
      </div>
    </template>
  </spr-sidepanel>
</template>

<script setup>
import { ref } from 'vue';

const isNoPaddingModal = ref(false);
</script>
```

### ส่วนหัวที่กำหนดเอง

คุณสามารถปรับแต่งส่วนหัวได้อย่างเต็มรูปแบบโดยใช้สล็อต `header`

```vue
<template>
  <spr-sidepanel :is-open="isOpen" @close="isOpen = false">
    <!-- ส่วนหัวที่กำหนดเอง -->
    <template #header>
      <div class="spr-flex spr-items-center spr-justify-between spr-bg-neutral-50 spr-p-4">
        <div class="spr-flex spr-items-center spr-gap-2">
          <Icon icon="ph:user-circle" class="spr-text-brand-600 spr-size-6" />
          <h3 class="spr-subheading-md">โปรไฟล์ผู้ใช้</h3>
        </div>
        <Icon icon="ph:x" class="spr-text-color-weak spr-cursor-pointer" @click="isOpen = false" />
      </div>
    </template>

    <!-- เนื้อหาแผง -->
    <div class="spr-p-4">เนื้อหาจะอยู่ที่นี่</div>
  </spr-sidepanel>
</template>
```

:::warning
เมื่อใช้ส่วนหัวที่กำหนดเองด้วยสล็อต `header` คุณจะต้องใช้ปุ่มปิดของคุณเอง
:::

## คุณลักษณะขั้นสูง

### ความสูงที่กำหนดเอง

คุณสามารถปรับแต่งความสูงของแผงด้านข้างโดยใช้พร็อพส์ `height` สิ่งนี้สามารถระบุเป็นตัวเลข (ตีความเป็นพิกเซล) หรือสตริงที่มีหน่วย CSS

```vue
<template>
  <!-- ความสูงคงที่เป็นพิกเซล -->
  <spr-sidepanel :is-open="isOpen" @close="isOpen = false" height="500">
    <!-- เนื้อหา -->
  </spr-sidepanel>

  <!-- ความสูงที่มีหน่วย CSS -->
  <spr-sidepanel :is-open="isOpen" @close="isOpen = false" height="80vh">
    <!-- เนื้อหา -->
  </spr-sidepanel>
</template>
```

### การควบคุมฉากหลัง

คุณสามารถควบคุมได้ว่าผลแผงด้านข้างแสดงฉากหลังหรือไม่โดยใช้พร็อพส์ `has-backdrop`

```vue
<template>
  <!-- โดยไม่มีฉากหลัง -->
  <spr-sidepanel :is-open="isOpen" @close="isOpen = false" :has-backdrop="false">
    <!-- เนื้อหา -->
  </spr-sidepanel>
</template>
```

### พฤติกรรมการปิด

ควบคุมวิธีการปิดแผงด้านข้างโดยใช้พร็อพส์ `close-outside` และ `escape-close`

```vue
<template>
  <!-- ป้องกันการปิดเมื่อคลิกภายนอก -->
  <spr-sidepanel :is-open="isOpen" @close="isOpen = false" :close-outside="false">
    <!-- เนื้อหา -->
  </spr-sidepanel>

  <!-- ป้องกันการปิดด้วยปุ่ม ESC -->
  <spr-sidepanel :is-open="isOpen" @close="isOpen = false" :escape-close="false">
    <!-- เนื้อหา -->
  </spr-sidepanel>
</template>
```

## สล็อต

คอมโพเนนต์แผงด้านข้างมีสล็อต 3 ตัวสำหรับปรับแต่งส่วนต่างๆ ของแผง

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><em>default</em></td>
      <td>พื้นที่เนื้อหาหลักของแผงด้านข้าง นี่คือที่ที่เนื้อหาหลักของคุณควรจะวาง</td>
    </tr>
    <tr>
      <td><code>header</code></td>
      <td>ใช้เพื่อแทนที่ส่วนหัวเริ่มต้นด้วยเนื้อหาที่กำหนดเอง เมื่อใช้สล็อตนี้ คุณจะต้องใช้ปุ่มปิดของคุณเอง</td>
    </tr>
    <tr>
      <td><code>footer</code></td>
      <td>ใช้เพื่อเพิ่มส่วนท้ายที่ด้านล่างของแผงด้านข้าง โดยปกติจะมีปุ่มการดำเนินการ</td>
    </tr>
  </tbody>
</table>

## ข้อมูลอ้างอิง API

### พร็อพส์

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
      <td><code>is-open</code></td>
      <td>ควบคุมว่าผลแผงด้านข้างเปิดหรือปิด</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>header-title</code></td>
      <td>ข้อความหัวเรื่องที่แสดงในส่วนหัวของแผงด้านข้าง</td>
      <td>string</td>
      <td>'Sidepanel Header'</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td>ควบคุมความกว้างของแผงด้านข้าง</td>
      <td>'sm' | 'md' | 'lg'</td>
      <td>'sm'</td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td>ระบุความสูงของแผงด้านข้าง สามารถเป็นตัวเลข (เป็นพิกเซล) หรือสตริงที่มีหน่วย CSS</td>
      <td>string | number</td>
      <td>'calc(100vh - 32px)'</td>
    </tr>
    <tr>
      <td><code>hide-header</code></td>
      <td>เมื่อเป็นจริง จะซ่อนส่วนหัวเริ่มต้น</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>position</code></td>
      <td>ระบุด้านที่แผงปรากฏ</td>
      <td>'right'</td>
      <td>'right'</td>
    </tr>
    <tr>
      <td><code>has-backdrop</code></td>
      <td>เมื่อเป็นจริง จะแสดงฉากหลังกึ่งโปร่งใสหลังแผงด้านข้าง</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td><code>close-outside</code></td>
      <td>เมื่อเป็นจริง จะอนุญาตให้ปิดแผงด้านข้างโดยการคลิกภายนอก</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td><code>escape-close</code></td>
      <td>เมื่อเป็นจริง จะอนุญาตให้ปิดแผงด้านข้างโดยการกดปุ่ม ESC</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td><code>is-stacking</code></td>
      <td>เปิดใช้งานพฤติกรรมการซ้อนสำหรับแผงด้านข้าง (สำหรับแผงที่ซ้อนกัน)</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>footer-no-padding</code></td>
      <td>เมื่อเป็นจริง จะลบการเติมเริ่มต้นออกจากส่วนท้าย</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

### อีเวนต์

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
      <td><code>close</code></td>
      <td>ปล่อยออกมาทุกครั้งที่แผงด้านข้างควรปิด (จากปุ่มปิด การคลิกภายนอก หรือปุ่ม ESC)</td>
      <td>ไม่มี</td>
    </tr>
    <tr>
      <td><code>on-close</code></td>
      <td>ปล่อยออกมาหลังจากแผงด้านข้างถูกปิดแล้ว</td>
      <td>ไม่มี</td>
    </tr>
  </tbody>
</table>

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-flex-wrap spr-items-center spr-gap-6 spr-py-4 spr-rounded">
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="hr" theme="dark" width="50px" />
    <span class="spr-text-sm">Sprout HR</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="ecosystem" theme="dark" width="50px" />
    <span class="spr-text-sm">Sprout Ecosystem</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="sidekick" theme="dark" width="50px" />
    <span class="spr-text-sm">Sprout Sidekick</span>
  </div>
</div>

<script lang="ts" setup>
import { ref } from 'vue';

import SprSidepanel from '@/components/sidepanel/sidepanel.vue';
import SprButton from "@/components/button/button.vue";
import SprLogo from "@/components/logo/logo.vue";

const isSidepanelOpen = ref(false)
const isSmallSidepanelOpen = ref(false)
const isMediumSidepanelOpen = ref(false)
const isLargeSidepanelOpen = ref(false)
const isCustomHeaderTitleOpen = ref(false)
const isNoPaddingModal = ref(false)

import SprSidenav from '@/components/sidenav/sidenav.vue';

</script>
