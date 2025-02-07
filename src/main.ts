import { createApp } from 'vue';
import App from '@/App.vue';
import '@/assets/styles/tailwind.css';
import FloatingVue from 'floating-vue';
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(FloatingVue);
app.mount('#app');
