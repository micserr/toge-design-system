---
title: แบนเนอร์
descripttion: คอมโพเนนต์ Banner ใช้เพื่อแสดงข้อความสำคัญ สถานะ หรือการแจ้งเตือนให้กับผู้ใช้ รองรับประเภทต่างๆ (success, error, info, pending, caution) สามารถปิดได้โดยผู้ใช้ และอนุญาตให้ปรับแต่งเนื้อหาผ่านสล็อต
outline: deep
---

# แบนเนอร์

คอมโพเนนต์ Banner ใช้เพื่อแสดงข้อความสำคัญ สถานะ หรือการแจ้งเตือนให้กับผู้ใช้ รองรับประเภทต่างๆ (`success`, `error`, `info`, `pending`, `caution`) สามารถปิดได้โดยผู้ใช้ และอนุญาตให้ปรับแต่งเนื้อหาผ่านสล็อต

## การใช้งานพื้นฐาน

แสดงแบนเนอร์ของประเภทต่างๆ โดยใช้ prop `type`

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-banner v-model:show="showBannerSuccess" type="success" message="นี่คือแบนเนอร์ความสำเร็จ" />
  <spr-banner v-model:show="showBannerError" type="error" message="นี่คือแบนเนอร์ข้อผิดพลาด" />
  <spr-banner v-model:show="showBannerInfo" type="info" message="นี่คือแบนเนอร์ข้อมูล" />
  <spr-banner v-model:show="showBannerPending" type="pending" message="นี่คือแบนเนอร์รอดำเนินการ" />
  <spr-banner v-model:show="showBannerCaution" type="caution" message="นี่คือแบนเนอร์คำเตือน" />
</div>

```vue
<template>
  <spr-banner v-model:show="showBannerSuccess" type="success" message="นี่คือแบนเนอร์ความสำเร็จ" />
  <spr-banner v-model:show="showBannerError" type="error" message="นี่คือแบนเนอร์ข้อผิดพลาด" />
  <spr-banner v-model:show="showBannerInfo" type="info" message="นี่คือแบนเนอร์ข้อมูล" />
  <spr-banner v-model:show="showBannerPending" type="pending" message="นี่คือแบนเนอร์รอดำเนินการ" />
  <spr-banner v-model:show="showBannerCaution" type="caution" message="นี่คือแบนเนอร์คำเตือน" />
</template>

<script setup lang="ts">
import SprBanner from '@/components/banner/banner.vue';
import { ref } from 'vue';

const showBannerSuccess = ref(true);
const showBannerError = ref(true);
const showBannerInfo = ref(true);
const showBannerPending = ref(true);
const showBannerCaution = ref(true);
</script>
```

## ปิด

แบนเนอร์สามารถปิดได้โดยผู้ใช้หาก `showCloseButton` เป็น `true` ใช้ `v-model:show` เพื่อควบคุมการแสดงผล

<table class="spr-w-full" style="border: none;">
  <tbody>
    <tr style="background: none;">
      <td style="width: 20%; vertical-align: top; background: none; border: none;">
      <spr-button @click="showBannerCloseSuccess = true" class="spr-w-full">แสดงความสำเร็จ</spr-button>
      </td>
      <td style="background: none; border: none;">
      <spr-banner v-model:show="showBannerCloseSuccess" type="success" show-close-button message="นี่คือแบนเนอร์ความสำเร็จที่ปิดได้" />
      </td>
    </tr>
    <tr style="background: none;">
      <td style="width: 20%; vertical-align: top; background: none; border: none;">
      <spr-button @click="showBannerCloseError = true" class="spr-w-full">แสดงข้อผิดพลาด</spr-button>
      </td>
      <td style="background: none; border: none;">
      <spr-banner v-model:show="showBannerCloseError" type="error" show-close-button message="นี่คือแบนเนอร์ข้อผิดพลาดที่ปิดได้" />
      </td>
    </tr>
    <tr style="background: none;">
      <td style="width: 20%; vertical-align: top; background: none; border: none;">
      <spr-button @click="showBannerCloseInfo = true" class="spr-w-full">แสดงข้อมูล</spr-button>
      </td>
      <td style="background: none; border: none;">
      <spr-banner v-model:show="showBannerCloseInfo" type="info" show-close-button message="นี่คือแบนเนอร์ข้อมูลที่ปิดได้" />
      </td>
    </tr>
    <tr style="background: none;">
      <td style="width: 20%; vertical-align: top; background: none; border: none;">
      <spr-button @click="showBannerClosePending = true" class="spr-w-full">แสดงรอดำเนินการ</spr-button>
      </td>
      <td style="background: none; border: none;">
      <spr-banner v-model:show="showBannerClosePending" type="pending" show-close-button message="นี่คือแบนเนอร์รอดำเนินการที่ปิดได้" />
      </td>
    </tr>
    <tr style="background: none;">
      <td style="width: 20%; vertical-align: top; background: none; border: none;">
      <spr-button @click="showBannerCloseCaution = true" class="spr-w-full">แสดงคำเตือน</spr-button>
      </td>
      <td style="background: none; border: none;">
      <spr-banner v-model:show="showBannerCloseCaution" type="caution" show-close-button message="นี่คือแบนเนอร์คำเตือนที่ปิดได้" />
      </td>
    </tr>
  </tbody>
