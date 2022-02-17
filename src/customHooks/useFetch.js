import { useCallback } from "react"

const useFetch = ( ) => {
  const API_URL = 'http://localhost:1337';

  const doFetch = useCallback(async (ressource, method, postData) => {
    console.log('useFetch ressource: ', ressource);
    console.log('useFetch method: ', method);
    console.log('useFetch postData: ', postData);
    const response = await fetch(`${API_URL}/${ressource}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });
    const responseData = await response.json();
    return responseData;
 }, []);

  return { doFetch };
}

export default useFetch;