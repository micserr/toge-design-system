---
title: เลือกหลายรายการ
descripttion: คอมโพเนนต์เลือกหลายรายการอนุญาตให้ผู้ใช้เลือกหลายตัวเลือกจากรายการเลือก
outline: deep
---

# เลือกหลายรายการ

คอมโพเนนต์เลือกหลายรายการอนุญาตให้ผู้ใช้เลือกหลายตัวเลือกจากรายการเลือก สิ่งนี้มีประโยชน์สำหรับสถานการณ์ที่ผู้ใช้ต้องการเลือกมากกว่าหนึ่งรายการจากชุดตัวเลือกที่กำหนดไว้ล่วงหน้า

## การใช้งานพื้นฐาน

<div class="spr-grid spr-gap-4">
  <spr-select-multiple
    id="select-multiple-basic"
    v-model="multiSelectModel.multiSelectBasic"
    label="ป้ายกำกับเลือกหลายรายการ"
    placeholder="เลือกตัวเลือก"
    :options="options"
  />

  <code class="spr-font-medium">
    V-Model: {{ multiSelectModel.multiSelectBasic }}
  </code>
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-basic"
    v-model="multiSelectBasic"
    label="ป้ายกำกับเลือกหลายรายการ"
    placeholder="เลือกตัวเลือก"
    :options="options"
  />

  <script lang="ts" setup>
    import { ref } from 'vue';

    const multiSelectBasic = ref([]); // ใช้อาร์เรย์สำหรับการเลือกหลายรายการ
    const options = ref([
      { text: 'Apple', value: 'apple' },
      { text: 'Banana', value: 'banana' },
      { text: 'Cherry', value: 'cherry' },
      { text: 'Date', value: 'date' },
      { text: 'Elderberry', value: 'elderberry' },
      { text: 'Fig', value: 'fig' },
      { text: 'Grape', value: 'grape' },
      { text: 'Nectarine', value: 'nectarine' },
      { text: 'Orange', value: 'orange' },
      { text: 'Papaya', value: 'papaya' },
      { text: '89 Quince', value: '50' },
    ]);
  </script>
</template>
```

## แบบชิป

<div class="spr-grid spr-gap-4">
  <spr-select-multiple
    id="select-multiple-chipped"
    v-model="multiSelectModel.multiSelectChipped"
    label="ป้ายกำกับเลือกหลายรายการ"
    placeholder="เลือกตัวเลือก"
    :options="options"
    chipped
  />

  <code class="spr-font-medium">
    V-Model: {{ multiSelectModel.multiSelectChipped }}
  </code>
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-chipped"
    v-model="multiSelectChipped"
    label="ป้ายกำกับเลือกหลายรายการ"
    placeholder="เลือกตัวเลือก"
    :options="options"
  />
</template>
```

## จัดกลุ่มรายการตาม

คุณสามารถจัดกลุ่มรายการตามลำดับ 'default', 'A-Z' หรือ 'Z-A' โดยส่งพร็อพส์ `group-items-by` และระบุประเภทการจัดกลุ่มที่ต้องการ

<div class="spr-grid spr-gap-4">
  <spr-select-multiple
    id="select-multiple-grouped-items-by"
    v-model="multiSelectModel.multiSelectGroupedItemsBy"
    label="ป้ายกำกับเลือกหลายรายการ"
    placeholder="เลือกตัวเลือก"
    :options="options"
    group-items-by="A-Z"
  />
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <spr-select-multiple
      id="select-multiple-grouped-items-by"
      v-model="multiSelectGroupedItemsBy"
      label="ป้ายกำกับเลือกหลายรายการ"
      placeholder="เลือกตัวเลือก"
      :options="options"
      group-items-by="A-Z"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const multiSelectGroupedItemsBy = ref([]); // ใช้อาร์เรย์สำหรับการเลือกหลายรายการ
const options = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
]);
</script>
```

## ตัวเลือกที่เลือกไว้ล่วงหน้า

ตัวเลือกที่เลือกไว้ล่วงหน้านี้เป็นตัวเลือกที่ถูกเลือกโดยอัตโนมัติเมื่อแสดงการเลือกครั้งแรก สำหรับการเลือกหลายรายการ v-model ควรเป็นอาร์เรย์ของค่า (สตริง ตัวเลข หรือออบเจ็กต์) ที่ตรงกับฟิลด์ `value` ของตัวเลือกของคุณ

<div class="spr-grid spr-gap-4">
  <spr-select-multiple
    id="select-multiple-preselected-items"
    v-model="multiSelectModel.multiSelectPreSelectedItems"
    label="เลือกผลไม้"
    placeholder="เลือกผลไม้อย่างน้อยหนึ่งชนิด"
    :options="options"
    group-items-by="A-Z"
    text-field="text"
    value-field="value"
  />

  <code class="spr-font-medium">
    V-Model: {{ multiSelectModel.multiSelectPreSelectedItems ? multiSelectModel.multiSelectPreSelectedItems : `[]` }}
  </code>
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-preselected-items"
    v-model="multiSelectPreSelectedItems"
    label="เลือกผลไม้"
    placeholder="เลือกผลไม้อย่างน้อยหนึ่งชนิด"
    :options="options"
    group-items-by="A-Z"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// เลือกหลายรายการไว้ล่วงหน้าโดยส่งอาร์เรย์ของค่า
const multiSelectPreSelectedItems = ref(['100', 200, 'cherry']);
const options = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
  { text: 'Indian Fig', value: 'indian_fig' },
  { text: 'Jackfruit', value: 'jackfruit' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'One Hundred', value: '100' },
  { text: 'Two Hundred', value: 200 },
  { text: 'Lemon', value: 'lemon' },
  { text: 'Mango', value: 'mango' },
  { text: '300', value: '300' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
  { text: 'Raspberry', value: 'raspberry' },
  { text: 'Strawberry', value: 'strawberry' },
  { text: 'Tangerine', value: 'tangerine' },
  { text: 'Uva', value: 'uva' },
  { text: 'Vanilla', value: 'vanilla' },
  { text: 'Watermelon', value: 'watermelon' },
  { text: 'Xigua', value: 'xigua' },
  { text: 'Yunnan Hackberry', value: 'yunnan_hackberry' },
  { text: 'Zucchini', value: 'zucchini' },
  { text: 'Apricot', value: 'apricot' },
  { text: 'Blueberry', value: 'blueberry' },
  { text: 'Cantaloupe', value: 'cantaloupe' },
  { text: 'Dragonfruit', value: 'dragonfruit' },
  { text: 'Pineapple', value: 'pineapple' },
]);
</script>
```

