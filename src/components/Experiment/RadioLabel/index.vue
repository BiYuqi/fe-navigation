<template>
  <div class="radio-label">
    <div class="radio-label__icon">
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1128" width="20" height="20"><path d="M867 381.2L559.8 74H157v876h710V381.2zM609.8 194.7l136.5 136.5H609.8V194.7zM817 900H207V124h332.1l20.7 20.7v236.5h236.5l20.7 20.7V900zM475.5 376.8h-170v-50h170v50z m-170 94.9h413v50h-413v-50z m0 144.9h413v50h-413v-50z" fill="" p-id="1129"></path></svg>
    </div>
    <div class="radio-label__content">
      <div class="title">{{item.desc}}</div>
      <div class="desc">{{isOpen ? '已设置': '已关闭'}}</div>
    </div>
    <div class="radio-label__switch-bar" :class="{checked: isOpen}" @click="switchFeature(type)"></div>
  </div>
</template>

<script>
export default {
  props: ['type', 'item'],
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    switchFeature (type) {
      this.isOpen = !this.isOpen
      this.$emit('switch-event', {
        type,
        status: this.isOpen
      })
    }
  }
}
</script>

<style lang="scss">
.radio-label {
  display: flex;
  align-items: center;
  height: 117px;
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

  &__icon {
    width: 40px;

    svg {
      fill: #bbb7b7;
    }
  }

  &__content {
    flex: 1;

    .title {
      font-size: 16px;
      font-weight: 500;
      color: #333;
    }

    .desc {
      font-size: 14px;
      color: #666;
      line-height: 2.2;
    }
  }

  &__switch-bar {
    width: 50px;
    height: 27px;
    border-radius: 54px;
    cursor: pointer;
    position: relative;
    background-color: rgba(0,0,0,.25);

    &.checked {
      background-color: #4581bc;

      &:after {
        left: 25px;
      }

      &:before {
        border-color: #4581bc;
      }
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid transparent;
      border-radius: 54px;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }

    &:after {
      content: "";
      position: absolute;
      width: 23px;
      height: 23px;
      left: 2px;
      top: 2px;
      border-radius: 23px;
      background-color: #fff;
      cursor: pointer;
      transition: all .24s;
    }
  }
}
</style>
