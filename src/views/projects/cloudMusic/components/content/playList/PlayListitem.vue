<template>
  <div class="listItem">
    <div class="leftPart">
      <img v-if="showCover" class="cover" :src="song.album.picUrl" alt="" @load="imgLoad">
      <i v-else class="iconfont icon-laba cover"></i>
      <div class="info">
        <p class="title">{{ song.name }}</p>
        <p class="artistAndAlbum">{{ artistAndAlbum }}</p>
      </div>
    </div>
    <div class="rightPart">
      <i class="iconfont icon-yuandiancaidan"></i>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'PlayListItem',
    props: {
      song: {
        type: Object,
        default: {}
      },
    },
    computed: {
      ...mapGetters(['currentMusic']),
      showCover() {
        if (this.currentMusic.id !== this.song.id) {
          return true
        } else {
          return false
        }
      },
      artistAndAlbum() {
        let artist = []

        let artists = this.song.artists
        for (const item of artists) {
          artist.push(item.name)
        }

        let album = this.song.album.name

        let aaa = artist.join('/') + ' - ' + album // short for 'artistAndAlbum'

        return aaa
      }
    },
    methods: {
      imgLoad() {
        this.$emit('imgLoad')
      }
    },
  }
</script>

<style scoped>
  .listItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3.2vw;
  }

  .leftPart {
    width: 80vw;
    display: flex;
    align-items: center;
  }

  .cover {
    width: 12vw;
    height: 12vw;
    border-radius: 5px;
    margin-right: 3.2vw;
    object-fit: cover;
  }

  .title {
    font-size: 1rem;
    color: #424242;
    margin-bottom: 5px;
  }

  .artistAndAlbum {
    font-size: 0.8rem;
    color: #757575;
  }

  .title, .artistAndAlbum {
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

  .icon-yuandiancaidan {
    color: #BDBDBD;
  }

  .icon-laba {
    text-align: center;
    line-height: 12vw;
    color: #E53935;
  }
</style>