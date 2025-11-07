---
title: ปุ่มดรอปดาวน์
descripttion: คอมโพเนนต์ปุ่มดรอปดาวน์รวมปุ่มการดำเนินการหลักกับเมนูดรอปดาวน์สำหรับตัวเลือกเพิ่มเติม สนับสนุนโทน ขนาด และตัวแปรต่างๆ
outline: deep
---

# ปุ่มดรอปดาวน์

คอมโพเนนต์ปุ่มดรอปดาวน์รวมสองปุ่มกับเมนูดรอปดาวน์ ช่วยให้ผู้ใช้เรียกใช้การดำเนินการหลักหรือเลือกจากรายการตัวเลือกที่เกี่ยวข้อง คอมโพเนนต์นี้เหมาะสำหรับสถานการณ์ที่การดำเนินการปุ่มเดียวมาพร้อมกับการดำเนินการรองเพิ่มเติมที่เข้าถึงได้ผ่านดรอปดาวน์ สนับสนุนการปรับแต่งสำหรับโทน ขนาด ตัวแปร และสามารถปิดใช้งานตามความจำเป็น

## การใช้งานพื้นฐาน

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown
    dropdown-id="example1"
    v-model="selected"
    :menu-list="menuList"
    width="160px"
    popper-width="160px"
    @click="mainButtonClicked"
  >
    ปุ่มดรอปดาวน์
  </spr-button-dropdown>
</div>

```vue
<template>
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-button-dropdown
      dropdown-id="example1"
      v-model="selected"
      :menu-list="menuList"
      width="160px"
      popper-width="160px"
      @click="mainButtonClicked"
    >
      ปุ่มดรอปดาวน์
    </spr-button-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const selected = ref([]);
const menuList = ref([
  {
    text: 'เพิ่ม',
    value: 'add',
    icon: 'ph:check',
    iconColor: 'spr-text-color-supporting',
    onClickFn: () => {
      alert('เพิ่มถูกคลิก');
    },
  },
  {
    text: 'ลบ',
    value: 'delete',
    icon: 'ph:trash',
    textColor: 'spr-text-color-danger-base',
    onClickFn: () => {
      alert('ลบถูกคลิก');
    },
  },
]);

const mainButtonClicked = () => {
  alert('ปุ่มหลักถูกคลิก');
};
</script>
```

## โทน

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown
    dropdown-id="example2"
    v-model="selectedNeutral"
    :menu-list="menuList"
    tone="neutral"
  >
    เป็นกลาง
  </spr-button-dropdown>
  <spr-button-dropdown
    dropdown-id="example3"
    v-model="selectedSuccess"
    :menu-list="menuList"
    tone="success"
  >
    สำเร็จ
  </spr-button-dropdown>
</div>

```vue
<spr-button-dropdown dropdown-id="example2" v-model="selectedNeutral" :menu-list="menuList" tone="neutral">
  เป็นกลาง
</spr-button-dropdown>
<spr-button-dropdown dropdown-id="example3" v-model="selectedSuccess" :menu-list="menuList" tone="success">
  สำเร็จ
</spr-button-dropdown>
```

## ขนาด

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown
    v-model="selectedSmall"
    dropdown-id="example4"
    :menu-list="menuList"
    size="small"
  >
    เล็ก
  </spr-button-dropdown>
  <spr-button-dropdown
    v-model="selectedMedium"
    dropdown-id="example5"
    :menu-list="menuList"
  >
    กลาง
  </spr-button-dropdown>
  <spr-button-dropdown
    v-model="selectedLarge"
    dropdown-id="example6"
    :menu-list="menuList"
    size="large"
  >
    ใหญ่
  </spr-button-dropdown>
</div>

```vue
<spr-button-dropdown v-model="selectedSmall" dropdown-id="example4" :menu-list="menuList" size="small">
  เล็ก
</spr-button-dropdown>
<spr-button-dropdown v-model="selectedMedium" dropdown-id="example5" :menu-list="menuList">
  กลาง
</spr-button-dropdown>
<spr-button-dropdown v-model="selectedLarge" dropdown-id="example6" :menu-list="menuList" size="large">
  ใหญ่
</spr-button-dropdown>
```

## ตัวแปร

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown
    v-model="selectedPrimary"
    dropdown-id="example7"
    :menu-list="menuList"
    variant="primary"
  >
    หลัก
  </spr-button-dropdown>
  <spr-button-dropdown
    v-model="selectedSecondary"
    dropdown-id="example8"
    :menu-list="menuList"
    variant="secondary"
  >
    รอง
  </spr-button-dropdown>
</div>

```vue
<spr-button-dropdown v-model="selectedPrimary" dropdown-id="example7" :menu-list="menuList" variant="primary">
  หลัก
</spr-button-dropdown>
<spr-button-dropdown v-model="selectedSecondary" dropdown-id="example8" :menu-list="menuList" variant="secondary">
  รอง
</spr-button-dropdown>
```

