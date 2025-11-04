---
title: สี
descripttion: ภาพรวมของชุดสีที่ใช้ในระบบการออกแบบ รวมถึงสีหลักและตัวแปรต่างๆ
outline: deep
---

# สี

ชุดสีของเราได้รับการออกแบบด้วย Toge Design System v3.0 - Color Scheme เพื่อรักษาความสอดคล้องและการเข้าถึงสีที่เหมาะสมในทุกส่วนประกอบ

ยูทิลิตี้ `colors` ให้ชุดฟังก์ชันที่เกี่ยวข้องกับสีที่สามารถใช้เพื่อจัดการสีในหลายๆ วิธี ยูทิลิตี้นี้มีให้เป็น mixin และสามารถใช้ในส่วนประกอบใดก็ได้

## ชุดสี

Toge Design System v3.0 - Color Scheme รวมสีหลักดังต่อไปนี้:

<div class="color-scheme">
  <div v-for="(color, colorKey) in colorScheme" :key="colorKey">
    <h5>{{ colorKey.toUpperCase() }}</h5>
    <div class="color-row">
      <div class="color-item" v-for="(colorCode, colorCodeKey) in color" :key="colorCodeKey">
        <div class="color" :style="{ background: colorCode}"></div>
        <div class="value">{{ colorCodeKey }}</div>
      </div>
    </div>
  </div>
</div>

<script lang="ts" setup>
import colorScheme from '@/assets/scripts/colors';

</script>

<style>
  .color-scheme {
    display: grid;
    gap: 54px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    .color-row {
      display: flex;
      gap: 32px;
      margin-top: 8px;
      flex-wrap: wrap;

      .color-item {
        height: 50px;
        width: 100%;

        .color {
          height: 100%;
          width: 100%;
        }

        .value {
          font-size: 12px;
        }
      }
    }
  }

  /* Additional media query for extra responsiveness on small screens */
  @media (max-width: 600px) {
    .color-scheme {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
  }
</style>
