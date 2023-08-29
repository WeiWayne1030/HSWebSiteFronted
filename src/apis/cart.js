import request from '@/utils/http'
const getToken = () => localStorage.getItem('token')

export const getCartsAPI = (pagination) => {
  const searchParams = new URLSearchParams({ pagination });
  return request({
    url: `/carts?${searchParams.toString()}`,
    headers: { Authorization: `Bearer ${getToken()}` }
  })
};
