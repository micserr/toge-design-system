---
title: โลเซนจ์
descripttion: โลเซนจ์แสดงถึงเอนทิตีโดยใช้ไอคอน ป้ายกำกับ และรูปภาพ รองรับโทนสีต่างๆ ประเภทการเติม การรวมอวตาร สถานะแบบอินเทอร์แอกทีฟ และตัวบ่งชี้การโหลดเพื่อเพิ่มประสบการณ์ผู้ใช้และการสื่อสารด้วยภาพ
outline: deep
---

# โลเซนจ์

โลเซนจ์แสดงถึงเอนทิตีโดยใช้ไอคอน ป้ายกำกับ และรูปภาพ

## คุณสมบัติหลัก

- `label`: ข้อความป้ายกำกับที่แสดงภายในโลเซนจ์
- `tone`: โทนสีของโลเซนจ์ โทนที่มีให้เลือก: 'plain', 'pending', 'information', 'success', 'danger', 'neutral', 'caution'
- `fill`: บูลีนที่ระบุว่าลอเซนจ์ควรมีพื้นหลังที่เติมเต็ม (true) หรือสไตล์เส้นขอบ (false)
- `removevalue`: บูลีนที่ระบุว่าจะแสดงไอคอนลบภายในโลเซนจ์ (true) หรือไม่ (false)
- `url`: URL ของรูปภาพอวตารที่จะแสดงภายในโลเซนจ์
- `visible`: บูลีนที่ระบุว่าลอเซนจ์มองเห็นได้ (true) หรือซ่อนอยู่ (false)
- `loading`: บูลีนที่ระบุว่าจะแสดงสปินเนอร์การโหลดภายในโลเซนจ์ (true) หรือไม่ (false)
- `icon`: ไอคอนที่จะแสดงภายในโลเซนจ์
- `postfixIcon`: ไอคอนที่จะแสดงที่ส่วนท้ายของโลเซนจ์
- `interactive`: บูลีนที่ระบุว่าลอเซนจ์เป็นแบบอินเทอร์แอกทีฟ (true) หรือไม่ (false)
- `dropdown`: บูลีนที่ระบุว่าจะแสดงลูกศรดรอปดาวน์ภายในโลเซนจ์ (true) หรือไม่ (false)

## การใช้งานพื้นฐาน

โลเซนจ์พื้นฐานที่มีข้อความจะถูกสร้างด้วยพร็อพเพอร์ตี้ label

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-lozenge label="Lozenge" />
</div>

```vue
<spr-lozenge label="Lozenge" />
```

## โทนสีและการเติม

ปรับแต่งสไตล์สีของโลเซนจ์ (tone) และเลือกระหว่างรูปลักษณ์ที่เติมเต็มหรือเส้นขอบ (fill) เพื่อระบุสถานะหรือเน้น

<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" data-testid="lozenge-tone-plain"/>
  <spr-lozenge label="pending" tone="pending" data-testid="lozenge-tone-pending" />
  <spr-lozenge label="information" tone="information" data-testid="lozenge-tone-information" />
  <spr-lozenge label="success" tone="success" data-testid="lozenge-tone-success" />
  <spr-lozenge label="neutral" tone="neutral" data-testid="lozenge-tone-neutral"/>
  <spr-lozenge label="danger" tone="danger" data-testid="lozenge-tone-danger" />
  <spr-lozenge label="caution" tone="caution" data-testid="lozenge-tone-caution" />
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" fill data-testid="lozenge-fill-plain" />
  <spr-lozenge label="pending" tone="pending" fill data-testid="lozenge-fill-pending" />
  <spr-lozenge label="information" tone="information" fill data-testid="lozenge-fill-information" />
  <spr-lozenge label="success" tone="success" fill data-testid="lozenge-fill-success" />
  <spr-lozenge label="neutral" tone="neutral" fill data-testid="lozenge-fill-neutral" />
  <spr-lozenge label="danger" tone="danger" fill data-testid="lozenge-fill-danger" />
  <spr-lozenge label="caution" tone="caution" fill data-testid="lozenge-fill-caution" />
