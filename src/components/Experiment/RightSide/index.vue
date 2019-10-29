<template>
  <div class="right-side">
    当前模块位置: {{getExperimentMenuName(lab)}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getExperimentMenuName } from '../../../helper/experiment'
export default {
  data () {
    return {
      getExperimentMenuName
    }
  },
  computed: mapState([
    'lab'
  ])
}
</script>

<style lang="scss">
@import './index.scss';
</style>
