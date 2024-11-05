<script setup>
  import Button from "@/components/button/button.vue"
</script>

# Button

Commonly used button.

## Basic Usage

<div  class="tw-flex tw-items-center tw-gap-2">
  <Button>Button</Button>
</div>

```jsx
<Button>Button</Button>
```

## Tone

<div  class="tw-flex tw-items-center tw-gap-2">
  <Button>Neutral</Button>
  <Button tone="success">Success</Button>
  <Button tone="danger">Danger</Button>
</div>

```jsx
<Button>Neutral/Default</Button>
<Button tone="success">Success</Button>
<Button tone="danger">Danger</Button>
```

## Sizes

<div class="tw-flex tw-items-center tw-gap-2">
  <Button size="small">Small</Button>
  <Button>Medium</Button>
  <Button size="large">Large</Button>
</div>

```jsx
<Button size="small">Small</Button>
<Button>Medium/Default</Button>
<Button size="large">Large</Button>
```

## Variant

<div class="tw-flex tw-items-center tw-gap-2 tw-mb-2">
  <Button>Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="tertiary">Tertiary</Button>
</div>
<div class="tw-flex tw-items-center tw-gap-2 tw-mb-2">
  <Button tone="success">Primary</Button>
  <Button tone="success" variant="secondary">Secondary</Button>
  <Button tone="success" variant="tertiary">Tertiary</Button>
</div>
<div class="tw-flex tw-items-center tw-gap-2">
  <Button tone="danger">Primary</Button>
  <Button tone="danger" variant="secondary">Secondary</Button>
  <Button tone="danger" variant="tertiary">Tertiary</Button>
</div>

```jsx
// Primary/Default
<Button>Primary/Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
// Succees
<Button tone="success">Primary/Default</Button>
<Button tone="success" variant="secondary">Secondary</Button>
<Button tone="success" variant="tertiary">Tertiary</Button>
// Danger
<Button tone="danger">Primary/Default</Button>
<Button tone="danger" variant="secondary">Secondary</Button>
<Button tone="danger" variant="tertiary">Tertiary</Button>
```

## Disabled

<div class="tw-flex tw-items-center tw-gap-2">
  <Button disabled size="small">Small</Button>
  <Button disabled>Default</Button>
  <Button disabled size="large">Large</Button>
</div>

```jsx
<Button disabled ize="small">Small</Button>
<Button disabled>Medium/Default</Button>
<Button disabled size="large">Large</Button>
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
