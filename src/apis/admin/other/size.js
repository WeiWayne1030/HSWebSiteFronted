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
    url:`/admin/sizes/${id}/relist`,
    method:'PUT',
    data: {
      name
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const removeSizeAPI = ({id}) => {
  return request({
    url:`/admin/sizes/${id}/remove`,
    method:'POST',
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const relistSizeAPI = ({id}) => {
  return request({
    url:`/admin/sizes/${id}/relist`,
    method:'POST',
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const delSizeAPI = ({id}) => {
  return request({
    url:`/admin/sizes/${id}`,
    method:'DELETE',
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}