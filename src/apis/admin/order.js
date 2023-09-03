import request from '@/utils/http'
const getToken = () => localStorage.getItem('token')


export const getOrdersAPI = ( state, currentPage, orderNumber,MethodId ) => {
  const searchParams = new URLSearchParams( currentPage, state, orderNumber, MethodId );
  return request({
    url: `/admin/orders?${searchParams.toString()}`,
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}