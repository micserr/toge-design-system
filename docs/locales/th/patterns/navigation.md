---
title: การนำทาง
description: โครงสร้าง sidenav, แท็บ, breadcrumbs, รูปแบบการกำหนดเส้นทาง และชั้น z-index ในผลิตภัณฑ์ Sprout
outline: deep
---

# การนำทาง

ผลิตภัณฑ์ Sprout ใช้ระบบนำทางแบบหลายชั้น: **sidenav** สำหรับการนำทางหลัก, **แท็บ** สำหรับการนำทางรองภายในหน้า และ **breadcrumbs** สำหรับบอกตำแหน่ง

## Sidenav

Sidenav (`spr-sidenav`) เป็นการนำทางหลักสำหรับผลิตภัณฑ์ Sprout ทั้งหมด

### โหมด

| โหมด | ความกว้าง | ความสูงรายการ | พฤติกรรม |
|---|---|---|---|
| **Rail** (ย่อ) | 64px | 48px | แสดงไอคอนเท่านั้นพร้อม tooltip เมื่อวางเมาส์ |
| **Expanded** (ขยาย) | 240px | 36px | แสดงป้ายข้อความเต็มพร้อมเมนูย่อย |
| **Mobile** (มือถือ) | เต็มหน้าจอ | — | โอเวอร์เลย์เปิดด้วยไอคอนแฮมเบอร์เกอร์ |

### ระดับการนำทาง

| ระดับ | คำอธิบาย | ตัวอย่าง |
|---|---|---|
| ไอคอน Rail | โมดูลผลิตภัณฑ์ระดับบนสุด | Dashboard, People, Payroll |
| เมนู L1 | ส่วนย่อยหลัก | Employees, Departments, Positions |
| เมนู L2 | หน้ารายละเอียด | Employee Profile, Contract Details |

### กฎ Sidenav

- Rail จะมองเห็นได้เสมอบนเดสก์ท็อป (breakpoint lg ขึ้นไป)
- บนมือถือ (ต่ำกว่า lg) sidenav จะซ่อนอยู่หลังเมนูแฮมเบอร์เกอร์
- รายการ rail ที่ active จะเน้นด้วยสีแบรนด์
- เปิดได้เพียง **หนึ่งเมนู popover** ในเวลาเดียวกัน — การวางเมาส์บนรายการ rail อื่นจะปิดเมนูก่อนหน้า
- เมนูย่อยรองรับการซ้อน 2 ระดับ (L1, L2)

### เมนู Popover

| คุณสมบัติ | ค่า |
|---|---|
| ความกว้าง | 215px |
| ความสูงสูงสุด | 500px |
| เส้นขอบ | `spr-border-color-base` |
| รัศมีเส้นขอบ | `spr-rounded-border-radius-xl` (16px) |
| เงา | `spr-drop-shadow-md` |
| Z-index | 1000 |

## แท็บ

คอมโพเนนต์ `spr-tabs` ให้การนำทางภายในหน้าระหว่างมุมมองที่เกี่ยวข้องกัน

| คุณสมบัติ | ค่า |
|---|---|
| ความสูงแท็บ | 40px |
| ระยะห่างแท็บ | `spr-px-4` |
| ตัวบ่งชี้ active | เส้นขอบล่าง 2px สีแบรนด์ (kangkong-700) |

### สถานะแท็บ

| สถานะ | สีข้อความ | พื้นหลัง |
|---|---|---|
| ค่าเริ่มต้น | `spr-text-color-base` | transparent |
| วางเมาส์ | `spr-text-color-strong` | `spr-background-color-hover` |
| Active | `spr-text-color-brand-base` | transparent (พร้อมเส้นขอบล่าง 2px) |
| ปิดใช้งาน | `spr-text-color-disabled` | transparent |

### กฎแท็บ

- แสดงแท็บได้สูงสุด **6 แท็บ** — ใช้แท็บเลื่อนหรือ dropdown สำหรับจำนวนที่มากกว่า
- ป้ายกำกับควรมี **1-2 คำ**
- ลำดับแท็บเรียงตามความสำคัญ (ใช้บ่อยที่สุดอยู่ก่อน)
- แท็บที่ active จะคงอยู่เมื่อนำทางกลับ

## Breadcrumbs

แสดงตำแหน่งของผู้ใช้ภายในลำดับชั้นการนำทาง

| คุณสมบัติ | ค่า |
|---|---|
| ตัวคั่น | `/` |
| ไทโปกราฟี | `spr-body-sm-regular` |
| หน้าปัจจุบัน | `spr-text-color-strong`, น้ำหนัก medium |
| ลิงก์หน้าแม่ | `spr-text-color-brand-base`, ขีดเส้นใต้เมื่อวางเมาส์ |

### กฎ Breadcrumb

- แสดง breadcrumbs เสมอในหน้ารายละเอียด/แก้ไข
- ไม่แสดง breadcrumbs ในหน้าระดับบนสุด (L0)
- ความลึกสูงสุด: 4 ระดับ — ตัดตรงกลางด้วยจุดไข่ปลาหากลึกกว่า
- Breadcrumb สุดท้าย (หน้าปัจจุบัน) **ไม่ใช่** ลิงก์

## แบบแผน URL

| ประเภทหน้า | รูปแบบ | ตัวอย่าง |
|---|---|---|
| หน้ารายการ | `/module/resource` | `/people/employees` |
| หน้ารายละเอียด | `/module/resource/:id` | `/people/employees/123` |
| หน้าสร้าง | `/module/resource/new` | `/people/employees/new` |
| หน้าแก้ไข | `/module/resource/:id/edit` | `/people/employees/123/edit` |

## ชั้น Z-Index

ลำดับการซ้อนสำหรับองค์ประกอบที่ทับซ้อนกัน:

| ชั้น | Z-Index | องค์ประกอบ |
|---|---|---|
| พื้นฐาน | 0 | เนื้อหาหน้า |
| ตัวกรอง / ตัวเลือกเวลา | 50 | ตัวกรอง, ตัวเลือกเวลา |
| Dropdown / Popover | 1000 | Dropdown, select, date picker, sidenav popover |
| โอเวอร์เลย์ Modal | 2000 | ฉากหลัง modal |
| Modal | 2001 | กล่องโต้ตอบ modal |
| Snackbar | 3000 | การแจ้งเตือน toast |
| Tooltip | 4000 | Tooltip (ชั้นบนสุด) |

::: warning
อย่าใช้ค่า z-index ตามอำเภอใจ ให้ใช้ระดับที่กำหนดไว้ด้านบนเพื่อป้องกันปัญหาการซ้อนทับ
:::

## ผลิตภัณฑ์ Sprout

ตัวระบุผลิตภัณฑ์ที่ใช้ได้สำหรับ `<spr-logo>`:

| ID | ผลิตภัณฑ์ |
|---|---|
| `hr` | Sprout HR |
| `hr-mobile` | Sprout HR Mobile |
| `performance-plus` | Performance+ |
| `recruit-plus` | Recruit+ |
| `sail` | Sail |
| `readycash` | ReadyCash |
| `readywage` | ReadyWage |

## แหล่งข้อมูล

เวอร์ชันที่อ่านด้วยเครื่องได้: [`design-rules/navigation-architecture.yaml`](https://github.com/user/repo/blob/dev/design-rules/navigation-architecture.yaml)
