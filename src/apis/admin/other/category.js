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
    url:`/admin/categories/${id}/relist`,
    method:'PUT',
    data: {
      name
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const removeCategoryAPI = ({id}) => {
  return request({
    url:`/admin/categories/${id}/remove`,
    method:'POST',
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const relistCategoryAPI = ({id}) => {
  return request({
    url:`/admin/categories/${id}/relist`,
    method:'POST',
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const delCategoryAPI = ({id}) => {
  return request({
    url:`/admin/categories/${id}`,
    method:'DELETE',
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}