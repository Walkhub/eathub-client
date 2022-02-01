<template>
    <div class="order-wrapper">
        <div class="order-title">
            장바구니
            <div class="join-member" @click.prevent="setJoin">신청하기</div>
        </div>
        <OrderCard
            v-for="(data, idx) in cartState" 
            :key="idx"
            :data="data"
        />

        <div class="order-money">
            <div>
                내가 쓴 돈
            </div>
            <div>
                <span>{{ money.usedAmount }}</span>
                / {{ money.amountPerPerson }} 원
            </div>
        </div>

        <div class="order-money">
            <div>
                남은 돈
            </div>
            <div>
                <span>{{ money.remainedAmount }}</span>
                / 136000 원
            </div>
        </div>

        <button class="choice-btn" @click.prevent="orderMenu">주문하기</button>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Constant from '../Constant'
import OrderCard from './OrderCard.vue'
export default {
  components: { OrderCard },
  computed: {
    ...mapState({
        cartState: 'cartState',
        money: (state) => state.socket.money
    }),
  },
  mounted() {
      this.$money()

      this.$socket.on('money', (data) => {
          this.SET_MONEY(data)
      })
  },
  methods: {
      ...mapMutations({
          SET_MONEY: Constant.SET_MONEY,
          RESET_CART_FOOD: 'RESET_CART_FOOD'
      }),

      orderMenu() {
          this.$orderMenu(this.cartState)
          this.RESET_CART_FOOD()
      },

      setJoin() {
          this.$userApplication()
      }
  }
}
</script>

<style>
.order-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
}
.join-member {
    padding: 2px 10px;
    cursor: pointer;
    border: 1px solid black;
}
.order-wrapper {
    width: 280px;
    height: calc(100vh - 70px);
    margin-top: 20px;
    padding: 20px;
    border: 1px solid black;
    border-bottom: none;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 70px;
}
.choice-btn {
    width: 100%;
    height: 40px;
    text-align: center;
    background-color: #DE1616;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20px;
    
}
.order-money{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    border: 1px solid black;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
}
.order-money span{
    font-size: 20px;
}
</style>