คุณยังสามารถเลือกตัวเลือกไว้ล่วงหน้าด้วยอาร์เรย์ของออบเจ็กต์ได้หากตัวเลือกของคุณใช้ออบเจ็กต์เป็นค่า คอมโพเนนต์จะจับคู่โดยค่า หรือโดยการอ้างอิงออบเจ็กต์ตามที่ต้องการ

> **หมายเหตุ:**
>
> - หากคุณต้องการเริ่มต้นโดยไม่มีการเลือกใดๆ ให้ใช้อาร์เรย์ว่าง: `ref([])`
> - หากคุณต้องการเลือกตัวเลือกทั้งหมดไว้ล่วงหน้า ให้ใช้อาร์เรย์ทั้งหมดของค่าจากตัวเลือกของคุณ
> - คอมโพเนนต์จะถือว่าโมเดลเป็นอาร์เรย์สำหรับการเลือกหลายรายการเสมอ ดังนั้นการสลับและการเลือกไว้ล่วงหน้าจะทำงานตามที่คาดหวัง

## ค้นหา

คุณลักษณะการค้นหาช่วยให้ผู้ใช้กรองและค้นหาตัวเลือกเฉพาะภายในรายการเลือกได้อย่างรวดเร็วโดยพิมพ์คำค้นหา

- ใช้พร็อพส์ `searchable-options` เพื่อเปิดใช้งานช่องป้อนการค้นหาภายในคอมโพเนนต์เลือก

<div class="spr-grid spr-gap-4">
  <spr-select-multiple
    id="select-multiple-search"
    v-model="multiSelectModel.multiSelectSearch"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    searchable
  />

  <code class="spr-font-medium">
    V-Model: {{ multiSelectModel.multiSelectSearch ? multiSelectModel.multiSelectSearch : `[]` }}
  </code>
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-search"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    searchable
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const multiSelectModel = ref('');

const options = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
]);
</script>
```

คุณสามารถปิดใช้งานการค้นหาในเครื่องโดยส่งพร็อพส์ `disabled-local-search` สิ่งนี้มีประโยชน์เมื่อคุณต้องการจัดการการค้นหาผ่าน API เท่านั้น และไม่กรองตัวเลือกในเครื่อง

ใช้ `@searchString` emit เพื่อรับสตริงการค้นหาเมื่อผู้ใช้พิมพ์ในช่องป้อนการค้นหา สิ่งนี้ช่วยให้คุณจัดการตรรกะการค้นหาภายนอก เช่น การดึงตัวเลือกจาก API ตามคำค้นหา

<div class="spr-grid spr-gap-4">
  <spr-select-multiple
    id="select-multiple-search-disabled-local-search"
    v-model="multiSelectModel.multiSelectSearchDisabledLocalSearch"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    searchable
    disabled-local-search
  />

  <code class="spr-font-medium">
    V-Model: {{ multiSelectModel.multiSelectSearchDisabledLocalSearch ? multiSelectModel.multiSelectSearchDisabledLocalSearch : `[]` }}
  </code>
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-search-disabled-local-search"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    searchable
    disabled-local-search
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const multiSelectModel = ref('');

const options = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
]);
</script>
```

## การจัดตำแหน่ง

การจัดตำแหน่งหมายถึงตำแหน่งที่ป๊อปเปอร์ของการเลือกจะอยู่สัมพันธ์กับองค์ประกอบทริกเกอร์ (เช่น ปุ่ม ช่องป้อนข้อมูล) ส่งพร็อพส์ `placement` เพื่อแก้ไขการจัดตำแหน่งของป๊อปเปอร์ของการเลือก

