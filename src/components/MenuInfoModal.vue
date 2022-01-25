<template>
    <ModalBase :width="'700px'" :height="'500px'">
        <template v-slot:main>
            <div class="menu-info">
                <div class="menu-image">
                    <img src="https://via.placeholder.com/180" class="menu-image"/>
                </div>

                <div class="menu-contents">
                    <div class="menu-contents-text">{{ menuInfo.restaurantName }}</div>
                    <div class="menu-contents-title">{{ menuInfo.name }}</div>
                    <div class="menu-contents-title">{{ menuInfo.cost }}<span class="menu-contents-text">원</span></div>
                </div>

                <div class="menu-order">
                    <input type="number" placeholder="수량" min="1"/>
                    <button>주문하기</button>
                </div>

                <div class="menu-score">
                    <div class="menu-score-info">
                        <div class="menu-score-title">평균 별점</div>
                        <div class="menu-score-content">
                            <span style="font-size:20px">{{ menuInfo.foodScore }}</span> / 5
                        </div>
                        <div style="position: relative">
                            <Star
                                :width="'80px'" 
                                :height="'17px'" 
                                :isMove="false" 
                                :value="menuInfo.foodScore*2"
                            />
                        </div>
                    </div>
                    <div class="menu-score-info">
                        <div class="menu-score-title">인기 순위</div>
                        <div class="menu-score-content">
                            <span style="font-size:20px">{{ menuInfo.rank }}</span> / {{ menuInfo.totalCount }}
                        </div>
                    </div>
                </div>
                
            </div>
        </template>
    </ModalBase>
</template>

<script>
import ReviewCard from './ReviewCard.vue'
import ModalBase from './ModalBase.vue'
import Star from './Star.vue'
import { mapMutations, mapState } from 'vuex'
import Constant from '../Constant'
export default {
    components: {
        ReviewCard, 
        ModalBase,
        Star 
    },
    data() {
        return {
            id: -1,
            value: 0
        }
    },
    create() {
        console.log(this.$route.params.id)
    },
    computed: {
        ...mapState({
            menuInfo: (state) => state.socket.menuInfo,
        })
    },
    mounted() {
        this.$foodInfo({foodId: 10})
        this.$socket.on('food.information', (data) => {
            console.log(data)
            this.setMenuInfo(data)
        })
    },
    methods: {
        ...mapMutations({
            setMenuInfo: Constant.SET_MENU_INFO
        }),
        starScoreChange(starScore) {
            this.value = starScore/2
        }
    }
}
</script>

<style scoped>
.menu-info {
    height: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(6, 1fr);
    grid-row-gap: 15px;
    place-items: center;
}
.menu-image {
    width: 180px;
    height: 180px;
    object-fit: cover;
    grid-row: 1 / 4;
    grid-column: 1 / 2;
    margin: 0;
}
.menu-contents{
    width: 100%;
    grid-row: 4 / 6;
    align-content: flex-start;
    align-items: flex-start;
}
.menu-contents-text{
    font-size: 16px;
}
.menu-contents-title{
    font-size: 20px;
    font-weight: bold;
}
.menu-order{
    width: 100%;
    grid-row: 6 / 7;
    display: flex;
    justify-content: space-around;
}
.menu-order input {
    width: 40px;
    outline: none;
}
.menu-order button {
    background-color: #AC0C0C;
    color: white;
    width: 100px;
    padding: 5px;
    border: none;
}
.menu-score{
    display: flex;
    grid-row: 1 / 3;
}
.menu-score-info{
    width: 150px;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.menu-score-title {
    font-size: 16px;
    font-weight: bold;
}
.menu-score-content{
    font-size: 14px;
}
.review-write {
    width: 300px;
    height: 120px;
    padding: 13px;
    border: 1px solid #D2D2D2;
    border-radius: 10px;
    grid-row: 3 / 5;
    box-sizing: border-box;
}
.review-star{
    width: 100px;
    position: relative;
    margin: 0 auto;
}
.review-input{
    box-sizing: border-box;
    width: 100%;
    outline: none;
    border: none;
    padding: 7px;
    resize: none;
}
.review-btn{
    width: 70px;
    height: 25px;
    border: 1px solid #707070;
    background: none;
    color: #9E9E9E;
    cursor: pointer;
    float: right;
}
.review-list {
    width: 290px;
    height: 120px;
    overflow: auto;
    grid-row: 5 / 7;
}
</style>