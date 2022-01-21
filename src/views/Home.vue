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
  <MenuAddModal v-if="isAddMenu" @close="isAddMenu=false"/>
</template>

<script>
import { mapState } from 'vuex'
import MenuList from '../components/MenuList.vue'
import ChoiceMenuBar from '../components/ChoiceMenuBar.vue'
import Header from '../components/Header.vue'
import OrderMenu from '../components/OrderMenu.vue'
import MenuAddModal from '../components/MenuAddModal.vue'

export default {
  components: {
    Header,
    OrderMenu,
    MenuList,
    ChoiceMenuBar,
    MenuAddModal
  },
  computed: {
    ...mapState({
      isAddMenu: 'isAddMenu'
    })
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
}
section{
  width: 1300px;
  display: flex;
  margin: 0 auto;
}
</style>