ตัวเลือกการจัดตำแหน่งที่มีอยู่คือ: `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, และ `left-end`

การจัดตำแหน่งเริ่มต้นคือ `bottom`

<div class="spr-grid spr-gap-4">
  <div class="spr-flex spr-gap-4">
    <spr-select-multiple
      id="select-multiple-placement-auto"
      v-model="multiSelectModel.multiSelectPlacement"
      label="อัตโนมัติ"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="auto"
      popper-width="200px"
    />
    <spr-select-multiple
      id="select-multiple-placement-auto-start"
      v-model="multiSelectModel.multiSelectPlacement"
      label="อัตโนมัติเริ่มต้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="auto-start"
      popper-width="200px"
    />
    <spr-select-multiple
      id="select-multiple-placement-auto-end"
      v-model="multiSelectModel.multiSelectPlacement"
      label="อัตโนมัติสิ้นสุด"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="auto-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-multiple
      id="select-multiple-placement-top"
      v-model="multiSelectModel.multiSelectPlacement"
      label="บน"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="top"
      popper-width="200px"
    />
    <spr-select-multiple
      id="select-multiple-placement-top-start"
      v-model="multiSelectModel.multiSelectPlacement"
      label="บนเริ่มต้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="top-start"
      popper-width="200px"
    />
    <spr-select-multiple
      id="select-multiple-placement-top-end"
      v-model="multiSelectModel.multiSelectPlacement"
      label="บนสิ้นสุด"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="top-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-multiple
      id="select-multiple-placement-right"
      v-model="multiSelectModel.multiSelectPlacement"
      label="ขวา"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="right"
      popper-width="200px"
    />
    <spr-select-multiple
      id="select-multiple-placement-right-start"
      v-model="multiSelectModel.multiSelectPlacement"
      label="ขวาเริ่มต้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="right-start"
      popper-width="200px"
    />
    <spr-select-multiple
      id="select-multiple-placement-right-end"
      v-model="multiSelectModel.multiSelectPlacement"
      label="ขวาสิ้นสุด"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="right-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-multiple
      id="select-multiple-placement-bottom"
      v-model="multiSelectModel.multiSelectPlacement"
      label="ล่าง"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="bottom"
      popper-width="200px"
    />
    <spr-select-multiple
      id="select-multiple-placement-bottom-start"
      v-model="multiSelectModel.multiSelectPlacement"
      label="ล่างเริ่มต้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="bottom-start"
      popper-width="200px"
    />
    <spr-select-multiple
      id="select-multiple-placement-bottom-end"
      v-model="multiSelectModel.multiSelectPlacement"
      label="ล่างสิ้นสุด"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="bottom-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-multiple
      id="select-multiple-placement-left"
      v-model="multiSelectModel.multiSelectPlacement"
      label="ซ้าย"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="left"
      popper-width="200px"
    />
    <spr-select-multiple
      id="select-multiple-placement-left-start"
      v-model="multiSelectModel.multiSelectPlacement"
      label="ซ้ายเริ่มต้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="left-start"
      popper-width="200px"
    />
    <spr-select-multiple
      id="select-multiple-placement-left-end"
      v-model="multiSelectModel.multiSelectPlacement"
      label="ซ้ายสิ้นสุด"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="left-end"
      popper-width="200px"
    />
  </div>
</div>

## ล้างได้

คุณลักษณะล้างได้ช่วยให้ผู้ใช้ลบค่าที่เลือกออกจากช่องป้อนเลือกได้อย่างง่ายดาย สิ่งนี้มีประโยชน์อย่างยิ่งสำหรับแบบฟอร์มที่ผู้ใช้อาจต้องการรีเซ็ตการเลือกของตนโดยไม่ต้องเปิดการเลือก

<div class="spr-grid spr-gap-4">
  <spr-select-multiple
    id="select-multiple-clearable"
    v-model="multiSelectModel.multiSelectClearable"
    label="ป้ายกำกับเลือกหลายรายการ"
    placeholder="เลือกตัวเลือก"
    :options="options"
    clearable
  />

  <code class="spr-font-medium">
    V-Model: {{ multiSelectModel.multiSelectClearable ? multiSelectModel.multiSelectClearable : `""` }}
  </code>
</div>

## ความกว้างและความกว้างป๊อปเปอร์

คุณสามารถแก้ไขความกว้างของคอมโพเนนต์เลือกได้สองวิธี: โดยการปรับความกว้างของตัวครอบการเลือกหรือโดยการเปลี่ยนความกว้างของป๊อปเปอร์ของการเลือก

`Width` - ความกว้างโดยรวมขององค์ประกอบครอบทั้งหมดและองค์ประกอบป๊อปเปอร์

`Popper Width` - ความกว้างขององค์ประกอบป๊อปเปอร์เท่านั้น

<div>
  <spr-select-multiple
    id="select-multiple-width"
    v-model="multiSelectModel.multiSelectWidth"
    label="ป้ายกำกับเลือกหลายรายการ"
    placeholder="เลือกตัวเลือก"
    :options="options"
    width="50%"
    popper-width="200px"
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-width"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือกหลายรายการ"
    placeholder="เลือกตัวเลือก"
    :options="options"
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
   <spr-select-multiple
    id="select-multiple-popper-strategy"
    v-model="multiSelectModel.multiSelectStrategy"
    label="ป้ายกำกับเลือกหลายรายการ"
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
    <spr-select-multiple
      id="select-multiple-popper-strategy"
      v-model="multiSelectModel"
      label="ป้ายกำกับเลือกหลายรายการ"
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
      <spr-select-multiple
        id="select-multiple-dropdown-custom-popper"
        v-model="multiSelectModel.multiSelectStrategy"
        label="ป้ายกำกับเลือก"
        placeholder="Select an option"
        :options="options"
        popper-strategy="fixed"
        popper-container="#dropdown-custom-popper"
        wrapper-position="relative"
        placement="bottom"
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
      <spr-select-multiple
        id="select-multiple-dropdown-custom-popper"
        v-model="multiSelectModel"
        label="ป้ายกำกับเลือกหลายรายการ"
        placeholder="เลือกตัวเลือก"
        :options="options"
        popper-strategy="fixed"
        popper-container="#dropdown-custom-popper"
        wrapper-position="relative"
        placement="bottom"
      />
    </template>
  </spr-dropdown>
</template>
```

## สถานะใช้งานอยู่ ปิดใช้งาน และข้อผิดพลาด

สำหรับคำแนะนำในการใช้สถานะข้อผิดพลาด สถานะใช้งานอยู่ และสถานะปิดใช้งานในคอมโพเนนต์เลือก คุณสามารถดูเอกสารสำหรับคอมโพเนนต์ข้อความป้อนข้อมูลได้เนื่องจากแนวทางนั้นคล้ายกัน ดู [Input Form](/documentation/components/input.html) สำหรับคำแนะนำโดยละเอียด

### สถานะใช้งานอยู่

<div>
  <spr-select-multiple
    id="select-multiple-active-state"
    v-model="multiSelectModel.multiSelectActiveState"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    active
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-active-state"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    active
  />
</template>
```

### สถานะปิดใช้งาน

<div>
  <spr-select-multiple
    id="select-multiple-disabled-state"
    v-model="multiSelectModel.multiSelectDisabledState"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    disabled
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-disabled-state"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    disabled
  />
</template>
```

### สถานะข้อผิดพลาด

<div>
  <spr-select-multiple
    id="select-multiple-error-state"
    v-model="multiSelectModel.multiSelectErrorState"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    error
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-error-state"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    error
  />
</template>
```

## แสดงจำนวนที่เลือกเท่านั้น

โดยค่าเริ่มต้น เมื่อเลือกหลายรายการในคอมโพเนนต์ รายการที่เลือกจะแสดงเป็นข้อความหรือชิปภายในช่องป้อนข้อมูล อย่างไรก็ตาม คุณสามารถเลือกที่จะแสดงเฉพาะจำนวนของรายการที่เลือกแทนที่จะแสดงแต่ละรายการที่เลือกทีละรายการ

<div>
  <spr-select-multiple
    id="select-multiple-display-selected-count-only"
    v-model="multiSelectModel.multiSelectDisplaySelectedCountOnly"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    display-selected-count-only
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-display-selected-count-only"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    display-selected-count-only
  />
</template>
```

