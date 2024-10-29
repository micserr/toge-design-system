# Quick Start

Import the library in your Vue 3 project:

```javascript
import SproutDesignSystem from '@jefmari/design-system-next';

import App from './App.vue';

const app = createApp(App);

app.use(SproutDesignSystem);
app.mount('#app');
```

Optional: Adding Components Prefixes

```javascript
app.use(SproutDesignSystem, { prefix: 'tsl_' });
```
