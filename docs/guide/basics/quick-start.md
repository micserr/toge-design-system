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

### Optional: Custom Component Prefixes

By default, all components are prefixed with `spr-`. For example, a button component would be used as `<spr-button />`.
If you'd like to use a custom prefix, you can specify it when registering the plugin by passing an options object:

```javascript
// Default prefix: 'spr-'
app.use(SproutDesignSystem); // [!code --]

// Custom prefix: 'spa-'
app.use(SproutDesignSystem, { prefix: 'spa-' }); // [!code ++]
```

With a custom prefix of `spa-`, the button component would be used as `<spa-button />`.
