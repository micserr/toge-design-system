---
title: Design System Docu Skills
description: Claude Skill สำหรับสร้างและดูแลเอกสาร VitePress ของ Sprout Design System
outline: deep
---

# Design System Docu Skills

**รุ่นสกิล:** 2.0.0

สกิลเอกสารที่สอน Claude สร้างและดูแลเว็บเอกสาร VitePress ครอบคลุมรูปแบบเอกสารแบบแท็บ PropsPlayground คอนฟิก sidebar และทั้ง EN/TH

## สิ่งที่สอน Claude

- เพิ่มเอกสารแบบแท็บสำหรับคอมโพเนนต์ใหม่ (Live Example, Code Docu, Guidelines, UI Specs, Accessibility)
- สร้าง PropsPlayground แบบโต้ตอบพร้อมตัวควบคุมและการสร้างโค้ด
- กำหนดค่า VitePress rewrites สำหรับเอกสารแบบโฟลเดอร์
- อัปเดต sidebar navigation สำหรับทั้ง EN และ TH
- ทำตามรูปแบบและแบบแผนเอกสารที่กำหนด

## โครงสร้าง

```
skill/design-system-docu-skills/
├── SKILL.md                          # จุดเข้า สถาปัตยกรรม และแบบแผน
└── references/
    ├── add-component-tabs.md         # คู่มือขั้นตอนการเพิ่มแท็บ
    ├── live-example-tab.md           # รูปแบบ PropsPlayground (ง่ายและซับซ้อน)
    ├── code-docu-tab.md              # มาตรฐานแท็บ Code Documentation
    ├── guidelines-tab.md             # เนื้อหาที่ต้องมีในแท็บ Guidelines
    ├── ui-specs-tab.md               # เนื้อหาที่ต้องมีในแท็บ UI Specs
    ├── accessibility-tab.md          # เนื้อหาที่ต้องมีในแท็บ Accessibility
    └── boilerplate.md                # เทมเพลตสำเร็จรูปสำหรับทั้ง 5 แท็บ
```

## แนวคิดหลัก

### รูปแบบเอกสารแบบแท็บ

แต่ละคอมโพเนนต์มีหน้าแท็บสูงสุด 5 หน้าเก็บเป็นไฟล์ markdown แยกในโฟลเดอร์ย่อย `<ComponentTabBar>` ที่ใช้ร่วมกันให้การนำทาง

```
button/button/
├── index.md           # แท็บ Live Example (หน้าหลัก)
├── code.md            # แท็บ Code Documentation
├── guidelines.md      # แท็บ Guidelines
├── ui-specs.md        # แท็บ UI Specs
└── accessibility.md   # แท็บ Accessibility
```

### PropsPlayground

คอมโพเนนต์แบบโต้ตอบที่เรนเดอร์คอมโพเนนต์จริงพร้อมตัวควบคุม ผู้ใช้สามารถปรับ props แบบเรียลไทม์และดูทั้งผลลัพธ์และโค้ดที่สร้างขึ้น

**คอมโพเนนต์ง่าย** (เช่น Button) ต้องการแค่ `prop-defs` และ `default-slot`:

```html
<PropsPlayground
  :component="SprButton"
  component-tag="spr-button"
  :prop-defs="[
    { name: 'tone', type: 'select', options: ['neutral', 'success', 'danger'], default: 'neutral' },
    { name: 'disabled', type: 'boolean', default: false },
  ]"
  default-slot="Button"
/>
```

**คอมโพเนนต์ซับซ้อน** (เช่น Button Dropdown) ที่ต้องการ `v-model` ใช้ `extra-props`, `extra-code-attrs` และ `code-setup`

### โครงสร้างโฟลเดอร์

| รูปแบบ | ตัวอย่าง | เมื่อใดที่ใช้ |
|---|---|---|
| **มีคอมโพเนนต์ย่อย** | `button/button/`, `button/button-dropdown/` | คอมโพเนนต์ที่มีตัวแปรย่อย |
| **แบบเดี่ยว** | `accordion/accordion/` | คอมโพเนนต์ที่ไม่มีลูก |
| **แบบเดิม (ไฟล์เดียว)** | `accordion.md` | ยังไม่ย้าย — จะถูกแทนที่ |

## ตัวอย่างการใช้งาน

**เพิ่มเอกสารแบบแท็บ:**
> "สร้างเอกสารแบบแท็บสำหรับ Accordion ตามรูปแบบอ้างอิง Button"

**สร้าง playground:**
> "เพิ่ม PropsPlayground ให้แท็บ Live Example ของ Select"

**อัปเดต sidebar:**
> "เพิ่ม Card ใหม่ใน sidebar navigation ทั้ง EN และ TH"

## การอ้างอิงตัวอย่าง

- **Button** (`docs/locales/en/documentation/components/button/button/`) — คอมโพเนนต์ง่าย ไม่มี v-model
- **Button Dropdown** (`docs/locales/en/documentation/components/button/button-dropdown/`) — คอมโพเนนต์ซับซ้อนที่มี v-model, menu-list และ dropdown-id
