import httpInstance from '@/utils/http';

function getItemsApi() {
  const searchParams = new URLSearchParams();
  return httpInstance({
    url: `/items?${searchParams.toString()}`,  
    method: 'get'
  })
}

export default getItemsApi