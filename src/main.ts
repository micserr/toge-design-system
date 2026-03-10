import { createApp } from 'vue';
import App from '@/App.vue';

import '@/tokens/styles/tailwind.css';
import '../packages/toge/dist/toge.css';

import FloatingVue from 'floating-vue';

const app = createApp(App);

app.use(FloatingVue);
app.mount('#app');
