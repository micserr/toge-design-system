---
title: เลือกเดี่ยว
descripttion: เลือกเป็นคอมโพเนนต์เชิงโต้ตอบที่อนุญาตให้ผู้ใช้เลือกจากรายการตัวเลือก
outline: 'deep'
---

# เลือก

เลือกเป็นคอมโพเนนต์เชิงโต้ตอบที่อนุญาตให้ผู้ใช้เลือกจากรายการตัวเลือก

## การใช้งานพื้นฐาน

<div class="spr-grid spr-gap-4">
  <spr-select
    id="select-basic"
    v-model="selectModel.selectBasic"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
  />

  <code class="spr-font-medium">
    V-Model: {{ selectModel.selectBasic ? selectModel.selectBasic : `""` }}
  </code>
</div>

```vue
<template>
  <spr-select
    id="select-basic"
    v-model="selectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectModel = ref('');

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

## จัดกลุ่มรายการตาม

คุณสามารถจัดกลุ่มรายการตามลำดับ 'default', 'A-Z' หรือ 'Z-A' โดยส่งพร็อพส์ `group-items-by` และระบุประเภทการจัดกลุ่มที่ต้องการ

<div class="spr-grid spr-gap-4">
  <spr-select
    id="select-grouped-items-by"
    v-model="selectModel.selectGroupedItemsBy"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    group-items-by="A-Z"
  />
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <spr-select
      id="select-grouped-items-by"
      v-model="selectModel"
      label="ป้ายกำกับเลือก"
      placeholder="เลือกตัวเลือก"
      :options="options"
      group-items-by="A-Z"
    />
  </div>
</template>
```

## ค้นหา

คุณลักษณะการค้นหาช่วยให้ผู้ใช้กรองและค้นหาตัวเลือกเฉพาะภายในรายการเลือกได้อย่างรวดเร็วโดยพิมพ์คำค้นหา

- ใช้พร็อพส์ `searchable-options` เพื่อเปิดใช้งานช่องป้อนการค้นหาภายในคอมโพเนนต์เลือก

<div class="spr-grid spr-gap-4">
  <spr-select
    id="select-search"
    v-model="selectModel.selectSearch"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    searchable
  />

  <code class="spr-font-medium">
    V-Model: {{ selectModel.selectSearch ? selectModel.selectSearch : `""` }}
  </code>
</div>

```vue
<template>
  <spr-select
    id="select-search"
    v-model="selectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    searchable
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectModel = ref('');

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
  <spr-select
    id="select-search-disabled-local-search"
    v-model="selectModel.selectSearchDisabledLocalSearch"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    searchable
    disabled-local-search
  />

  <code class="spr-font-medium">
    V-Model: {{ selectModel.selectSearchDisabledLocalSearch ? selectModel.selectSearchDisabledLocalSearch : `""` }}
  </code>
</div>

```vue
<template>
  <spr-select
    id="select-search-disabled-local-search"
    v-model="selectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    searchable
    disabled-local-search
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectModel = ref('');

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

ตัวเลือกที่เลือกไว้ล่วงหน้านี้เป็นตัวเลือกที่ถูกเลือกโดยอัตโนมัติเมื่อแสดงการเลือกครั้งแรก v-model สำหรับคอมโพเนนต์เลือกสนับสนุน:

