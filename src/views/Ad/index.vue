<template>
  <div class="fead-wrapper">
    <span class="fead-close" @click="closeAd" v-if="isShowOrigin">X</span>
    <img src="../../assets/juejin.png" alt="" @click="show" v-if="isShowOrigin">
    <div class="fead-model" v-if="isShowAd" @click="hide">
      <div class="fead-model_cover">
        <img src="../../assets/juejin.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowAd: false,
      isShowOrigin: true
    }
  },
  methods: {
    show () {
      this.isShowAd = true
    },
    hide () {
      this.isShowAd = false
    },
    closeAd () {
      this.isShowOrigin = false
    }
  }
}
</script>>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.fead {
  &-wrapper {
    position: relative;
  }

  &-close {
    position: absolute;
    right: 0;
    top: -20px;
    color: rgba(41, 14, 14, 0.2);
    width: 20px;
    height: 20px;
    line-height: 20px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
  }
}

.fead-model {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  cursor: pointer;
  background-color: rgba(0, 0, 0, .2);

  &_cover {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001;

    img {
      width: 400px;
    }
  }
}
</style>
