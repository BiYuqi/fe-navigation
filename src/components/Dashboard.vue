<template>
  <div class="content-area">
    <h1>{{$route.name}}</h1>
  </div>
</template>

<script>
import LinkData from '@/assets/basedata.json'
export default {
  watch: {
    '$route.name' () {
      console.log(this.$router)
    }
  },
  mounted () {
    console.log(LinkData, 'fsfsdf')
  }
}
</script>
<style lang="scss">
.content-area {
  padding: 15px;
  flex: 1;
}
</style>
