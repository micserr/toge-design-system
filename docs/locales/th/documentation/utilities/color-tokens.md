---
title: โทเค็นสี
description: โทเค็นสีเชิงความหมายและพาเลทดิบจากระบบออกแบบ ใช้คลาส spr- เหล่านี้เพื่อสี UI ที่สอดคล้องกัน
outline: deep
---

# โทเค็นสี

โทเค็นสีของระบบออกแบบถูกกำหนดใน **`src/assets/styles/tailwind.css`** ใช้คลาสที่มีคำนำหน้า `spr-` เหล่านี้เมื่อจัดสไตล์ UI เพื่อให้สีสอดคล้องกับ design system

## ใช้แบบไหนเมื่อไหร่

- **โทเค็นเชิงความหมาย** (`spr-text-color-*`, `spr-background-color-*`, `spr-border-color-*`, `spr-divide-color-*`) — ใช้สำหรับสถานะ UI (ค่าเริ่มต้น โฮเวอร์ ปิดใช้งาน สำเร็จ อันตราย ฯลฯ) แมปกับพาเลทและโทนที่ถูกต้อง
- **พาเลทดิบ** (`spr-text-{palette}-{shade}`, `spr-bg-{palette}-{shade}` ฯลฯ) — ใช้เมื่อต้องการโทนเฉพาะ ดู [สี](/th/documentation/utilities/colors) สำหรับพาเลทและค่า Hex

---

## สีข้อความ (เชิงความหมาย)

### ข้อความ — Neutral / UI

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-text-color-strong` | <span class="color-swatch" style="background: #262B2B;"></span> | ข้อความหลัก เน้นสูง |
| `spr-text-color-supporting` | <span class="color-swatch" style="background: #738482;"></span> | ข้อความรอง |
| `spr-text-color-base` | <span class="color-swatch" style="background: #5D6C6B;"></span> | ข้อความเนื้อหาเริ่มต้น |
| `spr-text-color-weak` | <span class="color-swatch" style="background: #919F9D;"></span> | ข้อความจาง/ตติยภูมิ |
| `spr-text-color-disabled` | <span class="color-swatch" style="background: #989898;"></span> | ข้อความปิดใช้งาน |
| `spr-text-color-on-fill-disabled` | <span class="color-swatch" style="background: #7C7C7C;"></span> | ข้อความบนคอนโทรลที่ปิดใช้งานและมีพื้นเต็ม |

### ข้อความ — Inverted (บนพื้นหลังเข้ม)

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-text-color-inverted-strong` | <span class="color-swatch" style="background: #FFFFFF; border: 1px solid var(--vp-c-divider);"></span> | ข้อความหลักบนพื้นเข้ม |
| `spr-text-color-inverted-base` | <span class="color-swatch" style="background: #D9DEDE;"></span> | ข้อความเริ่มต้นบนพื้นเข้ม |
| `spr-text-color-inverted-weak` | <span class="color-swatch" style="background: #919F9D;"></span> | ข้อความจางบนพื้นเข้ม |
| `spr-text-color-inverted-disabled` | <span class="color-swatch" style="background: #656565;"></span> | ข้อความปิดใช้งานบนพื้นเข้ม |

### ข้อความ — Brand

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-text-color-brand-base` | <span class="color-swatch" style="background: #158039;"></span> | ข้อความแบรนด์ (เริ่มต้น) |
| `spr-text-color-brand-hover` | <span class="color-swatch" style="background: #166531;"></span> | ข้อความแบรนด์ (โฮเวอร์) |
| `spr-text-color-brand-pressed` | <span class="color-swatch" style="background: #14532B;"></span> | ข้อความแบรนด์ (กด) |

### ข้อความ — Success

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-text-color-success-base` | <span class="color-swatch" style="background: #158039;"></span> | ข้อความสำเร็จ (เริ่มต้น) |
| `spr-text-color-success-hover` | <span class="color-swatch" style="background: #166531;"></span> | ข้อความสำเร็จ (โฮเวอร์) |
| `spr-text-color-success-pressed` | <span class="color-swatch" style="background: #14532B;"></span> | ข้อความสำเร็จ (กด) |

