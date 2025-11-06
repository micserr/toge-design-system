---
title: เอกสารประกอบคอมโพเนนต์
description: เรียนรู้วิธีเขียนเอกสารประกอบสำหรับคอมโพเนนต์ Design System Next
outline: deep
---

# เอกสารประกอบคอมโพเนนต์

## ภาพรวม

เอกสารประกอบที่ดีเป็นสิ่งสำคัญสำหรับการใช้งาน Design System Next อย่างมีประสิทธิภาพ คู่มือนี้จะอธิบายวิธีการเขียนเอกสารประกอบที่ครอบคลุมและเป็นมิตรกับผู้ใช้

## โครงสร้างเอกสารประกอบ

เอกสารประกอบของคอมโพเนนต์จะอยู่ในโฟลเดอร์ `docs/documentation/components/` โดยแต่ละคอมโพเนนต์จะมีไฟล์ Markdown ของตัวเอง

```
docs/documentation/components/
├── button/
│   ├── button.md
│   └── button-pagination.md
├── input/
│   └── input.md
└── ...
```

## โครงสร้างไฟล์เอกสารประกอบ

### Front Matter

เริ่มต้นด้วย front matter ที่มีข้อมูลเมตา:

```yaml
---
title: Button
description: คอมโพเนนต์ปุ่มสำหรับการกระทำต่างๆ ในอินเทอร์เฟซ
---
```

### ส่วนหลักของเอกสารประกอบ

#### 1. ชื่อและคำอธิบาย

```markdown
# Button

คอมโพเนนต์ปุ่มใช้สำหรับการกระทำต่างๆ ในอินเทอร์เฟซผู้ใช้ เช่น การส่งฟอร์ม การนำทาง หรือการเรียกใช้ฟังก์ชัน
```

#### 2. การใช้งานพื้นฐาน

แสดงตัวอย่างการใช้งานที่ง่ายที่สุด:

````markdown
## การใช้งานพื้นฐาน

```vue
<template>
  <spr-button>คลิกฉัน</spr-button>
</template>
```
````

````

#### 3. รูปแบบต่างๆ (Variants)

แสดงตัวเลือกต่างๆ ที่มี:

```markdown
## รูปแบบต่างๆ

### รูปแบบหลัก

```vue
<template>
  <spr-button variant="primary">ปุ่มหลัก</spr-button>
  <spr-button variant="secondary">ปุ่มรอง</spr-button>
  <spr-button variant="outline">ปุ่มขอบ</spr-button>
</template>
````

### สถานะต่างๆ

```vue
<template>
  <spr-button :loading="true">กำลังโหลด</spr-button>
  <spr-button disabled>ปิดใช้งาน</spr-button>
</template>
```

````

#### 4. API Reference

ส่วนที่สำคัญที่สุด - อ้างอิง API ที่ครอบคลุม:

```markdown
## API

### Props

| ชื่อ | ประเภท | ค่าเริ่มต้น | คำอธิบาย |
|------|--------|-------------|-----------|
| variant | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | รูปแบบของปุ่ม |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | ขนาดของปุ่ม |
| disabled | `boolean` | `false` | ปิดใช้งานปุ่ม |
| loading | `boolean` | `false` | แสดงสถานะกำลังโหลด |
| type | `'button' \| 'submit' \| 'reset'` | `'button'` | ประเภทของปุ่ม HTML |

### Events

| ชื่อ | พารามิเตอร์ | คำอธิบาย |
|------|-------------|-----------|
| click | `MouseEvent` | เกิดเมื่อคลิกปุ่ม |

### Slots

| ชื่อ | คำอธิบาย |
|------|-----------|
| default | เนื้อหาหลักของปุ่ม (ข้อความหรือไอคอน) |
| prefix | เนื้อหาที่แสดงก่อนข้อความหลัก |
| suffix | เนื้อหาที่แสดงหลังข้อความหลัก |
````

#### 5. ตัวอย่างการใช้งานขั้นสูง

แสดงการใช้งานที่ซับซ้อนมากขึ้น:

````markdown
## ตัวอย่างการใช้งานขั้นสูง

### ปุ่มที่มีไอคอน

```vue
<template>
  <spr-button>
    <spr-icon name="download" />
    ดาวน์โหลด
  </spr-button>
</template>
```
````

### ปุ่มในฟอร์ม

```vue
<template>
  <form @submit="handleSubmit">
    <spr-input v-model="email" placeholder="อีเมล" />
    <spr-button type="submit" :loading="isSubmitting"> ส่ง </spr-button>
  </form>
</template>
```

````

#### 6. แนวทางการใช้งาน

ให้คำแนะนำสำหรับการใช้งานที่ดีที่สุด:

```markdown
## แนวทางการใช้งาน

### ทำ

- ใช้ปุ่มหลักสำหรับการกระทำหลัก
- ใช้ปุ่มรองสำหรับการกระทำรอง
- ใช้ปุ่มขอบสำหรับการกระทำที่ไม่สำคัญมาก

### หลีกเลี่ยง

- อย่าใช้ปุ่มมากเกินไปในพื้นที่เดียวกัน
- อย่าปล่อยปุ่มที่ไม่มีข้อความหรือไอคอน
- อย่าปิดใช้งานปุ่มโดยไม่ให้เหตุผล
````

## แนวทางปฏิบัติที่ดีที่สุด

### ภาษาและโทน

- ใช้ภาษาที่เป็นมิตรและเข้าใจง่าย
- อธิบายวัตถุประสงค์และการใช้งานของคอมโพเนนต์
- ใช้คำศัพท์ที่สอดคล้องกัน

### ตัวอย่างโค้ด

- แสดงตัวอย่างที่สมจริงและมีประโยชน์
- ใช้ Vue 3 Composition API ในตัวอย่าง
- รวมการใช้งาน TypeScript เมื่อเป็นไปได้

### API Reference

- จัดระเบียบตาราง API อย่างชัดเจน
- รวมประเภท TypeScript ที่ถูกต้อง
- อธิบายแต่ละ prop/event/slot อย่างละเอียด

### การเข้าถึง (Accessibility)

- รวมข้อมูลเกี่ยวกับการเข้าถึง
- อธิบาย ARIA attributes ที่รองรับ
- แนะนำแนวทางปฏิบัติสำหรับการเข้าถึง

## เครื่องมือและทรัพยากร

### เครื่องมือสำหรับเอกสารประกอบ

- [VitePress](https://vitepress.dev/) - เครื่องมือสร้างเอกสารประกอบ
- [Vue Playground](https://sfc.vuejs.org/) - ทดสอบคอมโพเนนต์แบบออนไลน์
- [Storybook](https://storybook.js.org/) - เครื่องมือพัฒนา UI

### แนวทางปฏิบัติมาตรฐาน

- [Google Developer Documentation Style Guide](https://developers.google.com/style)
- [Vue.js Style Guide](https://vuejs.org/style-guide/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

## ตัวอย่างเอกสารประกอบที่สมบูรณ์

ดูตัวอย่างเอกสารประกอบที่สมบูรณ์ได้ที่:

- [Button Component Documentation](../../documentation/components/button/button.md)
- [Input Component Documentation](../../documentation/components/input/input.md)
