<template>
  <div>

  </div>
</template>

<script>
  import { getCloudMusicData } from 'network/cloudMusic'

  export default {
    name: 'cloudMusic',
    components: {

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