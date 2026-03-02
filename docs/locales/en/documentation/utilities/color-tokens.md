---
title: Color Tokens
description: Semantic and raw palette color tokens from the design system. Use these spr- classes for consistent UI colors.
outline: deep
---

# Color Tokens

Design color tokens are defined in **`src/assets/styles/tailwind.css`**. Use these `spr-` prefixed classes when styling UI so colors stay consistent with the design system.

## When to use which

- **Semantic tokens** (`spr-text-color-*`, `spr-background-color-*`, `spr-border-color-*`, `spr-divide-color-*`) — Use for UI states (default, hover, disabled, success, danger, etc.). They map to the correct palette and shade and support theming.
- **Raw palette** (`spr-text-{palette}-{shade}`, `spr-bg-{palette}-{shade}`, etc.) — Use when you need a specific shade. See [Colors](/en/documentation/utilities/colors) for palettes and hex values.

---

## Text color (semantic)

### Text — Neutral / UI

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-text-color-strong` | <span class="color-swatch" style="background: #262B2B;"></span> | Primary text, high emphasis |
| `spr-text-color-supporting` | <span class="color-swatch" style="background: #738482;"></span> | Secondary / supporting text |
| `spr-text-color-base` | <span class="color-swatch" style="background: #5D6C6B;"></span> | Default body text |
| `spr-text-color-weak` | <span class="color-swatch" style="background: #919F9D;"></span> | Muted or tertiary text |
| `spr-text-color-disabled` | <span class="color-swatch" style="background: #989898;"></span> | Disabled text |
| `spr-text-color-on-fill-disabled` | <span class="color-swatch" style="background: #7C7C7C;"></span> | Text on disabled filled controls |

### Text — Inverted (on dark background)

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-text-color-inverted-strong` | <span class="color-swatch" style="background: #FFFFFF; border: 1px solid var(--vp-c-divider);"></span> | Primary text on dark bg |
| `spr-text-color-inverted-base` | <span class="color-swatch" style="background: #D9DEDE;"></span> | Default text on dark bg |
| `spr-text-color-inverted-weak` | <span class="color-swatch" style="background: #919F9D;"></span> | Muted text on dark bg |
| `spr-text-color-inverted-disabled` | <span class="color-swatch" style="background: #656565;"></span> | Disabled text on dark bg |

### Text — Brand

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-text-color-brand-base` | <span class="color-swatch" style="background: #158039;"></span> | Brand text (default) |
| `spr-text-color-brand-hover` | <span class="color-swatch" style="background: #166531;"></span> | Brand text (hover) |
| `spr-text-color-brand-pressed` | <span class="color-swatch" style="background: #14532B;"></span> | Brand text (pressed) |

### Text — Success

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-text-color-success-base` | <span class="color-swatch" style="background: #158039;"></span> | Success text (default) |
| `spr-text-color-success-hover` | <span class="color-swatch" style="background: #166531;"></span> | Success text (hover) |
| `spr-text-color-success-pressed` | <span class="color-swatch" style="background: #14532B;"></span> | Success text (pressed) |

### Text — Information

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-text-color-information-base` | <span class="color-swatch" style="background: #1356BA;"></span> | Information text (default) |
| `spr-text-color-information-hover` | <span class="color-swatch" style="background: #164B92;"></span> | Information text (hover) |
| `spr-text-color-information-pressed` | <span class="color-swatch" style="background: #122E59;"></span> | Information text (pressed) |

### Text — Danger

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-text-color-danger-base` | <span class="color-swatch" style="background: #B61F27;"></span> | Danger / error text (default) |
| `spr-text-color-danger-hover` | <span class="color-swatch" style="background: #971D23;"></span> | Danger text (hover) |
| `spr-text-color-danger-pressed` | <span class="color-swatch" style="background: #7D1F24;"></span> | Danger text (pressed) |

### Text — Pending

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-text-color-pending-base` | <span class="color-swatch" style="background: #985008;"></span> | Pending text (default) |
| `spr-text-color-pending-hover` | <span class="color-swatch" style="background: #7C420B;"></span> | Pending text (hover) |
| `spr-text-color-pending-pressed` | <span class="color-swatch" style="background: #482200;"></span> | Pending text (pressed) |

### Text — Caution

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-text-color-caution-base` | <span class="color-swatch" style="background: #A1470B;"></span> | Caution / warning text (default) |
| `spr-text-color-caution-hover` | <span class="color-swatch" style="background: #823C0C;"></span> | Caution text (hover) |
| `spr-text-color-caution-pressed` | <span class="color-swatch" style="background: #461C04;"></span> | Caution text (pressed) |

