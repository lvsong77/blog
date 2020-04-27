import { request } from './request'
import { cloudMusicPath } from './baseURL'

export function getCloudMusicData() {
  return request({
    url: cloudMusicPath,
    params: {
      type: 'song',
      id: 521493845
    }
  })
}

// export function getHomeGoods(type, page) {
//   return request({
//     url: '/home/data',
//     params: {
//       type,
//       page
//     }
//   })
// }
