<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
  width: 100%;
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
body{
    font-family: "Microsoft Yahei";
    font-size: 14px;
    width: 100%;
}
.range{
    height: 100%;
    width: 100%;
    position: relative;
}

#app {
  font-family: 'Microsoft Yahei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
}
</style>
