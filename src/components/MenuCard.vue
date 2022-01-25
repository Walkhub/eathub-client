<template>
    <div class="card-wrapper">
        <img alt="menu" :src="img" class="menu-image"/>
        <div class="menu-text">{{store}}</div>
        <div class="menu-text">{{menu}}</div>
        <div class="menu-price">{{price}}<span>원</span></div>
        <div class="menu-text"><Star :width="'80px'" :height="'17px'" :isMove="false" :value="star*2"/></div>
    </div>
</template>

<script>
import Star from './Star.vue'
export default {
    components: { Star },
    props: [
        'store',
        'menu',
        'price',
        'star',
        'img'
    ]
}
</script>

<style>
.card-wrapper {
    width: 180px;
    height: 280px;
    padding: 10px;
    box-sizing: border-box;
}
.menu-image {
    width: 160px;
    height: 160px;
    object-fit: contain;
    margin-bottom: 7px;
}
.menu-text{
    font-size: 14px;
    position: relative;
}
.menu-price{
    font-size: 20px;
}
span {
    font-size: 12px;
}
</style>