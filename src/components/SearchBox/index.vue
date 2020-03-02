<template>
  <div class="search-container">
    <input
      type="text"
      @input="handleSearchEvent"
      v-model="searchVal"
      placeholder="请输入查询关键字查询..." />
      <button class="search-container__clear" @click="reset">重置</button>
    <ul class="search-container__list" v-if="searchResult">
      <li
        :key="index"
        v-for="(result, index) in searchResult">
        <a :href="result.link" target="__blank">{{result.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import navData from '@json/basedata.json'
export default {
  data () {
    return {
      searchVal: '',
      searchResult: null,
      worker: null
    }
  },
  methods: {
    handleSearchEvent (e) {
      this.worker.postMessage({
        type: 'searchVal',
        data: e.target.value.toLowerCase()
      })
    },
    reset () {
      this.searchResult = null
      this.searchVal = ''
    },
    generageWorkerLogic () {
      return `
        function flattenBlogData(allData) {
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

        function toLowerCase(value) {
          if (typeof value === 'string') {
            return value.toLowerCase()
          }

          if (Array.isArray(value)) {
            return value.map(v => v.toLowerCase())
          }

          return value
        }

        onmessage = (event) => {
          const { type, data } = event.data
          if (type === 'initial') {
            self.result = flattenBlogData(data)
          }

          if (type === 'searchVal') {
            if (!data) return
            const result = self.result.filter(item => {
              if (
                toLowerCase(item.name).indexOf(data) > -1 ||
                (item.description && toLowerCase(item.description).indexOf(data) > -1) ||
                (item.tag && item.tag.length > 1 && toLowerCase(item.tag).includes(data))
                ) {
                return true
              }
            })

            postMessage({
              type: 'returnVal',
              data: result
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
      if (type === 'returnVal') {
        this.searchResult = data
      }
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
    width: 200px;
    padding: 8px 15px;
    outline: none;
    border: 1px solid $lightColor;
    color: $textActive;
    transition: all .2s;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-right: none;

    &:focus {
      border: 1px solid $baseColor;
      box-shadow: 0 0 2px 2px #93d0ff;
    }
  }

  &__clear {
    border: 1px solid $baseColor;
    outline: none;
    padding: 8px 15px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #fff;
    color: $baseColor;
    cursor: pointer;
    transition: all .24s;

    &:hover {
      background-color: $baseColor;
      color: #fff;
    }
  }

  &__list {
    list-style: none;
    position: absolute;
    top: 33px;
    left: 0;
    width: 400px;
    background-color: #fff;
    padding: 15px;
    max-height: 500px;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    z-index: 888;
    border: 1px solid $baseColor;
    box-shadow: 0 1px 8px 0px #93d0ff;

    li {
      width: 45%;
      padding: 8px;
      margin-bottom: 15px;
      margin-right: 10px;
      border-radius: 5px;
      border: 1px solid #ddd;
      background-color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space:nowrap
    }

    a {
      color: $baseColor;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 760px) {
    display: none;
  }
}
</style>
