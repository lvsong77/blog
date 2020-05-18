<template>
  <div class="dailySongs">
    <daily-songs-nav-bar/>
    <play-list :list="list" :class="playListClass"/>
  </div>
</template>

<script>
  import DailySongsNavBar from './DailySongsNavBar'
  import PlayList from 'views/projects/cloudMusic/components/content/playList/PlayList'

  import { getDailyRecommendSongs } from 'network/cloudMusic'

  export default {
    name: 'DailySongs',
    components: {
      DailySongsNavBar,
      PlayList
    },
    data() {
      return {
        list: []
      }
    },
    computed: {
      playListClass() {
        if (this.$store.getters.currentMusic.id) {
          return 'hasPlayBar'
        } else {
          return 'noPlayBar'
        }
      }
    },
    mounted () {
      getDailyRecommendSongs().then(res => {
        console.log(res);
        this.list = res.recommend
      })
    },
  }
</script>

<style scoped>
  .dailySongs {
    background-color: #fff;
  }
  .noPlayBar {
    height: calc(100vh - 70px)
  }
  .hasPlayBar {
    height: calc(100vh - 110px)
  }
</style>