## ปิดใช้งาน

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown
    v-model="selectedDisabled"
    dropdown-id="example9"
    :menu-list="menuList"
    disabled
  >
    ปิดใช้งาน
  </spr-button-dropdown>
  <spr-button-dropdown
    v-model="selectedDisabled"
    dropdown-id="example9"
    :menu-list="menuList"
    variant="secondary"
    disabled
  >
    ปิดใช้งาน
  </spr-button-dropdown>
</div>

```vue
<spr-button-dropdown v-model="selectedDisabled" dropdown-id="example9" :menu-list="menuList" disabled>
  ปิดใช้งาน
</spr-button-dropdown>
<spr-button-dropdown
  v-model="selectedDisabled"
  dropdown-id="example9"
  :menu-list="menuList"
  variant="secondary"
  disabled
>
  ปิดใช้งาน
</spr-button-dropdown>
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
      <td>modelValue</td>
      <td>รายการเมนูที่เลือกอยู่ในปัจจุบัน ใช้กับ <code>v-model</code> สำหรับการผูกสองทางเพื่อติดตามการเลือกในเมนูดรอปดาวน์</td>
      <td>MenuListType[] | string[] | Record&lt;string, unknown&gt;[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>menuList</td>
      <td>
        อาร์เรย์ของตัวเลือกที่จะแสดงในเมนูดรอปดาวน์ แต่ละรายการสามารถรวม:
        <ul>
          <li><code>text</code>: ข้อความแสดงสำหรับรายการเมนู</li>
          <li><code>value</code>: ตัวระบุเฉพาะสำหรับรายการเมนู</li>
          <li><code>icon</code>: ชื่อไอคอน Iconify ไม่บังคับ</li>
          <li><code>iconColor</code>: คลาส CSS ไม่บังคับสำหรับสีไอคอน</li>
          <li><code>textColor</code>: คลาส CSS ไม่บังคับสำหรับสีข้อความ</li>
          <li><code>onClickFn</code>: ฟังก์ชันเรียกกลับไม่บังคับเมื่อรายการถูกคลิก</li>
          <li><code>disabled</code>: บูลีนไม่บังคับเพื่อปิดใช้งานรายการเมนูเฉพาะ</li>
        </ul>
      </td>
      <td>MenuListType[] | string[] | Record&lt;string, unknown&gt;[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>dropdownId</td>
      <td>ตัวระบุเฉพาะที่จำเป็นสำหรับคอมโพเนนต์ดรอปดาวน์ ใช้สำหรับการเข้าถึงและการจัดการสถานะ</td>
      <td>string</td>
      <td>จำเป็น</td>
    </tr>
    <tr>
      <td>tone</td>
      <td>
        ควบคุมธีมสีของปุ่มดรอปดาวน์ ตัวเลือก:
        <ul>
          <li><code>neutral</code>: ลักษณะมาตรฐาน</li>
          <li><code>success</code>: ลักษณะสีเขียวสำหรับการดำเนินการเชิงบวก</li>
        </ul>
        หมายเหตุ: ไม่เหมือนกับคอมโพเนนต์ปุ่มมาตรฐาน โทนอันตรายไม่พร้อมใช้งานสำหรับปุ่มดรอปดาวน์
      </td>
      <td>'neutral' | 'success'</td>
      <td>'neutral'</td>
    </tr>
    <tr>
      <td>variant</td>
      <td>
        ควบคุมสไตล์ภาพของปุ่มดรอปดาวน์ ตัวเลือก:
        <ul>
          <li><code>primary</code>: พื้นหลังทึบพร้อมการเน้นที่แข็งแกร่งกว่า</li>
          <li><code>secondary</code>: สไตล์โครงร่างพร้อมการเน้นปานกลาง</li>
        </ul>
        หมายเหตุ: ไม่เหมือนกับคอมโพเนนต์ปุ่มมาตรฐาน ตัวแปรระดับสามไม่พร้อมใช้งาน
      </td>
      <td>'primary' | 'secondary'</td>
      <td>'primary'</td>
    </tr>
    <tr>
      <td>size</td>
      <td>ควบคุมขนาดของปุ่มดรอปดาวน์ ส่งผลต่อการเว้นระยะ ขนาดตัวอักษร และมิติโดยรวม</td>
      <td>'small' | 'medium' | 'large'</td>
      <td>'medium'</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> ปุ่มหลักและทริกเกอร์ดรอปดาวน์ทั้งสองจะไม่โต้ตอบและปรากฏปิดใช้งานภาพ</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>width</td>
      <td>ตั้งค่าความกว้างของคอมโพเนนต์ปุ่มดรอปดาวน์ทั้งหมด สามารถเป็นค่าความกว้าง CSS ที่ถูกต้องใดๆ</td>
      <td>string</td>
      <td>'fit-content'</td>
    </tr>
    <tr>
      <td>popperWidth</td>
      <td>ตั้งค่าความกว้างของคอนเทนเนอร์เมนูดรอปดาวน์ สามารถเป็นค่าความกว้าง CSS ที่ถูกต้องใดๆ</td>
      <td>string</td>
      <td>'fit-content'</td>
    </tr>
    <tr>
      <td>popperInnerWidth</td>
      <td>ตั้งค่าความกว้างของเนื้อหาภายในเมนูดรอปดาวน์ มีประโยชน์สำหรับการปรับแต่งเลย์เอาต์อย่างละเอียด</td>
      <td>string</td>
      <td>'unset'</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>
        ควบคุมตำแหน่งของเมนูดรอปดาวน์สัมพันธ์กับปุ่ม ค่าทั่วไป:
        <ul>
          <li><code>bottom</code>: เปิดด้านล่างปุ่ม (ค่าเริ่มต้น)</li>
          <li><code>top</code>: เปิดด้านบนปุ่ม</li>
          <li><code>left</code>: เปิดทางด้านซ้ายของปุ่ม</li>
          <li><code>right</code>: เปิดทางด้านขวาของปุ่ม</li>
        </ul>
        ตัวแปรที่มี <code>-start</code> หรือ <code>-end</code> จัดตำแหน่งเมนูไปยังจุดเริ่มต้นหรือจุดสิ้นสุดของปุ่ม
      </td>
      <td>
        'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'
      </td>
      <td>'bottom'</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>เหตุการณ์</th>
      <th>เพย์โหลด</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>click</td>
      <td>MouseEvent</td>
      <td>ถูกปล่อยออกมาหากปุ่มหลัก (ซ้าย) ถูกคลิก เหตุการณ์นี้ช่วยให้คุณเรียกใช้การดำเนินการหลักเมื่อปุ่มหลักถูกคลิก แยกจากฟังก์ชันดรอปดาวน์</td>
    </tr>
    <tr>
      <td>update:modelValue</td>
      <td>MenuListType[] | string[] | Record&lt;string, unknown&gt;[]</td>
      <td>ถูกปล่อยออกมาหากมีการเลือกในเมนูดรอปดาวน์ ใช้สำหรับการผูก v-model เพื่ออัปเดตค่าที่เลือก เพย์โหลดประกอบด้วยข้อมูลการเลือกที่สมบูรณ์</td>
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
        <p>เนื้อหาสำหรับปุ่มหลัก (ซ้าย) สามารถรวมข้อความ ไอคอน หรือองค์ประกอบอื่นๆ</p>
        <p>ปุ่มดรอปดาวน์ (ขวา) แสดงไอคอน caret-down เสมอและไม่สามารถปรับแต่งผ่านสล็อต</p>
      </td>
    </tr>
  </tbody>
</table>

### โครงสร้างคอมโพเนนต์

ปุ่มดรอปดาวน์ประกอบด้วยส่วนหลักสามส่วน:

1. **ปุ่มหลัก**: ปุ่มขนาดใหญ่ทางด้านซ้ายที่เรียกใช้การดำเนินการหลักผ่านเหตุการณ์ `click`
2. **ทริกเกอร์ดรอปดาวน์**: ปุ่มขนาดเล็กทางด้านขวาที่มีไอคอน caret ที่เปิดเมนูดรอปดาวน์
3. **เมนูดรอปดาวน์**: เมนูที่ปรากฏขึ้นเมื่อทริกเกอร์ดรอปดาวน์ถูกคลิก ประกอบด้วยตัวเลือกที่ระบุใน `menuList`

### อินเทอร์เฟซ MenuListType

```typescript
// โครงสร้างหลักของออบเจกต์ที่สามารถใช้ใน prop menuList
type MenuListType = {
  text: string; // ข้อความแสดงสำหรับรายการเมนู
  value: string | number; // ตัวระบุเฉพาะสำหรับรายการ
  icon?: string; // ชื่อไอคอน Iconify ไม่บังคับ
  iconColor?: string; // คลาส CSS สำหรับสีไอคอน
  textColor?: string; // คลาส CSS สำหรับสีข้อความ
  onClickFn?: () => void; // ฟังก์ชันที่จะเรียกเมื่อรายการถูกคลิก
  disabled?: boolean; // รายการถูกปิดใช้งานหรือไม่
  // คุณสมบัติเพิ่มเติมไม่บังคับ
  subtext?: string; // บรรทัดข้อความรอง
  subvalue?: string; // ค่ารอง
  sublevel?: MenuListType[]; // รายการเมนูที่ซ้อนกัน (สำหรับเมนูแบบลำดับชั้น)
  group?: string; // ตัวระบุการจัดกลุ่ม
};
```

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="payroll" theme="dark" width="50px" />
</div>

<script setup lang="ts">
import SprButtonDropdown from "@/components/button/button-dropdown/button-dropdown.vue";
import { ref } from "vue";

const menuList = ref([
  { text: 'เพิ่ม', value: 'add', icon:  'ph:check', iconColor: 'spr-text-color-supporting', onClickFn: () => {alert("เพิ่มถูกคลิก")} },
  { text: 'ลบ', value: 'delete', icon: 'ph:trash', textColor: 'spr-text-color-danger-base', onClickFn: () => {alert("ลบถูกคลิก")} },
]);

const mainButtonClicked = () => { alert("ปุ่มหลักถูกคลิก") }
</script>
