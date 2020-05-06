<template>
  <div>
    <main-nav-bar v-if="showNavBar"/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import MainNavBar from './components/content/mainNavBar/MainNavBar'

  export default {
    name: 'cloudMusic',
    components: {
      MainNavBar,
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
      }
    },
  }
</script>

<style>

</style>