# Creating Components

This guide explains how to create a new component following our design system's architecture using the button component as an example. Each component consists of three main files:

## Component Structure

```
src/components/your-component/
├── your-component.ts # Types and props definitions
├── your-component.vue # Component template and setup
└── use-your-component.ts # Component logic and composables
```

## 1. Define Component Types (your-component.ts)

First, create the types file to define your component's props, emits, and types:

```ts
import type { PropType, ExtractPropTypes } from 'vue';
// Define constants for prop validation
const EXAMPLE_SIZES = ['small', 'medium', 'large'] as const;
// Define your props
export const componentPropTypes = {
  size: {
    type: String as PropType<(typeof EXAMPLE_SIZES)[number]>,
    validator: (value: (typeof EXAMPLE_SIZES)[number]) => EXAMPLE_SIZES.includes(value),
    default: 'medium',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};
// Define your emits with type validation
export const componentEmitTypes = {
  click: (evt: MouseEvent): evt is MouseEvent => evt instanceof MouseEvent,
};
// Export types for use in other files
export type ComponentPropTypes = ExtractPropTypes<typeof componentPropTypes>;
export type ComponentEmitTypes = typeof componentEmitTypes;
```

## 2. Create Component Template (your-component.vue)

Create the Vue component file that defines the template and connects the props and composable:

```vue
<template>
  <div ref="componentRef" v-bind="componentProps" :class="['base-classes', componentClass]" @click="handleClick">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { componentEmitTypes, componentPropTypes } from './your-component';
import { useComponent } from './use-your-component';
const props = defineProps(componentPropTypes);
const emit = defineEmits(componentEmitTypes);
const { componentRef, componentProps, componentClass, handleClick } = useComponent(props, emit);
</script>
```

## 3. Implement Component Logic (use-your-component.ts)

Create the composable that contains your component's logic:

```ts
import { computed, ref, type ComputedRef } from 'vue';
import type { SetupContext } from 'vue';
import type { ComponentEmitTypes, ComponentPropTypes } from './your-component';
export const useComponent = (props: ComponentPropTypes, emit: SetupContext<ComponentEmitTypes>['emit']) => {
  const componentRef = ref<HTMLElement | null>(null);
  // Compute component properties
  const componentProps = computed(() => ({
    disabled: props.disabled,
  }));
  // Compute CSS classes
  const componentClass = computed(() => {
    return {
      'size-small': props.size === 'small',
      'size-medium': props.size === 'medium',
      'size-large': props.size === 'large',
    };
  });
  // Handle events
  const handleClick = (evt: MouseEvent) => {
    if (props.disabled) {
      evt.stopPropagation();
      return;
    }
    emit('click', evt);
  };
  return {
    componentRef,
    componentProps,
    componentClass,
    handleClick,
  };
};
```

## Best Practices

1. **Props Validation**: Always define prop validators to ensure correct usage
2. **Type Safety**: Use TypeScript for better type checking and IDE support
3. **Composables**: Keep component logic in composables for better reusability
4. **Naming Conventions**: Follow the established naming pattern:
   - Component files: `kebab-case.vue`
   - Props and emits: `camelCase`
   - Types: `PascalCase`

## Component Registration

Components are automatically registered globally with the configured prefix. For example, if your component is named `your-component.vue`, it will be registered as:

```jsx
<spr-your-component size="medium" />
```

The prefix can be configured when installing the design system:

```ts
app.use(DesignSystem, { prefix: 'custom-' });
```

## Example Usage

Here's how to use your newly created component:

```vue
<template>
  <spr-your-component size="medium" :disabled="false" @click="handleClick"> Component Content </spr-your-component>
</template>
<script setup lang="ts">
const handleClick = (evt: MouseEvent) => {
  console.log('Component clicked!', evt);
};
</script>
```

For more detailed examples, check out the button component implementation in the source code.
