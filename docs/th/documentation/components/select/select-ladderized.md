---
title: เลือกแบบลำดับชั้น
descripttion: เลือกแบบลำดับชั้นสำหรับเลือกตัวเลือกที่จัดระเบียบในกลุ่มตามลำดับชั้น เหมาะสำหรับรายการขนาดใหญ่หรือที่มีหมวดหมู่ และรองรับระดับย่อยที่ซ้อนกันอย่างลึกและข้อความรองสำหรับแต่ละรายการ
outline: deep
---

# เลือกแบบลำดับชั้น

เลือกแบบลำดับชั้นสำหรับเลือกตัวเลือกที่จัดระเบียบในกลุ่มตามลำดับชั้น เหมาะสำหรับรายการขนาดใหญ่หรือที่มีหมวดหมู่ และรองรับระดับย่อยที่ซ้อนกันอย่างลึกและข้อความรองสำหรับแต่ละรายการ

## การใช้งานพื้นฐาน

<div class="spr-grid spr-gap-4">
  <spr-select-ladderized
    id="select-ladderized-basic"
    v-model="laderrizedSelectModel.ladderizedSelectBasic"
    :options="options"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
  />

  <code class="spr-font-medium">
    V-Model: {{ laderrizedSelectModel.ladderizedSelectBasic  }}
  </code>
</div>

```vue
<template>
  <spr-select-ladderized
    id="select-ladderized-basic"
    v-model="laderrizedSelectModel"
    :options="options"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const laderrizedSelectModel = ref([]);

const options = ref([
  {
    text: 'เสือ',
    value: 'tiger',
    subtext: 'เสียงคำรามแห่งป่า',
  },
  {
    text: 'สิงโต',
    value: 'lion',
    subtext: 'ราชาแห่งป่า',
    sublevel: [
      {
        text: 'ลูกสิงโต',
        value: 'cub',
        subtext: 'สิงโตหนุ่ม',
        sublevel: [
          { text: 'ลูกสิงโต 1', value: 'cub1' },
          { text: 'ลูกสิงโต 2', value: 'cub2' },
        ],
      },
      {
        text: 'สมาชิกฝูง',
        value: 'pride-member',
        subtext: 'สมาชิกของฝูงสิงโต',
      },
    ],
  },
  {
    text: 'ช้าง',
    value: 'elephant',
    subtext: 'สัตว์บกที่ใหญ่ที่สุด',
    sublevel: [
      {
        text: 'ลูกช้าง',
        value: 'calf',
        subtext: 'ช้างหนุ่ม',
      },
    ],
  },
  {
    text: 'ยีราฟ',
    value: 'giraffe',
    subtext: 'สัตว์บกที่สูงที่สุดที่ยังมีชีวิตอยู่',
    sublevel: [
      {
        text: 'ลูกยีราฟ',
        value: 'giraffe-calf',
        subtext: 'ยีราฟหนุ่ม',
      },
      {
        text: 'ยีราฟโต',
        value: 'giraffe-adult',
        subtext: 'ยีราฟที่โตเต็มวัย',
      },
    ],
  },
  {
    text: 'ม้าลาย',
    value: 'zebra',
    subtext: 'ขึ้นชื่อเรื่องลายดำขาวที่โดดเด่น',
    sublevel: [
      {
        text: 'ลูกม้าลาย',
        value: 'zebra-foal',
        subtext: 'ม้าลายหนุ่ม',
      },
      {
        text: 'แม่ม้าลาย',
        value: 'zebra-mare',
        subtext: 'ม้าลายเพศเมียโต',
      },
    ],
  },
  {
    text: 'มด',
    value: 'ant',
    subtext: 'แมลงสังคมที่มีการจัดระเบียบสูง',
    sublevel: [
      {
        text: 'อาณานิคม',
        value: 'ant-colony',
        subtext: 'ชุมชนมดทั้งหมด',
        sublevel: [
          {
            text: 'ห้องราชินี',
            value: 'queen-chamber',
            subtext: 'ที่ที่ราชินีอาศัยอยู่',
            sublevel: [
              {
                text: 'มดราชินี',
                value: 'queen-ant',
                subtext: 'เพศเมียที่สืบพันธุ์',
                sublevel: [
                  {
                    text: 'ผู้วางไข่',
                    value: 'egg-layer',
                    subtext: 'บทบาทหลักของราชินี',
                    sublevel: [
                      {
                        text: 'ไข่ใหม่',
                        value: 'new-eggs',
                        subtext: 'ไข่ที่เพิ่งวาง',
                      },
                      {
                        text: 'ตัวอ่อนกำลังพัฒนา',
                        value: 'developing-larvae',
                        subtext: 'ไข่ที่กำลังเติบโตเป็นมด',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            text: 'ส่วนของผู้ทำงาน',
            value: 'worker-section',
            subtext: 'มดทำงานดำเนินการที่นี่',
            sublevel: [
              {
                text: 'ผู้หาอาหาร',
                value: 'foragers',
                subtext: 'รวบรวมอาหาร',
              },
              {
                text: 'พยาบาล',
                value: 'nurses',
                subtext: 'ดูแลตัวอ่อน',
              },
            ],
          },
          {
            text: 'ป้อมทหาร',
            value: 'soldier-post',
            subtext: 'ยามเฝ้าของอาณานิคม',
          },
        ],
      },
    ],
  },
]);
</script>
```

