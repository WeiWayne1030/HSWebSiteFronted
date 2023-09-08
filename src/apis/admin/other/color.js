import request from '@/utils/http'

const getToken = () => localStorage.getItem('token')
export const addColorAPI = (name) => {
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

// export const delColorAPI = ({id}) => {
//   return request({
//     url:`/admin/colors/${id}`,
//     method:'DELETE',
//     headers: { Authorization: `Bearer ${getToken()}` }
//   })
// }
