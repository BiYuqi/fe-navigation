<template>
  <div class="header" :class="{active:isactive}">
    <canvas-bg v-if="isactive"></canvas-bg>
    <a href="https://loadingmore.com" target="_blank" title="前端导航" class="header__title">
      <img src="~@/assets/logo.png" alt="">
      <div>
        <p>前端导航</p>
        <span>专注于前端开发, 前端开发教程</span>
      </div>
    </a>
    <iframe
        style="position:absolute;top:23px;right:6px;"
        frameborder="0" scrolling="0" width="91px" height="20px" class="star-gihub"
        src="https://ghbtns.com/github-btn.html?user=BiYuqi&repo=vuenotes&type=star&count=true" >
    </iframe>
  </div>
</template>

<script>
import canvasBg from '@/views/Canvas.vue'
export default {
  data () {
    return {
      isactive: false
    }
  },
  mounted () {
    const m = new Date().getMonth() + 1
    const d = new Date().getDate()
    const newYear = m === 1 && d === 1
    const birth = d === 29 || d === 26 || d === 27 || d === 25
    if (m === 12) {
      if (d === 25 || newYear || birth) {
        this.isactive = true
      }
    }
  },
  components: {
    canvasBg
  }
}
</script>
<style lang="scss">
.header{
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 30px;
  text-align: left;
  background-color: #FDFDFD;
  position: relative;
  border-bottom: 1px solid #E8E8E8;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);

  &.active {
    background-color: #00beb3;

    .btn_logo {
      color: #fff;
    }
  }

  i {
    font-style: normal;
    display: inline-block;
    color: #2B2B2B;
    font-size: 20px;
  }

  &__title {
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 52px;
      height: 52px;
      margin-right: 10px;
    }
    p {
      font-size: 20px;
      color: #5e5e5e;
      line-height: 1.3;
    }
    span {
      color: #666;
      font-size: 14px;
    }
  }
}
</style>
