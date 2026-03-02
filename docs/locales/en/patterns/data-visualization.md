---
title: Data Visualization
description: Chart colors, typography, layout rules, and data formatting conventions for Sprout products.
outline: deep
---

# Data Visualization

Guidelines for presenting data consistently across all Sprout products — from chart colors to number formatting.

## Chart Color Palette

### Primary Series

| Order | Color | Hex | Use |
|---|---|---|---|
| 1st | kangkong-600 | `#17AD49` | Main/default data series |
| 2nd | blueberry-600 | `#1679FA` | Second series |
| 3rd | carrot-600 | `#FF7F00` | Third series |

### Full Categorical Palette

Use this ordered palette for multi-series charts (max 8 recommended):

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

### Semantic Colors for Status Data

| Meaning | Color | Hex |
|---|---|---|
| Positive (growth, approved) | kangkong-600 | `#17AD49` |
| Negative (loss, rejected) | tomato-600 | `#DA2F38` |
| Neutral (no change) | mushroom-400 | `#919F9D` |
| Warning (at risk) | carrot-600 | `#FF7F00` |
| Information | blueberry-600 | `#1679FA` |

### Sequential Palette (Heatmaps)

For single-hue gradients, use shades 100 through 800 of one palette:

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

## Chart Typography

| Element | Class | Color |
|---|---|---|
| Chart title | `spr-subheading-sm` | `spr-text-color-strong` |
| Subtitle | `spr-body-sm-regular` | `spr-text-color-base` |
| Axis label | `spr-body-xs-regular` | `spr-text-color-base` |
| Axis tick | `spr-body-xs-regular` | `spr-text-color-weak` |
| Data label | `spr-body-xs-regular-medium` | `spr-text-color-strong` |
| Legend | `spr-body-xs-regular` | `spr-text-color-base` |

## Chart Layout

- Charts live inside **standard card containers** (`spr-border-color-weak`, `spr-rounded-border-radius-lg`, `spr-p-4`)
- Grid lines use `spr-border-color-weak` (dashed) — only horizontal by default
- Axis lines use `spr-border-color-base`
- Tooltips match the standard tooltip pattern (dark background, white text)
- Legend positioned below the chart for 3+ series, inline for 1-2 series

## Chart Type Rules

### Bar Charts

- Top corners rounded (`border-radius-xs`)
- Min bar width: 16px
- Gap ratio: 30% between bars
- Y-axis always starts at 0

### Line Charts

- Stroke width: 2px
- Dot radius: 4px (6px on hover)
- Area fill opacity: 10%

### Pie / Donut Charts

- White gap between slices (2px stroke)
- Donut thickness: 40%
- Max 6 slices — group remainder as "Other"
- Labels outside the chart

## Data Formatting

### Numbers

| Type | Format | Example |
|---|---|---|
| Integer | Comma thousands | 1,234,567 |
| Decimal | 2 decimal places | 1,234.56 |
| Currency (PHP) | ₱ + comma | ₱1,234,567.00 |
| Percentage | 1 decimal + % | 85.5% |
| Abbreviation | K / M / B | 12.5K, 1.2M |

### Dates

| Format | Pattern | Example |
|---|---|---|
| Short | MMM D | Jan 15 |
| Medium | MMM D, YYYY | Jan 15, 2025 |
| Long | MMMM D, YYYY | January 15, 2025 |

## Rules

| Rule | Detail |
|---|---|
| Max 8 series | Beyond 8, use filtering or grouping |
| Always title charts | Include title and optional subtitle for context |
| Don't rely on color alone | Pair with icons or patterns for colorblind accessibility |
| Provide data table fallback | Complex charts should have an accessible data table alternative |
| Right-align numbers | Numeric columns in tables are right-aligned |

## Source

Machine-readable version: [`design-rules/data-visualization.yaml`](https://github.com/user/repo/blob/dev/design-rules/data-visualization.yaml)