</div>

```vue
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain"/>
  <spr-lozenge label="pending" tone="pending" />
  <spr-lozenge label="information" tone="information" />
  <spr-lozenge label="success" tone="success" />
  <spr-lozenge label="neutral" tone="neutral" />
  <spr-lozenge label="danger" tone="danger" />
  <spr-lozenge label="caution" tone="caution" />
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" fill />
  <spr-lozenge label="pending" tone="pending" fill />
  <spr-lozenge label="information" tone="information" fill />
  <spr-lozenge label="success" tone="success" fill />
  <spr-lozenge label="neutral" tone="neutral" fill />
  <spr-lozenge label="danger" tone="danger" fill />
  <spr-lozenge label="caution" tone="caution" fill />
</div>
```

## อวตาร

คุณสามารถใช้พร็อพเพอร์ตี้ `url` เพื่อแสดงรูปภาพอวตาร หรือใช้ slot `avatar` สำหรับคอมโพเนนต์อวตารแบบกำหนดเอง

<div class="spr-flex spr-flex-col spr-gap-2 spr-bg-white-50 spr-overflow-auto spr-py-3">
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="information" tone="information" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="success" tone="success" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="neutral" tone="neutral" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="danger" tone="danger" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="caution" tone="caution" url="https://tinyurl.com/2vzn782p" />
    <spr-lozenge label="plain"  url="https://tinyurl.com/2vzn782p" />
  </div>
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="information" tone="information" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="success" tone="success" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="neutral" tone="neutral" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="danger" tone="danger" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="caution" tone="caution" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="plain"  fill url="https://tinyurl.com/2vzn782p"/>
  </div>
</div>

```vue
<spr-lozenge label="pending" tone="pending" url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="information" tone="information" url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="success" tone="success" url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="neutral" tone="neutral" url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="danger" tone="danger" url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="caution" tone="caution" url="https://tinyurl.com/2vzn782p" />

<spr-lozenge label="pending" tone="pending" fill url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="information" tone="information" fill url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="success" tone="success" fill url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="neutral" tone="neutral" fill url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="danger" tone="danger" fill url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="caution" tone="caution" fill url="https://tinyurl.com/2vzn782p" />
```

### อวตารแบบสล็อต

คุณยังสามารถใช้ slot `avatar` เพื่อปรับแต่งคอมโพเนนต์อวตารได้

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-lozenge label="Users" tone="information">
    <template #avatar>
      <img
        class="spr-h-4 spr-w-4 spr-rounded-full spr-object-cover"
        src="https://tinyurl.com/2vzn782p"
        alt="avatar"
      />
    </template>
    <template #icon>
      <Icon icon="ph:users-three" />
    </template>
  </spr-lozenge>
</div>

```vue
<template>
  <spr-lozenge label="Users" tone="information">
    <template #icon>
      <Icon icon="ph:users-three" />
    </template>

    <template #avatar>
      <img class="h-full w-full rounded-full object-cover" src="https://tinyurl.com/2vzn782p" alt="avatar" />
    </template>
  </spr-lozenge>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
```

## ไอคอนคำนำหน้าและคำต่อท้าย

คุณสามารถใช้พร็อพเพอร์ตี้ `icon` หรือ slot `icon` เพื่อเพิ่มไอคอนคำนำหน้าให้กับโลเซนจ์ โดยค่าเริ่มต้น พร็อพเพอร์ตี้ `icon` หรือ slot จะแสดงเป็นไอคอนคำนำหน้าก่อนป้ายกำกับ  
หากต้องการเพิ่มไอคอนคำต่อท้าย ให้ใช้พร็อพเพอร์ตี้ `postfixIcon` หรือ slot `postfixIcon` ซึ่งจะช่วยให้คุณแสดงไอคอนหลังป้ายกำกับได้

