<template>
  <div class="home">
    <header class="main-header">
      <Header/>
    </header>
    <section>
      <MenuList/>
      <OrderMenu />
    </section>
    <aside>
      <ChoiceMenuBar/>
    </aside>
  </div>
  <MenuAddModal v-if="isAddMenu" />
  <MenuInfoModal v-if="openMenuInfo.isOpen" :foodId="openMenuInfo.foodId"/>
  <router-view></router-view>
</template>

<script>
import { mapState } from 'vuex'
import MenuList from '../components/MenuList.vue'
import ChoiceMenuBar from '../components/ChoiceMenuBar.vue'
import Header from '../components/Header.vue'
import OrderMenu from '../components/OrderMenu.vue'
import MenuAddModal from '../components/MenuAddModal.vue'
import MenuInfoModal from '../components/MenuInfoModal.vue'

export default {
  components: {
    Header,
    OrderMenu,
    MenuList,
    ChoiceMenuBar,
    MenuAddModal,
    MenuInfoModal
  },
  computed: {
    ...mapState({
      isAddMenu: 'isAddMenu',
      openMenuInfo: 'openMenuInfo'
    })
  },
  data() {
    return {
      name: ''
    }
  },
  mounted() {
    if(localStorage.getItem('name') === null || localStorage.getItem('name') === ''){
      this.name = prompt("이름을 겨 입력해라이")
      localStorage.setItem('name', this.name)
    }
  }
}
</script>

<style scoped>
.home{
  min-width: 1060px;
  height: 100%;
}
header {
  position: sticky;
  top: 0;
  z-index: 5;
}
section{
  width: 1300px;
  display: flex;
  margin: 0 auto;
}
</style>