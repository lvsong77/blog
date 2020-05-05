import { cloudMusicRequest } from './request'

export function cloudMusicLogin(params) {
  return cloudMusicRequest({
    url: '/login/cellphone',
    params
  })
}

export function getBanner(params) {
  return cloudMusicRequest({
    url: '/banner',
    params
  })
}

export function getPlayList(params) {
  return cloudMusicRequest({
    url: '/user/playlist',
    params
  })
}