- **String**: สำหรับการเลือกเดียวโดยค่า (เช่น `'apple'`)
- **Number**: สำหรับการเลือกเดียวโดยค่าตัวเลข (เช่น `42`)
- **Array of strings or numbers**: สำหรับการเลือกเดียวโดยอาร์เรย์ (เช่น `['apple']` หรือ `[42]`)
- **Object**: สำหรับการเลือกเดียวโดยการอ้างอิงออบเจ็กต์ (เช่น `{ text: 'Apple', value: 'apple' }`) ดูเพิ่มเติมใน [Supported Value Types](#single-object-values)

<div class="spr-grid spr-gap-4">
  <spr-select
    id="select-pre-selected-items"
    v-model="selectModel.selectPreSelectedItems"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    group-items-by="A-Z"
    text-field="text"
    value-field="value"
  />

  <code class="spr-font-medium">
    V-Model: {{ selectModel.selectPreSelectedItems ? selectModel.selectPreSelectedItems : `""` }}
  </code>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <spr-select
      id="select-pre-selected-items"
      v-model="selectModel"
      label="ป้ายกำกับเลือก"
      placeholder="เลือกตัวเลือก"
      :options="options"
      group-items-by="A-Z"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const selectModel = ref(['apple']);
</script>
```

คุณยังสามารถเลือกตัวเลือกไว้ล่วงหน้าด้วยฟังก์ชันการค้นหาได้ สิ่งนี้ช่วยให้ผู้ใช้เห็นตัวเลือกที่เลือกไว้ล่วงหน้าได้ขณะที่ยังคงสามารถค้นหาผ่านตัวเลือกได้

<div class="spr-mt-4">
  <spr-select
    id="select-pre-selected-items-with-search"
    v-model="selectModel.selectPreSelectedItemsWithSearch"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    searchable
  />
</div>

## การจัดตำแหน่ง

การจัดตำแหน่งหมายถึงตำแหน่งที่ป๊อปเปอร์ของการเลือกจะอยู่สัมพันธ์กับองค์ประกอบทริกเกอร์ (เช่น ปุ่ม ช่องป้อนข้อมูล) ส่งพร็อพส์ `placement` เพื่อแก้ไขการจัดตำแหน่งของป๊อปเปอร์ของการเลือก

ตัวเลือกการจัดตำแหน่งที่มีอยู่คือ: `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, และ `left-end`

การจัดตำแหน่งเริ่มต้นคือ `bottom`

<div class="spr-grid spr-gap-4">
  <div class="spr-flex spr-gap-4">
    <spr-select
      id="select-placement-auto"
      v-model="selectModel.selectPlacements"
      label="อัตโนมัติ"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="auto"
      popper-width="200px"
    />
    <spr-select
      id="select-placement-auto-start"
      v-model="selectModel.selectPlacements"
      label="อัตโนมัติเริ่มต้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="auto-start"
      popper-width="200px"
    />
    <spr-select
      id="select-placement-auto-end"
      v-model="selectModel.selectPlacements"
      label="อัตโนมัติสิ้นสุด"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="auto-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select
      id="select-placement-top"
      v-model="selectModel.selectPlacements"
      label="บน"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="top"
      popper-width="200px"
    />
    <spr-select
      id="select-placement-top-start"
      v-model="selectModel.selectPlacements"
      label="บนเริ่มต้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="top-start"
      popper-width="200px"
    />
    <spr-select
      id="select-placement-top-end"
      v-model="selectModel.selectPlacements"
      label="บนสิ้นสุด"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="top-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select
      id="select-placement-right"
      v-model="selectModel.selectPlacements"
      label="ขวา"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="right"
      popper-width="200px"
    />
    <spr-select
      id="select-placement-right-start"
      v-model="selectModel.selectPlacements"
      label="ขวาเริ่มต้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="right-start"
      popper-width="200px"
    />
    <spr-select
      id="select-placement-right-end"
      v-model="selectModel.selectPlacements"
      label="ขวาสิ้นสุด"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="right-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select
      id="select-placement-bottom"
      v-model="selectModel.selectPlacements"
      label="ล่าง"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="bottom"
      popper-width="200px"
    />
    <spr-select
      id="select-placement-bottom-start"
      v-model="selectModel.selectPlacements"
      label="ล่างเริ่มต้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="bottom-start"
      popper-width="200px"
    />
    <spr-select
      id="select-placement-bottom-end"
      v-model="selectModel.selectPlacements"
      label="ล่างสิ้นสุด"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="bottom-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select
      id="select-placement-left"
      v-model="selectModel.selectPlacements"
      label="ซ้าย"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="left"
      popper-width="200px"
    />
    <spr-select
      id="select-placement-left-start"
      v-model="selectModel.selectPlacements"
      label="ซ้ายเริ่มต้น"
      placeholder="เลือกตัวเลือก"
      :options="options"
      placement="left-start"
      popper-width="200px"
    />
    <spr-select
      id="select-placement-left-end"
      v-model="selectModel.selectPlacements"
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
  <spr-select
    id="select-clearable"
    v-model="selectModel.selectClearable"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    clearable
  />

  <code class="spr-font-medium">
    V-Model: {{ selectModel.selectClearable ? selectModel.selectClearable : `""` }}
  </code>
</div>

## ความกว้างและความกว้างป๊อปเปอร์

คุณสามารถแก้ไขความกว้างของคอมโพเนนต์เลือกได้สองวิธี: โดยการปรับความกว้างของตัวครอบการเลือกหรือโดยการเปลี่ยนความกว้างของป๊อปเปอร์ของการเลือก

`Width` - ความกว้างโดยรวมขององค์ประกอบครอบทั้งหมดและองค์ประกอบป๊อปเปอร์

`Popper Width` - ความกว้างขององค์ประกอบป๊อปเปอร์เท่านั้น

<div>
  <spr-select
    id="select-width"
    v-model="selectModel.selectWidth"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    width="50%"
    popper-width="200px"
  />
</div>

```vue
<template>
  <spr-select
    id="select-width"
    v-model="selectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    width="50%"
    popper-width="200px"
  />
</template>
```

## กลยุทธ์ป๊อปเปอร์

กลยุทธ์ป๊อปเปอร์ใช้เป็นหลักเมื่อทำงานกับองค์ประกอบเช่นโมดอล มันช่วยควบคุมพฤติกรรมการจัดตำแหน่งขององค์ประกอบป๊อปเปอร์ กลยุทธ์ช่วยให้องค์ประกอบป๊อปเปอร์ถูกจัดตำแหน่งแบบไดนามิกตามวิวพอร์ต องค์ประกอบอ้างอิง หรือปัจจัยอื่นๆ เช่น การเลื่อนหรือการปรับขนาด

โดยค่าเริ่มต้น กลยุทธ์ป๊อปเปอร์ถูกตั้งค่าเป็น `absolute` ซึ่งจัดตำแหน่งองค์ประกอบป๊อปเปอร์สัมพันธ์กับบรรพบุรุษที่จัดตำแหน่งที่ใกล้ที่สุด (โดยปกติคือองค์ประกอบ body) อย่างไรก็ตาม คุณสามารถเปลี่ยน `strategy` เป็น `fixed` ซึ่งจัดตำแหน่งองค์ประกอบป๊อปเปอร์สัมพันธ์กับวิวพอร์ต เพื่อให้แน่ใจว่ามันยังคงอยู่ในตำแหน่งเดิมแม้ว่าจะเลื่อนหน้าเว็บ

ส่งพร็อพส์ `popper-strategy` เพื่อเปลี่ยนพฤติกรรมตำแหน่งของป๊อปเปอร์

::: info สิ่งสำคัญที่ต้องทราบ:
อย่าลืมส่งพร็อพส์ `wrapperPosition` เพื่อแทนที่ตำแหน่ง `relative` เป็น `initial`
:::

<spr-button tone="success" @click="modalModel = true">เปิดโมดอล</spr-button>

<spr-modal v-model="modalModel" title="เลือกด้วยโมดอล">
   <spr-select
    id="select-popper-strategy"
    v-model="selectModel.selectStrategy"
    label="ป้ายกำกับเลือก"
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
    <spr-select
      id="select-popper-strategy"
      v-model="selectModel"
      label="ป้ายกำกับเลือก"
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
      <spr-select
        id="select-dropdown-custom-popper"
        v-model="selectModel.selectStrategy"
        label="ป้ายกำกับเลือก"
        placeholder="เลือกตัวเลือก"
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
      <spr-select
        id="select-dropdown-custom-popper"
        v-model="selectModel"
        label="ป้ายกำกับเลือก"
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

## เลื่อนไม่สิ้นสุด

เลื่อนไม่สิ้นสุดช่วยให้รายการเลือกโหลดรายการเพิ่มเติมเมื่อผู้ใช้เลื่อน สิ่งนี้มีประโยชน์อย่างยิ่งสำหรับการรวม API แบ็กเอนด์ แทนที่จะโหลดรายการทั้งหมดในครั้งเดียว รายการใหม่จะถูกเพิ่มแบบไดนามิกตามที่ต้องการเพื่อปรับปรุงประสิทธิภาพและการใช้งาน ส่ง `@infinite-scroll-trigger` emit เพื่อรับทริกเกอร์ของตัวเลือกเมื่อถึงด้านล่าง

เมื่อทำงานกับเลื่อนไม่สิ้นสุดและการเลือกที่ขับเคลื่อนด้วย API คุณสามารถใช้พร็อพส์ `display-text` เพื่อแสดงค่าการแสดงผลในช่องป้อนเมื่อโหลดครั้งแรก (ตัวอย่างเช่น เมื่อคุณมีเฉพาะค่าที่เลือกและไม่ได้ออบเจ็กต์ตัวเลือกทั้งหมด) สิ่งนี้มีประโยชน์อย่างยิ่งสำหรับชุดข้อมูลขนาดใหญ่ที่คุณไม่ต้องการดึงตัวเลือกทั้งหมดในครั้งเดียว

<div>
  <spr-select
    id="select-infinite-scroll"
    v-model="selectModel.selectInfiniteScroll"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :display-text="displayText"
    :options="optionsAPI"
    @infinite-scroll-trigger="handleInfiniteScrollTrigger"
  />
  <div class="spr-my-3 spr-p-4 spr-bg-blue-100">
    <h5>ตัวเลือกที่มีการแบ่งหน้า - ควรโหลด 10 รายการต่อหน้า:</h5>
    <p>การแบ่งหน้า:</p>
    <pre>{{ JSON.stringify(pagination, null, 2) }}</pre>
    <p>ข้อมูล:</p>
    {{ optionsAPI }}
  </div>
</div>

```vue
<template>
  <spr-select
    id="select-infinite-scroll"
    v-model="selectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="optionsAPI"
    :display-text="displayText"
    @infinite-scroll-trigger="handleInfiniteScrollTrigger"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectModel = ref(51); // ค่าเริ่มต้นสำหรับการเลือก
const displayText = ref('Border Terrier'); // ข้อความแสดงสำหรับตัวเลือกที่เลือก

const optionsAPI = ref<optionsType[]>([]);

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
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?page=${pagination.value.currentPage}&limit=10`);

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
</script>
```

## สถานะใช้งานอยู่ ปิดใช้งาน และข้อผิดพลาด

สำหรับคำแนะนำในการใช้สถานะข้อผิดพลาด สถานะใช้งานอยู่ และสถานะปิดใช้งานในคอมโพเนนต์เลือก คุณสามารถดูเอกสารสำหรับคอมโพเนนต์ข้อความป้อนข้อมูลได้เนื่องจากแนวทางนั้นคล้ายกัน ดู [Input Form](/th/documentation/components/input/input) สำหรับคำแนะนำโดยละเอียด

### สถานะใช้งานอยู่

<div>
  <spr-select
    id="select-active-state"
    v-model="selectModel.selectActiveState"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    active
  />
</div>

```vue
<template>
  <spr-select
    id="select-active-state"
    v-model="selectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    active
  />
