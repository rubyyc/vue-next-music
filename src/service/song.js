import { get } from './base'
export function processSongs (songs) {
  if (!songs.length) {
    return Promise.resolve(songs)
  }
  return get('/api/getSongsUrl', {
    mid: songs.map(song => {
      return song.mid
    })
  }).then(result => {
    // console.log(result)
    if (result === undefined) {
      return
    }
    const map = result.map
    return songs.map(song => {
      song.url = map[song.mid]
      return song
    }).filter(song => {
      return song.url.indexOf('vkey') > -1
    })
  })
}
