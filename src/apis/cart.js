import request from '@/utils/http'
export const addCartAPI = ({ account, password }) => {
  return request({
    url:'',
    method:'POST',
    data: {
      account,
      password
    }
  })
}