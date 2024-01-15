import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Импорт настроек маршрутизатора

const app = createApp(App);
app.use(router);
app.mount('#app');
