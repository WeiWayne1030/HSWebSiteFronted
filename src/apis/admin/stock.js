import request from '@/utils/http'
const getToken = () => localStorage.getItem('token')


export const getStocksAPI = ({CategoryId, state, productNumber}) => {
  const searchParams = new URLSearchParams(CategoryId, state, productNumber);
  return request({
    url: `/admin/stocks?${searchParams.toString()}`,
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}