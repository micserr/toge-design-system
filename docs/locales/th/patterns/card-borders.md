---
title: ขอบการ์ด
description: แบบแผนสไตล์ขอบสำหรับการ์ดและส่วนคล้ายการ์ดในผลิตภัณฑ์ Sprout
outline: deep
---

# ขอบการ์ด

การ์ดและส่วนคล้ายการ์ดทั้งหมดในผลิตภัณฑ์ Sprout ใช้ `spr-border-color-weak` เป็นสีขอบมาตรฐาน

## โทเค็น

| คุณสมบัติ | โทเค็น | แมปไปยัง | Hex |
|---|---|---|---|
| สีขอบ | `spr-border-color-weak` | `spr-border-mushroom-200` | `#D9DEDE` |

## คอนเทนเนอร์การ์ดมาตรฐาน

ใช้ `spr-border-color-weak` กับ `spr-rounded-border-radius-lg` สำหรับการ์ดมาตรฐาน:

```html
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg p-4">
  <!-- เนื้อหาการ์ด -->
</div>
```

<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4 spr-mt-4">
  <p class="spr-body-sm-regular spr-m-0">นี่คือคอนเทนเนอร์การ์ดมาตรฐานที่ใช้ <code>spr-border-color-weak</code></p>
</div>

## ใช้ `<spr-card>`

`<spr-card>` ใช้ `spr-border-color-weak` โดยอัตโนมัติเมื่อไม่ได้ตั้ง tone (หรือ `tone="plain"`):

```html
<spr-card title="ชื่อส่วน">
  <template #content>
    <!-- เนื้อหาการ์ด -->
  </template>
</spr-card>
```

<spr-card title="ชื่อส่วน" class="spr-mt-4">
  <template #content>
    <p class="spr-body-sm-regular spr-m-0">การ์ดนี้ใช้ <code>spr-border-color-weak</code> โดยอัตโนมัติ</p>
  </template>
</spr-card>

## กฎ

- สีขอบใช้ `spr-border-color-weak` เสมอ — ไม่ใช้ `spr-border-color-base` หรือค่าพาเลทดิบสำหรับคอนเทนเนอร์การ์ด
- ใช้ร่วมกับ `spr-rounded-border-radius-lg` สำหรับมุมโค้งมาตรฐาน
- ใช้ Tailwind มาตรฐานสำหรับ padding/spacing (`p-4`, `p-6` ฯลฯ)

## สิ่งที่ควรทำและไม่ควรทำ

### ควรทำ

```html
<!-- ถูกต้อง: spr-border-color-weak สำหรับคอนเทนเนอร์การ์ด -->
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg p-4">
  ...
</div>
```

### ไม่ควรทำ

```html
<!-- ผิด: spr-border-color-base เข้มเกินไปสำหรับการ์ด -->
<div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-lg p-4">
  ...
</div>

<!-- ผิด: ใช้ค่าพาเลทดิบแทนโทเค็นเชิงความหมาย -->
<div class="spr-border spr-border-solid spr-border-mushroom-300 spr-rounded-border-radius-lg p-4">
  ...
</div>
```
