# Quick Start

To get started with Design System Next in your Vue 3 project, import the library and use it as a plugin:

```javascript
import SproutDesignSystem from 'design-system-next';

import App from './App.vue';

const app = createApp(App);

app.use(SproutDesignSystem);
app.mount('#app');
```

Optional: Add Component Prefixes

If you'd like to add a custom prefix to the components, you can pass an options object when using the plugin:

```javascript
app.use(SproutDesignSystem); // [!code --]
app.use(SproutDesignSystem, { prefix: 'tsl_' }); // [!code ++]
```
