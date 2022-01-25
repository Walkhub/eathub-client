<template>
    <div class="review-wrapper">
        <Star 
            :width="'80px'" 
            :height="'17px'" 
            :value="star" 
            :isMove="false"/>
        <div>{{ name }}</div>
        <div>{{ date }}</div>
        <div class="review-content">{{ content }}</div>
    </div>
</template>

<script>
import Star from './Star.vue'
export default {
    props: [
        'star',
        'name',
        'date',
        'content'
    ],
    components: {
        Star
    },
    created() {
        console.log(this.star)
    }

}
</script>

<style>
.review-wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 96px 86px 110px;
    grid-template-rows: auto;
    margin-bottom: 15px;
    font-size: 14px
}
.review-content {
    margin-top: 5px;
    grid-column-start: 1;
    grid-column-end: 4;
    font-size: 12px;
}
</style>