import { cloudMusicRequest } from './request'

export function getCloudMusicData() {
  return cloudMusicRequest({
    url: '/music/order/list',
    params: {

    },
  })
}