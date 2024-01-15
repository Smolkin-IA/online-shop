<template>
    <div class="card" @click="goToProductDetails">
        <div class="card__img">
            <img :src="imageUrl" alt="card-img">
        </div>
        <p>{{ category }}</p>
        <p>{{ productName }}</p>
        <p>Цена: {{ prise }} $</p>
        <p>Рейтинг: {{ rating }}</p>
    </div>
</template>
  
<script>

export default {
    name: 'CardItem',
    props: {
        productId:Number,
        imageUrl:String,
        category:String,
        productName:String,
        prise:Number,
        rating:Number
    },
    methods: {
        goToProductDetails() {
            this.$router.push(`/product/${this.productId}`);
        }
    }
}
</script>
  
<style>
p{
    margin: 0;
}

.card{
    width: calc((100% - 190px) / 5);
    border: 1px solid #675d5d;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
}

.card__img{
    object-fit: contain;
    display: flex;
    justify-content: center;
}

.card__img img{
    height: 100px;
}
</style>