
export const fetchApi = async (path, method, headers, body=null) => {
  const baseURL = 'https://dummyjson.com'

  const rawResponse = await fetch(`${baseURL}${path}`, {
    method: method,
    headers: headers,
    body: body ? JSON.stringify(body) : null
  });
  return rawResponse
}
