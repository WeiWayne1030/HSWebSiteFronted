import request from '@/utils/http'

const getToken = () => localStorage.getItem('token')
export const addColorAPI = ({name}) => {
  return request({
    url:`/admin/color`,
    method:'POST',
    data: {
      name,
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const getColorsAPI = () => {
  return request({
    url:`/admin/colors`,
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}

export const delColorAPI = (name) => {
  return request({
    url:`/admin/color`,
    method:'DELETE',
    data: {
      name
    },
    headers: { Authorization: `Bearer ${getToken()}` }
  })
}
