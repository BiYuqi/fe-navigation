<template>
  <ul class="sidebar-wrapper">
    <li class="sidebar-item" v-for="(router, index) in initialData" :key="index">
        <router-link :to="'/' + router[0]">{{router[1]}}</router-link>
    </li>
  </ul>
</template>

<script>
import { routerPage } from '@/router/config'
export default {
  data () {
    return {
      initialData: routerPage
    }
  }
}
</script>

<style lang="scss">
.sidebar-wrapper {
  width: 180px;
  background-color: #fff;
  border-right: 1px solid #e8e8e8;
  .sidebar-item {
    list-style: none;
    height: 40px;
    line-height: 40px;
    position: relative;
    cursor: pointer;
    border-bottom: 1px solid #eee;

    a {
      display: block;
      text-decoration: none;
      color: #333;
      transition: all .2s;
      padding-left: 30px;
      font-size: 14px;
      font-weight: 600;

      &.router-link-exact-active {
        color: #00beb3;
        font-weight: 700;

        &:before {
          position: absolute;
          left: 0;
          bottom: 0;
          display: block;
          content: "";
          width: 4px;
          height: 40px;
          background-color: #00beb3;
        }
      }
    }
  }
}
</style>
