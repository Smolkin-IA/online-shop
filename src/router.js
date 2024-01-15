
import { createRouter, createWebHistory } from 'vue-router';
import ProductDetails from './components/ProductDetails.vue'; 

const routes = [
  { path: '/product/:id', component: ProductDetails }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;