<div class="spr-flex spr-flex-col spr-gap-2 spr-bg-white-50 spr-overflow-auto spr-py-3">
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending" icon="ph:acorn">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="information" tone="information">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="success" tone="success">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="neutral" tone="neutral">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="danger" tone="danger">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="caution" tone="caution">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="plain">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
  </div>
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="information" tone="information" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="success" tone="success" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="neutral" tone="neutral" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="danger" tone="danger" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="caution" tone="caution" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="plain" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
  </div>
</div>
<div class="spr-flex spr-flex-col spr-gap-2 spr-bg-white-50 spr-overflow-auto spr-py-3">
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="information" tone="information">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="success" tone="success">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="neutral" tone="neutral">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="danger" tone="danger">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="caution" tone="caution">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="plain">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
  </div>
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="information" tone="information" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="success" tone="success" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="neutral" tone="neutral" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="danger" tone="danger" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="caution" tone="caution" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="plain" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
  </div>
</div>

```vue
<template>
  <!-- ไอคอนคำนำหน้า -->
  <spr-lozenge label="pending" tone="pending" icon="ph:users-three" />
  <spr-lozenge label="pending" tone="pending">
    <template #icon>
      <Icon icon="ph:users-three" />
    </template>
  </spr-lozenge>

  <!-- ไอคอนคำต่อท้าย -->
  <spr-lozenge label="pending" tone="pending" postfix-icon="ph:users-three" />
  <spr-lozenge label="pending" tone="pending">
    <template #postfixIcon>
      <Icon icon="ph:users-three" />
    </template>
  </spr-lozenge>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
```

## แบบอินเทอร์แอกทีฟ

พร็อพเพอร์ตี้ `interactive` เปิดใช้งานสถานะแบบอินเทอร์แอกทีฟสำหรับโลเซนจ์ ทำให้สามารถตอบสนองต่อการดำเนินการของผู้ใช้ เช่น การโฮเวอร์และกด ซึ่งมีประโยชน์ในการทำให้โลเซนจ์ทำงานเหมือนปุ่มหรือตัวเรียกเมนู

<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" interactive />
  <spr-lozenge label="pending" tone="pending" interactive />
  <spr-lozenge label="information" tone="information" interactive />
  <spr-lozenge label="success" tone="success" interactive />
  <spr-lozenge label="neutral" tone="neutral" interactive />
  <spr-lozenge label="danger" tone="danger" interactive />
  <spr-lozenge label="caution" tone="caution" interactive />
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" fill interactive />
  <spr-lozenge label="pending" tone="pending" fill interactive />
  <spr-lozenge label="information" tone="information" fill interactive />
  <spr-lozenge label="success" tone="success" fill interactive />
  <spr-lozenge label="neutral" tone="neutral" fill interactive />
  <spr-lozenge label="danger" tone="danger" fill interactive />
  <spr-lozenge label="caution" tone="caution" fill interactive />
</div>

```vue
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" interactive />
  <spr-lozenge label="pending" tone="pending" interactive />
  <spr-lozenge label="information" tone="information" interactive />
  <spr-lozenge label="success" tone="success" interactive />
  <spr-lozenge label="neutral" tone="neutral" interactive />
  <spr-lozenge label="danger" tone="danger" interactive />
  <spr-lozenge label="caution" tone="caution" interactive />
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" fill interactive />
  <spr-lozenge label="pending" tone="pending" fill interactive />
  <spr-lozenge label="information" tone="information" fill interactive />
  <spr-lozenge label="success" tone="success" fill interactive />
  <spr-lozenge label="neutral" tone="neutral" fill interactive />
  <spr-lozenge label="danger" tone="danger" fill interactive />
  <spr-lozenge label="caution" tone="caution" fill interactive />
</div>
```

### ดรอปดาวน์

