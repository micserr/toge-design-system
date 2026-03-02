---
title: สี
description: ภาพรวมของชุดสีที่ใช้ในระบบการออกแบบ รวมถึงสีหลักและตัวแปรต่างๆ
outline: deep
---

# สี

ชุดสีของเราได้รับการออกแบบด้วย Toge Design System v3.0 - Color Scheme เพื่อรักษาความสอดคล้องและการเข้าถึงสีที่เหมาะสมในทุกส่วนประกอบ

สำหรับ **โทเค็นสีเชิงความหมาย** (ข้อความ พื้นหลัง ขอบ แบ่ง) ที่แมปกับพาเลทเหล่านี้สำหรับสถานะ UI ดู [โทเค็นสี](/th/documentation/utilities/color-tokens) โทเค็นถูกกำหนดใน `src/assets/styles/tailwind.css`

ยูทิลิตี้ `colors` ให้ชุดฟังก์ชันที่เกี่ยวข้องกับสีที่สามารถใช้จัดการสีได้หลายวิธี ยูทิลิตี้มีให้เป็น mixin และใช้ในคอมโพเนนต์ใดก็ได้

## ชุดสี

Toge Design System v3.0 - Color Scheme มีพาเลทดังนี้ ใช้รูปแบบ `spr-{property}-{palette}-{shade}` (เช่น `spr-bg-white-50`, `spr-text-kangkong-700`)

---

### White

ขาวและเทา (neutral)

| ระดับ | สี | Hex |
|:-----:|:-----:|---|
| 50 | <span class="color-swatch" style="background: #FFFFFF; border: 1px solid var(--vp-c-divider);"></span> | `#FFFFFF` |
| 100 | <span class="color-swatch" style="background: #F1F2F3;"></span> | `#F1F2F3` |
| 200 | <span class="color-swatch" style="background: #DBDBDD;"></span> | `#DBDBDD` |
| 300 | <span class="color-swatch" style="background: #BABCC0;"></span> | `#BABCC0` |
| 400 | <span class="color-swatch" style="background: #989898;"></span> | `#989898` |
| 500 | <span class="color-swatch" style="background: #7C7C7C;"></span> | `#7C7C7C` |
| 600 | <span class="color-swatch" style="background: #656565;"></span> | `#656565` |
| 700 | <span class="color-swatch" style="background: #525252;"></span> | `#525252` |
| 800 | <span class="color-swatch" style="background: #464646;"></span> | `#464646` |
| 900 | <span class="color-swatch" style="background: #3D3D3D;"></span> | `#3D3D3D` |
| 950 | <span class="color-swatch" style="background: #292929;"></span> | `#292929` |

---

### Mushroom

โทนดิน (neutral)

| ระดับ | สี | Hex |
|:-----:|:-----:|---|
| 50 | <span class="color-swatch" style="background: #EFF1F1; border: 1px solid var(--vp-c-divider);"></span> | `#EFF1F1` |
| 100 | <span class="color-swatch" style="background: #E6EAEA;"></span> | `#E6EAEA` |
| 200 | <span class="color-swatch" style="background: #D9DEDE;"></span> | `#D9DEDE` |
| 300 | <span class="color-swatch" style="background: #B8C1C0;"></span> | `#B8C1C0` |
| 400 | <span class="color-swatch" style="background: #919F9D;"></span> | `#919F9D` |
| 500 | <span class="color-swatch" style="background: #738482;"></span> | `#738482` |
| 600 | <span class="color-swatch" style="background: #5D6C6B;"></span> | `#5D6C6B` |
| 700 | <span class="color-swatch" style="background: #4C5857;"></span> | `#4C5857` |
| 800 | <span class="color-swatch" style="background: #414B4B;"></span> | `#414B4B` |
| 900 | <span class="color-swatch" style="background: #394141;"></span> | `#394141` |
| 950 | <span class="color-swatch" style="background: #262B2B;"></span> | `#262B2B` |

---

### Tomato

โทนแดง / danger

