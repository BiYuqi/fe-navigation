<template>
  <div>
    <img src="../../assets/juejin.png" alt="" @click="show">
    <div class="ad-model" v-if="isShowAd" @click="hide">
      <div class="ad-model_cover">
        <img src="../../assets/juejin.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowAd: false
    }
  },
  methods: {
    show () {
      this.isShowAd = true
    },
    hide () {
      this.isShowAd = false
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
.ad-model {
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