พร็อพเพอร์ตี้ `dropdown` ทำให้โลเซนจ์ทำงานเป็นองค์ประกอบแบบอินเทอร์แอกทีฟที่กำหนดไว้ล่วงหน้าพร้อมไอคอนดรอปดาวน์คำต่อท้ายเริ่มต้น (`ph:caret-down-fill`)

<spr-dropdown id="lozengeDropdown" v-model="dropdownSelection" :menu-list="menuList" lozenge @update:model-value="dropdownUpdateHandler" >
<spr-lozenge v-bind="lozengeProps" dropdown />
</spr-dropdown>
<br/>
<spr-dropdown id="hollowLozengeDropdown" v-model="dropdownSelectionHollow" :menu-list="hollowMenuList" lozenge @update:model-value="dropdownUpdateHandler" >
<spr-lozenge v-bind="hollowLozengeProps" dropdown />
</spr-dropdown>

```vue
<template>
  <spr-dropdown
    id="lozengeDropdown"
    v-model="dropdownSelection"
    :menu-list="menuList"
    lozenge
    @update:model-value="dropdownUpdateHandler"
  >
    <spr-lozenge v-bind="lozengeProps" dropdown />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

import { LOZENGE_TONE } from '@/components/lozenge/lozenge';
import { MenuListType } from '@/components/list/list';
import { Header } from '@/components/table/table';

const menuList = ref(
  LOZENGE_TONE.map((tone: string) => ({
    text: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
    value: tone,
    lozengeProps: {
      label: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
      tone: tone,
      fill: true,
      url: 'https://tinyurl.com/2vzn782p',
      icon: 'ph:address-book-tabs',
    },
  })) as MenuListType[],
);

const dropdownSelection = ref('neutral');
const lozengeProps = computed(() => {
  return menuList.value.find((item) => item.value === dropdownSelection.value)?.lozengeProps;
});

const dropdownUpdateHandler = (newSelection: string) => {
  console.log('Dropdown selection updated:', newSelection);
};

const hollowMenuList = ref(
  LOZENGE_TONE.map((tone: string) => ({
    text: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
    value: tone,
    lozengeProps: {
      label: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
      tone: tone,
      fill: false,
      url: 'https://tinyurl.com/2vzn782p',
      icon: 'ph:address-book-tabs',
    },
  })) as MenuListType[],
);

const dropdownSelectionHollow = ref('neutral');
const hollowLozengeProps = computed(() => {
  return hollowMenuList.value.find((item) => item.value === dropdownSelectionHollow.value)?.lozengeProps;
});
</script>
```

::: tip หมายเหตุ
หากคุณระบุพร็อพเพอร์ตี้ `postfixIcon` หรือ slot มันจะแทนที่ไอคอนดรอปดาวน์เริ่มต้น
:::

<spr-lozenge label="plain" dropdown>
  <template #postfixIcon>
    <Icon icon="ph:dots-three-vertical-bold" />
  </template>
</spr-lozenge>

```vue
<spr-lozenge label="plain" dropdown>
  <template #postfixIcon>
    <Icon icon="ph:dots-three-vertical-bold" />
  </template>
</spr-lozenge>
```

## การโหลด

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-lozenge loading />
</div>

```vue
<template>
  <spr-lozenge loading />
</template>
```

### ความกว้างสูงสุด

ใช้พร็อพเพอร์ตี้ <code>max-width</code> เพื่อจำกัดโลเซนจ์ที่มีป้ายกำกับยาว

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-lozenge label="A very long lozenge label that will be truncated" max-width="120px" tone="information" />
  <spr-lozenge label="Unconstrained lozenge with long label" tone="information" />
</div>

```vue
<spr-lozenge label="A very long lozenge label that will be truncated" max-width="120px" tone="information" />
```