| ระดับ | สี | Hex |
|:-----:|:-----:|---|
| 50 | <span class="color-swatch" style="background: #FEF2F3; border: 1px solid var(--vp-c-divider);"></span> | `#FEF2F3` |
| 100 | <span class="color-swatch" style="background: #FEE2E3;"></span> | `#FEE2E3` |
| 200 | <span class="color-swatch" style="background: #FDCBCE;"></span> | `#FDCBCE` |
| 300 | <span class="color-swatch" style="background: #FBA6AA;"></span> | `#FBA6AA` |
| 400 | <span class="color-swatch" style="background: #F6737A;"></span> | `#F6737A` |
| 500 | <span class="color-swatch" style="background: #EC4750;"></span> | `#EC4750` |
| 600 | <span class="color-swatch" style="background: #DA2F38;"></span> | `#DA2F38` |
| 700 | <span class="color-swatch" style="background: #B61F27;"></span> | `#B61F27` |
| 800 | <span class="color-swatch" style="background: #971D23;"></span> | `#971D23` |
| 900 | <span class="color-swatch" style="background: #7D1F24;"></span> | `#7D1F24` |
| 950 | <span class="color-swatch" style="background: #440B0E;"></span> | `#440B0E` |

---

### Carrot

โทนส้ม / caution

| ระดับ | สี | Hex |
|:-----:|:-----:|---|
| 50 | <span class="color-swatch" style="background: #FFFAEC; border: 1px solid var(--vp-c-divider);"></span> | `#FFFAEC` |
| 100 | <span class="color-swatch" style="background: #FFF4D3;"></span> | `#FFF4D3` |
| 200 | <span class="color-swatch" style="background: #FFE5A5;"></span> | `#FFE5A5` |
| 300 | <span class="color-swatch" style="background: #FFD16D;"></span> | `#FFD16D` |
| 400 | <span class="color-swatch" style="background: #FFB132;"></span> | `#FFB132` |
| 500 | <span class="color-swatch" style="background: #FF970A;"></span> | `#FF970A` |
| 600 | <span class="color-swatch" style="background: #FF7F00;"></span> | `#FF7F00` |
| 700 | <span class="color-swatch" style="background: #CC5C02;"></span> | `#CC5C02` |
| 800 | <span class="color-swatch" style="background: #A1470B;"></span> | `#A1470B` |
| 900 | <span class="color-swatch" style="background: #823C0C;"></span> | `#823C0C` |
| 950 | <span class="color-swatch" style="background: #461C04;"></span> | `#461C04` |

---

### Mango

โทนเหลือง / pending

| ระดับ | สี | Hex |
|:-----:|:-----:|---|
| 50 | <span class="color-swatch" style="background: #FFFFEA; border: 1px solid var(--vp-c-divider);"></span> | `#FFFFEA` |
| 100 | <span class="color-swatch" style="background: #FFFBC5;"></span> | `#FFFBC5` |
| 200 | <span class="color-swatch" style="background: #FFF885;"></span> | `#FFF885` |
| 300 | <span class="color-swatch" style="background: #FFED46;"></span> | `#FFED46` |
| 400 | <span class="color-swatch" style="background: #FFDF1B;"></span> | `#FFDF1B` |
| 500 | <span class="color-swatch" style="background: #FFBF00;"></span> | `#FFBF00` |
| 600 | <span class="color-swatch" style="background: #E29300;"></span> | `#E29300` |
| 700 | <span class="color-swatch" style="background: #BB6802;"></span> | `#BB6802` |
| 800 | <span class="color-swatch" style="background: #985008;"></span> | `#985008` |
| 900 | <span class="color-swatch" style="background: #7C420B;"></span> | `#7C420B` |
| 950 | <span class="color-swatch" style="background: #482200;"></span> | `#482200` |

---

### Kangkong

โทนเขียว / success / brand

| ระดับ | สี | Hex |
|:-----:|:-----:|---|
| 50 | <span class="color-swatch" style="background: #F0FDF4; border: 1px solid var(--vp-c-divider);"></span> | `#F0FDF4` |
| 100 | <span class="color-swatch" style="background: #DCFCE6;"></span> | `#DCFCE6` |
| 200 | <span class="color-swatch" style="background: #BBF7CE;"></span> | `#BBF7CE` |
| 300 | <span class="color-swatch" style="background: #86EFA8;"></span> | `#86EFA8` |
| 400 | <span class="color-swatch" style="background: #4ADE7B;"></span> | `#4ADE7B` |
| 500 | <span class="color-swatch" style="background: #22C558;"></span> | `#22C558` |
| 600 | <span class="color-swatch" style="background: #17AD49;"></span> | `#17AD49` |
| 700 | <span class="color-swatch" style="background: #158039;"></span> | `#158039` |
| 800 | <span class="color-swatch" style="background: #166531;"></span> | `#166531` |
| 900 | <span class="color-swatch" style="background: #14532B;"></span> | `#14532B` |
| 950 | <span class="color-swatch" style="background: #052E15;"></span> | `#052E15` |

