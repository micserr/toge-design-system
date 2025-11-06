---
title: เครื่องมือแสดงคำแนะนำ
descripttion: คอมโพเนนต์เครื่องมือแสดงคำแนะนำเป็นคอมโพเนนต์ที่เรียบง่ายที่แสดงคำแนะนำเมื่อเลื่อนเมาส์ไปวาง
outline: deep
---

# เครื่องมือแสดงคำแนะนำ

คอมโพเนนต์เครื่องมือแสดงคำแนะนำเป็นคอมโพเนนต์ที่เรียบง่ายที่แสดงคำแนะนำเมื่อเลื่อนเมาส์ไปวาง

## การใช้งานพื้นฐาน

<div class="spr-grid spr-gap-3">
  <spr-tooltip text="นี่คือข้อความคำแนะนำของฉัน">
    <spr-button tone="success">เลื่อนเมาส์ไปวางเพื่อดูคำแนะนำ</spr-button>
  </spr-tooltip>
  <spr-tooltip text="นี่คือข้อความคำแนะนำของฉัน">
    <spr-chips class="spr-w-full" label="ชิปส์" />
  </spr-tooltip>
  <spr-tooltip text="นี่คือข้อความคำแนะนำของฉัน">
    <spr-lozenge class="spr-w-full" label="โลเซนจ์" />
  </spr-tooltip>
  <spr-tooltip text="นี่คือข้อความคำแนะนำของฉัน">
    <spr-input v-model="inputValueBasic" placeholder="ป้อนข้อความของคุณ" class="spr-w-full" />
  </spr-tooltip>
</div>

```vue
<spr-tooltip text="นี่คือข้อความคำแนะนำของฉัน">
    <!-- คอมโพเนนต์ของคุณที่นี่ -->
</spr-tooltip>
```

## ข้อความที่กำหนดเอง

โดยการเพิ่ม prop `text` ให้กับคอมโพเนนต์เครื่องมือแสดงคำแนะนำ คุณสามารถปรับแต่งข้อความที่จะแสดงในคำแนะนำได้

<div class="spr-grid spr-gap-3">
  <spr-tooltip text="นี่คือข้อความคำแนะนำที่กำหนดเองของฉัน">
    <spr-button tone="success">เลื่อนเมาส์ไปวางเพื่อดูคำแนะนำ</spr-button>
  </spr-tooltip>
</div>

```vue
<spr-tooltip text="นี่คือข้อความคำแนะนำที่กำหนดเองของฉัน">
    <!-- คอมโพเนนต์ของคุณที่นี่ -->
</spr-tooltip>
```

## ข้อความที่กำหนดเองโดยใช้ HTML

คุณยังสามารถใช้ HTML เพื่อปรับแต่งข้อความที่ต้องการแสดงในคำแนะนำเพิ่มเติมโดยใช้เทมเพลตที่มีชื่อ `#popper-content`

::: info สิ่งสำคัญที่ต้องทราบ:
หากทั้ง prop `text` และเทมเพลต `#popper-content` ถูกใช้ prop `text` จะแสดงก่อนเสมอ ก่อน `#popper-content`
:::

<spr-tooltip text="นี่คือข้อความคำแนะนำที่กำหนดเองของฉัน">
  <template #popper-content>
    <h5>นี่คือหัวข้อตัวอย่าง</h5>
  </template>
  <spr-button tone="success">เลื่อนเมาส์ไปวางเพื่อดูคำแนะนำ</spr-button>
</spr-tooltip>

```vue
<spr-tooltip text="นี่คือข้อความคำแนะนำที่กำหนดเองของฉัน">
  <template #popper-content>
    <h5>นี่คือหัวข้อตัวอย่าง</h5>
  </template>

  <!-- คอมโพเนนต์ของคุณที่นี่ -->
</spr-tooltip>
```

## ตำแหน่ง