ตัวเลือกสามารถมีระดับย่อยที่ซ้อนกันได้ ซึ่งอนุญาตให้มีลำดับชั้นที่ซับซ้อน แต่ละรายการของ `sublevel` สามารถมีระดับย่อยเพิ่มเติมได้เอง รองรับการซ้อนกันไม่สิ้นสุด แต่ละรายการสามารถมี `text`, `value`, และ `subtext` ที่เป็นตัวเลือกสำหรับข้อมูลเพิ่มเติม

นี่คือโครงสร้าง JSON พื้นฐานของตัวเลือก:

```json
[
  {
    "text": <ข้อความ>,
    "value": <ค่า>,
    "subtext": <ข้อความรอง>,
    "sublevel": [
      {
        "text": <ข้อความ>,
        "value": <ค่า>,
        "subtext": <ข้อความรอง>,
        "sublevel": [
          {
            "text": <ข้อความ>,
            "value": <ค่า>,
            "subtext": <ข้อความรอง>,
            "sublevel": [...]
          },
        ]
      },
      ...
    ]
  }
  ...
]
```

## ตัวเลือกที่เลือกไว้ล่วงหน้า

เพื่อเลือกตัวเลือกไว้ล่วงหน้าในเลือกแบบลำดับชั้น ค่าของโมเดลควรเป็นอาร์เรย์ที่แสดงถึงเส้นทางไปยังรายการตามลำดับชั้น ตัวอย่างเช่น:

```js
['lion', 'cub', 'cub1'];
```

1. ค่าแรกคือตัวเลือกหลัก (`lion`)
2. ค่าที่สองคือตัวเลือกย่อยของ `lion` (`cub`)
3. ค่าที่สามคือตัวเลือกย่อยของ `cub` (`cub1`)

<div class="spr-grid spr-gap-4">
  <spr-select-ladderized
    id="select-ladderized-preselected"
    v-model="laderrizedSelectModel.ladderizedSelectPreSelected"
    :options="options"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
  />

  <code class="spr-font-medium">
    V-Model: {{ laderrizedSelectModel.ladderizedSelectPreSelected  }}
  </code>
</div>

## ตัวคั่นข้อความ

คุณสามารถปรับแต่งตัวคั่นระหว่างค่าในข้อความป้อนข้อมูลแบบลำดับชั้นได้โดยส่งพร็อพส์ `text-seperator` ตัวคั่นเริ่มต้นคือ ' > '.

<div class="spr-grid spr-gap-4">
   <spr-select-ladderized
    id="select-ladderized-text-seperator1"
    v-model="laderrizedSelectModel.ladderizedSelectTextSeperator1"
    :options="options"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
  />
  <spr-select-ladderized
    id="select-ladderized-text-seperator2"
    v-model="laderrizedSelectModel.ladderizedSelectTextSeperator2"
    :options="options"
    text-seperator=", "
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
  />
</div>

```vue
<template>
  <spr-select-ladderized
    id="select-ladderized-text-seperator1"
    v-model="laderrizedSelectModel"
    :options="options"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
  />

  <spr-select-ladderized
    id="select-ladderized-text-seperator2"
    v-model="laderrizedSelectModel"
    :options="options"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    text-seperator=", "
  />
</template>
```

## เพิ่มข้อความนำหน้า

คุณสามารถเพิ่มข้อความนำหน้าในข้อความป้อนข้อมูลแบบลำดับชั้นได้โดยส่งพร็อพส์ `prepend-text`

<div class="spr-grid spr-gap-4">
   <spr-select-ladderized
    id="select-ladderized-prepend-text"
    v-model="laderrizedSelectModel.ladderizedSelectPrependText"
    :options="options"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    prepend-text
  />

  <code class="spr-font-medium">
    V-Model: {{ laderrizedSelectModel.ladderizedSelectPrependText  }}
  </code>
</div>

```vue
<template>
  <spr-select-ladderized
    id="select-ladderized-prepend-text"
    v-model="laderrizedSelectModel"
    :options="options"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    prepend-text
  />
</template>
```

## ค้นหา

