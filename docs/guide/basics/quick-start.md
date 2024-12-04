# Quick Start

To get started with Design System Next in your Vue 3 project, import the library and use it as a plugin:

```javascript
import SproutDesignSystem from 'design-system-next';

import App from './App.vue';

const app = createApp(App);

app.use(SproutDesignSystem);
app.mount('#app');
```

### Optional: Custom Component Prefixes

By default, components are prefixed with `spr-`. When you use the plugin, all components will automatically include this prefix. However, if you prefer to use your own custom prefix, you can specify it by passing an options object with the prefix property. See the example below:

```javascript
app.use(SproutDesignSystem); // [!code --]

// 'spr-' is the default prefix if not specified
app.use(SproutDesignSystem, { prefix: 'spa-' }); // [!code ++]
```
