<template>
  <div class="bar">
    <audio :src="songInfo.url" ref="audio" @canplay="playMusic"></audio>
    <!-- <button @click="playMusic">play</button>
    <button @click="pauseMusic">pause</button> -->
  </div>
</template>

<script>
  import { getSongUrl } from 'network/cloudMusic'

  import { mapGetters } from 'vuex'

  export default {
    name: 'MusicPlayBar',
    data() {
      return {
        songInfo: {}
      }
    },
    computed: {
      ...mapGetters(['currentMusic']),
    },
    watch: {
      currentMusic(newValue, oldValue) {
        this.switchMusic(newValue)
        console.log(this.$refs.audio);
        
      }
    },
    methods: {
      switchMusic(song) {
        // 处理作者信息
        let artist = []
        let artists = song.artists
        for (const item of artists) {
          artist.push(item.name)
        }

        this.songInfo.id = song.id
        this.songInfo.cover = song.album.picUrl
        this.songInfo.name = song.name
        this.songInfo.artist = artist.join('/')
        this.songInfo.url = song.url

        // 播放歌曲
        // this.playMusic()
      },
      playMusic() {
        let audio = this.$refs.audio
        audio.play()
      },
      pauseMusic() {
        let audio = this.$refs.audio
        audio.pause()
      }
    },
  }
</script>

<style scoped>
  .bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    background-color: #FAFAFA;
    height: 46px;
    border-top: 1px solid #E0E0E0;
  }
</style>