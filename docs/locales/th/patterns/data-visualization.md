---
title: การแสดงข้อมูล
description: สีของแผนภูมิ การจัดรูปแบบตัวอักษร กฎการจัดวาง และรูปแบบการจัดรูปแบบข้อมูลสำหรับผลิตภัณฑ์ Sprout
outline: deep
---

# การแสดงข้อมูล

แนวทางการนำเสนอข้อมูลอย่างสม่ำเสมอในผลิตภัณฑ์ Sprout ทุกตัว ตั้งแต่สีของแผนภูมิไปจนถึงการจัดรูปแบบตัวเลข

## จานสีของแผนภูมิ

### ชุดสีหลัก

| ลำดับ | สี | Hex | การใช้งาน |
|---|---|---|---|
| อันดับ 1 | kangkong-600 | `#17AD49` | ชุดข้อมูลหลัก/ค่าเริ่มต้น |
| อันดับ 2 | blueberry-600 | `#1679FA` | ชุดข้อมูลที่สอง |
| อันดับ 3 | carrot-600 | `#FF7F00` | ชุดข้อมูลที่สาม |

### จานสีเชิงหมวดหมู่แบบเต็ม

ใช้จานสีเรียงลำดับนี้สำหรับแผนภูมิหลายชุดข้อมูล (แนะนำสูงสุด 8 ชุด):

<div class="spr-flex spr-gap-2 spr-mt-4 spr-mb-4">
  <div class="spr-bg-kangkong-600 spr-w-10 spr-h-10 spr-rounded-border-radius-sm" title="kangkong-600"></div>
  <div class="spr-bg-blueberry-600 spr-w-10 spr-h-10 spr-rounded-border-radius-sm" title="blueberry-600"></div>
  <div class="spr-bg-carrot-600 spr-w-10 spr-h-10 spr-rounded-border-radius-sm" title="carrot-600"></div>
  <div class="spr-bg-ubas-600 spr-w-10 spr-h-10 spr-rounded-border-radius-sm" title="ubas-600"></div>
  <div class="spr-bg-wintermelon-600 spr-w-10 spr-h-10 spr-rounded-border-radius-sm" title="wintermelon-600"></div>
  <div class="spr-bg-mango-600 spr-w-10 spr-h-10 spr-rounded-border-radius-sm" title="mango-600"></div>
  <div class="spr-bg-tomato-500 spr-w-10 spr-h-10 spr-rounded-border-radius-sm" title="tomato-500"></div>
  <div class="spr-bg-mushroom-500 spr-w-10 spr-h-10 spr-rounded-border-radius-sm" title="mushroom-500"></div>
</div>

1. `kangkong-600` 2. `blueberry-600` 3. `carrot-600` 4. `ubas-600` 5. `wintermelon-600` 6. `mango-600` 7. `tomato-500` 8. `mushroom-500`

### สีเชิงความหมายสำหรับข้อมูลสถานะ

| ความหมาย | สี | Hex |
|---|---|---|
| เชิงบวก (เติบโต, อนุมัติ) | kangkong-600 | `#17AD49` |
| เชิงลบ (ขาดทุน, ปฏิเสธ) | tomato-600 | `#DA2F38` |
| เป็นกลาง (ไม่มีการเปลี่ยนแปลง) | mushroom-400 | `#919F9D` |
| คำเตือน (มีความเสี่ยง) | carrot-600 | `#FF7F00` |
| ข้อมูล | blueberry-600 | `#1679FA` |

### จานสีแบบลำดับ (แผนที่ความร้อน)

สำหรับการไล่สีเฉดเดียว ให้ใช้เฉดสี 100 ถึง 800 ของจานสีเดียว:

<div class="spr-flex spr-gap-1 spr-mt-4 spr-mb-4">
  <div class="spr-bg-kangkong-100 spr-w-8 spr-h-8 spr-rounded-border-radius-xs"></div>
  <div class="spr-bg-kangkong-200 spr-w-8 spr-h-8 spr-rounded-border-radius-xs"></div>
  <div class="spr-bg-kangkong-300 spr-w-8 spr-h-8 spr-rounded-border-radius-xs"></div>
  <div class="spr-bg-kangkong-400 spr-w-8 spr-h-8 spr-rounded-border-radius-xs"></div>
  <div class="spr-bg-kangkong-500 spr-w-8 spr-h-8 spr-rounded-border-radius-xs"></div>
  <div class="spr-bg-kangkong-600 spr-w-8 spr-h-8 spr-rounded-border-radius-xs"></div>
  <div class="spr-bg-kangkong-700 spr-w-8 spr-h-8 spr-rounded-border-radius-xs"></div>
  <div class="spr-bg-kangkong-800 spr-w-8 spr-h-8 spr-rounded-border-radius-xs"></div>
