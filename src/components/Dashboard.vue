<template>
  <div class="content-area">
    <template v-for="(parent, key) in initialData">
      <section class="content-area__section" :key="key">
        <p class="content-area__title">{{mappingRule[key]}}</p>
        <ul>
          <li class="content-area__link" v-for="(child, index) in parent" :key="index">
            <a v-bind:title="child.description || child.name" v-bind:href="child.link" target="_blank">
              <p class="content-area__name">{{child.name}}</p>
              <span class="content-area__desc" v-if="child.description">
                {{child.description}}
              </span>
              <span class="content-area__desc" v-else>
                描述正在整理补充中...
              </span>
              <!-- <p class="content-area__tag" v-if="child.tag">
                <i v-for="(label, index) in child.tag" :key="index">{{label}}</i>
              </p> -->
            </a>
          </li>
        </ul>
      </section>
    </template>
  </div>
</template>

<script>
import LinkData from '@json/basedata.json'
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
  width: calc(100% - 180px);
  padding: 15px;
  flex: 1;
  background-color: #f0f0f0;

  ul, li {
    list-style: none;
  }

  ul {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
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
      top: 4px;
      display: block;
      content: "";
      width: 4px;
      height: 18px;
      background-color: #00beb3;
    }
  }

  &__link {
    display: inline-block;
    margin: 6px;
    border-radius: 3px;
    border: 1px solid #ddd;
    background-color: #fff;
    transition: all .24s;
    width: 19%;
    overflow: hidden;
    min-height: 100px;

    &:hover {
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    }
    a {
      color: #757575;
      text-decoration: none;
      display: block;
      padding: 12px 16px;
      font-size: 14px;

      &:visited,
      &:focus {
        color: #757575;
      }
    }
  }

  &__name {
    color: #3e3c3c;
    font-size: 16px;
  }

  &__desc {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    padding: 10px;

    &__link {
      width: 100%;
      margin: 0 0 15px;

      a {
        font-size: 14px;
      }
    }
  }
}
</style>