---

### Wintermelon

โทนฟ้าอมเขียว / accent

| ระดับ | สี | Hex |
|:-----:|:-----:|---|
| 50 | <span class="color-swatch" style="background: #ECFEFF; border: 1px solid var(--vp-c-divider);"></span> | `#ECFEFF` |
| 100 | <span class="color-swatch" style="background: #CEFBFF;"></span> | `#CEFBFF` |
| 200 | <span class="color-swatch" style="background: #A3F3FE;"></span> | `#A3F3FE` |
| 300 | <span class="color-swatch" style="background: #64E9FC;"></span> | `#64E9FC` |
| 400 | <span class="color-swatch" style="background: #1ED5F2;"></span> | `#1ED5F2` |
| 500 | <span class="color-swatch" style="background: #02AFCE;"></span> | `#02AFCE` |
| 600 | <span class="color-swatch" style="background: #0592B5;"></span> | `#0592B5` |
| 700 | <span class="color-swatch" style="background: #0C7492;"></span> | `#0C7492` |
| 800 | <span class="color-swatch" style="background: #135E77;"></span> | `#135E77` |
| 900 | <span class="color-swatch" style="background: #154E64;"></span> | `#154E64` |
| 950 | <span class="color-swatch" style="background: #073345;"></span> | `#073345` |

---

### Blueberry

โทนน้ำเงิน / information

| ระดับ | สี | Hex |
|:-----:|:-----:|---|
| 50 | <span class="color-swatch" style="background: #EEF7FF; border: 1px solid var(--vp-c-divider);"></span> | `#EEF7FF` |
| 100 | <span class="color-swatch" style="background: #D8EBFF;"></span> | `#D8EBFF` |
| 200 | <span class="color-swatch" style="background: #BADCFF;"></span> | `#BADCFF` |
| 300 | <span class="color-swatch" style="background: #8BBDFF;"></span> | `#8BBDFF` |
| 400 | <span class="color-swatch" style="background: #549EFF;"></span> | `#549EFF` |
| 500 | <span class="color-swatch" style="background: #2D88FF;"></span> | `#2D88FF` |
| 600 | <span class="color-swatch" style="background: #1679FA;"></span> | `#1679FA` |
| 700 | <span class="color-swatch" style="background: #0F6EEB;"></span> | `#0F6EEB` |
| 800 | <span class="color-swatch" style="background: #1356BA;"></span> | `#1356BA` |
| 900 | <span class="color-swatch" style="background: #164B92;"></span> | `#164B92` |
| 950 | <span class="color-swatch" style="background: #122E59;"></span> | `#122E59` |

---

### Ubas

โทนม่วง

| ระดับ | สี | Hex |
|:-----:|:-----:|---|
| 50 | <span class="color-swatch" style="background: #F5F3FF; border: 1px solid var(--vp-c-divider);"></span> | `#F5F3FF` |
| 100 | <span class="color-swatch" style="background: #EEE9FE;"></span> | `#EEE9FE` |
| 200 | <span class="color-swatch" style="background: #DED6FE;"></span> | `#DED6FE` |
| 300 | <span class="color-swatch" style="background: #C6B5FD;"></span> | `#C6B5FD` |
| 400 | <span class="color-swatch" style="background: #AA8BFA;"></span> | `#AA8BFA` |
| 500 | <span class="color-swatch" style="background: #8952F6;"></span> | `#8952F6` |
| 600 | <span class="color-swatch" style="background: #8139EE;"></span> | `#8139EE` |
| 700 | <span class="color-swatch" style="background: #7227DA;"></span> | `#7227DA` |
| 800 | <span class="color-swatch" style="background: #5F21B6;"></span> | `#5F21B6` |
| 900 | <span class="color-swatch" style="background: #501D95;"></span> | `#501D95` |
| 950 | <span class="color-swatch" style="background: #311065;"></span> | `#311065` |

---

<style>
  .color-swatch {
    display: inline-block;
    width: 2rem;
    height: 1.25rem;
    border-radius: 4px;
    vertical-align: middle;
  }
</style>
