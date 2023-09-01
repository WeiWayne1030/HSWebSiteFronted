import request from '@/utils/http'

const getToken = () => localStorage.getItem('token')
export const buildOrderAPI = ({ shipName, address, shipTel, MethodId }) => {
  return request({
    url:`/orders`,
    method:'POST',
    data: {
      shipName, 
      address, 
      shipTel, 
      MethodId
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const getOrdersAPI = () =>{
  // const searchParams = new URLSearchParams({ MethodId, state, orderNumber })
  return request({
    url: `/orders`,
    headers: { Authorization: `Bearer ${getToken()}` }
  }) 
}