เพื่อเปิดใช้งานการค้นหาผ่านตัวเลือก ให้ตั้งค่าพร็อพส์ `searchable-options` เป็น `true` สิ่งนี้จะอนุญาตให้ผู้ใช้กรองตัวเลือกโดยพิมพ์ในช่องป้อนข้อมูล

คุณยังสามารถส่งพร็อพส์ `searchable-options-placeholder` เพื่อปรับแต่งข้อความตัวยึดตำแหน่งสำหรับช่องป้อนการค้นหาได้

<div class="spr-grid spr-gap-4">
  <spr-select-ladderized
    id="select-ladderized-searchable-options"
    v-model="laderrizedSelectModel.ladderizedSelectSearchableOptions"
    :options="options"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    searchable-options
    searchable-options-placeholder="ค้นหาตัวเลือก..."
  />

  <code class="spr-font-medium">
    V-Model: {{ laderrizedSelectModel.ladderizedSelectSearchableOptions  }}
  </code>
</div>

```vue
<template>
  <spr-select-ladderized
    id="select-ladderized-searchable-options"
    v-model="laderrizedSelectModel"
    :options="options"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    searchable-options
  />
</template>
```

## การจัดตำแหน่ง

การจัดตำแหน่งหมายถึงตำแหน่งที่ป๊อปเปอร์ของการเลือกจะอยู่สัมพันธ์กับองค์ประกอบทริกเกอร์ (เช่น ปุ่ม ช่องป้อนข้อมูล) ส่งพร็อพส์ `placement` เพื่อแก้ไขการจัดตำแหน่งของป๊อปเปอร์ของการเลือก

ตัวเลือกการจัดตำแหน่งที่มีอยู่คือ: `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, และ `left-end`

การจัดตำแหน่งเริ่มต้นคือ `bottom`

<div class="spr-grid spr-gap-4">
  <div class="spr-flex spr-gap-4">
    <spr-select-ladderized
      id="select-ladderized-placement-auto"
      v-model="laderrizedSelectModel.ladderizedSelectPlacements"
      label="อัตโนมัติ"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="auto"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="select-ladderized-placement-auto-start"
      v-model="laderrizedSelectModel.ladderizedSelectPlacements"
      label="อัตโนมัติเริ่มต้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="auto-start"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="select-ladderized-placement-auto-end"
      v-model="laderrizedSelectModel.ladderizedSelectPlacements"
      label="อัตโนมัติสิ้นสุด"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="auto-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-ladderized
      id="select-ladderized-placement-top"
      v-model="laderrizedSelectModel.ladderizedSelectPlacements"
      label="บน"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="top"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="select-ladderized-placement-top-start"
      v-model="laderrizedSelectModel.ladderizedSelectPlacements"
      label="บนเริ่มต้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="top-start"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="select-ladderized-placement-top-end"
      v-model="laderrizedSelectModel.ladderizedSelectPlacements"
      label="บนสิ้นสุด"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="top-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-ladderized
      id="select-ladderized-placement-right"
      v-model="laderrizedSelectModel.ladderizedSelectPlacements"
      label="ขวา"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="right"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="select-ladderized-placement-right-start"
      v-model="laderrizedSelectModel.ladderizedSelectPlacements"
      label="ขวาเริ่มต้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="right-start"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="select-ladderized-placement-right-end"
      v-model="laderrizedSelectModel.ladderizedSelectPlacements"
      label="ขวาสิ้นสุด"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="right-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-ladderized
      id="select-ladderized-placement-bottom"
      v-model="laderrizedSelectModel.ladderizedSelectPlacements"
      label="ล่าง"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="bottom"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="select-ladderized-placement-bottom-start"
      v-model="laderrizedSelectModel.ladderizedSelectPlacements"
      label="ล่างเริ่มต้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="bottom-start"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="select-ladderized-placement-bottom-end"
      v-model="laderrizedSelectModel.ladderizedSelectPlacements"
      label="ล่างสิ้นสุด"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="bottom-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-ladderized
      id="select-ladderized-placement-left"
      v-model="laderrizedSelectModel.ladderizedSelectPlacements"
      label="ซ้าย"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="left"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="select-ladderized-placement-left-start"
      v-model="laderrizedSelectModel.ladderizedSelectPlacements"
      label="ซ้ายเริ่มต้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="left-start"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="select-ladderized-placement-left-end"
      v-model="laderrizedSelectModel.ladderizedSelectPlacements"
      label="ซ้ายสิ้นสุด"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="left-end"
      popper-width="200px"
    />
  </div>
</div>

## ล้างได้

เพื่ออนุญาตให้ผู้ใช้ล้างค่าที่เลือก ให้ตั้งค่าพร็อพส์ `clearable` เป็น `true` สิ่งนี้จะแสดงไอคอนล้าง (x) ข้างค่าที่เลือก ซึ่งสามารถคลิกเพื่อรีเซ็ตการเลือก

<div class="spr-grid spr-gap-4">
  <spr-select-ladderized
    id="select-ladderized-clearable"
    v-model="laderrizedSelectModel.ladderizedSelectClearable"
    :options="options"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    clearable
  />

  <code class="spr-font-medium">
    V-Model: {{ laderrizedSelectModel.ladderizedSelectClearable  }}
  </code>
</div>

```vue
<template>
  <spr-select-ladderized
    id="select-ladderized-clearable"
    v-model="laderrizedSelectModel"
    :options="options"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    clearable
  />
