<template>
    <div class="list-wrapper">
        <div v-for="(data,idx) in 100" :key="idx" class="list-card">
            <MenuCard 
                store="퀴즈노스"
                menu="블랙 앵거스"
                price="7,000"
                star=""
                count="7"
                img="https://via.placeholder.com/160"
            />
        </div>
    </div>
</template>

<script>
import MenuCard from './MenuCard.vue'
export default {
    data() {
        return {
        }
    },
    components: {
        MenuCard,
    }
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