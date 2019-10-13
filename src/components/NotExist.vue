<template>
  <div class="not-found-page">
    Page can not found. please back to: <br />
    <button class="not-found-page__button" @click="goHome">Home Page</button>.
  </div>
</template>

<script>
export default {
  methods: {
    goHome () {
      this.$router.push({
        path: '/tech-blog'
      })
    }
  }
}
</script>
<style lang="scss">
.not-found-page {
  text-align: center;
  font-size: 16px;
  height: 100px;
  line-height: 100px;
  font-size: 18px;

  &__button {
    padding: 10px 15px;
    background-color: #00beb3;
    color: #fff;
  }
}
</style>
