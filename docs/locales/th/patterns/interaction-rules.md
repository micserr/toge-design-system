---
title: กฎการโต้ตอบ
description: สถานะปุ่ม พฤติกรรม input การจัดการโฟกัส และรูปแบบการตอบสนองใน Sprout Design System
outline: deep
---

# กฎการโต้ตอบ

พฤติกรรมการโต้ตอบที่สม่ำเสมอช่วยให้ผู้ใช้สามารถคาดเดาได้ว่าผลิตภัณฑ์ Sprout จะตอบสนองต่อการกระทำของพวกเขาอย่างไร

## สถานะปุ่ม

ปุ่มใช้คอมโพเนนต์ `spr-button` พร้อม props `tone` และ `variant`

### โทนสีและรูปแบบ

| รูปแบบ | Brand (หลัก) | Danger | Plain |
|---|---|---|---|
| **Filled** | พื้นหลังสีเขียว ข้อความสีขาว | พื้นหลังสีแดง ข้อความสีขาว | พื้นหลังสีเทา |
| **Outlined** | เส้นขอบสีเขียว ข้อความสีเขียว | เส้นขอบสีแดง ข้อความสีแดง | เส้นขอบสีเทา |
| **Ghost** | ไม่มีเส้นขอบ ข้อความสีเขียว | ไม่มีเส้นขอบ ข้อความสีแดง | ไม่มีเส้นขอบ ข้อความสีเทา |
| **Link** | ข้อความสีเขียวขีดเส้นใต้ | ข้อความสีแดงขีดเส้นใต้ | ข้อความสีเทาขีดเส้นใต้ |

### สถานะ Brand Filled

| สถานะ | พื้นหลัง | ข้อความ |
|---|---|---|
| ค่าเริ่มต้น | `kangkong-700` | `white-50` |
| วางเมาส์ | `kangkong-800` | `white-50` |
| กด | `kangkong-900` | `white-50` |
| ปิดใช้งาน | `white-100` | `white-400` |

<div class="spr-flex spr-gap-3 spr-mt-4 spr-items-center">
  <spr-button tone="brand">การดำเนินการหลัก</spr-button>
  <spr-button tone="brand" variant="outlined">รอง</spr-button>
  <spr-button tone="brand" variant="ghost">Ghost</spr-button>
  <spr-button tone="danger">อันตราย</spr-button>
</div>

### กฎการจัดวางปุ่ม

- การดำเนินการ **หลัก** (filled) อยู่ทาง **ขวา**
- การดำเนินการ **รอง** (outlined/ghost) อยู่ทาง **ซ้าย**
- มีปุ่มหลักได้เพียง **หนึ่งเดียว** ต่อบริบทหรือส่วน
- การดำเนินการทำลายข้อมูลใช้ `tone="danger"`

## สถานะ Input

คอมโพเนนต์ input ทั้งหมด (`spr-input`, `spr-select`, `spr-textarea`) ใช้โมเดลสถานะเดียวกัน

| สถานะ | เส้นขอบ | พื้นหลัง | ข้อความ |
|---|---|---|---|
| ค่าเริ่มต้น | `mushroom-300` | `white-50` | `mushroom-950` |
| วางเมาส์ | `mushroom-400` | `white-50` | `mushroom-950` |
| โฟกัส | `kangkong-700` | `white-50` | `mushroom-950` |
| ข้อผิดพลาด | `tomato-700` | `white-50` | `mushroom-950` |
| ปิดใช้งาน | `white-100` | `white-100` | `white-400` |
| อ่านอย่างเดียว | `mushroom-200` | `mushroom-50` | `mushroom-950` |

### ป้ายกำกับและข้อความช่วยเหลือ

- **ป้ายกำกับ**: `spr-body-sm-regular-medium`, สี `spr-text-color-strong`
- **ตัวบ่งชี้จำเป็น**: `*` ต่อท้ายป้ายกำกับ
- **ข้อความช่วยเหลือ**: `spr-body-xs-regular`, สี `spr-text-color-base`
- **ข้อความข้อผิดพลาด**: `spr-body-xs-regular`, สี `spr-text-color-danger-base`

## วงแหวนโฟกัส

