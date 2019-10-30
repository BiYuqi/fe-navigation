<template>
  <div class="right-side__header">
    <div class="right-side__title">{{title}}</div>
    <div class="right-side__desc">{{desc}}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'desc']
}
</script>

<style lang="scss">
.right-side {

  &__header {
    height: 85px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-image: url('../../../assets/line.png');
      background-size: contain;
    }
  }

  &__title {
    font-size: 18px;
    font-weight: 500;
    color: #333;
    margin-bottom: 10px;
  }

  &__desc {
    font-size: 14px;
    color: #999;
  }
}
</style>