## สล็อต

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>icon</td>
      <td>ปรับแต่งคอมโพเนนต์ไอคอนคำนำหน้า</td>
    </tr>
    <tr>
      <td>avatar</td>
      <td>ปรับแต่งคอมโพเนนต์อวตาร</td>
    </tr>
    <tr>
      <td>postfix-icon</td>
      <td>ปรับแต่งคอมโพเนนต์ไอคอนคำต่อท้าย (แสดงหลังป้ายกำกับ)</td>
    </tr>
  </tbody>
</table>

## การอ้างอิง API

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
      <td>label</td>
      <td>เนื้อหาข้อความหลักที่แสดงในโลเซนจ์</td>
      <td>string</td>
      <td>'label'</td>
    </tr>
    <tr>
      <td>tone</td>
      <td>กำหนดชุดสีของโลเซนจ์เพื่อระบุสถานะหรือการจัดหมวดหมู่ แต่ละโทนมีความหมายเชิงความหมาย:
        <ul>
          <li><code>plain</code>: ค่าเริ่มต้น การจัดสไตล์แบบเป็นกลาง</li>
          <li><code>pending</code>: สำหรับสถานะที่กำลังดำเนินการหรือรออยู่</li>
          <li><code>information</code>: สำหรับเนื้อหาข้อมูล</li>
          <li><code>success</code>: สำหรับการดำเนินการที่เป็นบวกหรือเสร็จสิ้น</li>
          <li><code>neutral</code>: สำหรับเนื้อหาทั่วไปที่ไม่เน้น</li>
          <li><code>danger</code>: สำหรับข้อผิดพลาดหรือคำเตือนที่ต้องการความสนใจ</li>
          <li><code>caution</code>: สำหรับข้อมูลคำเตือน</li>
        </ul>
      </td>
      <td>'plain' | 'pending' | 'information' | 'success' | 'neutral' | 'caution' | 'danger'</td>
      <td>'plain'</td>
    </tr>
    <tr>
      <td>fill</td>
      <td>ควบคุมสไตล์ภาพของโลเซนจ์ เมื่อ <code>true</code> โลเซนจ์จะมีสีพื้นหลังทึบ เมื่อ <code>false</code> จะมีสไตล์เส้นขอบพร้อมพื้นหลังโปร่งใส</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>removable</td>
      <td>เมื่อ <code>true</code> โลเซนจ์สามารถถูกลบโดยผู้ใช้ได้ (แสดงไอคอนลบ)</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>url</td>
      <td>URL สำหรับรูปภาพอวตารที่จะแสดงภายในโลเซนจ์ หากระบุ จะแสดงอวตารที่จุดเริ่มต้นของโลเซนจ์</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>visible</td>
      <td>ควบคุมการมองเห็นของโลเซนจ์ เมื่อ <code>false</code> โลเซนจ์จะไม่แสดงผล</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>เมื่อ <code>true</code> จะแสดงสถานะการโหลดแบบโครงกระดูกแทนเนื้อหาจริง บ่งชี้ว่ากำลังโหลดข้อมูล</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>ชื่อไอคอน Iconify ที่จะแสดงเป็นไอคอนคำนำหน้า (ก่อนป้ายกำกับ) หรือใช้ slot <code>icon</code> สำหรับไอคอนแบบกำหนดเอง</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>postfix-icon</td>
      <td>ชื่อไอคอน Iconify ที่จะแสดงเป็นไอคอนคำต่อท้าย (หลังป้ายกำกับ) หรือใช้ slot <code>postfix-icon</code> สำหรับไอคอนแบบกำหนดเอง</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>interactive</td>
      <td>เมื่อ <code>true</code> โลเซนจ์จะตอบสนองต่อการโต้ตอบของผู้ใช้ด้วยสถานะโฮเวอร์และแอกทีฟ ทำให้เหมาะสำหรับองค์ประกอบที่คลิกได้</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>dropdown</td>
      <td>เมื่อ <code>true</code> โลเซนจ์จะทำงานเป็นตัวเรียกดรอปดาวน์พร้อมไอคอนลูกศรเริ่มต้นและการจัดสไตล์แบบอินเทอร์แอกทีฟ ซึ่งจะตั้งค่า <code>interactive</code> เป็น <code>true</code> โดยอัตโนมัติ</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>max-width</td>
      <td>กำหนดความกว้างสูงสุดสำหรับคอนเทนเนอร์โลเซนจ์ ยอมรับค่าความกว้าง CSS ที่ถูกต้อง (เช่น <code>120px</code>, <code>12rem</code>, <code>clamp(100px, 50%, 240px)</code>, ค่าโทเค็นการออกแบบ หรือ <code>none</code>) ข้อความที่เกินความกว้างนี้จะถูกตัดทอนด้วยจุดไข่ปลา</td>
      <td>string</td>
      <td>'none'</td>
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
      <td>onRemove</td>
      <td>ถูกปล่อยออกมาจากการคลิกปุ่มลบในโลเซนจ์ที่สามารถลบได้</td>
      <td>(event: MouseEvent)</td>
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
      <td>icon</td>
      <td>เนื้อหาแบบกำหนดเองสำหรับพื้นที่ไอคอนคำนำหน้า (แสดงก่อนป้ายกำกับ) ใช้ slot นี้เพื่อแทรกไอคอนหรือคอมโพเนนต์แบบกำหนดเองแทนการใช้พร็อพเพอร์ตี้ <code>icon</code></td>
    </tr>
    <tr>
      <td>avatar</td>
      <td>เนื้อหาแบบกำหนดเองสำหรับพื้นที่อวตาร ใช้ slot นี้เพื่อแทรกคอมโพเนนต์อวตารแบบกำหนดเองแทนการใช้พร็อพเพอร์ตี้ <code>url</code></td>
    </tr>
    <tr>
      <td>postfixIcon</td>
      <td>เนื้อหาแบบกำหนดเองสำหรับพื้นที่ไอคอนคำต่อท้าย (แสดงหลังป้ายกำกับ) ใช้ slot นี้เพื่อแทรกไอคอนหรือคอมโพเนนต์แบบกำหนดเองแทนการใช้พร็อพเพอร์ตี้ <code>postfixIcon</code></td>
    </tr>
  </tbody>
