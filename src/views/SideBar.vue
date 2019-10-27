<template>
  <div class="sidebar">
    <h2>分类</h2>
    <ul class="sidebar-content">
      <li class="sidebar-item" v-for="(router, index) in initialData" :key="index">
          <router-link :to="'/' + router[0]">{{router[1]}}</router-link>
      </li>
    </ul>
    <tu-cao />
  </div>

</template>

<script>
import TuCao from '@/components/TuCao.vue'
import { routerPage } from '@config/routerConfig'
export default {
  data () {
    return {
      initialData: routerPage
    }
  },
  components: {
    TuCao
  }
}
</script>

<style lang="scss">
@import '../styles/common.scss';
.sidebar {
  width: 190px;
  padding-top: 20px;
  background-color: #fff;

  h2 {
    font-size: 16px;
    color: #afafaf;
    line-height: 1.78em;
    margin-bottom: 10px;
  }

  &-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &-item {
    list-style: none;
    width: 90px;
    height: 30px;
    box-sizing: border-box;
    margin-bottom: 12px;
    overflow: hidden;

    a {
      display: block;
      text-decoration: none;
      color: $text;
      transition: all .2s;
      font-size: 14px;
      font-weight: 600;

      &:hover {
        color: $baseColor;
      }

      &.router-link-exact-active {
        color: $baseColor;
        font-weight: 700;

        &:before {
          position: absolute;
          left: 0;
          bottom: 0;
          display: block;
          content: "";
          width: 4px;
          height: 40px;
          background-color: $baseColor;
        }
      }
    }
  }

  @media screen and (max-width: 760px) {
    width: 140px;

    .sidebar-item {
      width: 100%;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    display: flex;
    overflow-x: auto;
    position: absolute;
    top: 60px;
    padding-top: 0px;

    h2 {
      display: none;
    }

    &-content {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
    }

    .sidebar-item {
      word-break: keep-all;
      height: auto;
      margin-bottom: 0;
      width: auto;

      a {
        display: inline-block;
        padding: 10px;

        &.router-link-exact-active {
          color: $baseColor;
          font-weight: 700;

          &:before {
            display: none;
          }
        }
      }
    }
  }
}
</style>
