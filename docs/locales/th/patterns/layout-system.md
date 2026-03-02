---
title: ระบบเลย์เอาท์
description: ระบบระยะห่าง กริด กฎคอนเทนเนอร์ และ breakpoint สำหรับเลย์เอาท์ผลิตภัณฑ์ Sprout
outline: deep
---

# ระบบเลย์เอาท์

ระบบเลย์เอาท์ของ Sprout สร้างขึ้นจากระบบระยะห่างที่สม่ำเสมอ breakpoint แบบ responsive และ Tailwind CSS grid utilities — ทั้งหมดใช้คำนำหน้า `spr-`

## ระบบระยะห่าง

ระยะห่างทั้งหมดใน Sprout ใช้ระบบที่กำหนดไว้ล่วงหน้าตาม CSS custom properties

| โทเค็น | ค่า | คลาส Tailwind | การใช้งานทั่วไป |
|---|---|---|---|
| `6xs` | 2px | `spr-p-size-spacing-6xs` | ช่องว่างขนาดจิ๋ว |
| `5xs` | 4px | `spr-p-size-spacing-5xs` | padding แน่น |
| `4xs` | 6px | `spr-p-size-spacing-4xs` | padding เล็ก |
| `3xs` | 8px | `spr-p-size-spacing-3xs` | ช่องว่างด้านใน |
| `2xs` | 12px | `spr-p-size-spacing-2xs` | ช่องว่างกระชับ |
| `xs` | 16px | `spr-p-size-spacing-xs` | padding มาตรฐาน |
| `sm` | 24px | `spr-p-size-spacing-sm` | ช่องว่างการ์ด/ฟอร์ม |
| `md` | 32px | `spr-p-size-spacing-md` | margin ส่วน |
| `lg` | 40px | `spr-p-size-spacing-lg` | margin ขนาดใหญ่ |
| `xl` | 48px | `spr-p-size-spacing-xl` | ส่วนของหน้า |

::: tip
Tailwind แบบย่อมาตรฐาน (`spr-p-4` = 16px, `spr-p-6` = 24px) ก็ใช้ร่วมกับโทเค็นที่ตั้งชื่อไว้ได้เช่นกัน
:::

## Breakpoint

Sprout ใช้ responsive breakpoint แบบ mobile-first (ค่าเริ่มต้นของ Tailwind):

| Breakpoint | ความกว้าง | คำนำหน้าคลาส | การใช้งาน |
|---|---|---|---|
| ค่าเริ่มต้น | 0px+ | (ไม่มี) | มือถือแนวตั้ง |
| `sm` | 640px+ | `sm:spr-` | มือถือแนวนอน |
| `md` | 768px+ | `md:spr-` | แท็บเล็ต |
| `lg` | 1024px+ | `lg:spr-` | เดสก์ท็อป |
| `xl` | 1280px+ | `xl:spr-` | เดสก์ท็อปขนาดใหญ่ |
| `2xl` | 1536px+ | `2xl:spr-` | หน้าจอขนาดใหญ่พิเศษ |

## คอนเทนเนอร์

คอนเทนเนอร์กึ่งกลางพร้อม padding แบบ responsive:

```html
<div class="spr-container">
  <!-- เนื้อหา -->
</div>
```

| Breakpoint | Padding แนวนอน |
|---|---|
| ค่าเริ่มต้น | 16px |
| `sm` | 32px |
| `md` | 40px |
| `lg` | 48px |
| `xl` | 96px |
| `xxl` | 104px |

## ความกว้างสูงสุดของเนื้อหา

| โทเค็น | ค่า | การใช้งาน |
|---|---|---|
| `spr-max-w-sm` | 640px | เนื้อหาแคบ (ฟอร์ม modal) |
| `spr-max-w-md` | 1000px | เนื้อหาปานกลาง (หน้ารายละเอียด) |
| `spr-max-w-lg` | 1320px | เนื้อหากว้าง (แดชบอร์ด) |

## รูปแบบกริด

รูปแบบเลย์เอาท์กริดที่ใช้ทั่วไปในผลิตภัณฑ์ Sprout:

### ฟอร์มสองคอลัมน์

```html
<div class="spr-grid spr-grid-cols-2 spr-gap-4">
  <spr-input label="First Name" />
  <spr-input label="Last Name" />
</div>
```

<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4 spr-mt-4">
  <div class="spr-grid spr-grid-cols-2 spr-gap-4">
    <spr-input label="First Name" placeholder="e.g., Juan" />
    <spr-input label="Last Name" placeholder="e.g., dela Cruz" />
  </div>
</div>

### ฟอร์มแบบ Responsive (ซ้อนกันบนมือถือ)

```html
<div class="spr-grid spr-grid-cols-1 md:spr-grid-cols-2 spr-gap-4">
  <spr-input label="Email" />
  <spr-input label="Phone" />
</div>
```

### กริดการ์ดสามคอลัมน์

```html
<div class="spr-grid spr-grid-cols-3 spr-gap-4">
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4">Card 1</div>
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4">Card 2</div>
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4">Card 3</div>
</div>
```

<div class="spr-grid spr-grid-cols-3 spr-gap-4 spr-mt-4">
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4">
    <p class="spr-subheading-xs spr-m-0">Card 1</p>
    <p class="spr-body-sm-regular spr-text-color-base spr-m-0 spr-mt-2">เนื้อหาวิดเจ็ตแดชบอร์ด</p>
  </div>
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4">
    <p class="spr-subheading-xs spr-m-0">Card 2</p>
    <p class="spr-body-sm-regular spr-text-color-base spr-m-0 spr-mt-2">เนื้อหาวิดเจ็ตแดชบอร์ด</p>
  </div>
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4">
    <p class="spr-subheading-xs spr-m-0">Card 3</p>
    <p class="spr-body-sm-regular spr-text-color-base spr-m-0 spr-mt-2">เนื้อหาวิดเจ็ตแดชบอร์ด</p>
  </div>
</div>

## กฎ

| กฎ | รายละเอียด |
|---|---|
| ใช้คำนำหน้า `spr-` เสมอ | `spr-p-4`, `spr-grid`, `spr-gap-4` — ไม่ใช่ `p-4`, `grid`, `gap-4` |
| ใช้โทเค็นระยะห่าง | ใช้โทเค็นที่ตั้งชื่อไว้แทนค่าตามอำเภอใจ |
| Responsive แบบ mobile-first | เริ่มจากเลย์เอาท์มือถือ เพิ่ม breakpoint override (`md:spr-grid-cols-2`) |
| Padding คอนเทนเนอร์ | ใช้ `spr-container` สำหรับจัดกึ่งกลางระดับหน้าพร้อม padding แบบ responsive |

## แหล่งข้อมูล

เวอร์ชันที่เครื่องอ่านได้: [`design-rules/layout-system.yaml`](https://github.com/user/repo/blob/dev/design-rules/layout-system.yaml)