</table>

```vue
<template>
  ...
  <spr-banner
    v-model:show="showBannerCloseSuccess"
    type="success"
    show-close-button
    message="นี่คือแบนเนอร์ความสำเร็จที่ปิดได้"
  />
  <spr-banner
    v-model:show="showBannerCloseError"
    type="error"
    show-close-button
    message="นี่คือแบนเนอร์ข้อผิดพลาดที่ปิดได้"
  />
  <spr-banner
    v-model:show="showBannerCloseInfo"
    type="info"
    show-close-button
    message="นี่คือแบนเนอร์ข้อมูลที่ปิดได้"
  />
  <spr-banner
    v-model:show="showBannerClosePending"
    type="pending"
    show-close-button
    message="นี่คือแบนเนอร์รอดำเนินการที่ปิดได้"
  />
  <spr-banner
    v-model:show="showBannerCloseCaution"
    type="caution"
    show-close-button
    message="นี่คือแบนเนอร์คำเตือนที่ปิดได้"
  />
  ...
  <spr-button tone="success" @click="showBannerCloseSuccess = true">แสดงความสำเร็จ</spr-button>
  <spr-button tone="danger" @click="showBannerCloseError = true">แสดงข้อผิดพลาด</spr-button>
  <spr-button tone="info" @click="showBannerCloseInfo = true">แสดงข้อมูล</spr-button>
  <spr-button tone="pending" @click="showBannerClosePending = true">แสดงรอดำเนินการ</spr-button>
  <spr-button tone="caution" @click="showBannerCloseCaution = true">แสดงคำเตือน</spr-button>
  ...
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SprBanner from '@/components/banner/banner.vue';
import SprButton from '@/components/button/button.vue';

const showBannerCloseSuccess = ref(true);
const showBannerCloseError = ref(true);
const showBannerCloseInfo = ref(true);
const showBannerClosePending = ref(true);
const showBannerCloseCaution = ref(true);
</script>
```

## ปรับแต่ง

คุณสามารถปรับแต่งเนื้อหาของแบนเนอร์โดยใช้สล็อตเริ่มต้น

<div>
  <spr-banner v-model:show="showBannerCustom" type="success" show-close-button>
    <div class="spr-flex spr-flex-col spr-gap-2">
      <strong>ความสำเร็จแบบกำหนดเอง!</strong>
      <span>นี่คือข้อความแบนเนอร์แบบกำหนดเอง</span>
    </div>
  </spr-banner>
  <spr-button tone="success" @click="showBannerCustom = true" class="spr-mt-2">แสดงแบนเนอร์แบบกำหนดเอง</spr-button>
</div>

