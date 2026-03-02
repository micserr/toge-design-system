# UI Specs Tab Standards

## Purpose

The UI Specs tab is the design engineering reference — anatomy, exact dimensions, spacing values, design token mappings, and state behavior. This is what designers hand off and what developers implement.

## Required Sections (in order)

### 1. Key Features

Quick bullet summary of the component's capabilities:

```markdown
## Key Features

- 3 tones: `neutral`, `success`, `danger`
- 3 sizes: `small`, `medium`, `large`
- 3 variants: `primary`, `secondary`, `tertiary`
- 5 states: base, hover, pressed, focus, disabled
```

### 2. Anatomy

Table listing each visual part of the component:

| # | Part | Description | Required |
|---|---|---|---|
| 1 | Container | The outer boundary... | Yes |
| 2 | Label | The text content... | Yes |

### 3. Sizing

Include a **live size reference** showing all sizes side by side, followed by a detailed dimensions table.

The dimensions table should map each property to its value and Tailwind token per size:

```markdown
### Size Reference

<div class="spr-flex spr-items-end spr-gap-4 spr-mt-4 spr-mb-4">
  <div class="spr-text-center">
    <spr-button size="small">Small</spr-button>
    <div class="spr-mt-2 spr-text-xs spr-text-color-subtle">Small</div>
  </div>
  <!-- Medium, Large... -->
</div>

### Dimensions

| Property | Small | Medium | Large |
|---|---|---|---|
| Min Width | 24px `spr-min-w-6` | ... | ... |
```

### 4. Spacing

Table of internal spacing values:

| Property | Value | Token |
|---|---|---|
| Icon-to-text gap | 6px | `spr-gap-1.5` |

### 5. Design Tokens

Organized by token category. Always include **all variant x tone combinations**:

- Background Colors (per variant: primary, secondary, tertiary)
- Text Colors
- Border Colors
- Disabled State tokens

Use inline `code` formatting for all token names.

### 6. States

Include a **live state reference** grid showing the component in each state across all tones, followed by a behavior table:

```markdown
### State Reference

<div class="spr-mt-4 spr-mb-4">
  <div class="spr-flex spr-items-center spr-gap-4 spr-mb-3">
    <div class="spr-w-20 spr-text-xs spr-font-medium spr-text-color-subtle">Base</div>
    <spr-button>Button</spr-button>
    <spr-button tone="success">Button</spr-button>
    <spr-button tone="danger">Button</spr-button>
  </div>
  <!-- Hover, Focus, Disabled rows... -->
</div>
```

### 7. Transitions

Document transition duration and easing:

```markdown
### Transitions

All state changes use `transition: 150ms ease-in-out` for smooth visual feedback.
```

## Deriving Values from Source Code

All values in the UI Specs tab MUST be derived from the actual source code:

1. **Sizing** — Read from `use-{name}.ts` computed class functions
2. **Tokens** — Read from the background/text/border class mappings in the composable
3. **Spacing** — Read from default Tailwind classes in the composable
4. **States** — Read from hover/pressed/focus/disabled logic in the composable

Never guess or approximate values. If a value isn't clear from the source, check the Tailwind config or the component's rendered output.

## Quality Checklist

- [ ] All dimension values match the source composable exactly
- [ ] All token names are correct and use `code` formatting
- [ ] Live visual references are included for sizes and states
- [ ] State behavior table covers all 5 states (base, hover, pressed, focus, disabled)
- [ ] Token tables cover all variant x tone combinations
- [ ] Transition values are documented
