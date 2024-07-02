import request from '@utils/request'

export const loginByJson = (data: any) => {
  return request({
    url: '/u/loginByJson',
    method: 'post',
    data
  })
}