<div class="spr-flex spr-flex-col spr-gap-3">
  <div class="spr-flex spr-gap-3">
    <spr-tooltip class="!spr-w-full" text="คำแนะนำของฉัน" placement="top">
      <spr-button class="spr-w-full" tone="success">ด้านบน</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="คำแนะนำของฉัน" placement="top-start">
      <spr-button class="spr-w-full" tone="success">ด้านบน เริ่ม</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="คำแนะนำของฉัน" placement="top-end">
      <spr-button class="spr-w-full" tone="success">ด้านบน สิ้นสุด</spr-button>
    </spr-tooltip>
  </div>
  <div class="spr-flex spr-gap-3">
    <spr-tooltip class="!spr-w-full" text="คำแนะนำของฉัน" placement="bottom">
      <spr-button class="spr-w-full" tone="success">ด้านล่าง</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="คำแนะนำของฉัน" placement="bottom-start">
      <spr-button class="spr-w-full" tone="success">ด้านล่าง เริ่ม</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="คำแนะนำของฉัน" placement="bottom-end">
      <spr-button class="spr-w-full" tone="success">ด้านล่าง สิ้นสุด</spr-button>
    </spr-tooltip>
  </div>
  <div class="spr-flex spr-gap-3">
    <spr-tooltip class="!spr-w-full" text="คำแนะนำของฉัน" placement="left">
      <spr-button class="spr-w-full" tone="success">ซ้าย</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="คำแนะนำของฉัน" placement="left-start">
      <spr-button class="spr-w-full" tone="success">ซ้าย เริ่ม</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="คำแนะนำของฉัน" placement="left-end">
      <spr-button class="spr-w-full" tone="success">ซ้าย สิ้นสุด</spr-button>
    </spr-tooltip>
  </div>
  <div class="spr-flex spr-gap-3">
    <spr-tooltip class="!spr-w-full" text="คำแนะนำของฉัน" placement="right">
      <spr-button class="spr-w-full" tone="success">ขวา</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="คำแนะนำของฉัน" placement="right-start">
      <spr-button class="spr-w-full" tone="success">ขวา เริ่ม</spr-button>
    </spr-tooltip>
    <spr-tooltip class="!spr-w-full" text="คำแนะนำของฉัน" placement="right-end">
      <spr-button class="spr-w-full" tone="success">ขวา สิ้นสุด</spr-button>
    </spr-tooltip>
  </div>
</div>

```vue
<spr-tooltip text="คำแนะนำของฉัน" placement="top-start">
    <!-- คอมโพเนนต์ของคุณที่นี่ -->
</spr-tooltip>
```

## ระยะห่าง

คุณสามารถตั้งค่าระยะห่างของคำแนะนำจากองค์ประกอบเป้าหมายโดยใช้ prop `distance` ระยะห่างเริ่มต้นคือ `8px` คุณสามารถตั้งค่าเป็นค่าที่ต้องการได้

<div class="spr-flex spr-gap-3">
  <spr-tooltip text="คำแนะนำของฉัน" :distance="16">
    <spr-button tone="success">ระยะห่าง 16px</spr-button>
  </spr-tooltip>
  <spr-tooltip text="คำแนะนำของฉัน" :distance="32">
    <spr-button tone="success">ระยะห่าง 32px</spr-button>
  </spr-tooltip>
  <spr-tooltip text="คำแนะนำของฉัน" :distance="64">
    <spr-button tone="success">ระยะห่าง 64px</spr-button>
  </spr-tooltip>
</div>

```vue
<spr-tooltip text="คำแนะนำของฉัน" :distance="16">
    <!-- คอมโพเนนต์ของคุณที่นี่ -->
</spr-tooltip>
```

## ความกว้าง

คุณสามารถตั้งค่าความกว้างของคำแนะนำโดยใช้ prop `fit-content` โดยค่าเริ่มต้น คำแนะนำจะใช้ความกว้างของเนื้อหาเท่านั้น เมื่อ prop `fit-content` ถูกตั้งค่าเป็น false คำแนะนำจะใช้ความกว้างเต็มของคอนเทนเนอร์หลัก

### การใช้ความกว้างสูงสุด

