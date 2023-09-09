import request from '@/utils/http'

const getToken = () => localStorage.getItem('token')
export const addSizeAPI = ({name}) => {
  return request({
    url:`/admin/size`,
    method:'POST',
    data: {
      name
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const getSizesAPI = () => {
  return request({
    url:`/admin/sizes`,
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const putSizeAPI = ({id, name}) => {
  return request({
    url:`/admin/size`,
    method:'PUT',
    data: {
      id,
      name
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const removeSizeAPI = ({id}) => {
  return request({
    url:`/admin/size/remove`,
    method:'POST',
    data:{
      id
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const relistSizeAPI = ({id}) => {
  return request({
    url:`/admin/size/relist`,
    method:'POST',
    data:{
      id
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const delSizeAPI = ({id}) => {
  return request({
    url:`/admin/size`,
    method:'DELETE',
    data:{
      id
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}