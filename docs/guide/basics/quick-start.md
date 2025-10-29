---
title: Quick Start
descripttion: A quick start guide to get you up and running with the Design System Next in your Vue application.
outline: deep
---

# Quick Start

### Import the Library

First, import the library and its style, then use it as a plugin in your Vue app:

```javascript
import SproutDesignSystem from 'design-system-next'; // [!code ++]

import 'design-system-next/style.css'; // import the library's style // [!code ++]
import App from './App.vue';

const app = createApp(App);

app.use(SproutDesignSystem); // Register the design system plugin // [!code ++]
app.mount('#app');
```

### Default Component Prefix

By default, all components are prefixed with `spr-`. For example, a button component would be used as `<spr-button />`.

### Usage Options

There are two ways to use components from the Design System:

#### 1. Global Registration (Recommended for most apps)

After using `app.use(SproutDesignSystem)`, all components are automatically available globally with the `spr-` prefix:

```vue
<template>
  <spr-button>Click me</spr-button>
  <spr-input v-model="value" />
</template>
```

#### 2. Tree-Shakable Imports (For optimized bundles)

Import only the components you need to reduce bundle size:

```javascript
import { Button, Input } from 'design-system-next';
```

```vue
<template>
  <Button>Click me</Button>
  <Input v-model="value" />
</template>

<script setup>
import { Button, Input } from 'design-system-next';
import { ref } from 'vue';

const value = ref('');
</script>
```

**TypeScript Support:** You can also import TypeScript types for components:

```typescript
import { Button, ButtonPropTypes, ButtonEmitTypes } from 'design-system-next';
import type { InputPropTypes, AvatarPropTypes } from 'design-system-next';
```

::: tip
Use tree-shakable imports when bundle size is critical, or global registration for convenience.
:::
