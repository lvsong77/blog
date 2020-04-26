<template>
  <vant-tab-bar :tabs="tabs"/>
</template>

<script>
  import VantTabBar from 'components/common/vantTabBar/VantTabBar'

  export default {
    name: 'mainTabBar',
    components: {
      VantTabBar,
    },
    data() {
      return {
        tabs: [
          {
            name: 'home',
            icon: 'home-o',
            text: 'Home',
          },
          {
            name: 'projects',
            icon: 'apps-o',
            text: 'Projects',
          },
          {
            name: 'about',
            icon: 'user-o',
            text: 'About',
          },
        ],
      }
    },
  }
</script>

<style>

</style>