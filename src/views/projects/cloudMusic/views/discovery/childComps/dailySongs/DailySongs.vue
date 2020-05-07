<template>
  <div>
    <daily-songs-nav-bar/>
    <play-list :list="list"/>
  </div>
</template>

<script>
  import DailySongsNavBar from './DailySongsNavBar'
  import PlayList from 'views/projects/cloudMusic/components/content/playList/PlayList'

  import { getLoginStatus, getDailyRecommendSongs } from 'network/cloudMusic'

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
    mounted () {
      getDailyRecommendSongs().then(res => {
        console.log(res);
        this.list = res.recommend
      })
    },
  }
</script>

<style>

</style>