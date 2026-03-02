---
title: Form Sections
description: Layout pattern for dividing forms into logical sections with full-width border separators.
outline: deep
---

# Form Sections

Forms in Sprout products are divided into logical sections (e.g., "Personal Info", "Contact Details", "Employment"). Each section is separated by a full-width `spr-border-color-weak` border.

## The Layout

```
┌──────────────────────────────────────────┐
│  Section A Title                         │  ← 16px padding (p-4)
│  [form fields...]                        │
│                                          │
├──────────────────────────────────────────┤  ← full-width border (no side padding)
│  Section B Title                         │  ← 16px padding (p-4)
│  [form fields...]                        │
│                                          │
├──────────────────────────────────────────┤  ← full-width border
│  Section C Title                         │  ← 16px padding (p-4)
│  [form fields...]                        │
└──────────────────────────────────────────┘
```

## Key Principle

The border must span the **full width** of the container. Each section handles its own padding independently. Do NOT put padding on the outer wrapper — put it on each section.

## Implementation

```html
<!-- Outer container: NO horizontal padding -->
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg">

  <!-- Section A -->
  <div class="p-4">
    <h3 class="spr-subheading-sm mb-4">Personal Information</h3>
    <div class="grid grid-cols-2 gap-4">
      <spr-input v-model="firstName" label="First Name" />
      <spr-input v-model="lastName" label="Last Name" />
    </div>
  </div>

  <!-- Full-width separator -->
  <div class="spr-border-0 spr-border-t spr-border-solid spr-border-color-weak"></div>

  <!-- Section B -->
  <div class="p-4">
    <h3 class="spr-subheading-sm mb-4">Contact Details</h3>
    <div class="grid grid-cols-2 gap-4">
      <spr-input-email v-model="email" label="Email" />
      <spr-input-contact-number v-model="phone" label="Phone" />
    </div>
  </div>

  <!-- Full-width separator -->
  <div class="spr-border-0 spr-border-t spr-border-solid spr-border-color-weak"></div>

  <!-- Section C -->
  <div class="p-4">
    <h3 class="spr-subheading-sm mb-4">Employment</h3>
    <spr-select v-model="department" label="Department" :menu-list="departments" />
  </div>

</div>
```

## Live Example

<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-mt-4">
  <div class="spr-p-4">
    <h3 class="spr-subheading-sm spr-mb-4 spr-m-0">Personal Information</h3>
    <div class="spr-grid spr-grid-cols-2 spr-gap-4 spr-mt-4">
      <spr-input label="First Name" placeholder="Enter first name" />
      <spr-input label="Last Name" placeholder="Enter last name" />
    </div>
  </div>
  <div class="spr-border-0 spr-border-t spr-border-solid spr-border-color-weak"></div>
  <div class="spr-p-4">
    <h3 class="spr-subheading-sm spr-mb-4 spr-m-0">Contact Details</h3>
    <div class="spr-grid spr-grid-cols-2 spr-gap-4 spr-mt-4">
      <spr-input label="Email" placeholder="Enter email" />
      <spr-input label="Phone" placeholder="Enter phone number" />
    </div>
  </div>
  <div class="spr-border-0 spr-border-t spr-border-solid spr-border-color-weak"></div>
  <div class="spr-p-4">
    <h3 class="spr-subheading-sm spr-mb-4 spr-m-0">Employment</h3>
    <spr-input label="Department" placeholder="Select a department" />
  </div>
</div>

## Alternative: Using divide-y

If you prefer, Tailwind's `divide-y` utilities achieve the same effect with less markup:

```html
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg
            spr-divide-y spr-divide-solid spr-divide-color-weak">
  <div class="p-4"><!-- Section A --></div>
  <div class="p-4"><!-- Section B --></div>
  <div class="p-4"><!-- Section C --></div>
</div>
```

## Rules

| Rule | Detail |
|---|---|
| Border spans full width | Padding lives inside each section, not on the outer container |
| Consistent 16px padding | Every section uses `p-4` |
| Same token | Separators use `spr-border-color-weak`, matching the card border |
| Section headings | Use `spr-subheading-sm` or `spr-subheading-xs` |

## Do's and Don'ts

### Do

```html
<!-- Correct: padding on each section, not the outer wrapper -->
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg">
  <div class="p-4"><!-- Section A --></div>
  <div class="spr-border-0 spr-border-t spr-border-solid spr-border-color-weak"></div>
  <div class="p-4"><!-- Section B --></div>
</div>
```

### Don't

```html
<!-- Wrong: padding on the outer wrapper makes the border not span full width -->
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg p-4">
  <div><!-- Section A --></div>
  <div class="spr-border-0 spr-border-t spr-border-solid spr-border-color-weak"></div>
  <div><!-- Section B --></div>
</div>
```
