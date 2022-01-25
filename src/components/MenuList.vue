<template>
    <div class="list-wrapper">
        <div class="list-card">
            <MenuCard 
                store="음식점을 선택하고"
                menu="메뉴를 추가하세요"
                price="9,999,999"
                star="5"
                img="https://via.placeholder.com/160"
                @click.prevent="SET_IS_ADD_MENU(true)"
            />
        </div>
        <div v-for="(data,idx) in menuData" :key="idx" class="list-card">
            <MenuCard 
                :store="data.restaurantName"
                :menu="data.foodName"
                :price="data.foodCost"
                :star="data.foodScore"
                :img="data.foodPicture"
            />
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import MenuCard from './MenuCard.vue'
import Constant from '../Constant'

export default {
    components: {
        MenuCard,
    },
    computed: {
        ...mapState({
            menuData: (state) => state.socket.menuList
        })
    },
    mounted() {
        this.$foodList()
        this.$socket.on('food.list', (data) => {
            this.pushMenuData(data.foods)
        })
        this.$socket.on('food.create', (data) => {
            console.log(data)
            this.pushMenuAdd({...data, foodScore: 0})
        })
    },
    methods: {
        ...mapMutations({
            pushMenuData: Constant.PUSH_MENU_DATA,
            pushMenuAdd: Constant.PUSH_MENU_ADD,
            SET_IS_ADD_MENU: 'SET_IS_ADD_MENU'
        })
    },
    
}
</script>

<style>
.list-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 200px);
    grid-auto-rows: 290px;
    margin-top: 10px;
}
.list-card{
    margin: 0 auto;
}
@media screen and (max-width: 1550px) { 
    .list-wrapper{
        grid-template-columns: repeat(4, 200px);
    }
}
@media screen and (max-width: 1250px) { 
    .list-wrapper{
        grid-template-columns: repeat(3, 200px);
    }
}

</style>