---
title: แผงด้านข้างแบบซ้อน
descripttion: คอมโพเนนต์แผงด้านข้างแบบซ้อนอนุญาตให้แสดงแผงด้านข้างหลายแผงข้างๆ กัน สร้างเอฟเฟกต์แบบชั้นที่ช่วยเพิ่มการนำทางและบริบทสำหรับผู้ใช้ เหมาะสำหรับเวิร์กโฟลว์หลายขั้นตอน มุมมองหลัก-รายละเอียด และการสำรวจเนื้อหาที่ซ้อนกัน
outline: deep
---

# แผงด้านข้างแบบซ้อน

คอมโพเนนต์ `StackingSidepanel` ให้วิธีการที่มีประสิทธิภาพในการแสดงแผงด้านข้างหลายแผงที่ซ้อนกันในแนวนอนข้างๆ กัน สิ่งนี้สร้างลำดับชั้นภาพและการไหลของการนำทางที่สมบูรณ์แบบสำหรับกระบวนการหลายขั้นตอน อินเทอร์เฟซแบบเจาะลึก หรือมุมมองหลัก-รายละเอียด

## ภาพรวม

แผงด้านข้างแบบซ้อนเหมาะสำหรับ:

- **เวิร์กโฟลว์หลายขั้นตอน**: นำผู้ใช้ผ่านขั้นตอนตามลำดับโดยไม่สูญเสียบริบท
- **มุมมองหลัก-รายละเอียด**: แสดงรายการในแผงหนึ่งและรายละเอียดในอีกแผงหนึ่ง
- **การนำทางที่ซ้อนกัน**: อนุญาตให้ผู้ใช้เจาะลึกไปยังระดับเนื้อหาที่ลึกขึ้น
- **ข้อมูลที่เกี่ยวข้อง**: แสดงเนื้อหาเสริมในขณะที่รักษาเนื้อหาหลักให้มองเห็นได้

## คุณลักษณะสำคัญ

- **การเปิดเผยแบบก้าวหน้า**: แสดงข้อมูลในความก้าวหน้าทางตรรกะ
- **รักษาบริบท**: ผู้ใช้สามารถเห็นแผงก่อนหน้าได้ในขณะที่ทำงานในแผงปัจจุบัน
- **การกำหนดค่าที่ยืดหยุ่น**: ปรับแต่งความกว้าง แอนิเมชัน และการเปลี่ยน
- **การออกแบบที่ตอบสนอง**: ทำงานได้ดีบนขนาดหน้าจอต่างๆ
- **การเข้าถึง**: ออกแบบด้วยการนำทางด้วยแป้นพิมพ์และโปรแกรมอ่านหน้าจอ

::: warning สำคัญ
คอมโพเนนต์ `StackingSidepanel` ออกแบบมาเพื่อทำงานกับแผงด้านข้างที่วางตำแหน่งด้านขวาเท่านั้น ตรวจสอบให้แน่ใจว่าแผงด้านข้างทั้งหมดภายในแผงด้านข้างแบบซ้อนถูกวางตำแหน่งด้านขวาและมีพร็อพส์ `is-stacking` ตั้งค่าเป็น `true`
:::

## การใช้งานพื้นฐาน

<spr-button @click="stackingSidepanel?.showPanel('sidepanel-1')">แสดงแผง 1</spr-button>
<span class="spr-body-md">แผงที่ใช้งานอยู่: {{ activePanelText }}</span>

<spr-stacking-sidepanel ref="stacking-sidepanel" v-model:stack="activePanel" @update:stack="activePanelsHandler">
<template #sidepanel-1>
<spr-sidepanel
size="sm"
:position="'right'"
:is-stacking="true"
header-title="แผงด้านข้าง 1"
@close="stackingSidepanel?.hidePanel('sidepanel-1')" >

