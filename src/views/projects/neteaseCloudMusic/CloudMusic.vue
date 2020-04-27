<template>
  <div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
  import NavBar from './components/content/navBar/NavBar'

  import { getCloudMusicData } from 'network/cloudMusic'

  export default {
    name: 'cloudMusic',
    components: {
      NavBar,
    },
    data() {
      return {
        data: ''
      }
    },
    mounted() {
      getCloudMusicData().then(res => {
        console.log(res);
        
      })
    },
  }
</script>

<style>

</style>