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
    <Card v-for="product in products"
          :key="product.id"
          :productId="product.id"
          :imageUrl="product.image"
          :category="product.category"
          :productName="product.title"
          :prise="product.price"
          :rating="product.rating.rate"
    />
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
      products:[]
    }
  },
  methods:{
    getProducts(){
      fetch('https://fakestoreapi.com/products'+this.currentCategory+'?limit=20')
        .then(res=>res.json())
        .then(json=>this.products = json)
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

</style>