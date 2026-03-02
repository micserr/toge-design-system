---
title: Density
description: Spacing and sizing conventions for compact, default, and spacious density modes in Sprout products.
outline: deep
---

# Density

Sprout products are data-heavy. Density rules ensure the right balance between information visibility and readability across different contexts.

## Density Modes

| Mode | Row Height | Font | Padding | Use Case |
|---|---|---|---|---|
| **Compact** | 32px | `spr-body-xs-regular` (12px) | 6px vertical | Data tables, filters, settings |
| **Default** | 40px | `spr-body-sm-regular` (14px) | 10px vertical | Forms, detail pages, general |
| **Spacious** | 48px | `spr-body-md-regular` (16px) | 16px vertical | Onboarding, landing pages |

## Table Density

<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-mt-4 spr-overflow-hidden">
  <table class="spr-w-full" style="border-collapse: collapse;">
    <thead>
      <tr class="spr-background-color-surface">
        <th class="spr-label-sm-medium spr-text-color-base spr-px-4 spr-py-2 spr-text-left" style="border-bottom: 1px solid var(--spr-border-color-weak, #D9DEDE);">Density</th>
        <th class="spr-label-sm-medium spr-text-color-base spr-px-4 spr-py-2 spr-text-left" style="border-bottom: 1px solid var(--spr-border-color-weak, #D9DEDE);">Row Height</th>
        <th class="spr-label-sm-medium spr-text-color-base spr-px-4 spr-py-2 spr-text-left" style="border-bottom: 1px solid var(--spr-border-color-weak, #D9DEDE);">Cell Padding</th>
        <th class="spr-label-sm-medium spr-text-color-base spr-px-4 spr-py-2 spr-text-left" style="border-bottom: 1px solid var(--spr-border-color-weak, #D9DEDE);">Best For</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--spr-border-color-weak, #D9DEDE);">
        <td class="spr-body-xs-regular spr-px-4 spr-py-1">Compact</td>
        <td class="spr-body-xs-regular spr-px-4 spr-py-1">32px</td>
        <td class="spr-body-xs-regular spr-px-4 spr-py-1">px-3 py-1.5</td>
        <td class="spr-body-xs-regular spr-px-4 spr-py-1">Employee directory, payroll records</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--spr-border-color-weak, #D9DEDE);">
        <td class="spr-body-sm-regular spr-px-4 spr-py-2">Default</td>
        <td class="spr-body-sm-regular spr-px-4 spr-py-2">40px</td>
        <td class="spr-body-sm-regular spr-px-4 spr-py-2">px-4 py-2</td>
        <td class="spr-body-sm-regular spr-px-4 spr-py-2">General-purpose tables</td>
      </tr>
      <tr>
        <td class="spr-body-sm-regular spr-px-4 spr-py-3">Spacious</td>
        <td class="spr-body-sm-regular spr-px-4 spr-py-3">48px</td>
        <td class="spr-body-sm-regular spr-px-4 spr-py-3">px-4 py-3</td>
        <td class="spr-body-sm-regular spr-px-4 spr-py-3">Tables with action buttons</td>
      </tr>
    </tbody>
  </table>
</div>

## Form Density

| Mode | Field Gap | Section Gap | Input Height | Use Case |
|---|---|---|---|---|
| Compact | 12px (`spr-gap-3`) | 16px (`spr-gap-4`) | 32px | Inline editing, filters |
| Default | 16px (`spr-gap-4`) | 24px (`spr-gap-6`) | 40px | Standard forms |
| Spacious | 24px (`spr-gap-6`) | 32px (`spr-gap-8`) | 48px | Onboarding, wizards |

## Card Density

| Mode | Padding | Title | Body | Gap |
|---|---|---|---|---|
| Compact | `spr-p-3` (12px) | `spr-subheading-xs` | `spr-body-xs-regular` | `spr-gap-2` |
| Default | `spr-p-4` (16px) | `spr-subheading-sm` | `spr-body-sm-regular` | `spr-gap-3` |
| Spacious | `spr-p-6` (24px) | `spr-subheading-sm` | `spr-body-md-regular` | `spr-gap-4` |

### Live Example

<div class="spr-grid spr-grid-cols-3 spr-gap-4 spr-mt-4">
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-3">
    <p class="spr-subheading-xs spr-m-0">Compact</p>
    <p class="spr-body-xs-regular spr-text-color-base spr-m-0 spr-mt-1">Tight padding, small text. For data-dense dashboards.</p>
  </div>
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4">
    <p class="spr-subheading-sm spr-m-0">Default</p>
    <p class="spr-body-sm-regular spr-text-color-base spr-m-0 spr-mt-2">Standard padding and text. The most common card style.</p>
  </div>
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-6">
    <p class="spr-subheading-sm spr-m-0">Spacious</p>
    <p class="spr-body-md-regular spr-text-color-base spr-m-0 spr-mt-3">Generous padding and larger text. For onboarding and marketing.</p>
  </div>
</div>

## Icon Sizes

| Size | Value | Use |
|---|---|---|
| xs | 12px | Inline with body-xs text |
| sm | 16px | Inline with body-sm, compact UI |
| md | 20px | Default icon size |
| lg | 24px | Buttons with text |
| xl | 32px | Card headers, features |
| 2xl | 48px | Empty states, illustrations |

## Rules

| Rule | Detail |
|---|---|
| Default is standard | Use compact only when data density demands it |
| Min touch target | Compact mode rows must still be at least 32px for usability |
| Consistency within sections | Don't mix density modes within the same section |
| Mobile uses default+ | Mobile views should use default or spacious for touch targets |

## Source

Machine-readable version: [`design-rules/density-rules.yaml`](https://github.com/user/repo/blob/dev/design-rules/density-rules.yaml)