</template>
```

### สถานะปิดใช้งาน

<div>
  <spr-select
    id="select-disabled-state"
    v-model="selectModel.selectDisabledState"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    disabled
  />
</div>

```vue
<template>
  <spr-select
    id="select-disabled-state"
    v-model="selectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    disabled
  />
</template>
```

### สถานะข้อผิดพลาด

<div>
  <spr-select
    id="select-error-state"
    v-model="selectModel.selectErrorState"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    error
  />
</div>

```vue
<template>
  <spr-select
    id="select-error-state"
    v-model="selectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    error
  />
</template>
```

## ข้อความช่วยเหลือ

ข้อความช่วยเหลือเป็นป้ายข้อความใต้ช่องป้อนข้อมูลที่ให้ข้อมูลเพิ่มเติมเกี่ยวกับคำแนะนำ การจัดรูปแบบ คำติชมการตรวจสอบ ฯลฯ

เพื่อแสดงข้อความช่วยเหลือ ตั้งค่าพร็อพส์ `display-helper` เป็น `true` และเพิ่มพร็อพส์ `helper-text` ด้วยข้อความช่วยเหลือ คุณยังสามารถแทรกไอคอนด้วยพร็อพส์ `helper-icon` ได้ สิ่งนี้ใช้ไลบรารีไอคอน [Iconify](https://icon-sets.iconify.design/)

<div class="spr-grid spr-gap-8">
  <spr-select
    id="select-helper-message"
    v-model="selectModel.selectHelperMessage"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    helper-text="นี่คือข้อความช่วยเหลือ"
    display-helper
  />
  <spr-select
    id="select-helper-message-error"
    v-model="selectModel.selectHelperMessage"
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
  <spr-select
    id="select-helper-message"
    v-model="selectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    helper-text="นี่คือข้อความช่วยเหลือ"
    display-helper
  />

  <spr-select
    id="select-helper-message-error"
    v-model="selectModel"
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
  <spr-select
    id="select-helper-message-slot"
    v-model="selectModel.selectHelperMessage"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    display-helper
  >
    <template #helperMessage>นี่คือข้อความช่วยเหลือ</template>
  </spr-select>
  <spr-select
    id="select-helper-message-error-slot"
    v-model="selectModel.selectHelperMessage"
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
  </spr-select>
</div>

```vue
<template>
  <spr-select
    id="select-helper-message-slot"
    v-model="selectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    display-helper
  >
    <template #helperMessage>นี่คือข้อความช่วยเหลือ</template>
  </spr-select>

  <spr-select
    id="select-helper-message-error-slot"
    v-model="selectModel"
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
  </spr-select>