</template>
```

## ความกว้างและความกว้างป๊อปเปอร์

คุณสามารถแก้ไขความกว้างของคอมโพเนนต์เลือกได้สองวิธี: โดยการปรับความกว้างของตัวครอบการเลือกหรือโดยการเปลี่ยนความกว้างของป๊อปเปอร์ของการเลือก

`Width` - ความกว้างโดยรวมขององค์ประกอบครอบทั้งหมดและองค์ประกอบป๊อปเปอร์

`Popper Width` - ความกว้างขององค์ประกอบป๊อปเปอร์เท่านั้น

<div>
  <spr-select-ladderized
    id="select-ladderized-width"
    v-model="laderrizedSelectModel.ladderizedSelectWidth"
    :options="options"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    width="50%"
    popper-width="200px"
  />
</div>

```vue
<template>
  <spr-select-ladderized
    id="select-ladderized-width"
    v-model="laderrizedSelectModel"
    :options="options"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    width="50%"
    popper-width="200px"
  />
</template>
```

## กลยุทธ์ป๊อปเปอร์

กลยุทธ์ป๊อปเปอร์ใช้เป็นหลักเมื่อทำงานกับองค์ประกอบเช่นโมดอล มันช่วยควบคุมพฤติกรรมการจัดตำแหน่งของป๊อปเปอร์ กลยุทธ์ช่วยให้องค์ประกอบป๊อปเปอร์ถูกจัดตำแหน่งแบบไดนามิกตามวิวพอร์ต องค์ประกอบอ้างอิง หรือปัจจัยอื่นๆ เช่น การเลื่อนหรือการปรับขนาด

โดยค่าเริ่มต้น กลยุทธ์ป๊อปเปอร์ถูกตั้งค่าเป็น `absolute` ซึ่งจัดตำแหน่งองค์ประกอบป๊อปเปอร์สัมพันธ์กับบรรพบุรุษที่จัดตำแหน่งที่ใกล้ที่สุด (โดยปกติคือองค์ประกอบ body) อย่างไรก็ตาม คุณสามารถเปลี่ยน `strategy` เป็น `fixed` ซึ่งจัดตำแหน่งองค์ประกอบป๊อปเปอร์สัมพันธ์กับวิวพอร์ต เพื่อให้แน่ใจว่ามันยังคงอยู่ในตำแหน่งเดิมแม้ว่าจะเลื่อนหน้าเว็บ

ส่งพร็อพส์ `popper-strategy` เพื่อเปลี่ยนพฤติกรรมตำแหน่งของป๊อปเปอร์

::: info สิ่งสำคัญที่ต้องทราบ:
อย่าลืมส่งพร็อพส์ `wrapperPosition` เพื่อแทนที่ตำแหน่ง `relative` เป็น `initial`
:::

<spr-button tone="success" @click="modalModel = true">เปิดโมดอล</spr-button>

<spr-modal v-model="modalModel" title="เลือกด้วยโมดอล">
  <spr-select-ladderized
    id="select-ladderized-popper-strategy"
    v-model="laderrizedSelectModel.ladderizedSelectStrategy"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    :options="options"
    popper-strategy="fixed"
    wrapper-position="initial"
  />
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</spr-modal>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">เปิดโมดอล</spr-button>

  <spr-modal v-model="modalModel" title="เลือกด้วยโมดอล">
    <spr-select-ladderized
      id="select-ladderized-popper-strategy"
      v-model="laderrizedSelectModel"
      label="เลือกแบบลำดับชั้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      popper-strategy="fixed"
      wrapper-position="initial"
    />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
  </spr-modal>
</template>
```

คุณยังสามารถใช้พร็อพส์ `popper-container` เพื่อระบุคอนเทนเนอร์ที่กำหนดเองสำหรับองค์ประกอบป๊อปเปอร์ได้ สิ่งนี้มีประโยชน์เมื่อคุณต้องการจำกัดบริบทการจัดตำแหน่งของป๊อปเปอร์ให้กับองค์ประกอบเฉพาะภายในแอปพลิเคชันของคุณ

เนื่องจากป๊อปเปอร์ถูกส่งไปยังคอนเทนเนอร์อื่น พร็อพส์ `popper-width` จะไม่ทำงานตามที่คาดหวัง เพื่อตั้งค่าความกว้างที่กำหนดเองสำหรับป๊อปเปอร์ในกรณีนี้ คุณสามารถใช้สไตล์ที่กำหนดเองหรือคลาส CSS เพื่อกำหนดความกว้างที่ต้องการ