<div class="spr-p-size-spacing-2xs">
<spr-button @click="stackingSidepanel?.showPanel('sidepanel-2')">แสดงแผง 2</spr-button>
</div>
</spr-sidepanel>
</template>
<template #sidepanel-2>
<spr-sidepanel
size="md"
:position="'right'"
:is-stacking="true"
header-title="แผงด้านข้าง 2"
@close="stackingSidepanel?.hidePanel('sidepanel-2')" >
<div class="spr-p-size-spacing-2xs">
<spr-button @click="stackingSidepanel?.showPanel('sidepanel-3')">แสดงแผง 3</spr-button>
</div>
</spr-sidepanel>
</template>
<template #sidepanel-3>
<spr-sidepanel
size="lg"
:position="'right'"
:is-stacking="true"
header-title="แผงด้านข้าง 3"
@close="stackingSidepanel?.hidePanel('sidepanel-3')" >
<div class="spr-p-size-spacing-2xs">
<spr-button @click="stackingSidepanel?.hidePanel('sidepanel-3')">ปิดแผง 3</spr-button>
</div>
</spr-sidepanel>
</template>
</spr-stacking-sidepanel>

```vue{6,7,53}
<template>
  <spr-button @click="stackingSidepanel?.showPanel('sidepanel-1')">แสดงแผง 1</spr-button>
  <span class="spr-body-md">แผงที่ใช้งานอยู่: {{ activePanelText }}</span>

  <spr-stacking-sidepanel ref="stacking-sidepanel" v-model:stack="activePanel" @update:stack="activePanelsHandler">
    <template #sidepanel-1> <!-- แผงด้านข้างแบบซ้อนใช้สล็อตที่มีชื่อที่กำหนดเอง ตรวจสอบให้แน่ใจว่าชื่อสล็อตไม่ซ้ำกัน -->
      <!-- แผงด้านข้างแบบซ้อนรองรับเฉพาะแผงด้านข้างที่วางตำแหน่งด้านขวาเท่านั้น นอกจากนี้ ให้ตั้งค่า `is-stacking` เป็น true -->
      <spr-sidepanel
        size="sm"
        position="right"
        :is-stacking="true"
        header-title="แผงด้านข้าง 1"
        @close="stackingSidepanel?.hidePanel('sidepanel-1')"
      >
        <div class="spr-p-size-spacing-2xs">
          <spr-button @click="stackingSidepanel?.showPanel('sidepanel-2')">แสดงแผง 2</spr-button>
        </div>
      </spr-sidepanel>
    </template>
    <template #sidepanel-2>
      <spr-sidepanel
        size="md"
        position="right"
        :is-stacking="true"
        header-title="แผงด้านข้าง 2"
        @close="stackingSidepanel?.hidePanel('sidepanel-2')"
      >
        <div class="spr-p-size-spacing-2xs">
          <spr-button @click="stackingSidepanel?.showPanel('sidepanel-3')">แสดงแผง 3</spr-button>
        </div>
      </spr-sidepanel>
    </template>
    <template #sidepanel-3>
      <spr-sidepanel
        size="lg"
        position="right"
        :is-stacking="true"
        header-title="แผงด้านข้าง 3"
        @close="stackingSidepanel?.hidePanel('sidepanel-3')"
      >
        <div class="spr-p-size-spacing-2xs">
          <spr-button @click="stackingSidepanel?.hidePanel('sidepanel-3')">ปิดแผง 3</spr-button>
        </div>
      </spr-sidepanel>
    </template>
  </spr-stacking-sidepanel>
</template>

<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue';

const activePanel = ref<string[]>([]);
const stackingSidepanel = useTemplateRef("stacking-sidepanel"); // ใช้การอ้างอิงคอมโพเนนต์เพื่อเข้าถึงเมธอดที่เปิดเผย

const activePanelText = ref("ไม่มี");
const activePanelsHandler = (panel: string[]) => {
  activePanelText.value = panel.length > 0 ? panel.join(', ') : 'ไม่มี';
}
</script>
```

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
      <td><code>stack</code></td>
      <td>อาร์เรย์ของชื่อแผงที่ใช้งานอยู่ ใช้กับ v-model:stack สำหรับการผูกสองทาง</td>
      <td>string[]</td>
      <td>[]</td>
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
      <td><code>update:stack</code></td>
      <td>ปล่อยออกมาทุกครั้งที่กองแผงเปลี่ยนแปลง</td>
      <td><code>(panels: string[])</code></td>
    </tr>
  </tbody>
