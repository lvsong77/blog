export default {
  // mutations唯一的目的就是修改state中的状态
  // mutations中的每个方法尽可能完成的事情比较单一一点
  replacePlayList(state, payload) {
    state.historyPlayList = state.prevPlayList
    state.prevPlayList = state.playList
    state.playList = payload
  },
  changeMusic(state, payload) {
    state.currentMusic = payload
  }
}