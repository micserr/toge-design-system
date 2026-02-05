---
title: Claude Skills
description: เรียนรู้วิธีใช้ Sprout Design System Claude Skill เพื่อเร่งการพัฒนาด้วย AI ผ่าน Claude Code
outline: deep
---

# Claude Skills

Sprout Design System มี **Claude Skill** ที่ทำให้ [Claude Code](https://docs.anthropic.com/en/docs/claude-code) เข้าใจและใช้คอมโพเนนต์ props events slots และ design tokens ของระบบออกแบบเมื่อสร้างแอป Vue 3

## Claude Skill คืออะไร

Claude Skill คือชุดความรู้ที่มีโครงสร้างที่ขยายความสามารถของ Claude Code ด้วยความเชี่ยวชาญเฉพาะด้าน สกิล `sprout-design-system` สอน Claude ให้:

- สร้างหน้าและฟีเจอร์ด้วยคอมโพเนนต์ที่มีคำนำหน้า `spr-`
- ค้นหา API ของคอมโพเนนต์ (props, events, slots) อย่างถูกต้อง
- ใช้ design tokens (สี ตัวอักษร สีขอบ รัศมีขอบ ความกว้างสูงสุด) ด้วยคำนำหน้า `spr-` ของ Tailwind รวมถึง semantic design color tokens จาก `src/assets/styles/tailwind.css` ขณะใช้ Tailwind มาตรฐานสำหรับ layout ระยะห่าง และขนาด
- ใช้ Pinia snackbar store สำหรับการแจ้งเตือน
- ทำตามรูปแบบการตั้งค่าและคอนฟิกที่ถูกต้อง

## ดาวน์โหลด

**รุ่นสกิล:** 1.0.0 | **สร้างจาก design-system-next:** v2.26.21

<a href="/downloads/sprout-design-system-skill.zip" download class="spr-inline-flex spr-items-center spr-gap-2">
  <strong>ดาวน์โหลดสกิล (.zip)</strong>
</a>

แตกไฟล์ไปยังโฟลเดอร์ `skill/` ที่ root ของโปรเจกต์:

```
your-project/
├── skill/
│   └── sprout-design-system/
│       ├── SKILL.md
│       └── references/
│           ├── form-components.md
│           ├── display-components.md
│           ├── layout-components.md
│           ├── overlay-components.md
│           ├── action-components.md
│           ├── color-tokens.md
│           └── utilities.md
├── src/
└── ...
```

## การตั้งค่า

### สิ่งที่ต้องมี

- ติดตั้งและกำหนดค่า [Claude Code](https://docs.anthropic.com/en/docs/claude-code) ในสภาพแวดล้อมพัฒนาแล้ว

### การเพิ่มสกิล

หลังจากดาวน์โหลดและแตกสกิลแล้ว ให้เพิ่มลงในคอนฟิกของ Claude Code

**คอนฟิกระดับโปรเจกต์ (`.claude/settings.json`):**

```json
{
  "skills": [
    "skill/sprout-design-system"
  ]
}
```

เมื่อตั้งค่าแล้ว Claude Code จะโหลดสกิลโดยอัตโนมัติเมื่อทำงานในโปรเจกต์ คุณสามารถตรวจสอบโดยถาม Claude เกี่ยวกับคอมโพเนนต์ของ design system

## โครงสร้างสกิล

```
skill/sprout-design-system/
├── SKILL.md                          # จุดเข้า คู่มือตั้งค่า และดัชนีคอมโพเนนต์
└── references/
    ├── form-components.md            # Input, Select, Checkbox, Radio, Switch ฯลฯ
    ├── display-components.md         # Avatar, Badge, Banner, Chips, Icon ฯลฯ
    ├── layout-components.md          # Accordion, Card, Table, Tabs, Stepper ฯลฯ
    ├── overlay-components.md         # Modal, Tooltip, Dropdown, Snackbar, Sidepanel ฯลฯ
    ├── action-components.md          # Button, DatePicker, TimePicker, Calendar, Filter ฯลฯ
    ├── color-tokens.md               # Design color tokens (semantic จาก tailwind.css)
    └── utilities.md                  # ค่า hex พาเลท Typography Spacing รัศมีขอบ ฯลฯ
```

สกิลใช้ **progressive disclosure** — Claude โหลด `SKILL.md` ก่อน แล้วดึงเฉพาะไฟล์ reference ที่เกี่ยวข้องตามหมวดคอมโพเนนต์ที่ใช้

## ตัวอย่างการใช้งาน

เมื่อสกิลทำงานแล้ว คุณสามารถให้ Claude Code สร้าง UI ด้วย design system ได้:

**สร้างฟอร์ม:**  
> "สร้างฟอร์มลงทะเบียนผู้ใช้ที่มีชื่อ อีเมล รหัสผ่าน และการเลือกบทบาท โดยใช้คอมโพเนนต์ของ design system"

**ค้นหา API คอมโพเนนต์:**  
> "Select component รองรับ props อะไรบ้าง?"

**สร้างตารางข้อมูล:**  
> "สร้างตารางพร้อม pagination แสดงรายชื่อพนักงานพร้อมปุ่มแก้ไขและลบ"

**ใช้ design tokens:**  
> "จัดสไตล์การ์ดนี้ด้วย color tokens และ spacing ของ design system"

## คอมโพเนนต์ที่ครอบคลุม

สกิลครอบคลุมคอมโพเนนต์ **60+** ตัว:

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

## Design Tokens & Utilities

สกิลมี reference สำหรับ design tokens ทั้งหมด:

- **Design color tokens** — โทเค็นเชิงความหมายจาก `src/assets/styles/tailwind.css`: `spr-text-color-*`, `spr-background-color-*`, `spr-border-color-*`, `spr-divide-color-*` สำหรับสถานะ UI (base, hover, disabled, success, danger ฯลฯ) ดู `references/color-tokens.md` พาเลทดิบ: 9 พาเลท (white, mushroom, tomato, carrot, mango, kangkong, wintermelon, blueberry, ubas) โทน 50–950
- **Typography** — ฟอนต์ ขนาด น้ำหนัก ความสูงบรรทัด letter spacing ชุด heading/body/label
- **Border Radius** — 7 ค่าจาก `spr-rounded-border-radius-2xs` ถึง `spr-rounded-border-radius-full`
- **Border Colors** — 28 semantic border color classes และ 28 divider classes (ดู [สีขอบ](/th/documentation/utilities/border-colors))
- **Max Width** — ยูทิลิตี้ความกว้างคอนเทนเนอร์ (`spr-max-w-sm`, `spr-max-w-md`, `spr-max-w-lg`)
- **Spacing** — 15 design system spacing tokens (ใช้ Tailwind spacing มาตรฐานสำหรับ layout ทั่วไป)
- **Skeletal Loader** — ยูทิลิตี้ placeholder สถานะโหลด

> **หมายเหตุ:** สกิลสั่งให้ Claude ใช้คลาสยูทิลิตี้ Tailwind มาตรฐาน (`flex`, `gap-4`, `p-2`, `w-full` ฯลฯ) สำหรับ layout ระยะห่าง ขนาด และการแสดงผล คลาสที่มีคำนำหน้า `spr-` ใช้เฉพาะสำหรับ visual tokens ของ design system: สี (semantic และพาเลท) ตัวอักษร สีขอบ รัศมีขอบ ความกว้างสูงสุด และ skeletal loaders

## การอัปเดตสกิล

เมื่อมีคอมโพเนนต์ใหม่หรือ API เปลี่ยน ควรอัปเดตไฟล์ reference ของสกิลให้ตรง ไฟล์ reference อยู่ที่ `skill/sprout-design-system/references/` เป็น markdown มีตาราง props, events และ slots ของแต่ละคอมโพเนนต์
