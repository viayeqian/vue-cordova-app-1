import request from '@/utils/request'

export default {
  // 登录
  login (data) {
    return request({
      url: `/login/cellphone?phone=${data.username}&password=${data.password}`,
      method: 'get'
    })
  },
  // 获取用户信息
  getUserInfo () {
    return request({
      url: '/userinfo',
      method: 'get'
    })
  }
}
