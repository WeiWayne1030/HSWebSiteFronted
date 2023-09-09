import request from '@/utils/http'
const getToken = () => localStorage.getItem('token')


export const getItemsAPI = ({CategoryId, state}) => {
  const searchParams = new URLSearchParams(CategoryId, state);
  return request({
    url: `/admin/items?${searchParams.toString()}`,
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const removeItemAPI = (id) => {
    return request({
    url:`/admin/items/${id}/remove`,
    method:'POST',
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const relistItemAPI = (id) => {
    return request({
    url:`/admin/items/${id}/relist`,
    method:'POST',
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const addItemAPI = ({ name, price, description, CategoryId, image}) => {
    return request({
    url:`/admin/items`,
    method:'POST',
    data:{
      name, 
      price, 
      description, 
      CategoryId, 
      image
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}