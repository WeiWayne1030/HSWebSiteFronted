import request from '@/utils/http'
export const signinAPI = ( { account, password } ) => {
  return request({
    url:'/users/signin',
    method:'POST',
    data: {
      account,
      password
    }
  })
}