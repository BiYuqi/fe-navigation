<template>
  <div class="right-side">
    <Title
      :title="getExperimentMenuName($store.state.lab).title"
      :desc="getExperimentMenuName($store.state.lab).desc" />
    <div class="right-side__content">
      <template v-for="(item, index) in features">
      <RadioLabel
        @switch-event="switchEvent"
        :key="index"
        :type="item.name"
        :item="item"
        v-if="$store.state.lab === 'console'" />
      </template>
      <template>
        <tu-cao v-if="$store.state.lab === 'contribution'" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import TuCao from '../../TuCao'
import Title from './Title'
import RadioLabel from '../RadioLabel'
import { getExperimentMenuName, CONSOLE_FEATURES } from '../../../helper/experiment'
export default {
  data () {
    return {
      getExperimentMenuName,
      features: CONSOLE_FEATURES
    }
  },
  methods: {
    ...mapMutations('console', [
      'setFeature'
    ]),
    switchEvent (data) {
      this.setFeature(data)
    }
  },
  components: {
    Title,
    RadioLabel,
    TuCao
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