```vue
<template>
  <spr-banner v-model:show="showBannerCustom" type="success" show-close-button>
    <div class="spr-flex spr-flex-col spr-gap-2">
      <strong>ความสำเร็จแบบกำหนดเอง!</strong> <span>นี่คือข้อความแบนเนอร์แบบกำหนดเอง</span>
    </div>
  </spr-banner>
  <spr-button tone="success" @click="showBannerCustom = true">แสดงแบนเนอร์แบบกำหนดเอง</spr-button>
</template>

<script setup lang="ts">
import SprBanner from '@/components/banner/banner.vue';
import SprButton from '@/components/button/button.vue';
import { ref } from 'vue';

const showBannerCustom = ref(true);
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
      <td>type</td>
      <td>
        กำหนดลักษณะภาพและความหมายเชิงความหมายของแบนเนอร์:
        <ul>
          <li><code>success</code>: บ่งชี้การดำเนินการที่สำเร็จหรือข้อความเชิงบวก</li>
          <li><code>error</code>: บ่งชี้ข้อผิดพลาดหรือปัญหาที่สำคัญที่ต้องการความสนใจ</li>
          <li><code>info</code>: ให้ข้อมูลทั่วไปแก่ผู้ใช้</li>
          <li><code>pending</code>: บ่งชี้การดำเนินการที่กำลังดำเนินอยู่หรือรอการดำเนินการ</li>
          <li><code>caution</code>: บ่งชี้คำเตือนหรือปัญหาที่อาจเกิดขึ้นที่อาจต้องการความสนใจ</li>
        </ul>
        แต่ละประเภทใช้สีและไอคอนเฉพาะเพื่อเสริมความหมาย
      </td>
      <td>'success' | 'error' | 'info' | 'pending' | 'caution'</td>
      <td>'success'</td>
    </tr>
    <tr>
      <td>showCloseButton</td>
      <td>เมื่อ <code>true</code> จะแสดงปุ่มปิดที่อนุญาตให้ผู้ใช้ปิดแบนเนอร์ เมื่อคลิก จะตั้งค่าโมเดล <code>show</code> เป็น <code>false</code></td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>message</td>
      <td>เนื้อหาข้อความที่จะแสดงในแบนเนอร์ สิ่งนี้ใช้เฉพาะเมื่อไม่ได้ระบุเนื้อหาผ่านสล็อตเริ่มต้น หากมีการระบุทั้งสล็อตและ prop ข้อความ เนื้อหาสล็อตจะมีความสำคัญเหนือกว่า</td>
      <td>string</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>show (v-model)</td>
      <td>ควบคุมการแสดงผลของแบนเนอร์ การใช้ <code>v-model:show</code> เปิดใช้งานการผูกสองทางสำหรับการแสดงหรือซ่อนแบนเนอร์โดยทางโปรแกรม แบนเนอร์จะถูกลบออกจาก DOM อย่างสมบูรณ์เมื่อไม่แสดง</td>
      <td>boolean</td>
      <td>true</td>
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
      <td>update:show</td>
      <td>ถูกปล่อยออกมาเมื่อการแสดงผลของแบนเนอร์เปลี่ยนแปลง ไม่ว่าจะจากการโต้ตอบของผู้ใช้กับปุ่มปิดหรือการเปลี่ยนแปลงโดยทางโปรแกรมกับ prop <code>show</code> เหตุการณ์นี้ใช้สำหรับการผูก <code>v-model:show</code></td>
      <td><code>(value: boolean)</code> - สถานะการแสดงผลใหม่</td>
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
      <td>
        <p>ใช้เพื่อปรับแต่งเนื้อหาของแบนเนอร์ เมื่อระบุแล้ว เนื้อหานี้จะแทนที่การแสดงข้อความมาตรฐาน</p>
        <p>หากไม่ได้ระบุ แบนเนอร์จะแสดงไอคอนที่เหมาะสมสำหรับประเภทที่เลือก ตามด้วยข้อความที่ระบุใน prop <code>message</code></p>
      </td>
    </tr>
  </tbody>
</table>

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="payroll" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import SprBanner from '@/components/banner/banner.vue';
import SprButton from '@/components/button/button.vue';
import SprLogo from '@/components/logo/logo.vue';
import { ref } from 'vue';

const showBannerSuccess = ref(true);
const showBannerError = ref(true);
const showBannerInfo = ref(true);
const showBannerPending = ref(true);
const showBannerCaution = ref(true);
const showBannerClose = ref(true);
const showBannerCloseSuccess = ref(true);
const showBannerCloseError = ref(true);
const showBannerCloseInfo = ref(true);
const showBannerClosePending = ref(true);
const showBannerCloseCaution = ref(true);
const showBannerCustom = ref(true);
</script>
