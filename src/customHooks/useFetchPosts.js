import { useCallback } from "react";
import { getLocalToken } from "../App";

const useFetchPosts = ( ) => {
  const API_URL = 'http://localhost:1337';
  const token = getLocalToken();


  const doFetchPosts = useCallback(async (ressource, method) => {
    console.log('useFetchPosts method: ', method);
    const response = await fetch(`${API_URL}/${ressource}`, {
      method: method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    const responseData = await response.json();
    return responseData;
 }, []);

  return { doFetchPosts };
}

export default useFetchPosts;