<template>
    <div class="card-wrapper">
        <img alt="menu" :src="img" class="menu-image"/>
        <div class="menu-text">{{store}}</div>
        <div class="menu-text">{{menu}}</div>
        <div class="menu-price">{{price}}<span>원</span></div>
        <div class="menu-text">☆☆☆☆☆ ({{count}})</div>
    </div>
</template>

<script>
export default {
    props: [
        'store',
        'menu',
        'price',
        'star',
        'count',
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
}
.menu-price{
    font-size: 20px;
}
span {
    font-size: 12px;
}
</style>