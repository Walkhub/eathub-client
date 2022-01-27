<template>
    <div class="card-wrappper">
        <img :src="data.imageUrl" alt="menu" class="choice-menu-card"/>
        <div class="choice-menu-title">
            {{ data.foodName }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style>
.card-wrappper{
    width: 110px;
    height: 110px;
}
.choice-menu-card {
    width: 84px;
    height: 84px;
    background-color: #AC0C0C;
    object-fit: contain;
    margin-top: 10px;
}
.choice-menu-title {
    width: 86px;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 auto;
}
</style>