</table>

### เมธอดที่เปิดเผย

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
      <td><code>showPanel</code></td>
      <td>แสดงแผงตามชื่อสล็อต</td>
      <td><code>(name: string)</code></td>
    </tr>
    <tr>
      <td><code>hidePanel</code></td>
      <td>ซ่อนแผงตามชื่อสล็อต</td>
      <td><code>(name: string)</code></td>
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
      <td><em>สล็อตที่มีชื่อ</em></td>
      <td>แต่ละแผงจะแสดงในสล็อตที่มีชื่อ ใช้ไวยากรณ์ <code>&lt;template #panelName&gt;</code> เพื่อกำหนดเนื้อหาสำหรับแต่ละแผง ตรวจสอบให้แน่ใจว่าชื่อสล็อตไม่ซ้ำกันเพื่อหลีกเลี่ยงความขัดแย้ง</td>
    </tr>
  </tbody>
</table>

## แนวทางปฏิบัติที่ดีที่สุด

<table>
  <thead>
    <tr>
      <th>แนวทาง</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>รักษาลำดับชั้นบริบท</td>
      <td>ออกแบบแผงเพื่อแสดงลำดับชั้นข้อมูลที่ชัดเจน โดยแต่ละแผงใหม่จะเปิดเผยเนื้อหาที่ละเอียดหรือเฉพาะเจาะจงมากขึ้น</td>
    </tr>
    <tr>
      <td>ขนาดแผงที่สอดคล้องกัน</td>
      <td>พิจารณาใช้ขนาดแผงที่สอดคล้องกันหรือความก้าวหน้าทางตรรกะของขนาด (เช่น แคบไปกว้าง) เพื่อรักษาความกลมกลืนทางภาพ</td>
    </tr>
    <tr>
      <td>เส้นทางการนำทางที่ชัดเจน</td>
      <td>ให้วิธีที่ชัดเจนในการนำทางระหว่างแผง เช่น ปุ่ม "กลับ" หรือ breadcrumb</td>
    </tr>
    <tr>
      <td>จำกัดความลึกของกอง</td>
      <td>เพื่อป้องกันการเลื่อนแนวนอนที่มากเกินไป จำกัดจำนวนแผงที่เปิดพร้อมกันไว้ที่ 3-4 แผงสูงสุด</td>
    </tr>
    <tr>
      <td>การพึ่งพาผลแผง</td>
      <td>เมื่อแผงหลักถูกปิด พิจารณาว่าผลแผงย่อยควรปิดโดยอัตโนมัติหรือไม่เพื่อรักษาความสัมพันธ์ทางตรรกะ</td>
    </tr>
    <tr>
      <td>การพิจารณาประสิทธิภาพ</td>
      <td>สำหรับเนื้อหาแผงที่ซับซ้อน ใช้การโหลดแบบ lazy หรือการแสดงผลแบบมีเงื่อนไขเพื่อปรับปรุงประสิทธิภาพ</td>
    </tr>
    <tr>
      <td>การออกแบบที่ตอบสนอง</td>
      <td>ตรวจสอบให้แน่ใจว่าพฤติกรรมการซ้อนทำงานได้ดีบนขนาดหน้าจอที่แตกต่างกัน โดยอาจยุบเป็นมุมมองแผงเดียวบนอุปกรณ์มือถือ</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue';
import SprButton from "@/components/button/button.vue"
import SprSidepanel from "@/components/sidepanel/sidepanel.vue";
import SprStackingSidepanel from "@/components/sidepanel/stacking-sidepanel/stacking-sidepanel.vue"

const activePanel = ref<string[]>([]);
const stackingSidepanel = useTemplateRef("stacking-sidepanel");
const activePanelText = ref("ไม่มี");
const activePanelsHandler = (panel: string[]) => {
  activePanelText.value = panel.length > 0 ? panel.join(', ') : 'ไม่มี';
}
</script>
