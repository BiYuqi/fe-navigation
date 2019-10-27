<template>
  <div class="content-area">
    <template v-for="(parent, key) in initialData">
      <section class="content-area__section" :key="key">
        <p class="content-area__title">{{mappingRule[key] || key}}</p>
        <ul>
          <li class="content-area__link" v-for="(child, index) in parent" :key="index">
            <a class="content-area__link-a" v-bind:title="child.description || child.name" v-bind:href="child.link" target="_blank">
              <p class="content-area__name">
                <span>{{child.name}}</span>
                <github v-if="isShowGithub(child)" :href="child.github" :height="20" :width="20" />
              </p>
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
import Github from './Github'
import LinkData from '@json/basedata.json'
import { headMapping } from '@config/headMapping'
export default {
  data () {
    return {
      initialRouter: this.$router.currentRoute.name,
      initialData: LinkData[this.$router.currentRoute.name],
      mappingRule: headMapping
    }
  },
  watch: {
    '$route.name' () {
      this.initialRouter = this.$router.currentRoute.name
      this.initialData = LinkData[this.$router.currentRoute.name]
    }
  },
  methods: {
    isShowGithub (data) {
      return data.github && data.github !== ''
    }
  },
  mounted () {
    this.initialRouter = this.$router.currentRoute.name
    this.initialData = LinkData[this.$router.currentRoute.name]
  },
  components: {
    Github
  }
}
</script>
<style lang="scss">
.content-area {
  width: calc(100% - 180px);
  padding: 15px;
  flex: 1;
  background-color: #f0f0f0;
  min-height: 1024px;

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
    width: 19%;
    height: 85px;
    border-radius: 5px;
    border: 1px solid #ddd;
    background-color: #fff;
    transition: all .24s;

    &:hover {
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    }

    &-a {
      color: #8e8c8c;
      text-decoration: none;
      display: block;
      padding: 8px 12px;
      font-size: 12px;

      &:visited,
      &:focus {
        color: #8e8c8c;
      }
    }
  }

  &__name {
    color: #3e3c3c;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

      &-a {
        font-size: 12px;
      }
    }
  }
}
</style>