</template>
```

## ประเภทค่าที่รองรับ

คอมโพเนนต์เลือกรองรับประเภทค่าต่างๆ v-model binding สามารถรับรูปแบบข้อมูลต่างๆ ขึ้นอยู่กับความต้องการของคุณ

### ค่าพื้นฐานเดียว

สำหรับการเลือกเดียวของประเภทพื้นฐานเช่นสตริงหรือตัวเลข:

<div>
  <spr-select
    id="select-string"
    v-model="stringValue"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="stringoptions"
  />
</div>

ค่า: {{ stringValue }}

<div>
  <spr-select
    id="select-number"
    v-model="numberValue"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="numberoptions"
  />
</div>

ค่า: {{ numberValue }}

```vue
<template>
  <spr-select
    id="select-string"
    v-model="stringValue"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="stringoptions"
  />

  <spr-select
    id="select-number"
    v-model="numberValue"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="numberoptions"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// สำหรับค่าตัวอักษร
const stringValue = ref('apple'); // ค่าตัวอักษรเดียว

// สำหรับค่าตัวเลข
const numberValue = ref(42); // ค่าตัวเลขเดียว

const stringoptions = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
]);

const numberoptions = ref([
  { text: '42', value: 42 },
  { text: '100', value: 100 },
  { text: '200', value: 200 },
]);
</script>
```

### ค่าออบเจ็กต์เดียว

สำหรับการเลือกเดียวของออบเจ็กต์ทั้งหมด:

<div>
  <spr-select
    id="select-object"
    v-model="selectedUser"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="userList"
    text-field="name"
    value-field="id"
  />
</div>

ค่า: {{ selectedUser }}

```vue
<template>
  <spr-select
    id="select-object"
    v-model="selectedUser"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="userList"
    text-field="name"      // ระบุฟิลด์ที่จะใช้แสดงเป็นข้อความ
    value-field="id"       // ระบุฟิลด์ที่จะใช้เป็นค่า
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// การเลือกออบเจ็กต์โดยใช้การอ้างอิงออบเจ็กต์ทั้งหมด
const selectedUser = ref({ id: 1, name: 'John', role: 'Developer' });

