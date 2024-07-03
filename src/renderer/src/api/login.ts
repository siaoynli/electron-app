import request from '@utils/request'

//图形验证码
export const captchaImage = (params: any): Promise<ArrayBuffer> => {
  return request({
    url: '/captcha/image',
    method: 'get',
    //arraybuffer 小写
    responseType: 'arraybuffer',
    params
  })
}


//用户登陆
export const loginByJson = (data: any) => {
  return request({
    url: '/u/loginByJson',
    method: 'post',
    data
  })
}
