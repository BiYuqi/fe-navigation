<template>
  <a class="v-n-github" :href="href">
    <svg
      class="v-n-octicon"
      version="1.1"
      aria-hidden="true"
      v-bind="svg">
      <slot></slot>
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 32
    },
    width: {
      type: Number,
      default: 32
    },
    href: {
      type: String,
      default: '#'
    },
    svg: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
@import '../styles/common.scss';

.v-n {
  &-octicon{
    display: inline-block;
    vertical-align: text-bottom;
    fill: currentColor;
  }

  &-github {
    font-size: 14px;
    color: $baseColor;
  }
}
</style>
