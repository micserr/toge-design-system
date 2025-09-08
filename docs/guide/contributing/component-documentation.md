---
outline: 'deep'
title: Documenting a Component
description: This guide provides comprehensive instructions on documenting components for the Sprout Design System. It includes creating new documentation pages, structuring content with examples, API documentation, and best practices. It emphasizes the importance of organization, clear examples, and detailed API documentation.
---

# Documenting a Component

This guide provides comprehensive instructions on documenting components for the Sprout Design System. It includes creating new documentation pages, structuring content with examples, API documentation, and best practices. It emphasizes the importance of organization, clear examples, and detailed API documentation.

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

1. Frontmatter with outline, title, and description
2. Component description and purpose
3. Basic usage with live demos
4. Various examples showing component variants and props
5. API reference with tables for props, events, and slots
6. Product uses section showing where the component is used
7. Component imports in a script setup section

## Basic Page Structure

````markdown
---
outline: 'deep'
title: Your Component
description: A detailed description of what the component does, its purpose, and when it should be used.
---

# Your Component

A comprehensive description of the component, its purpose, and use cases.

## Basic Usage

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-your-component>Example</spr-your-component>
</div>

```vue
<spr-your-component>Example</spr-your-component>
```
````

## Variants/Props Examples

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-your-component variant="primary">Primary</spr-your-component>
  <spr-your-component variant="secondary">Secondary</spr-your-component>
</div>

```vue
<spr-your-component variant="primary">Primary</spr-your-component>
<spr-your-component variant="secondary">Secondary</spr-your-component>
```

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>variant</td>
      <td>Controls the component's visual style</td>
      <td>'primary' | 'secondary'</td>
      <td>'primary'</td>
    </tr>
  </tbody>
</table>
```

For a complete example, refer to the [Button documentation](/documentation/components/button).

## Creating a New Page

1. Create a new `.md` file in the appropriate directory:

```plaintext
docs/
├── documentation/
│   ├── components/
│   │   └── your-component.md
```

2. Add frontmatter with title, description, and outline setting:

```markdown
---
outline: 'deep'
title: Your Component
description: A detailed description of what the component does and when to use it.
---
```

3. Add the page to VitePress configuration:

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
---
outline: 'deep'
title: Your Component
description: A detailed description of the component, its purpose, and when to use it.
---

# Your Component

A comprehensive description of what the component does, its purpose, and when to use it. This should provide context for developers and designers to understand when and how to use the component.
```

### 2. Basic Usage

````markdown
## Basic Usage

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-your-component>Basic example</spr-your-component>
</div>

```vue
<spr-your-component>Basic example</spr-your-component>
```
````

### 3. Variants and Props

Display different variants, props, and configurations with both visual examples and code snippets:

````markdown
## Sizes

<div class="spr-flex spr-items-center spr-gap-2">
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

### 4. API Reference

Document the component's API in a structured format using tables:

```markdown
## API Reference

### Props

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>size</td>
      <td>Controls the component size, affecting padding, font size, and overall dimensions.</td>
      <td>'small' | 'medium' | 'large'</td>
      <td>'medium'</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>When <code>true</code>, prevents user interaction and applies a visual disabled state.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>click</td>
      <td>Emitted when the component is clicked and not disabled.</td>
      <td>(event: MouseEvent)</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>Content to be displayed inside the component.</td>
    </tr>
  </tbody>
</table>
```

### 5. Product Uses

The "Product Uses" section highlights where and how the component is used across different Sprout products:

```markdown
## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import SprLogo from "@/components/logo/logo.vue";
import SprYourComponent from "@/components/your-component/your-component.vue";
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
   - Follow the standard documentation structure

2. **Examples**
   - Start with basic usage examples first
   - Demonstrate each prop and variant with visual examples
   - Include practical use cases that show the component in context
   - Use the `spr-flex` class with `spr-items-center` and `spr-gap-2` for displaying multiple examples
   - Always include corresponding code snippets for each example

3. **Code Snippets**
   - Include code for each visual example
   - Use proper syntax highlighting with ```vue code blocks
   - Show both simple and complex implementations
   - Ensure code examples are complete and working

4. **API Documentation**
   - Document all props, events, and slots in tables
   - Include detailed type information
   - Specify default values
   - Add thorough descriptions for each item, explaining purpose and usage
   - Use `<code>` tags to highlight prop values in descriptions

5. **Component Import**
   - Always import the component at the bottom of the file in a `<script lang="ts" setup>` section
   - Use the correct import path from "@/components/..."
   - Import all required components, including SprLogo for the "Product Uses" section
   - When showing icons, remember to import the Icon component from '@iconify/vue'

6. **Visual Consistency**
   - Use standard CSS classes with the `spr-` prefix
   - Apply consistent spacing between examples
   - Ensure all examples are visually aligned
   - Use `spr-rounded` class for the "Product Uses" section

7. **Accessibility**
   - Include accessibility information where relevant
   - Document ARIA attributes and keyboard navigation
   - Mention screen reader support if applicable
