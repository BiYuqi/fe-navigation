<template>
    <div class="header" :class="{active:isactive}">
        <canvas-bg v-if="isactive"></canvas-bg>
        <a href="https://loadingmore.com" target="_blank" title="我的博客" class="logo"><img src="~@/assets/logo.png" alt=""></a>
        <i class="btn_logo">编程导航</i>
        <iframe
            style="position:absolute;top:23px;right:6px;"
            frameborder="0" scrolling="0" width="91px" height="20px" class="star-gihub"
            src="https://ghbtns.com/github-btn.html?user=BiYuqi&repo=vuenotes&type=star&count=true" >
        </iframe>
        <a href="https://github.com/BiYuqi" target="_blank" class="github-img" title="我的Github">
            <img src="http://loadingmore.com/demo/src/img/timg.png" alt="">
        </a>
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
<style scoped>
.header{
        height: 60px;
        width: 100%;
        box-sizing: border-box;
        line-height: 60px;
        color: #E9F6FD;
        padding-left: 70px;
        text-align: left;
        background-color: #FDFDFD;
        position: relative;
        border-bottom: 1px solid #E8E8E8;
    }
    .header.active{
        background-color: rgb(62, 171, 195);
    }
    .header.active .btn_logo{
        color: #fff;
    }
    .header i{
        font-style: normal;
        display: inline-block;
        color: #2B2B2B;
        font-size: 20px;
    }
    .header img{
        display: block;
        width: 48px;
        height: 48px;
        position: absolute;
        top: 50%;
        margin-top: -24px;
        left: 12px;
        z-index: 200;
    }
    .header .logo img{
        animation: change 5s linear infinite;
        -webkit-animation: change 5s linear infinite;
        animation-play-state: paused;
        -webkit-animation-play-state: paused;
    }
    .header .logo img:hover{
        animation-play-state: running;
        -webkit-animation-play-state: running;
    }
    @keyframes change{
        from{-webkit-transform:rotate(0);transform:rotate(0)}
        to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}
    }
    .github-img{
        width: 40px;
        height: 40px;
        display: inline-block;
        position: absolute;
        right: 120px;
        top: 20px;
    }
    .github-img img{
        width: 45px;
        height: 30px;
    }
</style>
