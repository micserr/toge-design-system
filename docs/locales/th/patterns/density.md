---
title: ความหนาแน่น
description: หลักการระยะห่างและขนาดสำหรับโหมดความหนาแน่นแบบกระชับ ค่าเริ่มต้น และกว้างขวาง ในผลิตภัณฑ์ Sprout
outline: deep
---

# ความหนาแน่น

ผลิตภัณฑ์ Sprout มีข้อมูลจำนวนมาก กฎความหนาแน่นช่วยให้เกิดสมดุลที่เหมาะสมระหว่างการแสดงข้อมูลและความสามารถในการอ่านในบริบทที่แตกต่างกัน

## โหมดความหนาแน่น

| โหมด | ความสูงแถว | ฟอนต์ | Padding | กรณีการใช้งาน |
|---|---|---|---|---|
| **กระชับ** | 32px | `spr-body-xs-regular` (12px) | 6px แนวตั้ง | ตารางข้อมูล ตัวกรอง การตั้งค่า |
| **ค่าเริ่มต้น** | 40px | `spr-body-sm-regular` (14px) | 10px แนวตั้ง | ฟอร์ม หน้ารายละเอียด ทั่วไป |
| **กว้างขวาง** | 48px | `spr-body-md-regular` (16px) | 16px แนวตั้ง | การเริ่มต้นใช้งาน หน้า landing |

## ความหนาแน่นของตาราง

<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-mt-4 spr-overflow-hidden">
  <table class="spr-w-full" style="border-collapse: collapse;">
    <thead>
      <tr class="spr-background-color-surface">
        <th class="spr-label-sm-medium spr-text-color-base spr-px-4 spr-py-2 spr-text-left" style="border-bottom: 1px solid var(--spr-border-color-weak, #D9DEDE);">ความหนาแน่น</th>
        <th class="spr-label-sm-medium spr-text-color-base spr-px-4 spr-py-2 spr-text-left" style="border-bottom: 1px solid var(--spr-border-color-weak, #D9DEDE);">ความสูงแถว</th>
        <th class="spr-label-sm-medium spr-text-color-base spr-px-4 spr-py-2 spr-text-left" style="border-bottom: 1px solid var(--spr-border-color-weak, #D9DEDE);">Padding เซลล์</th>
        <th class="spr-label-sm-medium spr-text-color-base spr-px-4 spr-py-2 spr-text-left" style="border-bottom: 1px solid var(--spr-border-color-weak, #D9DEDE);">เหมาะสำหรับ</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--spr-border-color-weak, #D9DEDE);">
        <td class="spr-body-xs-regular spr-px-4 spr-py-1">กระชับ</td>
        <td class="spr-body-xs-regular spr-px-4 spr-py-1">32px</td>
        <td class="spr-body-xs-regular spr-px-4 spr-py-1">px-3 py-1.5</td>
        <td class="spr-body-xs-regular spr-px-4 spr-py-1">ทะเบียนพนักงาน บันทึกเงินเดือน</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--spr-border-color-weak, #D9DEDE);">
        <td class="spr-body-sm-regular spr-px-4 spr-py-2">ค่าเริ่มต้น</td>
        <td class="spr-body-sm-regular spr-px-4 spr-py-2">40px</td>
        <td class="spr-body-sm-regular spr-px-4 spr-py-2">px-4 py-2</td>
        <td class="spr-body-sm-regular spr-px-4 spr-py-2">ตารางทั่วไป</td>
      </tr>
      <tr>
        <td class="spr-body-sm-regular spr-px-4 spr-py-3">กว้างขวาง</td>
        <td class="spr-body-sm-regular spr-px-4 spr-py-3">48px</td>
        <td class="spr-body-sm-regular spr-px-4 spr-py-3">px-4 py-3</td>
        <td class="spr-body-sm-regular spr-px-4 spr-py-3">ตารางที่มีปุ่มการกระทำ</td>
      </tr>
    </tbody>
  </table>
</div>

## ความหนาแน่นของฟอร์ม

