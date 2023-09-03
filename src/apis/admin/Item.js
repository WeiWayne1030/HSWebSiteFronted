import request from '@/utils/http'
const getToken = () => localStorage.getItem('token')


export const getItemsAPI = ({CategoryId, state, productNumber}) => {
  const searchParams = new URLSearchParams(CategoryId, state, productNumber);
  return request({
    url: `/admin/items?${searchParams.toString()}`,
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}