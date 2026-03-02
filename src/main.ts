import { createApp } from 'vue';
import App from '@/App.vue';

import '@/assets/styles/tailwind.css';

import FloatingVue from 'floating-vue';

const app = createApp(App);

app.use(FloatingVue);
app.mount('#app');
