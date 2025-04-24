---
outline: 'deep'
title: Documenting a Component
description: The file provides a comprehensive guide on documenting components for sprout design system. It includes creating new documentation pages, and structuring content with examples, API documentation, and best practices. It also emphasizes the importance of organization, clear examples, and detailed API documentation.
---

# Documenting a Component

The file provides a comprehensive guide on documenting components for sprout design system. It includes creating new documentation pages, and structuring content with examples, API documentation, and best practices. It also emphasizes the importance of organization, clear examples, and detailed API documentation.

## VitePress Setup

Our documentation uses [VitePress](https://vitepress.dev/). Ensure you meet the prerequisites:

- Node.js version 18 or higher
- A text editor with Markdown support (VSCode recommended)
- Basic understanding of Markdown and Vue

## File Structure

```plaintext
docs/
├─ .vitepress/
│  └─ config.ts         # VitePress configuration
├─ guide/
│  ├─ basics/           # Basic guides
│  └─ contributing/     # Contribution guides
└─ documentation/
   └─ components/       # Component documentation
```

## Page Structure

A typical documentation page consists of:

1. Page content in Markdown
2. Component examples with live demos
3. Code snippets
4. Component API documentation
5. Import statement for the component
6. Product uses

## Basic Page Structure

```markdown
# Your Component

Description of your component.

## Basic Usage

[Basic example with code]

## Variants

[Examples of different variants]

## Props and Options

[Examples demonstrating props]

## Product Uses

[Define product where the component is used]

## Component API

[API documentation]

<script setup lang="ts">
import SprYourComponent from "@/components/your-component/your-component.vue"
</script>
```

For a complete example, refer to the [Button documentation](/documentation/components/button).
## Creating a New Page

1. Create a new `.md` file in the appropriate directory:

```plaintext
docs/
├── documentation/
| ├── components/
| └── your-component.md
```

2. Add the page to VitePress configuration:

```typescript
// docs/.vitepress/config.ts
sidebar: {
  '/documentation/': [
    {
      text: 'Components',
      items: [
        // ... existing items
        {
          text: 'Your Component',
          link: '/documentation/components/your-component',
        },
      ],
    },
  ],
}
```

## Page Sections

Use VitePress [Markdown Syntax](https://vitepress.dev/guide/markdown) for elegant and efficient formatting.

### 1. Title and Description

```markdown
# Your Component

Brief description of what the component does and when to use it.
```

### 2. Basic Usage

````markdown
## Basic Usage

```vue
<div class="flex items-center gap-2">
  <spr-your-component>Example</spr-your-component>
</div>

<spr-your-component>Example</spr-your-component>
```
````


### 3. Variants and Props

````markdown
## Sizes

<div class="flex items-center gap-2">
  <spr-your-component size="small">Small</spr-your-component>
  <spr-your-component>Medium</spr-your-component>
  <spr-your-component size="large">Large</spr-your-component>
</div>

```vue
<spr-your-component size="small">Small</spr-your-component>
<spr-your-component>Medium</spr-your-component>
<spr-your-component size="large">Large</spr-your-component>
```
````

### 4. Component API

```markdown
## Component API

### Attributes

| Name      | Description          | Type                     | Default |
|-----------|----------------------|--------------------------|---------|
| size      | Component size       | `'small' | 'medium' | 'large'` | medium  |
````

### 5. Import Component

```markdown
<script setup lang="ts">
import SprYourComponent from "@/components/your-component/your-component.vue"
</script>
```

### 6. Product Uses

::: tip Purpose
The "Product Uses" section highlights where and how the component is used across different products. This provides context for developers and designers to understand its application.
:::

```markdown
## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logos name="hr" theme="dark" title="Sprout HR" width="50px" />
  <spr-logos name="payroll" theme="dark" title="Sprout Payroll" width="50px" />
</div>

<script lang="ts" setup>
import SprLogos from "@/components/logos/logos.vue";
</script>
```



## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run docs:dev
```

3. Make your changes and preview them at `http://localhost:5173`

## Best Practices

1. **Organization**

   - Group similar components in the same section
   - Use consistent heading levels
   - Include all relevant examples

2. **Examples**

   - Show basic usage first
   - Demonstrate each prop and variant
   - Include practical use cases
   - Use the flex layout for displaying multiple examples

3. **Code Snippets**

   - Include code for each example
   - Use proper syntax highlighting
   - Show both simple and complex implementations

4. **API Documentation**

   - Document all props, events, and slots
   - Include type information
   - Specify default values
   - Add descriptions for each item

5. **Component Import**
   - Always import the component at the bottom of the file
   - Use the correct import path