## แสดงรายการที่เลือกรายการในรายการ

คุณลักษณะแสดงรายการที่เลือกรายการในรายการช่วยให้คุณระบุภาพว่าตัวเลือกใดถูกเลือกในรายการดร็อปดาวน์ สิ่งนี้สามารถปรับปรุงประสบการณ์ผู้ใช้โดยให้คำติชมที่ชัดเจนเกี่ยวกับการเลือกของพวกเขา เพื่อเปิดใช้งานคุณลักษณะนี้ ให้ใช้พร็อพส์ `display-list-item-selected`

<div>
  <spr-select-multiple
    id="select-multiple-display-list-item-selected"
    v-model="multiSelectModel.multiSelectDisplayListItemSelected"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    searchable
    display-list-item-selected
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-display-list-item-selected"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    display-list-item-selected
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const multiSelectModel = ref('');

const options = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
]);
</script>
```

## ข้อความช่วยเหลือ

ข้อความช่วยเหลือเป็นป้ายข้อความใต้ช่องป้อนข้อมูลที่ให้ข้อมูลเพิ่มเติมเกี่ยวกับคำแนะนำ การจัดรูปแบบ คำติชมการตรวจสอบ ฯลฯ

เพื่อแสดงข้อความช่วยเหลือ ตั้งค่าพร็อพส์ `display-helper` เป็น `true` และเพิ่มพร็อพส์ `helper-text` ด้วยข้อความช่วยเหลือ คุณยังสามารถแทรกไอคอนด้วยพร็อพส์ `helper-icon` ได้ สิ่งนี้ใช้ไลบรารีไอคอน [Iconify](https://icon-sets.iconify.design/)

<div class="spr-grid spr-gap-8">
  <spr-select-multiple
    id="select-multiple-helper-message"
    v-model="multiSelectModel.multiSelectHelperMessage"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    helper-text="นี่คือข้อความช่วยเหลือ"
    display-helper
  />
  <spr-select-multiple
    id="select-multiple-helper-message-error"
    v-model="multiSelectModel.multiSelectHelperMessage"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    helper-text="นี่คือข้อความข้อผิดพลาด"
    helper-icon="ph:warning-circle-fill"
    display-helper
    error
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-helper-message"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    helper-text="นี่คือข้อความช่วยเหลือ"
    display-helper
  />

  <spr-select-multiple
    id="select-multiple-helper-message-error"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    helper-text="นี่คือข้อความข้อผิดพลาด"
    helper-icon="ph:warning-circle-fill"
    display-helper
    error
  />
</template>
```

หรือคุณสามารถใช้สล็อต `helperMessage` เพื่อแสดงข้อความช่วยเหลือที่กำหนดเอง

<div class="spr-grid spr-gap-8">
  <spr-select-multiple
    id="select-multiple-helper-message-slot"
    v-model="multiSelectModel.multiSelectHelperMessage"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    display-helper
  >
    <template #helperMessage>นี่คือข้อความช่วยเหลือ</template>
  </spr-select-multiple>
  <spr-select-multiple
    id="select-multiple-helper-message-slot-error"
    v-model="multiSelectModel.multiSelectHelperMessage"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    display-helper
    error
  >
    <template #helperMessage>
      <icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>นี่คือข้อความข้อผิดพลาด</span>
    </template>
  </spr-select-multiple>
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-helper-message-slot"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    display-helper
  >
    <template #helperMessage>นี่คือข้อความช่วยเหลือ</template>
  </spr-select-multiple>

  <spr-select-multiple
    id="select-multiple-helper-message-slot-error"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    display-helper
    error
  >
    <template #helperMessage>
      <icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>นี่คือข้อความข้อผิดพลาด</span>
    </template>
  </spr-select-multiple>
</template>
```

## ประเภทค่าที่รองรับ

คอมโพเนนต์ `spr-select-multiple` รองรับหลายประเภทค่า **สำหรับการเลือกหลายรายการ ให้ใช้อาร์เรย์สำหรับ `v-model` เสมอ** ไม่ว่าค่าของคุณจะเป็นสตริง ตัวเลข หรือออบเจ็กต์ คอมโพเนนต์จะปรับมาตรฐานค่าคุณค่าเดียวเป็นอาร์เรย์ภายใน แต่เป็นแนวทางปฏิบัติที่ดีที่สุดที่จะใช้อาร์เรย์ตั้งแต่แรก

### ค่าตัวอักษรหลายค่า

```vue
<template>
  <spr-select-multiple
    id="select-multiple-string"
    v-model="stringValues"
    label="เลือกผลไม้"
    placeholder="เลือกผลไม้"
    :options="stringOptions"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const stringValues = ref(['apple', 'banana']); // ใช้อาร์เรย์สำหรับการเลือกหลายรายการเสมอ

const stringOptions = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
]);
</script>
```

### ค่าตัวเลขหลายค่า

```vue
<template>
  <spr-select-multiple
    id="select-multiple-number"
    v-model="numberValues"
    label="เลือกตัวเลข"
    placeholder="เลือกตัวเลข"
    :options="numberOptions"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const numberValues = ref([42, 100]); // ใช้อาร์เรย์สำหรับการเลือกหลายรายการเสมอ

const numberOptions = ref([
  { text: '42', value: 42 },
  { text: '100', value: 100 },
  { text: '200', value: 200 },
]);
</script>
```

### ค่าออบเจ็กต์หลายค่า

```vue
<template>
  <spr-select-multiple
    id="select-multiple-object"
    v-model="selectedUsers"
    label="เลือกผู้ใช้"
    placeholder="เลือกผู้ใช้"
    :options="userList"
    text-field="name"
    value-field="id"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedUsers = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' },
]); // ใช้อาร์เรย์สำหรับการเลือกหลายรายการเสมอ