### Text — Accent

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-text-color-accent-base` | <span class="color-swatch" style="background: #0C7492;"></span> | Accent text (default) |
| `spr-text-color-accent-hover` | <span class="color-swatch" style="background: #135E77;"></span> | Accent text (hover) |
| `spr-text-color-accent-pressed` | <span class="color-swatch" style="background: #154E64;"></span> | Accent text (pressed) |

---

## Background color (semantic)

### Background — Surface & default

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-background-color` | <span class="color-swatch" style="background: #FFFFFF; border: 1px solid var(--vp-c-divider);"></span> | Default surface (e.g. page bg) |
| `spr-background-color-default` | <span class="color-swatch" style="background: #D9DEDE;"></span> | Default fill for controls |
| `spr-background-color-surface` | <span class="color-swatch" style="background: #EFF1F1;"></span> | Surface background |
| `spr-background-color-surface-adaptive` | <span class="color-swatch" style="background: #E8EBEB;"></span> | Adaptive surface (e.g. overlays) |
| `spr-background-color-base` | <span class="color-swatch" style="background: #E6EAEA;"></span> | Neutral interactive (default) |
| `spr-background-color-hover` | <span class="color-swatch" style="background: #E8EAEA;"></span> | Neutral interactive (hover) |
| `spr-background-color-pressed` | <span class="color-swatch" style="background: #EAECEC;"></span> | Neutral interactive (pressed) |
| `spr-background-color-disabled` | <span class="color-swatch" style="background: #F1F2F3;"></span> | Disabled fill |

### Background — Inverted (dark surface)

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-background-color-inverted` | <span class="color-swatch" style="background: #262B2B;"></span> | Dark surface (default) |
| `spr-background-color-inverted-hover` | <span class="color-swatch" style="background: #394141;"></span> | Dark surface (hover) |
| `spr-background-color-inverted-pressed` | <span class="color-swatch" style="background: #414B4B;"></span> | Dark surface (pressed) |

### Background — Selection

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-background-color-single-active` | <span class="color-swatch" style="background: #DCFCE6;"></span> | Single selection (e.g. one list row) |
| `spr-background-color-multiple-active` | <span class="color-swatch" style="background: #F0FDF4;"></span> | Multiple selection |

### Background — Brand

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-background-color-brand-base` | <span class="color-swatch" style="background: #158039;"></span> | Brand solid (default) |
| `spr-background-color-brand-hover` | <span class="color-swatch" style="background: #166531;"></span> | Brand solid (hover) |
| `spr-background-color-brand-pressed` | <span class="color-swatch" style="background: #14532B;"></span> | Brand solid (pressed) |
| `spr-background-color-brand-weak` | <span class="color-swatch" style="background: #DCFCE6;"></span> | Brand subtle (default) |
| `spr-background-color-brand-weak-hover` | <span class="color-swatch" style="background: #BBF7CE;"></span> | Brand subtle (hover) |
| `spr-background-color-brand-weak-pressed` | <span class="color-swatch" style="background: #86EFA8;"></span> | Brand subtle (pressed) |

### Background — Success

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-background-color-success-base` | <span class="color-swatch" style="background: #17AD49;"></span> | Success solid (default) |
| `spr-background-color-success-hover` | <span class="color-swatch" style="background: #158039;"></span> | Success solid (hover) |
| `spr-background-color-success-pressed` | <span class="color-swatch" style="background: #166531;"></span> | Success solid (pressed) |
| `spr-background-color-success-weak` | <span class="color-swatch" style="background: #DCFCE6;"></span> | Success subtle (default) |
| `spr-background-color-success-weak-hover` | <span class="color-swatch" style="background: #BBF7CE;"></span> | Success subtle (hover) |
| `spr-background-color-success-weak-pressed` | <span class="color-swatch" style="background: #86EFA8;"></span> | Success subtle (pressed) |

