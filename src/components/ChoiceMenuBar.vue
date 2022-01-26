<template>
    <div class="menu-bar-wrapper" :style="cssProps" @click.prevent="position==='-15%' ? position='-100%' : position='-15%'">
        신청된 메뉴
        <!-- <ChoiceMenuCard v-for="(i, idx) in array(10)" :key="idex"/> -->
        <Receipt/>
    </div>
</template>

<script>
import ChoiceMenuCard from './ChoiceMenuCard.vue'
import Receipt from './Receipt.vue'
export default {
    components: {
        ChoiceMenuCard,
        Receipt
    },
    data() {
        return {
            position: '-15%'
        }
    },
    computed: {
        cssProps() {
            return {
                'transform': `translateX(${this.position})`
            }
        }
    }
}
</script>

<style>
.menu-bar-wrapper{
    width: 880px;
    height: calc(100vh - 250px);
    background-color: #DE1616;
    color: white;
    text-align: center;
    border-radius: 12px 0 0 12px;
    padding-top: 20px;
    box-sizing: border-box;
    position: fixed;
    top: 170px;
    left: 100%;
    overflow: auto;
    z-index: 10;
    transition: all 0.5s;
}
</style>