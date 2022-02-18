import { useCallback } from "react";
import { getLocalToken } from "../App";

const useFetchPrivate = ( ) => {
  const API_URL = 'http://localhost:1337';
  const token = getLocalToken();


  const doFetchPrivate = useCallback(async (ressource, method, postData) => {
    console.log('just postdata', postData);
    const response = await fetch(`${API_URL}/${ressource}`, {
      method: method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });
    const responseData = await response.json();
    return responseData;
 }, []);

  return { doFetchPrivate };
}

export default useFetchPrivate;