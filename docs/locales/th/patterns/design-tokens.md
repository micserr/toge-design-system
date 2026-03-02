---
title: โทเค็นการออกแบบ
description: โทเค็นสี ระยะห่าง ตัวอักษร และเงาพื้นฐานที่ขับเคลื่อน Sprout Design System
outline: deep
---

# โทเค็นการออกแบบ

โทเค็นการออกแบบคือค่าพื้นฐาน — สี ระยะห่าง ตัวอักษร เงา และรัศมีมุม — ที่กำหนดภาษาทางสายตาของผลิตภัณฑ์ Sprout โทเค็นทั้งหมดใช้ผ่าน Tailwind CSS utilities ที่มีคำนำหน้า `spr-`

## พาเลทสี

Sprout ใช้พาเลทสี 9 ชื่อ แต่ละพาเลทมีเฉดตั้งแต่ 50 (อ่อนที่สุด) ถึง 950 (เข้มที่สุด)

| พาเลท | วัตถุประสงค์ | 500 Hex |
|---|---|---|
| **white** | สีเทากลาง พื้นหลัง สถานะ disabled | `#7C7C7C` |
| **mushroom** | สีกลางหลัก ข้อความ ขอบ พื้นผิว | `#738482` |
| **tomato** | อันตราย ข้อผิดพลาด การกระทำที่ทำลาย | `#EC4750` |
| **carrot** | ระวัง คำเตือน | `#FF970A` |
| **mango** | รอดำเนินการ รออนุมัติ | `#FFBF00` |
| **kangkong** | สำเร็จ แบรนด์ การกระทำหลัก | `#22C558` |
| **wintermelon** | เน้น ไฮไลท์เสริม | `#02AFCE` |
| **blueberry** | ข้อมูล ลิงก์ | `#2D88FF` |
| **ubas** | สีม่วง การใช้งานพิเศษ | `#8952F6` |

### ระดับเฉดสี

แต่ละพาเลทใช้ระดับเฉดสี 50–950 เดียวกัน:

<div class="spr-grid spr-grid-cols-11 spr-gap-1 spr-mt-4">
  <div class="spr-bg-kangkong-50 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular">50</div>
  <div class="spr-bg-kangkong-100 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular">100</div>
  <div class="spr-bg-kangkong-200 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular">200</div>
  <div class="spr-bg-kangkong-300 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular">300</div>
  <div class="spr-bg-kangkong-400 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular">400</div>
  <div class="spr-bg-kangkong-500 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular spr-text-white-50">500</div>
  <div class="spr-bg-kangkong-600 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular spr-text-white-50">600</div>
  <div class="spr-bg-kangkong-700 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular spr-text-white-50">700</div>
  <div class="spr-bg-kangkong-800 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular spr-text-white-50">800</div>
  <div class="spr-bg-kangkong-900 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular spr-text-white-50">900</div>
  <div class="spr-bg-kangkong-950 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular spr-text-white-50">950</div>
</div>

## โทเค็นสีเชิงความหมาย

แทนที่จะใช้ค่าพาเลทดิบ ให้ใช้โทเค็นเชิงความหมายที่อธิบาย **วัตถุประสงค์** ไม่ใช่สี เสมอ

### สีข้อความ

| โทเค็น | แมปไปยัง | การใช้งาน |
|---|---|---|
| `spr-text-color-strong` | mushroom-950 | ข้อความหลัก หัวข้อ |
| `spr-text-color-base` | mushroom-600 | ข้อความรอง คำอธิบาย |
| `spr-text-color-weak` | mushroom-400 | ข้อความลำดับที่สาม ตัวยึดตำแหน่ง |
| `spr-text-color-disabled` | white-400 | ข้อความสถานะ disabled |
| `spr-text-color-brand-base` | kangkong-700 | ลิงก์ การเน้นแบรนด์ |
| `spr-text-color-danger-base` | tomato-700 | ข้อความแสดงข้อผิดพลาด |
| `spr-text-color-information-base` | blueberry-800 | ข้อความแจ้งเตือนข้อมูล |
| `spr-text-color-inverted-strong` | white-50 | ข้อความบนพื้นหลังเข้ม |

