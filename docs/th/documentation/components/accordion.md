---
title: แอกคอร์เดียน
descripttion: คอมโพเนนต์แอกคอร์เดียนช่วยให้ผู้ใช้สามารถขยายและยุบส่วนของเนื้อหาได้ ซึ่งช่วยในการจัดระเบียบข้อมูลในรูปแบบที่กระชับและเป็นมิตรกับผู้ใช้
outline: deep
---

# แอกคอร์เดียน

คอมโพเนนต์แอกคอร์เดียนช่วยให้ผู้ใช้สามารถขยายและยุบส่วนของเนื้อหาได้ มันถูกใช้กันทั่วไปในการจัดระเบียบข้อมูลจำนวนมากในรูปแบบที่กระชับและเป็นมิตรกับผู้ใช้ แอกคอร์เดียนสามารถบรรจุเนื้อหาประเภทต่างๆ เช่น ข้อความ รูปภาพ หรือคอมโพเนนต์อื่นๆ และสามารถปรับแต่งได้ในแง่ของรูปลักษณ์และพฤติกรรม

## การใช้งานพื้นฐาน

<spr-accordion :accordion-items="accordionItems">
  <template #item1>
    เนื้อหาของไอเท็ม 1
    </template>
    <template #item2>
    เนื้อหาของไอเท็ม 2
    </template>
    <template #item3>
    เนื้อหาของไอเท็ม 3
    </template>
</spr-accordion>

```vue
<template>
  <spr-accordion :accordion-items="accordionItems">
    <template #item1> เนื้อหาไอเท็ม 1 </template>
    <template #item2> เนื้อหาไอเท็ม 2 </template>
    <template #item3> เนื้อหาไอเท็ม 3 </template>
  </spr-accordion>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const accordionItems = ref([
  {
    title: 'แอกคอร์เดียนไอเท็ม 1',
    subtitle:
      'โลเร็มอิปซัมดอเลอร์ซิทอาเมท, คอนเซคเทเทอร์อดิปิซซิงเอลิท. เซดโดอิวส์มอดเทมพอร์อินซิดิดันท์อัทลาบอเร่เอทดอลอเร่มักนาอาลิควา.',
    collapseId: 'item1',
  },
  {
    title: 'แอกคอร์เดียนไอเท็ม 2',
    subtitle: 'โลเร็มอิปซัมดอเลอร์ซิทอาเมท, คอนเซคเทเทอร์อดิปิซซิงเอลิท.',
    collapseId: 'item2',
  },
  {
    title: 'แอกคอร์เดียนไอเท็ม 3',
    subtitle: 'โลเร็มอิปซัมดอเลอร์ซิทอาเมท.',
    collapseId: 'item3',
  },
]);
</script>
```

## ทริกเกอร์แอกคอร์เดียน

โดยค่าเริ่มต้น ทริกเกอร์แอกคอร์เดียนคือปุ่ม คุณสามารถเปลี่ยนองค์ประกอบทริกเกอร์เป็นส่วนหัวโดยตั้งค่า prop `accordionTrigger` เป็น `header`

<spr-accordion :accordion-items="accordionItems" accordion-trigger="header">
  <template #item1>
    เนื้อหาไอเท็ม 1
  </template>
  <template #item2>
    เนื้อหาไอเท็ม 2
    </template>
    <template #item3>
    เนื้อหาไอเท็ม 3
  </template>
</spr-accordion>

```vue
<template>
  <spr-accordion :accordion-items="accordionItems" accordion-trigger="header">
    <template #item1> เนื้อหาไอเท็ม 1 </template>
    <template #item2> เนื้อหาไอเท็ม 2 </template>
    <template #item3> เนื้อหาไอเท็ม 3 </template>
  </spr-accordion>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const accordionItems = ref([
  {
    title: 'แอกคอร์เดียนไอเท็ม 1',
    subtitle:
      'โลเร็มอิปซัมดอเลอร์ซิทอาเมท, คอนเซคเทเทอร์อดิปิซซิงเอลิท. เซดโดอิวส์มอดเทมพอร์อินซิดิดันท์อัทลาบอเร่เอทดอลอเร่มักนาอาลิควา.',
    collapseId: 'item1',
  },
  {
    title: 'แอกคอร์เดียนไอเท็ม 2',
    subtitle: 'โลเร็มอิปซัมดอเลอร์ซิทอาเมท, คอนเซคเทเทอร์อดิปิซซิงเอลิท.',
    collapseId: 'item2',
  },
  {
    title: 'แอกคอร์เดียนไอเท็ม 3',
    subtitle: 'โลเร็มอิปซัมดอเลอร์ซิทอาเมท.',
    collapseId: 'item3',
  },
]);
</script>
```

