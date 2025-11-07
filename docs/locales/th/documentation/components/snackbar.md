---
title: Snackbar
descripttion: แถบข้อความป๊อปอัปเพื่อแสดงข้อความและดำเนินการ
outline: deep
---

# Snackbar

แถบข้อความป๊อปอัปเพื่อแสดงข้อความและดำเนินการ

<spr-snackbar ref="snackbar" />

## การใช้งานพื้นฐาน

Snackbar ใช้คอมโพเนนต์ `<Teleport>` ของ Vue เพื่อแนบคอมโพเนนต์ snackbar เข้ากับ HTML `body` และยังใช้ `defineExpose` ของ Vue เพื่อเปิดเผยฟังก์ชันห้าฟังก์ชันสำหรับแสดง snackbar ต่างๆ

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button @click="showSnackbar1">แสดง Snackbar</spr-button>
</div>

```vue
<template>
  <spr-snackbar ref="snackbar" />

  <spr-button @click="showSnackbar1">แสดง Snackbar</spr-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const snackbar = ref(null);

const showSnackbar1 = () => {
  snackbar.value.showSnackbar({
    text: 'นี่คือข้อความตัวอย่าง',
  });
};
</script>
```

## โทนสี

Snackbar สามารถมีโทนสีได้สี่แบบ: `success`, `information`, `danger`, `caution`

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button @click="showInformation">แสดงข้อมูล</spr-button>
  <spr-button @click="showSuccess" tone="success">แสดงความสำเร็จ</spr-button>
  <spr-button @click="showDanger" tone="danger">แสดงความผิดพลาด</spr-button>
  <spr-button @click="showCaution" tone="danger" variant="secondary">แสดงคำเตือน</spr-button>
</div>

```vue
<template>
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-snackbar ref="snackbar" />
    <spr-button @click="showInformation">แสดงข้อมูล</spr-button>
    <spr-button @click="showSuccess" tone="success">แสดงความสำเร็จ</spr-button>
    <spr-button @click="showDanger" tone="danger">แสดงความผิดพลาด</spr-button>
    <spr-button @click="showCaution" tone="danger" variant="secondary">แสดงคำเตือน</spr-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const snackbar = ref(null);

const showSuccess = () => {
  snackbar.value.showSuccess({
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    showIcon: true,
  });
};

const showInformation = () => {
  snackbar.value.showInformation({
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    showIcon: true,
  });
};

const showDanger = () => {
  snackbar.value.showDanger({
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    showIcon: true,
  });
};

const showCaution = () => {
  snackbar.value.showCaution({
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    showIcon: true,
  });
};
</script>
```

::: tip
หรือคุณสามารถใช้ `showSnackbar()` เริ่มต้นและกำหนดพร็อพเพอร์ตี้ `tone` เป็น `success`, `information`, `danger`, `caution`
:::

## การดำเนินการ

พร็อพเพอร์ตี้ action เป็นป้ายชื่อที่คลิกได้บน snackbar ซึ่งเราสามารถกำหนดฟังก์ชันได้ เมื่อไม่ได้กำหนด action ค่าเริ่มต้นคือลบ snackbar

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button @click="showWithCloseButton">แสดง snackbar ที่มีปุ่มปิด</spr-button>
  <spr-button @click="showWithFunction">แสดง snackbar ที่มีฟังก์ชัน</spr-button>
  <spr-button @click="showWithActionIconOnly">แสดง snackbar ที่มีไอคอนการดำเนินการเท่านั้น</spr-button>
</div>

