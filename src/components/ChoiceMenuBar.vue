<template>
    <div class="menu-bar-wrapper">
        신청된 메뉴
        <!-- <ChoiceMenuCard v-for="(i, idx) in array(10)" :key="idex"/> -->
    </div>
</template>

<script>
import ChoiceMenuCard from './ChoiceMenuCard.vue'
export default {
    components: {
        ChoiceMenuCard,
    }
}
</script>

<style>
.menu-bar-wrapper{
    width: 120px;
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
    transform: translateX(-100%);
    overflow: auto;
}
</style>