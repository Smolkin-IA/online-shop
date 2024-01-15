import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Paginate from 'vuejs-paginate';

const app = createApp(App);
app.use(router);
app.component('my-paginate', Paginate); 
app.mount('#app');
