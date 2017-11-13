import { request, config } from 'utils'

const { api } = config
const { userLogin, userLogin1 } = api

export async function login (data) {
  return request({
    url: userLogin1,
    method: 'post',
    data,
  })
}