</div>

## การจัดรูปแบบตัวอักษรในแผนภูมิ

| องค์ประกอบ | คลาส | สี |
|---|---|---|
| ชื่อแผนภูมิ | `spr-subheading-sm` | `spr-text-color-strong` |
| คำบรรยายรอง | `spr-body-sm-regular` | `spr-text-color-base` |
| ป้ายแกน | `spr-body-xs-regular` | `spr-text-color-base` |
| ขีดแกน | `spr-body-xs-regular` | `spr-text-color-weak` |
| ป้ายข้อมูล | `spr-body-xs-regular-medium` | `spr-text-color-strong` |
| คำอธิบายสัญลักษณ์ | `spr-body-xs-regular` | `spr-text-color-base` |

## การจัดวางแผนภูมิ

- แผนภูมิอยู่ภายใน**คอนเทนเนอร์การ์ดมาตรฐาน** (`spr-border-color-weak`, `spr-rounded-border-radius-lg`, `spr-p-4`)
- เส้นตาราง ใช้ `spr-border-color-weak` (เส้นประ) -- แสดงเฉพาะแนวนอนเป็นค่าเริ่มต้น
- เส้นแกน ใช้ `spr-border-color-base`
- คำแนะนำเครื่องมือ ใช้รูปแบบคำแนะนำเครื่องมือมาตรฐาน (พื้นหลังสีเข้ม ตัวอักษรสีขาว)
- คำอธิบายสัญลักษณ์วางไว้ด้านล่างแผนภูมิสำหรับชุดข้อมูล 3 ชุดขึ้นไป วางแบบอินไลน์สำหรับ 1-2 ชุด

## กฎประเภทแผนภูมิ

### แผนภูมิแท่ง

- มุมด้านบนมน (`border-radius-xs`)
- ความกว้างขั้นต่ำของแท่ง: 16px
- อัตราส่วนช่องว่าง: 30% ระหว่างแท่ง
- แกน Y เริ่มต้นที่ 0 เสมอ

### แผนภูมิเส้น

- ความหนาเส้น: 2px
- รัศมีจุด: 4px (6px เมื่อโฮเวอร์)
- ความทึบของพื้นที่: 10%

### แผนภูมิวงกลม / แผนภูมิโดนัท

- ช่องว่างสีขาวระหว่างชิ้นส่วน (เส้นขอบ 2px)
- ความหนาโดนัท: 40%
- สูงสุด 6 ชิ้นส่วน -- รวมส่วนที่เหลือเป็น "อื่นๆ"
- ป้ายอยู่นอกแผนภูมิ

## การจัดรูปแบบข้อมูล

### ตัวเลข

| ประเภท | รูปแบบ | ตัวอย่าง |
|---|---|---|
| จำนวนเต็ม | คั่นหลักพันด้วยจุลภาค | 1,234,567 |
| ทศนิยม | ทศนิยม 2 ตำแหน่ง | 1,234.56 |
| สกุลเงิน (PHP) | ₱ + จุลภาค | ₱1,234,567.00 |
| เปอร์เซ็นต์ | ทศนิยม 1 ตำแหน่ง + % | 85.5% |
| ตัวย่อ | K / M / B | 12.5K, 1.2M |

### วันที่

| รูปแบบ | รูปแบบวันที่ | ตัวอย่าง |
|---|---|---|
| แบบสั้น | MMM D | Jan 15 |
| แบบกลาง | MMM D, YYYY | Jan 15, 2025 |
| แบบยาว | MMMM D, YYYY | January 15, 2025 |

## กฎ

| กฎ | รายละเอียด |
|---|---|
| สูงสุด 8 ชุดข้อมูล | เกิน 8 ชุด ให้ใช้การกรองหรือการจัดกลุ่ม |
| ตั้งชื่อแผนภูมิเสมอ | ใส่ชื่อเรื่องและคำบรรยายรองเพื่อให้บริบท |
| อย่าพึ่งพาสีเพียงอย่างเดียว | จับคู่กับไอคอนหรือรูปแบบเพื่อการเข้าถึงสำหรับผู้ที่ตาบอดสี |
| จัดเตรียมตารางข้อมูลสำรอง | แผนภูมิที่ซับซ้อนควรมีตารางข้อมูลทางเลือกที่เข้าถึงได้ |
| จัดตัวเลขชิดขวา | คอลัมน์ตัวเลขในตารางจัดชิดขวา |

## แหล่งข้อมูล

เวอร์ชันที่เครื่องอ่านได้: [`design-rules/data-visualization.yaml`](https://github.com/user/repo/blob/dev/design-rules/data-visualization.yaml)
