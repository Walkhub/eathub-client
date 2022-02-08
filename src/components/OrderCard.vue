<template>
    <div class="order-card-wrapper">
        <div class="order-card-info">
            <img class="choice-image" :src="data.imageUrl" alt="선택된 메뉴"/>
            <div>
                <span>{{data.restaurantName}}</span>
                <span>{{data.foodName}}</span>
            </div>
            <div>{{data.foodCost}}원</div>
        </div>
        <div v-for="(data, idx) in choiceOption" :key="idx">
            {{ data.optionName }} +{{data.optionCost}}원
        </div>
        <select class="option-list" v-model="option" @change.prevent="pushOption(option.name, option.cost, option.id)">
            <option hidden>옵션 선택하기</option>
            <option v-for="data in options" :key="data.optionId" :value="{id: data.optionId, name: data.optionName, cost: data.optionCost}">{{data.optionName}} +{{data.optionCost}}</option>
        </select>
        <div class="option-add" @click.prevent="newOption">
            새로운 옵션 추가히기
        </div>
        
        <div class="order-setting">
            <input type="number" v-model="count" @change="countChange"/>
            <div>{{totalCost}}</div>
            <div @click.prevent="deleteFoodCard">&times;</div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    props: ['data'],
    data() {
        return {
            options: [],
            choiceOption: [],
            option: {},
            count: 1,
        }
    },
    computed: {
        ...mapState({
            cartState: 'cartState'
        }),
        totalCost() {
            const sumall = this.choiceOption.map(item => item.optionCost).reduce((prev, curr) => prev + curr, 0);
            return ( this.data.foodCost+sumall ) * this.count
        }
    },
    mounted() {
        this.options=[]
        this.$optionsList({foodId: this.data.foodId})

        this.$socket.on('option.list', (data) => {
            this.options.push(...data.options)  
        })

        this.$socket.on(`option.create.${this.data.foodId}`, (data) => {
            this.options.push(data)
        })
    },
    methods: {
        ...mapMutations({
            PUSH_CART_OPTION: 'PUSH_CART_OPTION',
            DELETE_CART_FOOD: 'DELETE_CART_FOOD'
        }),
        newOption() {
            let name = prompt('옵션명을 입력하세요')
            let cost = prompt('옵션 가격을 입력하세요')
            this.$optionAdd({
                optionCost: cost,
                optionName: name,
                foodId: this.data.foodId
            })
        },
        pushOption(name, cost, id) {
            this.choiceOption.push({
                optionName: name, 
                optionCost: cost, 
                optionId: id
            })
            
            var index = this.cartState.findIndex(i => i.foodId === this.data.foodId)
            this.PUSH_CART_OPTION({index, optionId: id})
        },
        deleteFoodCard() {
            this.DELETE_CART_FOOD({foodId: this.data.foodId})
        },
        countChange() {
            if(this.count < 1) return  this.count = 1;
            var index = this.cartState.findIndex((i) => {
                return i.foodId == this.data.foodId
            })
            this.cartState[index].count = this.count
        }
    }
}
</script>

<style scoped>
.order-card-wrapper{
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border: 1px solid black;
    margin-bottom: 10px;
}
.order-card-info{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    place-items: center;
    margin-bottom: 10px;
}
.order-card-info div{
    display: flex;
    flex-direction: column;
    font-size: 14px;
}
.order-card-info div span:nth-child(2){
    font-weight: bold;
}
.choice-image {
    width: 64px;
    height: 64px;
    object-fit: contain;
}

.option-list {
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid black;
    cursor: pointer;
}

.option-add{
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 10px;
    font-size: 15px;
    text-align: center;
    border: 1px dashed black;
    cursor: pointer;
}
.order-setting{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    margin-top: 10px;
}
.order-setting input {
    width: 50px;
}
.order-setting div:nth-child(3){
    font-size: 25px;
    cursor: pointer;
}
</style>
