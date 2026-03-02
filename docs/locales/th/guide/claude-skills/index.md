---
title: Claude Skills
description: เรียนรู้วิธีใช้ Sprout Design System Claude Skills เพื่อเร่งการพัฒนาด้วย AI ผ่าน Claude Code
outline: deep
---

# Claude Skills

Sprout Design System มี **Claude Skills** สามตัวที่ทำให้ [Claude Code](https://docs.anthropic.com/en/docs/claude-code) เข้าใจและใช้ design system เมื่อสร้างแอป Vue 3 และดูแลเอกสาร

## Claude Skill คืออะไร

Claude Skill คือชุดความรู้ที่มีโครงสร้างที่ขยายความสามารถของ Claude Code ด้วยความเชี่ยวชาญเฉพาะด้าน สกิลจะถูกโหลดโดยอัตโนมัติเมื่อ Claude ทำงานในโปรเจกต์

## สกิลที่มี

| สกิล | จุดประสงค์ |
|---|---|
| **sprout-design-system** | API คอมโพเนนต์ design tokens การรวม Tailwind รูปแบบการใช้งาน |
| **design-system-docu-skills** | เอกสาร VitePress — แท็บ PropsPlayground คอนฟิก sidebar |
| **sprout-ui-patterns** | แบบแผนการออกแบบ — ขอบการ์ด เลย์เอาท์ฟอร์ม รูปแบบระยะห่าง |

---

## 1. sprout-design-system

**รุ่นสกิล:** 2.0.0 | **สร้างจาก design-system-next:** v2.27.2

สกิลหลักที่สอน Claude ให้:

- สร้างหน้าและฟีเจอร์ด้วยคอมโพเนนต์ที่มีคำนำหน้า `spr-`
- ค้นหา API ของคอมโพเนนต์ (props, events, slots) อย่างถูกต้อง
- ใช้ design tokens (สี ตัวอักษร สีขอบ รัศมีขอบ ความกว้างสูงสุด) ด้วยคำนำหน้า `spr-` ของ Tailwind รวมถึง semantic design color tokens จาก `src/assets/styles/tailwind.css` ขณะใช้ Tailwind มาตรฐานสำหรับ layout ระยะห่าง และขนาด
- ใช้ไอคอน Iconify กับคอลเลกชัน Phosphor (`ph:`)
- ใช้ Pinia snackbar store สำหรับการแจ้งเตือน
- ทำตามรูปแบบการตั้งค่าและคอนฟิกที่ถูกต้อง

### โครงสร้าง

```
skill/sprout-design-system/
├── SKILL.md                          # จุดเข้า คู่มือตั้งค่า และดัชนีคอมโพเนนต์
└── references/
    ├── form-components.md            # Input, Select, Checkbox, Radio, Switch ฯลฯ
    ├── display-components.md         # Avatar, Badge, Banner, Chips, Icon ฯลฯ
    ├── layout-components.md          # Accordion, Card, Table, Tabs, Stepper ฯลฯ
    ├── overlay-components.md         # Modal, Tooltip, Dropdown, Snackbar, Sidepanel ฯลฯ
    ├── action-components.md          # Button, DatePicker, TimePicker, Calendar, Filter ฯลฯ
    ├── color-tokens.md               # Design color tokens (semantic text/background/border)
    └── utilities.md                  # ค่า hex พาเลท Typography Spacing รัศมีขอบ ฯลฯ
```

สกิลใช้ **progressive disclosure** — Claude โหลด `SKILL.md` ก่อน แล้วดึงเฉพาะไฟล์ reference ที่เกี่ยวข้องตามหมวดคอมโพเนนต์ที่ใช้

### คอมโพเนนต์ที่ครอบคลุม (65 ตัว)

| หมวด | คอมโพเนนต์ |
|---|---|
| **Actions & Buttons** | Button, ButtonDropdown, FloatingAction |
| **Form Inputs** | Input, InputContactNumber, InputCurrency, InputDropdown, InputEmail, InputPassword, InputSearch, InputUrl, InputUsername, Textarea, Checkbox, Radio, RadioGrouped, Switch, Slider, Select, SelectMultiple, SelectLadderized, FileUpload |
| **Date & Time** | DatePicker, DateCalendarPicker, DateRangePicker, MonthYearPicker, TimePicker |
| **Data Display** | Avatar, Badge, Banner, Chips, Icon, Logo, Lozenge, ProgressBar, Status, EmptyState, AuditTrail |
| **Layout & Navigation** | Accordion, Card, Collapsible, List, Tabs, Table, TablePagination, Stepper, Sidenav |
| **Overlays & Feedback** | Modal, Tooltip, Dropdown, Popper, Snackbar, Sidepanel, StackingSidepanel |
| **Filters** | Filter, AttributeFilter |
| **Scheduling** | Calendar, CalendarCell |

### Design Tokens & Utilities

- **Design color tokens** — โทเค็นเชิงความหมายจาก `src/assets/styles/tailwind.css`: `spr-text-color-*`, `spr-background-color-*`, `spr-border-color-*`, `spr-divide-color-*` สำหรับสถานะ UI (base, hover, disabled, success, danger ฯลฯ) พาเลทดิบ: 9 พาเลท (white, mushroom, tomato, carrot, mango, kangkong, wintermelon, blueberry, ubas) โทน 50–950
- **Typography** — ฟอนต์ ขนาด น้ำหนัก ความสูงบรรทัด letter spacing ชุด heading/body/label
- **Border Radius** — 7 ค่าจาก `spr-rounded-border-radius-2xs` ถึง `spr-rounded-border-radius-full`
- **Border Colors** — 28 semantic border color classes และ 28 divider classes (ดู [สีขอบ](/th/documentation/utilities/border-colors))
- **Max Width** — ยูทิลิตี้ความกว้างคอนเทนเนอร์ (`spr-max-w-sm`, `spr-max-w-md`, `spr-max-w-lg`)
- **Spacing** — 15 design system spacing tokens (ใช้ Tailwind spacing มาตรฐานสำหรับ layout ทั่วไป)
- **Skeletal Loader** — ยูทิลิตี้ placeholder สถานะโหลด

> **หมายเหตุ:** สกิลสั่งให้ Claude ใช้คลาสยูทิลิตี้ Tailwind มาตรฐาน (`flex`, `gap-4`, `p-2`, `w-full` ฯลฯ) สำหรับ layout ระยะห่าง ขนาด และการแสดงผล คลาสที่มีคำนำหน้า `spr-` ใช้เฉพาะสำหรับ visual tokens ของ design system: สี (semantic และพาเลท) ตัวอักษร สีขอบ รัศมีขอบ ความกว้างสูงสุด และ skeletal loaders

### ตัวอย่างการใช้งาน

เมื่อสกิลทำงานแล้ว คุณสามารถให้ Claude Code สร้าง UI ด้วย design system ได้:

**สร้างฟอร์ม:**
> "สร้างฟอร์มลงทะเบียนผู้ใช้ที่มีชื่อ อีเมล รหัสผ่าน และการเลือกบทบาท โดยใช้คอมโพเนนต์ของ design system"

**ค้นหา API คอมโพเนนต์:**
> "Select component รองรับ props อะไรบ้าง?"

**สร้างตารางข้อมูล:**
> "สร้างตารางพร้อม pagination แสดงรายชื่อพนักงานพร้อมปุ่มแก้ไขและลบ"

**ใช้ design tokens:**
> "จัดสไตล์การ์ดนี้ด้วย color tokens และ spacing ของ design system"

---

## 2. design-system-docu-skills

**รุ่นสกิล:** 2.0.0

สกิลเอกสารที่สอน Claude สร้างและดูแลเว็บเอกสาร VitePress:

- เพิ่มเอกสารแบบแท็บสำหรับคอมโพเนนต์ใหม่ (Live Example, Code Docu, Guidelines, UI Specs, Accessibility)
- สร้าง PropsPlayground แบบโต้ตอบพร้อมตัวควบคุมและการสร้างโค้ด
- กำหนดค่า VitePress rewrites สำหรับเอกสารแบบโฟลเดอร์
- อัปเดต sidebar navigation สำหรับทั้ง EN และ TH
- ทำตามรูปแบบและแบบแผนเอกสารที่กำหนด

### โครงสร้าง

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

### แนวคิดหลัก

**รูปแบบเอกสารแบบแท็บ:** แต่ละคอมโพเนนต์มีหน้าแท็บสูงสุด 5 หน้าเก็บเป็นไฟล์ markdown แยกในโฟลเดอร์ย่อย `<ComponentTabBar>` ที่ใช้ร่วมกันให้การนำทาง

```
button/button/
├── index.md           # แท็บ Live Example
├── code.md            # แท็บ Code Documentation
├── guidelines.md      # แท็บ Guidelines
├── ui-specs.md        # แท็บ UI Specs
└── accessibility.md   # แท็บ Accessibility
```

**PropsPlayground:** คอมโพเนนต์แบบโต้ตอบที่เรนเดอร์คอมโพเนนต์จริงพร้อมตัวควบคุม รองรับคอมโพเนนต์ง่าย (prop เท่านั้น) และซับซ้อน (v-model, menu-list, extra bindings)

### ตัวอย่างการใช้งาน

**เพิ่มเอกสารแบบแท็บ:**
> "สร้างเอกสารแบบแท็บสำหรับ Accordion ตามรูปแบบอ้างอิง Button"

**สร้าง playground:**
> "เพิ่ม PropsPlayground ให้แท็บ Live Example ของ Select"

**อัปเดต sidebar:**
> "เพิ่ม Card ใหม่ใน sidebar navigation ทั้ง EN และ TH"

---

## 3. sprout-ui-patterns

**รุ่นสกิล:** 1.0.0

สกิลรูปแบบการออกแบบที่สอน Claude แบบแผนภาพที่ใช้ในผลิตภัณฑ์ Sprout:

- **ขอบการ์ด** — การ์ดและส่วนคล้ายการ์ดทั้งหมดใช้ `spr-border-color-weak` (mushroom-200)
- **ตัวคั่นส่วนฟอร์ม** — เส้นแนวนอน `spr-border-color-weak` เต็มความกว้างระหว่างส่วนฟอร์ม แต่ละส่วนมี padding 16px (`p-4`) ของตัวเอง

### รูปแบบการ์ด

```html
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg p-4">
  <!-- เนื้อหาการ์ด -->
</div>
```

### รูปแบบส่วนฟอร์ม

ขอบเต็มความกว้างของคอนเทนเนอร์ padding อยู่ในแต่ละส่วน ไม่ใช่ wrapper ด้านนอก:

```html
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg">
  <div class="p-4">
    <!-- ส่วน A -->
  </div>
  <div class="spr-border-0 spr-border-t spr-border-solid spr-border-color-weak"></div>
  <div class="p-4">
    <!-- ส่วน B -->
  </div>
</div>
```

### ตัวอย่างการใช้งาน

**สร้างเลย์เอาท์ฟอร์ม:**
> "สร้างหน้าตั้งค่าที่มีส่วนข้อมูลส่วนบุคคลและข้อมูลติดต่อคั่นด้วยขอบ"

**สร้างส่วนการ์ด:**
> "ห่อเนื้อหานี้ในการ์ดด้วยขอบมาตรฐาน Sprout"

---

## ดาวน์โหลดและตั้งค่า

### ดาวน์โหลด

<a href="/downloads/sprout-design-system-skill.zip" download class="spr-inline-flex spr-items-center spr-gap-2">
  <strong>ดาวน์โหลดสกิล (.zip)</strong>
</a>

แตกไฟล์ไปยังโฟลเดอร์ `skill/` ที่ root ของโปรเจกต์:

```
your-project/
├── skill/
│   ├── sprout-design-system/
│   │   ├── SKILL.md
│   │   └── references/
│   ├── design-system-docu-skills/
│   │   ├── SKILL.md
│   │   └── references/
│   └── sprout-ui-patterns/
│       └── SKILL.md
├── src/
└── ...
```

### การตั้งค่า

**สิ่งที่ต้องมี:** ติดตั้งและกำหนดค่า [Claude Code](https://docs.anthropic.com/en/docs/claude-code) ในสภาพแวดล้อมพัฒนาแล้ว

**คอนฟิกระดับโปรเจกต์ (`.claude/settings.json`):**

```json
{
  "skills": [
    "skill/sprout-design-system",
    "skill/design-system-docu-skills",
    "skill/sprout-ui-patterns"
  ]
}
```

เมื่อตั้งค่าแล้ว Claude Code จะโหลดสกิลโดยอัตโนมัติเมื่อทำงานในโปรเจกต์ คุณสามารถตรวจสอบโดยถาม Claude เกี่ยวกับคอมโพเนนต์ รูปแบบเอกสาร หรือแบบแผน UI

## การอัปเดตสกิล

เมื่อมีคอมโพเนนต์ใหม่ API เปลี่ยน หรือมีรูปแบบการออกแบบใหม่ ให้อัปเดตไฟล์สกิลใน `skill/` ให้ตรง แต่ละสกิลใช้ markdown ที่เข้าใจง่ายพร้อมตาราง ตัวอย่างโค้ด และ references ที่มีโครงสร้าง
