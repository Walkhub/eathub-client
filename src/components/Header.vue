<template>
<header class="header"><img src="../assets/eathub.png" alt="로고" class="logo"/></header>
<nav class="header">
    <img src="../assets/noodletree.jpg" alt="국수나무" />
    <img src="../assets/lotteria.png" alt="롯데리아" />
    <img src="../assets/homebab.png" alt="정성이가능한집밥" />
    <img src="../assets/quiznos.png" alt="퀴즈노스" />
</nav>
</template>

<script>
export default {

}
</script>

<style>
.header {
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-evenly;
}
.header:nth-child(1){
    background-color: white;
}
.header:nth-child(2){
    background-color: #DE1616;
}
.logo {
    width: 100px;
}
img {
    width: 300px;
    height: 100%;
    object-fit: contain;
}
</style>