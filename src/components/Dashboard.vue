<template>
  <div class="content-area">
    <template v-for="(parent, key) in initialData">
      <section class="content-area__section" :key="key">
        <p class="content-area__title">{{mappingRule[key]}}</p>
        <ul>
          <li class="content-area__link" v-for="(child, index) in parent" :key="index">
            <a v-bind:href="child.link" target="_blank">{{child.name}}</a>
          </li>
        </ul>
      </section>
    </template>
  </div>
</template>

<script>
import LinkData from '@/assets/basedata.json'
import MappingRule from '@/utils/mapping'
export default {
  data () {
    return {
      initialRouter: this.$router.currentRoute.name,
      initialData: LinkData[this.$router.currentRoute.name],
      mappingRule: MappingRule
    }
  },
  watch: {
    '$route.name' () {
      this.initialRouter = this.$router.currentRoute.name
      this.initialData = LinkData[this.$router.currentRoute.name]
    }
  },
  mounted () {
    this.initialRouter = this.$router.currentRoute.name
    this.initialData = LinkData[this.$router.currentRoute.name]
  }
}
</script>
<style lang="scss">
.content-area {
  padding: 15px;
  flex: 1;

  ul, li {
    list-style: none;
  }

  ul {
    margin-top: 10px;
  }

  &__section {
    margin-bottom: 15px;
  }

  &__title {
    position: relative;
    padding-left: 8px;
    color: #333;
    font-weight: 700;
    text-align: left;
    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      content: "";
      width: 4px;
      height: 18px;
      background-color: #00beb3;
    }
  }

  &__link {
    display: inline-block;
    padding: 8px 12px;
    margin: 6px;
    width: auto;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #00beb3;
    background-color: #fff;
    transition: all .4s;

    a {
      color: #666;
      text-decoration: none;

      &:visited,
      &:focus {
        color: #666;
      }

      &:hover {
        color: #00beb3;
        font-weight: bold;
      }
    }

    &:hover {
      transform: translateY(-4px);
    }

  }
}
</style>
