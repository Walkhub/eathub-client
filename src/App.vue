<template>
  <MenuCard 
    store="퀴즈노스"
    menu="블랙 앵거스"
    price="7,000"
    star=""
    count="7"
    img="./assets/example.png"
  />
</template>

<script>
import MenuCard from './components/MenuCard.vue'

export default {
  name: 'App',
  components: {
    MenuCard
  }
}
</script>