const userList = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' },
  { id: 3, name: 'Bob', role: 'Manager' }
]);
</script>
```

## ข้อความรองของรายการ

คุณลักษณะข้อความรองของรายการช่วยให้คุณแสดงข้อมูลเพิ่มเติมใต้ข้อความหลักของแต่ละตัวเลือกในรายการเลือก สิ่งนี้สามารถมีประโยชน์ในการให้บริบทหรือรายละเอียดเกี่ยวกับแต่ละตัวเลือก ใช้พร็อพส์ `subtext` ในอาร์เรย์ตัวเลือกเพื่อระบุข้อความรองสำหรับแต่ละตัวเลือก

<div>
  <spr-select
    id="select-item-subtext"
    v-model="selectModel.selectItemSubtext"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="optionsWithSubtext"
  />
</div>

```vue
<template>
  <spr-select
    id="select-item-subtext"
    v-model="selectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="optionsWithSubtext"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectModel = ref('');

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
  <spr-select
    id="select-item-icon"
    v-model="selectModel.selectItemIcon"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    item-icon="ph:alarm"
  />
</div>

```vue
<template>
  <spr-select
    id="select-item-icon"
    v-model="selectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    item-icon="ph:alarm"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectModel = ref('');

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
  <spr-select
    id="select-item-custom-icon"
    v-model="selectModel.selectItemCustomIcon"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="optionsWithCustomIcon"
  />
</div>

```vue
<template>
  <spr-select
    id="select-item-custom-icon"
    v-model="selectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="optionsWithCustomIcon"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectModel = ref('');

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
  <spr-select
    id="select-display-item-lozenge"
    v-model="selectModel.selectItemLozenge"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    lozenge
  />
