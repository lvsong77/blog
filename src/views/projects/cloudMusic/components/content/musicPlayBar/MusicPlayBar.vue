<template>
  <div class="bar">
    <audio ref="audio"
           @canplay="playMusic"
           @timeupdate="updateTime"
           @ended="songEnd"></audio>
    <div class="leftPart">
      <img class="cover" :src="songInfo.cover" alt="">
      <div class="info">
        <p class="title">{{ songInfo.name }}</p>
        <p class="artist">{{ songInfo.artist }}</p>
      </div>
    </div>
    <div class="rightPart">
      <div class="playPauseButton" @click="palyOrPause">
        <van-circle v-model="progress"
                    rate="0"
                    size="100%"
                    color="#E53935"
                    layer-color="#424242"/>
        <i class="iconfont button" :class="buttonStatus"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import { getSongUrl } from 'network/cloudMusic'

  import { mapGetters, mapActions } from 'vuex'

  import { getRandomInt } from 'common/utils'

  export default {
    name: 'MusicPlayBar',
    data() {
      return {
        songInfo: {
          cover: '',
          name: '',
          artist: ''
        },
        progress: 0,
        playing: false,
        switchMethod: 0, // 0: 列表播放, 1: 随机播放, 2: 单曲循环
      }
    },
    computed: {
      ...mapGetters(['currentMusic', 'playList']),
      buttonStatus() {
        return this.playing ? 'icon-zanting' : 'icon-bofangsanjiaoxing'
      }
    },
    watch: {
      currentMusic(newValue, oldValue) {
        this.switchMusic(newValue)
      }
    },
    methods: {
      ...mapActions(['changeMusic']),
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

        this.playing = true
      },
      playMusic() {
        let audio = this.$refs.audio
        audio.play()
        this.playing = true
      },
      pauseMusic() {
        let audio = this.$refs.audio
        audio.pause()
        this.playing = false
      },
      palyOrPause() {
        if (this.playing) {
          this.pauseMusic()
        } else {
          this.playMusic()
        }
      },
      updateTime(e) {
        let currentTime = e.target.currentTime
        let duration = e.target.duration
        this.progress = currentTime / duration * 100
      },
      songEnd() {
        let song

        if (this.switchMethod === 0) {
          for (let i = 0; i < this.playList.list.length; i++) {
            const item = this.playList.list[i];
            if (item.id === this.currentMusic.id) {
              song = this.playList.list[i + 1]
              break
            }
          }

          this.changeMusic(song)
        } else if (this.switchMethod === 1) {
          let listLength = this.playList.list.length
          let randomIndex = getRandomInt(listLength)
          song = this.playList.list[randomIndex]

          this.changeMusic(song)
        } else if (this.switchMethod === 2) {
          this.playMusic()
        }

        
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
    position: relative;
    right: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button {
    position: absolute;
  }

  .icon-bofangsanjiaoxing {
    color: #424242;
    left: 50%;
    top: 50%;
    transform: translate(-40%, -55%);
  }

  .icon-zanting {
    color: #E53935;
    left: 50%;
    top: 50%;
    transform: translate(-45%, -55%);
  }
</style>