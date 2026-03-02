---
name: sprout-ui-patterns
description: >
  Design patterns and layout conventions used across Sprout products. Use this skill when:
  (1) Building card or card-section layouts, (2) Building forms with sectioned layouts,
  (3) Applying consistent border, spacing, and container patterns, (4) Following the
  established visual conventions for Sprout product pages.
---

# Sprout UI Patterns

> **Skill version:** 1.0.0

Recurring layout and visual patterns used across Sprout products (HR, Payroll, Ecosystem, etc.). These are not component APIs — they are **design conventions** for how components and containers are composed together.

---

## 1. Card / Card-Section Borders

All cards and card-like sections use `spr-border-color-weak` (mushroom-200, `#D9DEDE`) as their border color.

### Standard card container

```html
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg p-4">
  <!-- Card content -->
</div>
```

### Using `<spr-card>`

The `<spr-card>` component applies `spr-border-color-weak` automatically when no tone is set (or `tone="plain"`). No extra border classes needed:

```html
<spr-card title="Section Title">
  <template #content>
    <!-- Card content -->
  </template>
</spr-card>
```

### Key rules

- Border color is always `spr-border-color-weak` — never `spr-border-color-base` or raw palette values for card containers
- Combine with `spr-rounded-border-radius-lg` for standard card rounding
- Use standard Tailwind for padding/spacing (`p-4`, `p-6`, etc.)

---

## 2. Form Section Separators

Forms are divided into logical sections (e.g., "Personal Info", "Contact Details", "Employment"). Sections are separated by a full-width `spr-border-color-weak` horizontal rule.

### The pattern

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

### Implementation

The border must span the **full width** of the container. Each section handles its own padding independently. Do NOT put padding on the outer wrapper — put it on each section.

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

### Why not just `divide-y`?

Using Tailwind's `divide-y` on the outer container works too, but the pattern above gives explicit control. If you prefer `divide-y`:

```html
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg
            spr-divide-y spr-divide-solid spr-divide-color-weak">
  <div class="p-4"><!-- Section A --></div>
  <div class="p-4"><!-- Section B --></div>
  <div class="p-4"><!-- Section C --></div>
</div>
```

### Key rules

- **Border spans full width** — padding lives inside each section, not on the outer container
- **Consistent 16px padding** (`p-4`) on every section
- **Same token** — separators use `spr-border-color-weak`, matching the card border
- Section headings use `spr-subheading-sm` or `spr-subheading-xs`

---

## Quick Reference

| Pattern | Token | CSS Value |
|---|---|---|
| Card border | `spr-border-color-weak` | mushroom-200 (`#D9DEDE`) |
| Form section separator | `spr-border-color-weak` | mushroom-200 (`#D9DEDE`) |
| Section padding | `p-4` (standard Tailwind) | 16px |
| Card rounding | `spr-rounded-border-radius-lg` | design system token |
| Section heading | `spr-subheading-sm` | design system typography |

## Related Skills

- **sprout-design-system** — Component APIs, design tokens, Tailwind integration
- **design-system-docu-skills** — VitePress documentation patterns
