
import { createRouter, createWebHistory } from 'vue-router';
import ProductDetails from './components/ProductDetails.vue';
import CardBlock from './components/CardBlock.vue'

const routes = [
  { path: '/', name:'CardBlock', component: CardBlock},
  { path: '/product/:id', name:'ProductDetails', component: ProductDetails }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;