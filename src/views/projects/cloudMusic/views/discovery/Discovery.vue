<template>
  <div class="discovery">
    <discovery-banner/>
    <main-func/>
  </div>
</template>

<script>
  import DiscoveryBanner from './childComps/discoveryBanner/DiscoveryBanner'
  import MainFunc from './childComps/mainFunc/MainFunc'

  export default {
    name: 'Discovery',
    components: {
      DiscoveryBanner,
      MainFunc
    },
    mounted () {
      ;
    },
  }
</script>

<style scoped>
  .discovery {
    background-color: #FFF;
  }
</style>