const userList = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' },
  { id: 3, name: 'Bob', role: 'Manager' },
]);
</script>
```

## ข้อความรองของรายการ

คุณลักษณะข้อความรองของรายการช่วยให้คุณแสดงข้อมูลเพิ่มเติมใต้ข้อความหลักของแต่ละตัวเลือกในรายการเลือก สิ่งนี้สามารถมีประโยชน์ในการให้บริบทหรือรายละเอียดเกี่ยวกับแต่ละตัวเลือก ใช้พร็อพส์ `subtext` ในอาร์เรย์ตัวเลือกเพื่อระบุข้อความรองสำหรับแต่ละตัวเลือก

<div>
  <spr-select-multiple
    id="select-multiple-item-subtext"
    v-model="multiSelectModel.multiSelectItemSubtext"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="optionsWithSubtext"
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-item-subtext"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="optionsWithSubtext"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const multiSelectModel = ref('');

const optionsWithSubtext = ref([
  { text: 'Apple', value: 'apple', subtext: 'ผลไม้สีแดงหวาน' },
  { text: 'Banana', value: 'banana', subtext: 'ผลไม้สีเหลืองยาว' },
  { text: 'Cherry', value: 'cherry', subtext: 'ผลไม้สีแดงเล็ก' },
  { text: 'Date', value: 'date', subtext: 'ผลไม้สีน้ำตาลหวาน' },
  { text: 'Elderberry', value: 'elderberry', subtext: 'ผลไม้สีม่วงเข้มเล็ก' },
]);
</script>
```

## ไอคอนรายการ

คุณลักษณะไอคอนรายการช่วยให้คุณแสดงไอคอนควบคู่กับข้อความของแต่ละตัวเลือกในรายการเลือก สิ่งนี้สามารถช่วยให้ผู้ใช้ระบุตัวเลือกได้อย่างรวดเร็วตามสัญญาณภาพ ใช้พร็อพส์ `icon` ในอาร์เรย์ตัวเลือกเพื่อระบุไอคอนสำหรับแต่ละตัวเลือก

ไอคอนใช้ไอคอน phosphor จาก [Iconify](https://icon-sets.iconify.design/)

<div>
  <spr-select-multiple
    id="select-multiple-item-icon"
    v-model="multiSelectModel.multiSelectItemIcon"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    item-icon="ph:alarm"
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-item-icon"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    item-icon="ph:alarm"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const multiSelectModel = ref('');

const options = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
]);
</script>
```

### ไอคอนรายการที่กำหนดเอง

คุณลักษณะไอคอนรายการที่กำหนดเองช่วยให้คุณแสดงไอคอนต่างๆ สำหรับแต่ละตัวเลือกในรายการเลือก สิ่งนี้มีประโยชน์ในการให้การแสดงภาพที่ไม่ซ้ำกันสำหรับแต่ละตัวเลือก เพิ่มพร็อพส์ `icon` ในอาร์เรย์ตัวเลือกเพื่อระบุไอคอนที่กำหนดเองสำหรับแต่ละตัวเลือก

<div>
  <spr-select-multiple
    id="select-multiple-item-custom-icon"
    v-model="multiSelectModel.multiSelectItemCustomIcon"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="optionsWithCustomIcon"
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-item-custom-icon"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="optionsWithCustomIcon"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const multiSelectModel = ref('');

const optionsWithCustomIcon = ref([
  { text: 'Acorn', value: 'acorn', icon: 'ph:acorn' },
  { text: 'Address Book', value: 'address book', icon: 'ph:address-book' },
  { text: 'Alarm', value: 'alarm', icon: 'ph:alarm' },
  { text: 'Angle', value: 'angle', icon: 'ph:angle' },
  { text: 'Apple Logo', value: 'apple logo', icon: 'ph:apple-logo' },
]);
</script>
```

## ลอซเซนจ์รายการ

คุณลักษณะลอซเซนจ์รายการช่วยให้คุณแสดงลอซเซนจ์ (ป้าย) ที่มีสีควบคู่กับข้อความของแต่ละตัวเลือกในรายการเลือก สิ่งนี้สามารถมีประโยชน์ในการจัดหมวดหมู่หรือเน้นตัวเลือก

พร็อพส์ลอซเซนจ์อ้างอิง:

- `label`: ป้ายข้อความที่แสดงภายในลอซเซนจ์
- `tone`: โทนสีของลอซเซนจ์ โทนที่มีอยู่คือ: 'plain', 'pending', 'information', 'success', 'danger', 'neutral', 'caution'
- `fill`: บูลีนที่ระบุว่าลอซเซนจ์ควรมีพื้นหลังที่เต็ม (true) หรือสไตล์ที่ขีดเส้น (false)
- `removevalue`: บูลีนที่ระบุว่าจะแสดงไอคอนลบภายในลอซเซนจ์ (true) หรือไม่ (false)
- `url`: URL ของภาพอวตารที่จะแสดงภายในลอซเซนจ์
- `visible`: บูลีนที่ระบุว่าลอซเซนจ์มองเห็นได้ (true) หรือซ่อน (false)
- `loading`: บูลีนที่ระบุว่าจะแสดงสปินเนอร์การโหลดภายในลอซเซนจ์ (true) หรือไม่ (false)
- `icon`: ไอคอนที่จะแสดงภายในลอซเซนจ์
- `postfixIcon`: ไอคอนที่จะแสดงที่ส่วนท้ายของลอซเซนจ์
- `interactive`: บูลีนที่ระบุว่าลอซเซนจ์โต้ตอบได้ (true) หรือไม่ (false)
- `dropdown`: บูลีนที่ระบุว่าจะแสดงลูกศรดร็อปดาวน์ภายในลอซเซนจ์ (true) หรือไม่ (false)

### แสดงรายการเป็นลอซเซนจ์

เพิ่มพร็อพส์ `lozenge` เพื่อแสดงตัวเลือกที่เลือกเป็นลอซเซนจ์ในช่องป้อนเลือก จากนั้นหากคุณต้องการเปลี่ยนสไตล์ลอซเซนจ์สำหรับแต่ละตัวเลือก คุณสามารถใช้ `lozengeProps` เพื่อปรับแต่งลักษณะลอซเซนจ์

