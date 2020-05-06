<template>
  <div class="funcs">
    <func-item v-for="(func, index) in funcs" :key="index" :func="func"/>
  </div>
</template>

<script>
  import FuncItem from './FuncItem'

  export default {
    name: 'MainFunc',
    components: {
      FuncItem,
    },
    data() {
      return {
        funcs: [
          {
            icon: 'icon-RectangleCopy',
            text: '每日推荐',
            path: 'daily_songs'
          },
          {
            icon: 'icon-SongListgedan',
            text: '歌单',            
          },
          {
            icon: 'icon-PCbofangye_paihangbang',
            text: '排行榜',
          },
          {
            icon: 'icon-guangdie',
            text: '电台',
          },
          {
            icon: 'icon-zhibohuifang',
            text: '直播',
          },
        ]
      }
    },
  }
</script>

<style scoped>
  .funcs {
    display: flex;
    justify-content: space-between;
    width: 93.6vw;
    position: absolute;
    left: 3.2vw;
    margin-top: 10px;
  }
</style>