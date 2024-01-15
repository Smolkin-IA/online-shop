<template>
    <div class="card" >
        <div class="card__img">
            <img :src="imageUrl" alt="card-img">
        </div>
        <div class="card__text">
            <div class="card__text__title">
                <p>{{ category }}</p>
                <p>{{ productName }}</p>
            </div>
            <div class="card__text__info">
                <p>Цена: {{ prise }} $</p>
                <p>Рейтинг: {{ rating }} / 5.0</p>
                <button @click="goToProductDetails">
                    Подробнее
                </button>
            </div>
        </div>
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
    border: 1px solid #968b8b;
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
.card__text{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
}
.card__text__title{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.card__text__info{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.card__text__info p{
    font-size: 18px;
}

</style>