<div>
  <spr-select-multiple
    id="select-multiple-display-item-lozenge"
    v-model="multiSelectModel.multiSelectItemLozenge"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    lozenge
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-display-item-lozenge"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    lozenge
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const multiSelectModel = ref('');

const options = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Carrot', value: 'carrot' },
  { text: 'Bread', value: 'bread' },
  { text: 'Chicken', value: 'chicken' },
  { text: 'Milk', value: 'milk' },
]);
</script>
```

### เพิ่มลอซเซนจ์

เพิ่มพร็อพส์ `lozenge` ในอาร์เรย์ตัวเลือกเพื่อระบุลอซเซนจ์สำหรับแต่ละตัวเลือก

<div>
  <spr-select-multiple
    id="select-multiple-item-lozenge"
    v-model="multiSelectModel.multiSelectItemLozengeAppend"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="optionsWithLozenge"
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="select-multiple-item-lozenge"
    v-model="multiSelectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="optionsWithLozenge"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const multiSelectModel = ref('');

const optionsWithLozenge = ref([
  {
    text: 'Apple',
    value: 'apple',
    lozenge: { label: 'Fruit', tone: 'plain' },
  },
  {
    text: 'Carrot',
    value: 'carrot',
    lozenge: { label: 'Vegetable', tone: 'pending' },
  },
  {
    text: 'Bread',
    value: 'bread',
    lozenge: { label: 'Grain', tone: 'information' },
  },
  {
    text: 'Chicken',
    value: 'chicken',
    lozenge: { label: 'Protein', tone: 'success' },
  },
  {
    text: 'Milk',
    value: 'milk',
    lozenge: { label: 'Dairy', tone: 'danger' },
  },
  {
    text: 'Eggs',
    value: 'eggs',
    lozenge: { label: 'Poultry', tone: 'neutral' },
  },
  {
    text: 'Fish',
    value: 'fish',
    lozenge: { label: 'Seafood', tone: 'caution' },
  },
]);
</script>
```

## การอ้างอิง API

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
      <td>จำเป็นเพื่อผูกป๊อปเปอร์ภายในการเลือก</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>v-model</code></td>
      <td>การผูกค่าของการเลือก ยอมรับอาร์เรย์ของสตริง, ตัวเลข, หรือออบเจ็กต์ ใช้อาร์เรย์สำหรับการเลือกหลายรายการเสมอ</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>search-value</code></td>
      <td>การผูกค่าของช่องป้อนการค้นหา ยอมรับสตริง</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>options</code></td>
      <td>รายการตัวเลือก สามารถเป็นอาร์เรย์ของสตริง, ตัวเลข, หรือออบเจ็กต์ที่มีฟิลด์ <code>text</code> และ <code>value</code></td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>group-items-by</code></td>
      <td>จัดกลุ่มรายการตามฟิลด์เฉพาะ รองรับ: 'A-Z', 'Z-A'</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>text-field</code></td>
      <td>ชื่อฟิลด์ที่จะใช้สำหรับข้อความแสดงเมื่อใช้อาร์เรย์ออบเจ็กต์</td>
      <td>String</td>
      <td>'text'</td>
    </tr>
    <tr>
      <td><code>value-field</code></td>
      <td>ชื่อฟิลด์ที่จะใช้สำหรับค่าเมื่อใช้อาร์เรย์ออบเจ็กต์</td>
      <td>String</td>
      <td>'value'</td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>ข้อความตัวยึดตำแหน่งสำหรับช่องป้อน</td>
      <td>String</td>
      <td>-</td>
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
      <td>แสดงสปินเนอร์การโหลดภายในช่องป้อนเลือก มีประโยชน์ขณะดึงตัวเลือกแบบอะซิงโครนัส (เช่น การค้นหา API / เลื่อนไม่สิ้นสุด) ค่าปัจจุบัน, ตัวยึดตำแหน่ง หรือสรุปชิปที่เลือกจะยังคงแสดงอยู่ข้างสปินเนอร์</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>placement</code></td>
      <td>การจัดตำแหน่งป๊อปเปอร์ ดูตัวเลือกที่มีอยู่ในเอกสาร</td>
      <td>String</td>
      <td>'bottom'</td>
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
      <td><code>popper-strategy</code></td>
      <td>กลยุทธ์การจัดตำแหน่งป๊อปเปอร์ 'absolute' หรือ 'fixed'</td>
      <td>String</td>
      <td>'absolute'</td>
    </tr>
    <tr>
      <td><code>popper-width</code></td>
      <td>ความกว้างขององค์ประกอบป๊อปเปอร์</td>
      <td>String</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td><code>popper-container</code></td>
      <td>ซีเลกเตอร์ CSS หรือ HTMLElement เพื่อระบุคอนเทนเนอร์ที่กำหนดเองสำหรับองค์ประกอบป๊อปเปอร์</td>
      <td>String | HTMLElement</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>ความกว้างของตัวครอบการเลือก</td>
      <td>String</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td><code>wrapper-position</code></td>
      <td>CSS position ของตัวครอบ ใช้ 'initial' สำหรับการใช้งานโมดอล</td>
      <td>String</td>
      <td>'relative'</td>
    </tr>
    <tr>
      <td><code>display-text</code></td>
      <td>ข้อความแสดงสำหรับช่องป้อน (มีประโยชน์สำหรับ async/infinite scroll)</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>supporting-display-text</code></td>
      <td>แสดงข้อความที่กำหนดเองภายในรายการ</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>persistent-display-text</code></td>
      <td>หากเป็นจริง displayText จะแสดงในช่องป้อนเสมอ แม้แต่เมื่อการเลือกเปลี่ยนแปลง</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>display-selected-count-only</code></td>
      <td>
        แสดงตัวนับรายการที่เลือกเท่านั้นเมื่อเลือกรายการ แทนที่จะแสดงข้อความในช่องป้อน
      </td>
      <td>Bolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>display-list-item-selected</code></td>
      <td>แสดงรายการที่เลือกภายในรายการ</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>display-helper</code></td>
      <td>แสดงข้อความช่วยเหลือใต้ช่องป้อน</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>helper-icon</code></td>
      <td>ไอคอนที่จะแสดงพร้อมข้อความช่วยเหลือ</td>
      <td>String</td>
      <td>null</td>
    </tr>
    <tr>
      <td><code>helper-text</code></td>
      <td>ข้อความช่วยเหลือที่จะแสดงใต้ช่องป้อน</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>ปิดใช้งานช่องป้อนและป๊อปเปอร์</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>clearable</code></td>
      <td>แสดงปุ่มล้างเพื่อลบการเลือกทั้งหมด</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>chipped</code></td>
      <td>ทำให้ช่องป้อนฟิลด์รายการที่เลือกเป็นชิป</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>searchable</code></td>
      <td>เปิดใช้งานการค้นหาภายในตัวเลือกการเลือก</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>disabled-local-search</code></td>
      <td>ปิดใช้งานฟังก์ชันการค้นหาในเครื่อง</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>options-loader</code></td>
      <td>แสดงการโหลดแบบโครงกระดูกภายในป๊อปเปอร์ มีประโยชน์ขณะดึงตัวเลือกแบบอะซิงโครนัส (เช่น การค้นหา API)</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>infinite-scroll-loader</code></td>
      <td>แสดงสปินเนอร์การโหลดที่ด้านล่างของรายการเมื่อทริกเกอร์เลื่อนไม่สิ้นสุด มีประโยชน์เมื่อโหลดรายการเพิ่มเติมเมื่อผู้ใช้เลื่อนถึงส่วนท้ายของรายการ</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>lozenge</code></td>
      <td>เปิดใช้งานโหมดลอซเซนจ์สำหรับรายการ รายการจะแสดงเป็นลอซเซนจ์เมื่อเปิดใช้งาน</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>item-icon</code></td>
      <td>ไอคอนใดๆ จาก iconify (เช่น ph:trash)</td>
      <td>String</td>
      <td>''</td>
    </tr>
  </tbody>