คุณสามารถเปิดใช้งานหรือปิดใช้งานความกว้างสูงสุดของคำแนะนำโดยใช้ prop `has-max-width` โดยค่าเริ่มต้น ความกว้างสูงสุดจะเปิดใช้งาน เมื่อ prop `has-max-width` ถูกตั้งค่าเป็น true คำแนะนำจะมีความกว้างสูงสุด `280px`

<div class="spr-grid spr-gap-3">
  <spr-tooltip placement="top">
    <template #popper-content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia,
        ante sit amet condimentum varius, metus enim luctus magna, ut vehicula ipsum quam vel odio.
      </p>
    </template>
    <spr-button tone="success">มีความกว้างสูงสุด</spr-button>
  </spr-tooltip>
  <spr-tooltip placement="top" :has-max-width="false">
    <template #popper-content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia,
        ante sit amet condimentum varius, metus enim luctus magna, ut vehicula ipsum quam vel odio.
      </p>
    </template>
    <spr-button tone="success">ไม่มีควาามกว้างสูงสุด</spr-button>
  </spr-tooltip>
</div>

```vue
<spr-tooltip>
  <template #popper-content>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia,
      ante sit amet condimentum varius, metus enim luctus magna, ut vehicula ipsum quam vel odio.
    </p>
  </template>

  <!-- คอมโพเนนต์ของคุณที่นี่ -->
</spr-tooltip>

<spr-tooltip>
  <template #popper-content :has-max-width="false">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia,
      ante sit amet condimentum varius, metus enim luctus magna, ut vehicula ipsum quam vel odio.
    </p>
  </template>

  <!-- คอมโพเนนต์ของคุณที่นี่ -->
</spr-tooltip>
```

## การเปลี่ยนข้อความคำแนะนำแบบไดนามิก

คุณสามารถเปลี่ยนข้อความคำแนะนำแบบไดนามิกโดยใช้ prop `text` คำแนะนำจะอัปเดตโดยอัตโนมัติเมื่อ prop `text` เปลี่ยน

<div>
  <spr-tooltip
    :text="tootltipText"
    :fit-content="false"
    show-triggers="hover"
    hide-triggers="hover"
  >
    <spr-input v-model="inputValueDynamic" placeholder="ป้อนข้อความของคุณ" class="spr-w-full" />
  </spr-tooltip>
</div>

```vue
<template>
  <spr-tooltip :text="tootltipText" :fit-content="false" show-triggers="hover" hide-triggers="hover">
    <spr-input v-model="inputValueDynamic" placeholder="ป้อนข้อความของคุณ" class="spr-w-full" />
  </spr-tooltip>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const inputValueDynamic = ref('');
const tootltipText = ref('นี่คือข้อความคำแนะนำของฉัน');

watch(inputValueDynamic, (newValue) => {
  tootltipText.value = newValue ? newValue : '-';
});
</script>
```

## ทริกเกอร์

คุณสามารถปรับแต่งทริกเกอร์สำหรับแสดงและซ่อนคำแนะนำโดยใช้ prop `show-triggers` และ `hide-triggers` โดยค่าเริ่มต้น คำแนะนำจะแสดงเมื่อเลื่อนเมาส์ไปวางและซ่อนเมื่อเมาส์ออก คุณสามารถตั้งค่า prop เหล่านี้เป็นเหตุการณ์ทริกเกอร์ที่ถูกต้องใดก็ได้

เหตุการณ์ทริกเกอร์ที่เป็นไปได้รวมถึง `focus`, `click`, `hover`, และ `touch` คุณยังสามารถรวมทริกเกอร์เพื่อแสดงคำแนะนำในเหตุการณ์หนึ่งและซ่อนในอีกเหตุการณ์หนึ่ง

