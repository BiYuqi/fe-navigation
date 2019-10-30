<template>
  <div class="right-side">
    <Title
      :title="getExperimentMenuName($store.state.lab).title"
      :desc="getExperimentMenuName($store.state.lab).desc" />
    <template v-for="(item, index) in features">
      <RadioLabel
        @switch-event="switchEvent"
        :key="index"
        :type="item.name"
        :item="item"
        v-if="$store.state.lab === 'console'" />
    </template>
  </div>
</template>

<script>
import Title from './Title'
import RadioLabel from '../RadioLabel'
import { getExperimentMenuName } from '../../../helper/experiment'
export default {
  data () {
    return {
      getExperimentMenuName,
      features: [
        {
          name: 'theme',
          desc: '设置全局样式'
        },
        {
          name: 'search',
          desc: '打开搜索功能'
        }
      ]
    }
  },
  methods: {
    switchEvent (data) {
      console.log(data)
    }
  },
  components: {
    Title,
    RadioLabel
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