<div>
  <spr-dropdown
    id="dropdown-custom-popper"
    width="300px"
    :triggers="['hover', 'click']"
    :popper-triggers="['hover', 'click']"
    popper-width="500px"
    :auto-hide="false"
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>ป๊อปเปอร์ที่กำหนดเองด้วยดร็อปดาวน์</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
    <template #popper>
      <spr-select-ladderized
        id="select-ladderized-dropdown-custom-popper"
        v-model="laderrizedSelectModel.ladderizedSelectStrategy"
        label="เลือกแบบลำดับชั้น"
        placeholder="เลือกตัวเลือก"
        :options="options"
        popper-strategy="fixed"
        popper-container="#dropdown-custom-popper"
        wrapper-position="initial"
      />
    </template>
  </spr-dropdown>
</div>

```vue
<template>
  <spr-dropdown
    id="dropdown-custom-popper"
    width="300px"
    :triggers="['hover', 'click']"
    :popper-triggers="['hover', 'click']"
    popper-width="500px"
    :auto-hide="false"
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>ป๊อปเปอร์ที่กำหนดเองด้วยดร็อปดาวน์</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
    <template #popper>
      <spr-select-ladderized
        id="select-ladderized-dropdown-custom-popper"
        v-model="laderrizedSelectModel"
        label="เลือกแบบลำดับชั้น"
        placeholder="เลือกตัวเลือก"
        :options="options"
        popper-strategy="fixed"
        popper-container="#dropdown-custom-popper"
        wrapper-position="initial"
      />
    </template>
  </spr-dropdown>
</template>
```

## สถานะใช้งานอยู่ ปิดใช้งาน และข้อผิดพลาด

สำหรับคำแนะนำในการใช้สถานะข้อผิดพลาด สถานะใช้งานอยู่ และสถานะปิดใช้งานในคอมโพเนนต์เลือก คุณสามารถดูเอกสารสำหรับคอมโพเนนต์ข้อความป้อนข้อมูลได้เนื่องจากแนวทางนั้นคล้ายกัน ดู [Input Form](/documentation/components/input.html) สำหรับคำแนะนำโดยละเอียด

### สถานะใช้งานอยู่

<div>
  <spr-select-ladderized
    id="select-ladderized-active-state"
    v-model="laderrizedSelectModel.ladderizedSelectActiveState"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    :options="options"
    active
  />
</div>

```vue
<template>
  <spr-select-ladderized
    id="select-ladderized-active-state"
    v-model="laderrizedSelectModel"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    :options="options"
    active
  />
</template>
```

### สถานะปิดใช้งาน

<div>
  <spr-select-ladderized
    id="select-ladderized-disabled-state"
    v-model="laderrizedSelectModel.ladderizedSelectDisabledState"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    :options="options"
    disabled
  />
</div>

```vue
<template>
  <spr-select-ladderized
    id="select-ladderized-disabled-state"
    v-model="laderrizedSelectModel"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    :options="options"
    disabled
  />
</template>
```

### สถานะข้อผิดพลาด

<div>
  <spr-select-ladderized
    id="select-ladderized-error-state"
    v-model="laderrizedSelectModel.ladderizedSelectErrorState"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    :options="options"
    error
  />
</div>

```vue
<template>
  <spr-select-ladderized
    id="select-ladderized-error-state"
    v-model="laderrizedSelectModel"
    label="เลือกแบบลำดับชั้น"
    placeholder="เลือกตัวเลือก"
    :options="options"
    error
  />
</template>
```

