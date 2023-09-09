import request from '@/utils/http'

const getToken = () => localStorage.getItem('token')

export const getMethodsAPI = () => {
  return request({
    url:`/admin/methods`,
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const addMethodAPI = ({name}) => {
  return request({
    url:`/admin/method`,
    method:'POST',
    data: {
      name
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const putMethodAPI = ({id, name}) => {
  return request({
    url:`/admin/method`,
    method:'PUT',
    data: {
      id,
      name
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const removeMethodAPI = ({id}) => {
  return request({
    url:`/admin/method/remove`,
    method:'POST',
    data:{
      id
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const relistMethodAPI = ({id}) => {
  return request({
    url:`/admin/method/relist`,
    method:'POST',
    data:{
      id
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const delMethodAPI = ({id}) => {
  return request({
    url:`/admin/method`,
    method:'DELETE',
    data:{
      id
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}