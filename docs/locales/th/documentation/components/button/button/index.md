---
title: ปุ่ม - ตัวอย่างสด
description: พื้นที่ทดลองแบบโต้ตอบสำหรับคอมโพเนนต์ปุ่ม Sprout ปรับแต่ง props ในเวลาจริงเพื่อดูการทำงานของปุ่ม
outline: deep
---

# ปุ่ม

คอมโพเนนต์ปุ่มเป็นองค์ประกอบที่หลากหลายและใช้กันทั่วไปในอินเทอร์เฟซผู้ใช้ ออกแบบมาเพื่อเรียกใช้การดำเนินการหรือเหตุการณ์เมื่อถูกคลิก สามารถปรับแต่งได้หลายวิธี รวมถึงขนาด โทน และตัวแปร เพื่อให้เหมาะกับความต้องการการออกแบบที่แตกต่างกัน


## พื้นที่ทดลองแบบโต้ตอบ

ใช้ตัวควบคุมด้านล่างเพื่อปรับแต่งคอมโพเนนต์ปุ่มและดูการเปลี่ยนแปลงในเวลาจริง โค้ดที่สร้างขึ้นจะอัปเดตโดยอัตโนมัติ

<PropsPlayground
  :component="SprButton"
  component-tag="spr-button"
  :prop-defs="[
    { name: 'tone', type: 'select', options: ['neutral', 'success', 'danger'], default: 'neutral' },
    { name: 'size', type: 'select', options: ['small', 'medium', 'large'], default: 'medium' },
    { name: 'variant', type: 'select', options: ['primary', 'secondary', 'tertiary'], default: 'primary' },
    { name: 'disabled', type: 'boolean', default: false },
    { name: 'hasIcon', type: 'boolean', default: false },
    { name: 'fullwidth', type: 'boolean', default: false },
  ]"
  default-slot="ปุ่ม"
/>

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import SprButton from "@/components/button/button.vue";
import SprLogo from "@/components/logo/logo.vue";
</script>