องค์ประกอบแบบโต้ตอบทั้งหมดจะแสดงวงแหวนโฟกัสเมื่อโฟกัสด้วยคีย์บอร์ด

| คุณสมบัติ | ค่า |
|---|---|
| สไตล์ | `box-shadow: 0px 0px 0px 2px #394141` |
| สี | mushroom-900 (`#394141`) |
| โทเค็น | `spr-shadow-button-active` |

**กฎ**:
- วงแหวนโฟกัสต้องมองเห็นได้บนองค์ประกอบแบบโต้ตอบทุกตัว
- ลำดับแท็บเป็นไปตามลำดับการอ่าน (ซ้ายไปขวา บนลงล่าง)
- ห้ามใช้ค่า `tabindex` ที่มากกว่า 0

## Snackbar (การแจ้งเตือน Toast)

จัดการผ่าน Pinia store: `useSprSnackbar`

| คุณสมบัติ | ค่า |
|---|---|
| ระยะเวลาค่าเริ่มต้น | 4000ms (ปิดอัตโนมัติ) |
| ตำแหน่ง | กึ่งกลางด้านล่าง |
| โทนสี | success, danger, information, caution, pending |

```ts
const sprSnackbar = useSprSnackbar()
sprSnackbar.open({
  message: 'Employee saved successfully.',
  tone: 'success',
})
```

**กฎ**:
- Success: ยืนยันสั้นๆ ("Saved successfully")
- Danger: ข้อผิดพลาดพร้อมคำแนะนำการกู้คืน ("Failed to save. Try again.")
- ต้องติดตั้ง Pinia ก่อนปลั๊กอิน design system

## สถานะการโหลด

| รูปแบบ | คอมโพเนนต์ | การใช้งาน |
|---|---|---|
| Skeleton loader | `.spr-skeletal-loader` | การโหลดหน้า/ส่วนครั้งแรก |
| Spinner | `spr-spinner` | การโหลดแบบอินไลน์ (คลิกปุ่ม, รีเฟรชเซลล์) |

**กฎ**:
- ใช้ **skeleton** สำหรับการโหลดครั้งแรก (แสดงรูปร่างเนื้อหา)
- ใช้ **spinner** สำหรับการโหลดในตำแหน่งเดิม
- แสดงสถานะการโหลดหลังหน่วงเวลา 300ms เพื่อหลีกเลี่ยงการกะพริบ
- ห้ามแสดง skeleton และ spinner พร้อมกัน

## การเลือก

| ประเภท | โทเค็นพื้นหลัง | การใช้งาน |
|---|---|---|
| เลือกรายการเดียว | `spr-background-color-single-active` (kangkong-100) | แถวตาราง, ตัวเลือก radio |
| เลือกหลายรายการ | `spr-background-color-multiple-active` (kangkong-50) | Checkbox, multi-select |

## วางเมาส์

| บริบท | พื้นหลัง |
|---|---|
| วางเมาส์ทั่วไป | `spr-background-color-hover` (mushroom-950 ที่ 8% opacity) |

องค์ประกอบแบบโต้ตอบทั้งหมดต้องมีการตอบสนองเมื่อวางเมาส์ ทรานซิชันวางเมาส์ใช้ 150ms ease-in-out

## กฎ

| กฎ | รายละเอียด |
|---|---|
| ปุ่มหลักหนึ่งเดียวต่อส่วน | มีปุ่ม filled ได้เพียงหนึ่งเดียวต่อพื้นที่บริบท |
| หลักอยู่ทางขวา | การดำเนินการหลักอยู่ทางขวา รองอยู่ทางซ้าย |
| ทำลายข้อมูล = danger | ใช้ `tone="danger"` สำหรับการลบ นำออก ยกเลิก |
| โฟกัสเป็นสิ่งจำเป็น | องค์ประกอบแบบโต้ตอบทั้งหมดต้องแสดงโฟกัสที่มองเห็นได้ |
| หน่วงเวลาการโหลด | แสดง UI การโหลดหลัง 300ms เพื่อป้องกันการกะพริบ |

## แหล่งข้อมูล

เวอร์ชันที่อ่านด้วยเครื่องได้: [`design-rules/interaction-rules.yaml`](https://github.com/user/repo/blob/dev/design-rules/interaction-rules.yaml)
