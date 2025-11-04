---
title: ปุ่มลอย
descripttion: คอมโพเนนต์ปุ่มลอยให้แถบการดำเนินการคงที่ที่ปรากฏที่ด้านล่างของหน้าจอด้วยภาพเคลื่อนไหวที่ราบรื่น เป็นองค์ประกอบ UI ที่จำเป็นสำหรับการให้การดำเนินการตามบริบทโดยไม่รบกวนขั้นตอนการทำงานของผู้ใช้
outline: deep
---

# ปุ่มลอย

คอมโพเนนต์ **ปุ่มลอย** ให้แถบการดำเนินการคงที่ที่ปรากฏที่ด้านล่างของหน้าจอด้วยภาพเคลื่อนไหวที่ราบรื่น เป็นองค์ประกอบ UI ที่จำเป็นสำหรับการให้การดำเนินการตามบริบทโดยไม่รบกวนขั้นตอนการทำงานของผู้ใช้

## ภาพรวม

แถบการดำเนินการลอยออกแบบมาเพื่อ:

- แสดงการแจ้งเตือนหรือคำเตือนที่สำคัญ
- ให้ปุ่มการดำเนินการตามบริบท
- ปรากฏและหายไปด้วยภาพเคลื่อนไหวเลื่อนขึ้นที่ราบรื่น
- ยังคงเข้าถึงได้ในขณะที่ผู้ใช้โต้ตอบกับเนื้อหาของหน้า
- ปรับให้เข้ากับขนาดหน้าจอที่แตกต่างกันด้วยพฤติกรรมที่ตอบสนอง

คอมโพเนนต์นี้เหมาะสำหรับสถานการณ์เช่น การส่งแบบฟอร์ม การยืนยันการดำเนินการ การแสดงข้อความการตรวจสอบ หรือการให้การเข้าถึงอย่างรวดเร็วไปยังฟังก์ชันสำคัญที่ด้านล่างของหน้า

## การใช้งานพื้นฐาน

คอมโพเนนต์ปุ่มลอยให้โครงร่างที่จัดโครงสร้างด้วยสองสล็อตหลัก:

- **`message` slot**: ใช้สำหรับแสดงข้อความ คำเตือน หรือเนื้อหาการแจ้งเตือนที่ด้านซ้าย
- **`actions` slot**: ใช้สำหรับวางปุ่มการดำเนินการ (ยืนยัน ยกเลิก บันทึก ฯลฯ) ที่ด้านขวา

โครงสร้างที่กำหนดไว้ล่วงหน้านี้ทำให้ง่ายต่อการใช้งานแถบการดำเนินการลอยที่สอดคล้องกันทั่วทั้งแอปพลิเคชันของคุณ

<spr-button size="large" tone="success" @click="showFloatingAction = true">แสดงปุ่มลอย</spr-button>

<spr-floating-action :show="showFloatingAction">
  <template #message>
    <div class="spr-flex spr-items-center spr-gap-1">
      <Icon class="spr-text-mango-500 spr-size-5" icon="ph:warning-fill" />
      <span>คุณมีการเปลี่ยนแปลงที่ยังไม่ได้บันทึก</span>
    </div>
  </template>
  <template #actions>
    <spr-button size="large" variant="secondary" @click="showFloatingAction = false">ยกเลิก</spr-button>
    <spr-button size="large" tone="success">บันทึกการเปลี่ยนแปลง</spr-button>
  </template>
</spr-floating-action>

```vue
<template>
  <!-- ปุ่มทริกเกอร์ -->
  <spr-button size="large" tone="success" @click="showFloatingAction = true"> แสดงปุ่มลอย </spr-button>

  <!-- คอมโพเนนต์ปุ่มลอย -->
  <spr-floating-action :show="showFloatingAction">
    <template #message>
      <div class="spr-flex spr-items-center spr-gap-1">
        <Icon class="spr-size-5 spr-text-mango-500" icon="ph:warning-fill" />
        <span>คุณมีการเปลี่ยนแปลงที่ยังไม่ได้บันทึก</span>
      </div>
    </template>
    <template #actions>
      <spr-button size="large" variant="secondary" @click="showFloatingAction = false"> ยกเลิก </spr-button>
      <spr-button size="large" tone="success"> บันทึกการเปลี่ยนแปลง </spr-button>
    </template>
  </spr-floating-action>
</template>

<script setup>
import { ref } from 'vue';

const showFloatingAction = ref(false);
</script>
```

:::tip
คอมโพเนนต์ปุ่มลอยจะถูกจัดกึ่งกลางโดยอัตโนมัติและมีพฤติกรรมที่ตอบสนอง ปรับให้เข้ากับขนาดหน้าจอที่แตกต่างกันในขณะที่รักษาช่องว่างและการมองเห็นที่เหมาะสม
:::

## เลย์เอาต์แบบกำหนดเอง

แม้ว่าโครงสร้างเริ่มต้นด้วยสล็อต `message` และ `actions` จะทำงานได้สำหรับกรณีส่วนใหญ่ แต่คุณสามารถปรับแต่งแถบการดำเนินการลอยได้อย่างเต็มรูปแบบโดยใช้สล็อตเริ่มต้น สิ่งนี้ให้การควบคุมอย่างสมบูรณ์เหนือเลย์เอาต์ เนื้อหา และการจัดสไตล์

