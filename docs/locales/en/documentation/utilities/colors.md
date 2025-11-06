---
title: Colors
descripttion: Overview of the color scheme used in the design system, including primary colors and their variants.
outline: deep
---

# Colors

Our color scheme is styled with the Toge Design System v3.0 - Color Scheme to maintain a cohesive and accessible color palette across all components.

The `colors` utility provides a set of color-related functions that can be used to manipulate colors in various ways. The utility is available as a mixin and can be used in any component.

## Color Scheme

The Toge Design System v3.0 - Color Scheme includes the following primary colors:

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
