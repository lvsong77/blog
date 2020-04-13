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
            name: 'index',
            icon: 'home-o',
          },
          {
            name: 'projects',
            icon: 'apps-o',
          },
          {
            name: 'about',
            icon: 'user-o',
          },
        ]
      }
    },
  }
</script>

<style>

</style>