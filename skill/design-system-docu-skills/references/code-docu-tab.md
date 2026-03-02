# Code Docu Tab Standards

## Purpose

The Code Docu tab is the developer reference — import instructions, live demos for every prop variation, code snippets, and the full API reference.

## Required Sections (in order)

### 1. Import

Show how to import the component:

```markdown
## Import

\```vue
<script lang="ts" setup>
import SprComponentName from "@/components/{name}/{name}.vue";
</script>
\```
```

### 2. Basic Usage

Simplest possible usage with default props:

```markdown
## Basic Usage

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-component>Content</spr-component>
</div>

\```vue
<spr-component>Content</spr-component>
\```
```

### 3. Prop Demos

One section per major prop (tone, size, variant, disabled, etc.). Each section must have:
- **Brief description** — One sentence explaining the prop's purpose
- **Live demo** — Rendered component with all values of that prop
- **Code snippet** — Complete, copyable Vue code matching the demo

Use HTML comments in code snippets (not `//` JavaScript comments):

```vue
<!-- Neutral (default) -->
<spr-button>Primary</spr-button>

<!-- Success -->
<spr-button tone="success">Primary</spr-button>
```

### 4. API Reference

Always include these subsections in HTML `<table>` format:

#### Props Table
Columns: Name, Description, Type, Default. Wrap values in `<code>` tags.

#### Events Table
Columns: Name, Description, Parameters.

#### Slots Table
Columns: Name, Description.

## Quality Checklist

- [ ] Every code snippet matches its live demo exactly
- [ ] No typos in prop values (double-check against source `.ts` file)
- [ ] Code snippets use HTML comments, not JS comments
- [ ] Fullwidth/complex demos show all variants, not just one
- [ ] Icon examples include `<script setup>` import for `Icon`
- [ ] Icon-only examples mention `aria-label` for accessibility
- [ ] All prop names, types, and defaults match the source code
- [ ] Accessibility content is in the dedicated Accessibility tab, NOT in Code Docu
