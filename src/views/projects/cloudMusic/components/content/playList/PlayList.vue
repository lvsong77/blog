<template>
  <scroll class="content"
          ref="scroll"
          :probe-type="3"
          :pull-up-load="true">
    <play-list-item v-for="(song, index) in list"
                    :song="song"
                    :key="index"
                    @imgLoad="imgLoad"
                    @click.native="clickListItem(song)"/>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import PlayListItem from './PlayListitem'

  import { debounce } from 'common/utils'

  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'PlayList',
    components: {
      Scroll,
      PlayListItem,
    },
    props: {
      list: {
        type: Array,
        default: []
      },
    },
    data() {
      return {
        saveY: 0,
        refresh: null,
      }
    },
    mounted() {
      // 定义refresh，用于防抖
      this.refresh = debounce(this.$refs.scroll.refresh, 200)
    },
    methods: {
      ...mapActions(['replacePlayList', 'changeMusic']),
      imgLoad() {
        this.refresh()
      },
      clickListItem(song) {
        // 判断是否更换歌单
        let currentListId = this.playList.listId
        if (currentListId !== this.listId) {
          let list = {
            list: this.list,
            listId: this.listId
          }
          this.replacePlayList(list)
        }

        // 更新当前播放音乐
        this.changeMusic(song)
      }
    },
    computed: {
      ...mapGetters(['playList']),
      // 播放列表标识，用列表所有歌曲id连成一个字符串，用来标识不同列表
      listId() {
        let listId = ''
        for (const item of this.list) {
          listId += item.id
        }
        return listId
      },
    }
  }
</script>

<style scoped>

</style>