<template>
  <div class="sidebar">
    <h2>分类</h2>
    <ul class="sidebar-content">
      <li class="sidebar-item" v-for="(router, index) in initialData" :key="index">
          <router-link :to="'/' + router[0]">{{router[1]}}</router-link>
      </li>
    </ul>
    <ad />
  </div>

</template>

<script>
import Ad from '../Ad'
import { routerPage } from '@config/routerConfig'
export default {
  data () {
    return {
      initialData: routerPage
    }
  },
  components: {
    Ad
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
