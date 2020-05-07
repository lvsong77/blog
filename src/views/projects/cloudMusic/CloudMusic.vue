<template>
  <div>
    <main-nav-bar v-if="showNavBar"/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <music-play-bar v-show="showPlayBar"/>
  </div>
</template>

<script>
  import MainNavBar from './components/content/mainNavBar/MainNavBar'
  import MusicPlayBar from './components/content/musicPlayBar/MusicPlayBar'

  export default {
    name: 'cloudMusic',
    components: {
      MainNavBar,
      MusicPlayBar
    },
    computed: {
      showNavBar() {
        let path = this.$route.fullPath
        let mainPages = ['mine', 'discovery', 'village', 'video']
        for (const item of mainPages) {
          if (path.indexOf(item) !== -1) {
            return true
          }
        }
        return false
      },
      showPlayBar() {
        if (this.$store.getters.currentMusic.id) {
          return true
        } else {
          return false
        }
      }
    },
  }
</script>

<style>

</style>