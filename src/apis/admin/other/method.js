import request from '@/utils/http'

const getToken = () => localStorage.getItem('token')
export const addMethodAPI = (name) => {
  return request({
    url:`/admin/method`,
    method:'POST',
    data: {
      name
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const getMethodsAPI = () => {
  return request({
    url:`/admin/methods`,
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const putMethodAPI = ({id, name}) => {
  return request({
    url:`/admin/methods/${id}/relist`,
    method:'PUT',
    data: {
      name
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const removeMethodAPI = ({id}) => {
  return request({
    url:`/admin/methods/${id}/remove`,
    method:'POST',
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const relistMethodAPI = ({id}) => {
  return request({
    url:`/admin/methods/${id}/relist`,
    method:'POST',
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const delMethodAPI = ({id}) => {
  return request({
    url:`/admin/methods/${id}`,
    method:'DELETE',
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}