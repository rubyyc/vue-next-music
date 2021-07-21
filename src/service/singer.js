import { get } from './base'

export function getSingerList () {
  console.log(111)
  return get('/api/getSingerList')
}

export function getSingerDetail (singer) {
  return get('/api/getSingerDetail', {
    mid: singer.mid
  })
}