```vue
<template>
  <spr-snackbar ref="snackbar" />

  <spr-button @click="showWithCloseButton">แสดง snackbar ที่มีปุ่มปิด</spr-button>
  <spr-button @click="showWithFunction">แสดง snackbar ที่มีฟังก์ชัน</spr-button>
  <spr-button @click="showWithActionIconOnly">แสดง snackbar ที่มีไอคอนการดำเนินการ</spr-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const snackbar = ref(null);

const showWithCloseButton = () => {
  snackbar.value.showInformation({
    text: 'Snackbar นี้จะปิดเมื่อคุณคลิกปุ่มปิด',
    showIcon: true,
    actionText: 'ปิด',
    showAction: true,
  });
};

const showWithFunction = () => {
  snackbar.value.showCaution({
    text: 'Snackbar นี้เรียกใช้ฟังก์ชัน',
    showIcon: true,
    actionText: 'ดำเนินการ',
    showAction: true,
    action: () => alert('คลิกดำเนินการแล้ว'),
  });
};

const showWithActionIconOnly = () => {
  snackbar.value.showSnackbar({
    text: 'Snackbar นี้เรียกใช้ฟังก์ชัน',
    tone: 'danger',
    showIcon: true,
    actionText: '',
    showAction: true,
    actionIconProps: {
      icon: 'ph:trash-fill',
      tone: 'danger',
    },
    action: () => alert('Snackbar ที่มีไอคอนการดำเนินการ'),
  });
};
</script>
```

## ช่องการดำเนินการของ Snackbar

ช่องนี้ช่วยให้คุณปรับแต่งส่วนการดำเนินการของ snackbar คุณสามารถใช้คอมโพเนนต์หรือองค์ประกอบ HTML ใดก็ได้เป็นการดำเนินการ

::: warning
ต้องตั้งค่า `showAction` เป็น `true` เพื่อให้แสดงช่องนี้
:::

  <spr-snackbar ref="slottedActionSnackbar">
    <template #snackbarActions>
      <div class="spr-flex spr-cursor-pointer spr-items-center">
        <spr-button class="spr-mr-2" @click="handleSlottedAction">
          การดำเนินการแบบช่อง
        </spr-button>
        ข้อความการดำเนินการ
      </div>
    </template>
  </spr-snackbar>
<spr-button @click="showSlottedActionSnackbar">แสดง snackbar ที่มีการดำเนินการแบบช่อง</spr-button>

```vue
<template>
  <spr-snackbar ref="slottedActionSnackbar">
    <template #snackbarActions>
      <div class="spr-flex spr-cursor-pointer spr-items-center">
        <spr-button class="spr-mr-2" @click="handleSlottedAction"> การดำเนินการแบบช่อง </spr-button>
        ข้อความการดำเนินการ
      </div>
    </template>
  </spr-snackbar>
  <spr-button @click="showSlottedSnackbarAction">แสดง snackbar ที่มีฟังก์ชัน</spr-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const slottedActionSnackbar = ref(null);

const handleSlottedAction = () => {
  // จัดการการคลิกการดำเนินการแบบช่อง
  alert('คลิกการดำเนินการแบบช่องแล้ว');
};

const showSlottedSnackbarAction = () => {
  slottedActionSnackbar.value.showSnackbar({
    text: 'Snackbar นี้มีการดำเนินการแบบช่อง',
    tone: 'success',
    showIcon: true,
    showAction: true,
    actionText: '',
  });
};
</script>
```

## การอ้างอิง API

