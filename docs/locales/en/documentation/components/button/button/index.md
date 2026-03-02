---
title: Button
description: The Sprout Button component — interactive playground with live controls.
outline: deep
---

# Button

The Button component is a versatile and commonly used element in user interfaces, designed to trigger actions or events when clicked. It can be customized in various ways, including size, tone, and variant, to suit different design needs.

<ComponentTabBar component-name="button" :tabs="[
  { label: 'Live Example', slug: '' },
  { label: 'Code Docu', slug: 'code' },
  { label: 'Guidelines', slug: 'guidelines' },
  { label: 'UI Specs', slug: 'ui-specs' },
  { label: 'Accessibility', slug: 'accessibility' },
]" />

## Interactive Playground

Use the controls below to customize the Button component and see the changes in real-time. The generated code snippet updates automatically.

<script setup>
import SprButton from '@/components/button/button.vue';
import SprLogo from '@/components/logo/logo.vue';
</script>

<PropsPlayground
  :component="SprButton"
  component-tag="spr-button"
  :prop-defs="[
    { name: 'tone', type: 'select', options: ['neutral', 'success', 'danger'], default: 'neutral' },
    { name: 'size', type: 'select', options: ['small', 'medium', 'large'], default: 'medium' },
    { name: 'variant', type: 'select', options: ['primary', 'secondary', 'tertiary'], default: 'primary' },
    { name: 'disabled', type: 'boolean', default: false },
    { name: 'hasIcon', type: 'boolean', default: false },
    { name: 'fullwidth', type: 'boolean', default: false },
  ]"
  default-slot="Button"
/>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>
