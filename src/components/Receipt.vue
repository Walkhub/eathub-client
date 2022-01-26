<template>
    <div class="receipt-wrapper">
        <img src="../assets/eathub.png" />
        <div class="receipt-header">
            <div>
                거래일 : 2022/01/26 (화) 14:00
            </div>
            <div>
                <span>구매 담당 : 이재원</span>
                <span>거래번호 : 002</span>
            </div>
        </div>

        <table class="receipt-body"  v-for="(data, idx) in data.foodApplications" :key="idx">
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
                <td style="font-weight: bold">{{data.costSum}}</td>
            </tfoot>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data : {
                    foodApplications: [
                        {
                            restaurantName: "롯데리아",
                            countSum: 4,
                            costSum: 20000,
                            deliveryFee: 3000,
                            applications: [
                                {
                                    cost: 6100,
                                    count: 1,
                                    foodId: 2,
                                    foodName: "Trex 버거",
                                    options : [
                                        {
                                            optionId: 1,
                                            optionName: "세트",
                                            optionCost: 1800
                                        },
                                        {
                                            optionId: 2,
                                            optionName: "포테이토 (L)",
                                            optionCost: 400
                                        },
                                        {
                                            optionId: 3,
                                            optionName: "음료 아이스티 (L)",
                                            optionCost: 700
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            restaurantName: "정환",
                            countSum: 4,
                            costSum: 20000,
                            deliveryFee: 3000,
                            applications: [
                                {
                                    cost: 6100,
                                    count: 1,
                                    foodId: 2,
                                    foodName: "더블 치즈 스테이크",
                                    options : [
                                        {
                                            optionId: 1,
                                            optionName: "M",
                                            optionCost: 2000
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            restaurantName: "정환",
                            countSum: 4,
                            costSum: 20000,
                            deliveryFee: 3000,
                            applications: [
                                {
                                    cost: 6100,
                                    count: 1,
                                    foodId: 2,
                                    foodName: "더블 치즈 스테이크",
                                    options : [
                                        {
                                            optionId: 1,
                                            optionName: "M",
                                            optionCost: 2000
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            restaurantName: "정환",
                            countSum: 4,
                            costSum: 20000,
                            deliveryFee: 3000,
                            applications: [
                                {
                                    cost: 6100,
                                    count: 1,
                                    foodId: 2,
                                    foodName: "더블 치즈 스테이크",
                                    options : [
                                        {
                                            optionId: 1,
                                            optionName: "M",
                                            optionCost: 2000
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
        }
    }
}
</script>

<style>
img {
    width: 190px;
    object-fit: contain;
}
.receipt-wrapper {
    color: black;
    width: 300px;
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
    width: 120px;
    
}
.receipt-body td {
    text-align: right;
}
.receipt-body td:nth-child(1) {
    text-align: left;
}
</style>