### Props

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>ประเภท</th>
      <th>ค่าเริ่มต้น</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>text</code>
      </td>
      <td>ข้อความที่จะแสดงใน snackbar นี่คือเนื้อหาหลักที่สื่อสารข้อมูลกับผู้ใช้</td>
      <td>string</td>
      <td><code>จำเป็น</code></td>
    </tr>
    <tr>
      <td>
        <code>tone</code>
      </td>
      <td>
        กำหนดโทนสีและไอคอนของ snackbar เพื่อสื่อสารข้อความประเภทต่างๆ:
        <ul>
          <li><code>success</code>: โทนสีเขียวพร้อมไอคอนวงกลมถูก</li>
          <li><code>information</code>: โทนสีน้ำเงินพร้อมไอคอนข้อมูล</li>
          <li><code>danger</code>: โทนสีแดงพร้อมไอคอนวงกลมคำเตือน</li>
          <li><code>caution</code>: โทนสีส้มพร้อมไอคอนคำเตือน</li>
        </ul>
      </td>
      <td>'success' | 'information' | 'danger' | 'caution'</td>
      <td><code>'information'</code></td>
    </tr>
    <tr>
      <td>
        <code>showIcon</code>
      </td>
      <td>ควบคุมการมองเห็นของไอคอนเฉพาะโทนสีใน snackbar</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>actionText</code>
      </td>
      <td>ข้อความป้ายชื่อสำหรับปุ่มการดำเนินการ ซึ่งจะปรากฏเป็นข้อความที่คลิกได้ซึ่งสามารถเรียกใช้ฟังก์ชันการดำเนินการ</td>
      <td>string</td>
      <td><code>'ดำเนินการ'</code></td>
    </tr>
    <tr>
      <td>
        <code>showAction</code>
      </td>
      <td>ควบคุมการมองเห็นของปุ่ม/ข้อความการดำเนินการใน snackbar เมื่อตั้งค่าเป็น true ปุ่ม/ข้อความการดำเนินการจะแสดง</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>action</code>
      </td>
      <td>ฟังก์ชันที่จะดำเนินการเมื่อคลิกข้อความ/ปุ่มการดำเนินการ หากไม่ได้ระบุ การดำเนินการเริ่มต้นคือปิด snackbar</td>
      <td>Function</td>
      <td><code>() => {}</code></td>
    </tr>
    <tr>
      <td>
        <code>duration</code>
      </td>
      <td>ระยะเวลาเป็นมิลลิวินาทีที่ snackbar จะแสดงก่อนที่จะหายไปโดยอัตโนมัติ ตั้งค่าผ่าน snackbar store</td>
      <td>number</td>
      <td><code>4000</code></td>
    </tr>
    <tr>
      <td>
        <code>actionIconProps</code>
      </td>
      <td>
        ออบเจกต์การกำหนดค่าสำหรับปุ่มไอคอนการดำเนินการ ประกอบด้วย:
        <ul>
          <li><code>icon</code>: ชื่อไอคอน Iconify ที่จะแสดงบนปุ่ม</li>
          <li><code>tone</code>: โทนสีสำหรับปุ่มไอคอน</li>
        </ul>
      </td>
      <td>{ icon: string; tone: 'neutral' | 'success' | 'danger' }</td>
      <td><code>undefined</code></td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>พารามิเตอร์</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>click</code>
      </td>
      <td>ปล่อยออกมาเมื่อคลิก snackbar อีเวนต์นี้มาจากคอมโพเนนต์ Snack</td>
      <td><code>(evt: MouseEvent)</code> - ออบเจกต์อีเวนต์เมาส์</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">ชื่อ</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>default</code> / <code>snackbarActions</code>
      </td>
      <td>ช่องสำหรับปรับแต่งส่วนการดำเนินการของ snackbar โปรดทราบว่า <code>showAction</code> ต้องตั้งค่าเป็น <code>true</code> เพื่อให้ช่องนี้แสดงผล</td>
    </tr>
    <tr>
      <td>
        <code>icon</code>
      </td>
      <td>ช่องสำหรับปรับแต่งไอคอนที่แสดงใน snackbar พร้อมใช้งานในคอมโพเนนต์ Snack</td>
    </tr>
    <tr>
      <td>
        <code>label</code>
      </td>
      <td>ช่องสำหรับปรับแต่งเนื้อหาป้ายข้อความ พร้อมใช้งานในคอมโพเนนต์ Snack</td>
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
        <code>showSnackbar</code>
      </td>
      <td>แสดง snackbar ด้วยการกำหนดค่าที่ระบุ ใช้เมธอดนี้เมื่อคุณต้องการปรับแต่ง snackbar อย่างเต็มรูปแบบ</td>
      <td><code>(payload: SnackPropTypes)</code> - ออบเจกต์การกำหนดค่าที่มี props ที่อธิบายข้างต้น</td>
    </tr>
    <tr>
      <td>
        <code>showSuccess</code>
      </td>
      <td>แสดง snackbar ความสำเร็จ (สีเขียว) ด้วยการกำหนดค่าที่ระบุ ตั้งค่าโทนเป็น 'success' โดยอัตโนมัติ</td>
      <td><code>(payload: SnackPropTypes)</code> - ออบเจกต์การกำหนดค่า (โทนจะถูกแทนที่)</td>
    </tr>
    <tr>
      <td>
        <code>showInformation</code>
      </td>
      <td>แสดง snackbar ข้อมูล (สีน้ำเงิน) ด้วยการกำหนดค่าที่ระบุ ตั้งค่าโทนเป็น 'information' โดยอัตโนมัติ</td>
      <td><code>(payload: SnackPropTypes)</code> - ออบเจกต์การกำหนดค่า (โทนจะถูกแทนที่)</td>
    </tr>
    <tr>
      <td>
        <code>showDanger</code>
      </td>
      <td>แสดง snackbar ความผิดพลาด (สีแดง) ด้วยการกำหนดค่าที่ระบุ ตั้งค่าโทนเป็น 'danger' โดยอัตโนมัติ</td>
      <td><code>(payload: SnackPropTypes)</code> - ออบเจกต์การกำหนดค่า (โทนจะถูกแทนที่)</td>
    </tr>
    <tr>
      <td>
        <code>showCaution</code>
      </td>
      <td>แสดง snackbar คำเตือน (สีส้ม) ด้วยการกำหนดค่าที่ระบุ ตั้งค่าโทนเป็น 'caution' โดยอัตโนมัติ</td>
      <td><code>(payload: SnackPropTypes)</code> - ออบเจกต์การกำหนดค่า (โทนจะถูกแทนที่)</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from "vue";

