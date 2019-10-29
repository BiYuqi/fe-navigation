<template>
  <div class="left-side">
    <div class="left-side__container">
      <div
        class="left-side__item"
        :class="{active: $store.state.lab === item.value}"
        v-for="(item, index) in menus"
        :key="index"
        @click="setCurrentLab(item.value)">
        {{item.name}}
      </div>
    </div>
    <div class="left-side__lab-img">
      <img src="@/assets/lab_illustrator.png" alt="">
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { experimentMenu } from '../../../helper/experiment'
export default {
  data () {
    return {
      menus: experimentMenu
    }
  },
  methods: {
    ...mapMutations([
      'setLab'
    ]),
    setCurrentLab (lab) {
      this.setLab(lab)
    }
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
