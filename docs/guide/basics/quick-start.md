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
