<template>
  <div>
    <Header />
    <div class="main-content">
      <SideBar />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import SideBar from './SideBar.vue'

export default {
  components: {
    Header,
    SideBar
  }
}
</script>

<style lang="scss">
.main-content {
  display: flex;
}
</style>
