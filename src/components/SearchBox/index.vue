<template>
  <div class="search-container">
    <input type="text" placeholder="请输入查询关键字...">
  </div>
</template>

<script>
export default {
  mounted () {
    const works = `
        onmessage = (event) => {
          console.log('worker', event.data)
          postMessage('怎么办')
        }`
    const blob = new Blob([works])
    const URL = window.URL.createObjectURL(blob)
    const myWorker = new Worker(URL)
    myWorker.onmessage = (e) => {
      console.log('main', e)
    }
    myWorker.postMessage('我是main, 发送消息999')
  }
}
</script>

<style lang="scss">
@import '../../styles/common.scss';

.search-container {
  position: absolute;
  right: 100px;

  input {
    width: 185px;
    padding: 8px 15px;
    border-radius: 4px;
    outline: none;
    border: 1px solid $lightColor;
    color: $textActive;
  }
}
</style>
