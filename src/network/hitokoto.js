import { request } from './request'
import { hitokotoPath } from './baseURL'

export function getHitokotoData() {
  return request({
    url: hitokotoPath
  })
}