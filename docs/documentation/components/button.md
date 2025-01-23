# Button

Commonly used button.

## Basic Usage

<div class="flex items-center gap-2">
  <spr-button>Buttons</spr-button>
</div>

```jsx
<spr-button>Button</spr-button>
```

## Tone

<div class="flex items-center gap-2">
  <spr-button>Neutral</spr-button>
  <spr-button tone="success">Success</spr-button>
  <spr-button tone="danger">Danger</spr-button>
</div>

```jsx
<spr-button>Neutral/Default</spr-button>
<spr-button tone="success">Success</spr-button>
<spr-button tone="danger">Danger</spr-button>
```

## Sizes

<div class="flex items-center gap-2">
  <spr-button size="small">Small</spr-button>
  <spr-button>Medium</spr-button>
  <spr-button size="large">Large</spr-button>
</div>

```jsx
<spr-button size="small">Small</spr-button>
<spr-button>Medium/Default</spr-button>
<spr-button size="large">Large</spr-button>
```

## Variant

<div class="flex items-center gap-2 mb-2">
  <spr-button>Primary</spr-button>
  <spr-button variant="secondary">Secondary</spr-button>
  <spr-button variant="tertiary">Tertiary</spr-button>
</div>
<div class="flex items-center gap-2 mb-2">
  <spr-button tone="success">Primary</spr-button>
  <spr-button tone="success" variant="secondary">Secondary</spr-button>
  <spr-button tone="success" variant="tertiary">Tertiary</spr-button>
</div>
<div class="flex items-center gap-2">
  <spr-button tone="danger">Primary</spr-button>
  <spr-button tone="danger" variant="secondary">Secondary</spr-button>
  <spr-button tone="danger" variant="tertiary">Tertiary</spr-button>
</div>

```jsx
// Primary/Default
<spr-button>Primary/Default</spr-button>
<spr-button variant="secondary">Secondary</spr-button>
<spr-button variant="tertiary">Tertiary</spr-button>

// Succees
<spr-button tone="success">Primary/Default</spr-button>
<spr-button tone="success" variant="secondary">Secondary</spr-button>
<spr-button tone="success" variant="tertiary">Tertiary</spr-button>

// Danger
<spr-button tone="danger">Primary/Default</spr-button>
<spr-button tone="danger" variant="secondary">Secondary</spr-button>
<spr-button tone="danger" variant="tertiary">Tertiary</spr-button>
```

## Disabled

<div class="flex items-center gap-2">
  <spr-button disabled size="small">Small</spr-button>
  <spr-button disabled>Default</spr-button>
  <spr-button disabled size="large">Large</spr-button>
</div>

```jsx
<spr-button disabled ize="small">Small</spr-button>
<spr-button disabled>Medium/Default</spr-button>
<spr-button disabled size="large">Large</spr-button>
```

## Button API

### Button Attributes

| Name     | Description        | Type                                     | Default  |
| -------- | ------------------ | ---------------------------------------- | -------- |
| tone     | button tone        | `'neutral' \| 'success' \|  'danger'`    | neutral  |
| size     | button size        | `'small' \| 'medium' \| 'large'`         | medium   |
| variant  | button varaint     | `'primary' \| 'secondary' \| 'tertiary'` | tertiary |
| disabled | disable the button | `boolean`                                | false    |
| tag      | custom element tag | `string` / `Component`                   | button   |

<script setup lang="ts">
  import SprButton from "@/components/button/button.vue"
</script>
