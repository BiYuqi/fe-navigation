<template>
  <div id="app" :class="{'app-experiment': isShowGrayBg}">
    <Header />
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Header from './views/Header'
export default {
  data () {
    return {
      isShowGrayBg: true
    }
  },
  watch: {
    '$route.name' () {
      this.isShowGrayBg = this.$route.name === 'experiment'
    }
  },
  mounted () {
    this.isShowGrayBg = this.$route.name === 'experiment'
  },
  components: {
    Header
  }
}
</script>>
<style lang="scss">
@import './styles/common.scss';

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}
body{
  font: 14px/1.8 'Microsoft Yahei', Arial,'Hiragino Sans GB';
  font-size: 14px;
  width: 100%;
  height: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;

  .main-content {
    display: flex;
    width: 960px;
    margin: 0 auto;
    padding-top: 25px;

    @media screen and (max-width: 960px) {
      width: 760px;
    }

    @media screen and (max-width: 760px) {
      width: 560px;
    }

    @media screen and (max-width: 640px) {
      flex-direction: column;
      height: auto;
      width: 100%;
      padding-top: 0;
    }
  }
}
.app-experiment {
  background-color: $expBg;
}
</style>