<div class="spr-flex spr-gap-6">
  <spr-tooltip
    text="คำแนะนำนี้แสดงเมื่อโฟกัส"
    show-triggers="focus"
    hide-triggers="focus"
  >
    <spr-button tone="success">ทริกเกอร์โฟกัส</spr-button>
  </spr-tooltip>
  <spr-tooltip
    text="คำแนะนำนี้แสดงเมื่อคลิก"
    show-triggers="click"
    hide-triggers="click"
  >
    <spr-button tone="success">ทริกเกอร์คลิก</spr-button>
  </spr-tooltip>
  <spr-tooltip
    text="คำแนะนำนี้แสดงเมื่อเลื่อนเมาส์"
    show-triggers="hover"
    hide-triggers="hover"
  >
    <spr-button tone="success">ทริกเกอร์เลื่อนเมาส์</spr-button>
  </spr-tooltip>
</div>

คุณยังสามารถรวมทริกเกอร์ เช่น เพื่อแสดงคำแนะนำเมื่อคลิกและซ่อนเมื่อเลื่อนเมาส์:

<div class="spr-flex spr-gap-3">
  <spr-tooltip
    text="คำแนะนำนี้แสดงเมื่อคลิก"
    :show-triggers="['click', 'hover']"
    :hide-triggers="['click', 'hover']"
  >
    <spr-button tone="success">ทริกเกอร์คลิก + เลื่อนเมาส์</spr-button>
  </spr-tooltip>
</div>

