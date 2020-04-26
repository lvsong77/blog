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
            name: 'Home',
            icon: 'home-o',
          },
          {
            name: 'Projects',
            icon: 'apps-o',
          },
          {
            name: 'About',
            icon: 'user-o',
          },
        ],
      }
    },
  }
</script>

<style>

</style>