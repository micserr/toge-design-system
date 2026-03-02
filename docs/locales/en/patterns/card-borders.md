---
title: Card Borders
description: Border styling conventions for cards and card-like sections in Sprout products.
outline: deep
---

# Card Borders

All cards and card-like sections across Sprout products use `spr-border-color-weak` as their standard border color.

## Token

| Property | Token | Maps To | Hex |
|---|---|---|---|
| Border color | `spr-border-color-weak` | `spr-border-mushroom-200` | `#D9DEDE` |

## Standard Card Container

Use `spr-border-color-weak` with `spr-rounded-border-radius-lg` for a standard card:

```html
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg p-4">
  <!-- Card content -->
</div>
```

<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4 spr-mt-4">
  <p class="spr-body-sm-regular spr-m-0">This is a standard card container with <code>spr-border-color-weak</code>.</p>
</div>

## Using `<spr-card>`

The `<spr-card>` component applies `spr-border-color-weak` automatically when no tone is set (or `tone="plain"`). No extra border classes needed:

```html
<spr-card title="Section Title">
  <template #content>
    <!-- Card content -->
  </template>
</spr-card>
```

<spr-card title="Section Title" class="spr-mt-4">
  <template #content>
    <p class="spr-body-sm-regular spr-m-0">This card automatically uses <code>spr-border-color-weak</code>.</p>
  </template>
</spr-card>

## Rules

- Border color is always `spr-border-color-weak` — never use `spr-border-color-base` or raw palette values for card containers
- Combine with `spr-rounded-border-radius-lg` for standard card rounding
- Use standard Tailwind for padding/spacing (`p-4`, `p-6`, etc.)

## Do's and Don'ts

### Do

```html
<!-- Correct: spr-border-color-weak for card containers -->
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg p-4">
  ...
</div>
```

### Don't

```html
<!-- Wrong: spr-border-color-base is too strong for cards -->
<div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-lg p-4">
  ...
</div>

<!-- Wrong: raw palette value instead of semantic token -->
<div class="spr-border spr-border-solid spr-border-mushroom-300 spr-rounded-border-radius-lg p-4">
  ...
</div>
```
