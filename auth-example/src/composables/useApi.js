
export const fechApi = async (path, method, headers, body) => {
  const baseURL = 'https://dummyjson.com'
  const rawResponse = await fetch(`${baseURL}${path}`, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  });
  return rawResponse
}
