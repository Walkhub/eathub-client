<template>
    <div class="receipt-wrapper">
        <img src="../assets/eathub.png" />
        <div class="receipt-header">
            <div>
                거래일 : 2022/01/26 (화) 14:00
            </div>
            <div >
                <span>구매 담당 : 이재원</span>
                <span>거래번호 : 002</span>
            </div>
        </div>

        <table class="receipt-body"  v-for="(data, idx) in allOrderFood" :key="idx">
            <th>제품명</th>
            <th>단가</th>
            <th>수량</th>
            <th>금액</th>
            <tbody v-for="i in data.applications" :key="i.foodId">
                <tr >
                    <td>#{{i.foodName}}</td>
                    <td>{{i.cost}}</td>
                    <td>{{i.count}}</td>
                    <td>{{i.count * i.cost}}</td>
                </tr>

                <tr v-for="f in i.options" :key="f.optionId">
                    <td>#-{{f.optionName}}</td>
                    <td>{{f.optionCost}}</td>
                    <td>1</td>
                    <td>{{f.optionCost}}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>배송비</td>
                    <td></td>
                    <td></td>
                    <td>{{data.deliveryFee}}</td>
                </tr>
            </tbody>
            <tfoot>
                <td style="font-weight: bold">{{data.restaurantName}} 총합</td>
                <td></td>
                <td>{{data.countSum}}</td>
                <td style="font-weight: bold">{{data.costSum + data.deliveryFee}}</td>
            </tfoot>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            allOrderFood: (state) => state.socket.allOrderFood
        })
    }
}
</script>

<style scoped>
img {
    width: 190px;
    padding: 20px;
    object-fit: contain;
}
.receipt-wrapper {
    color: black;
    width: 330px;
    height: calc(100% - 50px);
    background-color: white;
    box-shadow: 4px 4px 4px #00000029;
    overflow: auto;
}
.receipt-body {
    margin: 0 auto;
    width: 260px;
    table-layout: fixed;
}
.receipt-body th{
    padding: 3px 0;
    border: 1px dashed black;
    border-left: none;
    border-right: none;
}
.receipt-body tfoot{
    padding: 3px 0;
    border: 1px dashed black;
    border-left: none;
    border-right: none;
}
.receipt-body th:nth-child(1) {
    width: 140px;
    
}
.receipt-body td {
    text-align: right;
}
.receipt-body td:nth-child(1) {
    text-align: left;
}
</style>