### ข้อความ — Information

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-text-color-information-base` | <span class="color-swatch" style="background: #1356BA;"></span> | ข้อความข้อมูล (เริ่มต้น) |
| `spr-text-color-information-hover` | <span class="color-swatch" style="background: #164B92;"></span> | ข้อความข้อมูล (โฮเวอร์) |
| `spr-text-color-information-pressed` | <span class="color-swatch" style="background: #122E59;"></span> | ข้อความข้อมูล (กด) |

### ข้อความ — Danger

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-text-color-danger-base` | <span class="color-swatch" style="background: #B61F27;"></span> | ข้อความอันตราย/ข้อผิดพลาด (เริ่มต้น) |
| `spr-text-color-danger-hover` | <span class="color-swatch" style="background: #971D23;"></span> | ข้อความอันตราย (โฮเวอร์) |
| `spr-text-color-danger-pressed` | <span class="color-swatch" style="background: #7D1F24;"></span> | ข้อความอันตราย (กด) |

### ข้อความ — Pending

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-text-color-pending-base` | <span class="color-swatch" style="background: #985008;"></span> | ข้อความรอดำเนินการ (เริ่มต้น) |
| `spr-text-color-pending-hover` | <span class="color-swatch" style="background: #7C420B;"></span> | ข้อความรอดำเนินการ (โฮเวอร์) |
| `spr-text-color-pending-pressed` | <span class="color-swatch" style="background: #482200;"></span> | ข้อความรอดำเนินการ (กด) |

### ข้อความ — Caution

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-text-color-caution-base` | <span class="color-swatch" style="background: #A1470B;"></span> | ข้อความระวัง (เริ่มต้น) |
| `spr-text-color-caution-hover` | <span class="color-swatch" style="background: #823C0C;"></span> | ข้อความระวัง (โฮเวอร์) |
| `spr-text-color-caution-pressed` | <span class="color-swatch" style="background: #461C04;"></span> | ข้อความระวัง (กด) |

### ข้อความ — Accent

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-text-color-accent-base` | <span class="color-swatch" style="background: #0C7492;"></span> | ข้อความเน้น (เริ่มต้น) |
| `spr-text-color-accent-hover` | <span class="color-swatch" style="background: #135E77;"></span> | ข้อความเน้น (โฮเวอร์) |
| `spr-text-color-accent-pressed` | <span class="color-swatch" style="background: #154E64;"></span> | ข้อความเน้น (กด) |

---

## สีพื้นหลัง (เชิงความหมาย)

### พื้นหลัง — Surface และค่าเริ่มต้น

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-background-color` | <span class="color-swatch" style="background: #FFFFFF; border: 1px solid var(--vp-c-divider);"></span> | พื้นผิวเริ่มต้น (เช่น พื้นหลังหน้า) |
| `spr-background-color-default` | <span class="color-swatch" style="background: #D9DEDE;"></span> | การเติมเริ่มต้นสำหรับคอนโทรล |
| `spr-background-color-surface` | <span class="color-swatch" style="background: #EFF1F1;"></span> | พื้นหลัง surface |
| `spr-background-color-surface-adaptive` | <span class="color-swatch" style="background: #E8EBEB;"></span> | Surface แบบปรับ (เช่น overlay) |
| `spr-background-color-base` | <span class="color-swatch" style="background: #E6EAEA;"></span> | อินเทอร์แอคทีฟ neutral (เริ่มต้น) |
| `spr-background-color-hover` | <span class="color-swatch" style="background: #E8EAEA;"></span> | อินเทอร์แอคทีฟ neutral (โฮเวอร์) |
| `spr-background-color-pressed` | <span class="color-swatch" style="background: #EAECEC;"></span> | อินเทอร์แอคทีฟ neutral (กด) |
| `spr-background-color-disabled` | <span class="color-swatch" style="background: #F1F2F3;"></span> | การเติมปิดใช้งาน |

### พื้นหลัง — Inverted (พื้นผิวเข้ม)

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-background-color-inverted` | <span class="color-swatch" style="background: #262B2B;"></span> | พื้นผิวเข้ม (เริ่มต้น) |
| `spr-background-color-inverted-hover` | <span class="color-swatch" style="background: #394141;"></span> | พื้นผิวเข้ม (โฮเวอร์) |
| `spr-background-color-inverted-pressed` | <span class="color-swatch" style="background: #414B4B;"></span> | พื้นผิวเข้ม (กด) |

### พื้นหลัง — การเลือก

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-background-color-single-active` | <span class="color-swatch" style="background: #DCFCE6;"></span> | การเลือกเดียว (เช่น แถวรายการหนึ่งแถว) |
| `spr-background-color-multiple-active` | <span class="color-swatch" style="background: #F0FDF4;"></span> | การเลือกหลายรายการ |