</table>

### อีเวนต์

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
      <td>@update:modelValue</td>
      <td>Array</td>
      <td>ปล่อยออกมาทุกครั้งที่การเลือกเปลี่ยนแปลง</td>
    </tr>
    <tr>
      <td>@popper-state</td>
      <td>Boolean</td>
      <td>อีเวนต์ที่ปล่อยออกมาทุกครั้งที่คุณเปิดหรือปิดป๊อปเปอร์</td>
    </tr>
    <tr>
      <td>@search-string</td>
      <td>None</td>
      <td>อีเวนต์ที่ปล่อยออกมาทุกครั้งที่คุณพิมพ์ในช่องป้อนการค้นหา</td>
    </tr>
    <tr>
      <td>@get-selected-options</td>
      <td>Object</td>
      <td>ปล่อยออกมาทุกครั้งที่เลือกรายการ ออบเจ็กต์เพย์โหลดคือออบเจ็กต์ตัวเลือกที่เลือก</td>
    </tr>
    <tr>
      <td>@get-single-selected-item</td>
      <td>Object</td>
      <td>ปล่อยออกมาทุกครั้งที่เลือกตัวเลือกเดียวในโหมดเลือกเดียว ออบเจ็กต์เพย์โหลดคือออบเจ็กต์รายการที่เลือก</td>
    </tr>
  </tbody>
</table>

### เมธอดที่เปิดเผย

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">เมธอด</th>
      <th>คำอธิบาย</th>
      <th>พารามิเตอร์</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>handleClear</code>
      </td>
      <td>ล้างการเลือกปัจจุบัน</td>
      <td><code>()</code></td>
    </tr>
  </tbody>
</table>

### หมายเหตุ

- ใช้อาร์เรย์สำหรับ `v-model` ในโหมดการเลือกหลายรายการเสมอ
- รองรับสตริง, ตัวเลข, และค่าออบเจ็กต์ คอมโพเนนต์จะปรับมาตรฐานค่าคุณค่าเดียวเป็นอาร์เรย์ภายใน
- สำหรับค่าออบเจ็กต์ ให้ใช้ `text-field` และ `value-field` เพื่อระบุฟิลด์ที่จะใช้
- ใช้ `clearable` เพื่ออนุญาตให้ผู้ใช้ล้างการเลือกทั้งหมด
- ใช้ `helper-text` และ `helper-icon` เพื่อแสดงข้อมูลเพิ่มเติมใต้ช่องป้อน
- ใช้ `placement` และ `popper-strategy` เพื่อควบคุมตำแหน่งและพฤติกรรมของการเลือก

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useDebounceFn } from '@vueuse/core';

import { Icon } from '@iconify/vue';

import SprSelectMultiple from "@/components/select/select-multiple/select-multiple.vue";
import SprInput from "@/components/input/input.vue";
import SprButton from "@/components/button/button.vue";
import SprChips from "@/components/chips/chips.vue";
import SprLozenge from "@/components/lozenge/lozenge.vue"
import SprModal from "@/components/modal/modal.vue"
import SprLogo from "@/components/logo/logo.vue";
import SprDropdown from "@/components/dropdown/dropdown.vue";

// นำเข้า MenuListType สำหรับการพิมพ์
import type { MenuListType } from '@/components/list/list';

const multiSelectModel = ref({
  multiSelectBasic: [],
  multiSelectChipped: [],
  multiSelectGroupedItemsBy: [],
  multiSelectPreSelectedItems: ['100', '200', 'cherry'],
  multiSelectSearch: [],
  multiSelectSearchDisabledLocalSearch: [],
  multiSelectPlacement: [],
  multiSelectClearable: [],
  multiSelectWidth: [],
  multiSelectStrategy: [],
  multiSelectActiveState: [],
  multiSelectDisabledState: [],
  multiSelectErrorState: [],
  multiSelectDisplaySelectedCountOnly: [],
  multiSelectHelperMessage: [],
  multiSelectItemSubtext: [],
  multiSelectItemIcon: [],
  multiSelectItemCustomIcon: [],
  multiSelectItemLozenge: [],
  multiSelectItemLozengeAppend: [],
});

