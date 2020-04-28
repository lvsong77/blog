import { cloudMusicRequest } from './request'
import { cloudMusicData } from './authorization'

export function getCloudMusicData() {
  return cloudMusicRequest({
    url: '/music/order/list',
    params: {
      app_id: cloudMusicData.app_id,
      app_secret: cloudMusicData.app_secret
    },
  })
}