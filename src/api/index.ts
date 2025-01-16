import request from '@/utils/request'


// 登录
export function delteUser(data:any) {
  return request({
    url: '/v3/user/delete?bType=json',
    method: 'post',
    data
  })
}
