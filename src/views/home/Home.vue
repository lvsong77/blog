<template>
  <div class="home">
    home
    <hitokoto class="hitokoto"/>
  </div>
</template>

<script>
  import Hitokoto from 'components/common/hitokoto/Hitokoto'

  export default {
    name: 'Home',
    components: {
      Hitokoto
    },
  }
</script>

<style scoped>
  .hitokoto {
    width: 100vw;
    position: fixed;
    bottom: 55px;
  }
</style>