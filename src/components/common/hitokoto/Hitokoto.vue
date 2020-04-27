<template>
  <p class="sentence">{{ sentence }}</p>
</template>

<script>
  import { getHitokotoData } from 'network/hitokoto.js'

  export default {
    name: 'Hitokoto',
    data() {
      return {
        sentence: '',
      }
    },
    mounted() {
      getHitokotoData().then(res => {
        this.sentence = res
      })
    },
  }
</script>

<style scoped>
  .sentence {
    padding: 5px;
  }
</style>