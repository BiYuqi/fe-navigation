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
                <github
                  :svg="svgGithub"
                  class="header-github"
                  v-if="isShowGithub(child)"
                  :href="child.github"
                  target="_blank">
                  <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </github>
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
      mappingRule: headMapping,
      svgGithub: {
        height: '20',
        width: '20',
        viewBox: '0 0 16 16'
      }
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
@import '../styles/common.scss';
.content-area {
  width: calc(100% - 180px);
  flex: 1;
  padding-top: 20px;

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
      background-color: $baseColor;
    }
  }

  &__link {
    display: inline-block;
    margin: 6px;
    width: 170px;
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap
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
    padding: 50px 10px 0;

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
