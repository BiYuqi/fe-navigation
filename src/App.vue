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
    font-family: "Microsoft Yahei";
    font-size: 14px;
    width: 100%;
}

#app {
  font-family: 'Microsoft Yahei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
</style>