```vue
<template>
  <div class="spr-flex spr-gap-3">
    <spr-tooltip text="คำแนะนำนี้แสดงเมื่อโฟกัส" show-triggers="focus" hide-triggers="blur">
      <spr-button tone="success">ทริกเกอร์โฟกัส</spr-button>
    </spr-tooltip>
    <spr-tooltip text="คำแนะนำนี้แสดงเมื่อคลิก" show-triggers="click" hide-triggers="click">
      <spr-button tone="success">ทริกเกอร์คลิก</spr-button>
    </spr-tooltip>
    <spr-tooltip text="คำแนะนำนี้แสดงเมื่อเลื่อนเมาส์" show-triggers="hover" hide-triggers="hover">
      <spr-button tone="success">ทริกเกอร์เลื่อนเมาส์</spr-button>
    </spr-tooltip>
  </div>

  <div class="spr-flex spr-gap-3">
    <spr-tooltip text="คำแนะนำนี้แสดงเมื่อคลิก" :show-triggers="['click', 'hover']" :hide-triggers="['click', 'hover']">
      <spr-button tone="success">ทริกเกอร์คลิก + เลื่อนเมาส์</spr-button>
    </spr-tooltip>
  </div>
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
      <th>ค่าที่ใช้ได้</th>
      <th>ค่าเริ่มต้น</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>text</td>
      <td>เนื้อหาที่จะแสดงภายในคำแนะนำ สิ่งนี้สามารถเป็นสตริงข้อความธรรมดาหรือเนื้อหาที่ซับซ้อนมากขึ้น</td>
      <td>string</td>
      <td>สตริงข้อความใดก็ได้</td>
      <td>''</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>กำหนดตำแหน่งของคำแนะนำสัมพันธ์กับองค์ประกอบเป้าหมาย ตำแหน่งสามารถอยู่ด้านบน ล่าง ซ้าย หรือขวา พร้อมตัวปรับแต่งเพิ่มเติมสำหรับการจัดตำแหน่งเริ่มและสิ้นสุด</td>
      <td>string</td>
      <td>'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'</td>
      <td>'top'</td>
    </tr>
    <tr>
      <td>distance</td>
      <td>ระยะห่างเป็นพิกเซลระหว่างคำแนะนำและองค์ประกอบเป้าหมาย การเพิ่มค่านี้จะสร้างพื้นที่มากขึ้นระหว่างคำแนะนำและเป้าหมาย</td>
      <td>number</td>
      <td>ตัวเลขบวกใดก็ได้</td>
      <td>6</td>
    </tr>
    <tr>
      <td>hasMaxWidth</td>
      <td>ควบคุมว่าคำแนะนำมีข้อจำกัดความกว้างสูงสุดหรือไม่ เมื่อเปิดใช้งาน คำแนะนำจะมีความกว้างสูงสุด 280px ซึ่งช่วยได้กับเนื้อหาที่ยาว เมื่อปิดใช้งาน ความกว้างคำแนะนำจะถูกกำหนดโดยเนื้อหา</td>
      <td>boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>fitContent</td>
      <td>กำหนดว่าความกว้างคำแนะนำควรพอดีกับเนื้อหาหรือใช้ความกว้างเต็มของคอนเทนเนอร์หลัก เมื่อเป็น true ความกว้างคำแนะนำจะปรับให้พอดีกับเนื้อหา เมื่อเป็น false คำแนะนำจะใช้ความกว้างเต็มที่ใช้ได้</td>
      <td>boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>showTriggers</td>
      <td>ระบุเหตุการณ์ที่จะทริกเกอร์ให้คำแนะนำแสดง สามารถเป็นสตริงเหตุการณ์เดียวหรืออาร์เรย์ของสตริงเหตุการณ์ ทริกเกอร์ทั่วไปรวมถึง hover (mouseenter), focus, click และ touch</td>
      <td>string | string[]</td>
      <td>'hover', 'focus', 'click', 'touch', หรืออาร์เรย์เช่น ['hover', 'focus']</td>
      <td>'hover'</td>
    </tr>
    <tr>
      <td>hideTriggers</td>
      <td>ระบุเหตุการณ์ที่จะทริกเกอร์ให้คำแนะนำซ่อน สามารถเป็นสตริงเหตุการณ์เดียวหรืออาร์เรย์ของสตริงเหตุการณ์ มักตั้งค่าให้ตรงกับ showTriggers เพื่อพฤติกรรมที่สอดคล้องกัน</td>
      <td>string | string[]</td>
      <td>'hover', 'focus', 'click', 'touch', หรืออาร์เรย์เช่น ['hover', 'focus']</td>
      <td>'hover'</td>
    </tr>
    <tr>
      <td>autoHide</td>
      <td>เมื่อเปิดใช้งาน คำแนะนำจะซ่อนโดยอัตโนมัติเมื่อเคอร์เซอร์ออกจากพื้นที่คำแนะนำ สิ่งนี้มีประโยชน์สำหรับคำแนะนำที่ต้องการการโต้ตอบแต่ควรซ่อนเมื่อไม่จำเป็นอีกต่อไป</td>
      <td>boolean</td>
      <td>true, false</td>
      <td>false</td>
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
      <td>เนื้อหาที่จะทริกเกอร์คำแนะนำ สิ่งนี้สามารถเป็นคอมโพเนนต์หรือองค์ประกอบ HTML ใดก็ได้ที่ควรแสดงคำแนะนำเมื่อมีการโต้ตอบ</td>
    </tr>
    <tr>
      <td>popper-content</td>
      <td>เนื้อหาที่กำหนดเองเพื่อแสดงภายในคำแนะนำ ช่องนี้ช่วยให้เนื้อหาคำแนะนำที่ซับซ้อนมากขึ้นนอกเหนือจากข้อความธรรมดา รวมถึงองค์ประกอบและคอมโพเนนต์ HTML หากทั้ง prop <code>text</code> และช่องนี้ได้รับ prop <code>text</code> จะแสดงก่อน ตามด้วยเนื้อหาของช่องนี้</td>
    </tr>
  </tbody>
</table>

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref, watch } from "vue";

import SprTooltip from "@/components/tooltip/tooltip.vue";
import SprButton from "@/components/button/button.vue";
import SprChips from "@/components/chips/chips.vue";
import SprLozenge from "@/components/lozenge/lozenge.vue"
import SprInput from "@/components/input/input.vue";
import SprLogo from "@/components/logo/logo.vue";

const inputValueBasic = ref("");
const inputValueDynamic = ref("");

const tootltipText = ref("นี่คือข้อความคำแนะนำของฉัน");

watch(inputValueDynamic, (newValue) => {
  tootltipText.value = newValue ? newValue : '-';
});
</script>
