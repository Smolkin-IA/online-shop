<template>
  <div class="title">
    <h1>Главная страница</h1>
    <select v-model="currentCategory" @change="getProducts">
      <option value="">Все товары</option>
      <option value="/category/electronics">Электроника</option>
      <option value="/category/jewelery">Ювелирные изделия</option>
      <option value="/category/men's clothing">Мужская одежда</option>
      <option value="/category/women's clothing">Женская одежда</option>
    </select>
  </div>
  <div class="card-block">
    <Card v-for="product in paginatedProducts"
          :key="product.id"
          :productId="product.id"
          :imageUrl="product.image"
          :category="product.category"
          :productName="product.title"
          :prise="product.price"
          :rating="product.rating.rate"
    />
  </div>
  <div class="page-block">
    <button @click="prevPage" :disabled="currentPage === 1">Предыдущая</button>
    <span>Страница {{ currentPage }}</span>
    <button @click="nextPage" :disabled="currentPage * pageSize >= products.length">Следующая</button>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'CardBlock',
  components: {
    Card
  },
  data(){
    return{
      currentCategory:"",
      products:[],
      currentPage: 1,
      pageSize: 10
    }
  },
  computed: {
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.products.slice(start, end);
    }
  },
  methods:{
    getProducts(){
      fetch('https://fakestoreapi.com/products'+this.currentCategory+'?limit=20')
        .then(res=>res.json())
        .then(json=>this.products = json)
    },
    nextPage() {
      if ((this.currentPage * this.pageSize) < this.products.length) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    }
  },
  mounted(){
    this.getProducts()
  }
}
</script>

<style>

.card-block{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
}

.title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.page-block{
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

</style>