import { createApp, type Component } from 'vue';
import App from './App.vue';
import { router } from './router';
import './assets/main.css';

const app = createApp(App as Component);
app.use(router);
app.mount('#app');
