import httpInstance from '@/utils/http';

export function getItemsApi(categoryId) {
  return httpInstance({
    url: `/items?categoryId=${categoryId}`,
    method: 'get'
  })
}