| โหมด | ช่องว่างฟิลด์ | ช่องว่างส่วน | ความสูง Input | กรณีการใช้งาน |
|---|---|---|---|---|
| กระชับ | 12px (`spr-gap-3`) | 16px (`spr-gap-4`) | 32px | แก้ไขแบบ inline ตัวกรอง |
| ค่าเริ่มต้น | 16px (`spr-gap-4`) | 24px (`spr-gap-6`) | 40px | ฟอร์มมาตรฐาน |
| กว้างขวาง | 24px (`spr-gap-6`) | 32px (`spr-gap-8`) | 48px | การเริ่มต้นใช้งาน วิซาร์ด |

## ความหนาแน่นของการ์ด

| โหมด | Padding | หัวข้อ | เนื้อหา | ช่องว่าง |
|---|---|---|---|---|
| กระชับ | `spr-p-3` (12px) | `spr-subheading-xs` | `spr-body-xs-regular` | `spr-gap-2` |
| ค่าเริ่มต้น | `spr-p-4` (16px) | `spr-subheading-sm` | `spr-body-sm-regular` | `spr-gap-3` |
| กว้างขวาง | `spr-p-6` (24px) | `spr-subheading-sm` | `spr-body-md-regular` | `spr-gap-4` |

### ตัวอย่าง

<div class="spr-grid spr-grid-cols-3 spr-gap-4 spr-mt-4">
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-3">
    <p class="spr-subheading-xs spr-m-0">กระชับ</p>
    <p class="spr-body-xs-regular spr-text-color-base spr-m-0 spr-mt-1">padding แน่น ข้อความเล็ก สำหรับแดชบอร์ดที่มีข้อมูลหนาแน่น</p>
  </div>
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4">
    <p class="spr-subheading-sm spr-m-0">ค่าเริ่มต้น</p>
    <p class="spr-body-sm-regular spr-text-color-base spr-m-0 spr-mt-2">padding และข้อความมาตรฐาน สไตล์การ์ดที่ใช้บ่อยที่สุด</p>
  </div>
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-6">
    <p class="spr-subheading-sm spr-m-0">กว้างขวาง</p>
    <p class="spr-body-md-regular spr-text-color-base spr-m-0 spr-mt-3">padding กว้างขวางและข้อความขนาดใหญ่ สำหรับการเริ่มต้นใช้งานและการตลาด</p>
  </div>
</div>

## ขนาดไอคอน

| ขนาด | ค่า | การใช้งาน |
|---|---|---|
| xs | 12px | แทรกในบรรทัดกับข้อความ body-xs |
| sm | 16px | แทรกในบรรทัดกับ body-sm UI แบบกระชับ |
| md | 20px | ขนาดไอคอนค่าเริ่มต้น |
| lg | 24px | ปุ่มที่มีข้อความ |
| xl | 32px | หัวข้อการ์ด ฟีเจอร์ |
| 2xl | 48px | สถานะว่าง ภาพประกอบ |

## กฎ

| กฎ | รายละเอียด |
|---|---|
| ค่าเริ่มต้นเป็นมาตรฐาน | ใช้โหมดกระชับเฉพาะเมื่อความหนาแน่นของข้อมูลต้องการเท่านั้น |
| เป้าหมายการสัมผัสขั้นต่ำ | แถวโหมดกระชับต้องมีความสูงอย่างน้อย 32px เพื่อความสามารถในการใช้งาน |
| ความสม่ำเสมอภายในส่วน | ห้ามผสมโหมดความหนาแน่นภายในส่วนเดียวกัน |
| มือถือใช้ค่าเริ่มต้นขึ้นไป | มุมมองมือถือควรใช้โหมดค่าเริ่มต้นหรือกว้างขวางสำหรับเป้าหมายการสัมผัส |

## แหล่งข้อมูล

เวอร์ชันที่เครื่องอ่านได้: [`design-rules/density-rules.yaml`](https://github.com/user/repo/blob/dev/design-rules/density-rules.yaml)