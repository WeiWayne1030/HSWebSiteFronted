import request from '@/utils/http'

const getToken = () => localStorage.getItem('token')

export const getCategoriesAPI = () => {
  return request({
    url:`/admin/categories`,
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const addCategoryAPI = ({name}) => {
  return request({
    url:`/admin/category`,
    method:'POST',
    data: {
      name
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const putCategoryAPI = ({id, name}) => {
  return request({
    url:`/admin/category`,
    method:'PUT',
    data: {
      id,
      name
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const removeCategoryAPI = ({id}) => {
  return request({
    url:`/admin/category/remove`,
    method:'POST',
    data:{
      id
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const relistCategoryAPI = ({id}) => {
  return request({
    url:`/admin/category/relist`,
    method:'POST',
    data:{
      id
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const delCategoryAPI = ({id}) => {
  return request({
    url:`/admin/category`,
    method:'DELETE',
    data:{
      id
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}