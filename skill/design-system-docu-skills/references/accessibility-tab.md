# Accessibility Tab Standards

## Purpose

The Accessibility tab is the dedicated reference for accessible component usage — ARIA patterns, keyboard interaction, focus management, color contrast, and implementation guidance for both designers and developers.

## Required Sections (in order)

### 1. Overview

Brief statement about the component's accessibility foundation (e.g., built on native HTML elements):

```markdown
## Overview

The Button component is built on the native `<button>` HTML element, providing built-in keyboard navigation, focus management, and screen reader support.
```

### 2. ARIA Attributes

Table of relevant ARIA attributes and their behavior:

```markdown
## ARIA Attributes

| Attribute | Behavior |
|---|---|
| `role` | Implicit `button` role from the native `<button>` element — no manual role needed. |
| `aria-disabled` | Automatically set to `"true"` when the `disabled` prop is `true`. |
| `aria-label` | Must be manually added for icon-only buttons to provide a text alternative. |
```

### 3. Keyboard Interaction

Table of keyboard keys and their actions:

```markdown
## Keyboard Interaction

| Key | Action |
|---|---|
| `Tab` | Moves focus to the button. |
| `Enter` | Activates the button (native behavior). |
| `Space` | Activates the button (native behavior). |
```

### 4. Focus Management

Description of focus indicator styling with live visual examples:

```markdown
## Focus Management

The button provides a visible focus indicator using a 2px outline with a 4px offset.

<div class="spr-flex spr-items-center spr-gap-4 spr-mt-4 spr-mb-4">
  <spr-button state="focus">Focused Neutral</spr-button>
  <spr-button tone="success" state="focus">Focused Success</spr-button>
</div>
```

### 5. Color Contrast

WCAG 2.1 AA compliance notes per variant and state, with live examples:

```markdown
## Color Contrast

All button states maintain WCAG 2.1 AA contrast ratios:

- **Primary variant** — Text on filled backgrounds meets minimum 4.5:1 contrast
- **Secondary variant** — Border and text colors meet minimum 3:1 contrast
```

### 6. For Designers

Design-focused accessibility guidelines — visual requirements, focus indicators, text alternatives:

```markdown
## For Designers

- Ensure sufficient color contrast between button text and background in all states
- Provide visible focus indicators — the 4px outline offset should not be removed or reduced
- When using icon-only buttons, always include a text alternative in the design spec
```

### 7. For Developers

Implementation-focused guidance with code examples for common patterns:

- **Standard usage** — Show the simplest accessible implementation
- **Icon-only** — Show `aria-label` usage
- **Disabled with context** — Show how to explain disabled state
- **Loading state** — Show `aria-busy` pattern

```markdown
## For Developers

### Icon-Only Button

Always provide `aria-label` for screen readers:

\```vue
<spr-button hasIcon aria-label="Delete item">
  <Icon icon="ph:trash" />
</spr-button>
\```
```

### 8. Testing Checklist

Markdown checklist of accessibility tests to verify:

```markdown
## Testing Checklist

- [ ] Component is reachable via `Tab` key
- [ ] Focus indicator is clearly visible on all backgrounds
- [ ] Screen reader announces the label correctly
- [ ] Disabled state is announced to screen readers
```

## Deriving Content from Source Code

1. **ARIA attributes** — Check the component template for `aria-*` bindings
2. **Keyboard interaction** — Check for `@keydown` handlers or native element behavior
3. **Focus management** — Check the composable for focus/outline classes
4. **Color contrast** — Verify token values meet WCAG ratios

## Quality Checklist

- [ ] ARIA attributes table is accurate to the source code
- [ ] Keyboard interaction covers all relevant keys
- [ ] Focus management includes live visual examples
- [ ] Color contrast covers all variants and states
- [ ] For Designers and For Developers sections are both present
- [ ] Code examples are complete and correct
- [ ] Testing checklist covers all key accessibility requirements
