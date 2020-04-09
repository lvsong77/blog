<template>
  <div class="home">
    initial done.
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'

  export default {
    name: 'Home',
    components: {
      MainTabBar,
    },
    data() {
      return {
        active: 'home'
      }
    },
  }
</script>
