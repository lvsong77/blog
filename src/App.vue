<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <main-tab-bar v-if="$route.meta.showTab"/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'

  export default {
    name: 'App',
    components: {
      MainTabBar,
    },
  }
</script>

<style scoped>
  @import "assets/css/base.css";
</style>