### พื้นหลัง — Brand

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-background-color-brand-base` | <span class="color-swatch" style="background: #158039;"></span> | แบรนด์ทึบ (เริ่มต้น) |
| `spr-background-color-brand-hover` | <span class="color-swatch" style="background: #166531;"></span> | แบรนด์ทึบ (โฮเวอร์) |
| `spr-background-color-brand-pressed` | <span class="color-swatch" style="background: #14532B;"></span> | แบรนด์ทึบ (กด) |
| `spr-background-color-brand-weak` | <span class="color-swatch" style="background: #DCFCE6;"></span> | แบรนด์อ่อน (เริ่มต้น) |
| `spr-background-color-brand-weak-hover` | <span class="color-swatch" style="background: #BBF7CE;"></span> | แบรนด์อ่อน (โฮเวอร์) |
| `spr-background-color-brand-weak-pressed` | <span class="color-swatch" style="background: #86EFA8;"></span> | แบรนด์อ่อน (กด) |

### พื้นหลัง — Success

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-background-color-success-base` | <span class="color-swatch" style="background: #17AD49;"></span> | สำเร็จทึบ (เริ่มต้น) |
| `spr-background-color-success-hover` | <span class="color-swatch" style="background: #158039;"></span> | สำเร็จทึบ (โฮเวอร์) |
| `spr-background-color-success-pressed` | <span class="color-swatch" style="background: #166531;"></span> | สำเร็จทึบ (กด) |
| `spr-background-color-success-weak` | <span class="color-swatch" style="background: #DCFCE6;"></span> | สำเร็จอ่อน (เริ่มต้น) |
| `spr-background-color-success-weak-hover` | <span class="color-swatch" style="background: #BBF7CE;"></span> | สำเร็จอ่อน (โฮเวอร์) |
| `spr-background-color-success-weak-pressed` | <span class="color-swatch" style="background: #86EFA8;"></span> | สำเร็จอ่อน (กด) |

### พื้นหลัง — Information

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-background-color-information-base` | <span class="color-swatch" style="background: #1679FA;"></span> | ข้อมูลทึบ (เริ่มต้น) |
| `spr-background-color-information-hover` | <span class="color-swatch" style="background: #0F6EEB;"></span> | ข้อมูลทึบ (โฮเวอร์) |
| `spr-background-color-information-pressed` | <span class="color-swatch" style="background: #1356BA;"></span> | ข้อมูลทึบ (กด) |
| `spr-background-color-information-weak` | <span class="color-swatch" style="background: #EEF7FF;"></span> | ข้อมูลอ่อน (เริ่มต้น) |
| `spr-background-color-information-weak-hover` | <span class="color-swatch" style="background: #D8EBFF;"></span> | ข้อมูลอ่อน (โฮเวอร์) |
| `spr-background-color-information-weak-pressed` | <span class="color-swatch" style="background: #BADCFF;"></span> | ข้อมูลอ่อน (กด) |

### พื้นหลัง — Pending

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-background-color-pending-base` | <span class="color-swatch" style="background: #FFBF00;"></span> | รอดำเนินการทึบ (เริ่มต้น) |
| `spr-background-color-pending-hover` | <span class="color-swatch" style="background: #E29300;"></span> | รอดำเนินการทึบ (โฮเวอร์) |
| `spr-background-color-pending-pressed` | <span class="color-swatch" style="background: #BB6802;"></span> | รอดำเนินการทึบ (กด) |
| `spr-background-color-pending-weak` | <span class="color-swatch" style="background: #FFFFEA;"></span> | รอดำเนินการอ่อน (เริ่มต้น) |
| `spr-background-color-pending-weak-hover` | <span class="color-swatch" style="background: #FFFBC5;"></span> | รอดำเนินการอ่อน (โฮเวอร์) |
| `spr-background-color-pending-weak-pressed` | <span class="color-swatch" style="background: #FFF885;"></span> | รอดำเนินการอ่อน (กด) |

