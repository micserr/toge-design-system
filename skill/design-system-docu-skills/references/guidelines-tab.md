# Guidelines Tab Standards

## Purpose

The Guidelines tab is for designers and developers who need to understand **when and how** to use the component correctly. It's opinionated — it tells users what to do and what not to do.

## Required Sections (in order)

### 1. When to Use

Bullet list of scenarios where this component is the right choice. Be specific:

```markdown
## When to Use

- **Primary actions** — submitting forms, confirming dialogs, saving data
- **Secondary actions** — canceling, going back, dismissing
```

### 2. Selection Guides

Tables mapping prop values to use cases. Include live visual examples below each table:

```markdown
## Variant Selection Guide

| Variant | Emphasis | When to Use |
|---|---|---|
| **Primary** | Highest | The main action on the page. |

<div class="spr-flex spr-items-center spr-gap-2 spr-mt-4">
  <spr-button>Primary</spr-button>
  <spr-button variant="secondary">Secondary</spr-button>
</div>
```

### 3. Common Patterns (Component Groups)

Show how the component works in combination with others. Use descriptive subheadings:

```markdown
## Button Groups

### Confirm / Cancel Pattern
Place the primary action on the right...

### Destructive Confirmation
Pair a danger button with a secondary cancel...
```

### 4. Labeling / Content Guidelines

Rules for content placed inside the component (labels, text, etc.):

```markdown
## Button Labeling

- **Use action verbs** — "Save Changes", not "OK"
- **Keep it concise** — 1-3 words
```

### 5. Do's and Don'ts

Split into `### Do` and `### Don't` subsections. Include live visual examples:

- **Do examples** — Show correct usage with live components
- **Don't examples** — Show incorrect usage with `spr-opacity-50` class to visually dim them

```markdown
### Don't

- Don't place multiple primary buttons side by side

<div class="spr-flex spr-items-center spr-gap-2 spr-mt-2 spr-mb-4 spr-opacity-50">
  <spr-button>Cancel</spr-button>
  <spr-button>Submit</spr-button>
</div>
```

## Quality Checklist

- [ ] Every guideline has a clear rationale (not just "don't do this")
- [ ] Live visual examples accompany selection guides and do's/don'ts
- [ ] Don't examples use `spr-opacity-50` to visually indicate incorrect usage
- [ ] Content is opinionated — tells users what to do, not just what's possible
- [ ] Accessibility content is NOT in this tab (it has its own dedicated tab)