## เปิดเสมอ

prop `alwaysOpen` ช่วยให้คุณตั้งค่าไอเท็มแอกคอร์เดียนให้เปิดเสมอ ซึ่งหมายความว่าเมื่อไอเท็มหนึ่งถูกเปิด อื่นๆ จะยังคงเปิดอยู่

<spr-accordion :accordion-items="accordionItems" :always-open="true">
  <template #item1>
    เนื้อหาไอเท็ม 1
  </template>
  <template #item2>
    เนื้อหาไอเท็ม 2
  </template>
  <template #item3>
    เนื้อหาไอเท็ม 3
  </template>
</spr-accordion>

```vue
<template>
  <spr-accordion :accordion-items="accordionItems" :always-open="true">
    <template #item1>เนื้อหาไอเท็ม 1</template>
    <template #item2>เนื้อหาไอเท็ม 2</template>
    <template #item3>เนื้อหาไอเท็ม 3</template>
  </spr-accordion>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const accordionItems = ref([
  {
    title: 'แอกคอร์เดียนไอเท็ม 1',
    subtitle:
      'โลเร็มอิปซัมดอเลอร์ซิทอาเมท, คอนเซคเทเทอร์อดิปิซซิงเอลิท. เซดโดอิวส์มอดเทมพอร์อินซิดิดันท์อัทลาบอเร่เอทดอลอเร่มักนาอาลิควา.',
    collapseId: 'item1',
  },
  {
    title: 'แอกคอร์เดียนไอเท็ม 2',
    subtitle: 'โลเร็มอิปซัมดอเลอร์ซิทอาเมท, คอนเซคเทเทอร์อดิปิซซิงเอลิท.',
    collapseId: 'item2',
  },
  {
    title: 'แอกคอร์เดียนไอเท็ม 3',
    subtitle: 'โลเร็มอิปซัมดอเลอร์ซิทอาเมท.',
    collapseId: 'item3',
  },
]);
</script>
```

## สถานะเริ่มต้น

โดยค่าเริ่มต้น ไอเท็มแอกคอร์เดียนจะถูกซ่อน คุณสามารถเปลี่ยนสถานะเริ่มต้นของไอเท็มแอกคอร์เดียนเมื่อโหลดโดยตั้งค่า `isDefaultOpen` เป็น `true`

::: warning
prop `isDefaultOpen` จะทำงานได้เฉพาะเมื่อ prop `alwaysOpen` ถูกตั้งค่าเป็น `true`
:::

<spr-accordion :accordion-items="accordionItems" :is-default-open="true" :always-open="true">
  <template #item1>
    เนื้อหาไอเท็ม 1
    </template>
    <template #item2>
      เนื้อหาไอเท็ม 2
    </template>
    <template #item3>
      เนื้อหาไอเท็ม 3
  </template>
</spr-accordion>

```vue
<template>
  <spr-accordion :accordion-items="accordionItems" :is-default-open="true" :always-open="true">
    <template #item1>เนื้อหาไอเท็ม 1</template>
    <template #item2>เนื้อหาไอเท็ม 2</template>
    <template #item3>เนื้อหาไอเท็ม 3</template>
  </spr-accordion>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const accordionItems = ref([
  {
    title: 'แอกคอร์เดียนไอเท็ม 1',
    subtitle:
      'โลเร็มอิปซัมดอเลอร์ซิทอาเมท, คอนเซคเทเทอร์อดิปิซซิงเอลิท. เซดโดอิวส์มอดเทมพอร์อินซิดิดันท์อัทลาบอเร่เอทดอลอเร่มักนาอาลิควา.',
    collapseId: 'item1',
  },
  {
    title: 'แอกคอร์เดียนไอเท็ม 2',
    subtitle: 'โลเร็มอิปซัมดอเลอร์ซิทอาเมท, คอนเซคเทเทอร์อดิปิซซิงเอลิท.',
    collapseId: 'item2',
  },
  {
    title: 'แอกคอร์เดียนไอเท็ม 3',
    subtitle: 'โลเร็มอิปซัมดอเลอร์ซิทอาเมท.',
    collapseId: 'item3',
  },
]);
</script>
```

## การอ้างอิง API

