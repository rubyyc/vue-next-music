import { get } from './base'

export function getRecommend () {
  console.log(111)
  return get('/api/getRecommend')
}