</div>

```vue
<template>
  <spr-select
    id="select-display-item-lozenge"
    v-model="selectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="options"
    lozenge
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectModel = ref('');

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
  <spr-select
    id="select-item-lozenge"
    v-model="selectModel.selectItemLozengeAppend"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="optionsWithLozenge"
  />
</div>

```vue
<template>
  <spr-select
    id="select-item-lozenge"
    v-model="selectModel"
    label="ป้ายกำกับเลือก"
    placeholder="เลือกตัวเลือก"
    :options="optionsWithLozenge"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectModel = ref('');

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
      <td>การผูกค่าของการเลือก ยอมรับ:<br>
        <ul>
          <li><b>ค่าพื้นฐานเดียว:</b> String ('apple'), Number (42)</li>
          <li><b>ค่าออบเจ็กต์เดียว:</b> ออบเจ็กต์ทั้งหมด ({ id: 1, name: 'John' })</li>
          <li><b>อาร์เรย์ของค่า:</b> อาร์เรย์ของสตริง, ตัวเลข, หรือออบเจ็กต์</li>
        </ul>
        ประเภทค่าที่ส่งคืนจะตรงกับประเภทป้อนข้อมูล (รักษาสตริง, ตัวเลข, และออบเจ็กต์)
      </td>
      <td>String | Number | Object | Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>options</code></td>
      <td>รายการตัวเลือกที่ประกอบด้วยพร็อพส์ <code>text</code> และ <code>value</code>, หรืออาร์เรย์ของสตริง/ออบเจ็กต์</td>
      <td>optionsType[] | string[] | object[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>group-items-by</code></td>
      <td>จัดกลุ่มรายการตามลำดับ: 'A-Z', 'Z-A'</td>
      <td>'A-Z' | 'Z-A'</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>text-field</code></td>
      <td>ชื่อฟิลด์ที่จะใช้สำหรับข้อความแสดงเมื่อใช้อาร์เรย์ออบเจ็กต์ไดนามิก</td>
      <td>String</td>
      <td>'text'</td>
    </tr>
    <tr>
      <td><code>value-field</code></td>
      <td>ชื่อฟิลด์ที่จะใช้สำหรับค่าเมื่อใช้อาร์เรย์ออบเจ็กต์ไดนามิก</td>
      <td>String</td>
      <td>'value'</td>
    </tr>
    <tr>
      <td><code>display-text</code></td>
      <td>ข้อความแสดงเพื่อแสดงในช่องป้อนเมื่อโหลดครั้งแรก (มีประโยชน์สำหรับการเลือกที่ขับเคลื่อนด้วย API) ค่าจะแสดงเพียงครั้งเดียว และจะถูกแทนที่เมื่อผู้ใช้เลือกใหม่</td>
      <td>String</td>
      <td>-</td>
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
      <td>แสดงสปินเนอร์การโหลดภายในช่องป้อนเลือก มีประโยชน์ขณะดึงตัวเลือกแบบอะซิงโครนัส (เช่น การค้นหา API) เมื่อเป็นจริง ค่าปัจจุบันหรือตัวยึดตำแหน่งจะยังคงแสดงพร้อมตัวบ่งชี้สปินเนอร์</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>placement</code></td>
      <td>การจัดตำแหน่งของป๊อปเปอร์เลือก (เช่น 'bottom', 'top', 'left', 'right')</td>
      <td>String</td>
      <td>'bottom'</td>
    </tr>
    <tr>
      <td><code>searchable</code></td>
      <td>
        ค้นหาได้เพื่ออนุญาตให้พิมพ์ในช่องป้อน หากไม่ได้ตั้งค่าการค้นหาหรือเป็นเท็จ,
        ช่องป้อนจะเป็นแบบอ่านอย่างเดียวและผู้ใช้ไม่สามารถพิมพ์ได้
      </td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>disabled-local-search</code></td>
      <td>
        ปิดใช้งานการค้นหาในเครื่องเมื่อตั้งค่าพร็อพส์การค้นหาเป็นจริง
        สิ่งนี้มีประโยชน์เมื่อคุณต้องการจัดการการค้นหาผ่าน API เท่านั้น
      </td>
      <td>Boolean</td>
      <td>false</td>
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
      <td><code>popper-strategy</code></td>
      <td>กำหนดวิธีการจัดตำแหน่งป๊อปเปอร์ของการเลือก: 'absolute' หรือ 'fixed'</td>
      <td>String</td>
      <td>'absolute'</td>
    </tr>
    <tr>
      <td><code>popper-width</code></td>
      <td>ความกว้างของป๊อปเปอร์ของการเลือก</td>
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
      <td><code>auto-hide</code></td>
      <td>เมื่อเป็นจริง จะซ่อนดร็อปดาวน์โดยอัตโนมัติเมื่อคลิกภายนอก</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>ความกว้างของตัวครอบคอมโพเนนต์เลือก</td>
      <td>String</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td><code>wrapper-position</code></td>
      <td>CSS position ของตัวครอบการเลือก</td>
      <td>String</td>
      <td>'relative'</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>ปิดใช้งานการเลือกหากเป็นจริง</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>clearable</code></td>
      <td>อนุญาตให้ผู้ใช้ล้างค่าที่เลือกด้วยปุ่มล้าง</td>
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
      <td>@update:model-value</td>
      <td>Any</td>
      <td>อีเวนต์ที่ปล่อยออกมาทุกครั้งที่ค่ามอดเดลเปลี่ยนแปลง</td>
    </tr>
    <tr>
      <td>@infinite-scroll-trigger</td>
      <td>None</td>
      <td>อีเวนต์ที่ปล่อยออกมาทุกครั้งที่การเลือกถูกเลื่อนถึงด้านล่าง (สำหรับการโหลดข้อมูลแบบไดนามิก)</td>
    </tr>
    <tr>
      <td>@search-string</td>
      <td>None</td>
      <td>อีเวนต์ที่ปล่อยออกมาทุกครั้งที่คุณพิมพ์ในช่องป้อนการค้นหา</td>
    </tr>
    <tr>
      <td>@get-selected-option</td>
      <td>Object</td>
      <td>อีเวนต์ที่ปล่อยออกมาเพื่อรับตัวเลือกที่เลือก</td>
    </tr>
    <tr>
      <td>@popper-state</td>
      <td>Bolean</td>
      <td>อีเวนต์ที่ปล่อยออกมาทุกครั้งที่คุณเปิดหรือปิดป๊อปเปอร์</td>
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

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import { Icon } from '@iconify/vue';

import SprInput from "@/components/input/input.vue";
import SprSelect from "@/components/select/select.vue";
import SprButton from "@/components/button/button.vue";
import SprChips from "@/components/chips/chips.vue";
import SprLozenge from "@/components/lozenge/lozenge.vue"
import SprModal from "@/components/modal/modal.vue"
import SprLogo from "@/components/logo/logo.vue";
import SprDropdown from "@/components/dropdown/dropdown.vue";

// นำเข้า optionsType สำหรับการพิมพ์
import type { optionsType } from '@/components/list/list';

const selectModel = ref({
  selectBasic: '',
  selectGroupedItemsBy: '',
  selectSearch: '',
  selectPreSelectedItems:  'apple',
  selectPreSelectedItemsWithSearch: 'apple',
  selectPlacements: '',
  selectSearchDisabledLocalSearch: '',
  selectClearable: '',
  selectWidth: '',
  selectStrategy: '',
  selectInfiniteScroll: 51,
  selectActiveState: '',
  selectDisabledState: '',
  selectErrorState: '',
  selectHelperMessage: '',
  selectItemSubtext: '',
  selectItemIcon: '',
  selectItemCustomIcon: '',
  selectItemLozenge: '',
  selectItemLozengeAppend: '',
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
  { text: 'Lemon', value: 'lemon' },
  { text: 'Mango', value: 'mango' },
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
const stringValue = ref('apple');  // ค่าตัวอักษรเดียว
const stringDisplay = ref('Apple');

// สำหรับค่าตัวเลข
const numberValue = ref(42);  // ค่าตัวเลขเดียว
const numberDisplay = ref('42');

const stringoptions = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' }
]);

const numberoptions = ref([
  { text: '42', value: 42 },
  { text: '100', value: 100 },
  { text: '200', value: 200 }
]);

const handleStringSelection = () => {
  const selected = stringoptions.value.find(item => item.value === stringValue.value);
  stringDisplay.value = selected ? selected.text : '';
};

const handleNumberSelection = () => {
  const selected = numberoptions.value.find(item => item.value === numberValue.value);
  numberDisplay.value = selected ? selected.text : '';
};

// #region - เลื่อนไม่สิ้นสุด
const displayText = ref('Border Terrier'); // ข้อความแสดงสำหรับตัวเลือกที่เลือก

const optionsAPI = ref<optionsType[]>([]);

const APIisLoading = ref(false);

const pagination = ref({
  totalpages: 10,
  currentPage: 1,
});

const setOptionsViaAPI = () => {
  getNextOptionsViaAPI();
}

const handleInfiniteScrollTrigger = () => {
  if (pagination.value.currentPage === pagination.value.totalpages || APIisLoading.value) return;

  APIisLoading.value = true;
  pagination.value.currentPage += 1;

  getNextOptionsViaAPI();
}

const getNextOptionsViaAPI = async () => {
  try {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?page=${pagination.value.currentPage}&limit=10`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const options = await response.json();

    optionsAPI.value = options.length
      ? [
          ...(optionsAPI.value || []),
          ...options.map(option => ({
            text: option.name,
            value: option.id,
          })),
        ]
      : [];

    APIisLoading.value = false;

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
// #endregion - เลื่อนไม่สิ้นสุด

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

onMounted(() => {
  // เลื่อนไม่สิ้นสุด - การเรียก API ครั้งแรกเพื่อเติมตัวเลือกที่มีการแบ่งหน้า
  getNextOptionsViaAPI();
});
</script>
