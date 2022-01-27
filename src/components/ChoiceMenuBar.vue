<template>
    <div class="menu-bar-wrapper" :style="cssProps" @click.prevent="position==='-15%' ? position='-100%' : position='-15%'">
        신청된 메뉴
        <div class="menu-bar-content">
                <ChoiceMenuCard v-for="(i, idx) in myOrderFood" :key="idx"/>
            
            <Receipt class="receipt"/>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Constant from '../Constant'
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
    mounted() {
        this.$socket.on('food.application', (data) => {
            console.log(data.foodApplications)
            this.PUSH_MY_ORDER_FOOD(data.foodApplications)
        })

        this.$allOrderFood()
        this.$socket.on('food.application.list', (data) => {
            console.log(data.foodApplications)
            this.SET_ALL_ORDER_FOOD(data.foodApplications)
        })
    },
    computed: {
        ...mapState({
            myOrderFood: (state) => state.socket.myOrderFood
        }),
        cssProps() {
            return {
                'transform': `translateX(${this.position})`
            }
        }
    },
    methods: {
        ...mapMutations({
            PUSH_MY_ORDER_FOOD: Constant.PUSH_MY_ORDER_FOOD,
            SET_ALL_ORDER_FOOD: Constant.SET_ALL_ORDER_FOOD
        }),
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
.menu-bar-content {
    height: calc(100vh - 300px);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-auto-rows: auto;
    place-items: center;
}
.foodList {
    grid-column: 1 / 4;
    grid-row: 1 / 7;
}
.receipt{
    grid-row: 1 / 7;
    grid-column: 4 / 6;
}
</style>