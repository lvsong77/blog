import { cloudMusicRequest } from './request'

export function cloudMusicLogin(params) {
  return cloudMusicRequest({
    url: '/login/cellphone',
    params
  })
}