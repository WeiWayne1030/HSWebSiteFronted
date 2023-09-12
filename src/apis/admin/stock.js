import request from '@/utils/http'
const getToken = () => localStorage.getItem('token')


export const getStocksAPI = ({CategoryId, state, productNumber}) => {
  const searchParams = new URLSearchParams(CategoryId, state, productNumber);
  return request({
    url: `/admin/stocks?${searchParams.toString()}`,
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const putStockNumberAPI = ({productNumber, itemStock}) => {
  return request({
    url: `/admin/itemStock`,
    method:"PUT",
    data: {
      productNumber,
      itemStock
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const addStockAPI = ({ItemId, colorName , SizeId, itemStock }) => {
  return request({
    url: `/admin/stock`,
    method:"POST",
    data: {
      ItemId, 
      colorName, 
      SizeId, 
      itemStock
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}