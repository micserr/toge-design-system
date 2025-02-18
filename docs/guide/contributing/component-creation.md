# Creating Components

Create a new component based on our design system's architecture. Each component is structured around three core files:

## Component Structure

```
src/components/your-component/
├── your-component.ts # Types and props definitions
├── your-component.vue # Component template and setup
└── use-your-component.ts # Component logic and composables
```

## Define Component Types (your-component.ts)

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

## Create Component Template (your-component.vue)

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

## Implement Component Logic (use-your-component.ts)

Create the composable that contains your component's logic.
Use plain TypeScript to handle business logic with pure functions, while applying a layer of Vue reactivity on top.

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

## Best Practices

### Prop Validation

1. Always describe prop types and validators to ensure proper use and avoid runtime issues.
2. To properly handle undefined props, use default values when applicable.

### Type Safety

1. TypeScript provides type checking, improved IDE support, and safer development.
2. Create interfaces for props, emitters, and slots to maintain consistency.

### Composables

1. Extract reusable logic into composables (useXYZ) to improve modularity and maintainability.
2. Keep the composables concentrated on a particular task.

### Naming Conventions

1. Component Files: File names should be kebab-case.vue.
2. For props and emits, use camelCase.
3. Types and Interfaces: To define types and interfaces, use Pascal Case.

### Scoped and Reusable Styles

1. Avoid using inline styles unless absolutely necessary for dynamic behavior.
2. Use Tailwind CSS to maintain design consistency between components.

### Accessibility (A11y)

1. Ensure that components are accessible by default, following ARIA principles.
2. Test screen readers and keyboard navigation.
3. Use semantic HTML elements and include fallback behaviors for bespoke components.

### Slot Management

1. Use named slots to improve readability and extensibility.
2. Set default content for slots to handle edge circumstances where no content is given.

### Responsive Design

1. Build responsive components with Tailwind CSS or media queries.
2. Test components on various screen sizes and devices.

For more detailed examples, check out the button component implementation in the source code.
