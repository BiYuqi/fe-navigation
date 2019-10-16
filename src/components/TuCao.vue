<template>
  <div class="tu-chao">
    <a href="https://support.qq.com/product/94200" target="_blank">吐个槽</a>
    <a href="https://github.com/BiYuqi/vuenotes/issues" target="_blank">提Issue</a>
  </div>
</template>

<style lang="scss">
.tu-chao {
  position: absolute;
  top: 90px;
  right: 30px;
  border: #f3f3f3;
  font-size: 14px;

  a {
    color: #666;
    margin: 0 10px;
    &:hover {
      color: #00beb3;
    }
  }

  @media screen and (max-width: 640px) {
    top: 140px;
  }
}
</style>
