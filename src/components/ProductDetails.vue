<template>
  <router-link class="home-link" to="/">Вернуться на главную страницу</router-link>
    <div class="info-block">
      <div class="info-block__img">
        <img :src="product.image" alt="product-img">
      </div>
      <div class="info-block__text">
        <div class="info-block__text__title">
          <h1>{{ product.title }}</h1>
          <p>{{ product.description }}</p>
        </div>
        <div class="info-block__text__info">
          <p v-if="product.rating">Rating: {{ product.rating.rate }} / 5.0</p>
          <p v-else>Rating: N/A</p>
          <p>Price: {{ product.price }}</p>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        product: {}
      };
    },
    async created() {
      let productId = this.$route.params.id;
      let response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      this.product = await response.json();
    }
  };
</script>

<style>

.home-link{
  font-size: 25px;
  text-decoration: none;
}

.info-block{
  display: flex;
  gap: 20px;
  padding: 20px;
  border: 1px solid #968b8b;
  border-radius: 20px;
  margin-top: 40px;
}
.info-block__img{
  width: 40%;
  object-fit: contain;
}
.info-block__img img{
  width: 100%;
}
.info-block__text{
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.info-block__text__title{
  margin-bottom: 150px;
}
.info-block__text__info p{
  font-size: 20px;
}
</style>