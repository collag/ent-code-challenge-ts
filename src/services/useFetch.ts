import { useState, useEffect } from "react";

//Custom hook for getting api data
const useFetch = (url:string) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setApiData(data);
    };
    getData();
  },[url]);
  return [apiData];
};

export default useFetch;

