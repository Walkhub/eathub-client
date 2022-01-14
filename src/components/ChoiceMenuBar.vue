<template>
    <div class="menu-bar-wrapper">
        선택한 메뉴
    </div>
</template>

<script>
export default {

}
</script>

<style>
.menu-bar-wrapper{
    width: 120px;
    height: calc(100vh - 300px);
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
}
</style>