### สีพื้นหลัง

| โทเค็น | แมปไปยัง | การใช้งาน |
|---|---|---|
| `spr-background-color` | white-50 | พื้นหลังหน้า |
| `spr-background-color-surface` | mushroom-50 | พื้นผิวการ์ด/ส่วน |
| `spr-background-color-base` | mushroom-100 | พื้นผิวรอง |
| `spr-background-color-hover` | mushroom-950/8% | โอเวอร์เลย์สถานะ hover |
| `spr-background-color-disabled` | white-100 | องค์ประกอบ disabled |
| `spr-background-color-brand-base` | kangkong-700 | ปุ่มหลัก |
| `spr-background-color-danger-base` | tomato-600 | ปุ่มอันตราย |
| `spr-background-color-inverted` | mushroom-950 | พื้นหลังเข้ม |

### สีขอบ

| โทเค็น | แมปไปยัง | การใช้งาน |
|---|---|---|
| `spr-border-color-strong` | mushroom-500 | ขอบที่เน้น |
| `spr-border-color-base` | mushroom-300 | ขอบ input ค่าเริ่มต้น |
| `spr-border-color-weak` | mushroom-200 | ขอบการ์ด ตัวคั่น |
| `spr-border-color-brand-base` | kangkong-700 | ขอบ active/focus |
| `spr-border-color-danger-base` | tomato-700 | ขอบฟิลด์ข้อผิดพลาด |

## ระยะห่าง

ระบบระยะห่างใช้ CSS custom properties ที่แมปกับโทเค็นขนาดที่ตั้งชื่อไว้

| โทเค็น | ค่า | การใช้งานทั่วไป |
|---|---|---|
| `size-spacing-6xs` | 2px | ช่องว่างขนาดจิ๋ว ออฟเซ็ตไอคอน |
| `size-spacing-5xs` | 4px | padding ด้านในแน่น |
| `size-spacing-4xs` | 6px | padding ด้านในเล็ก |
| `size-spacing-3xs` | 8px | ช่องว่างด้านในค่าเริ่มต้น |
| `size-spacing-2xs` | 12px | ช่องว่างส่วนแบบกระชับ |
| `size-spacing-xs` | 16px | padding มาตรฐาน (`spr-p-4`) |
| `size-spacing-sm` | 24px | padding การ์ด ช่องว่างฟอร์ม |
| `size-spacing-md` | 32px | margin ส่วน |
| `size-spacing-lg` | 40px | margin ส่วนขนาดใหญ่ |
| `size-spacing-xl` | 48px | margin ส่วนของหน้า |
| `size-spacing-2xl` | 64px | — |
| `size-spacing-3xl` | 72px | — |
| `size-spacing-4xl` | 80px | — |
| `size-spacing-5xl` | 96px | — |
| `size-spacing-6xl` | 128px | — |

## รัศมีมุม

| โทเค็น | ค่า | การใช้งาน |
|---|---|---|
| `border-radius-2xs` | 2px | โค้งมนเล็กน้อย |
| `border-radius-xs` | 4px | ป้าย แท็ก |
| `border-radius-sm` | 6px | ปุ่มเล็ก input |
| `border-radius-md` | 8px | tooltip การ์ดเล็ก |
| `border-radius-lg` | 12px | การ์ดมาตรฐาน |
| `border-radius-xl` | 16px | modal dropdown |
| `border-radius-full` | 999px | องค์ประกอบวงกลม ยาเม็ด |

<div class="spr-flex spr-gap-4 spr-mt-4 spr-items-end">
  <div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-2xs spr-w-12 spr-h-12 spr-flex spr-items-center spr-justify-center spr-body-xs-regular">2xs</div>
  <div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-xs spr-w-12 spr-h-12 spr-flex spr-items-center spr-justify-center spr-body-xs-regular">xs</div>
  <div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-sm spr-w-12 spr-h-12 spr-flex spr-items-center spr-justify-center spr-body-xs-regular">sm</div>
  <div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-md spr-w-12 spr-h-12 spr-flex spr-items-center spr-justify-center spr-body-xs-regular">md</div>
  <div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-lg spr-w-12 spr-h-12 spr-flex spr-items-center spr-justify-center spr-body-xs-regular">lg</div>
  <div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-xl spr-w-12 spr-h-12 spr-flex spr-items-center spr-justify-center spr-body-xs-regular">xl</div>
  <div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-full spr-w-12 spr-h-12 spr-flex spr-items-center spr-justify-center spr-body-xs-regular">full</div>