## ข้อมูลอ้างอิง API

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
      <td><code>id</code></td>
      <td>ID ที่ไม่ซ้ำสำหรับการเลือก จำเป็นเพื่อผูกป๊อปเปอร์ภายในการเลือก</td>
      <td>String</td>
      <td>—</td>
    </tr>
    <tr>
      <td><code>v-model</code></td>
      <td>
        การผูกค่าของการเลือก ยอมรับอาร์เรย์ของสตริง
      </td>
      <td>Array</td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td><code>options</code></td>
      <td>รายการตัวเลือก (พร้อมระดับย่อยที่เป็นตัวเลือกสำหรับลำดับชั้น)</td>
      <td>Array</td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>ป้ายกำกับสำหรับช่องป้อนเลือก</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>supporting-label</code></td>
      <td>ข้อความข้างป้ายกำกับที่มีสไตล์สนับสนุน</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>input-loader</code></td>
      <td>แสดงสปินเนอร์การโหลดภายในช่องป้อนเลือกขณะดึงตัวเลือกแบบอะซิงโครนัส (รวมถึงระดับย่อยที่ซ้อนกัน) มีประโยชน์สำหรับการโหลดข้อมูลลำดับชั้นที่ขับเคลื่อนด้วย API</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>ตัวยึดตำแหน่งช่องป้อน</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>text-seperator</code></td>
      <td>ปรับแต่งตัวคั่นระหว่างค่าในข้อความป้อนข้อมูลแบบลำดับชั้น</td>
      <td>String</td>
      <td><code>' > '</code></td>
    </tr>
    <tr>
      <td><code>prepend-text</code></td>
      <td>เพิ่มข้อความนำหน้าในข้อความป้อนข้อมูลแบบลำดับชั้น</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>helper-text</code></td>
      <td>ข้อความช่วยเหลือใต้ช่องป้อน</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>helper-icon</code></td>
      <td>ไอคอนสำหรับข้อความช่วยเหลือ</td>
      <td>String</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td><code>display-helper</code></td>
      <td>แสดงข้อความช่วยเหลือ</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>clearable</code></td>
      <td>แสดงไอคอนล้าง (x) เพื่อลบค่าที่เลือก</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>placement</code></td>
      <td>การจัดตำแหน่งป๊อปเปอร์ (เช่น 'bottom', 'top', 'auto', ฯลฯ)</td>
      <td>String</td>
      <td><code>bottom</code></td>
    </tr>
    <tr>
      <td><code>triggers</code></td>
      <td>อาร์เรย์ของอีเวนต์ที่จะทริกเกอร์ดร็อปดาวน์ให้เปิด</td>
      <td>'click' | 'hover' | 'focus' | 'touch'[]</td>
      <td>['click']</td>
    </tr>
    <tr>
      <td><code>popper-triggers</code></td>
      <td>อาร์เรย์ของอีเวนต์ที่จะทริกเกอร์เมนูดร็อปดาวน์ (องค์ประกอบป๊อปเปอร์) ให้เปิด</td>
      <td>'click' | 'hover' | 'focus' | 'touch'[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>auto-hide</code></td>
      <td>เมื่อเป็นจริง จะซ่อนดร็อปดาวน์โดยอัตโนมัติเมื่อคลิกภายนอก</td>
      <td>Array</td>
      <td>true</td>
    </tr>
    <tr>
      <td><code>wrapper-position</code></td>
      <td>CSS position ของตัวครอบ</td>
      <td>String</td>
      <td><code>relative</code></td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>ความกว้างของตัวครอบการเลือก</td>
      <td>String</td>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <td><code>popper-width</code></td>
      <td>ความกว้างของป๊อปเปอร์การเลือก</td>
      <td>String</td>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <td><code>popper-strategy</code></td>
      <td>กลยุทธ์การจัดตำแหน่งป๊อปเปอร์ ('absolute' หรือ 'fixed')</td>
      <td>String</td>
      <td><code>absolute</code></td>
    </tr>
    <tr>
      <td><code>popper-container</code></td>
      <td>ซีเลกเตอร์ CSS หรือ HTMLElement เพื่อระบุคอนเทนเนอร์ที่กำหนดเองสำหรับองค์ประกอบป๊อปเปอร์</td>
      <td>String | HTMLElement</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>ปิดใช้งานการเลือก</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>remove-current-level-in-back-label</code></td>
      <td>ซ่อนระดับปัจจุบันในป้ายกลับ</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>searchable-options</code></td>
      <td>เปิดใช้งานช่องป้อนการค้นหาเพื่อกรองตัวเลือก</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>searchable-options-placeholder</code></td>
      <td>ตัวยึดตำแหน่งของตัวเลือกการค้นหา</td>
      <td>String</td>
      <td><code>'Search...'</code></td>
    </tr>
    <tr>
      <td><code>writableInputText</code></td>
      <td>เปิดใช้งานข้อความป้อนข้อมูลให้เขียนได้ สิ่งนี้ไม่ส่งผลต่อฟังก์ชันการค้นหา</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>options-loader</code></td>
      <td>แสดงโครงกระดูกการโหลดภายในป๊อปเปอร์ มีประโยชน์ขณะดึงตัวเลือกแบบอะซิงโครนัส (เช่น การค้นหา API)</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>infinite-scroll-loader</code></td>
      <td>แสดงสปินเนอร์การโหลดที่ด้านล่างของรายการเมื่อทริกเกอร์เลื่อนไม่สิ้นสุด มีประโยชน์เมื่อโหลดรายการเพิ่มเติมเมื่อผู้ใช้เลื่อนถึงส่วนท้ายของรายการ</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## อีเวนต์

<table>
  <thead>
    <tr>
      <th>อีเวนต์</th>
      <th>เพย์โหลด</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>@update:modelValue</code></td>
      <td>Array | String | Number | Object</td>
      <td>ปล่อยออกมาทุกครั้งที่การเลือกเปลี่ยนแปลง เพย์โหลดคือค่าที่เลือกใหม่</td>
    </tr>
    <tr>
      <td>@popper-state</td>
      <td>Boolean</td>
      <td>อีเวนต์ที่ปล่อยออกมาทุกครั้งที่คุณเปิดหรือปิดป๊อปเปอร์</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprSelectLadderized from "@/components/select/select-ladderized/select-ladderized.vue";
import SprInput from "@/components/input/input.vue";
import SprButton from "@/components/button/button.vue";
import SprModal from "@/components/modal/modal.vue"
import SprDropdown from "@/components/dropdown/dropdown.vue";

const laderrizedSelectModel = ref({
  ladderizedSelectBasic: [],
  ladderizedSelectSearchableOptions: [],
  ladderizedSelectPreSelected: [ "lion", "cub", "cub1" ],
  ladderizedSelectTextSeperator1: [],
  ladderizedSelectTextSeperator2: [],
  ladderizedSelectPrependText: [],
  ladderizedSelectPlacements: [],
  ladderizedSelectClearable: [],
  ladderizedSelectWidth: [],
  ladderizedSelectStrategy: [],
  ladderizedSelectActiveState: [],
  ladderizedSelectDisabledState: [],
  ladderizedSelectErrorState: [],
});

const options = ref([
  {
    text: 'เสือ',
    value: 'tiger',
    subtext: 'เสียงคำรามแห่งป่า',
  },
  {
    text: 'สิงโต',
    value: 'lion',
    subtext: 'ราชาแห่งป่า',
    sublevel: [
      {
        text: 'ลูกสิงโต',
        value: 'cub',
        subtext: 'สิงโตหนุ่ม',
        sublevel: [
          { text: 'ลูกสิงโต 1', value: 'cub1' },
          { text: 'ลูกสิงโต 2', value: 'cub2' },
          { text: 'ลูกสิงโต 3', value: 'cub3' },
          { text: 'ลูกสิงโต 4', value: 'cub4' },
          { text: 'ลูกสิงโต 5', value: 'cub5' },
          { text: 'ลูกสิงโต 6', value: 'cub6' },
          { text: 'ลูกสิงโต 7', value: 'cub7' },
          { text: 'ลูกสิงโต 8', value: 'cub8' },
          { text: 'ลูกสิงโต 9', value: 'cub9' },
          { text: 'ลูกสิงโต 10', value: 'cub10' },
        ],
      },
      {
        text: 'สมาชิกฝูง',
        value: 'pride-member',
        subtext: 'สมาชิกของฝูงสิงโต',
      },
      {
        text: 'นักล่า',
        value: 'hunter',
        subtext: 'สิงโตที่ล่าเหยื่อ',
      },
      {
        text: 'ผู้พิทักษ์',
        value: 'guardian',
        subtext: 'ปกป้องฝูง',
      },
      {
        text: 'ผู้เฒ่า',
        value: 'elder',
        subtext: 'สิงโตที่แก่กว่า มีประสบการณ์',
      },
      {
        text: 'นักเดินทาง',
        value: 'nomad',
        subtext: 'เดินทางอย่างอิสระ',
      },
      {
        text: 'นักสอดแนม',
        value: 'scout',
        subtext: 'สำรวจดินแดนใหม่',
      },
      {
        text: 'ผู้ชายตัวเอก',
        value: 'alpha-male',
        subtext: 'ผู้ชายที่โดดเด่นในฝูง',
      },
      {
        text: 'มารดาผู้ยิ่งใหญ่',
        value: 'matriarch',
        subtext: 'ผู้หญิงผู้นำ',
      },
      {
        text: 'พี่น้อง',
        value: 'sibling',
        subtext: 'พี่ชายหรือน้องสาวสิงโต',
      },
    ],
  },
  {
    text: 'ช้าง',
    value: 'elephant',
    subtext: 'สัตว์บกที่ใหญ่ที่สุด',
    sublevel: [
      {
        text: 'ลูกช้าง',
        value: 'calf',
        subtext: 'ช้างหนุ่ม',
      },
    ],
  },
  {
    text: 'ยีราฟ',
    value: 'giraffe',
    subtext: 'สัตว์บกที่สูงที่สุดที่ยังมีชีวิตอยู่',
    sublevel: [
      {
        text: 'ลูกยีราฟ',
        value: 'giraffe-calf',
        subtext: 'ยีราฟหนุ่ม',
      },
      {
        text: 'ยีราฟโต',
        value: 'giraffe-adult',
        subtext: 'ยีราฟที่โตเต็มวัย',
      },
    ],
  },
  {
    text: 'ม้าลาย',
    value: 'zebra',
    subtext: 'ขึ้นชื่อเรื่องลายดำขาวที่โดดเด่น',
    sublevel: [
      {
        text: 'ลูกม้าลาย',
        value: 'zebra-foal',
        subtext: 'ม้าลายหนุ่ม',
      },
      {
        text: 'แม่ม้าลาย',
        value: 'zebra-mare',
        subtext: 'ม้าลายเพศเมียโต',
      },
    ],
  },
  {
    text: 'มด',
    value: 'ant',
    subtext: 'แมลงสังคมที่มีการจัดระเบียบสูง',
    sublevel: [
      {
        text: 'อาณานิคม',
        value: 'ant-colony',
        subtext: 'ชุมชนมดทั้งหมด',
        sublevel: [
          {
            text: 'ห้องราชินี',
            value: 'queen-chamber',
            subtext: 'ที่ที่ราชินีอาศัยอยู่',
            sublevel: [
              {
                text: 'มดราชินี',
                value: 'queen-ant',
                subtext: 'เพศเมียที่สืบพันธุ์',
                sublevel: [
                  {
                    text: 'ผู้วางไข่',
                    value: 'egg-layer',
                    subtext: 'บทบาทหลักของราชินี',
                    sublevel: [
                      { text: 'ไข่ใหม่', value: 'new-eggs', subtext: 'ไข่ที่เพิ่งวาง' },
                      { text: 'ตัวอ่อนกำลังพัฒนา', value: 'developing-larvae', subtext: 'ไข่ที่กำลังเติบโตเป็นมด' },
                      { text: 'ตัวอ่อนระยะที่ 3', value: 'larvae-3', subtext: 'ตัวอ่อนระยะกลาง' },
                      { text: 'ตัวอ่อนระยะที่ 4', value: 'larvae-4', subtext: 'ระยะลึกซึ้ง' },
                      { text: 'ตัวหนอน', value: 'pupae', subtext: 'พร้อมที่จะเป็นมด' },
                      { text: 'มดที่กำลังเกิด', value: 'emerging-ants', subtext: 'ทะลุออกจากลูกนอน' },
                      { text: 'ผู้ทำงานคนแรก', value: 'first-workers', subtext: 'กลุ่มผู้ช่วยคนแรก' },
                      { text: 'ผู้ทำงานรอง', value: 'secondary-workers', subtext: 'กลุ่มสนับสนุน' },
                      { text: 'ยามราชการ', value: 'royal-guards', subtext: 'ปกป้องราชินี' },
                      { text: 'ผู้ดูแลลูก', value: 'brood-carers', subtext: 'ดูแลลูกที่กำลังพัฒนา' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            text: 'ส่วนของผู้ทำงาน',
            value: 'worker-section',
            subtext: 'มดทำงานดำเนินการที่นี่',
            sublevel: [
              { text: 'ผู้หาอาหาร', value: 'foragers', subtext: 'รวบรวมอาหาร' },
              { text: 'พยาบาล', value: 'nurses', subtext: 'ดูแลตัวอ่อน' },
            ],
          },
          {
            text: 'ป้อมทหาร',
            value: 'soldier-post',
            subtext: 'ยามเฝ้าของอาณานิคม',
          },
        ],
      },
    ],
  },

  // ✅ 10 รายการหลักเพิ่มเติม
  {
    text: 'เสือดาว',
    value: 'leopard',
    subtext: 'นักล่าที่ซ่อนตัวแห่งป่า',
  },
  {
    text: 'ชีต้า',
    value: 'cheetah',
    subtext: 'สัตว์บกที่เร็วที่สุด',
  },
  {
    text: 'ฮิปโป',
    value: 'hippo',
    subtext: 'สัตว์กึ่งน้ำกึ่งบกขนาดใหญ่',
  },
  {
    text: 'แรด',
    value: 'rhino',
    subtext: 'สัตว์กินพืชมีเขา',
  },
  {
    text: 'ไฮยีนา',
    value: 'hyena',
    subtext: 'นักกินซากที่มีขากรรไกรแข็งแรง',
  },
  {
    text: 'จระเข้',
    value: 'crocodile',
    subtext: 'นักล่าอันดับต้นในน้ำ',
  },
  {
    text: 'นกกระจอกเทศ',
    value: 'ostrich',
    subtext: 'นกที่ใหญ่ที่สุดที่ยังมีชีวิตอยู่',
  },
  {
    text: 'เมียร์แคท',
    value: 'meerkat',
    subtext: 'แมงมุมขนาดเล็กที่ขึ้นชื่อเรื่องยืนตรง',
  },
  {
    text: 'ฮอร์สวอร์ธอก',
    value: 'warthog',
    subtext: 'หมูป่ามีงา',
  },
  {
    text: 'บาบูน',
    value: 'baboons',
    subtext: 'ลิงสังคมแห่งทุ่งหญ้า',
  },
]);

const modalModel = ref(false);
</script>
