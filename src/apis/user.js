import request from '@/utils/http'
export const signinAPI = ({ account, password }) => {
  return request({
    url:'/users/signin',
    method:'POST',
    data: {
      account,
      password
    }
  })
}

export const signupAPI = ( { name, account, password, email } ) => {
  return request({
    url:'/users',
    method:'POST',
    data: {
      name,
      account,
      password,
      email
    }
  })
}