import { cloudMusicRequest } from './request'

// 登录
export function cloudMusicLogin(params) {
  return cloudMusicRequest({
    url: '/login/cellphone',
    params
  })
}

// 获取登录状态
export function getLoginStatus() {
  return cloudMusicRequest({
    url: '/login/status'
  })
}

// 获取发现页banner
export function getBanner(params) {
  return cloudMusicRequest({
    url: '/banner',
    params
  })
}

// 获取每日推荐歌曲
export function getDailyRecommendSongs(params) {
  return cloudMusicRequest({
    url: '/recommend/songs',
    params
  })
}

// 获取音乐url
export function getSongUrl(params) {
  return cloudMusicRequest({
    url: '/song/url',
    params
  })
}






// 获取播放列表
export function getPlayList(params) {
  return cloudMusicRequest({
    url: '/user/playlist',
    params
  })
}