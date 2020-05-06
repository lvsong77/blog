import { cloudMusicRequest } from './request'

// 登录
export function cloudMusicLogin(params) {
  return cloudMusicRequest({
    url: '/login/cellphone',
    params
  })
}

// 获取发现页banner
export function getBanner(params) {
  return cloudMusicRequest({
    url: '/banner',
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