<template>
  <div>
    <Header />
    <div class="main-content">
      <SideBar />
      <transition name="no-mode-translate-fade">
        <router-view></router-view>
      </transition>
    </div>
    <tu-cao />
  </div>
</template>

<script>
import Header from './Header.vue'
import SideBar from './SideBar.vue'
import TuCao from '@/components/TuCao.vue'

export default {
  components: {
    Header,
    SideBar,
    TuCao
  }
}
</script>

<style lang="scss">
.main-content {
  display: flex;
}
@media screen and (max-width: 640px) {
  .main-content {
    flex-direction: column;
  }
}
.no-mode-translate-fade-enter-active,
.no-mode-translate-fade-leave-active {
  transition: all 0.8s;
}

.no-mode-translate-fade-enter,
.no-mode-translate-fade-leave-active {
  opacity: 0;
}

.no-mode-translate-fade-enter {
  transform: translateY(31px);
}

.no-mode-translate-fade-leave-active {
  transform: translateY(0);
}

.fade-nav-enter-active,
.fade-nav-leave-active {
  transition: all 0.5s;
}

.fade-nav-enter,
.fade-nav-leave-active {
  opacity: 0;
}

.fade-nav-enter {
  transform: translateX(-31px);
}
.fade-nav-leave-active {
  transform: translateX(0);
}
</style>