### Background — Information

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-background-color-information-base` | <span class="color-swatch" style="background: #1679FA;"></span> | Information solid (default) |
| `spr-background-color-information-hover` | <span class="color-swatch" style="background: #0F6EEB;"></span> | Information solid (hover) |
| `spr-background-color-information-pressed` | <span class="color-swatch" style="background: #1356BA;"></span> | Information solid (pressed) |
| `spr-background-color-information-weak` | <span class="color-swatch" style="background: #EEF7FF;"></span> | Information subtle (default) |
| `spr-background-color-information-weak-hover` | <span class="color-swatch" style="background: #D8EBFF;"></span> | Information subtle (hover) |
| `spr-background-color-information-weak-pressed` | <span class="color-swatch" style="background: #BADCFF;"></span> | Information subtle (pressed) |

### Background — Pending

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-background-color-pending-base` | <span class="color-swatch" style="background: #FFBF00;"></span> | Pending solid (default) |
| `spr-background-color-pending-hover` | <span class="color-swatch" style="background: #E29300;"></span> | Pending solid (hover) |
| `spr-background-color-pending-pressed` | <span class="color-swatch" style="background: #BB6802;"></span> | Pending solid (pressed) |
| `spr-background-color-pending-weak` | <span class="color-swatch" style="background: #FFFFEA;"></span> | Pending subtle (default) |
| `spr-background-color-pending-weak-hover` | <span class="color-swatch" style="background: #FFFBC5;"></span> | Pending subtle (hover) |
| `spr-background-color-pending-weak-pressed` | <span class="color-swatch" style="background: #FFF885;"></span> | Pending subtle (pressed) |

### Background — Caution

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-background-color-caution-base` | <span class="color-swatch" style="background: #FF970A;"></span> | Caution solid (default) |
| `spr-background-color-caution-hover` | <span class="color-swatch" style="background: #FF7F00;"></span> | Caution solid (hover) |
| `spr-background-color-caution-pressed` | <span class="color-swatch" style="background: #CC5C02;"></span> | Caution solid (pressed) |
| `spr-background-color-caution-weak` | <span class="color-swatch" style="background: #FFFAEC;"></span> | Caution subtle (default) |
| `spr-background-color-caution-weak-hover` | <span class="color-swatch" style="background: #FFF4D3;"></span> | Caution subtle (hover) |
| `spr-background-color-caution-weak-pressed` | <span class="color-swatch" style="background: #FFE5A5;"></span> | Caution subtle (pressed) |

### Background — Accent

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-background-color-accent-base` | <span class="color-swatch" style="background: #0592B5;"></span> | Accent solid (default) |
| `spr-background-color-accent-hover` | <span class="color-swatch" style="background: #0C7492;"></span> | Accent solid (hover) |
| `spr-background-color-accent-pressed` | <span class="color-swatch" style="background: #135E77;"></span> | Accent solid (pressed) |
| `spr-background-color-accent-weak` | <span class="color-swatch" style="background: #ECFEFF;"></span> | Accent subtle (default) |
| `spr-background-color-accent-weak-hover` | <span class="color-swatch" style="background: #CEFBFF;"></span> | Accent subtle (hover) |
| `spr-background-color-accent-weak-pressed` | <span class="color-swatch" style="background: #A3F3FE;"></span> | Accent subtle (pressed) |

### Background — Danger

| Class Name | Color | Usage |
|------------|:-----:|-------|
| `spr-background-color-danger-base` | <span class="color-swatch" style="background: #DA2F38;"></span> | Danger solid (default) |
| `spr-background-color-danger-hover` | <span class="color-swatch" style="background: #B61F27;"></span> | Danger solid (hover) |
| `spr-background-color-danger-pressed` | <span class="color-swatch" style="background: #971D23;"></span> | Danger solid (pressed) |
| `spr-background-color-danger-weak` | <span class="color-swatch" style="background: #FEF2F3;"></span> | Danger subtle (default) |
| `spr-background-color-danger-weak-hover` | <span class="color-swatch" style="background: #FEE2E3;"></span> | Danger subtle (hover) |
| `spr-background-color-danger-weak-pressed` | <span class="color-swatch" style="background: #FDCBCE;"></span> | Danger subtle (pressed) |

---

## Border and divide (semantic)

Full lists in tabulated form: [Border Colors](/en/documentation/utilities/border-colors).

---

## Raw palette usage

Pattern: `spr-{property}-{palette}-{shade}`.

| Class Name pattern | Usage |
|--------------------|-------|
| `spr-text-{palette}-{shade}` | Text color from palette (e.g. `spr-text-kangkong-700`) |
| `spr-bg-{palette}-{shade}` | Background from palette (e.g. `spr-bg-tomato-100`) |
| `spr-border-{palette}-{shade}` | Border color from palette |
| `spr-divide-{palette}-{shade}` | Divider color between children |

**Palettes:** `white`, `mushroom`, `tomato`, `carrot`, `mango`, `kangkong`, `wintermelon`, `blueberry`, `ubas`  
**Shades:** `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`

Hex values and full palette details: [Colors](/en/documentation/utilities/colors).

<style>
  .color-swatch {
    display: inline-block;
    width: 2rem;
    height: 1.25rem;
    border-radius: 4px;
    vertical-align: middle;
  }
</style>
