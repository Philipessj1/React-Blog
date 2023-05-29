import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
  
    if (res.ok)  setData(await data); 
    else throw new Error(`Could not fetch the data!`);
  }

  useEffect(() => {
    handleFetchData()
      .catch(err => setError(err.message));
  },[url]);

  return { data, error };
}

export default useFetch;