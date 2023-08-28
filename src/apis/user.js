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

export const addCartAPI = ({ColorId,itemquantity}) => {
  return request({
    url:'/cart',
    method:'POST',
    data: {
      ColorId,
      itemquantity
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
};