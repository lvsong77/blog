import { getSongUrl } from 'network/cloudMusic'

export default {
  replacePlayList(context, payload) {
    return new Promise((resolve, reject) => {
      // payload为新歌单
      context.commit('replacePlayList', payload)
    })
  },
  changeMusic(context, payload) {
    return new Promise((resolve, reject) => {
      let id = payload.id
      getSongUrl({id}).then(res => {
        payload.url = res.data[0].url
        context.commit('changeMusic', payload)
      })
    })
  }
}