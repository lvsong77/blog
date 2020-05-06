<template>
  <van-nav-bar :border="false">
    <template #left>
      <van-icon name="ellipsis" size="20" />
    </template>
    <template #title>
      <div class="navBarTitle">
        <div v-for="(title, index) in titles"
             :key="index"
             :class="{currentTitle: path.indexOf(title.path) !== -1}"
             :data-path="title.path"
             @click="clickTitle">
          {{ title.title }}     
        </div>
      </div>
    </template>
    <template #right>
      <van-icon name="search" size="20" />
    </template>
  </van-nav-bar>
</template>

<script>
  export default {
    name: 'MainNavBar',
    data() {
      return {
        titles: [
          {
            title: '我的',
            path: 'mine'
          },
          {
            title: '发现',
            path: 'discovery'
          },
          {
            title: '云村',
            path: 'village'
          },
          {
            title: '视频',
            path: 'video'
          },
        ],
      }
    },
    computed: {
      path() {
        return this.$route.fullPath
      }
    },
    methods: {
      clickTitle(e) {
        let path = e.target.dataset.path
        if (this.$route.fullPath.indexOf(path) === -1) {
          this.$router.replace(`/projects/cloud_music/${path}`)          
        }
      }
    },
  }
</script>

<style scoped>
  .van-nav-bar .van-icon {
    color: #424242;
  }

  .navBarTitle {
    display: flex;
    justify-content: space-around;
    font-size: 0.8rem;
    color: #757575;
  }

  .currentTitle {
    font-size: 1rem;
    color: #424242;
  }
</style>