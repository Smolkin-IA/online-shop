<template>
    <div>
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {} // Данные о товаре
      };
    },
    async created() {
      let productId = this.$route.params.id; // Получение ID из URL
      let response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      this.product = await response.json();
    }
  };
  </script>