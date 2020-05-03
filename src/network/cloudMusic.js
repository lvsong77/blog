import { cloudMusicRequest } from './request'

export function getCloudMusicData() {
  return cloudMusicRequest({
    url: '/login/cellphone',
    params: {
      phone: 13281169071,
      password: 'Lv3Song1'
    },
  })
}