</table>

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>  
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
import SprLozenge from "@/components/lozenge/lozenge.vue"
import SprLogo from "@/components/logo/logo.vue";
import SprDropdown from '@/components/dropdown/dropdown.vue';
import { LOZENGE_TONE } from '@/components/lozenge/lozenge';
import { MenuListType } from '@/components/list/list';
import { Header } from '@/components/table/table';

const menuList = ref(
  LOZENGE_TONE.map((tone: string) => ({
    text: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
    value: tone,
    lozengeProps: {
      label: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
      tone: tone,
      fill: true,
      url: "https://tinyurl.com/2vzn782p",
      icon: "ph:address-book-tabs",
    }
  })) as MenuListType[]
);

const dropdownSelection = ref('neutral');
const lozengeProps = computed(() => {
  return menuList.value.find(item => item.value === dropdownSelection.value)?.lozengeProps;
});

const dropdownUpdateHandler = (newSelection: string) => {
  console.log('Dropdown selection updated:', newSelection);
};

const hollowMenuList = ref(
  LOZENGE_TONE.map((tone: string) => ({
    text: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
    value: tone,
    lozengeProps: {
      label: `${tone.charAt(0).toUpperCase() + tone.slice(1)}`,
      tone: tone,
      fill: false,
      url: "https://tinyurl.com/2vzn782p",
      icon: "ph:address-book-tabs",
    }
  })) as MenuListType[]
);

const dropdownSelectionHollow = ref('neutral');
const hollowLozengeProps = computed(() => {
  return hollowMenuList.value.find(item => item.value === dropdownSelectionHollow.value)?.lozengeProps;
});

const hollowDropdownUpdateHandler = (newSelection: string) => {
  console.log('Dropdown selection updated:', newSelection);
};
</script>
