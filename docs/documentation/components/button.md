<script setup>
  import Btn from "@/components/button/button.vue"
</script>

# Button

Commonly used button.

## Basic Usage

<div  class="tw-flex tw-items-center tw-gap-2">
  <Btn>Buttons</Btn>
</div>

```jsx
<Btn>Button</Btn>
```

## Tone

<div  class="tw-flex tw-items-center tw-gap-2">
  <Btn>Neutral</Btn>
  <Btn tone="success">Success</Btn>
  <Btn tone="danger">Danger</Btn>
</div>

```jsx
<Btn>Neutral/Default</Btn>
<Btn tone="success">Success</Btn>
<Btn tone="danger">Danger</Btn>
```

## Sizes

<div class="tw-flex tw-items-center tw-gap-2">
  <Btn size="small">Small</Btn>
  <Btn>Medium</Btn>
  <Btn size="large">Large</Btn>
</div>

```jsx
<Btn size="small">Small</Btn>
<Btn>Medium/Default</Btn>
<Btn size="large">Large</Btn>
```

## Variant

<div class="tw-flex tw-items-center tw-gap-2 tw-mb-2">
  <Btn>Primary</Btn>
  <Btn variant="secondary">Secondary</Btn>
  <Btn variant="tertiary">Tertiary</Btn>
</div>
<div class="tw-flex tw-items-center tw-gap-2 tw-mb-2">
  <Btn tone="success">Primary</Btn>
  <Btn tone="success" variant="secondary">Secondary</Btn>
  <Btn tone="success" variant="tertiary">Tertiary</Btn>
</div>
<div class="tw-flex tw-items-center tw-gap-2">
  <Btn tone="danger">Primary</Btn>
  <Btn tone="danger" variant="secondary">Secondary</Btn>
  <Btn tone="danger" variant="tertiary">Tertiary</Btn>
</div>

```jsx
// Primary/Default
<Btn>Primary/Default</Btn>
<Btn variant="secondary">Secondary</Btn>
<Btn variant="tertiary">Tertiary</Btn>
// Succees
<Btn tone="success">Primary/Default</Btn>
<Btn tone="success" variant="secondary">Secondary</Btn>
<Btn tone="success" variant="tertiary">Tertiary</Btn>
// Danger
<Btn tone="danger">Primary/Default</Btn>
<Btn tone="danger" variant="secondary">Secondary</Btn>
<Btn tone="danger" variant="tertiary">Tertiary</Btn>
```

## Disabled

<div class="tw-flex tw-items-center tw-gap-2">
  <Btn disabled size="small">Small</Btn>
  <Btn disabled>Default</Btn>
  <Btn disabled size="large">Large</Btn>
</div>

```jsx
<Btn disabled ize="small">Small</Btn>
<Btn disabled>Medium/Default</Btn>
<Btn disabled size="large">Large</Btn>
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