import { useSnackbar } from "@/components/snackbar/use-snackbar.ts";

import SprSnackbar from "@/components/snackbar/snackbar.vue";
import SprButton from "@/components/button/button.vue";

const snackbar = ref(null);
const slottedActionSnackbar = ref(null);

const showSnackbar1 = () => {
  snackbar.value.showSnackbar({
    text: "นี่คือข้อความตัวอย่าง",
  });
}

/* #region - โทนสี  */
const showSuccess = () => {
  snackbar.value.showSuccess({
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    showIcon: true,
  });
}

const showInformation = () => {
  snackbar.value.showInformation({
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    showIcon: true,
  });
}

const showDanger = () => {
  snackbar.value.showDanger({
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    showIcon: true,
  });
}

const showCaution = () => {
  snackbar.value.showCaution({
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    showIcon: true,
  });
}
/* #endregion - โทนสี */

const showWithCloseButton = () => {
  snackbar.value.showInformation({
    text: "Snackbar นี้จะปิดเมื่อคุณคลิกปุ่มปิด",
    showIcon: true,
    actionText: "ปิด",
    showAction: true
  });
}

const showWithFunction = () => {
  snackbar.value.showCaution({
    text: "Snackbar นี้เรียกใช้ฟังก์ชัน",
    showIcon: true,
    actionText: "ดำเนินการ",
    showAction: true,
    action: () => alert("คลิกดำเนินการแล้ว"),
  });
}

const showWithActionIconOnly = () => {
  snackbar.value.showSnackbar({
    text: "Snackbar นี้เรียกใช้ฟังก์ชันที่มีไอคอนการดำเนินการเท่านั้น",
    tone: "danger",
    showIcon: true,
    actionText: "",
    showAction: true,
    actionIconProps: {
      icon: "ph:trash-fill",
      tone: "danger"
    },
    action: () => alert("Snackbar ที่มีไอคอนการดำเนินการเท่านั้น"),
  });
}

const showSlottedActionSnackbar = () => {
  slottedActionSnackbar.value.showSnackbar({
    text: "Snackbar นี้มีการดำเนินการแบบช่อง",
    tone: 'success',
    showIcon: true,
    showAction: true,
    actionText: ""
  });
}

const handleSlottedAction = () => {
  alert("คลิกการดำเนินการแบบช่องแล้ว");
}
</script>
