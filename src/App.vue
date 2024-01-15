<template>
  <div class="title">
    <h1>Товары</h1>
    <select v-model="currentCategory" @change="getProducts">
      <option value="">Все товары</option>
      <option value="/category/electronics">Электроника</option>
      <option value="/category/jewelery">Ювелирные изделия</option>
      <option value="/category/men's clothing">Мужская одежда</option>
      <option value="/category/women's clothing">Женская одежда</option>
    </select>
  </div>
  <CardBlock :products="products"/>
  <router-view></router-view>
</template>

<script>
import CardBlock from './components/CardBlock.vue';

export default {
  name: 'App',
  components: {
    CardBlock
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
.title{
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
