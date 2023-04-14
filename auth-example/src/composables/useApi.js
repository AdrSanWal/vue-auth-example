
export const fetchApi = async (path, method, auth=null, body=null) => {
  const baseURL = 'https://dummyjson.com'

  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }

  const rawResponse = await fetch(`${baseURL}${path}`, {
    method: method,
    headers: {...headers, ...auth},
    body: body ? JSON.stringify(body) : null
  });
  return rawResponse
}