</div>

## ตัวอักษร

### ตระกูลฟอนต์

| โทเค็น | ฟอนต์ | การใช้งาน |
|---|---|---|
| `spr-font-main` | Rubik | แบบอักษรหลักสำหรับ UI ทั้งหมด |
| `spr-font-inbound` | Roboto | แบบอักษรรอง (เนื้อหาขาเข้า) |
| `spr-font-code` | Roboto Mono | โค้ดสั้น monospace |

### สไตล์ข้อความ

| คลาส | ขนาด | ความสูงบรรทัด | น้ำหนัก | การใช้งาน |
|---|---|---|---|---|
| `spr-heading-xl` | 48px | 60px | Medium | หัวข้อหลักของหน้า |
| `spr-heading-lg` | 40px | 48px | Medium | ชื่อหน้า |
| `spr-heading-md` | 32px | 40px | Medium | ชื่อส่วน |
| `spr-heading-sm` | 28px | 36px | Medium | ชื่อส่วนย่อย |
| `spr-heading-xs` | 24px | 32px | Medium | ชื่อการ์ด |
| `spr-subheading-sm` | 20px | 24px | Medium | หัวข้อส่วนฟอร์ม |
| `spr-subheading-xs` | 16px | 20px | Medium | หัวข้อเล็ก |
| `spr-body-md-regular` | 16px | 24px | Regular | เนื้อหาหลัก |
| `spr-body-sm-regular` | 14px | 20px | Regular | เนื้อหาค่าเริ่มต้น |
| `spr-body-xs-regular` | 12px | 16px | Regular | คำบรรยาย ข้อความช่วยเหลือ |
| `spr-label-sm-medium` | 14px | 14px | Medium | หัวข้อตาราง ป้ายกำกับ |
| `spr-label-xs-medium` | 12px | 12px | Medium | ป้ายกำกับเล็ก แท็ก |

## เงา

| โทเค็น | ค่า | การใช้งาน |
|---|---|---|
| `spr-drop-shadow-sm` | `0px 2px 4px -1px #262B2B1F` | ความลึกเล็กน้อย |
| `spr-drop-shadow` | `0px 2px 8px -2px #262B2B33` | dropdown tooltip |
| `spr-drop-shadow-md` | `0px 4px 12px 0px #262B2B29` | modal popover |
| `spr-drop-shadow-top-sm` | `0px -2px 4px -1px #262B2B1F` | ความลึกยึดด้านล่าง |
| `spr-drop-shadow-top` | `0px -2px 8px -2px #262B2B33` | แผ่นด้านล่าง |
| `spr-drop-shadow-top-md` | `0px -4px 12px 0px #262B2B29` | แผ่นด้านล่างที่เด่นชัด |

## กฎ

| กฎ | รายละเอียด |
|---|---|
| ใช้โทเค็นเชิงความหมาย | ห้ามใช้ค่าพาเลทดิบ (`spr-border-mushroom-300`) — ใช้โทเค็นเชิงความหมาย (`spr-border-color-base`) |
| คำนำหน้า Tailwind | คลาส utility ทั้งหมดต้องมีคำนำหน้า `spr-` |
| ระบบระยะห่าง | ใช้โทเค็นระยะห่างที่ตั้งชื่อไว้ ไม่ใช่ค่าพิกเซลตามอำเภอใจ |
| สไตล์ตัวอักษรแบบรวม | ใช้สไตล์ข้อความที่กำหนดไว้ล่วงหน้า (`spr-heading-sm`) แทนการรวม font-size + line-height ด้วยตนเอง |

## แหล่งข้อมูล

เวอร์ชันที่เครื่องอ่านได้: [`design-rules/tokens.json`](https://github.com/user/repo/blob/dev/design-rules/tokens.json)