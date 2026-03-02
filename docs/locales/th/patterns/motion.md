---
title: การเคลื่อนไหว
description: ระยะเวลาแอนิเมชัน ฟังก์ชันอีซิง และรูปแบบทรานซิชันที่ใช้ทั่วทั้ง Sprout Design System
outline: deep
---

# การเคลื่อนไหว

การเคลื่อนไหวใน Sprout มีจุดประสงค์ที่ชัดเจนและสม่ำเสมอ ทุกแอนิเมชันใช้ระยะเวลาที่กำหนดไว้และฟังก์ชันอีซิงมาตรฐานเพื่อสร้างความรู้สึกที่เป็นเอกภาพในทุกผลิตภัณฑ์

## มาตราส่วนระยะเวลา

| ชื่อ | ค่า | การใช้งาน |
|---|---|---|
| **Instant** | 0ms | สลับ checkbox, เลือก radio |
| **Fast** | 150ms | วางเมาส์ปุ่ม, โฟกัส input, สลับแท็บ, tooltip |
| **Normal** | 300ms | แผงเลื่อน, เติม progress bar, แสดง/ซ่อน popper |
| **Slow** | 500ms | เปิด modal, เลื่อน sidenav บนมือถือ |
| **Extra Slow** | 800ms | แอนิเมชันออกที่ตั้งใจ |

## ฟังก์ชันอีซิง

| ชื่อ | ค่า | การใช้งาน |
|---|---|---|
| **Standard** | `ease-in-out` | ค่าเริ่มต้นสำหรับทรานซิชันส่วนใหญ่ — เริ่มและจบอย่างนุ่มนวล |
| **Enter** | `ease-out` | องค์ประกอบที่เข้าสู่วิวพอร์ต — เริ่มเร็ว ลงจอดอย่างนุ่มนวล |
| **Exit** | `ease-in` | องค์ประกอบที่ออกจากวิวพอร์ต — เริ่มอย่างนุ่มนวล ออกอย่างรวดเร็ว |
| **Linear** | `linear` | Progress bar, แอนิเมชันต่อเนื่อง |
| **Custom Sidenav** | `cubic-bezier(1, 0.5, 0.8, 1)` | ทรานซิชันออกของเมนูย่อย sidenav |

## รูปแบบทรานซิชัน

### จางหาย (Fade)

การเปลี่ยน opacity อย่างง่ายสำหรับแสดง/ซ่อนองค์ประกอบ

```css
transition: opacity 150ms ease-in-out;
```

### เลื่อนจางหาย (Slide Fade)

เลื่อนแนวนอนพร้อมจางหายสำหรับทรานซิชันเนื้อหาแผง (เช่น เมนูย่อยของ sidenav)

```css
/* Enter */
transition: all 300ms ease-out;
transform: translateX(-20px); opacity: 0; → translateX(0); opacity: 1;

/* Leave */
transition: all 800ms cubic-bezier(1, 0.5, 0.8, 1);
```

### ขยายจางหาย (Scale Fade — Modal Bounce)

ขยายขนาด + จางหายสำหรับการเปิด modal

```css
@keyframes bounce {
  0%   { transform: scale(0.9); opacity: 0; }
  50%  { transform: scale(1.02); }
  100% { transform: scale(1); opacity: 1; }
}
animation: bounce 500ms;
```

### ทรานซิชันสี

เปลี่ยนสีพื้นหลัง ข้อความ หรือเส้นขอบเมื่อเปลี่ยนสถานะ

```css
transition: color 150ms ease-in-out, background-color 150ms ease-in-out;
```

## แอนิเมชันคอมโพเนนต์

| คอมโพเนนต์ | แอนิเมชัน | ระยะเวลา | หมายเหตุ |
|---|---|---|---|
| `spr-modal` | Bounce scale | 500ms | `scale(0.9) → scale(1.02) → scale(1)` |
| `spr-banner` | Slide down | 250ms | `translateY(-100%) → translateY(0)` |
| `spr-snackbar` | Fade in/out | 300ms | ปิดอัตโนมัติหลัง 4000ms |
| `spr-skeletal-loader` | Pulse shimmer | วนรอบ 2s | ไล่สีจาก mushroom-50 ถึง mushroom-200 |
| `spr-radio` | Shadow grow | — | วงแหวนขยายออกด้านนอกเมื่อเลือก |
| `spr-sidenav` (เดสก์ท็อป) | Slide | 300ms | `ease-out` |
| `spr-sidenav` (มือถือ) | Slide | 500ms | `ease-in-out` |
| Date/Time pickers | Opacity | 150ms | `ease-in-out` |

## ลดการเคลื่อนไหว

เมื่อผู้ใช้เปิดใช้งาน `prefers-reduced-motion: reduce`:

- ปิดใช้งานแอนิเมชันตกแต่งทั้งหมด (ทรานซิชัน, ทรานส์ฟอร์ม)
- คงไว้เฉพาะการเคลื่อนไหวที่จำเป็น (สปินเนอร์โหลด, ตัวบ่งชี้ความคืบหน้า)
- การจางหายด้วย opacity เพียงอย่างเดียวสามารถใช้เป็นทางเลือกแทนได้
- แทนที่ทรานซิชันเลื่อน/ขยายด้วยการเปลี่ยนสถานะทันที

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## กฎ

| กฎ | รายละเอียด |
|---|---|
| ใช้ระยะเวลาที่กำหนด | ห้ามใช้ค่าตามอำเภอใจ — ใช้ fast (150ms), normal (300ms), slow (500ms) |
| Enter = ease-out | องค์ประกอบที่ปรากฏใช้ `ease-out` |
| Exit = ease-in | องค์ประกอบที่หายไปใช้ `ease-in` |
| สองทิศทาง = ease-in-out | ทรานซิชัน hover, focus และ toggle ใช้ `ease-in-out` |
| หน่วงเวลาสำหรับการโหลด | แสดงสถานะโหลดหลัง 300ms เพื่อหลีกเลี่ยงการกะพริบ |
| ห้ามบล็อกการโต้ตอบ | แอนิเมชันต้องไม่ป้องกันผู้ใช้จากการคลิกหรือพิมพ์ |

## แหล่งข้อมูล

เวอร์ชันที่อ่านด้วยเครื่องได้: [`design-rules/motion.yaml`](https://github.com/user/repo/blob/dev/design-rules/motion.yaml)