### พื้นหลัง — Caution

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-background-color-caution-base` | <span class="color-swatch" style="background: #FF970A;"></span> | ระวังทึบ (เริ่มต้น) |
| `spr-background-color-caution-hover` | <span class="color-swatch" style="background: #FF7F00;"></span> | ระวังทึบ (โฮเวอร์) |
| `spr-background-color-caution-pressed` | <span class="color-swatch" style="background: #CC5C02;"></span> | ระวังทึบ (กด) |
| `spr-background-color-caution-weak` | <span class="color-swatch" style="background: #FFFAEC;"></span> | ระวังอ่อน (เริ่มต้น) |
| `spr-background-color-caution-weak-hover` | <span class="color-swatch" style="background: #FFF4D3;"></span> | ระวังอ่อน (โฮเวอร์) |
| `spr-background-color-caution-weak-pressed` | <span class="color-swatch" style="background: #FFE5A5;"></span> | ระวังอ่อน (กด) |

### พื้นหลัง — Accent

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-background-color-accent-base` | <span class="color-swatch" style="background: #0592B5;"></span> | เน้นทึบ (เริ่มต้น) |
| `spr-background-color-accent-hover` | <span class="color-swatch" style="background: #0C7492;"></span> | เน้นทึบ (โฮเวอร์) |
| `spr-background-color-accent-pressed` | <span class="color-swatch" style="background: #135E77;"></span> | เน้นทึบ (กด) |
| `spr-background-color-accent-weak` | <span class="color-swatch" style="background: #ECFEFF;"></span> | เน้นอ่อน (เริ่มต้น) |
| `spr-background-color-accent-weak-hover` | <span class="color-swatch" style="background: #CEFBFF;"></span> | เน้นอ่อน (โฮเวอร์) |
| `spr-background-color-accent-weak-pressed` | <span class="color-swatch" style="background: #A3F3FE;"></span> | เน้นอ่อน (กด) |

### พื้นหลัง — Danger

| ชื่อคลาส | สี | การใช้งาน |
|------------|:-----:|-------|
| `spr-background-color-danger-base` | <span class="color-swatch" style="background: #DA2F38;"></span> | อันตรายทึบ (เริ่มต้น) |
| `spr-background-color-danger-hover` | <span class="color-swatch" style="background: #B61F27;"></span> | อันตรายทึบ (โฮเวอร์) |
| `spr-background-color-danger-pressed` | <span class="color-swatch" style="background: #971D23;"></span> | อันตรายทึบ (กด) |
| `spr-background-color-danger-weak` | <span class="color-swatch" style="background: #FEF2F3;"></span> | อันตรายอ่อน (เริ่มต้น) |
| `spr-background-color-danger-weak-hover` | <span class="color-swatch" style="background: #FEE2E3;"></span> | อันตรายอ่อน (โฮเวอร์) |
| `spr-background-color-danger-weak-pressed` | <span class="color-swatch" style="background: #FDCBCE;"></span> | อันตรายอ่อน (กด) |

---

## ขอบและตัวแบ่ง (เชิงความหมาย)

รายการเต็มในรูปแบบตาราง: [สีขอบ](/th/documentation/utilities/border-colors)

---

## การใช้พาเลทดิบ

รูปแบบ: `spr-{property}-{palette}-{shade}`

| รูปแบบชื่อคลาส | การใช้งาน |
|--------------------|-------|
| `spr-text-{palette}-{shade}` | สีข้อความจากพาเลท (เช่น `spr-text-kangkong-700`) |
| `spr-bg-{palette}-{shade}` | พื้นหลังจากพาเลท (เช่น `spr-bg-tomato-100`) |
| `spr-border-{palette}-{shade}` | สีขอบจากพาเลท |
| `spr-divide-{palette}-{shade}` | สีตัวแบ่งระหว่างองค์ประกอบย่อย |

**พาเลท:** `white`, `mushroom`, `tomato`, `carrot`, `mango`, `kangkong`, `wintermelon`, `blueberry`, `ubas`  
**โทน:** `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`

ค่า Hex และรายละเอียดพาเลทเต็ม: [สี](/th/documentation/utilities/colors)

<style>
  .color-swatch {
    display: inline-block;
    width: 2rem;
    height: 1.25rem;
    border-radius: 4px;
    vertical-align: middle;
  }
</style>
