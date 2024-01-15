<template>
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
  props:{
    products:Array
  }
}
</script>

<style>

.card-block{
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
}

</style>