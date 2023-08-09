import httpInstance from '@/utils/http';

function getItemsApi(categoryId) {
  const searchParams = new URLSearchParams(categoryId);
  return httpInstance({
    url: `/items?${searchParams.toString()}`,  
    method: 'get'
  })
}

export default getItemsApi