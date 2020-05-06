<template>
  <div>
    <main-nav-bar/>
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
  }
</script>

<style>

</style>