<template>
  <div>
    dailysongs
  </div>
</template>

<script>
  import { getDailyRecommendSongs } from 'network/cloudMusic'

  export default {
    name: 'DailySongs',
    mounted () {
      getDailyRecommendSongs().then(res => {
        console.log(res);
        
      })
    },
  }
</script>

<style>

</style>