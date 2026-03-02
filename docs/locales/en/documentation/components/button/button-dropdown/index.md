---
title: Button Dropdown
description: The Button Dropdown component — interactive playground with live controls.
outline: deep
---

# Button Dropdown

The Button Dropdown component combines two buttons with a dropdown menu, allowing users to trigger a primary action or select from a list of related options. This component is ideal for scenarios where a single button action is accompanied by additional, secondary actions accessible via a dropdown. It supports customization for tone, size, variant, and can be disabled as needed.

<ComponentTabBar component-name="button-dropdown" parent="button" :tabs="[
  { label: 'Live Example', slug: '' },
  { label: 'Code Docu', slug: 'code' },
  { label: 'Guidelines', slug: 'guidelines' },
  { label: 'UI Specs', slug: 'ui-specs' },
  { label: 'Accessibility', slug: 'accessibility' },
]" />

## Interactive Playground

Use the controls below to customize the Button Dropdown component and see the changes in real-time. The generated code snippet updates automatically.

<script setup>
import SprButtonDropdown from '@/components/button/button-dropdown/button-dropdown.vue';
import SprLogo from '@/components/logo/logo.vue';
import { ref, computed } from 'vue';

const menuList = ref([
  { text: 'Add', value: 'add', icon: 'ph:check', iconColor: 'spr-text-color-supporting', onClickFn: () => { alert('Add was clicked.') } },
  { text: 'Delete', value: 'delete', icon: 'ph:trash', textColor: 'spr-text-color-danger-base', onClickFn: () => { alert('Delete was clicked.') } },
]);
const selected = ref([]);

const dropdownExtraProps = computed(() => ({
  'dropdownId': 'playground-1',
  'modelValue': selected.value,
  'onUpdate:modelValue': (v) => { selected.value = v; },
  'menuList': menuList.value,
  'width': '200px',
  'popperWidth': '200px',
}));

const codeSetupStr = `import { ref } from 'vue';

const selected = ref([]);
const menuList = ref([
  { text: 'Add', value: 'add', icon: 'ph:check' },
  { text: 'Delete', value: 'delete', icon: 'ph:trash', textColor: 'spr-text-color-danger-base' },
]);`;
</script>

<PropsPlayground
  :component="SprButtonDropdown"
  component-tag="spr-button-dropdown"
  :extra-props="dropdownExtraProps"
  :extra-code-attrs="'dropdown-id=&quot;my-dropdown&quot;\nv-model=&quot;selected&quot;\n:menu-list=&quot;menuList&quot;'"
  :code-setup="codeSetupStr"
  :prop-defs="[
    { name: 'tone', type: 'select', options: ['neutral', 'success'], default: 'neutral' },
    { name: 'size', type: 'select', options: ['small', 'medium', 'large'], default: 'medium' },
    { name: 'variant', type: 'select', options: ['primary', 'secondary'], default: 'primary' },
    { name: 'disabled', type: 'boolean', default: false },
  ]"
  default-slot="Button Dropdown"
/>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="payroll" theme="dark" width="50px" />
</div>
