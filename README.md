# Design System Next

**Design System Next** is a Vue 3-based component library aimed at helping both designers and developers create beautiful, consistent, and flexible UIs with ease.

## Why Design System Next?

This library provides a collection of highly customizable, reusable components that follow best practices and modern UI patterns. Whether you're a designer looking to build consistent user experiences or a developer wanting to accelerate your development workflow, **Design System Next** has got you covered.

### Built With

- 🔥 **Vue 3 in Composition API** - The progressive JavaScript framework
- 💻 **TypeScript** - Strict typing for better tooling and refactoring
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🚀 **Vite** - Next-generation frontend tooling for fast builds and hot reloading
- 🛠 **ESLint** - Linter to ensure consistent code quality
- 💅 **Prettier** - Code formatter to keep everything clean and readable
- 🧽 **Styling** - Maintain style consistency across the project

## Installation

To get started with **Design System Next**, install the package via npm:

```bash
npm install design-system-next
```

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

## Contributing

🛠 TODO
