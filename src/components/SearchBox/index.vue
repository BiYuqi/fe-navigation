<template>
  <div class="search-container">
    <input
      type="text"
      @blur="handleSearchEvent"
      v-model="searchVal"
      placeholder="请输入查询关键字..." />
  </div>
</template>

<script>
import navData from '@json/basedata.json'
export default {
  data () {
    return {
      searchVal: '',
      worker: null
    }
  },
  methods: {
    handleSearchEvent (e) {
      this.worker.postMessage({
        type: 'searchVal',
        data: e.target.value
      })
    },
    generageWorkerLogic () {
      return `
        function generageData(allData) {
          let combineData = []
          const flatData = (allData) => {
            if (Object.keys(allData).length) {
              Object.keys(allData).forEach(item => {
                if (Array.isArray(allData[item])) {
                  combineData = [...combineData, ...allData[item]]
                } else {
                  flatData(allData[item])
                }
              })
            }
          }
          flatData(allData)
          return combineData
        }

        onmessage = (event) => {
          const { type, data } = event.data
          if (type === 'initial') {
            self.result = generageData(data)
          }

          if (type === 'searchVal') {
            if (!data) return
            self.result.filter(item => {
              if (item.name.indexOf(data) > -1) {
                postMessage({
                  type: 'returnVal',
                  data: item
                })
              }

              if (item.description && item.description.indexOf(data) > -1) {
                postMessage({
                  type: 'returnVal',
                  data: item
                })
              }

              if (item.tag && item.tag.length > 1 && item.tag.includes(data)) {
                postMessage({
                  type: 'returnVal',
                  data: item
                })
              }
            })
          }
        }`
    }
  },
  mounted () {
    const blob = new Blob([this.generageWorkerLogic()])
    const URL = window.URL.createObjectURL(blob)
    this.worker = new Worker(URL)
    this.worker.onmessage = (e) => {
      const { type, data } = e.data
      console.log(type, data, this.searchVal)
    }
    this.worker.postMessage({
      type: 'initial',
      data: navData
    })
  }
}
</script>

<style lang="scss">
@import '../../styles/common.scss';

.search-container {
  position: absolute;
  right: 100px;

  input {
    width: 185px;
    padding: 8px 15px;
    border-radius: 4px;
    outline: none;
    border: 1px solid $lightColor;
    color: $textActive;
    transition: all .2s;

    &:focus {
      border: 1px solid $baseColor;
      box-shadow: 0 0 2px 2px #93d0ff;
    }
  }

  @media screen and (max-width: 760px) {
    display: none;
  }
}
</style>