const options = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
  { text: 'Indian Fig', value: 'indian_fig' },
  { text: 'Jackfruit', value: 'jackfruit' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'One Hundred', value: '100' },
  { text: 'Two Hundred', value: 200 },
  { text: 'Lemon', value: 'lemon' },
  { text: 'Mango', value: 'mango' },
  { text: '300', value: '300' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
  { text: 'Raspberry', value: 'raspberry' },
  { text: 'Strawberry', value: 'strawberry' },
  { text: 'Tangerine', value: 'tangerine' },
  { text: 'Uva', value: 'uva' },
  { text: 'Vanilla', value: 'vanilla' },
  { text: 'Watermelon', value: 'watermelon' },
  { text: 'Xigua', value: 'xigua' },
  { text: 'Yunnan Hackberry', value: 'yunnan_hackberry' },
  { text: 'Zucchini', value: 'zucchini' },
  { text: 'Apricot', value: 'apricot' },
  { text: 'Blueberry', value: 'blueberry' },
  { text: 'Cantaloupe', value: 'cantaloupe' },
  { text: 'Dragonfruit', value: 'dragonfruit' },
  { text: 'Pineapple', value: 'pineapple' },
]);

const optionsWithSubtext = ref([
  { text: 'Apple', value: 'apple', subtext: 'ผลไม้สีแดงหวาน' },
  { text: 'Banana', value: 'banana', subtext: 'ผลไม้สีเหลืองยาว' },
  { text: 'Cherry', value: 'cherry', subtext: 'ผลไม้สีแดงเล็ก' },
  { text: 'Date', value: 'date', subtext: 'ผลไม้สีน้ำตาลหวาน' },
  { text: 'Elderberry', value: 'elderberry', subtext: 'ผลไม้สีม่วงเข้มเล็ก' },
]);

const optionsWithCustomIcon = ref([
  { text: 'Acorn', value: 'acorn', icon: 'ph:acorn' },
  { text: 'Address Book', value: 'address book', icon: 'ph:address-book' },
  { text: 'Alarm', value: 'alarm', icon: 'ph:alarm' },
  { text: 'Angle', value: 'angle', icon: 'ph:angle' },
  { text: 'Apple Logo', value: 'apple logo', icon: 'ph:apple-logo' },
]);

const optionsWithLozenge = ref([
  {
    text: 'Apple',
    value: 'apple',
    lozenge: { label: 'Fruit', tone: 'plain' },
  },
  {
    text: 'Carrot',
    value: 'carrot',
    lozenge: { label: 'Vegetable', tone: 'pending' },
  },
  {
    text: 'Bread',
    value: 'bread',
    lozenge: { label: 'Grain', tone: 'information' },
  },
  {
    text: 'Chicken',
    value: 'chicken',
    lozenge: { label: 'Protein', tone: 'success' },
  },
  {
    text: 'Milk',
    value: 'milk',
    lozenge: { label: 'Dairy', tone: 'danger' },
  },
  {
    text: 'Eggs',
    value: 'eggs',
    lozenge: { label: 'Poultry', tone: 'neutral' },
  },
  {
    text: 'Fish',
    value: 'fish',
    lozenge: { label: 'Seafood', tone: 'caution' },
  },
]);

const modalModel = ref(false);

// สำหรับค่าตัวอักษร
const stringValue = ref('apple');  // ค่าตัวอักษรหลายค่า
const stringDisplay = ref('Apple');

// สำหรับค่าตัวเลข
const numberValue = ref(42);  // ค่าตัวเลขหลายค่า
const numberDisplay = ref('42');

const stringOptions = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' }
]);

const numberOptions = ref([
  { text: '42', value: 42 },
  { text: '100', value: 100 },
  { text: '200', value: 200 }
]);

const handleStringSelection = () => {
  const selected = stringOptions.value.find(item => item.value === stringValue.value);
  stringDisplay.value = selected ? selected.text : '';
};

const handleNumberSelection = () => {
  const selected = numberOptions.value.find(item => item.value === numberValue.value);
  numberDisplay.value = selected ? selected.text : '';
};

const selectedUser = ref({ id: 1, name: 'John', role: 'Developer' });

const userList = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' },
  { id: 3, name: 'Bob', role: 'Manager' }
]);

const selectedUsers = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' }
]);
const usersDisplay = ref('John, Jane');

const usersList = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' },
  { id: 3, name: 'Bob', role: 'Manager' },
  { id: 4, name: 'Alice', role: 'Product Owner' }
]);

// เลื่อนไม่สิ้นสุด
const multipleSelected = ref([]); 
const optionsAPI = ref<optionsType[]>([]);
const search = ref('');
const APIisLoading = ref(false);
const pagination = ref({
  totalpages: 10,
  currentPage: 1,
});

const setOptionsViaAPI = () => {
  getNextOptionsViaAPI();
};

const handleInfiniteScrollTrigger = () => {
  if (pagination.value.currentPage === pagination.value.totalpages || APIisLoading.value) return;

  APIisLoading.value = true;
  pagination.value.currentPage += 1;

  getNextOptionsViaAPI();
};

const getNextOptionsViaAPI = async () => {
  try {
    const url = search.value
      ? `https://api.thedogapi.com/v1/breeds/search?q=${search.value}&page=${pagination.value.currentPage}&limit=10`
      : `https://api.thedogapi.com/v1/breeds?page=${pagination.value.currentPage}&limit=10`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const options = await response.json();

    optionsAPI.value = options.length
      ? [
          ...(optionsAPI.value || []),
          ...options.map((option) => ({
            text: option.name,
            value: option.id,
          })),
        ]
      : [];

    APIisLoading.value = false;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

const debouncedSetOptions = useDebounceFn(() => {
  APIisLoading.value = true;
  pagination.value.currentPage = 1;
  optionsAPI.value = [];
  setOptionsViaAPI();
}, 300);

watch(search, () => {
  debouncedSetOptions();
});

onMounted(() => {
  setOptionsViaAPI();
});
</script>
