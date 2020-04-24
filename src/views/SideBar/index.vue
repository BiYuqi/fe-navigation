<template>
  <div class="sidebar">
    <h2>分类</h2>
    <ul class="sidebar-content">
      <li class="sidebar-item" v-for="(router, index) in initialData" :key="index">
          <router-link :to="'/' + router[0]">{{router[1]}}</router-link>
      </li>
    </ul>
    <!-- <ad /> -->
  </div>

</template>

<script>
// import Ad from '../Ad'
import { routesNameMapping } from '@config/routesNameMapping'
export default {
  data () {
    return {
      initialData: routesNameMapping
    }
  }
  // components: {
  //   Ad
  // }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
