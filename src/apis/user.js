import request from '@/utils/http'
const getToken = () => localStorage.getItem('token')
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

export const adminSigninAPI = ({ account, password }) => {
  return request({
    url:'/admin/signin',
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

export const addCartAPI = ({ColorId,itemQuantity}) => {
  return request({
    url:'/cart',
    method:'POST',
    data: {
      ColorId,
      itemQuantity
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
};