### พร็อพเพอร์ตี้

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
      <td>accordionItems</td>
      <td>
        <p>อาร์เรย์ของออบเจกต์ที่กำหนดไอเท็มแอกคอร์เดียน แต่ละไอเท็มควรมีคุณสมบัติต่อไปนี้:</p>
        <ul>
          <li><code>title</code> (string): หัวข้อหลักสำหรับไอเท็มแอกคอร์เดียน</li>
          <li><code>subtitle</code> (string, optional): ข้อความอธิบายเพิ่มเติมที่แสดงอยู่ใต้หัวข้อ</li>
          <li><code>collapseId</code> (string): ตัวระบุเฉพาะสำหรับไอเท็มแอกคอร์เดียน ใช้เพื่อจับคู่กับชื่อสล็อต</li>
        </ul>
      </td>
      <td>Array&lt;{<br>
        title: string,<br>
        subtitle?: string,<br>
        collapseId: string<br>
      }&gt;</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>alwaysOpen</td>
      <td>
        เมื่อ <code>true</code> ไอเท็มแอกคอร์เดียนหลายรายการสามารถขยายพร้อมกันได้ เมื่อ <code>false</code> การเปิดไอเท็มหนึ่งจะปิดไอเท็มที่เปิดก่อนหน้านี้
      </td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>isDefaultOpen</td>
      <td>
        เมื่อ <code>true</code> ไอเท็มแอกคอร์เดียนทั้งหมดจะขยายโดยค่าเริ่มต้นเมื่อคอมโพเนนต์ติดตั้ง <strong>หมายเหตุ:</strong> คุณสมบัตินี้ทำงานได้เฉพาะเมื่อ <code>alwaysOpen</code> ถูกตั้งค่าเป็น <code>true</code>
      </td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>accordionTrigger</td>
      <td>
        กำหนดองค์ประกอบใดที่ทำหน้าที่เป็นทริกเกอร์เพื่อขยาย/ยุบไอเท็มแอกคอร์เดียน:
        <ul>
          <li><code>header</code>: พื้นที่ส่วนหัวทั้งหมด (รวมถึงหัวข้อและคำบรรยาย) ทำหน้าที่เป็นทริกเกอร์</li>
          <li><code>button</code>: เฉพาะปุ่มสลับทางด้านขวาเท่านั้นที่ทำหน้าที่เป็นทริกเกอร์</li>
        </ul>
      </td>
      <td>'header' | 'button'</td>
      <td>'button'</td>
    </tr>
    <tr>
      <td>bordered</td>
      <td>
        เมื่อ <code>true</code> แอกคอร์เดียนมีขอบและมุมโค้งรอบคอมโพเนนต์ทั้งหมด เมื่อ <code>false</code> ขอบจะถูกลบออกเพื่อรูปลักษณ์ที่เรียบง่ายมากขึ้น
      </td>
      <td>boolean</td>
      <td>true</td>
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
      <td>${collapseId}</td>
      <td>สล็อตไดนามิกที่สอดคล้องกับ <code>collapseId</code> ของแต่ละไอเท็มแอกคอร์เดียน ใช้สล็อตเหล่านี้เพื่อเพิ่มเนื้อหาภายในแผงแอกคอร์เดียนแต่ละแผง</td>
    </tr>
  </tbody>
</table>

### อินเตอร์เฟซของไอเท็มแอกคอร์เดียน

```typescript
interface AccordionItem {
  title: string; // หัวข้อข้อความหลัก
  subtitle?: string; // ข้อความหัวข้อย่อยเสริม (ไม่บังคับ)
  collapseId: string; // ตัวระบุเฉพาะ (ใช้สำหรับการตั้งชื่อสล็อต)
}
```

<script lang="ts" setup>
  import SprAccordion from '@/components/accordion/accordion.vue'
  import { ref } from 'vue'

  const accordionItems = ref([
    {
        title: 'แอกคอร์เดียนไอเท็ม 1',
        subtitle: 'โลเร็มอิปซัมดอเลอร์ซิทอาเมท, คอนเซคเทเทอร์อดิปิซซิงเอลิท. เซดโดอิวส์มอดเทมพอร์อินซิดิดันท์อัทลาบอเร่เอทดอลอเร่มักนาอาลิควา.',
        collapseId: 'item1'
      },
      {
        title: 'แอกคอร์เดียนไอเท็ม 2',
        subtitle: 'โลเร็มอิปซัมดอเลอร์ซิทอาเมท, คอนเซคเทเทอร์อดิปิซซิงเอลิท.',
        collapseId: 'item2'
      },
      {
        title: 'แอกคอร์เดียนไอเท็ม 3',
        subtitle: 'โลเร็มอิปซัมดอเลอร์ซิทอาเมท.',
        collapseId: 'item3'
      }
  ])
</script>
