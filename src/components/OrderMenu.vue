<template>
    <div class="order-wrapper">
        메뉴 선택
        <img class="choice-image" src="https://via.placeholder.com/160" alt="선택된 메뉴"/>
        <div>선택된 메뉴</div>
        <div class="amount">
            <div @click.prevent="count--">-</div>
            <div>{{count}}</div>
            <div @click.prevent="count++">+</div>
        </div>
        <button class="choice-btn">주문하기</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 1
        }
    }
}
</script>

<style>
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
.choice-image {
    width: 160px;
    height: 160px;
    object-fit: contain;
}
.amount {
    display: flex;
}
.amount div{
    cursor: pointer;
    width: 10px;
    text-align: center;
    padding: 5px 15px;
    font-size: 20px;
    border: 1px solid black;
}
.amount div:nth-child(2){
    border: 1px solid black;
    border-right: none;
    border-left: none;
    width: 30px;
    font-size: 20px;
    text-align: center;
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
    margin: 150px 0;
}
</style>