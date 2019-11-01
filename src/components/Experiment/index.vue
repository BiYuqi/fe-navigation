<template>
  <div class="experiment-container">
    <left-side></left-side>
    <right-side></right-side>
  </div>
</template>

<script>
import LeftSide from './LeftSide'
import RightSide from './RightSide'
export default {
  components: {
    LeftSide,
    RightSide
  }
}
</script>

<style lang="scss">
.experiment-container {
  width: 100%;
  max-height: 555px;
  box-shadow: 0 4px 18px -4px rgba(0,0,0,.1);
  background-color: #fff;
  display: flex;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
}
</style>
