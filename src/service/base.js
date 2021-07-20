import axios from 'axios'

const baseUrl = '/'
const ERR_OK = 0

axios.defaults.baseURL = baseUrl

export function get (url, params) {
  console.log(222)
  return axios.get(url, {
    params
  }).then(res => {
    const serverData = res.data
    if (serverData.code === ERR_OK) {
      return serverData.result
    }
  }).catch(e => {
    console.log(e)
  })
}
