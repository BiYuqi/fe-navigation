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

body{
  font: 14px/1.8 'Microsoft Yahei', Arial,'Hiragino Sans GB';
  font-size: 14px;
  width: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
</style>
