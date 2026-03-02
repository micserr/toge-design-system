---
title: Sprout UI Patterns Skill
description: Claude Skill สำหรับแบบแผนการออกแบบ — ขอบการ์ด เลย์เอาท์ส่วนฟอร์ม และรูปแบบระยะห่างที่ใช้ในผลิตภัณฑ์ Sprout
outline: deep
---

# Sprout UI Patterns Skill

**รุ่นสกิล:** 1.0.0

สกิลรูปแบบการออกแบบที่สอน Claude แบบแผนภาพที่ใช้ในผลิตภัณฑ์ Sprout (HR, Payroll, Ecosystem ฯลฯ) สกิลนี้ไม่ใช่ API คอมโพเนนต์ แต่เป็น **แบบแผนการออกแบบ** สำหรับการจัดวางคอมโพเนนต์และคอนเทนเนอร์

## สิ่งที่สอน Claude

- ใช้สไตล์ขอบการ์ดและส่วนการ์ดอย่างสม่ำเสมอ
- สร้างเลย์เอาท์ฟอร์มที่แบ่งส่วนอย่างเหมาะสม
- ทำตามแบบแผนระยะห่างและคอนเทนเนอร์

## โครงสร้าง

```
skill/sprout-ui-patterns/
└── SKILL.md                          # รูปแบบทั้งหมดในไฟล์เดียว
```

---

## รูปแบบ 1: ขอบการ์ด / ส่วนการ์ด

การ์ดและส่วนคล้ายการ์ดทั้งหมดใช้ `spr-border-color-weak` (mushroom-200, `#D9DEDE`) เป็นสีขอบ

### คอนเทนเนอร์การ์ดมาตรฐาน

```html
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg p-4">
  <!-- เนื้อหาการ์ด -->
</div>
```

### ใช้ `<spr-card>`

`<spr-card>` ใช้ `spr-border-color-weak` โดยอัตโนมัติเมื่อไม่ได้ตั้ง tone (หรือ `tone="plain"`):

```html
<spr-card title="ชื่อส่วน">
  <template #content>
    <!-- เนื้อหาการ์ด -->
  </template>
</spr-card>
```

### กฎสำคัญ

- สีขอบใช้ `spr-border-color-weak` เสมอ — ไม่ใช้ `spr-border-color-base` หรือค่าพาเลทดิบ
- ใช้ร่วมกับ `spr-rounded-border-radius-lg` สำหรับมุมโค้งมาตรฐาน
- ใช้ Tailwind มาตรฐานสำหรับ padding/spacing (`p-4`, `p-6` ฯลฯ)

---

## รูปแบบ 2: ตัวคั่นส่วนฟอร์ม

ฟอร์มแบ่งเป็นส่วนตรรกะ (เช่น "ข้อมูลส่วนบุคคล" "ข้อมูลติดต่อ" "การจ้างงาน") ส่วนต่างๆ คั่นด้วยเส้นแนวนอน `spr-border-color-weak` เต็มความกว้าง

### เลย์เอาท์

```
┌──────────────────────────────────────────┐
│  ส่วน A                                  │  ← padding 16px (p-4)
│  [ช่องกรอกข้อมูล...]                      │
│                                          │
├──────────────────────────────────────────┤  ← ขอบเต็มความกว้าง
│  ส่วน B                                  │  ← padding 16px (p-4)
│  [ช่องกรอกข้อมูล...]                      │
└──────────────────────────────────────────┘
```

### การใช้งาน

ขอบต้องเต็มความกว้างคอนเทนเนอร์ แต่ละส่วนมี padding ของตัวเอง ห้ามใส่ padding ที่ wrapper ด้านนอก:

```html
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg">
  <div class="p-4">
    <h3 class="spr-subheading-sm mb-4">ข้อมูลส่วนบุคคล</h3>
    <div class="grid grid-cols-2 gap-4">
      <spr-input v-model="firstName" label="ชื่อ" />
      <spr-input v-model="lastName" label="นามสกุล" />
    </div>
  </div>

  <div class="spr-border-0 spr-border-t spr-border-solid spr-border-color-weak"></div>

  <div class="p-4">
    <h3 class="spr-subheading-sm mb-4">ข้อมูลติดต่อ</h3>
    <div class="grid grid-cols-2 gap-4">
      <spr-input-email v-model="email" label="อีเมล" />
      <spr-input-contact-number v-model="phone" label="โทรศัพท์" />
    </div>
  </div>
</div>
```

### กฎสำคัญ

- **ขอบเต็มความกว้าง** — padding อยู่ในแต่ละส่วน ไม่ใช่คอนเทนเนอร์ด้านนอก
- **padding 16px สม่ำเสมอ** (`p-4`) ทุกส่วน
- **โทเค็นเดียวกัน** — ตัวคั่นใช้ `spr-border-color-weak` เหมือนขอบการ์ด
- หัวข้อส่วนใช้ `spr-subheading-sm` หรือ `spr-subheading-xs`

---

## อ้างอิงด่วน

| รูปแบบ | โทเค็น | ค่า CSS |
|---|---|---|
| ขอบการ์ด | `spr-border-color-weak` | mushroom-200 (`#D9DEDE`) |
| ตัวคั่นส่วนฟอร์ม | `spr-border-color-weak` | mushroom-200 (`#D9DEDE`) |
| padding ส่วน | `p-4` (Tailwind มาตรฐาน) | 16px |
| มุมโค้งการ์ด | `spr-rounded-border-radius-lg` | design system token |
| หัวข้อส่วน | `spr-subheading-sm` | design system typography |

## ตัวอย่างการใช้งาน

**สร้างเลย์เอาท์ฟอร์ม:**
> "สร้างหน้าตั้งค่าที่มีส่วนข้อมูลส่วนบุคคลและข้อมูลติดต่อคั่นด้วยขอบ"

**สร้างส่วนการ์ด:**
> "ห่อเนื้อหานี้ในการ์ดด้วยขอบมาตรฐาน Sprout"
