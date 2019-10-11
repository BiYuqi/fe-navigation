<template>
    <div id="canvas">
        <canvas id="cas"></canvas>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    start () {
      const $ = (el) => document.querySelector(el)
      const canvas = $('canvas')
      canvas.width = $('body').getBoundingClientRect().width
      canvas.height = $('.header').getBoundingClientRect().height
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#fff'
      let isPlay = true
      var arr = []
      for (let i = 0; i < 300; i++) {
        arr.push({
          top: Math.random() * canvas.height,
          left: Math.random() * canvas.width,
          scale: Math.random() * 3 + 1,
          deg: Math.random(-10, 10)
        })
      }
      function d2a (n) {
        return n * Math.PI / 180
      }
      function animate () {
        if (isPlay) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          for (let i = 0; i < arr.length; i++) {
            var speed = 0.5 * arr[i].scale
            arr[i].left = arr[i].left + Math.tan(d2a(arr[i].deg)) * speed
            arr[i].top = arr[i].top + speed

            if (arr[i].top >= canvas.height || arr[i].left < 0 || arr[i].left >= canvas.width) {
              arr.splice(i--, 1)
              continue
            }
            ctx.beginPath()
            ctx.arc(arr[i].left, arr[i].top, speed, 0, 2 * Math.PI)
            ctx.closePath()
            ctx.fill()
          }
          window.requestAnimationFrame(animate)
        }
      }
      function addFlow () {
        if (arr.length < 350) {
          for (let i = 0; i < 20; i++) {
            arr.push({
              top: -Math.random() * 50,
              left: Math.random() * canvas.width,
              scale: Math.random() * 3 + 1,
              deg: Math.random(-10, 10)
            })
          }
        }
        window.requestAnimationFrame(addFlow)
      }
      animate()
      addFlow()
    }
  },
  mounted () {
    this.start()
  }
}
</script>

<style scoped>
    #canvas{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        z-index: 0;
    }
    canvas{
        width: 100%;
        height: 60px;
    }
</style>
