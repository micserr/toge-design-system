---
title: ส่วนฟอร์ม
description: รูปแบบเลย์เอาท์สำหรับแบ่งฟอร์มเป็นส่วนตรรกะด้วยเส้นคั่นเต็มความกว้าง
outline: deep
---

# ส่วนฟอร์ม

ฟอร์มในผลิตภัณฑ์ Sprout แบ่งเป็นส่วนตรรกะ (เช่น "ข้อมูลส่วนบุคคล" "ข้อมูลติดต่อ" "การจ้างงาน") แต่ละส่วนคั่นด้วยเส้นแนวนอน `spr-border-color-weak` เต็มความกว้าง

## เลย์เอาท์

```
┌──────────────────────────────────────────┐
│  ส่วน A                                  │  ← padding 16px (p-4)
│  [ช่องกรอกข้อมูล...]                      │
│                                          │
├──────────────────────────────────────────┤  ← ขอบเต็มความกว้าง
│  ส่วน B                                  │  ← padding 16px (p-4)
│  [ช่องกรอกข้อมูล...]                      │
│                                          │
├──────────────────────────────────────────┤  ← ขอบเต็มความกว้าง
│  ส่วน C                                  │  ← padding 16px (p-4)
│  [ช่องกรอกข้อมูล...]                      │
└──────────────────────────────────────────┘
```

## หลักการสำคัญ

ขอบต้องเต็ม **ความกว้างทั้งหมด** ของคอนเทนเนอร์ แต่ละส่วนมี padding ของตัวเอง ห้ามใส่ padding ที่ wrapper ด้านนอก — ใส่ที่แต่ละส่วน

## การใช้งาน

```html
<!-- คอนเทนเนอร์ด้านนอก: ไม่มี horizontal padding -->
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg">

  <!-- ส่วน A -->
  <div class="p-4">
    <h3 class="spr-subheading-sm mb-4">ข้อมูลส่วนบุคคล</h3>
    <div class="grid grid-cols-2 gap-4">
      <spr-input v-model="firstName" label="ชื่อ" />
      <spr-input v-model="lastName" label="นามสกุล" />
    </div>
  </div>

  <!-- ตัวคั่นเต็มความกว้าง -->
  <div class="spr-border-0 spr-border-t spr-border-solid spr-border-color-weak"></div>

  <!-- ส่วน B -->
  <div class="p-4">
    <h3 class="spr-subheading-sm mb-4">ข้อมูลติดต่อ</h3>
    <div class="grid grid-cols-2 gap-4">
      <spr-input-email v-model="email" label="อีเมล" />
      <spr-input-contact-number v-model="phone" label="โทรศัพท์" />
    </div>
  </div>

</div>
```

## ตัวอย่าง

<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-mt-4">
  <div class="spr-p-4">
    <h3 class="spr-subheading-sm spr-mb-4 spr-m-0">ข้อมูลส่วนบุคคล</h3>
    <div class="spr-grid spr-grid-cols-2 spr-gap-4 spr-mt-4">
      <spr-input label="ชื่อ" placeholder="กรอกชื่อ" />
      <spr-input label="นามสกุล" placeholder="กรอกนามสกุล" />
    </div>
  </div>
  <div class="spr-border-0 spr-border-t spr-border-solid spr-border-color-weak"></div>
  <div class="spr-p-4">
    <h3 class="spr-subheading-sm spr-mb-4 spr-m-0">ข้อมูลติดต่อ</h3>
    <div class="spr-grid spr-grid-cols-2 spr-gap-4 spr-mt-4">
      <spr-input label="อีเมล" placeholder="กรอกอีเมล" />
      <spr-input label="โทรศัพท์" placeholder="กรอกเบอร์โทรศัพท์" />
    </div>
  </div>
</div>

## ทางเลือก: ใช้ divide-y

```html
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg
            spr-divide-y spr-divide-solid spr-divide-color-weak">
  <div class="p-4"><!-- ส่วน A --></div>
  <div class="p-4"><!-- ส่วน B --></div>
  <div class="p-4"><!-- ส่วน C --></div>
</div>
```

## กฎ

| กฎ | รายละเอียด |
|---|---|
| ขอบเต็มความกว้าง | padding อยู่ในแต่ละส่วน ไม่ใช่คอนเทนเนอร์ด้านนอก |
| padding 16px สม่ำเสมอ | ทุกส่วนใช้ `p-4` |
| โทเค็นเดียวกัน | ตัวคั่นใช้ `spr-border-color-weak` เหมือนขอบการ์ด |
| หัวข้อส่วน | ใช้ `spr-subheading-sm` หรือ `spr-subheading-xs` |

## สิ่งที่ควรทำและไม่ควรทำ

### ควรทำ

```html
<!-- ถูกต้อง: padding ที่แต่ละส่วน ไม่ใช่ wrapper ด้านนอก -->
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg">
  <div class="p-4"><!-- ส่วน A --></div>
  <div class="spr-border-0 spr-border-t spr-border-solid spr-border-color-weak"></div>
  <div class="p-4"><!-- ส่วน B --></div>
</div>
```

### ไม่ควรทำ

```html
<!-- ผิด: padding ที่ wrapper ด้านนอกทำให้ขอบไม่เต็มความกว้าง -->
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg p-4">
  <div><!-- ส่วน A --></div>
  <div class="spr-border-0 spr-border-t spr-border-solid spr-border-color-weak"></div>
  <div><!-- ส่วน B --></div>
</div>
```
