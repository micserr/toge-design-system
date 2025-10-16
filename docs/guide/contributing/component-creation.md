---
title: Creating Components
descripttion: Create new components following the established structure, naming conventions, and best practices of our design system.
outline: deep
---

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

// Helper function for prop types (used in some components)
export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

// Define constants for prop validation
const EXAMPLE_SIZES = ['small', 'medium', 'large'] as const;

// Define your props with JSDoc comments for documentation
export const componentPropTypes = {
  /**
   * @description Component size
   */
  size: {
    type: String as PropType<(typeof EXAMPLE_SIZES)[number]>,
    validator: (value: (typeof EXAMPLE_SIZES)[number]) => EXAMPLE_SIZES.includes(value),
    default: 'medium',
  },
  /**
   * @description Whether the component is disabled
   */
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
  <div
    ref="componentRef"
    v-bind="componentProps"
    :class="['spr-component__base', componentClasses]"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useComponent } from './use-your-component';
import { componentEmitTypes, componentPropTypes } from './your-component';

const props = defineProps(componentPropTypes);
const emit = defineEmits(componentEmitTypes);

const { componentRef, componentProps, componentClasses, handleClick } = useComponent(props, emit);
</script>
```

Note that our components typically use `spr-` prefix for class names and follow BEM-like naming conventions for CSS classes.

## Implement Component Logic (use-your-component.ts)

Create the composable that contains your component's logic.
Use plain TypeScript to handle business logic with pure functions, while applying a layer of Vue reactivity on top.

```ts
import { computed, ref, type ComputedRef } from 'vue';
import { toRefs } from 'vue';
import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { ComponentEmitTypes, ComponentPropTypes } from './your-component';

export const useComponent = (props: ComponentPropTypes, emit: SetupContext<ComponentEmitTypes>['emit']) => {
  // Extract reactive props
  const { size, disabled } = toRefs(props);

  const componentRef = ref<HTMLElement | null>(null);

  // Compute component properties
  const componentProps = computed(() => ({
    disabled: disabled.value,
  }));

  // Compute CSS classes using classNames utility
  const componentClasses = computed(() => {
    return classNames({
      'spr-size-small': size.value === 'small',
      'spr-size-medium': size.value === 'medium',
      'spr-size-large': size.value === 'large',
      'spr-disabled': disabled.value,
    });
  });

  // Handle events
  const handleClick = (evt: MouseEvent) => {
    if (disabled.value) {
      evt.stopPropagation();
      return;
    }
    emit('click', evt);
  };

  return {
    componentRef,
    componentProps,
    componentClasses,
    handleClick,
  };
};
```

## Component Registration

Components are automatically registered globally with the configured prefix. For example, if your component is named `your-component.vue`, it will be registered as:

```jsx
<spr-your-component size="medium" />
```

The prefix `spr-` is the default for our design system components.

## Example Usage

Here's how to use your newly created component:

```vue
<template>
  <spr-your-component size="medium" :disabled="false" @click="handleClick"> Component Content </spr-your-component>
</template>

<script lang="ts" setup>
const handleClick = (evt: MouseEvent) => {
  console.log('Component clicked!', evt);
};
</script>
```

## Best Practices

### Prop Validation

1. Always describe prop types and validators to ensure proper use and avoid runtime issues.
2. Use JSDoc comments for props to document their purpose.
3. To properly handle undefined props, use default values when applicable.

### Type Safety

1. TypeScript provides type checking, improved IDE support, and safer development.
2. Create interfaces for props, emitters, and slots to maintain consistency.
3. Use `ExtractPropTypes` to ensure type safety for props.

### Composables

1. Extract reusable logic into composables (useXYZ) to improve modularity and maintainability.
2. Use `toRefs` to maintain reactivity of individual props.
3. Keep the composables concentrated on a particular task.
4. Use the `classNames` utility for complex conditional class logic.

### Naming Conventions

1. Component Files: File names should be kebab-case.vue.
2. For props and emits, use camelCase.
3. Types and Interfaces: To define types and interfaces, use PascalCase.
4. CSS Classes: Use the `spr-` prefix and follow BEM-like naming when possible.

### Styles

1. Use Tailwind CSS utility classes with our `spr-` prefix.
2. Follow the design system color tokens (e.g., `spr-background-color-base`, `spr-text-color-strong`).
3. For interactive states, use proper hover/active classes.
4. Avoid using inline styles unless absolutely necessary for dynamic behavior.

### Accessibility (A11y)

1. Ensure that components are accessible by default, following ARIA principles.
2. Test screen readers and keyboard navigation.
3. Use semantic HTML elements and include fallback behaviors for bespoke components.
4. Add appropriate `aria-` attributes when needed.

### Slot Management

1. Use named slots to improve readability and extensibility.
2. Set default content for slots to handle edge circumstances where no content is given.

### Responsive Design

1. Build responsive components with Tailwind CSS or media queries.
2. Test components on various screen sizes and devices.

For more detailed examples, check out existing components like button, lozenge, or accordion in the source code.
