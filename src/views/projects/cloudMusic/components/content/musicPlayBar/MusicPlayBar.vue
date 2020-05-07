<template>
  <div class="bar">
    <audio ref="audio" @canplay="playMusic"></audio>
    <div class="leftPart">
      <img class="cover" :src="songInfo.cover" alt="">
      <div class="info">
        <p class="title">{{ songInfo.name }}</p>
        <p class="artist">{{ songInfo.artist }}</p>
      </div>
    </div>
    <div class="rightPart">
      <div class="playPauseButton">

      </div>
    </div>
  </div>
</template>

<script>
  import { getSongUrl } from 'network/cloudMusic'

  import { mapGetters } from 'vuex'

  export default {
    name: 'MusicPlayBar',
    data() {
      return {
        songInfo: {
          cover: '',
          name: '',
          artist: ''
        },
      }
    },
    computed: {
      ...mapGetters(['currentMusic']),
    },
    watch: {
      currentMusic(newValue, oldValue) {
        this.switchMusic(newValue)
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

        // 动态给audio赋值
        this.$refs.audio.src = song.url
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
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .leftPart {
    width: 80vw;
    display: flex;
    align-items: center;
  }

  .cover {
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
    margin: 0 1vw;
    object-fit: cover;
  }

  .title {
    font-size: 0.8rem;
    color: #424242;
    margin-bottom: 5px;
  }

  .artist {
    font-size: 0.6rem;
    color: #757575;
  }

  .title, .artist {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 60vw;
  }

  .rightPart {
    width: 20vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .playPauseButton {
    width: 7vw;
    height: 7vw;
    border: 1px solid #BDBDBD;
    border-radius: 50%;
  }

  .progress {

  }
</style>