<spr-button size="large" tone="success" @click="showCustomFloatingAction = true">แสดงปุ่มลอยแบบกำหนดเอง</spr-button>

<spr-floating-action :show="showCustomFloatingAction" class="spr-rounded-sm">
  <div class="spr-p-6 spr-w-full spr-flex spr-items-center spr-justify-between">
    <div class="spr-body-md-regular">เนื้อหาแบบกำหนดเอง</div>
    <div>
      <spr-button size="large" variant="secondary" @click="showCustomFloatingAction = false">ยกเลิก</spr-button>
    </div>
  </div>
</spr-floating-action>

```vue
<template>
  <spr-button size="large" tone="success" @click="showCustomFloatingAction = true"> แสดงปุ่มลอยแบบกำหนดเอง </spr-button>

  <spr-floating-action :show="showCustomFloatingAction" class="spr-rounded-sm">
    <div class="spr-flex spr-w-full spr-items-center spr-justify-between spr-p-6">
      <div class="spr-body-md-regular">เนื้อหาแบบกำหนดเอง</div>
      <div>
        <spr-button size="large" variant="secondary" @click="showCustomFloatingAction = false"> ยกเลิก </spr-button>
      </div>
    </div>
  </spr-floating-action>
</template>

<script setup>
import { ref } from 'vue';

const showCustomFloatingAction = ref(false);
</script>
```

:::tip
เมื่อใช้สล็อตเริ่มต้น โครงสร้างที่กำหนดไว้ล่วงหน้าจะถูกเพิกเฉย และคุณจะต้องรับผิดชอบเลย์เอาต์ทั้งหมดภายในคอมโพเนนต์ปุ่มลอย สิ่งนี้ให้ความยืดหยุ่นสูงสุดสำหรับการสร้างเลย์เอาต์แบบกำหนดเอง
:::

## ภาพเคลื่อนไหว

คอมโพเนนต์ปุ่มลอยมาพร้อมกับภาพเคลื่อนไหวที่ราบรื่นในตัว:

- **การปรากฏ**: เลื่อนขึ้นมาจากด้านล่างของวิวพอร์ต
- **การหายไป**: เลื่อนลงออกจากมุมมอง

ภาพเคลื่อนไหวเหล่านี้ถูกควบคุมโดยพร็อพส์ `show` และให้ประสบการณ์ผู้ใช้ที่ขัดเกลาโดยไม่ต้องมีการกำหนดค่าเพิ่มเติม

## กรณีการใช้งานทั่วไป

คอมโพเนนต์ปุ่มลอยมีประโยชน์โดยเฉพาะสำหรับ:

1. **การส่งแบบฟอร์ม**: ให้การดำเนินการบันทึกและยกเลิกที่ด้านล่างของแบบฟอร์มที่ยาว
2. **ข้อความการตรวจสอบ**: แสดงคำเตือนหรือข้อผิดพลาดที่ต้องการความสนใจทันที
3. **การดำเนินการตามบริบท**: แสดงการดำเนินการที่เกี่ยวข้องกับมุมมองปัจจุบันหรือรายการที่เลือก
4. **การแจ้งเตือนถาวร**: รักษาข้อมูลสำคัญให้มองเห็นได้ในขณะที่ผู้ใช้เลื่อน

## การอ้างอิง API

### พร็อพส์

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
      <td><code>show</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>ควบคุมการมองเห็นของคอมโพเนนต์ปุ่มลอย เมื่อ <code>true</code> คอมโพเนนต์จะมองเห็นได้ เมื่อ <code>false</code> จะถูกซ่อนด้วยภาพเคลื่อนไหวเลื่อนลง</td>
    </tr>
  </tbody>
</table>

### สล็อต

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>message</code></td>
      <td>เนื้อหาที่แสดงที่ด้านซ้ายของแถบการดำเนินการลอย โดยทั่วไปใช้สำหรับข้อความแจ้งเตือน คำเตือน หรือข้อความข้อมูล</td>
    </tr>
    <tr>
      <td><code>actions</code></td>
      <td>เนื้อหาที่แสดงที่ด้านขวาของแถบการดำเนินการลอย โดยทั่วไปใช้สำหรับปุ่มหรือองค์ประกอบเชิงโต้ตอบอื่นๆ</td>
    </tr>
    <tr>
      <td><em>default</em></td>
      <td>เมื่อใช้ จะแทนที่โครงสร้างเลย์เอาต์ที่กำหนดไว้ล่วงหน้า อนุญาตให้ปรับแต่งเนื้อหาและเลย์เอาต์ของแถบการดำเนินการลอยได้อย่างสมบูรณ์</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from 'vue';
import SprFloatingAction from "@/components/floating-action/floating-action.vue";
import SprButton from '@/components/button/button.vue';
import { Icon } from '@iconify/vue';

const showFloatingAction = ref(false)
const showCustomFloatingAction = ref(false)
</script>
