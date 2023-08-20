import request from '@/utils/http'
export const getItemsAPI = (CategoryId) => {
  const searchParams = new URLSearchParams({ CategoryId });
  return request({
    url: `/items?${searchParams.toString()}`,
  })
}
